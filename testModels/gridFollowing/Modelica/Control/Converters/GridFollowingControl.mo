within Dynawo.Electrical.Controls.Converters;

model GridFollowingControl
  import Modelica;
  import Dynawo;
  //Model parameters
  parameter Types.ApparentPowerModule SNom "Converter nominal apparent power";
  parameter Types.AngularVelocity omegaNom;
  parameter Types.PerUnit R "Transformer resistance in pu (base UNom, SNom)";
  parameter Types.PerUnit L "Transformer inductance in pu (base UNom, SNom)";
  parameter Types.PerUnit Rc "resistance value from converter terminal to PCC in pu (base UNom, SNom)";
  parameter Types.PerUnit Xc "reactance value from converter terminal to PCC in pu (base UNom, SNom)";
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
  parameter Types.ComplexCurrentPu iPcc0Pu;
  parameter Types.AngularVelocity omegaRef0;
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
  parameter Types.PerUnit idPcc0Pu;
  parameter Types.PerUnit iqPcc0Pu;
  parameter Types.PerUnit idConv0Pu;
  parameter Types.PerUnit iqConv0Pu;
  parameter Types.PerUnit udPcc0Pu;
  parameter Types.PerUnit uqPcc0Pu;
  parameter Types.PerUnit udConvRef0Pu;
  parameter Types.PerUnit uqConvRef0Pu;
  
  Dynawo.Electrical.Controls.PLL.PLLGFL pllgfl(Ki = KiPLL, Kp = KpPLL, omegaPLL0Pu = omegaPLL0Pu, omegaRef0 = omegaRef0, thetaPLL0Pu = thetaPLL0Pu, u0Pu = uPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {-61.5, 110.5}, extent = {{-16.5, -16.5}, {16.5, 16.5}}, rotation = 0)));
  Dynawo.Electrical.Controls.Converters.BaseControls.ReactivePowerLoop_v4 reactivePowerLoop_v4(Kiv = Kiv, Kpv = Kpv, Tlpf = Tlpf, UConv0Pu = UConv0Pu, UConvRef0Pu = UConvRef0Pu, iqConv0Pu = iqConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-60, -12}, extent = {{-26, -26}, {26, 26}}, rotation = 0)));

  Dynawo.Electrical.Controls.Converters.BaseControls.ActivePowerLoop_v4 activePowerLoop_v4(Kip = Kip, Kpp = Kpp, PGen0Pu = PGen0Pu, PGenRef0Pu = PGenRef0Pu, Tlpf = Tlpf, idConv0Pu = idConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-60, 42}, extent = {{-26, -26}, {26, 26}}, rotation = 0)));
  
  Dynawo.Electrical.Controls.Converters.BaseControls.CurrentLoopGFL currentLoopGFL(Kic = Kic, Kpc = Kpc, L = L, R = R, idConv0Pu = idConv0Pu, iqConv0Pu = iqConv0Pu, omegaPLL0Pu = omegaPLL0Pu, ratioTr = ratioTr, udConvRef0Pu = udConvRef0Pu, udPcc0Pu = udPcc0Pu, uqConvRef0Pu = uqConvRef0Pu, uqPcc0Pu = uqPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {49, 15}, extent = {{-27, -27}, {27, 27}}, rotation = 0)));
  
  Modelica.Blocks.Interfaces.RealInput PGenRefPu(start = PGenRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {-130, 55}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput omegaRef(start = omegaRef0) annotation(
    Placement(visible = true, transformation(origin = {-130, 102}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 70}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput UConvRefPu(start = UConvRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {-130, -4}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, -70}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput udConvRefPu(start= udConvRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {130, 42}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, -31}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput thetaPLLPu(start = thetaPLL0Pu) annotation(
    Placement(visible = true, transformation(origin = {130, 102}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, 31}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput omegaPLLPu(start = omegaPLL0Pu) annotation(
    Placement(visible = true, transformation(origin = {130, 119}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, 80}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput uqConvRefPu(start= uqConvRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {130, -12}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, -80}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.ComplexBlocks.Interfaces.ComplexInput uPccPu(re(start = uPcc0Pu.re), im(start = uPcc0Pu.im)) annotation(
    Placement(visible = true, transformation(origin = {-127, 119}, extent = {{-7, -7}, {7, 7}}, rotation = 0), iconTransformation(origin = {-70, 110}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));
  Modelica.Blocks.Interfaces.RealInput PGenPu(start = PGen0Pu) annotation(
    Placement(visible = true, transformation(origin = {-130, 29}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {50, 110}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));
  Modelica.Blocks.Interfaces.RealInput udPccPu(start = udPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {-130, -50}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-70, -110}, extent = {{-10, -10}, {10, 10}}, rotation = 90)));
  Modelica.Blocks.Interfaces.RealInput UConvPu(start = UConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-130, 9}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-20, 110}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));
  Modelica.Blocks.Interfaces.RealInput uqPccPu(start = uqPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {-130, -70}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-30, -110}, extent = {{10, -10}, {-10, 10}}, rotation = 270)));
  Modelica.Blocks.Interfaces.RealInput idConvPu(start = idConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-130, -90}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {30, -110}, extent = {{-10, -10}, {10, 10}}, rotation = 90)));
  Modelica.Blocks.Interfaces.RealInput iqConvPu(start = iqConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-130, -110}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {69, -110}, extent = {{-10, -10}, {10, 10}}, rotation = 90)));
equation
  connect(reactivePowerLoop_v4.iqRefPu, currentLoopGFL.iqConvRefPu) annotation(
    Line(points = {{-31.4, -12}, {18.6, -12}}, color = {0, 0, 127}));
  connect(pllgfl.omegaPLLPu, currentLoopGFL.omegaPLLPu) annotation(
    Line(points = {{-43.35, 118.75}, {-14.35, 118.75}, {-14.35, 14.75}, {18.65, 14.75}}, color = {0, 0, 127}));
  connect(activePowerLoop_v4.idRefPu, currentLoopGFL.idConvRefPu) annotation(
    Line(points = {{-31.4, 42}, {18.6, 42}}, color = {0, 0, 127}));
  connect(omegaRef, pllgfl.omegaRef) annotation(
    Line(points = {{-130, 102}, {-80, 102}}, color = {0, 0, 127}));
  connect(PGenRefPu, activePowerLoop_v4.PGenRefPu) annotation(
    Line(points = {{-130, 55}, {-89, 55}}, color = {0, 0, 127}));
  connect(UConvRefPu, reactivePowerLoop_v4.UConvRefPu) annotation(
    Line(points = {{-130, -4}, {-89, -4}}, color = {0, 0, 127}));
  connect(pllgfl.omegaPLLPu, omegaPLLPu) annotation(
    Line(points = {{-43.35, 118.75}, {129.65, 118.75}}, color = {0, 0, 127}));
  connect(pllgfl.thetaPLLPu, thetaPLLPu) annotation(
    Line(points = {{-43.35, 102.25}, {129.65, 102.25}}, color = {0, 0, 127}));
  connect(currentLoopGFL.udConvRefPu, udConvRefPu) annotation(
    Line(points = {{78.7, 42}, {129.7, 42}}, color = {0, 0, 127}));
  connect(currentLoopGFL.uqConvRefPu, uqConvRefPu) annotation(
    Line(points = {{78.7, -12}, {129.7, -12}}, color = {0, 0, 127}));
  connect(uPccPu, pllgfl.uPu) annotation(
    Line(points = {{-127, 119}, {-80, 119}}, color = {85, 170, 255}));
  connect(PGenPu, activePowerLoop_v4.PGenPu) annotation(
    Line(points = {{-130, 29}, {-89, 29}}, color = {0, 0, 127}));
  connect(UConvPu, reactivePowerLoop_v4.UConvPu) annotation(
    Line(points = {{-130, 9}, {-89, 9}}, color = {0, 0, 127}));
  connect(udPccPu, currentLoopGFL.udPccPu) annotation(
    Line(points = {{-130, -50}, {41, -50}, {41, -15}}, color = {0, 0, 127}));
  connect(uqPccPu, currentLoopGFL.uqPccPu) annotation(
    Line(points = {{-130, -70}, {31, -70}, {31, -15}, {30, -15}}, color = {0, 0, 127}));
  connect(idConvPu, currentLoopGFL.idConvPu) annotation(
    Line(points = {{-130, -90}, {68, -90}, {68, -15}}, color = {0, 0, 127}));
  connect(iqConvPu, currentLoopGFL.iqConvPu) annotation(
    Line(points = {{-130, -110}, {57, -110}, {57, -15}}, color = {0, 0, 127}));
  annotation(
    Diagram(coordinateSystem(grid = {1, 1}, extent = {{-120, -150}, {120, 150}})),
    preferredView = "diagram",
    Icon(coordinateSystem(grid = {1, 1})));
end GridFollowingControl;
