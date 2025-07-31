reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'PeFaultSTEPSS.cur' using 1 :  2 title 'sync mach g6                  : active power produced (MW)',\
'PeFaultSTEPSS.cur' using 1 :  3 title 'sync mach g7                  : active power produced (MW)',\
'PeFaultSTEPSS.cur' using 1 :  4 title 'sync mach g17                 : active power produced (MW)',\
'PeFaultSTEPSS.cur' using 1 :  5 title 'sync mach g20                 : active power produced (MW)'
