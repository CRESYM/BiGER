reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'output.cur' using 1 :  1 title '�KC��                                                <                       '
