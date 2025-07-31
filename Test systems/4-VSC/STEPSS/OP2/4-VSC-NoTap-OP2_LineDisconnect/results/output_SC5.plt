reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'output_SC5.cur' using 1 :  2 title 'bus A                 : voltage magnitude (pu)',\
'output_SC5.cur' using 1 :  3 title 'bus B                 : voltage magnitude (pu)',\
'output_SC5.cur' using 1 :  4 title 'bus C                 : voltage magnitude (pu)',\
'output_SC5.cur' using 1 :  5 title 'bus E                 : voltage magnitude (pu)',\
'output_SC5.cur' using 1 :  6 title 'bus F                 : voltage magnitude (pu)'
