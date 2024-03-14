within Dynawo.Electrical.Controls.Converters.BaseControls;

model ReactivePowerLoop
  import Modelica;
  import Dynawo;
  //General parameters
  parameter Types.PerUnit Kpv;
  parameter Types.PerUnit Kiv;
  parameter Types.Time Tlpf "Time constant of low pass filter";
  parameter Types.PerUnit InomPu;
  //Initial values
  parameter Types.PerUnit UConvRef0Pu;
  parameter Types.PerUnit UConv0Pu;
  parameter Types.PerUnit IConv0Pu;
  parameter Types.PerUnit iqConv0Pu;
  parameter Types.PerUnit idConv0Pu;
  
  Modelica.Blocks.Interfaces.RealInput UConvPu(start = UConv0Pu) annotation(
    Placement(transformation(origin = {-150, 0}, extent = {{-10, -10}, {10, 10}}), iconTransformation(origin = {-111, -50}, extent = {{-10, -10}, {10, 10}})));
  Modelica.Blocks.Interfaces.RealInput UConvRefPu(start = UConvRef0Pu) annotation(
    Placement(transformation(origin = {-150, -39}, extent = {{-10, -10}, {10, 10}}), iconTransformation(origin = {-111, 50}, extent = {{-10, -10}, {10, 10}})));
  Modelica.Blocks.Interfaces.RealOutput iqRefPu(start = iqConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {150, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Gain gain(k = Kpv) annotation(
    Placement(visible = true, transformation(origin = {1, 20}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Feedback feedback annotation(
    Placement(visible = true, transformation(origin = {-72, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Add add annotation(
    Placement(transformation(origin = {62, 0}, extent = {{-10, -10}, {10, 10}})));
  Modelica.Blocks.Continuous.Integrator integrator(k = Kiv, y_start = iqConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-1, -19}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Continuous.FirstOrder firstOrder(T = Tlpf, k = 1, y_start = UConv0Pu) annotation(
    Placement(transformation(origin = {-110, 0}, extent = {{-10, -10}, {10, 10}})));
  NonElectrical.Blocks.NonLinear.VariableLimiter variableLimiter annotation(
    Placement(transformation(origin = {104, 0}, extent = {{-10, -10}, {10, 10}})));
  ReactiveCurrentLimiter reactiveCurrentLimiter(InomPu= InomPu, idConv0Pu = idConv0Pu, iqConv0Pu= iqConv0Pu) annotation(
    Placement(transformation(origin = {-85, -89}, extent = {{-31, -31}, {31, 31}})));
  Modelica.Blocks.Sources.Constant const(k = 0) annotation(
    Placement(transformation(origin = {-151, 60}, extent = {{-10, -10}, {10, 10}})));
  Modelica.Blocks.Interfaces.BooleanInput freeze annotation(
    Placement(transformation(origin = {-154.5, 29.5}, extent = {{-14.5, -14.5}, {14.5, 14.5}}), iconTransformation(origin = {-111, 0}, extent = {{-10, -10}, {10, 10}})));
  Modelica.Blocks.Logical.Switch switch1 annotation(
    Placement(transformation(origin = {-30, 0}, extent = {{-10, -10}, {10, 10}})));
  NonElectrical.Blocks.NonLinear.VariableLimiter variableLimiter1 annotation(
    Placement(transformation(origin = {32, -18}, extent = {{-10, -10}, {10, 10}})));
  Modelica.Blocks.Interfaces.RealInput idConvPu(start = idConv0Pu) annotation(
    Placement(transformation(origin = {-150, -90}, extent = {{-10, -10}, {10, 10}}), iconTransformation(origin = {0, 111}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));
equation
  connect(gain.y, add.u1) annotation(
    Line(points = {{12, 20}, {21, 20}, {21, 6}, {50, 6}}, color = {0, 0, 127}));
  connect(firstOrder.y, feedback.u1) annotation(
    Line(points = {{-99, 0}, {-80, 0}}, color = {0, 0, 127}));
  connect(variableLimiter.y, iqRefPu) annotation(
    Line(points = {{115, 0}, {150, 0}}, color = {0, 0, 127}));
  connect(add.y, variableLimiter.u) annotation(
    Line(points = {{73, 0}, {92, 0}}, color = {0, 0, 127}));
  connect(reactiveCurrentLimiter.Iqmax, variableLimiter.limit1) annotation(
    Line(points = {{-51, -73.5}, {76, -73.5}, {76, 8}, {92, 8}}, color = {0, 0, 127}));
  connect(reactiveCurrentLimiter.Iqmin, variableLimiter.limit2) annotation(
    Line(points = {{-51, -105}, {80, -105}, {80, -8}, {92, -8}}, color = {0, 0, 127}));
  connect(feedback.y, switch1.u3) annotation(
    Line(points = {{-63, 0}, {-55, 0}, {-55, -8}, {-42, -8}}, color = {0, 0, 127}));
  connect(switch1.y, gain.u) annotation(
    Line(points = {{-19, 0}, {-17, 0}, {-17, 20}, {-11, 20}}, color = {0, 0, 127}));
  connect(switch1.y, integrator.u) annotation(
    Line(points = {{-19, 0}, {-17, 0}, {-17, -19}, {-13, -19}}, color = {0, 0, 127}));
  connect(freeze, switch1.u2) annotation(
    Line(points = {{-154.5, 29.5}, {-50, 29.5}, {-50, 0}, {-42, 0}}, color = {255, 0, 255}));
  connect(const.y, switch1.u1) annotation(
    Line(points = {{-140, 60}, {-46, 60}, {-46, 8}, {-42, 8}}, color = {0, 0, 127}));
  connect(variableLimiter1.y, add.u2) annotation(
    Line(points = {{43, -18}, {46, -18}, {46, -6}, {50, -6}}, color = {0, 0, 127}));
  connect(integrator.y, variableLimiter1.u) annotation(
    Line(points = {{10, -19}, {20, -19}, {20, -18}}, color = {0, 0, 127}));
  connect(reactiveCurrentLimiter.Iqmax, variableLimiter1.limit1) annotation(
    Line(points = {{-51, -73}, {11, -73}, {11, -10}, {20, -10}}, color = {0, 0, 127}));
  connect(reactiveCurrentLimiter.Iqmin, variableLimiter1.limit2) annotation(
    Line(points = {{-51, -105}, {15, -105}, {15, -26}, {20, -26}}, color = {0, 0, 127}));
  connect(idConvPu, reactiveCurrentLimiter.idConvPu) annotation(
    Line(points = {{-150, -90}, {-119, -90}, {-119, -89}}, color = {0, 0, 127}));
  connect(UConvRefPu, feedback.u2) annotation(
    Line(points = {{-150, -39}, {-72, -39}, {-72, -8}}, color = {0, 0, 127}));
  connect(UConvPu, firstOrder.u) annotation(
    Line(points = {{-150, 0}, {-122, 0}}, color = {0, 0, 127}));
  annotation(
    Icon(coordinateSystem(grid = {1, 1})),
    preferredView = "diagram",
    Diagram(coordinateSystem(grid = {1, 1}, extent = {{-140, -140}, {140, 140}})));
end ReactivePowerLoop;
