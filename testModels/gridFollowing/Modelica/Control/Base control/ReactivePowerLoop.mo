within Dynawo.Electrical.Controls.Converters.BaseControls;

model ReactivePowerLoop
  import Modelica;
  import Dynawo;
  //General parameters
  parameter Types.PerUnit Kpv;
  parameter Types.PerUnit Kiv;
  parameter Types.Time Tlpf "Time constant of low pass filter";
  //  parameter Types.PerUnit IqmaxPu;
  parameter Types.PerUnit InomPu "nominal converter current in pu";
  parameter Types.PerUnit IP0Pu;

//Initial values
  parameter Types.PerUnit UConv0Pu;
  parameter Types.PerUnit UConvRef0Pu;
  parameter Types.PerUnit QGen0Pu;
  parameter Types.PerUnit QGenRef0Pu;
  parameter Boolean VQControlSwicth0;
  
  Modelica.Blocks.Interfaces.RealInput UConvPu(start=UConv0Pu) annotation(
    Placement(visible = true, transformation(origin = {-150, 60}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 100}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput UConvRefPu(start=UConvRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {-150, 30}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 50}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput QGenPu(start=QGen0Pu) annotation(
    Placement(visible = true, transformation(origin = {-150, -30}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, -50}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput QGenRefPu(start=QGenRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {-150, -60}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, -100}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.BooleanInput VQControlSwicth(start=VQControlSwicth0) annotation(
    Placement(visible = true, transformation(origin = {-150, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {-110, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput iqRefPu annotation(
    Placement(visible = true, transformation(origin = {150, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0), iconTransformation(origin = {110, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  
  Modelica.Blocks.Logical.Switch switch1 annotation(
    Placement(visible = true, transformation(origin = {-34, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Nonlinear.Limiter limiter(uMax = InomPu, uMin = -InomPu)  annotation(
    Placement(visible = true, transformation(origin = {119, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Gain gain(k = Kpv)  annotation(
    Placement(visible = true, transformation(origin = {-2, 46}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Continuous.FirstOrder firstOrder(T = Tlpf, y_start = UConv0Pu)  annotation(
    Placement(visible = true, transformation(origin = {-110, 60}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Continuous.FirstOrder firstOrder1(T = Tlpf, y_start = QGen0Pu)  annotation(
    Placement(visible = true, transformation(origin = {-110, -30}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Feedback feedback annotation(
    Placement(visible = true, transformation(origin = {-72, 60}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Feedback feedback1 annotation(
    Placement(visible = true, transformation(origin = {-74, -30}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Add add annotation(
    Placement(visible = true, transformation(origin = {43, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Continuous.Integrator integrator(k = Kiv)  annotation(
    Placement(visible = true, transformation(origin = {-1, -18}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Sources.Constant iq1maxPu(k = (InomPu^2 - IP0Pu^2)^0.5) annotation(
    Placement(visible = true, transformation(origin = {-151, -100}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Math.Gain gain1(k = -1) annotation(
    Placement(visible = true, transformation(origin = {-34, -100}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Nonlinear.VariableLimiter variableLimiter annotation(
    Placement(visible = true, transformation(origin = {83, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
equation
  connect(firstOrder.y, feedback.u1) annotation(
    Line(points = {{-99, 60}, {-80, 60}}, color = {0, 0, 127}));
  connect(firstOrder1.y, feedback1.u1) annotation(
    Line(points = {{-99, -30}, {-82, -30}}, color = {0, 0, 127}));
  connect(feedback.y, switch1.u1) annotation(
    Line(points = {{-63, 60}, {-59.5, 60}, {-59.5, 8}, {-46, 8}}, color = {0, 0, 127}));
  connect(feedback1.y, switch1.u3) annotation(
    Line(points = {{-65, -30}, {-59.5, -30}, {-59.5, -8}, {-46, -8}}, color = {0, 0, 127}));
  connect(switch1.y, gain.u) annotation(
    Line(points = {{-23, 0}, {-20, 0}, {-20, 46}, {-14, 46}}, color = {0, 0, 127}));
  connect(QGenPu, firstOrder1.u) annotation(
    Line(points = {{-150, -30}, {-122, -30}}, color = {0, 0, 127}));
  connect(QGenRefPu, feedback1.u2) annotation(
    Line(points = {{-150, -60}, {-74, -60}, {-74, -38}}, color = {0, 0, 127}));
  connect(UConvPu, firstOrder.u) annotation(
    Line(points = {{-150, 60}, {-122, 60}}, color = {0, 0, 127}));
  connect(UConvRefPu, feedback.u2) annotation(
    Line(points = {{-150, 30}, {-72, 30}, {-72, 52}}, color = {0, 0, 127}));
  connect(VQControlSwicth, switch1.u2) annotation(
    Line(points = {{-150, 0}, {-46, 0}}, color = {255, 0, 255}));
  connect(limiter.y, iqRefPu) annotation(
    Line(points = {{130, 0}, {150, 0}}, color = {0, 0, 127}));
  connect(gain.y, add.u1) annotation(
    Line(points = {{9, 46}, {21, 46}, {21, 6}, {31, 6}}, color = {0, 0, 127}));
  connect(switch1.y, integrator.u) annotation(
    Line(points = {{-23, 0}, {-20, 0}, {-20, -18}, {-13, -18}}, color = {0, 0, 127}));
  connect(integrator.y, add.u2) annotation(
    Line(points = {{10, -18}, {21, -18}, {21, -5}, {31, -5}, {31, -6}}, color = {0, 0, 127}));
  connect(iq1maxPu.y, gain1.u) annotation(
    Line(points = {{-151, -100}, {-46, -100}}, color = {0, 0, 127}));
  connect(variableLimiter.y, limiter.u) annotation(
    Line(points = {{94, 0}, {107, 0}}, color = {0, 0, 127}));
  connect(gain1.y, variableLimiter.limit2) annotation(
    Line(points = {{-23, -100}, {65, -100}, {65, -8}, {71, -8}}, color = {0, 0, 127}));
  connect(iq1maxPu.y, variableLimiter.limit1) annotation(
    Line(points = {{-151, -100}, {-60, -100}, {-60, -60}, {60, -60}, {60, 8}, {71, 8}}, color = {0, 0, 127}));
  connect(add.y, variableLimiter.u) annotation(
    Line(points = {{54, 0}, {71, 0}}, color = {0, 0, 127}));
  annotation(
    Icon(coordinateSystem(grid = {1, 1})),
    preferredView = "diagram",
    Diagram(coordinateSystem(grid = {1, 1}, extent = {{-140, -140}, {140, 140}})));
end ReactivePowerLoop;
