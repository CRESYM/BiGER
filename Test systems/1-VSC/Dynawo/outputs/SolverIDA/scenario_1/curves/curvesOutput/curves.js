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
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([2.999999,0.848333]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.0,0.848332]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000001,0.848332]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000003,0.848331]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000007,0.848329]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000015,0.848325]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000031,0.848317]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000063,0.848301]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000127,0.848269]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000255,0.848205]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000511,0.848079]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.001023,0.847829]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.002047,0.847335]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.004095,0.846367]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.008191,0.844528]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.016383,0.841111]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032767,0.835185]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.065535,0.826139]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.098303,0.819259]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.163839,0.810850]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.229375,0.805720]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.294911,0.802589]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.425983,0.799836]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.557055,0.798624]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.819199,0.797940]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([4.081343,0.797748]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([4.605631,0.797685]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([5.654207,0.797673]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([7.751359,0.797672]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([8.0,0.797672]);

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
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([2.999999,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.0,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000001,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000003,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000007,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000015,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000031,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000063,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000127,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000255,-0.039932]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000511,-0.039933]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.001023,-0.039936]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.002047,-0.039947]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.004095,-0.039983]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.008191,-0.040077]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.016383,-0.040215]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032767,-0.040215]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.065535,-0.039705]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.098303,-0.039107]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.163839,-0.038314]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.229375,-0.037879]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.294911,-0.037651]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.425983,-0.037476]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.557055,-0.037398]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.819199,-0.037346]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([4.081343,-0.037327]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([4.605631,-0.037320]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([5.654207,-0.037318]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([7.751359,-0.037318]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([8.0,-0.037318]);

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
	GFLVSC_injectorGFL_PGenPu.push([3.0,0.833331]);
	GFLVSC_injectorGFL_PGenPu.push([3.000001,0.833329]);
	GFLVSC_injectorGFL_PGenPu.push([3.000003,0.833325]);
	GFLVSC_injectorGFL_PGenPu.push([3.000007,0.833318]);
	GFLVSC_injectorGFL_PGenPu.push([3.000015,0.833302]);
	GFLVSC_injectorGFL_PGenPu.push([3.000031,0.833272]);
	GFLVSC_injectorGFL_PGenPu.push([3.000063,0.833212]);
	GFLVSC_injectorGFL_PGenPu.push([3.000127,0.833097]);
	GFLVSC_injectorGFL_PGenPu.push([3.000255,0.832883]);
	GFLVSC_injectorGFL_PGenPu.push([3.000511,0.832508]);
	GFLVSC_injectorGFL_PGenPu.push([3.001023,0.831914]);
	GFLVSC_injectorGFL_PGenPu.push([3.002047,0.831074]);
	GFLVSC_injectorGFL_PGenPu.push([3.004095,0.829919]);
	GFLVSC_injectorGFL_PGenPu.push([3.008191,0.828247]);
	GFLVSC_injectorGFL_PGenPu.push([3.016383,0.825047]);
	GFLVSC_injectorGFL_PGenPu.push([3.032767,0.819512]);
	GFLVSC_injectorGFL_PGenPu.push([3.065535,0.810949]);
	GFLVSC_injectorGFL_PGenPu.push([3.098303,0.804337]);
	GFLVSC_injectorGFL_PGenPu.push([3.163839,0.796167]);
	GFLVSC_injectorGFL_PGenPu.push([3.229375,0.791164]);
	GFLVSC_injectorGFL_PGenPu.push([3.294911,0.788112]);
	GFLVSC_injectorGFL_PGenPu.push([3.425983,0.785434]);
	GFLVSC_injectorGFL_PGenPu.push([3.557055,0.784258]);
	GFLVSC_injectorGFL_PGenPu.push([3.819199,0.783594]);
	GFLVSC_injectorGFL_PGenPu.push([4.081343,0.783407]);
	GFLVSC_injectorGFL_PGenPu.push([4.605631,0.783345]);
	GFLVSC_injectorGFL_PGenPu.push([5.654207,0.783334]);
	GFLVSC_injectorGFL_PGenPu.push([7.751359,0.783333]);
	GFLVSC_injectorGFL_PGenPu.push([8.0,0.783333]);

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
	GFLVSC_injectorGFL_QGenPu.push([3.0,0.039149]);
	GFLVSC_injectorGFL_QGenPu.push([3.000001,0.039148]);
	GFLVSC_injectorGFL_QGenPu.push([3.000003,0.039148]);
	GFLVSC_injectorGFL_QGenPu.push([3.000007,0.039146]);
	GFLVSC_injectorGFL_QGenPu.push([3.000015,0.039143]);
	GFLVSC_injectorGFL_QGenPu.push([3.000031,0.039137]);
	GFLVSC_injectorGFL_QGenPu.push([3.000063,0.039124]);
	GFLVSC_injectorGFL_QGenPu.push([3.000127,0.039097]);
	GFLVSC_injectorGFL_QGenPu.push([3.000255,0.039039]);
	GFLVSC_injectorGFL_QGenPu.push([3.000511,0.038915]);
	GFLVSC_injectorGFL_QGenPu.push([3.001023,0.038669]);
	GFLVSC_injectorGFL_QGenPu.push([3.002047,0.038268]);
	GFLVSC_injectorGFL_QGenPu.push([3.004095,0.037794]);
	GFLVSC_injectorGFL_QGenPu.push([3.008191,0.037663]);
	GFLVSC_injectorGFL_QGenPu.push([3.016383,0.037831]);
	GFLVSC_injectorGFL_QGenPu.push([3.032767,0.038432]);
	GFLVSC_injectorGFL_QGenPu.push([3.065535,0.038827]);
	GFLVSC_injectorGFL_QGenPu.push([3.098303,0.038638]);
	GFLVSC_injectorGFL_QGenPu.push([3.163839,0.037910]);
	GFLVSC_injectorGFL_QGenPu.push([3.229375,0.037377]);
	GFLVSC_injectorGFL_QGenPu.push([3.294911,0.037062]);
	GFLVSC_injectorGFL_QGenPu.push([3.425983,0.036818]);
	GFLVSC_injectorGFL_QGenPu.push([3.557055,0.036722]);
	GFLVSC_injectorGFL_QGenPu.push([3.819199,0.036670]);
	GFLVSC_injectorGFL_QGenPu.push([4.081343,0.036654]);
	GFLVSC_injectorGFL_QGenPu.push([4.605631,0.036648]);
	GFLVSC_injectorGFL_QGenPu.push([5.654207,0.036647]);
	GFLVSC_injectorGFL_QGenPu.push([7.751359,0.036647]);
	GFLVSC_injectorGFL_QGenPu.push([8.0,0.036647]);

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
	GFLVSC_injectorGFL_UConvPu.push([3.0,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([3.000001,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([3.000003,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([3.000007,0.998779]);
	GFLVSC_injectorGFL_UConvPu.push([3.000015,0.998778]);
	GFLVSC_injectorGFL_UConvPu.push([3.000031,0.998777]);
	GFLVSC_injectorGFL_UConvPu.push([3.000063,0.998773]);
	GFLVSC_injectorGFL_UConvPu.push([3.000127,0.998765]);
	GFLVSC_injectorGFL_UConvPu.push([3.000255,0.998747]);
	GFLVSC_injectorGFL_UConvPu.push([3.000511,0.998708]);
	GFLVSC_injectorGFL_UConvPu.push([3.001023,0.998627]);
	GFLVSC_injectorGFL_UConvPu.push([3.002047,0.998492]);
	GFLVSC_injectorGFL_UConvPu.push([3.004095,0.998336]);
	GFLVSC_injectorGFL_UConvPu.push([3.008191,0.998319]);
	GFLVSC_injectorGFL_UConvPu.push([3.016383,0.998445]);
	GFLVSC_injectorGFL_UConvPu.push([3.032767,0.998779]);
	GFLVSC_injectorGFL_UConvPu.push([3.065535,0.999091]);
	GFLVSC_injectorGFL_UConvPu.push([3.098303,0.999144]);
	GFLVSC_injectorGFL_UConvPu.push([3.163839,0.999022]);
	GFLVSC_injectorGFL_UConvPu.push([3.229375,0.998913]);
	GFLVSC_injectorGFL_UConvPu.push([3.294911,0.998850]);
	GFLVSC_injectorGFL_UConvPu.push([3.425983,0.998807]);
	GFLVSC_injectorGFL_UConvPu.push([3.557055,0.998792]);
	GFLVSC_injectorGFL_UConvPu.push([3.819199,0.998784]);
	GFLVSC_injectorGFL_UConvPu.push([4.081343,0.998781]);
	GFLVSC_injectorGFL_UConvPu.push([4.605631,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([5.654207,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([7.751359,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([8.0,0.998780]);

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
	GFLVSC_injectorGFL_UPccPu.push([3.0,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([3.000001,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([3.000003,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([3.000007,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([3.000015,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([3.000031,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([3.000063,1.000002]);
	GFLVSC_injectorGFL_UPccPu.push([3.000127,1.000001]);
	GFLVSC_injectorGFL_UPccPu.push([3.000255,0.999997]);
	GFLVSC_injectorGFL_UPccPu.push([3.000511,0.999985]);
	GFLVSC_injectorGFL_UPccPu.push([3.001023,0.999954]);
	GFLVSC_injectorGFL_UPccPu.push([3.002047,0.999897]);
	GFLVSC_injectorGFL_UPccPu.push([3.004095,0.999838]);
	GFLVSC_injectorGFL_UPccPu.push([3.008191,0.999884]);
	GFLVSC_injectorGFL_UPccPu.push([3.016383,1.000073]);
	GFLVSC_injectorGFL_UPccPu.push([3.032767,1.000471]);
	GFLVSC_injectorGFL_UPccPu.push([3.065535,1.000956]);
	GFLVSC_injectorGFL_UPccPu.push([3.098303,1.001209]);
	GFLVSC_injectorGFL_UPccPu.push([3.163839,1.001401]);
	GFLVSC_injectorGFL_UPccPu.push([3.229375,1.001495]);
	GFLVSC_injectorGFL_UPccPu.push([3.294911,1.001554]);
	GFLVSC_injectorGFL_UPccPu.push([3.425983,1.001613]);
	GFLVSC_injectorGFL_UPccPu.push([3.557055,1.001642]);
	GFLVSC_injectorGFL_UPccPu.push([3.819199,1.001658]);
	GFLVSC_injectorGFL_UPccPu.push([4.081343,1.001663]);
	GFLVSC_injectorGFL_UPccPu.push([4.605631,1.001664]);
	GFLVSC_injectorGFL_UPccPu.push([5.654207,1.001664]);
	GFLVSC_injectorGFL_UPccPu.push([7.751359,1.001664]);
	GFLVSC_injectorGFL_UPccPu.push([8.0,1.001664]);

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
