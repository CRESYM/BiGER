/*
* Copyright (c) 2015-2019, RTE (http://www.rte-france.com)
* See AUTHORS.txt
* All rights reserved.
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, you can obtain one at http://mozilla.org/MPL/2.0/.
* SPDX-License-Identifier: MPL-2.0
*
* This file is part of Dynawo, an hybrid C++/Modelica open source time domain simulation tool for power systems.
*/

var datasRead=[];
var colors=["#0000CC","#FF0000","#FF9900","#9900FF","#6600FF","#000000"];
var colorUsed=[false,false,false,false,false,false];
$(function () {

	var NETWORK__BUS__A_TN_Upu_value=[];
	NETWORK__BUS__A_TN_Upu_value.push([0.0,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([0.01,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([0.02,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([0.04,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([0.08,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([0.16,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([0.32,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([0.64,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([1.28,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([2.56,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([4.99999,1.01649]);
	NETWORK__BUS__A_TN_Upu_value.push([4.99999,1.01429]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00071,1.01442]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00071,1.01442]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00071,1.01442]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00071,1.01442]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00255,1.01453]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00438,1.01453]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00805,1.01450]);
	NETWORK__BUS__A_TN_Upu_value.push([5.01538,1.01453]);
	NETWORK__BUS__A_TN_Upu_value.push([5.03005,1.01469]);
	NETWORK__BUS__A_TN_Upu_value.push([5.04472,1.01485]);
	NETWORK__BUS__A_TN_Upu_value.push([5.07406,1.01504]);
	NETWORK__BUS__A_TN_Upu_value.push([5.13273,1.01518]);
	NETWORK__BUS__A_TN_Upu_value.push([5.25008,1.01526]);
	NETWORK__BUS__A_TN_Upu_value.push([5.48477,1.01530]);
	NETWORK__BUS__A_TN_Upu_value.push([5.95416,1.01531]);
	NETWORK__BUS__A_TN_Upu_value.push([6.89293,1.01532]);
	NETWORK__BUS__A_TN_Upu_value.push([8.77047,1.01532]);
	NETWORK__BUS__A_TN_Upu_value.push([10.0,1.01532]);

	var NETWORK__BUS__B_TN_Upu_value=[];
	NETWORK__BUS__B_TN_Upu_value.push([0.0,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([0.01,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([0.02,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([0.04,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([0.08,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([0.16,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([0.32,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([0.64,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([1.28,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([2.56,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([4.99999,1.01845]);
	NETWORK__BUS__B_TN_Upu_value.push([4.99999,1.01760]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00071,1.01795]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00071,1.01795]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00071,1.01795]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00071,1.01795]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00255,1.01820]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00438,1.01813]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00805,1.01789]);
	NETWORK__BUS__B_TN_Upu_value.push([5.01538,1.01763]);
	NETWORK__BUS__B_TN_Upu_value.push([5.03005,1.01764]);
	NETWORK__BUS__B_TN_Upu_value.push([5.04472,1.01778]);
	NETWORK__BUS__B_TN_Upu_value.push([5.07406,1.01801]);
	NETWORK__BUS__B_TN_Upu_value.push([5.13273,1.01818]);
	NETWORK__BUS__B_TN_Upu_value.push([5.25008,1.01824]);
	NETWORK__BUS__B_TN_Upu_value.push([5.48477,1.01825]);
	NETWORK__BUS__B_TN_Upu_value.push([5.95416,1.01825]);
	NETWORK__BUS__B_TN_Upu_value.push([6.89293,1.01825]);
	NETWORK__BUS__B_TN_Upu_value.push([8.77047,1.01825]);
	NETWORK__BUS__B_TN_Upu_value.push([10.0,1.01825]);

	var NETWORK__BUS__A2_TN_Upu_value=[];
	NETWORK__BUS__A2_TN_Upu_value.push([0.0,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.01,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.02,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.04,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.08,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.16,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.32,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.64,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([1.28,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([2.56,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([4.99999,1.05091]);
	NETWORK__BUS__A2_TN_Upu_value.push([4.99999,1.04839]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00071,1.04836]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00071,1.04836]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00071,1.04836]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00071,1.04836]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00255,1.04837]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00438,1.04842]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00805,1.04854]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.01538,1.04877]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.03005,1.04907]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.04472,1.04925]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.07406,1.04940]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.13273,1.04950]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.25008,1.04958]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.48477,1.04962]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.95416,1.04963]);
	NETWORK__BUS__A2_TN_Upu_value.push([6.89293,1.04964]);
	NETWORK__BUS__A2_TN_Upu_value.push([8.77047,1.04964]);
	NETWORK__BUS__A2_TN_Upu_value.push([10.0,1.04964]);

	var NETWORK__BUS__B2_TN_Upu_value=[];
	NETWORK__BUS__B2_TN_Upu_value.push([0.0,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.01,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.02,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.04,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.08,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.16,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.32,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.64,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([1.28,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([2.56,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([4.99999,1.02590]);
	NETWORK__BUS__B2_TN_Upu_value.push([4.99999,1.02529]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00071,1.02592]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00071,1.02592]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00071,1.02592]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00071,1.02592]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00255,1.02634]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00438,1.02620]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00805,1.02573]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.01538,1.02517]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.03005,1.02506]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.04472,1.02522]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.07406,1.02555]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.13273,1.02578]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.25008,1.02581]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.48477,1.02580]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.95416,1.02579]);
	NETWORK__BUS__B2_TN_Upu_value.push([6.89293,1.02579]);
	NETWORK__BUS__B2_TN_Upu_value.push([8.77047,1.02579]);
	NETWORK__BUS__B2_TN_Upu_value.push([10.0,1.02579]);

	var NETWORK__BUS__C_TN_Upu_value=[];
	NETWORK__BUS__C_TN_Upu_value.push([0.0,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([0.01,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([0.02,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([0.04,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([0.08,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([0.16,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([0.32,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([0.64,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([1.28,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([2.56,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([4.99999,1.00055]);
	NETWORK__BUS__C_TN_Upu_value.push([4.99999,0.99963]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00071,0.99976]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00071,0.99976]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00071,0.99976]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00071,0.99976]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00255,0.99986]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00438,0.99985]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00805,0.99977]);
	NETWORK__BUS__C_TN_Upu_value.push([5.01538,0.99970]);
	NETWORK__BUS__C_TN_Upu_value.push([5.03005,0.99974]);
	NETWORK__BUS__C_TN_Upu_value.push([5.04472,0.99982]);
	NETWORK__BUS__C_TN_Upu_value.push([5.07406,0.99993]);
	NETWORK__BUS__C_TN_Upu_value.push([5.13273,1.00002]);
	NETWORK__BUS__C_TN_Upu_value.push([5.25008,1.00006]);
	NETWORK__BUS__C_TN_Upu_value.push([5.48477,1.00007]);
	NETWORK__BUS__C_TN_Upu_value.push([5.95416,1.00008]);
	NETWORK__BUS__C_TN_Upu_value.push([6.89293,1.00008]);
	NETWORK__BUS__C_TN_Upu_value.push([8.77047,1.00008]);
	NETWORK__BUS__C_TN_Upu_value.push([10.0,1.00008]);

	var NETWORK__BUS__E_TN_Upu_value=[];
	NETWORK__BUS__E_TN_Upu_value.push([0.0,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([0.01,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([0.02,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([0.04,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([0.08,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([0.16,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([0.32,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([0.64,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([1.28,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([2.56,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([4.99999,1.06870]);
	NETWORK__BUS__E_TN_Upu_value.push([4.99999,1.06612]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00071,1.06605]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00071,1.06605]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00071,1.06605]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00071,1.06605]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00255,1.06603]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00438,1.06609]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00805,1.06625]);
	NETWORK__BUS__E_TN_Upu_value.push([5.01538,1.06655]);
	NETWORK__BUS__E_TN_Upu_value.push([5.03005,1.06688]);
	NETWORK__BUS__E_TN_Upu_value.push([5.04472,1.06706]);
	NETWORK__BUS__E_TN_Upu_value.push([5.07406,1.06720]);
	NETWORK__BUS__E_TN_Upu_value.push([5.13273,1.06730]);
	NETWORK__BUS__E_TN_Upu_value.push([5.25008,1.06737]);
	NETWORK__BUS__E_TN_Upu_value.push([5.48477,1.06742]);
	NETWORK__BUS__E_TN_Upu_value.push([5.95416,1.06743]);
	NETWORK__BUS__E_TN_Upu_value.push([6.89293,1.06744]);
	NETWORK__BUS__E_TN_Upu_value.push([8.77047,1.06744]);
	NETWORK__BUS__E_TN_Upu_value.push([10.0,1.06744]);

	var NETWORK__BUS__F_TN_Upu_value=[];
	NETWORK__BUS__F_TN_Upu_value.push([0.0,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([0.01,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([0.02,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([0.04,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([0.08,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([0.16,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([0.32,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([0.64,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([1.28,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([2.56,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([4.99999,1.03739]);
	NETWORK__BUS__F_TN_Upu_value.push([4.99999,1.03687]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00071,1.03756]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00071,1.03756]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00071,1.03756]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00071,1.03756]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00255,1.03802]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00438,1.03786]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00805,1.03732]);
	NETWORK__BUS__F_TN_Upu_value.push([5.01538,1.03669]);
	NETWORK__BUS__F_TN_Upu_value.push([5.03005,1.03655]);
	NETWORK__BUS__F_TN_Upu_value.push([5.04472,1.03672]);
	NETWORK__BUS__F_TN_Upu_value.push([5.07406,1.03707]);
	NETWORK__BUS__F_TN_Upu_value.push([5.13273,1.03731]);
	NETWORK__BUS__F_TN_Upu_value.push([5.25008,1.03734]);
	NETWORK__BUS__F_TN_Upu_value.push([5.48477,1.03731]);
	NETWORK__BUS__F_TN_Upu_value.push([5.95416,1.03731]);
	NETWORK__BUS__F_TN_Upu_value.push([6.89293,1.03731]);
	NETWORK__BUS__F_TN_Upu_value.push([8.77047,1.03731]);
	NETWORK__BUS__F_TN_Upu_value.push([10.0,1.03731]);

	var GFLVSC_WP1_injectorGFL_PGenPu=[];
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.0,0.82984]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.01,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.02,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.04,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.08,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.16,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.32,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.64,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([1.28,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([2.56,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([4.99999,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([4.99999,0.82772]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00071,0.82769]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00071,0.82769]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00071,0.82769]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00071,0.82769]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00255,0.82773]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00438,0.82783]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00805,0.82805]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.01538,0.82842]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.03005,0.82885]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.04472,0.82911]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.07406,0.82937]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.13273,0.82959]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.25008,0.82975]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.48477,0.82982]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.95416,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([6.89293,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([8.77047,0.82983]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([10.0,0.82983]);

	var GFLVSC_WP1_injectorGFL_QGenPu=[];
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.0,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.01,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.02,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.04,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.08,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.16,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.32,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.64,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([1.28,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([2.56,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([4.99999,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([4.99999,-0.06756]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00071,-0.06866]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00071,-0.06866]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00071,-0.06866]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00071,-0.06866]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00255,-0.06934]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00438,-0.06903]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00805,-0.06801]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.01538,-0.06662]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.03005,-0.06582]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.04472,-0.06574]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.07406,-0.06606]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.13273,-0.06637]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.25008,-0.06644]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.48477,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.95416,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([6.89293,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([8.77047,-0.06642]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([10.0,-0.06642]);

	var GFLVSC_WP1_injectorGFL_UConvPu=[];
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.0,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.01,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.02,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.04,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.08,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.16,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.32,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.64,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([1.28,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([2.56,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([4.99999,1.06922]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([4.99999,1.06650]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00071,1.06631]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00071,1.06631]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00071,1.06631]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00071,1.06631]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00255,1.06622]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00438,1.06631]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00805,1.06659]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.01538,1.06704]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.03005,1.06747]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.04472,1.06766]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.07406,1.06777]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.13273,1.06783]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.25008,1.06790]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.48477,1.06795]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.95416,1.06796]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([6.89293,1.06797]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([8.77047,1.06797]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([10.0,1.06797]);

	var GFLVSC_WP1_injectorGFL_UPccPu=[];
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.0,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.01,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.02,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.04,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.08,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.16,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.32,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.64,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([1.28,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([2.56,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([4.99999,1.06870]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([4.99999,1.06611]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00071,1.06605]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00071,1.06605]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00071,1.06605]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00071,1.06605]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00255,1.06603]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00438,1.06609]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00805,1.06625]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.01538,1.06655]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.03005,1.06688]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.04472,1.06706]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.07406,1.06720]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.13273,1.06730]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.25008,1.06737]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.48477,1.06742]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.95416,1.06743]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([6.89293,1.06744]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([8.77047,1.06744]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([10.0,1.06744]);

	var GFLVSC_WP2_injectorGFL_PGenPu=[];
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.0,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.01,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.02,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.04,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.08,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.16,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.32,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.64,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([1.28,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([2.56,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([4.99999,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([4.99999,0.83021]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00071,0.83065]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00071,0.83065]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00071,0.83065]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00071,0.83065]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00255,0.83085]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00438,0.83062]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00805,0.83003]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.01538,0.82941]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.03005,0.82926]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.04472,0.82943]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.07406,0.82975]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.13273,0.82993]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.25008,0.82992]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.48477,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.95416,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([6.89293,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([8.77047,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([10.0,0.82987]);

	var GFLVSC_WP2_injectorGFL_QGenPu=[];
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.0,-0.30700]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.01,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.02,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.04,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.08,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.16,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.32,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.64,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([1.28,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([2.56,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([4.99999,-0.30701]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([4.99999,-0.30483]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00071,-0.30347]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00071,-0.30347]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00071,-0.30347]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00071,-0.30347]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00255,-0.30263]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00438,-0.30303]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00805,-0.30428]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.01538,-0.30587]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.03005,-0.30662]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.04472,-0.30658]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.07406,-0.30616]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.13273,-0.30596]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.25008,-0.30611]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.48477,-0.30626]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.95416,-0.30630]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([6.89293,-0.30631]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([8.77047,-0.30631]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([10.0,-0.30631]);

	var GFLVSC_WP2_injectorGFL_UConvPu=[];
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.0,1.01059]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.01,1.01059]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.02,1.01059]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.04,1.01059]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.08,1.01059]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.16,1.01058]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.32,1.01058]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.64,1.01058]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([1.28,1.01058]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([2.56,1.01058]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([4.99999,1.01058]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([4.99999,1.01031]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00071,1.01118]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00071,1.01118]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00071,1.01118]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00071,1.01118]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00255,1.01174]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00438,1.01154]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00805,1.01084]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.01538,1.01000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.03005,1.00976]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.04472,1.00995]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.07406,1.01036]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.13273,1.01062]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.25008,1.01064]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.48477,1.01060]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.95416,1.01059]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([6.89293,1.01058]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([8.77047,1.01058]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([10.0,1.01058]);

	var GFLVSC_WP2_injectorGFL_UPccPu=[];
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.0,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.01,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.02,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.04,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.08,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.16,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.32,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.64,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([1.28,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([2.56,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([4.99999,1.03739]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([4.99999,1.03686]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00071,1.03756]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00071,1.03756]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00071,1.03756]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00071,1.03756]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00255,1.03802]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00438,1.03786]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00805,1.03732]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.01538,1.03669]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.03005,1.03655]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.04472,1.03672]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.07406,1.03707]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.13273,1.03731]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.25008,1.03734]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.48477,1.03731]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.95416,1.03731]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([6.89293,1.03731]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([8.77047,1.03731]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([10.0,1.03731]);

	var GFLVSC_HVDC1_injectorGFL_PGenPu=[];
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.0,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.01,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.02,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.04,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.08,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.16,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.32,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.64,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([1.28,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([2.56,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([4.99999,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([4.99999,0.95161]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00071,0.95174]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00071,0.95174]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00071,0.95174]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00071,0.95174]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00255,0.95189]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00438,0.95194]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00805,0.95199]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.01538,0.95215]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.03005,0.95251]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.04472,0.95281]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.07406,0.95316]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.13273,0.95346]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.25008,0.95365]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.48477,0.95373]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.95416,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([6.89293,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([8.77047,0.95375]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([10.0,0.95375]);

	var GFLVSC_HVDC1_injectorGFL_QGenPu=[];
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.0,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.01,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.02,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.04,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.08,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.16,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.32,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.64,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([1.28,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([2.56,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([4.99999,-0.04475]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([4.99999,-0.04647]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00071,-0.04740]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00071,-0.04740]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00071,-0.04740]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00071,-0.04740]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00255,-0.04783]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00438,-0.04733]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00805,-0.04595]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.01538,-0.04381]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.03005,-0.04179]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.04472,-0.04078]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.07406,-0.03988]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.13273,-0.03889]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.25008,-0.03786]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.48477,-0.03721]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.95416,-0.03699]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([6.89293,-0.03694]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([8.77047,-0.03694]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([10.0,-0.03694]);

	var GFLVSC_HVDC1_injectorGFL_UConvPu=[];
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.0,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.01,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.02,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.04,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.08,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.16,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.32,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.64,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([1.28,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([2.56,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([4.99999,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([4.99999,1.02188]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00071,1.02188]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00071,1.02188]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00071,1.02188]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00071,1.02188]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00255,1.02192]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00438,1.02200]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00805,1.02217]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.01538,1.02251]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.03005,1.02298]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.04472,1.02328]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.07406,1.02360]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.13273,1.02390]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.25008,1.02413]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.48477,1.02426]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.95416,1.02431]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([6.89293,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([8.77047,1.02432]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([10.0,1.02432]);

	var GFLVSC_HVDC1_injectorGFL_UPccPu=[];
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.0,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.01,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.02,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.04,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.08,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.16,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.32,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.64,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([1.28,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([2.56,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([4.99999,1.01649]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([4.99999,1.01429]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00071,1.01442]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00071,1.01442]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00071,1.01442]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00071,1.01442]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00255,1.01453]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00438,1.01453]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00805,1.01450]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.01538,1.01453]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.03005,1.01469]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.04472,1.01485]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.07406,1.01504]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.13273,1.01518]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.25008,1.01526]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.48477,1.01530]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.95416,1.01531]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([6.89293,1.01532]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([8.77047,1.01532]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([10.0,1.01532]);

	var GFLVSC_HVDC2_injectorGFL_PGenPu=[];
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.0,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.01,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.02,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.04,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.08,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.16,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.32,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.64,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([1.28,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([2.56,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([4.99999,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([4.99999,0.81871]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00071,0.81906]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00071,0.81906]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00071,0.81906]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00071,0.81906]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00255,0.81938]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00438,0.81944]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00805,0.81942]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.01538,0.81941]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.03005,0.81959]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.04472,0.81978]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.07406,0.81999]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.13273,0.82009]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.25008,0.82008]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.48477,0.82007]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.95416,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([6.89293,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([8.77047,0.82006]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([10.0,0.82006]);

	var GFLVSC_HVDC2_injectorGFL_QGenPu=[];
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.0,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.01,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.02,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.04,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.08,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.16,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.32,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.64,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([1.28,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([2.56,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([4.99999,0.29647]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([4.99999,0.29805]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00071,0.29938]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00071,0.29938]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00071,0.29938]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00071,0.29938]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00255,0.30027]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00438,0.29993]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00805,0.29875]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.01538,0.29727]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.03005,0.29670]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.04472,0.29687]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.07406,0.29745]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.13273,0.29789]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.25008,0.29794]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.48477,0.29782]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.95416,0.29775]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([6.89293,0.29774]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([8.77047,0.29773]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([10.0,0.29773]);

	var GFLVSC_HVDC2_injectorGFL_UConvPu=[];
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.0,1.07280]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.01,1.07280]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.02,1.07280]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.04,1.07280]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.08,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.16,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.32,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.64,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([1.28,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([2.56,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([4.99999,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([4.99999,1.07220]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00071,1.07273]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00071,1.07273]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00071,1.07273]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00071,1.07273]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00255,1.07310]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00438,1.07299]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00805,1.07260]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.01538,1.07214]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.03005,1.07207]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.04472,1.07223]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.07406,1.07253]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.13273,1.07276]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.25008,1.07281]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.48477,1.07281]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.95416,1.07280]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([6.89293,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([8.77047,1.07279]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([10.0,1.07279]);

	var GFLVSC_HVDC2_injectorGFL_UPccPu=[];
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.0,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.01,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.02,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.04,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.08,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.16,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.32,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.64,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([1.28,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([2.56,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([4.99999,1.01845]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([4.99999,1.01759]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00071,1.01795]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00071,1.01795]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00071,1.01795]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00071,1.01795]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00255,1.01820]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00438,1.01813]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00805,1.01789]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.01538,1.01763]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.03005,1.01764]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.04472,1.01778]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.07406,1.01801]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.13273,1.01818]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.25008,1.01824]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.48477,1.01825]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.95416,1.01825]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([6.89293,1.01825]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([8.77047,1.01825]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([10.0,1.01825]);

	var InfBus_infiniteBus_UBus0Pu=[];
	InfBus_infiniteBus_UBus0Pu.push([0.0,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([0.01,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([0.02,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([0.04,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([0.08,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([0.16,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([0.32,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([0.64,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([1.28,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([2.56,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([4.99999,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([4.99999,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.00071,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.00071,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.00071,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.00071,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.00255,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.00438,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.00805,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.01538,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.03005,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.04472,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.07406,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.13273,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.25008,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.48477,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([5.95416,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([6.89293,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([8.77047,1.05192]);
	InfBus_infiniteBus_UBus0Pu.push([10.0,1.05192]);

	var InfBus_infiniteBus_UPhaseBus0=[];
	InfBus_infiniteBus_UPhaseBus0.push([0.0,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([0.01,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([0.02,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([0.04,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([0.08,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([0.16,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([0.32,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([0.64,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([1.28,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([2.56,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([4.99999,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([4.99999,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00071,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00071,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00071,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00071,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00255,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00438,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00805,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.01538,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.03005,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.04472,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.07406,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.13273,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.25008,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.48477,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([5.95416,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([6.89293,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([8.77047,-0.30779]);
	InfBus_infiniteBus_UPhaseBus0.push([10.0,-0.30779]);

	datasRead=[
	{
		label:"NETWORK__BUS__A_TN_Upu_value",
		data:NETWORK__BUS__A_TN_Upu_value
	},
	{
		label:"NETWORK__BUS__B_TN_Upu_value",
		data:NETWORK__BUS__B_TN_Upu_value
	},
	{
		label:"NETWORK__BUS__A2_TN_Upu_value",
		data:NETWORK__BUS__A2_TN_Upu_value
	},
	{
		label:"NETWORK__BUS__B2_TN_Upu_value",
		data:NETWORK__BUS__B2_TN_Upu_value
	},
	{
		label:"NETWORK__BUS__C_TN_Upu_value",
		data:NETWORK__BUS__C_TN_Upu_value
	},
	{
		label:"NETWORK__BUS__E_TN_Upu_value",
		data:NETWORK__BUS__E_TN_Upu_value
	},
	{
		label:"NETWORK__BUS__F_TN_Upu_value",
		data:NETWORK__BUS__F_TN_Upu_value
	},
	{
		label:"GFLVSC_WP1_injectorGFL_PGenPu",
		data:GFLVSC_WP1_injectorGFL_PGenPu
	},
	{
		label:"GFLVSC_WP1_injectorGFL_QGenPu",
		data:GFLVSC_WP1_injectorGFL_QGenPu
	},
	{
		label:"GFLVSC_WP1_injectorGFL_UConvPu",
		data:GFLVSC_WP1_injectorGFL_UConvPu
	},
	{
		label:"GFLVSC_WP1_injectorGFL_UPccPu",
		data:GFLVSC_WP1_injectorGFL_UPccPu
	},
	{
		label:"GFLVSC_WP2_injectorGFL_PGenPu",
		data:GFLVSC_WP2_injectorGFL_PGenPu
	},
	{
		label:"GFLVSC_WP2_injectorGFL_QGenPu",
		data:GFLVSC_WP2_injectorGFL_QGenPu
	},
	{
		label:"GFLVSC_WP2_injectorGFL_UConvPu",
		data:GFLVSC_WP2_injectorGFL_UConvPu
	},
	{
		label:"GFLVSC_WP2_injectorGFL_UPccPu",
		data:GFLVSC_WP2_injectorGFL_UPccPu
	},
	{
		label:"GFLVSC_HVDC1_injectorGFL_PGenPu",
		data:GFLVSC_HVDC1_injectorGFL_PGenPu
	},
	{
		label:"GFLVSC_HVDC1_injectorGFL_QGenPu",
		data:GFLVSC_HVDC1_injectorGFL_QGenPu
	},
	{
		label:"GFLVSC_HVDC1_injectorGFL_UConvPu",
		data:GFLVSC_HVDC1_injectorGFL_UConvPu
	},
	{
		label:"GFLVSC_HVDC1_injectorGFL_UPccPu",
		data:GFLVSC_HVDC1_injectorGFL_UPccPu
	},
	{
		label:"GFLVSC_HVDC2_injectorGFL_PGenPu",
		data:GFLVSC_HVDC2_injectorGFL_PGenPu
	},
	{
		label:"GFLVSC_HVDC2_injectorGFL_QGenPu",
		data:GFLVSC_HVDC2_injectorGFL_QGenPu
	},
	{
		label:"GFLVSC_HVDC2_injectorGFL_UConvPu",
		data:GFLVSC_HVDC2_injectorGFL_UConvPu
	},
	{
		label:"GFLVSC_HVDC2_injectorGFL_UPccPu",
		data:GFLVSC_HVDC2_injectorGFL_UPccPu
	},
	{
		label:"InfBus_infiniteBus_UBus0Pu",
		data:InfBus_infiniteBus_UBus0Pu
	},
	{
		label:"InfBus_infiniteBus_UPhaseBus0",
		data:InfBus_infiniteBus_UPhaseBus0
	}
	];

  // reset graph
  resetGraph();

  var eltitle = document.getElementById('case_title');
  // remove old children
  eltitle.innerHTML='';
  var titleHtml="<h1>curves.csv</h1>";
  var line = document.createElement("LABEL");
  eltitle.appendChild(line);
  var frag = document.createElement('div');
  frag.innerHTML = titleHtml;
  line.appendChild(frag);

  updateLegend();
    });

function listenCheckbox(button,yAxis)
{
    var id = button.getAttribute("id");
    var instanceId = '';
    if (yAxis == 1)
    {
        instanceId = id + ' on left axis';
    }
    else if (yAxis == 2)
    {
        instanceId = id + ' on right axis';
    }
    else
    {
        alert("Unknown axis");
        button.checked = false;
    }
    var checked= button.checked;
    if( checked == true ) { // add serie
      var serie=[];
      var index = 0;
      for( var i=0; i< datasRead.length; i++) {
          if( datasRead[i].label == id)    {
              index = i;
              break;
          }
      }
      if(dataId.length > 5) {
          alert("Unable to plot more than 6 curves");
          button.checked = false;
      }
      else {
          serie=datasRead[index].data;
          addData(serie,instanceId,yAxis);
      }
    }
    if( checked == false ) { // remove serie
      removeData(instanceId);
    }

}

function addData(serie,id,yAxis) {
  dataId.push(id);
  // search the first color not used
  var indexColor = 0;
  for(var i=0; i<colors.length; i++) {
    if(colorUsed[i] == false) {
      indexColor = i;
      break;
    }
  }
  colorUsed[indexColor] = true;

  dataToPlot.push(
    {
      label: id,
        yaxis: yAxis,
        data : serie,
        color: colors[indexColor],
        points: { show: false }
    }
    );
  plotData();
  updateLegend();
}

function removeData(id)
{
  var index = 0;
  for( var i=0; i< dataId.length; i++) {
    if(dataId[i] == id) {
      index = i;
      break;
    }
  }
  // find the color used to refresh the colorUsed table
  var indexColor =0;
  for(var i=0; i<colors.length; i++) {
    if(dataToPlot[index].color ==colors[i]) {
      indexColor = i;
    }
  }
  colorUsed[indexColor] = false;

  dataId.splice(index,1);
  dataToPlot.splice(index,1);
  plotData();
  updateLegend();
}


function plotData()
{
  var  placeholder = $("#placeholder");
  plot = $.plot(placeholder, dataToPlot, oldOptions);
}


function updateLegend()
{
  var  legend = document.getElementById("legend");
  legend.innerHTML='';
  var table = document.createElement('table');
  legend.appendChild(table);
  for(var i=0; i<dataToPlot.length; i++){
    var line = document.createElement("tr");
    table.appendChild(line);
    var legendHtml= '<td><div style="width:4px;height:0;border:4px solid ' + dataToPlot[i].color + ';overflow:hidden"></div></td><td>'+ dataToPlot[i].label+'</td>';
    line.innerHTML = legendHtml;
  }
  for(var i=dataToPlot.length; i<7; i++)    {
    var line = document.createElement("tr");
    table.appendChild(line);
    var legendHtml= '<td><div style="width:4px;height:0;border:4px solid #FFFFFF;overflow:hidden"></div></td><td></td>';
    line.innerHTML = legendHtml;
  }

}

function resetGraph()
{
  // remove old curve
  var  placeholder = $("#placeholder");
  dataToPlot = [];
  plot =  $.plot(placeholder, dataToPlot, oldOptions);
  dataId= [];
  colorUsed =[false,false,false,false,false,false];
  var el = document.getElementById('checkbox');
  // remove old children
  el.innerHTML='';
  // Create table for curves selections
  var table = document.createElement('table');
  el.appendChild(table);
  var headers = document.createElement('tr');
  headers.innerHTML = '<th>Left axis</th><th>Curves available</th><th>Right axis</th>';
  table.appendChild(headers);
  // set new children
  for (var i=0; i<datasRead.length; i++) {
    var line = document.createElement("tr");
    table.appendChild(line);

    var radioHtml = '<td style="text-align:center"><input type="checkbox" name="choice" onclick="listenCheckbox(this,1)" id="'+datasRead[i].label+'"/></td><td><label>'+datasRead[i].label+'</label></td><td style="text-align:center"><input type="checkbox" name="choice" onclick="listenCheckbox(this,2)" id="'+datasRead[i].label+'"/></td>';
    line.innerHTML =  radioHtml;
  }

  var  legend = document.getElementById("legend");
  legend.innerHTML='';
}
