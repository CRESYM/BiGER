reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'VfSTEPSS.cur' using 1 :  2 title 'sync mach g6                  : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 :  3 title 'sync mach g7                  : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 :  4 title 'sync mach g8                  : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 :  5 title 'sync mach g9                  : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 :  6 title 'sync mach g11                 : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 :  7 title 'sync mach g12                 : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 :  8 title 'sync mach g14                 : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 :  9 title 'sync mach g15                 : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 : 10 title 'sync mach g16                 : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 : 11 title 'sync mach g18                 : field voltage (pu mach. base)',\
'VfSTEPSS.cur' using 1 : 12 title 'sync mach g20                 : field voltage (pu mach. base)'
