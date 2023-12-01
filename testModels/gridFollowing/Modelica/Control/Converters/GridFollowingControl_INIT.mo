within Dynawo.Electrical.Controls.Converters;

model GridFollowingControl_INIT "Initialization model for the grid following control"
  import Dynawo.Types;

  extends AdditionalIcons.Init;
  import Modelica;
  import Modelica.Constants;
  import Dynawo;

  parameter Types.VoltageModule UNom "base voltage in kV";
  parameter Types.Frequency fNom"Nominal System frequency";
  parameter Types.AngularVelocity omegaNom = 2*Constants.pi*fNom "Nominal System angular frequency";
  parameter Types.ApparentPowerModule SNom"base apparent power in MVA";
  parameter Types.PerUnit ratioTr "Connection transformer ratio in p.u";
  parameter Types.PerUnit R "Transformer resistance in pu (base UNom, SNom)";
  parameter Types.PerUnit L "Transformer inductance in pu (base UNom, SNom)";
  parameter Types.PerUnit Rc "resistance value from converter terminal to PCC in pu (base UNom, SNom)";
  parameter Types.PerUnit Xc "reactance value from converter terminal to PCC in pu (base UNom, SNom)";
  /* Converter bus initialisation data*/
  parameter Types.ComplexVoltagePu uPcc0Pu "Start value of complex voltage at converter PCC in pu (base UNom)";
  parameter Types.ActivePowerPu PGen0Pu "Start value of converter generated active power in pu (base SNom) (generator convention)";
  parameter Types.ReactivePowerPu QGen0Pu "Start value of converter generated reactive power in pu (base SNom) (generator convention)";

  /* Initial quantities to calculate from initialisation data*/
  Types.ComplexCurrentPu iPcc0Pu;
  Types.PerUnit IP0Pu;
  Types.ComplexVoltagePu uConv0Pu;
  Types.ComplexCurrentPu iConv0Pu;
  Types.PerUnit UConv0Pu;
  Types.PerUnit omegaPLL0Pu;
  Types.PerUnit thetaPLL0Pu;
  Types.PerUnit udPcc0Pu;
  Types.PerUnit uqPcc0Pu;
  Types.PerUnit idPcc0Pu;
  Types.PerUnit iqPcc0Pu;
  Types.PerUnit udConv0Pu;
  Types.PerUnit uqConv0Pu;
  Types.PerUnit idConv0Pu;
  Types.PerUnit iqConv0Pu;
  Types.PerUnit udConvRef0Pu;
  Types.PerUnit uqConvRef0Pu;

equation
  iPcc0Pu = ComplexMath.conj(Complex(PGen0Pu, QGen0Pu)/uPcc0Pu);
  thetaPLL0Pu = ComplexMath.arg(uPcc0Pu);
  udPcc0Pu = cos(thetaPLL0Pu)*uPcc0Pu.re + sin(thetaPLL0Pu)*uPcc0Pu.im;
  uqPcc0Pu = -sin(thetaPLL0Pu)*uPcc0Pu.re + cos(thetaPLL0Pu)*uPcc0Pu.im;
  idPcc0Pu = cos(thetaPLL0Pu)*iPcc0Pu.re + sin(thetaPLL0Pu)*iPcc0Pu.im;
  iqPcc0Pu = -sin(thetaPLL0Pu)*iPcc0Pu.re + cos(thetaPLL0Pu)*iPcc0Pu.im;
  udConv0Pu = cos(thetaPLL0Pu)*uConv0Pu.re + sin(thetaPLL0Pu)*uConv0Pu.im;
  uqConv0Pu = -sin(thetaPLL0Pu)*uConv0Pu.re + cos(thetaPLL0Pu)*uConv0Pu.im;
  idConv0Pu = ratioTr*cos(thetaPLL0Pu)*iPcc0Pu.re + ratioTr*sin(thetaPLL0Pu)*iPcc0Pu.im;
  iqConv0Pu = -ratioTr*sin(thetaPLL0Pu)*iPcc0Pu.re + ratioTr*cos(thetaPLL0Pu)*iPcc0Pu.im;
  udConvRef0Pu = udPcc0Pu/ratioTr + R*idPcc0Pu*ratioTr - omegaPLL0Pu*L*iqPcc0Pu*ratioTr;
  uqConvRef0Pu = uqPcc0Pu/ratioTr + R*iqPcc0Pu*ratioTr + omegaPLL0Pu*L*idPcc0Pu*ratioTr;
  
  IP0Pu = iPcc0Pu.re*ratioTr;
  uConv0Pu = (uPcc0Pu/ratioTr) + iPcc0Pu*ratioTr*Complex(R, Xc);
  iConv0Pu = iPcc0Pu*ratioTr;
  UConv0Pu = ComplexMath.'abs'(uConv0Pu);
  
  annotation(preferredView = "text");

end GridFollowingControl_INIT;
