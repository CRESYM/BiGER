reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'wrSTEPSS.cur' using 1 :  2 title 'sync mach g6                  : rotor speed (pu)',\
'wrSTEPSS.cur' using 1 :  3 title 'sync mach g7                  : rotor speed (pu)',\
'wrSTEPSS.cur' using 1 :  4 title 'sync mach g10                 : rotor speed (pu)',\
'wrSTEPSS.cur' using 1 :  5 title 'sync mach g17                 : rotor speed (pu)'
