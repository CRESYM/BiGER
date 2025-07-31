reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'If19Unsat.cur' using 1 :  2 title 'sync mach g19                 : field current (pu mach. base)'
