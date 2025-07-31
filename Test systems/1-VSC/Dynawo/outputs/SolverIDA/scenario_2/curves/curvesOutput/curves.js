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
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([2.999999,0.866648]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.0,0.866653]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000001,0.866658]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000003,0.866668]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000007,0.866688]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000015,0.866728]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000031,0.866808]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000063,0.866967]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000127,0.867286]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000255,0.867922]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.000511,0.869186]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.001023,0.871689]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.002047,0.876627]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.003071,0.881491]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.005119,0.891061]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.007167,0.900351]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.011263,0.918223]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.019455,0.951448]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.027647,0.982359]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032411,0.999089]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032411,0.999089]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032412,0.999089]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032413,0.999090]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032415,0.999091]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032419,0.999091]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032427,0.999091]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032443,0.999091]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032475,0.999092]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032539,0.999093]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032667,0.999095]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.032923,0.999100]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.033435,0.999115]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.034459,0.999158]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036041,0.999224]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036041,0.999224]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036042,0.999224]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036043,0.999224]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036045,0.999224]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036049,0.999224]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036057,0.999225]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036073,0.999225]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036105,0.999227]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036169,0.999229]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036297,0.999235]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.036553,0.999245]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.037065,0.999266]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.038089,0.999303]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.040137,0.999358]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.044233,0.999412]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.048329,0.999427]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.056521,0.999378]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.064713,0.999297]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.081097,0.999109]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.113865,0.998893]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.146633,0.998805]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.179401,0.998782]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.244937,0.998793]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.376009,0.998812]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([3.638153,0.998818]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([4.162441,0.998819]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([5.211017,0.998819]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([7.308169,0.998819]);
	GFLVSC_controlGFL_activePowerLoop_idRefPu.push([8.0,0.998819]);

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
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000127,-0.039931]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000255,-0.039930]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.000511,-0.039923]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.001023,-0.039893]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.002047,-0.039780]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.003071,-0.039611]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.005119,-0.039187]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.007167,-0.038682]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.011263,-0.037745]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.019455,-0.036574]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.027647,-0.036228]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032411,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032411,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032412,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032413,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032415,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032419,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032427,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032443,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032475,-0.036479]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032539,-0.036480]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032667,-0.036482]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.032923,-0.036488]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.033435,-0.036506]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.034459,-0.036576]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036041,-0.036790]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036041,-0.036790]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036042,-0.036790]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036043,-0.036790]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036045,-0.036791]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036049,-0.036791]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036057,-0.036792]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036073,-0.036794]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036105,-0.036798]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036169,-0.036806]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036297,-0.036822]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.036553,-0.036857]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.037065,-0.036936]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.038089,-0.037123]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.040137,-0.037597]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.044233,-0.038777]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.048329,-0.040067]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.056521,-0.042565]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.064713,-0.044734]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.081097,-0.047508]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.113865,-0.049375]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.146633,-0.049634]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.179401,-0.049368]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.244937,-0.048847]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.376009,-0.048553]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([3.638153,-0.048544]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([4.162441,-0.048582]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([5.211017,-0.048594]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([7.308169,-0.048595]);
	GFLVSC_controlGFL_reactivePowerLoop_iqRefPu.push([8.0,-0.048595]);

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
	GFLVSC_injectorGFL_PGenPu.push([3.0,0.833352]);
	GFLVSC_injectorGFL_PGenPu.push([3.000001,0.833372]);
	GFLVSC_injectorGFL_PGenPu.push([3.000003,0.833410]);
	GFLVSC_injectorGFL_PGenPu.push([3.000007,0.833488]);
	GFLVSC_injectorGFL_PGenPu.push([3.000015,0.833642]);
	GFLVSC_injectorGFL_PGenPu.push([3.000031,0.833946]);
	GFLVSC_injectorGFL_PGenPu.push([3.000063,0.834544]);
	GFLVSC_injectorGFL_PGenPu.push([3.000127,0.835695]);
	GFLVSC_injectorGFL_PGenPu.push([3.000255,0.837837]);
	GFLVSC_injectorGFL_PGenPu.push([3.000511,0.841582]);
	GFLVSC_injectorGFL_PGenPu.push([3.001023,0.847520]);
	GFLVSC_injectorGFL_PGenPu.push([3.002047,0.855928]);
	GFLVSC_injectorGFL_PGenPu.push([3.003071,0.861725]);
	GFLVSC_injectorGFL_PGenPu.push([3.005119,0.871592]);
	GFLVSC_injectorGFL_PGenPu.push([3.007167,0.880099]);
	GFLVSC_injectorGFL_PGenPu.push([3.011263,0.896868]);
	GFLVSC_injectorGFL_PGenPu.push([3.019455,0.927636]);
	GFLVSC_injectorGFL_PGenPu.push([3.027647,0.955896]);
	GFLVSC_injectorGFL_PGenPu.push([3.032411,0.971075]);
	GFLVSC_injectorGFL_PGenPu.push([3.032411,0.971115]);
	GFLVSC_injectorGFL_PGenPu.push([3.032412,0.971118]);
	GFLVSC_injectorGFL_PGenPu.push([3.032413,0.971121]);
	GFLVSC_injectorGFL_PGenPu.push([3.032415,0.971128]);
	GFLVSC_injectorGFL_PGenPu.push([3.032419,0.971141]);
	GFLVSC_injectorGFL_PGenPu.push([3.032427,0.971167]);
	GFLVSC_injectorGFL_PGenPu.push([3.032443,0.971217]);
	GFLVSC_injectorGFL_PGenPu.push([3.032475,0.971314]);
	GFLVSC_injectorGFL_PGenPu.push([3.032539,0.971493]);
	GFLVSC_injectorGFL_PGenPu.push([3.032667,0.971798]);
	GFLVSC_injectorGFL_PGenPu.push([3.032923,0.972245]);
	GFLVSC_injectorGFL_PGenPu.push([3.033435,0.972725]);
	GFLVSC_injectorGFL_PGenPu.push([3.034459,0.972943]);
	GFLVSC_injectorGFL_PGenPu.push([3.036041,0.972677]);
	GFLVSC_injectorGFL_PGenPu.push([3.036041,0.972677]);
	GFLVSC_injectorGFL_PGenPu.push([3.036042,0.972678]);
	GFLVSC_injectorGFL_PGenPu.push([3.036043,0.972678]);
	GFLVSC_injectorGFL_PGenPu.push([3.036045,0.972678]);
	GFLVSC_injectorGFL_PGenPu.push([3.036049,0.972677]);
	GFLVSC_injectorGFL_PGenPu.push([3.036057,0.972677]);
	GFLVSC_injectorGFL_PGenPu.push([3.036073,0.972675]);
	GFLVSC_injectorGFL_PGenPu.push([3.036105,0.972672]);
	GFLVSC_injectorGFL_PGenPu.push([3.036169,0.972664]);
	GFLVSC_injectorGFL_PGenPu.push([3.036297,0.972646]);
	GFLVSC_injectorGFL_PGenPu.push([3.036553,0.972597]);
	GFLVSC_injectorGFL_PGenPu.push([3.037065,0.972478]);
	GFLVSC_injectorGFL_PGenPu.push([3.038089,0.972215]);
	GFLVSC_injectorGFL_PGenPu.push([3.040137,0.971750]);
	GFLVSC_injectorGFL_PGenPu.push([3.044233,0.971178]);
	GFLVSC_injectorGFL_PGenPu.push([3.048329,0.970902]);
	GFLVSC_injectorGFL_PGenPu.push([3.056521,0.971013]);
	GFLVSC_injectorGFL_PGenPu.push([3.064713,0.971442]);
	GFLVSC_injectorGFL_PGenPu.push([3.081097,0.972414]);
	GFLVSC_injectorGFL_PGenPu.push([3.113865,0.973530]);
	GFLVSC_injectorGFL_PGenPu.push([3.146633,0.974005]);
	GFLVSC_injectorGFL_PGenPu.push([3.179401,0.974158]);
	GFLVSC_injectorGFL_PGenPu.push([3.244937,0.974157]);
	GFLVSC_injectorGFL_PGenPu.push([3.376009,0.974102]);
	GFLVSC_injectorGFL_PGenPu.push([3.638153,0.974081]);
	GFLVSC_injectorGFL_PGenPu.push([4.162441,0.974080]);
	GFLVSC_injectorGFL_PGenPu.push([5.211017,0.974080]);
	GFLVSC_injectorGFL_PGenPu.push([7.308169,0.974080]);
	GFLVSC_injectorGFL_PGenPu.push([8.0,0.974080]);

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
	GFLVSC_injectorGFL_QGenPu.push([3.000003,0.039164]);
	GFLVSC_injectorGFL_QGenPu.push([3.000007,0.039180]);
	GFLVSC_injectorGFL_QGenPu.push([3.000015,0.039211]);
	GFLVSC_injectorGFL_QGenPu.push([3.000031,0.039273]);
	GFLVSC_injectorGFL_QGenPu.push([3.000063,0.039403]);
	GFLVSC_injectorGFL_QGenPu.push([3.000127,0.039675]);
	GFLVSC_injectorGFL_QGenPu.push([3.000255,0.040259]);
	GFLVSC_injectorGFL_QGenPu.push([3.000511,0.041509]);
	GFLVSC_injectorGFL_QGenPu.push([3.001023,0.043996]);
	GFLVSC_injectorGFL_QGenPu.push([3.002047,0.048077]);
	GFLVSC_injectorGFL_QGenPu.push([3.003071,0.050840]);
	GFLVSC_injectorGFL_QGenPu.push([3.005119,0.053967]);
	GFLVSC_injectorGFL_QGenPu.push([3.007167,0.054718]);
	GFLVSC_injectorGFL_QGenPu.push([3.011263,0.054774]);
	GFLVSC_injectorGFL_QGenPu.push([3.019455,0.052042]);
	GFLVSC_injectorGFL_QGenPu.push([3.027647,0.048476]);
	GFLVSC_injectorGFL_QGenPu.push([3.032411,0.046551]);
	GFLVSC_injectorGFL_QGenPu.push([3.032411,0.046546]);
	GFLVSC_injectorGFL_QGenPu.push([3.032412,0.046546]);
	GFLVSC_injectorGFL_QGenPu.push([3.032413,0.046546]);
	GFLVSC_injectorGFL_QGenPu.push([3.032415,0.046545]);
	GFLVSC_injectorGFL_QGenPu.push([3.032419,0.046543]);
	GFLVSC_injectorGFL_QGenPu.push([3.032427,0.046540]);
	GFLVSC_injectorGFL_QGenPu.push([3.032443,0.046533]);
	GFLVSC_injectorGFL_QGenPu.push([3.032475,0.046517]);
	GFLVSC_injectorGFL_QGenPu.push([3.032539,0.046482]);
	GFLVSC_injectorGFL_QGenPu.push([3.032667,0.046394]);
	GFLVSC_injectorGFL_QGenPu.push([3.032923,0.046153]);
	GFLVSC_injectorGFL_QGenPu.push([3.033435,0.045473]);
	GFLVSC_injectorGFL_QGenPu.push([3.034459,0.043734]);
	GFLVSC_injectorGFL_QGenPu.push([3.036041,0.041022]);
	GFLVSC_injectorGFL_QGenPu.push([3.036041,0.041022]);
	GFLVSC_injectorGFL_QGenPu.push([3.036042,0.041021]);
	GFLVSC_injectorGFL_QGenPu.push([3.036043,0.041019]);
	GFLVSC_injectorGFL_QGenPu.push([3.036045,0.041015]);
	GFLVSC_injectorGFL_QGenPu.push([3.036049,0.041009]);
	GFLVSC_injectorGFL_QGenPu.push([3.036057,0.040995]);
	GFLVSC_injectorGFL_QGenPu.push([3.036073,0.040967]);
	GFLVSC_injectorGFL_QGenPu.push([3.036105,0.040913]);
	GFLVSC_injectorGFL_QGenPu.push([3.036169,0.040803]);
	GFLVSC_injectorGFL_QGenPu.push([3.036297,0.040582]);
	GFLVSC_injectorGFL_QGenPu.push([3.036553,0.040142]);
	GFLVSC_injectorGFL_QGenPu.push([3.037065,0.039278]);
	GFLVSC_injectorGFL_QGenPu.push([3.038089,0.037683]);
	GFLVSC_injectorGFL_QGenPu.push([3.040137,0.035121]);
	GFLVSC_injectorGFL_QGenPu.push([3.044233,0.032103]);
	GFLVSC_injectorGFL_QGenPu.push([3.048329,0.030662]);
	GFLVSC_injectorGFL_QGenPu.push([3.056521,0.031174]);
	GFLVSC_injectorGFL_QGenPu.push([3.064713,0.033296]);
	GFLVSC_injectorGFL_QGenPu.push([3.081097,0.038365]);
	GFLVSC_injectorGFL_QGenPu.push([3.113865,0.044346]);
	GFLVSC_injectorGFL_QGenPu.push([3.146633,0.046968]);
	GFLVSC_injectorGFL_QGenPu.push([3.179401,0.047822]);
	GFLVSC_injectorGFL_QGenPu.push([3.244937,0.047815]);
	GFLVSC_injectorGFL_QGenPu.push([3.376009,0.047511]);
	GFLVSC_injectorGFL_QGenPu.push([3.638153,0.047393]);
	GFLVSC_injectorGFL_QGenPu.push([4.162441,0.047387]);
	GFLVSC_injectorGFL_QGenPu.push([5.211017,0.047391]);
	GFLVSC_injectorGFL_QGenPu.push([7.308169,0.047391]);
	GFLVSC_injectorGFL_QGenPu.push([8.0,0.047391]);

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
	GFLVSC_injectorGFL_UConvPu.push([3.000001,0.998782]);
	GFLVSC_injectorGFL_UConvPu.push([3.000003,0.998784]);
	GFLVSC_injectorGFL_UConvPu.push([3.000007,0.998788]);
	GFLVSC_injectorGFL_UConvPu.push([3.000015,0.998797]);
	GFLVSC_injectorGFL_UConvPu.push([3.000031,0.998815]);
	GFLVSC_injectorGFL_UConvPu.push([3.000063,0.998852]);
	GFLVSC_injectorGFL_UConvPu.push([3.000127,0.998932]);
	GFLVSC_injectorGFL_UConvPu.push([3.000255,0.999110]);
	GFLVSC_injectorGFL_UConvPu.push([3.000511,0.999507]);
	GFLVSC_injectorGFL_UConvPu.push([3.001023,1.000326]);
	GFLVSC_injectorGFL_UConvPu.push([3.002047,1.001694]);
	GFLVSC_injectorGFL_UConvPu.push([3.003071,1.002615]);
	GFLVSC_injectorGFL_UConvPu.push([3.005119,1.003587]);
	GFLVSC_injectorGFL_UConvPu.push([3.007167,1.003692]);
	GFLVSC_injectorGFL_UConvPu.push([3.011263,1.003355]);
	GFLVSC_injectorGFL_UConvPu.push([3.019455,1.001642]);
	GFLVSC_injectorGFL_UConvPu.push([3.027647,0.999633]);
	GFLVSC_injectorGFL_UConvPu.push([3.032411,0.998528]);
	GFLVSC_injectorGFL_UConvPu.push([3.032411,0.998532]);
	GFLVSC_injectorGFL_UConvPu.push([3.032412,0.998532]);
	GFLVSC_injectorGFL_UConvPu.push([3.032413,0.998532]);
	GFLVSC_injectorGFL_UConvPu.push([3.032415,0.998532]);
	GFLVSC_injectorGFL_UConvPu.push([3.032419,0.998531]);
	GFLVSC_injectorGFL_UConvPu.push([3.032427,0.998529]);
	GFLVSC_injectorGFL_UConvPu.push([3.032443,0.998525]);
	GFLVSC_injectorGFL_UConvPu.push([3.032475,0.998516]);
	GFLVSC_injectorGFL_UConvPu.push([3.032539,0.998499]);
	GFLVSC_injectorGFL_UConvPu.push([3.032667,0.998458]);
	GFLVSC_injectorGFL_UConvPu.push([3.032923,0.998355]);
	GFLVSC_injectorGFL_UConvPu.push([3.033435,0.998085]);
	GFLVSC_injectorGFL_UConvPu.push([3.034459,0.997420]);
	GFLVSC_injectorGFL_UConvPu.push([3.036041,0.996395]);
	GFLVSC_injectorGFL_UConvPu.push([3.036041,0.996395]);
	GFLVSC_injectorGFL_UConvPu.push([3.036042,0.996395]);
	GFLVSC_injectorGFL_UConvPu.push([3.036043,0.996394]);
	GFLVSC_injectorGFL_UConvPu.push([3.036045,0.996393]);
	GFLVSC_injectorGFL_UConvPu.push([3.036049,0.996390]);
	GFLVSC_injectorGFL_UConvPu.push([3.036057,0.996385]);
	GFLVSC_injectorGFL_UConvPu.push([3.036073,0.996375]);
	GFLVSC_injectorGFL_UConvPu.push([3.036105,0.996354]);
	GFLVSC_injectorGFL_UConvPu.push([3.036169,0.996312]);
	GFLVSC_injectorGFL_UConvPu.push([3.036297,0.996229]);
	GFLVSC_injectorGFL_UConvPu.push([3.036553,0.996062]);
	GFLVSC_injectorGFL_UConvPu.push([3.037065,0.995737]);
	GFLVSC_injectorGFL_UConvPu.push([3.038089,0.995136]);
	GFLVSC_injectorGFL_UConvPu.push([3.040137,0.994171]);
	GFLVSC_injectorGFL_UConvPu.push([3.044233,0.993033]);
	GFLVSC_injectorGFL_UConvPu.push([3.048329,0.992489]);
	GFLVSC_injectorGFL_UConvPu.push([3.056521,0.992682]);
	GFLVSC_injectorGFL_UConvPu.push([3.064713,0.993483]);
	GFLVSC_injectorGFL_UConvPu.push([3.081097,0.995390]);
	GFLVSC_injectorGFL_UConvPu.push([3.113865,0.997638]);
	GFLVSC_injectorGFL_UConvPu.push([3.146633,0.998621]);
	GFLVSC_injectorGFL_UConvPu.push([3.179401,0.998942]);
	GFLVSC_injectorGFL_UConvPu.push([3.244937,0.998939]);
	GFLVSC_injectorGFL_UConvPu.push([3.376009,0.998825]);
	GFLVSC_injectorGFL_UConvPu.push([3.638153,0.998781]);
	GFLVSC_injectorGFL_UConvPu.push([4.162441,0.998779]);
	GFLVSC_injectorGFL_UConvPu.push([5.211017,0.998780]);
	GFLVSC_injectorGFL_UConvPu.push([7.308169,0.998780]);
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
	GFLVSC_injectorGFL_UPccPu.push([3.000015,1.000003]);
	GFLVSC_injectorGFL_UPccPu.push([3.000031,1.000003]);
	GFLVSC_injectorGFL_UPccPu.push([3.000063,1.000006]);
	GFLVSC_injectorGFL_UPccPu.push([3.000127,1.000017]);
	GFLVSC_injectorGFL_UPccPu.push([3.000255,1.000057]);
	GFLVSC_injectorGFL_UPccPu.push([3.000511,1.000179]);
	GFLVSC_injectorGFL_UPccPu.push([3.001023,1.000493]);
	GFLVSC_injectorGFL_UPccPu.push([3.002047,1.001067]);
	GFLVSC_injectorGFL_UPccPu.push([3.003071,1.001449]);
	GFLVSC_injectorGFL_UPccPu.push([3.005119,1.001716]);
	GFLVSC_injectorGFL_UPccPu.push([3.007167,1.001478]);
	GFLVSC_injectorGFL_UPccPu.push([3.011263,1.000652]);
	GFLVSC_injectorGFL_UPccPu.push([3.019455,0.998404]);
	GFLVSC_injectorGFL_UPccPu.push([3.027647,0.996012]);
	GFLVSC_injectorGFL_UPccPu.push([3.032411,0.994688]);
	GFLVSC_injectorGFL_UPccPu.push([3.032411,0.994698]);
	GFLVSC_injectorGFL_UPccPu.push([3.032412,0.994698]);
	GFLVSC_injectorGFL_UPccPu.push([3.032413,0.994698]);
	GFLVSC_injectorGFL_UPccPu.push([3.032415,0.994697]);
	GFLVSC_injectorGFL_UPccPu.push([3.032419,0.994696]);
	GFLVSC_injectorGFL_UPccPu.push([3.032427,0.994694]);
	GFLVSC_injectorGFL_UPccPu.push([3.032443,0.994689]);
	GFLVSC_injectorGFL_UPccPu.push([3.032475,0.994680]);
	GFLVSC_injectorGFL_UPccPu.push([3.032539,0.994661]);
	GFLVSC_injectorGFL_UPccPu.push([3.032667,0.994622]);
	GFLVSC_injectorGFL_UPccPu.push([3.032923,0.994539]);
	GFLVSC_injectorGFL_UPccPu.push([3.033435,0.994345]);
	GFLVSC_injectorGFL_UPccPu.push([3.034459,0.993908]);
	GFLVSC_injectorGFL_UPccPu.push([3.036041,0.993260]);
	GFLVSC_injectorGFL_UPccPu.push([3.036041,0.993260]);
	GFLVSC_injectorGFL_UPccPu.push([3.036042,0.993260]);
	GFLVSC_injectorGFL_UPccPu.push([3.036043,0.993259]);
	GFLVSC_injectorGFL_UPccPu.push([3.036045,0.993259]);
	GFLVSC_injectorGFL_UPccPu.push([3.036049,0.993257]);
	GFLVSC_injectorGFL_UPccPu.push([3.036057,0.993254]);
	GFLVSC_injectorGFL_UPccPu.push([3.036073,0.993247]);
	GFLVSC_injectorGFL_UPccPu.push([3.036105,0.993234]);
	GFLVSC_injectorGFL_UPccPu.push([3.036169,0.993207]);
	GFLVSC_injectorGFL_UPccPu.push([3.036297,0.993154]);
	GFLVSC_injectorGFL_UPccPu.push([3.036553,0.993049]);
	GFLVSC_injectorGFL_UPccPu.push([3.037065,0.992845]);
	GFLVSC_injectorGFL_UPccPu.push([3.038089,0.992469]);
	GFLVSC_injectorGFL_UPccPu.push([3.040137,0.991867]);
	GFLVSC_injectorGFL_UPccPu.push([3.044233,0.991158]);
	GFLVSC_injectorGFL_UPccPu.push([3.048329,0.990819]);
	GFLVSC_injectorGFL_UPccPu.push([3.056521,0.990939]);
	GFLVSC_injectorGFL_UPccPu.push([3.064713,0.991437]);
	GFLVSC_injectorGFL_UPccPu.push([3.081097,0.992625]);
	GFLVSC_injectorGFL_UPccPu.push([3.113865,0.994025]);
	GFLVSC_injectorGFL_UPccPu.push([3.146633,0.994638]);
	GFLVSC_injectorGFL_UPccPu.push([3.179401,0.994838]);
	GFLVSC_injectorGFL_UPccPu.push([3.244937,0.994836]);
	GFLVSC_injectorGFL_UPccPu.push([3.376009,0.994765]);
	GFLVSC_injectorGFL_UPccPu.push([3.638153,0.994738]);
	GFLVSC_injectorGFL_UPccPu.push([4.162441,0.994736]);
	GFLVSC_injectorGFL_UPccPu.push([5.211017,0.994737]);
	GFLVSC_injectorGFL_UPccPu.push([7.308169,0.994737]);
	GFLVSC_injectorGFL_UPccPu.push([8.0,0.994737]);

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
