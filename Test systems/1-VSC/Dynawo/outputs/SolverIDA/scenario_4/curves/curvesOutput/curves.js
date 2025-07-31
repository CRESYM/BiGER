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
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000127,0.849997]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000255,0.849995]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000511,0.849989]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.001023,0.849968]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.001535,0.849937]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.002559,0.849855]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.003583,0.849741]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.004607,0.849611]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.006655,0.849289]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.010751,0.848425]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.014847,0.847369]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.018943,0.846143]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.027135,0.843364]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.035327,0.840133]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.051711,0.832841]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.068095,0.824929]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.084479,0.816941]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.100863,0.809257]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.117247,0.802109]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.133631,0.795618]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.150015,0.789826]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.182783,0.780227]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.215551,0.772978]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.248319,0.767650]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.281087,0.763817]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.313855,0.761102]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.379391,0.757648]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.444927,0.756003]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.575999,0.754630]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.707071,0.754843]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.969215,0.754959]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([4.493503,0.754996]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([5.542079,0.755002]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([7.639231,0.755002]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([8.0,0.755002]);

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
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([2.999999,-0.073272]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.0,-0.073282]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000001,-0.073292]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000003,-0.073312]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000007,-0.073352]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000015,-0.073432]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000031,-0.073592]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000063,-0.073910]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000127,-0.074546]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000255,-0.075809]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000511,-0.078309]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.001023,-0.083220]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.001535,-0.088036]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.002559,-0.097472]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.003583,-0.106587]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.004607,-0.115532]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.006655,-0.132761]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.010751,-0.164770]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.014847,-0.194503]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.018943,-0.222120]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.027135,-0.272864]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.035327,-0.316883]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.051711,-0.387976]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.068095,-0.440262]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.084479,-0.478271]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.100863,-0.505698]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.117247,-0.525392]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.133631,-0.539489]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.150015,-0.549561]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.182783,-0.562727]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.215551,-0.569384]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.248319,-0.572531]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.281087,-0.573915]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.313855,-0.574469]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.379391,-0.574889]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.444927,-0.574814]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.575999,-0.574640]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.707071,-0.574497]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.969215,-0.574438]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([4.493503,-0.574425]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([5.542079,-0.574423]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([7.639231,-0.574423]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([8.0,-0.574423]);

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
	GFLVSC_injectorGFL_PGenPu.push([3.0,0.833341]);
	GFLVSC_injectorGFL_PGenPu.push([3.000001,0.833348]);
	GFLVSC_injectorGFL_PGenPu.push([3.000003,0.833363]);
	GFLVSC_injectorGFL_PGenPu.push([3.000007,0.833394]);
	GFLVSC_injectorGFL_PGenPu.push([3.000015,0.833454]);
	GFLVSC_injectorGFL_PGenPu.push([3.000031,0.833573]);
	GFLVSC_injectorGFL_PGenPu.push([3.000063,0.833806]);
	GFLVSC_injectorGFL_PGenPu.push([3.000127,0.834253]);
	GFLVSC_injectorGFL_PGenPu.push([3.000255,0.835078]);
	GFLVSC_injectorGFL_PGenPu.push([3.000511,0.836502]);
	GFLVSC_injectorGFL_PGenPu.push([3.001023,0.838706]);
	GFLVSC_injectorGFL_PGenPu.push([3.001535,0.840304]);
	GFLVSC_injectorGFL_PGenPu.push([3.002559,0.842718]);
	GFLVSC_injectorGFL_PGenPu.push([3.003583,0.844381]);
	GFLVSC_injectorGFL_PGenPu.push([3.004607,0.845991]);
	GFLVSC_injectorGFL_PGenPu.push([3.006655,0.849016]);
	GFLVSC_injectorGFL_PGenPu.push([3.010751,0.854370]);
	GFLVSC_injectorGFL_PGenPu.push([3.014847,0.859088]);
	GFLVSC_injectorGFL_PGenPu.push([3.018943,0.863222]);
	GFLVSC_injectorGFL_PGenPu.push([3.027135,0.870264]);
	GFLVSC_injectorGFL_PGenPu.push([3.035327,0.875512]);
	GFLVSC_injectorGFL_PGenPu.push([3.051711,0.881744]);
	GFLVSC_injectorGFL_PGenPu.push([3.068095,0.883519]);
	GFLVSC_injectorGFL_PGenPu.push([3.084479,0.882320]);
	GFLVSC_injectorGFL_PGenPu.push([3.100863,0.879312]);
	GFLVSC_injectorGFL_PGenPu.push([3.117247,0.875334]);
	GFLVSC_injectorGFL_PGenPu.push([3.133631,0.870959]);
	GFLVSC_injectorGFL_PGenPu.push([3.150015,0.866556]);
	GFLVSC_injectorGFL_PGenPu.push([3.182783,0.858539]);
	GFLVSC_injectorGFL_PGenPu.push([3.215551,0.851873]);
	GFLVSC_injectorGFL_PGenPu.push([3.248319,0.846666]);
	GFLVSC_injectorGFL_PGenPu.push([3.281087,0.842754]);
	GFLVSC_injectorGFL_PGenPu.push([3.313855,0.839911]);
	GFLVSC_injectorGFL_PGenPu.push([3.379391,0.836245]);
	GFLVSC_injectorGFL_PGenPu.push([3.444927,0.834462]);
	GFLVSC_injectorGFL_PGenPu.push([3.575999,0.832959]);
	GFLVSC_injectorGFL_PGenPu.push([3.707071,0.833171]);
	GFLVSC_injectorGFL_PGenPu.push([3.969215,0.833289]);
	GFLVSC_injectorGFL_PGenPu.push([4.493503,0.833326]);
	GFLVSC_injectorGFL_PGenPu.push([5.542079,0.833332]);
	GFLVSC_injectorGFL_PGenPu.push([7.639231,0.833333]);
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
	GFLVSC_injectorGFL_QGenPu.push([3.0,0.039189]);
	GFLVSC_injectorGFL_QGenPu.push([3.000001,0.039228]);
	GFLVSC_injectorGFL_QGenPu.push([3.000003,0.039307]);
	GFLVSC_injectorGFL_QGenPu.push([3.000007,0.039465]);
	GFLVSC_injectorGFL_QGenPu.push([3.000015,0.039778]);
	GFLVSC_injectorGFL_QGenPu.push([3.000031,0.040398]);
	GFLVSC_injectorGFL_QGenPu.push([3.000063,0.041613]);
	GFLVSC_injectorGFL_QGenPu.push([3.000127,0.043946]);
	GFLVSC_injectorGFL_QGenPu.push([3.000255,0.048259]);
	GFLVSC_injectorGFL_QGenPu.push([3.000511,0.055722]);
	GFLVSC_injectorGFL_QGenPu.push([3.001023,0.067365]);
	GFLVSC_injectorGFL_QGenPu.push([3.001535,0.075885]);
	GFLVSC_injectorGFL_QGenPu.push([3.002559,0.088995]);
	GFLVSC_injectorGFL_QGenPu.push([3.003583,0.098346]);
	GFLVSC_injectorGFL_QGenPu.push([3.004607,0.107548]);
	GFLVSC_injectorGFL_QGenPu.push([3.006655,0.125357]);
	GFLVSC_injectorGFL_QGenPu.push([3.010751,0.158775]);
	GFLVSC_injectorGFL_QGenPu.push([3.014847,0.190264]);
	GFLVSC_injectorGFL_QGenPu.push([3.018943,0.219887]);
	GFLVSC_injectorGFL_QGenPu.push([3.027135,0.275197]);
	GFLVSC_injectorGFL_QGenPu.push([3.035327,0.324324]);
	GFLVSC_injectorGFL_QGenPu.push([3.051711,0.405907]);
	GFLVSC_injectorGFL_QGenPu.push([3.068095,0.467784]);
	GFLVSC_injectorGFL_QGenPu.push([3.084479,0.513864]);
	GFLVSC_injectorGFL_QGenPu.push([3.100863,0.547772]);
	GFLVSC_injectorGFL_QGenPu.push([3.117247,0.572434]);
	GFLVSC_injectorGFL_QGenPu.push([3.133631,0.590215]);
	GFLVSC_injectorGFL_QGenPu.push([3.150015,0.602949]);
	GFLVSC_injectorGFL_QGenPu.push([3.182783,0.619641]);
	GFLVSC_injectorGFL_QGenPu.push([3.215551,0.627923]);
	GFLVSC_injectorGFL_QGenPu.push([3.248319,0.631733]);
	GFLVSC_injectorGFL_QGenPu.push([3.281087,0.633369]);
	GFLVSC_injectorGFL_QGenPu.push([3.313855,0.633997]);
	GFLVSC_injectorGFL_QGenPu.push([3.379391,0.634475]);
	GFLVSC_injectorGFL_QGenPu.push([3.444927,0.634390]);
	GFLVSC_injectorGFL_QGenPu.push([3.575999,0.634223]);
	GFLVSC_injectorGFL_QGenPu.push([3.707071,0.634084]);
	GFLVSC_injectorGFL_QGenPu.push([3.969215,0.634032]);
	GFLVSC_injectorGFL_QGenPu.push([4.493503,0.634020]);
	GFLVSC_injectorGFL_QGenPu.push([5.542079,0.634019]);
	GFLVSC_injectorGFL_QGenPu.push([7.639231,0.634019]);
	GFLVSC_injectorGFL_QGenPu.push([8.0,0.634019]);

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
	GFLVSC_injectorGFL_UConvPu.push([3.0,0.998795]);
	GFLVSC_injectorGFL_UConvPu.push([3.000001,0.998810]);
	GFLVSC_injectorGFL_UConvPu.push([3.000003,0.998839]);
	GFLVSC_injectorGFL_UConvPu.push([3.000007,0.998898]);
	GFLVSC_injectorGFL_UConvPu.push([3.000015,0.999015]);
	GFLVSC_injectorGFL_UConvPu.push([3.000031,0.999247]);
	GFLVSC_injectorGFL_UConvPu.push([3.000063,0.999700]);
	GFLVSC_injectorGFL_UConvPu.push([3.000127,1.000571]);
	GFLVSC_injectorGFL_UConvPu.push([3.000255,1.002178]);
	GFLVSC_injectorGFL_UConvPu.push([3.000511,1.004952]);
	GFLVSC_injectorGFL_UConvPu.push([3.001023,1.009261]);
	GFLVSC_injectorGFL_UConvPu.push([3.001535,1.012402]);
	GFLVSC_injectorGFL_UConvPu.push([3.002559,1.017209]);
	GFLVSC_injectorGFL_UConvPu.push([3.003583,1.020623]);
	GFLVSC_injectorGFL_UConvPu.push([3.004607,1.023970]);
	GFLVSC_injectorGFL_UConvPu.push([3.006655,1.030412]);
	GFLVSC_injectorGFL_UConvPu.push([3.010751,1.042378]);
	GFLVSC_injectorGFL_UConvPu.push([3.014847,1.053499]);
	GFLVSC_injectorGFL_UConvPu.push([3.018943,1.063840]);
	GFLVSC_injectorGFL_UConvPu.push([3.027135,1.082878]);
	GFLVSC_injectorGFL_UConvPu.push([3.035327,1.099454]);
	GFLVSC_injectorGFL_UConvPu.push([3.051711,1.126394]);
	GFLVSC_injectorGFL_UConvPu.push([3.068095,1.146396]);
	GFLVSC_injectorGFL_UConvPu.push([3.084479,1.161070]);
	GFLVSC_injectorGFL_UConvPu.push([3.100863,1.171741]);
	GFLVSC_injectorGFL_UConvPu.push([3.117247,1.179445]);
	GFLVSC_injectorGFL_UConvPu.push([3.133631,1.184978]);
	GFLVSC_injectorGFL_UConvPu.push([3.150015,1.188934]);
	GFLVSC_injectorGFL_UConvPu.push([3.182783,1.194098]);
	GFLVSC_injectorGFL_UConvPu.push([3.215551,1.196702]);
	GFLVSC_injectorGFL_UConvPu.push([3.248319,1.197930]);
	GFLVSC_injectorGFL_UConvPu.push([3.281087,1.198473]);
	GFLVSC_injectorGFL_UConvPu.push([3.313855,1.198696]);
	GFLVSC_injectorGFL_UConvPu.push([3.379391,1.198883]);
	GFLVSC_injectorGFL_UConvPu.push([3.444927,1.198879]);
	GFLVSC_injectorGFL_UConvPu.push([3.575999,1.198846]);
	GFLVSC_injectorGFL_UConvPu.push([3.707071,1.198802]);
	GFLVSC_injectorGFL_UConvPu.push([3.969215,1.198784]);
	GFLVSC_injectorGFL_UConvPu.push([4.493503,1.198781]);
	GFLVSC_injectorGFL_UConvPu.push([5.542079,1.198780]);
	GFLVSC_injectorGFL_UConvPu.push([7.639231,1.198780]);
	GFLVSC_injectorGFL_UConvPu.push([8.0,1.198780]);

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
	GFLVSC_injectorGFL_UPccPu.push([3.0,1.000011]);
	GFLVSC_injectorGFL_UPccPu.push([3.000001,1.000021]);
	GFLVSC_injectorGFL_UPccPu.push([3.000003,1.000039]);
	GFLVSC_injectorGFL_UPccPu.push([3.000007,1.000075]);
	GFLVSC_injectorGFL_UPccPu.push([3.000015,1.000147]);
	GFLVSC_injectorGFL_UPccPu.push([3.000031,1.000290]);
	GFLVSC_injectorGFL_UPccPu.push([3.000063,1.000570]);
	GFLVSC_injectorGFL_UPccPu.push([3.000127,1.001106]);
	GFLVSC_injectorGFL_UPccPu.push([3.000255,1.002097]);
	GFLVSC_injectorGFL_UPccPu.push([3.000511,1.003807]);
	GFLVSC_injectorGFL_UPccPu.push([3.001023,1.006463]);
	GFLVSC_injectorGFL_UPccPu.push([3.001535,1.008399]);
	GFLVSC_injectorGFL_UPccPu.push([3.002559,1.011363]);
	GFLVSC_injectorGFL_UPccPu.push([3.003583,1.013470]);
	GFLVSC_injectorGFL_UPccPu.push([3.004607,1.015535]);
	GFLVSC_injectorGFL_UPccPu.push([3.006655,1.019513]);
	GFLVSC_injectorGFL_UPccPu.push([3.010751,1.026909]);
	GFLVSC_injectorGFL_UPccPu.push([3.014847,1.033790]);
	GFLVSC_injectorGFL_UPccPu.push([3.018943,1.040194]);
	GFLVSC_injectorGFL_UPccPu.push([3.027135,1.051996]);
	GFLVSC_injectorGFL_UPccPu.push([3.035327,1.062294]);
	GFLVSC_injectorGFL_UPccPu.push([3.051711,1.079086]);
	GFLVSC_injectorGFL_UPccPu.push([3.068095,1.091624]);
	GFLVSC_injectorGFL_UPccPu.push([3.084479,1.100884]);
	GFLVSC_injectorGFL_UPccPu.push([3.100863,1.107670]);
	GFLVSC_injectorGFL_UPccPu.push([3.117247,1.112615]);
	GFLVSC_injectorGFL_UPccPu.push([3.133631,1.116203]);
	GFLVSC_injectorGFL_UPccPu.push([3.150015,1.118801]);
	GFLVSC_injectorGFL_UPccPu.push([3.182783,1.122247]);
	GFLVSC_injectorGFL_UPccPu.push([3.215551,1.124051]);
	GFLVSC_injectorGFL_UPccPu.push([3.248319,1.124954]);
	GFLVSC_injectorGFL_UPccPu.push([3.281087,1.125393]);
	GFLVSC_injectorGFL_UPccPu.push([3.313855,1.125606]);
	GFLVSC_injectorGFL_UPccPu.push([3.379391,1.125815]);
	GFLVSC_injectorGFL_UPccPu.push([3.444927,1.125858]);
	GFLVSC_injectorGFL_UPccPu.push([3.575999,1.125875]);
	GFLVSC_injectorGFL_UPccPu.push([3.707071,1.125842]);
	GFLVSC_injectorGFL_UPccPu.push([3.969215,1.125828]);
	GFLVSC_injectorGFL_UPccPu.push([4.493503,1.125825]);
	GFLVSC_injectorGFL_UPccPu.push([5.542079,1.125824]);
	GFLVSC_injectorGFL_UPccPu.push([7.639231,1.125824]);
	GFLVSC_injectorGFL_UPccPu.push([8.0,1.125824]);

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
