reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'STEPSSG19SatSetPointChange.cur' using 1 :  2 title 'sync mach g19                 : active power produced (MW)',\
'STEPSSG19SatSetPointChange.cur' using 1 :  3 title 'sync mach g19                 : rotor speed (pu)',\
'STEPSSG19SatSetPointChange.cur' using 1 :  4 title 'sync mach g19                 : field voltage (pu mach. base)',\
'STEPSSG19SatSetPointChange.cur' using 1 :  5 title 'bus g19               : voltage magnitude (pu)'
