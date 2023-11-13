within Dynawo.Electrical.Controls.Converters;

model GridFollowingControl
  import Modelica;
  import Dynawo;
  //Model parameters
  parameter Types.ApparentPowerModule Snom "Converter nominal apparent power";
  parameter Types.PerUnit R= 0.005 "Transformer resistance in pu (base UNom, SNom)";
  parameter Types.PerUnit L= 0.15  "Transformer inductance in pu (base UNom, SNom)";
  parameter Types.PerUnit Rc= 0.005 "resistance value from converter terminal to PCC in pu (base UNom, SNom)";
  parameter Types.PerUnit Xc= 0.15  "reactance value from converter terminal to PCC in pu (base UNom, SNom)";
  parameter Types.PerUnit ratioTr "Transformer ratio in p.u (base ...)";
  parameter Types.PerUnit Kpc "Proportional gain of the current loop";
  parameter Types.PerUnit Kic "Integral gain of the current loop";
  parameter Types.Time Tlpf "Time constant of low pass filter";
  parameter Types.PerUnit Kpp "Proportional gain of the active power loop";
  parameter Types.PerUnit Kip "Integral gain of the active power loop";
  parameter Types.PerUnit InomPu "nominal converter current in pu";
  parameter Types.Time T "Time constant in the active power control loop (Trlim in the stepss config file)";
  parameter Types.Frequency didt_min "Minimum of ramp rate limiter in active power loop in [pu/s]";
  parameter Types.Frequency didt_max "Maximum of ramp rate limiter in active power loop in [pu/s]";
  parameter Types.PerUnit Kpv "Proportional gain of the reactive power loop";
  parameter Types.PerUnit Kiv "Integral gain of the reactive power loop";
  parameter Types.Time Tpll "Time constant of PLL to calculate KpPLL and kiPLL (Tau)";
  parameter Types.PerUnit KpPLL;
  parameter Types.PerUnit KiPLL;
  parameter Types.PerUnit Vpllb "vpll1 in the block diagrams: Hysteresis lower limit";
  parameter Types.PerUnit Vpllu "vpll2 in the block diagrams : Hysteresis upper limit";
  parameter Types.PerUnit ImaxPu "Converter maximum current in pu: now set to 1 p.u. (Inom)";
  parameter Types.PerUnit Vs1 "For dynamic voltage support (not used because DVS not modeled)";
  parameter Types.PerUnit Vs2 "For dynamic voltage support (not used because DVS not modeled)";
  parameter Types.PerUnit IqmaxPu "For cases with limited capability of voltage control the minimum between Iqmax and Iq1max is considered (in standard cases set to infinity to consider Iq1max)";
  parameter Boolean VQControlFlag "control strategy: voltage (=true) and reactive power (=false)";
  //Initial values
  parameter Types.ComplexVoltagePu uPcc0Pu "Start value of complex voltage at PCC in pu (base UNom)";
  parameter Types.AngularVelocity omegaNom;
  parameter Types.PerUnit omegaRef0Pu;
  parameter Types.PerUnit omegaPLL0Pu;
  parameter Types.Angle thetaPLL0Pu;
  parameter Types.PerUnit PGenRef0Pu;
  parameter Types.PerUnit PGen0Pu;
  parameter Types.PerUnit QGenRef0Pu;
  parameter Types.PerUnit QGen0Pu;
  parameter Types.ComplexVoltagePu uConv0Pu;
  parameter Types.PerUnit UConvRef0Pu;
  parameter Types.PerUnit UConv0Pu;
  parameter Types.PerUnit IP0Pu;
  parameter Types.PerUnit idConv0Pu;
  parameter Types.PerUnit iqConv0Pu;
  parameter Types.PerUnit udPcc0Pu;
  parameter Types.PerUnit uqPcc0Pu;
  
  Dynawo.Electrical.Controls.PLL.PLL pll(Ki = KiPLL, Kp = KpPLL, OmegaMinPu = 0.5, OmegaMaxPu = 1.5, u0Pu = uPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {-70, 130}, extent = {{-20, -20}, {20, 20}}, rotation = 0)));

  Dynawo.Electrical.Controls.Converters.BaseControls.ActivePowerLoop activePowerLoop(Kpp = Kpp, Kip = Kip, InomPu= InomPu, Tlpf= Tlpf, T=T, didt_min=didt_min, didt_max=didt_max, PGenRef0Pu= PGenRef0Pu, PGen0Pu=PGen0Pu, iqConv0Pu=iqConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-10, 80}, extent = {{-20, -20}, {20, 20}}, rotation = 0)));
 
  Dynawo.Electrical.Controls.Converters.BaseControls.ReactivePowerLoop reactivePowerLoop(Kpv=Kpv , Kiv=Kiv , Tlpf=Tlpf , InomPu= InomPu, IP0Pu= IP0Pu, UConv0Pu=UConv0Pu, UConvRef0Pu=UConvRef0Pu, QGen0Pu=QGen0Pu, QGenRef0Pu=QGenRef0Pu, VQControlSwicth0=VQControlFlag) annotation(
    Placement(visible = true, transformation(origin = {-10, -94}, extent = {{-20, -20}, {20, 20}}, rotation = 0)));
  
  Dynawo.Electrical.Controls.Converters.BaseControls.CurrentLoopGFL currentLoopGFL(Kpc= Kpc, Kic=Kic, L=L, R=R, omegaPLL0Pu= omegaPLL0Pu, udPcc0Pu=udPcc0Pu, uqPcc0Pu=uqPcc0Pu, idConv0Pu=idConv0Pu, iqConv0Pu=iqConv0Pu, ratioTr=ratioTr ) annotation(
    Placement(visible = true, transformation(origin = {60, 0}, extent = {{-20, -20}, {20, 20}}, rotation = 0)));
  
  Modelica.Blocks.Continuous.Integrator integrator(k = omegaNom, y_start = Modelica.ComplexMath.arg(uPcc0Pu)) annotation(
    Placement(visible = true, transformation(origin = {100, 95}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));

  Modelica.Blocks.Math.Feedback feedback2 annotation(
    Placement(visible = true, transformation(origin = {70, 95}, extent = {{-10, 10}, {10, -10}}, rotation = 0)));

//Inputs
  Modelica.ComplexBlocks.Interfaces.ComplexInput uPccPu annotation(
    Placement(visible = true, transformation(origin = {-131, 142}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-70, 110}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));  
  Modelica.Blocks.Interfaces.RealInput omegaRefPu(start = omegaRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {-132, 118}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-31, 110}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));
  Modelica.Blocks.Interfaces.RealInput PGenPu(start = PGen0Pu) "Active power generated by the converter at the PCC in pu (base UNom, SnRef)" annotation(
    Placement(visible = true, transformation(origin = {-131, 80}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 60}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput PGenRefPu(start = PGenRef0Pu) "Reference Active power generated by the converter at the PCC in pu (base UNom, SnRef)" annotation(
    Placement(visible = true, transformation(origin = {-131, 100}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 90}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.BooleanInput VQControlSwicth(start = VQControlFlag) "Boolean signal for control strategy: true voltage control, false reactive power control" annotation(
    Placement(visible = true, transformation(origin = {-132, -94}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 30}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput QGenPu(start = QGen0Pu) "Reactive power generated by the converter at the PCC in pu (base UNom, SnRef)" annotation(
    Placement(visible = true, transformation(origin = {-132, -120}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, -30}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput QGenRefPu(start = QGenRef0Pu) "Reference Reactive power generated by the converter at the PCC in pu (base UNom, SnRef)" annotation(
    Placement(visible = true, transformation(origin = {-132, -140}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput UConvRefPu(start = UConvRef0Pu) "Reference voltage at the converter's terminals in pu (base UNom)" annotation(
    Placement(visible = true, transformation(origin = {-131, -64}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, -60}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput UConvPu(start = UConv0Pu) "Voltage magnitude at the converter's terminals in pu (base UNom)" annotation(
    Placement(visible = true, transformation(origin = {-132, -44}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, -90}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput idConvPu(start = idConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-131, 29}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {30, -111}, extent = {{-10, -10}, {10, 10}}, rotation = 90)));
  Modelica.Blocks.Interfaces.RealInput iqConvPu(start = iqConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-132, 50}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {70, -111}, extent = {{-10, -10}, {10, 10}}, rotation = 90)));
  Modelica.Blocks.Interfaces.RealInput udPccPu(start = udPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {-131, 10}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {30, 110}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));
  Modelica.Blocks.Interfaces.RealInput uqPccPu(start = uqPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {-131, -10}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {70, 110}, extent = {{10, -10}, {-10, 10}}, rotation = 90)));
  // Outputs
  Modelica.Blocks.Interfaces.RealOutput udConvRefPu annotation(
    Placement(visible = true, transformation(origin = {130, 50}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, -31}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput uqConvRefPu annotation(
    Placement(visible = true, transformation(origin = {130, -60}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, -80}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput omegaPLLPu(start=omegaPLL0Pu) annotation(
    Placement(visible = true, transformation(origin = {130, 140}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, 80}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput thetaPLLPu(start = thetaPLL0Pu) annotation(
    Placement(visible = true, transformation(origin = {130, 95}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, 31}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
 Modelica.ComplexBlocks.Interfaces.ComplexInput iPccPu annotation(
    Placement(visible = true, transformation(origin = {-271, -52}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-71, -110}, extent = {{-10, -10}, {10, 10}}, rotation = 90)));
equation
  connect(activePowerLoop.idRefPu, currentLoopGFL.idConvRefPu) annotation(
    Line(points = {{12, 80}, {20, 80}, {20, 20}, {38, 20}}, color = {0, 0, 127}));
  connect(reactivePowerLoop.iqRefPu, currentLoopGFL.iqConvRefPu) annotation(
    Line(points = {{12, -94}, {20, -94}, {20, -20}, {38, -20}}, color = {0, 0, 127}));
  connect(currentLoopGFL.udConvRefPu, udConvRefPu) annotation(
    Line(points = {{82, 20}, {100, 20}, {100, 50}, {130, 50}}, color = {0, 0, 127}));
  connect(currentLoopGFL.uqConvRefPu, uqConvRefPu) annotation(
    Line(points = {{82, -20}, {100, -20}, {100, -60}, {130, -60}}, color = {0, 0, 127}));
  connect(UConvRefPu, reactivePowerLoop.UConvRefPu) annotation(
    Line(points = {{-131, -64}, {-80, -64}, {-80, -84}, {-32, -84}}, color = {0, 0, 127}));
  connect(UConvPu, reactivePowerLoop.UConvPu) annotation(
    Line(points = {{-132, -44}, {-69.5, -44}, {-69.5, -74}, {-32, -74}}, color = {0, 0, 127}));
  connect(omegaRefPu, pll.omegaRefPu) annotation(
    Line(points = {{-132, 118}, {-92, 118}}, color = {0, 0, 127}));
  connect(PGenRefPu, activePowerLoop.PGenRefPu) annotation(
    Line(points = {{-131, 100}, {-32, 100}}, color = {0, 0, 127}));
  connect(PGenPu, activePowerLoop.PGenPu) annotation(
    Line(points = {{-131, 80}, {-32, 80}}, color = {0, 0, 127}));
  connect(QGenPu, reactivePowerLoop.QGenPu) annotation(
    Line(points = {{-132, -120}, {-80, -120}, {-80, -104}, {-32, -104}}, color = {0, 0, 127}));
  connect(QGenRefPu, reactivePowerLoop.QGenRefPu) annotation(
    Line(points = {{-132, -140}, {-70, -140}, {-70, -114}, {-32, -114}}, color = {0, 0, 127}));
  connect(idConvPu, currentLoopGFL.idConvPu) annotation(
    Line(points = {{-131, 29}, {50, 29}, {50, 22}}, color = {0, 0, 127}));
  connect(iqConvPu, currentLoopGFL.iqConvPu) annotation(
    Line(points = {{-132, 50}, {70, 50}, {70, 22}}, color = {0, 0, 127}));
  connect(VQControlSwicth, reactivePowerLoop.VQControlSwicth) annotation(
    Line(points = {{-132, -94}, {-32, -94}}, color = {255, 0, 255}));
  connect(pll.omegaPLLPu, omegaPLLPu) annotation(
    Line(points = {{-48, 140}, {130, 140}}, color = {0, 0, 127}));
  connect(integrator.y, thetaPLLPu) annotation(
    Line(points = {{111, 95}, {130, 95}}, color = {0, 0, 127}));
  connect(uPccPu, pll.uPu) annotation(
    Line(points = {{-131, 142}, {-92, 142}}, color = {85, 170, 255}));
  connect(pll.omegaPLLPu, currentLoopGFL.omegaPLLPu) annotation(
    Line(points = {{-48, 140}, {30, 140}, {30, 0}, {38, 0}}, color = {0, 0, 127}));
  connect(uqPccPu, currentLoopGFL.uqPccPu) annotation(
    Line(points = {{-131, -10}, {-29, -10}, {-29, -41}, {70, -41}, {70, -22}}, color = {0, 0, 127}));
  connect(udPccPu, currentLoopGFL.udPccPu) annotation(
    Line(points = {{-131, 10}, {-21, 10}, {-21, -31}, {50, -31}, {50, -22}}, color = {0, 0, 127}));
  connect(pll.omegaPLLPu, feedback2.u1) annotation(
    Line(points = {{-48, 140}, {50, 140}, {50, 95}, {62, 95}}, color = {0, 0, 127}));
  connect(omegaRefPu, feedback2.u2) annotation(
    Line(points = {{-132, 118}, {-100, 118}, {-100, 107}, {70, 107}, {70, 103}}, color = {0, 0, 127}));
  connect(integrator.u, feedback2.y) annotation(
    Line(points = {{88, 95}, {79, 95}}, color = {0, 0, 127}));
  connect(iqConvPu, activePowerLoop.iqConvPu) annotation(
    Line(points = {{-132, 50}, {-56, 50}, {-56, 64}, {-32, 64}}, color = {0, 0, 127}));
  annotation(
    Diagram(coordinateSystem(grid = {1, 1}, extent = {{-120, -150}, {120, 150}})),
    preferredView = "diagram",
    Icon(coordinateSystem(grid = {1, 1})));
end GridFollowingControl;
