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
	NETWORK__BUS__A_TN_Upu_value.push([0.0,1.00759]);
	NETWORK__BUS__A_TN_Upu_value.push([0.01,1.00757]);
	NETWORK__BUS__A_TN_Upu_value.push([0.02,1.00758]);
	NETWORK__BUS__A_TN_Upu_value.push([0.04,1.00759]);
	NETWORK__BUS__A_TN_Upu_value.push([0.08,1.00758]);
	NETWORK__BUS__A_TN_Upu_value.push([0.16,1.00757]);
	NETWORK__BUS__A_TN_Upu_value.push([0.32,1.00757]);
	NETWORK__BUS__A_TN_Upu_value.push([0.64,1.00757]);
	NETWORK__BUS__A_TN_Upu_value.push([1.28,1.00757]);
	NETWORK__BUS__A_TN_Upu_value.push([2.56,1.00757]);
	NETWORK__BUS__A_TN_Upu_value.push([4.99999,1.00757]);
	NETWORK__BUS__A_TN_Upu_value.push([4.99999,1.00680]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00109,1.00692]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00218,1.00700]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00438,1.00709]);
	NETWORK__BUS__A_TN_Upu_value.push([5.00877,1.00718]);
	NETWORK__BUS__A_TN_Upu_value.push([5.01754,1.00731]);
	NETWORK__BUS__A_TN_Upu_value.push([5.0351,1.00748]);
	NETWORK__BUS__A_TN_Upu_value.push([5.05265,1.00761]);
	NETWORK__BUS__A_TN_Upu_value.push([5.08776,1.00773]);
	NETWORK__BUS__A_TN_Upu_value.push([5.15797,1.00780]);
	NETWORK__BUS__A_TN_Upu_value.push([5.29839,1.00779]);
	NETWORK__BUS__A_TN_Upu_value.push([5.57924,1.00777]);
	NETWORK__BUS__A_TN_Upu_value.push([6.14094,1.00776]);
	NETWORK__BUS__A_TN_Upu_value.push([7.26434,1.00776]);
	NETWORK__BUS__A_TN_Upu_value.push([9.51115,1.00776]);
	NETWORK__BUS__A_TN_Upu_value.push([10.0,1.00776]);

	var NETWORK__BUS__B_TN_Upu_value=[];
	NETWORK__BUS__B_TN_Upu_value.push([0.0,1.00543]);
	NETWORK__BUS__B_TN_Upu_value.push([0.01,1.00541]);
	NETWORK__BUS__B_TN_Upu_value.push([0.02,1.00542]);
	NETWORK__BUS__B_TN_Upu_value.push([0.04,1.00543]);
	NETWORK__BUS__B_TN_Upu_value.push([0.08,1.00542]);
	NETWORK__BUS__B_TN_Upu_value.push([0.16,1.00542]);
	NETWORK__BUS__B_TN_Upu_value.push([0.32,1.00542]);
	NETWORK__BUS__B_TN_Upu_value.push([0.64,1.00542]);
	NETWORK__BUS__B_TN_Upu_value.push([1.28,1.00542]);
	NETWORK__BUS__B_TN_Upu_value.push([2.56,1.00542]);
	NETWORK__BUS__B_TN_Upu_value.push([4.99999,1.00542]);
	NETWORK__BUS__B_TN_Upu_value.push([4.99999,1.00314]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00109,1.00295]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00218,1.00294]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00438,1.00305]);
	NETWORK__BUS__B_TN_Upu_value.push([5.00877,1.00339]);
	NETWORK__BUS__B_TN_Upu_value.push([5.01754,1.00378]);
	NETWORK__BUS__B_TN_Upu_value.push([5.0351,1.00413]);
	NETWORK__BUS__B_TN_Upu_value.push([5.05265,1.00431]);
	NETWORK__BUS__B_TN_Upu_value.push([5.08776,1.00445]);
	NETWORK__BUS__B_TN_Upu_value.push([5.15797,1.00454]);
	NETWORK__BUS__B_TN_Upu_value.push([5.29839,1.00457]);
	NETWORK__BUS__B_TN_Upu_value.push([5.57924,1.00458]);
	NETWORK__BUS__B_TN_Upu_value.push([6.14094,1.00458]);
	NETWORK__BUS__B_TN_Upu_value.push([7.26434,1.00458]);
	NETWORK__BUS__B_TN_Upu_value.push([9.51115,1.00458]);
	NETWORK__BUS__B_TN_Upu_value.push([10.0,1.00458]);

	var NETWORK__BUS__A2_TN_Upu_value=[];
	NETWORK__BUS__A2_TN_Upu_value.push([0.0,1.03188]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.01,1.03186]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.02,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.04,1.03188]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.08,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.16,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.32,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([0.64,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([1.28,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([2.56,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([4.99999,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([4.99999,1.03129]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00109,1.03171]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00218,1.03187]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00438,1.03194]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.00877,1.03179]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.01754,1.03168]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.0351,1.03171]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.05265,1.03182]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.08776,1.03198]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.15797,1.03208]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.29839,1.03205]);
	NETWORK__BUS__A2_TN_Upu_value.push([5.57924,1.03200]);
	NETWORK__BUS__A2_TN_Upu_value.push([6.14094,1.03198]);
	NETWORK__BUS__A2_TN_Upu_value.push([7.26434,1.03197]);
	NETWORK__BUS__A2_TN_Upu_value.push([9.51115,1.03197]);
	NETWORK__BUS__A2_TN_Upu_value.push([10.0,1.03197]);

	var NETWORK__BUS__B2_TN_Upu_value=[];
	NETWORK__BUS__B2_TN_Upu_value.push([0.0,0.99257]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.01,0.99255]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.02,0.99256]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.04,0.99256]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.08,0.99255]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.16,0.99255]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.32,0.99255]);
	NETWORK__BUS__B2_TN_Upu_value.push([0.64,0.99255]);
	NETWORK__BUS__B2_TN_Upu_value.push([1.28,0.99255]);
	NETWORK__BUS__B2_TN_Upu_value.push([2.56,0.99255]);
	NETWORK__BUS__B2_TN_Upu_value.push([4.99999,0.99255]);
	NETWORK__BUS__B2_TN_Upu_value.push([4.99999,0.98991]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00109,0.98948]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00218,0.98944]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00438,0.98964]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.00877,0.99029]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.01754,0.99101]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.0351,0.99160]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.05265,0.99184]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.08776,0.99199]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.15797,0.99206]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.29839,0.99209]);
	NETWORK__BUS__B2_TN_Upu_value.push([5.57924,0.99210]);
	NETWORK__BUS__B2_TN_Upu_value.push([6.14094,0.99210]);
	NETWORK__BUS__B2_TN_Upu_value.push([7.26434,0.99210]);
	NETWORK__BUS__B2_TN_Upu_value.push([9.51115,0.99210]);
	NETWORK__BUS__B2_TN_Upu_value.push([10.0,0.99210]);

	var NETWORK__BUS__C_TN_Upu_value=[];
	NETWORK__BUS__C_TN_Upu_value.push([0.0,1.00001]);
	NETWORK__BUS__C_TN_Upu_value.push([0.01,1.00000]);
	NETWORK__BUS__C_TN_Upu_value.push([0.02,1.00001]);
	NETWORK__BUS__C_TN_Upu_value.push([0.04,1.00001]);
	NETWORK__BUS__C_TN_Upu_value.push([0.08,1.00001]);
	NETWORK__BUS__C_TN_Upu_value.push([0.16,1.00000]);
	NETWORK__BUS__C_TN_Upu_value.push([0.32,1.00000]);
	NETWORK__BUS__C_TN_Upu_value.push([0.64,1.00000]);
	NETWORK__BUS__C_TN_Upu_value.push([1.28,1.00000]);
	NETWORK__BUS__C_TN_Upu_value.push([2.56,1.00000]);
	NETWORK__BUS__C_TN_Upu_value.push([4.99999,1.00000]);
	NETWORK__BUS__C_TN_Upu_value.push([4.99999,0.99910]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00109,0.99908]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00218,0.99910]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00438,0.99917]);
	NETWORK__BUS__C_TN_Upu_value.push([5.00877,0.99929]);
	NETWORK__BUS__C_TN_Upu_value.push([5.01754,0.99944]);
	NETWORK__BUS__C_TN_Upu_value.push([5.0351,0.99960]);
	NETWORK__BUS__C_TN_Upu_value.push([5.05265,0.99969]);
	NETWORK__BUS__C_TN_Upu_value.push([5.08776,0.99977]);
	NETWORK__BUS__C_TN_Upu_value.push([5.15797,0.99981]);
	NETWORK__BUS__C_TN_Upu_value.push([5.29839,0.99982]);
	NETWORK__BUS__C_TN_Upu_value.push([5.57924,0.99982]);
	NETWORK__BUS__C_TN_Upu_value.push([6.14094,0.99981]);
	NETWORK__BUS__C_TN_Upu_value.push([7.26434,0.99981]);
	NETWORK__BUS__C_TN_Upu_value.push([9.51115,0.99981]);
	NETWORK__BUS__C_TN_Upu_value.push([10.0,0.99981]);

	var NETWORK__BUS__E_TN_Upu_value=[];
	NETWORK__BUS__E_TN_Upu_value.push([0.0,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([0.01,1.04754]);
	NETWORK__BUS__E_TN_Upu_value.push([0.02,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([0.04,1.04757]);
	NETWORK__BUS__E_TN_Upu_value.push([0.08,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([0.16,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([0.32,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([0.64,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([1.28,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([2.56,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([4.99999,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([4.99999,1.04704]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00109,1.04754]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00218,1.04771]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00438,1.04778]);
	NETWORK__BUS__E_TN_Upu_value.push([5.00877,1.04756]);
	NETWORK__BUS__E_TN_Upu_value.push([5.01754,1.04739]);
	NETWORK__BUS__E_TN_Upu_value.push([5.0351,1.04738]);
	NETWORK__BUS__E_TN_Upu_value.push([5.05265,1.04748]);
	NETWORK__BUS__E_TN_Upu_value.push([5.08776,1.04766]);
	NETWORK__BUS__E_TN_Upu_value.push([5.15797,1.04776]);
	NETWORK__BUS__E_TN_Upu_value.push([5.29839,1.04773]);
	NETWORK__BUS__E_TN_Upu_value.push([5.57924,1.04767]);
	NETWORK__BUS__E_TN_Upu_value.push([6.14094,1.04764]);
	NETWORK__BUS__E_TN_Upu_value.push([7.26434,1.04763]);
	NETWORK__BUS__E_TN_Upu_value.push([9.51115,1.04763]);
	NETWORK__BUS__E_TN_Upu_value.push([10.0,1.04763]);

	var NETWORK__BUS__F_TN_Upu_value=[];
	NETWORK__BUS__F_TN_Upu_value.push([0.0,0.99975]);
	NETWORK__BUS__F_TN_Upu_value.push([0.01,0.99973]);
	NETWORK__BUS__F_TN_Upu_value.push([0.02,0.99974]);
	NETWORK__BUS__F_TN_Upu_value.push([0.04,0.99974]);
	NETWORK__BUS__F_TN_Upu_value.push([0.08,0.99973]);
	NETWORK__BUS__F_TN_Upu_value.push([0.16,0.99973]);
	NETWORK__BUS__F_TN_Upu_value.push([0.32,0.99973]);
	NETWORK__BUS__F_TN_Upu_value.push([0.64,0.99973]);
	NETWORK__BUS__F_TN_Upu_value.push([1.28,0.99973]);
	NETWORK__BUS__F_TN_Upu_value.push([2.56,0.99973]);
	NETWORK__BUS__F_TN_Upu_value.push([4.99999,0.99973]);
	NETWORK__BUS__F_TN_Upu_value.push([4.99999,0.99701]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00109,0.99652]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00218,0.99647]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00438,0.99670]);
	NETWORK__BUS__F_TN_Upu_value.push([5.00877,0.99743]);
	NETWORK__BUS__F_TN_Upu_value.push([5.01754,0.99824]);
	NETWORK__BUS__F_TN_Upu_value.push([5.0351,0.99889]);
	NETWORK__BUS__F_TN_Upu_value.push([5.05265,0.99915]);
	NETWORK__BUS__F_TN_Upu_value.push([5.08776,0.99929]);
	NETWORK__BUS__F_TN_Upu_value.push([5.15797,0.99936]);
	NETWORK__BUS__F_TN_Upu_value.push([5.29839,0.99939]);
	NETWORK__BUS__F_TN_Upu_value.push([5.57924,0.99939]);
	NETWORK__BUS__F_TN_Upu_value.push([6.14094,0.99939]);
	NETWORK__BUS__F_TN_Upu_value.push([7.26434,0.99939]);
	NETWORK__BUS__F_TN_Upu_value.push([9.51115,0.99939]);
	NETWORK__BUS__F_TN_Upu_value.push([10.0,0.99939]);

	var GFLVSC_WP1_injectorGFL_PGenPu=[];
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.0,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.01,0.82994]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.02,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.04,0.82997]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.08,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.16,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.32,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([0.64,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([1.28,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([2.56,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([4.99999,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([4.99999,0.82966]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00109,0.83004]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00218,0.83016]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00438,0.83019]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.00877,0.83000]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.01754,0.82984]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.0351,0.82984]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.05265,0.82992]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.08776,0.83004]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.15797,0.83005]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.29839,0.82999]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([5.57924,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([6.14094,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([7.26434,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([9.51115,0.82996]);
	GFLVSC_WP1_injectorGFL_PGenPu.push([10.0,0.82996]);

	var GFLVSC_WP1_injectorGFL_QGenPu=[];
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.0,-0.06111]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.01,-0.06112]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.02,-0.06109]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.04,-0.06107]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.08,-0.06108]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.16,-0.06109]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.32,-0.06109]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([0.64,-0.06109]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([1.28,-0.06109]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([2.56,-0.06109]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([4.99999,-0.06109]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([4.99999,-0.05949]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00109,-0.05757]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00218,-0.05710]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00438,-0.05727]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.00877,-0.05887]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.01754,-0.06049]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.0351,-0.06149]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.05265,-0.06164]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.08776,-0.06143]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.15797,-0.06129]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.29839,-0.06141]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([5.57924,-0.06158]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([6.14094,-0.06168]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([7.26434,-0.06172]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([9.51115,-0.06172]);
	GFLVSC_WP1_injectorGFL_QGenPu.push([10.0,-0.06172]);

	var GFLVSC_WP1_injectorGFL_UConvPu=[];
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.0,1.04887]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.01,1.04885]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.02,1.04886]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.04,1.04888]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.08,1.04887]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.16,1.04887]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.32,1.04886]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([0.64,1.04886]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([1.28,1.04886]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([2.56,1.04886]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([4.99999,1.04886]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([4.99999,1.04853]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00109,1.04925]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00218,1.04947]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00438,1.04952]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.00877,1.04913]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.01754,1.04876]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.0351,1.04865]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.05265,1.04873]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.08776,1.04893]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.15797,1.04904]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.29839,1.04900]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([5.57924,1.04892]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([6.14094,1.04888]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([7.26434,1.04887]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([9.51115,1.04886]);
	GFLVSC_WP1_injectorGFL_UConvPu.push([10.0,1.04886]);

	var GFLVSC_WP1_injectorGFL_UPccPu=[];
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.0,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.01,1.04754]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.02,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.04,1.04757]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.08,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.16,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.32,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([0.64,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([1.28,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([2.56,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([4.99999,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([4.99999,1.04704]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00109,1.04754]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00218,1.04771]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00438,1.04778]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.00877,1.04756]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.01754,1.04739]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.0351,1.04738]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.05265,1.04748]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.08776,1.04766]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.15797,1.04776]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.29839,1.04773]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([5.57924,1.04767]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([6.14094,1.04764]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([7.26434,1.04763]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([9.51115,1.04763]);
	GFLVSC_WP1_injectorGFL_UPccPu.push([10.0,1.04763]);

	var GFLVSC_WP2_injectorGFL_PGenPu=[];
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.0,0.82989]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.01,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.02,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.04,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.08,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.16,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.32,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([0.64,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([1.28,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([2.56,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([4.99999,0.82987]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([4.99999,0.82704]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00109,0.82677]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00218,0.82682]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00438,0.82717]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.00877,0.82797]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.01754,0.82886]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.0351,0.82955]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.05265,0.82980]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.08776,0.82990]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.15797,0.82991]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.29839,0.82990]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([5.57924,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([6.14094,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([7.26434,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([9.51115,0.82988]);
	GFLVSC_WP2_injectorGFL_PGenPu.push([10.0,0.82987]);

	var GFLVSC_WP2_injectorGFL_QGenPu=[];
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.0,-0.32639]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.01,-0.32638]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.02,-0.32639]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.04,-0.32640]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.08,-0.32640]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.16,-0.32639]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.32,-0.32639]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([0.64,-0.32639]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([1.28,-0.32639]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([2.56,-0.32639]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([4.99999,-0.32639]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([4.99999,-0.32695]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00109,-0.32820]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00218,-0.32837]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00438,-0.32793]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.00877,-0.32632]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.01754,-0.32463]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.0351,-0.32350]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.05265,-0.32322]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.08776,-0.32330]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.15797,-0.32344]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.29839,-0.32349]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([5.57924,-0.32350]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([6.14094,-0.32350]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([7.26434,-0.32350]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([9.51115,-0.32350]);
	GFLVSC_WP2_injectorGFL_QGenPu.push([10.0,-0.32350]);

	var GFLVSC_WP2_injectorGFL_UConvPu=[];
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.0,0.97002]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.01,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.02,0.97001]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.04,0.97001]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.08,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.16,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.32,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([0.64,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([1.28,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([2.56,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([4.99999,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([4.99999,0.96711]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00109,0.96646]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00218,0.96639]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00438,0.96668]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.00877,0.96763]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.01754,0.96867]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.0351,0.96948]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.05265,0.96978]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.08776,0.96992]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.15797,0.96998]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.29839,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([5.57924,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([6.14094,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([7.26434,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([9.51115,0.97000]);
	GFLVSC_WP2_injectorGFL_UConvPu.push([10.0,0.97000]);

	var GFLVSC_WP2_injectorGFL_UPccPu=[];
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.0,0.99975]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.01,0.99973]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.02,0.99974]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.04,0.99974]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.08,0.99973]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.16,0.99973]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.32,0.99973]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([0.64,0.99973]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([1.28,0.99973]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([2.56,0.99973]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([4.99999,0.99973]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([4.99999,0.99701]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00109,0.99652]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00218,0.99647]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00438,0.99670]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.00877,0.99743]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.01754,0.99824]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.0351,0.99889]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.05265,0.99915]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.08776,0.99929]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.15797,0.99936]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.29839,0.99939]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([5.57924,0.99939]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([6.14094,0.99939]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([7.26434,0.99939]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([9.51115,0.99939]);
	GFLVSC_WP2_injectorGFL_UPccPu.push([10.0,0.99939]);

	var GFLVSC_HVDC1_injectorGFL_PGenPu=[];
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.0,-0.93768]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.01,-0.93766]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.02,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.04,-0.93768]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.08,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.16,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.32,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([0.64,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([1.28,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([2.56,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([4.99999,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([4.99999,-0.93679]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00109,-0.93693]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00218,-0.93703]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00438,-0.93716]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.00877,-0.93729]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.01754,-0.93746]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.0351,-0.93765]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.05265,-0.93776]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.08776,-0.93782]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.15797,-0.93779]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.29839,-0.93771]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([5.57924,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([6.14094,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([7.26434,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([9.51115,-0.93767]);
	GFLVSC_HVDC1_injectorGFL_PGenPu.push([10.0,-0.93767]);

	var GFLVSC_HVDC1_injectorGFL_QGenPu=[];
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.0,-0.08487]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.01,-0.08492]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.02,-0.08491]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.04,-0.08490]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.08,-0.08492]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.16,-0.08492]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.32,-0.08492]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([0.64,-0.08492]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([1.28,-0.08492]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([2.56,-0.08492]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([4.99999,-0.08492]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([4.99999,-0.08654]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00109,-0.08468]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00218,-0.08396]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00438,-0.08349]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.00877,-0.08403]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.01754,-0.08450]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.0351,-0.08477]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.05265,-0.08486]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.08776,-0.08502]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.15797,-0.08545]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.29839,-0.08592]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([5.57924,-0.08614]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([6.14094,-0.08616]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([7.26434,-0.08615]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([9.51115,-0.08614]);
	GFLVSC_HVDC1_injectorGFL_QGenPu.push([10.0,-0.08614]);

	var GFLVSC_HVDC1_injectorGFL_UConvPu=[];
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.0,1.00003]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.01,1.00000]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.02,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.04,1.00002]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.08,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.16,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.32,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([0.64,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([1.28,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([2.56,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([4.99999,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([4.99999,0.99899]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00109,0.99939]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00218,0.99957]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00438,0.99974]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.00877,0.99975]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.01754,0.99981]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.0351,0.99994]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.05265,1.00005]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.08776,1.00016]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.15797,1.00016]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.29839,1.00008]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([5.57924,1.00003]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([6.14094,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([7.26434,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([9.51115,1.00001]);
	GFLVSC_HVDC1_injectorGFL_UConvPu.push([10.0,1.00001]);

	var GFLVSC_HVDC1_injectorGFL_UPccPu=[];
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.0,1.00759]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.01,1.00757]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.02,1.00758]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.04,1.00759]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.08,1.00758]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.16,1.00757]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.32,1.00757]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([0.64,1.00757]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([1.28,1.00757]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([2.56,1.00757]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([4.99999,1.00757]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([4.99999,1.00680]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00109,1.00692]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00218,1.00700]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00438,1.00709]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.00877,1.00718]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.01754,1.00731]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.0351,1.00748]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.05265,1.00761]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.08776,1.00773]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.15797,1.00780]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.29839,1.00779]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([5.57924,1.00777]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([6.14094,1.00776]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([7.26434,1.00776]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([9.51115,1.00776]);
	GFLVSC_HVDC1_injectorGFL_UPccPu.push([10.0,1.00776]);

	var GFLVSC_HVDC2_injectorGFL_PGenPu=[];
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.0,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.01,-0.94558]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.02,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.04,-0.94560]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.08,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.16,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.32,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([0.64,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([1.28,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([2.56,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([4.99999,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([4.99999,-0.94302]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00109,-0.94293]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00218,-0.94299]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00438,-0.94322]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.00877,-0.94372]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.01754,-0.94430]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.0351,-0.94483]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.05265,-0.94510]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.08776,-0.94532]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.15797,-0.94547]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.29839,-0.94555]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([5.57924,-0.94558]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([6.14094,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([7.26434,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([9.51115,-0.94559]);
	GFLVSC_HVDC2_injectorGFL_PGenPu.push([10.0,-0.94559]);

	var GFLVSC_HVDC2_injectorGFL_QGenPu=[];
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.0,0.20370]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.01,0.20362]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.02,0.20364]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.04,0.20365]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.08,0.20363]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.16,0.20363]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.32,0.20363]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([0.64,0.20363]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([1.28,0.20363]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([2.56,0.20363]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([4.99999,0.20363]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([4.99999,0.20511]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00109,0.20304]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00218,0.20237]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00438,0.20218]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.00877,0.20338]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.01754,0.20471]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.0351,0.20592]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.05265,0.20654]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.08776,0.20717]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.15797,0.20785]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.29839,0.20845]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([5.57924,0.20882]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([6.14094,0.20896]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([7.26434,0.20899]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([9.51115,0.20899]);
	GFLVSC_HVDC2_injectorGFL_QGenPu.push([10.0,0.20899]);

	var GFLVSC_HVDC2_injectorGFL_UConvPu=[];
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.0,1.04086]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.01,1.04083]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.02,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.04,1.04085]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.08,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.16,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.32,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([0.64,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([1.28,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([2.56,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([4.99999,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([4.99999,1.03886]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00109,1.03837]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00218,1.03827]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00438,1.03835]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.00877,1.03885]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.01754,1.03943]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.0351,1.03995]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.05265,1.04021]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.08776,1.04044]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.15797,1.04063]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.29839,1.04075]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([5.57924,1.04081]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([6.14094,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([7.26434,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([9.51115,1.04084]);
	GFLVSC_HVDC2_injectorGFL_UConvPu.push([10.0,1.04084]);

	var GFLVSC_HVDC2_injectorGFL_UPccPu=[];
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.0,1.00543]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.01,1.00541]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.02,1.00542]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.04,1.00543]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.08,1.00542]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.16,1.00542]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.32,1.00542]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([0.64,1.00542]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([1.28,1.00542]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([2.56,1.00542]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([4.99999,1.00542]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([4.99999,1.00313]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00109,1.00295]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00218,1.00294]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00438,1.00305]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.00877,1.00339]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.01754,1.00378]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.0351,1.00413]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.05265,1.00431]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.08776,1.00445]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.15797,1.00454]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.29839,1.00457]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([5.57924,1.00458]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([6.14094,1.00458]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([7.26434,1.00458]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([9.51115,1.00458]);
	GFLVSC_HVDC2_injectorGFL_UPccPu.push([10.0,1.00458]);

	var InfBus_infiniteBus_UBus0Pu=[];
	InfBus_infiniteBus_UBus0Pu.push([0.0,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([0.01,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([0.02,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([0.04,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([0.08,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([0.16,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([0.32,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([0.64,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([1.28,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([2.56,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([4.99999,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([4.99999,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.00109,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.00218,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.00438,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.00877,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.01754,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.0351,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.05265,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.08776,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.15797,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.29839,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([5.57924,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([6.14094,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([7.26434,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([9.51115,1.00000]);
	InfBus_infiniteBus_UBus0Pu.push([10.0,1.00000]);

	var InfBus_infiniteBus_UPhaseBus0=[];
	InfBus_infiniteBus_UPhaseBus0.push([0.0,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([0.01,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([0.02,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([0.04,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([0.08,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([0.16,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([0.32,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([0.64,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([1.28,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([2.56,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([4.99999,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([4.99999,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00109,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00218,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00438,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.00877,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.01754,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.0351,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.05265,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.08776,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.15797,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.29839,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([5.57924,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([6.14094,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([7.26434,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([9.51115,0.00008]);
	InfBus_infiniteBus_UPhaseBus0.push([10.0,0.00008]);

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
