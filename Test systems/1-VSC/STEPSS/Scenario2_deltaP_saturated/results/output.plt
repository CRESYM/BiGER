reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'output.cur' using 1 :  2 title 'injector HVDC1               : idref',\
'output.cur' using 1 :  3 title 'injector HVDC1               : iqref',\
'output.cur' using 1 :  4 title 'injector HVDC1               : P_MW',\
'output.cur' using 1 :  5 title 'injector HVDC1               : Q_Mvar',\
'output.cur' using 1 :  6 title 'injector HVDC1               : Vm',\
'output.cur' using 1 :  7 title 'bus A                 : voltage magnitude (pu)'
