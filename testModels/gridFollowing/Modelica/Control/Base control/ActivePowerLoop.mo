within Dynawo.Electrical.Controls.Converters.BaseControls;

model ActivePowerLoop
  import Modelica;
  import Dynawo;
  //General parameters
  parameter Types.PerUnit Kpp "Proportional gain of the active power loop";
  parameter Types.PerUnit Kip "Integral gain of the active power loop";
  parameter Types.PerUnit InomPu "nominal converter current in pu";
  parameter Types.Time Tlpf "Time constant of low pass filter";
  parameter Types.Time T "Time constant of Id_max limitting loop";
  parameter Types.PerUnit didt_min "minimum of ramp rate limit of of Id_max limitting loop";
  parameter Types.PerUnit didt_max "maximum of ramp rate limit of of Id_max limitting loop";
  //Initial values
  parameter Types.PerUnit PGenRef0Pu;
  parameter Types.PerUnit PGen0Pu;
  parameter Types.PerUnit iqConv0Pu;

    block block1
      extends Modelica.Blocks.Interfaces.SISO;
      parameter Types.PerUnit InomPu ;
    equation
      y = (InomPu^2 - u^2)^0.5
        annotation(preferredView = "diagram", Icon(coordinateSystem(preserveAspectRatio=true, extent={{-5,-5},
              {5,5}})));
    end block1;

  Modelica.Blocks.Interfaces.RealInput PGenRefPu(start = PGenRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {-150, 80}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 100}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput PGenPu(start = PGen0Pu) annotation(
    Placement(visible = true, transformation(origin = {-150, 40}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  
  Modelica.Blocks.Interfaces.RealOutput idRefPu annotation(
    Placement(visible = true, transformation(origin = {150, 30}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Gain gain(k = Kpp)  annotation(
    Placement(visible = true, transformation(origin = {-30, 100}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Continuous.FirstOrder firstOrder(T = Tlpf, k = 1) annotation(
    Placement(visible = true, transformation(origin = {-110, 40}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Add add annotation(
    Placement(visible = true, transformation(origin = {30, 80}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Feedback feedback annotation(
    Placement(visible = true, transformation(origin = {-90, 80}, extent = {{10, 10}, {-10, -10}}, rotation = 180)));
  Modelica.Blocks.Nonlinear.VariableLimiter variableLimiter annotation(
    Placement(visible = true, transformation(origin = {120, 30}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  NonElectrical.Blocks.Continuous.IntegratorVariableLimits integratorVariableLimits(DefaultLimitMax = true, K = Kip) annotation(
    Placement(visible = true, transformation(origin = {-30, 60}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Feedback feedback1 annotation(
    Placement(visible = true, transformation(origin = {-106, -10}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Gain gain1(k = -1) annotation(
    Placement(visible = true, transformation(origin = {58, -10}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  ActivePowerLoop.block1 b1(InomPu = InomPu) annotation(
    Placement(visible = true, transformation(origin = {-128, -10}, extent = {{-5, -5}, {5, 5}}, rotation = 0)));
  Dynawo.NonElectrical.Blocks.NonLinear.LimitedIntegrator limitedIntegrator(K = 1,YMax = InomPu, YMin = -InomPu) annotation(
    Placement(visible = true, transformation(origin = {4, -10}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Gain gain3(k = 1/T) annotation(
    Placement(visible = true, transformation(origin = {-74, -10}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput iqConvPu annotation(
    Placement(visible = true, transformation(origin = {-150, -10}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-111, -78}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Dynawo.NonElectrical.Blocks.NonLinear.StandAloneRampRateLimiter standAloneRampRateLimiter(DuMax = didt_max, DuMin = didt_min, tS = 0.002)  annotation(
    Placement(visible = true, transformation(origin = {-37, -10}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
equation
  connect(firstOrder.y, feedback.u2) annotation(
    Line(points = {{-99, 40}, {-89.531, 40}, {-89.531, 72}, {-90, 72}}, color = {0, 0, 127}));
  connect(gain.y, add.u1) annotation(
    Line(points = {{-19, 100}, {0, 100}, {0, 86}, {18, 86}}, color = {0, 0, 127}));
  connect(feedback.y, gain.u) annotation(
    Line(points = {{-81, 80}, {-59.75, 80}, {-59.75, 100}, {-42, 100}}, color = {0, 0, 127}));
  connect(feedback.u1, PGenRefPu) annotation(
    Line(points = {{-98, 80}, {-150, 80}}, color = {0, 0, 127}));
  connect(firstOrder.u, PGenPu) annotation(
    Line(points = {{-122, 40}, {-150, 40}}, color = {0, 0, 127}));
  connect(idRefPu, variableLimiter.y) annotation(
    Line(points = {{150, 30}, {131, 30}}, color = {0, 0, 127}));
  connect(add.y, variableLimiter.u) annotation(
    Line(points = {{41, 80}, {100.25, 80}, {100.25, 30}, {108, 30}}, color = {0, 0, 127}));
  connect(feedback.y, integratorVariableLimits.u) annotation(
    Line(points = {{-81, 80}, {-59.9, 80}, {-59.9, 60}, {-42, 60}}, color = {0, 0, 127}));
  connect(integratorVariableLimits.y, add.u2) annotation(
    Line(points = {{-19, 60}, {0, 60}, {0, 74}, {18, 74}}, color = {0, 0, 127}));
  connect(gain1.y, integratorVariableLimits.limitMin) annotation(
    Line(points = {{69, -10}, {80, -10}, {80, 22}, {-50, 22}, {-50, 52}, {-42, 52}}, color = {0, 0, 127}));
  connect(gain1.y, variableLimiter.limit2) annotation(
    Line(points = {{69, -10}, {89.5, -10}, {89.5, 22}, {108, 22}}, color = {0, 0, 127}));
  connect(b1.y, feedback1.u1) annotation(
    Line(points = {{-122, -10}, {-114, -10}}, color = {0, 0, 127}));
  connect(iqConvPu, b1.u) annotation(
    Line(points = {{-150, -10}, {-134, -10}}, color = {0, 0, 127}));
  connect(iqConvPu, b1.u) annotation(
    Line(points = {{-150, -10}, {-134, -10}}, color = {0, 0, 127}));
  connect(b1.y, feedback1.u1) annotation(
    Line(points = {{-122, -10}, {-114, -10}}, color = {0, 0, 127}));
  connect(limitedIntegrator.y, variableLimiter.limit1) annotation(
    Line(points = {{15, -10}, {30.5, -10}, {30.5, 38}, {108, 38}}, color = {0, 0, 127}));
  connect(gain1.u, limitedIntegrator.y) annotation(
    Line(points = {{46, -10}, {15, -10}}, color = {0, 0, 127}));
  connect(limitedIntegrator.y, integratorVariableLimits.limitMax) annotation(
    Line(points = {{15, -10}, {20, -10}, {20, 38}, {-54, 38}, {-54, 68}, {-42, 68}}, color = {0, 0, 127}));
  connect(feedback1.y, gain3.u) annotation(
    Line(points = {{-97, -10}, {-97, -11}, {-86, -11}, {-86, -10}}, color = {0, 0, 127}));
  connect(limitedIntegrator.y, feedback1.u2) annotation(
    Line(points = {{15, -10}, {24, -10}, {24, -40}, {-106, -40}, {-106, -18}}, color = {0, 0, 127}));
  connect(gain3.y, standAloneRampRateLimiter.u) annotation(
    Line(points = {{-63, -10}, {-49, -10}}, color = {0, 0, 127}));
  connect(standAloneRampRateLimiter.y, limitedIntegrator.u) annotation(
    Line(points = {{-26, -10}, {-8, -10}}, color = {0, 0, 127}));
  annotation(
    Icon(coordinateSystem(grid = {1, 1})),
    preferredView = "diagram",
    Diagram(coordinateSystem(grid = {1, 1}, extent = {{-140, -140}, {140, 140}})));
end ActivePowerLoop;
