within Dynawo.Electrical.Sources;

model ConverterGFL "Converter model for grid following applications"
  /*
    Model Characteristics: this model is based on the stepss converter model
    - No DC control & DC dynamics
    - No RLC filter (MMC technology) 
    */
  /*
    Equivalent circuit and conventions: 
     __________
    |                 |IConvPu(idConvPu,iqConvPu)                                      1   r  IPccPu (idPccPu, iqPccPu)
    |                 |-->----------------------(R,L)----->--------------------------|   |---->---(PCC terminal)----
    |                 |                                                                                  |   |
    |  DC/AC      |  UConvPu                                                                   |   |       UPccPu                PGenPu =>
    |                 |(udConvPu, uqConvPu)                                                 |   | (udPccPu, uqPccPU)    QGenPu =>
    |                 |                                                                                  |   |
    |_________ |---------------------------------------------------------------------- |   |-------------------------------
    */
  import Modelica;
  import Dynawo;
  parameter Types.ApparentPowerModule SNom "Converter nominal apparent power in MVA";
  parameter Types.PerUnit R "Transformer resistance in pu (base UNom, SNom)";
  parameter Types.PerUnit L "Transformer inductance in pu (base UNom, SNom)";
  parameter Types.PerUnit Rc "resistance value from converter terminal to PCC in pu (base UNom, SNom)";
  parameter Types.PerUnit Xc "reactance value from converter terminal to PCC in pu (base UNom, SNom)";
  parameter Types.PerUnit ratioTr "Transformer ratio (base ...)";
  parameter Types.AngularVelocity omegaNom;
  parameter Types.PerUnit omegaPLL0Pu;
  parameter Types.Angle thetaPLL0Pu "Start value of voltage angle at injector terminal in rad";
  parameter Types.ComplexVoltagePu uConv0Pu;
  parameter Types.PerUnit UConv0Pu;
  parameter Types.PerUnit udConvRef0Pu;
  parameter Types.PerUnit uqConvRef0Pu;
  parameter Types.ActivePowerPu PGen0Pu "Start value of active power in pu (base SnRef) (receptor convention)";
  parameter Types.ReactivePowerPu QGen0Pu "Start value of reactive power in pu (base SnRef) (receptor convention)";
  parameter Types.ComplexVoltagePu uPcc0Pu "Start value of complex voltage at injector terminal in pu (base UNom)";
  parameter Types.ComplexCurrentPu iPcc0Pu "Start value of complex current at injector terminal in pu (base UNom, SnRef) (receptor convention)";
  parameter Types.PerUnit udPcc0Pu;
  parameter Types.PerUnit uqPcc0Pu;
  parameter Types.PerUnit idPcc0Pu;
  parameter Types.PerUnit iqPcc0Pu;
  parameter Types.PerUnit idConv0Pu;
  parameter Types.PerUnit iqConv0Pu;
  // Inputs:
  // Terminal connection
  Dynawo.Connectors.ACPower terminal(V(re(start = uPcc0Pu.re), im(start = uPcc0Pu.im)), i(re(start = iPcc0Pu.re), im(start = iPcc0Pu.im))) "Connector used to connect the injector to the grid" annotation(
    Placement(visible = true, transformation(origin = {69, 25}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {110, 0}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  // Inputs:
  Modelica.Blocks.Interfaces.RealInput omegaPLLPu(start = omegaPLL0Pu) "Converter's frequency in pu (base omegaNom)" annotation(
    Placement(visible = true, transformation(origin = {-60, 40}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {-110, 80}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput thetaPLLPu(start = thetaPLL0Pu) "Converter's angle in rad" annotation(
    Placement(visible = true, transformation(origin = {-60, 20}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {-110, 30}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput udConvRefPu(start = udConvRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {-60, -20}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {-110, -30}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealInput uqConvRefPu(start = uqConvRef0Pu) annotation(
    Placement(visible = true, transformation(origin = {-60, -40}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {-110, -80}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  // Outputs:
  Modelica.Blocks.Interfaces.RealOutput PGenPu(start = PGen0Pu) "Injected active power at the PCC in pu (base SnRef)" annotation(
    Placement(visible = true, transformation(origin = {69, 46}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {110, 80}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput QGenPu(start = QGen0Pu) "Injected reactive power at the PCC in pu (base SnRef)" annotation(
    Placement(visible = true, transformation(origin = {69, 35}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {110, 40}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.Blocks.Interfaces.RealOutput idConvPu(start = idConv0Pu) "d-current in converter terminal" annotation(
    Placement(visible = true, transformation(origin = {69, -41}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {-50, -110}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));
  Modelica.Blocks.Interfaces.RealOutput iqConvPu(start = iqConv0Pu) "q-current in converter terminal" annotation(
    Placement(visible = true, transformation(origin = {69, -52}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {50, -110}, extent = {{-10, -10}, {10, 10}}, rotation = -90)));
  Modelica.ComplexBlocks.Interfaces.ComplexOutput uPccPu(re(start = uPcc0Pu.re), im(start = uPcc0Pu.im)) "Complex inverter terminal voltage, used as complex connector instead of terminal connector, terminal only used for physical connection, in pu (base UNom)" annotation(
    Placement(visible = true, transformation(origin = {69, 12}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {110, -40}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  Modelica.ComplexBlocks.Interfaces.ComplexOutput iPccPu(re(start = iPcc0Pu.re), im(start = iPcc0Pu.im)) "Complex inverter terminal current" annotation(
    Placement(visible = true, transformation(origin = {69, -1}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {110, -79}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
    
    
  Modelica.Blocks.Interfaces.RealOutput udPccPu(start = udPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {69, -12}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {50, 110}, extent = {{-10, -10}, {10, 10}}, rotation = 90)));
  Modelica.Blocks.Interfaces.RealOutput uqPccPu(start = uqPcc0Pu) annotation(
    Placement(visible = true, transformation(origin = {69, -20}, extent = {{-5, -5}, {5, 5}}, rotation = 0), iconTransformation(origin = {-50, 110}, extent = {{-10, -10}, {10, 10}}, rotation = 90)));
  
  Modelica.Blocks.Interfaces.RealOutput UConvPu(start = UConv0Pu) "Voltage magnitude at converter terminal" annotation(
      Placement(visible = true, transformation(origin = {69, -30}, extent = {{-5, -5}, {5, 5}}, rotation = 0),
      iconTransformation(origin = {109, -100}, extent = {{-10, -10}, {10, 10}}, rotation = 0)));
  
  Types.ComplexVoltagePu uConvPu(re(start = uConv0Pu.re), im(start = uConv0Pu.im));
    
equation

  /* DQ voltages and currents at PCC */
  [udPccPu; uqPccPu] = [cos(thetaPLLPu), sin(thetaPLLPu); -sin(thetaPLLPu), cos(thetaPLLPu)]*[terminal.V.re; terminal.V.im];
  
  /*Dynamics of current in Transformer in DQ reference frame*/
  L*der(idConvPu) = omegaNom*(udConvRefPu - (udPccPu/ratioTr) - R*idConvPu + omegaPLLPu*L*iqConvPu);
  L*der(iqConvPu) = omegaNom*(uqConvRefPu - (uqPccPu/ratioTr) - R*iqConvPu - omegaPLLPu*L*idConvPu);
  
  terminal.i.re = (cos(thetaPLLPu) * idConvPu - sin(thetaPLLPu) * iqConvPu)/ratioTr;
  terminal.i.im = (sin(thetaPLLPu) * idConvPu + cos(thetaPLLPu) * iqConvPu)/ratioTr;

  /* Power Calculation */
  PGenPu =  ComplexMath.real(terminal.V* ComplexMath.conj(terminal.i));
  QGenPu =  ComplexMath.imag(terminal.V* ComplexMath.conj(terminal.i));
  
  uPccPu= terminal.V;
  iPccPu= terminal.i;
  
  uConvPu= (terminal.V/ratioTr) + terminal.i*ratioTr* Complex(R, omegaPLLPu*L);
  UConvPu= ComplexMath.'abs'(uConvPu);



//  else
//    terminal.i = Complex(0);
//  end if;
  annotation(
    preferredView = "text",
    Diagram(coordinateSystem(grid = {1, 1}, extent = {{-55, -60}, {64, 60}})),
    Icon(coordinateSystem(grid = {1, 1}, initialScale = 0.1, extent = {{-100, -100}, {100, 100}}), graphics = {Rectangle(extent = {{-100, 100}, {100, -100}}), Text(origin = {5, 6}, extent = {{-95, 56}, {90, -68}}, textString = "ConverterGFL"), Text(origin = {131, 95}, extent = {{-32, 12}, {24, -8}}, textString = "PGenPu"), Text(origin = {132, 54}, extent = {{-32, 12}, {24, -8}}, textString = "QGenPu"), Text(origin = {132, -23}, extent = {{-32, 12}, {24, -8}}, textString = "uPccPu"), Text(origin = {-138, 92}, extent = {{-32, 12}, {24, -8}}, textString = "omegaPLLPu"), Text(origin = {-139, 43}, extent = {{-32, 12}, {24, -8}}, textString = "thetaPLLPu"), Text(origin = {-138, -18}, extent = {{-32, 12}, {24, -8}}, textString = "udConvRefPu"), Text(origin = {-134, -68}, extent = {{-32, 12}, {24, -8}}, textString = "uqConvRefPu"), Text(origin = {-42, -87}, extent = {{-32, 12}, {24, -8}}, textString = "idConvPu"), Text(origin = {57, -87}, extent = {{-32, 12}, {24, -8}}, textString = "iqConvPu"), Text(origin = {54, 84}, extent = {{-32, 12}, {24, -8}}, textString = "udPccPu"), Text(origin = {-46, 84}, extent = {{-32, 12}, {24, -8}}, textString = "uqPccPu"), Text(origin = {137, -118}, extent = {{-32, 12}, {24, -8}}, textString = "UConvPu"), Text(origin = {132, -62}, extent = {{-32, 12}, {24, -8}}, textString = "iPccPu")}));
end ConverterGFL;
