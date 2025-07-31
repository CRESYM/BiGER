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

	var GFLVSC_controlGFL_activePowerLoop_idRefPu=[];
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.0,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([1e-06,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([2e-06,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([4e-06,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([8e-06,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([1.6e-05,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.2e-05,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([6.4e-05,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.000128,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.000256,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.000512,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.001024,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.002048,0.850000]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.004096,0.849999]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.006144,0.849999]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.008192,0.849999]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.01024,0.849999]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.014336,0.849999]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.022528,0.849999]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.03072,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.047104,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.079872,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.145408,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.27648,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([0.538624,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([1.062912,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([2.111488,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([2.999999,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([2.999999,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.0,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000001,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000003,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000007,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000015,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000031,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000063,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000127,0.849998]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000255,0.849997]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000511,0.849997]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.001023,0.849995]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.002047,0.849988]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.004095,0.849967]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.008191,0.849894]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.016383,0.849674]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032767,0.849049]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.049151,0.848322]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.065535,0.847551]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.098303,0.846017]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.131071,0.844578]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.196607,0.842338]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.25559,0.841007]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.314572,0.840195]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.432537,0.839735]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.668467,0.839472]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([4.140326,0.839383]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([5.084044,0.839366]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([6.971481,0.839364]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([8.0,0.839364]);

	var GFLVSC_controlGFL_reactivePowerLoop_iqRefPu=[];
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.0,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([1e-06,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([2e-06,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([4e-06,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([8e-06,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([1.6e-05,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.2e-05,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([6.4e-05,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.000128,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.000256,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.000512,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.001024,-0.039950]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.002048,-0.039949]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.004096,-0.039949]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.006144,-0.039948]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.008192,-0.039947]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.01024,-0.039947]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.014336,-0.039946]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.022528,-0.039944]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.03072,-0.039942]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.047104,-0.039940]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.079872,-0.039937]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.145408,-0.039934]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.27648,-0.039933]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([0.538624,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([1.062912,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([2.111488,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([2.999999,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([2.999999,-0.043266]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.0,-0.043267]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000001,-0.043268]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000003,-0.043270]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000007,-0.043274]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000015,-0.043282]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000031,-0.043298]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000063,-0.043330]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000127,-0.043393]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000255,-0.043520]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000511,-0.043770]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.001023,-0.044261]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.002047,-0.045218]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.004095,-0.047064]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.008191,-0.050415]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.016383,-0.056233]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032767,-0.065133]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.049151,-0.071930]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.065535,-0.077113]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.098303,-0.084792]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.131071,-0.089172]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.196607,-0.093346]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.25559,-0.094069]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.314572,-0.093960]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.432537,-0.093617]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.668467,-0.093483]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([4.140326,-0.093450]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([5.084044,-0.093445]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([6.971481,-0.093445]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([8.0,-0.093445]);

	var GFLVSC_injectorGFL_PGenPu=[];
	GFLVSC_injectorGFL_PGenPu.push([0.0,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([1e-06,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([2e-06,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([4e-06,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([8e-06,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([1.6e-05,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([3.2e-05,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([6.4e-05,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.000128,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.000256,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.000512,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.001024,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.002048,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.004096,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.006144,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.008192,0.833338]);
	GFLVSC_injectorGFL_PGenPu.push([0.01024,0.833337]);
	GFLVSC_injectorGFL_PGenPu.push([0.014336,0.833337]);
	GFLVSC_injectorGFL_PGenPu.push([0.022528,0.833336]);
	GFLVSC_injectorGFL_PGenPu.push([0.03072,0.833336]);
	GFLVSC_injectorGFL_PGenPu.push([0.047104,0.833335]);
	GFLVSC_injectorGFL_PGenPu.push([0.079872,0.833334]);
	GFLVSC_injectorGFL_PGenPu.push([0.145408,0.833333]);
	GFLVSC_injectorGFL_PGenPu.push([0.27648,0.833333]);
	GFLVSC_injectorGFL_PGenPu.push([0.538624,0.833333]);
	GFLVSC_injectorGFL_PGenPu.push([1.062912,0.833333]);
	GFLVSC_injectorGFL_PGenPu.push([2.111488,0.833333]);
	GFLVSC_injectorGFL_PGenPu.push([2.999999,0.833333]);
	GFLVSC_injectorGFL_PGenPu.push([2.999999,0.833333]);
	GFLVSC_injectorGFL_PGenPu.push([3.0,0.833334]);
	GFLVSC_injectorGFL_PGenPu.push([3.000001,0.833335]);
	GFLVSC_injectorGFL_PGenPu.push([3.000003,0.833336]);
	GFLVSC_injectorGFL_PGenPu.push([3.000007,0.833339]);
	GFLVSC_injectorGFL_PGenPu.push([3.000015,0.833345]);
	GFLVSC_injectorGFL_PGenPu.push([3.000031,0.833357]);
	GFLVSC_injectorGFL_PGenPu.push([3.000063,0.833380]);
	GFLVSC_injectorGFL_PGenPu.push([3.000127,0.833425]);
	GFLVSC_injectorGFL_PGenPu.push([3.000255,0.833508]);
	GFLVSC_injectorGFL_PGenPu.push([3.000511,0.833650]);
	GFLVSC_injectorGFL_PGenPu.push([3.001023,0.833870]);
	GFLVSC_injectorGFL_PGenPu.push([3.002047,0.834173]);
	GFLVSC_injectorGFL_PGenPu.push([3.004095,0.834573]);
	GFLVSC_injectorGFL_PGenPu.push([3.008191,0.835111]);
	GFLVSC_injectorGFL_PGenPu.push([3.016383,0.836018]);
	GFLVSC_injectorGFL_PGenPu.push([3.032767,0.837145]);
	GFLVSC_injectorGFL_PGenPu.push([3.049151,0.837770]);
	GFLVSC_injectorGFL_PGenPu.push([3.065535,0.838040]);
	GFLVSC_injectorGFL_PGenPu.push([3.098303,0.838067]);
	GFLVSC_injectorGFL_PGenPu.push([3.131071,0.837538]);
	GFLVSC_injectorGFL_PGenPu.push([3.196607,0.836192]);
	GFLVSC_injectorGFL_PGenPu.push([3.25559,0.835045]);
	GFLVSC_injectorGFL_PGenPu.push([3.314572,0.834237]);
	GFLVSC_injectorGFL_PGenPu.push([3.432537,0.833723]);
	GFLVSC_injectorGFL_PGenPu.push([3.668467,0.833444]);
	GFLVSC_injectorGFL_PGenPu.push([4.140326,0.833352]);
	GFLVSC_injectorGFL_PGenPu.push([5.084044,0.833335]);
	GFLVSC_injectorGFL_PGenPu.push([6.971481,0.833333]);
	GFLVSC_injectorGFL_PGenPu.push([8.0,0.833333]);

	var GFLVSC_injectorGFL_QGenPu=[];
	GFLVSC_injectorGFL_QGenPu.push([0.0,0.039168]);
	GFLVSC_injectorGFL_QGenPu.push([1e-06,0.039167]);
	GFLVSC_injectorGFL_QGenPu.push([2e-06,0.039167]);
	GFLVSC_injectorGFL_QGenPu.push([4e-06,0.039167]);
	GFLVSC_injectorGFL_QGenPu.push([8e-06,0.039167]);
	GFLVSC_injectorGFL_QGenPu.push([1.6e-05,0.039167]);
	GFLVSC_injectorGFL_QGenPu.push([3.2e-05,0.039167]);
	GFLVSC_injectorGFL_QGenPu.push([6.4e-05,0.039168]);
	GFLVSC_injectorGFL_QGenPu.push([0.000128,0.039168]);
	GFLVSC_injectorGFL_QGenPu.push([0.000256,0.039168]);
	GFLVSC_injectorGFL_QGenPu.push([0.000512,0.039168]);
	GFLVSC_injectorGFL_QGenPu.push([0.001024,0.039168]);
	GFLVSC_injectorGFL_QGenPu.push([0.002048,0.039168]);
	GFLVSC_injectorGFL_QGenPu.push([0.004096,0.039167]);
	GFLVSC_injectorGFL_QGenPu.push([0.006144,0.039166]);
	GFLVSC_injectorGFL_QGenPu.push([0.008192,0.039165]);
	GFLVSC_injectorGFL_QGenPu.push([0.01024,0.039164]);
	GFLVSC_injectorGFL_QGenPu.push([0.014336,0.039163]);
	GFLVSC_injectorGFL_QGenPu.push([0.022528,0.039161]);
	GFLVSC_injectorGFL_QGenPu.push([0.03072,0.039159]);
	GFLVSC_injectorGFL_QGenPu.push([0.047104,0.039157]);
	GFLVSC_injectorGFL_QGenPu.push([0.079872,0.039154]);
	GFLVSC_injectorGFL_QGenPu.push([0.145408,0.039151]);
	GFLVSC_injectorGFL_QGenPu.push([0.27648,0.039150]);
	GFLVSC_injectorGFL_QGenPu.push([0.538624,0.039149]);
	GFLVSC_injectorGFL_QGenPu.push([1.062912,0.039149]);
	GFLVSC_injectorGFL_QGenPu.push([2.111488,0.039149]);
	GFLVSC_injectorGFL_QGenPu.push([2.999999,0.039149]);
	GFLVSC_injectorGFL_QGenPu.push([2.999999,0.039149]);
	GFLVSC_injectorGFL_QGenPu.push([3.0,0.039153]);
	GFLVSC_injectorGFL_QGenPu.push([3.000001,0.039157]);
	GFLVSC_injectorGFL_QGenPu.push([3.000003,0.039165]);
	GFLVSC_injectorGFL_QGenPu.push([3.000007,0.039181]);
	GFLVSC_injectorGFL_QGenPu.push([3.000015,0.039212]);
	GFLVSC_injectorGFL_QGenPu.push([3.000031,0.039274]);
	GFLVSC_injectorGFL_QGenPu.push([3.000063,0.039395]);
	GFLVSC_injectorGFL_QGenPu.push([3.000127,0.039628]);
	GFLVSC_injectorGFL_QGenPu.push([3.000255,0.040058]);
	GFLVSC_injectorGFL_QGenPu.push([3.000511,0.040801]);
	GFLVSC_injectorGFL_QGenPu.push([3.001023,0.041955]);
	GFLVSC_injectorGFL_QGenPu.push([3.002047,0.043551]);
	GFLVSC_injectorGFL_QGenPu.push([3.004095,0.045723]);
	GFLVSC_injectorGFL_QGenPu.push([3.008191,0.048869]);
	GFLVSC_injectorGFL_QGenPu.push([3.016383,0.054671]);
	GFLVSC_injectorGFL_QGenPu.push([3.032767,0.063660]);
	GFLVSC_injectorGFL_QGenPu.push([3.049151,0.070587]);
	GFLVSC_injectorGFL_QGenPu.push([3.065535,0.075906]);
	GFLVSC_injectorGFL_QGenPu.push([3.098303,0.083827]);
	GFLVSC_injectorGFL_QGenPu.push([3.131071,0.088379]);
	GFLVSC_injectorGFL_QGenPu.push([3.196607,0.092727]);
	GFLVSC_injectorGFL_QGenPu.push([3.25559,0.093463]);
	GFLVSC_injectorGFL_QGenPu.push([3.314572,0.093322]);
	GFLVSC_injectorGFL_QGenPu.push([3.432537,0.092951]);
	GFLVSC_injectorGFL_QGenPu.push([3.668467,0.092810]);
	GFLVSC_injectorGFL_QGenPu.push([4.140326,0.092778]);
	GFLVSC_injectorGFL_QGenPu.push([5.084044,0.092774]);
	GFLVSC_injectorGFL_QGenPu.push([6.971481,0.092773]);
	GFLVSC_injectorGFL_QGenPu.push([8.0,0.092773]);

	var GFLVSC_injectorGFL_UConvPu=[];
	GFLVSC_injectorGFL_UConvPu.push([0.0,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([1e-06,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([2e-06,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([4e-06,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([8e-06,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([1.6e-05,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([3.2e-05,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([6.4e-05,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([0.000128,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([0.000256,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([0.000512,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([0.001024,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([0.002048,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([0.004096,0.998787]);
	GFLVSC_injectorGFL_UConvPu.push([0.006144,0.998786]);
	GFLVSC_injectorGFL_UConvPu.push([0.008192,0.998786]);
	GFLVSC_injectorGFL_UConvPu.push([0.01024,0.998786]);
	GFLVSC_injectorGFL_UConvPu.push([0.014336,0.998785]);
	GFLVSC_injectorGFL_UConvPu.push([0.022528,0.998784]);
	GFLVSC_injectorGFL_UConvPu.push([0.03072,0.998784]);
	GFLVSC_injectorGFL_UConvPu.push([0.047104,0.998783]);
	GFLVSC_injectorGFL_UConvPu.push([0.079872,0.998782]);
	GFLVSC_injectorGFL_UConvPu.push([0.145408,0.998781]);
	GFLVSC_injectorGFL_UConvPu.push([0.27648,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([0.538624,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([1.062912,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([2.111488,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([2.999999,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([2.999999,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([3.0,0.998781]);
	GFLVSC_injectorGFL_UConvPu.push([3.000001,0.998783]);
	GFLVSC_injectorGFL_UConvPu.push([3.000003,0.998786]);
	GFLVSC_injectorGFL_UConvPu.push([3.000007,0.998792]);
	GFLVSC_injectorGFL_UConvPu.push([3.000015,0.998804]);
	GFLVSC_injectorGFL_UConvPu.push([3.000031,0.998827]);
	GFLVSC_injectorGFL_UConvPu.push([3.000063,0.998872]);
	GFLVSC_injectorGFL_UConvPu.push([3.000127,0.998959]);
	GFLVSC_injectorGFL_UConvPu.push([3.000255,0.999120]);
	GFLVSC_injectorGFL_UConvPu.push([3.000511,0.999397]);
	GFLVSC_injectorGFL_UConvPu.push([3.001023,0.999828]);
	GFLVSC_injectorGFL_UConvPu.push([3.002047,1.000424]);
	GFLVSC_injectorGFL_UConvPu.push([3.004095,1.001234]);
	GFLVSC_injectorGFL_UConvPu.push([3.008191,1.002407]);
	GFLVSC_injectorGFL_UConvPu.push([3.016383,1.004567]);
	GFLVSC_injectorGFL_UConvPu.push([3.032767,1.007909]);
	GFLVSC_injectorGFL_UConvPu.push([3.049151,1.010477]);
	GFLVSC_injectorGFL_UConvPu.push([3.065535,1.012449]);
	GFLVSC_injectorGFL_UConvPu.push([3.098303,1.015387]);
	GFLVSC_injectorGFL_UConvPu.push([3.131071,1.017082]);
	GFLVSC_injectorGFL_UConvPu.push([3.196607,1.018709]);
	GFLVSC_injectorGFL_UConvPu.push([3.25559,1.019002]);
	GFLVSC_injectorGFL_UConvPu.push([3.314572,1.018967]);
	GFLVSC_injectorGFL_UConvPu.push([3.432537,1.018838]);
	GFLVSC_injectorGFL_UConvPu.push([3.668467,1.018791]);
	GFLVSC_injectorGFL_UConvPu.push([4.140326,1.018781]);
	GFLVSC_injectorGFL_UConvPu.push([5.084044,1.018780]);
	GFLVSC_injectorGFL_UConvPu.push([6.971481,1.018780]);
	GFLVSC_injectorGFL_UConvPu.push([8.0,1.018780]);

	var GFLVSC_injectorGFL_UPccPu=[];
	GFLVSC_injectorGFL_UPccPu.push([0.0,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([1e-06,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([2e-06,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([4e-06,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([8e-06,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([1.6e-05,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([3.2e-05,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([6.4e-05,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([0.000128,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([0.000256,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([0.000512,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([0.001024,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([0.002048,1.000007]);
	GFLVSC_injectorGFL_UPccPu.push([0.004096,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([0.006144,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([0.008192,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([0.01024,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([0.014336,1.000005]);
	GFLVSC_injectorGFL_UPccPu.push([0.022528,1.000005]);
	GFLVSC_injectorGFL_UPccPu.push([0.03072,1.000005]);
	GFLVSC_injectorGFL_UPccPu.push([0.047104,1.000004]);
	GFLVSC_injectorGFL_UPccPu.push([0.079872,1.000003]);
	GFLVSC_injectorGFL_UPccPu.push([0.145408,1.000003]);
	GFLVSC_injectorGFL_UPccPu.push([0.27648,1.000003]);
	GFLVSC_injectorGFL_UPccPu.push([0.538624,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([1.062912,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([2.111488,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([2.999999,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([2.999999,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([3.0,1.000003]);
	GFLVSC_injectorGFL_UPccPu.push([3.000001,1.000004]);
	GFLVSC_injectorGFL_UPccPu.push([3.000003,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([3.000007,1.000010]);
	GFLVSC_injectorGFL_UPccPu.push([3.000015,1.000017]);
	GFLVSC_injectorGFL_UPccPu.push([3.000031,1.000031]);
	GFLVSC_injectorGFL_UPccPu.push([3.000063,1.000059]);
	GFLVSC_injectorGFL_UPccPu.push([3.000127,1.000113]);
	GFLVSC_injectorGFL_UPccPu.push([3.000255,1.000212]);
	GFLVSC_injectorGFL_UPccPu.push([3.000511,1.000383]);
	GFLVSC_injectorGFL_UPccPu.push([3.001023,1.000648]);
	GFLVSC_injectorGFL_UPccPu.push([3.002047,1.001016]);
	GFLVSC_injectorGFL_UPccPu.push([3.004095,1.001516]);
	GFLVSC_injectorGFL_UPccPu.push([3.008191,1.002241]);
	GFLVSC_injectorGFL_UPccPu.push([3.016383,1.003579]);
	GFLVSC_injectorGFL_UPccPu.push([3.032767,1.005659]);
	GFLVSC_injectorGFL_UPccPu.push([3.049151,1.007265]);
	GFLVSC_injectorGFL_UPccPu.push([3.065535,1.008505]);
	GFLVSC_injectorGFL_UPccPu.push([3.098303,1.010365]);
	GFLVSC_injectorGFL_UPccPu.push([3.131071,1.011456]);
	GFLVSC_injectorGFL_UPccPu.push([3.196607,1.012531]);
	GFLVSC_injectorGFL_UPccPu.push([3.25559,1.012755]);
	GFLVSC_injectorGFL_UPccPu.push([3.314572,1.012759]);
	GFLVSC_injectorGFL_UPccPu.push([3.432537,1.012695]);
	GFLVSC_injectorGFL_UPccPu.push([3.668467,1.012675]);
	GFLVSC_injectorGFL_UPccPu.push([4.140326,1.012671]);
	GFLVSC_injectorGFL_UPccPu.push([5.084044,1.012671]);
	GFLVSC_injectorGFL_UPccPu.push([6.971481,1.012671]);
	GFLVSC_injectorGFL_UPccPu.push([8.0,1.012671]);

	datasRead=[
	{
		label:"GFLVSC_controlGFL_activePowerLoop_idRefPu",
		data:GFLVSC_controlGFL_activePowerLoop_idRefPu
	},
	{
		label:"GFLVSC_controlGFL_reactivePowerLoop_iqRefPu",
		data:GFLVSC_controlGFL_reactivePowerLoop_iqRefPu
	},
	{
		label:"GFLVSC_injectorGFL_PGenPu",
		data:GFLVSC_injectorGFL_PGenPu
	},
	{
		label:"GFLVSC_injectorGFL_QGenPu",
		data:GFLVSC_injectorGFL_QGenPu
	},
	{
		label:"GFLVSC_injectorGFL_UConvPu",
		data:GFLVSC_injectorGFL_UConvPu
	},
	{
		label:"GFLVSC_injectorGFL_UPccPu",
		data:GFLVSC_injectorGFL_UPccPu
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
