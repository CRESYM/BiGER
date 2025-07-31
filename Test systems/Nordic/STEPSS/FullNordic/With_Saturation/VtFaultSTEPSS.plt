reset
set terminal windows
set style data lines
set xtics
set border
set xlabel 't (s)'
set grid
set key opaque
plot \
'VtFaultSTEPSS.cur' using 1 :  2 title 'bus g6                : voltage magnitude (pu)',\
'VtFaultSTEPSS.cur' using 1 :  3 title 'bus g7                : voltage magnitude (pu)',\
'VtFaultSTEPSS.cur' using 1 :  4 title 'bus g10               : voltage magnitude (pu)',\
'VtFaultSTEPSS.cur' using 1 :  5 title 'bus g17               : voltage magnitude (pu)',\
'VtFaultSTEPSS.cur' using 1 :  6 title 'bus 1041              : voltage magnitude (pu)',\
'VtFaultSTEPSS.cur' using 1 :  7 title 'bus 1042              : voltage magnitude (pu)',\
'VtFaultSTEPSS.cur' using 1 :  8 title 'bus 4012              : voltage magnitude (pu)',\
'VtFaultSTEPSS.cur' using 1 :  9 title 'bus 4062              : voltage magnitude (pu)'
