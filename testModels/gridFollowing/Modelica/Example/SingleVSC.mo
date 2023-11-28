within Dynawo.Examples.GridFollowing_v4;

model SingleVSC_v4
  import Dynawo;
  import Modelica;
  Dynawo.Examples.GridFollowing_v4.InitSingleVSC_v4 SingleVSC_INIT;
  
  Dynawo.Electrical.Buses.InfiniteBusWithImpedance infiniteBusWithImpedance(RPu = SingleVSC_INIT.RInfPu, UBus0Pu = SingleVSC_INIT.UBus0Pu, UPhaseBus0 = SingleVSC_INIT.UPhaseBus0, XPu = SingleVSC_INIT.XInfPu, iTerminal0Pu = -SingleVSC_INIT.iTerminal0Pu, uTerminal0Pu = SingleVSC_INIT.uTerminal0Pu) annotation(
    Placement(visible = true, transformation(origin = {202, -14}, extent = {{-20, -20}, {20, 20}}, rotation = 270)));
  
  Dynawo.Electrical.Lines.Line line(BPu = SingleVSC_INIT.BLinePu, GPu = SingleVSC_INIT.GLinePu, RPu = SingleVSC_INIT.RLinePu, XPu = SingleVSC_INIT.XLinePu) annotation(
    Placement(visible = true, transformation(origin = {150, -14}, extent = {{-30, -30}, {30, 30}}, rotation = 0)));
  
  Dynawo.Electrical.Sources.ConverterGFL_v4 converterGFL_v4(SNom = SingleVSC_INIT.SNom, R = SingleVSC_INIT.R, L = SingleVSC_INIT.L, Rc = SingleVSC_INIT.Rc, Xc = SingleVSC_INIT.Xc, ratioTr = SingleVSC_INIT.ratioTr, omegaNom = SingleVSC_INIT.omegaNom, omegaPLL0Pu = SingleVSC_INIT.omegaPLL0Pu, thetaPLL0Pu = SingleVSC_INIT.thetaPLL0Pu, PGen0Pu = SingleVSC_INIT.PGen0Pu, QGen0Pu = SingleVSC_INIT.QGen0Pu, uPcc0Pu = SingleVSC_INIT.uPcc0Pu, iPcc0Pu = SingleVSC_INIT.iPcc0Pu, uConv0Pu = SingleVSC_INIT.uConv0Pu, UConv0Pu = SingleVSC_INIT.UConv0Pu, idPcc0Pu = SingleVSC_INIT.idPcc0Pu, iqPcc0Pu = SingleVSC_INIT.iqPcc0Pu, udPcc0Pu = SingleVSC_INIT.udPcc0Pu, uqPcc0Pu = SingleVSC_INIT.uqPcc0Pu, idConv0Pu = SingleVSC_INIT.idConv0Pu, iqConv0Pu = SingleVSC_INIT.iqConv0Pu, udConvRef0Pu = SingleVSC_INIT.udConvRef0Pu, uqConvRef0Pu = SingleVSC_INIT.uqConvRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {82, -14}, extent = {{-24, -24}, {24, 24}}, rotation = 0)));
  
  Dynawo.Electrical.Controls.Converters.BaseControls.CurrentLoopGFL currentLoopGFL(Kic = SingleVSC_INIT.Kic, Kpc = SingleVSC_INIT.Kpc, L = SingleVSC_INIT.L, R = SingleVSC_INIT.R, idConv0Pu = SingleVSC_INIT.idConv0Pu, iqConv0Pu = SingleVSC_INIT.iqConv0Pu, omegaPLL0Pu = SingleVSC_INIT.omegaPLL0Pu, ratioTr = SingleVSC_INIT.ratioTr, udConvRef0Pu = SingleVSC_INIT.udConvRef0Pu, udPcc0Pu = SingleVSC_INIT.udPcc0Pu, uqConvRef0Pu = SingleVSC_INIT.uqConvRef0Pu, uqPcc0Pu = SingleVSC_INIT.uqPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {-4, -26}, extent = {{-20, -20}, {20, 20}}, rotation = 0)));
  
  Dynawo.Electrical.Controls.Converters.BaseControls.ActivePowerLoop_v4 activePowerLoop_v4(Kpp = SingleVSC_INIT.Kpp, Kip = SingleVSC_INIT.Kip, Tlpf = SingleVSC_INIT.Tlpf, PGenRef0Pu = SingleVSC_INIT.PGenRef0Pu, PGen0Pu = SingleVSC_INIT.PGen0Pu, idConv0Pu = SingleVSC_INIT.idConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-66, -4}, extent = {{-20, -20}, {20, 20}}, rotation = 0)));
  
  Modelica.Blocks.Sources.Step PGenRefPu(height = -0.05, offset = SingleVSC_INIT.PGenRef0Pu, startTime = 0.2) annotation(
    Placement(visible = true, transformation(origin = {-156, 6}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  
  Modelica.Blocks.Sources.Step UConvRefPu(height = 0, offset = SingleVSC_INIT.UConvRef0Pu, startTime = 0) annotation(
    Placement(visible = true, transformation(origin = {-158, -48}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  
  Modelica.Blocks.Sources.Constant omegaRef(k = SingleVSC_INIT.omegaRef0) annotation(
    Placement(visible = true, transformation(origin = {-156, 56}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Dynawo.Electrical.Controls.PLL.PLLGFL pllgfl(Ki = SingleVSC_INIT.KiPLL, Kp = SingleVSC_INIT.KpPLL, omegaPLL0Pu = SingleVSC_INIT.omegaPLL0Pu, omegaRef0 = SingleVSC_INIT.omegaRef0, thetaPLL0Pu = SingleVSC_INIT.thetaPLL0Pu, u0Pu = SingleVSC_INIT.uPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {-63, 63}, extent = {{-15, -15}, {15, 15}}, rotation = 0)));
  Dynawo.Electrical.Controls.Converters.BaseControls.ReactivePowerLoop_v4 reactivePowerLoop_v4(Kpv=SingleVSC_INIT.Kpv, Kiv=SingleVSC_INIT.Kiv , Tlpf=SingleVSC_INIT.Tlpf , UConv0Pu=SingleVSC_INIT.UConv0Pu, UConvRef0Pu=SingleVSC_INIT.UConvRef0Pu, iqConv0Pu=SingleVSC_INIT.iqConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-66, -58}, extent = {{-18, -18}, {18, 18}}, rotation = 0)));
equation
  line.switchOffSignal1.value = false;
  line.switchOffSignal2.value = false;
  converterGFL_v4.switchOffSignal1.value = false;
  converterGFL_v4.switchOffSignal2.value = false;
  converterGFL_v4.switchOffSignal3.value = false;
  connect(converterGFL_v4.terminal, line.terminal1) annotation(
    Line(points = {{108, -14}, {120, -14}}, color = {0, 0, 255}));
  connect(converterGFL_v4.udPccPu, currentLoopGFL.udPccPu) annotation(
    Line(points = {{89, -40}, {89, -90.6}, {-10, -90.6}, {-10, -48}}, color = {0, 0, 127}));
  connect(converterGFL_v4.idConvPu, currentLoopGFL.idConvPu) annotation(
    Line(points = {{65, -40}, {65, -60.6}, {10, -60.6}, {10, -48}}, color = {0, 0, 127}));
  connect(converterGFL_v4.iqConvPu, currentLoopGFL.iqConvPu) annotation(
    Line(points = {{75, -40}, {75, -74.6}, {2, -74.6}, {2, -48}}, color = {0, 0, 127}));
  connect(currentLoopGFL.udConvRefPu, converterGFL_v4.udConvRefPu) annotation(
    Line(points = {{18, -6}, {18, -21}, {56, -21}}, color = {0, 0, 127}));
  connect(currentLoopGFL.uqConvRefPu, converterGFL_v4.uqConvRefPu) annotation(
    Line(points = {{18, -46}, {18, -33}, {56, -33}}, color = {0, 0, 127}));
  connect(activePowerLoop_v4.idRefPu, currentLoopGFL.idConvRefPu) annotation(
    Line(points = {{-44, -4}, {-34, -4}, {-34, -6}, {-26, -6}}, color = {0, 0, 127}));
  connect(converterGFL_v4.PGenPu, activePowerLoop_v4.PGenPu) annotation(
    Line(points = {{108, 5}, {114, 5}, {114, 112}, {-194, 112}, {-194, -14}, {-88, -14}}, color = {0, 0, 127}));
  connect(converterGFL_v4.uqPccPu, currentLoopGFL.uqPccPu) annotation(
    Line(points = {{99, -40}, {99, -104}, {-18, -104}, {-18, -48}}, color = {0, 0, 127}));
  connect(PGenRefPu.y, activePowerLoop_v4.PGenRefPu) annotation(
    Line(points = {{-145, 6}, {-88, 6}}, color = {0, 0, 127}));
  connect(line.terminal2, infiniteBusWithImpedance.terminal) annotation(
    Line(points = {{180, -14}, {202, -14}}, color = {0, 0, 255}));
  connect(pllgfl.omegaPLLPu, currentLoopGFL.omegaPLLPu) annotation(
    Line(points = {{-46.5, 70.5}, {-14, 70.5}, {-14, 16}, {-38, 16}, {-38, -26}, {-26, -26}}, color = {0, 0, 127}));
  connect(omegaRef.y, pllgfl.omegaRef) annotation(
    Line(points = {{-145, 56}, {-79.5, 56}}, color = {0, 0, 127}));
  connect(converterGFL_v4.uPccPu, pllgfl.uPu) annotation(
    Line(points = {{70, 12}, {70, 100}, {-102, 100}, {-102, 70.5}, {-79.5, 70.5}}, color = {85, 170, 255}));
  connect(pllgfl.thetaPLLPu, converterGFL_v4.thetaPLLPu) annotation(
    Line(points = {{-46.5, 55.5}, {26, 55.5}, {26, -7}, {56, -7}}, color = {0, 0, 127}));
  connect(pllgfl.omegaPLLPu, converterGFL_v4.omegaPLLPu) annotation(
    Line(points = {{-46.5, 70.5}, {28, 70.5}, {28, 5}, {56, 5}}, color = {0, 0, 127}));
  connect(UConvRefPu.y, reactivePowerLoop_v4.UConvRefPu) annotation(
    Line(points = {{-147, -48}, {-86, -48}}, color = {0, 0, 127}));
  connect(converterGFL_v4.UConvPu, reactivePowerLoop_v4.UConvPu) annotation(
    Line(points = {{108, -26}, {120, -26}, {120, -128}, {-112, -128}, {-112, -40}, {-86, -40}}, color = {0, 0, 127}));
  connect(reactivePowerLoop_v4.iqRefPu, currentLoopGFL.iqConvRefPu) annotation(
    Line(points = {{-46, -58}, {-34, -58}, {-34, -46}, {-26, -46}}, color = {0, 0, 127}));
  annotation(
    Diagram(coordinateSystem(extent = {{-100, -100}, {100, 100}})));
end SingleVSC_v4;
