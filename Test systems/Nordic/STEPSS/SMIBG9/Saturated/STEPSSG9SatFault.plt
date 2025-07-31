reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'STEPSSG9SatFault.cur' using 1 :  2 title 'sync mach g9                  : active power produced (MW)',\
'STEPSSG9SatFault.cur' using 1 :  3 title 'sync mach g9                  : rotor speed (pu)',\
'STEPSSG9SatFault.cur' using 1 :  4 title 'sync mach g9                  : field voltage (pu mach. base)',\
'STEPSSG9SatFault.cur' using 1 :  5 title 'bus g9                : voltage magnitude (pu)'
