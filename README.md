# BiGER

This repository contains:

- a technical report (latex and pdf) describing the use cases, with a description of the cases, their input data, their modeling and implementation choices
- a test models folder containing converter models implementations in EMTP, Dynawo and STEPSS
- a test systems folder, containing three test systems:
  - a 1-VSC system mainly used for validation
  - the 4-VSC test system. This benchmark was originally proposed by Prof. Thierry Van Cutsem (formerly with University of Liège, Belgium, acting as consultant for CRESYM). The VSC dynamic model was developed and validated by the team of Prof. Xavier Guillaud (Ecole Centrale de Lille, France). As part of the BiGER project (CRESYM), this test system has been implemented in Dynawo and EMTP.
  - the Nordic test system. The Nordic test system adapts the well-documented benchmark system for Electromagnetic Transient (EMT)
simulations, enabling comparisons with phasor-mode simulations. This benchmark system offers a model for evaluating new solutions for assessing, detecting, and mitigating voltage instability, particularly focusing on long-term voltage instability that leads to collapse typically a few minutes after the initiating events, approximately 90 seconds. The classical test system is implemented here in various tools such as EMTP, DigSilent PowerFactory, RSCAD and STEPSS, and variants with VSCs as replacement of synchronous generators are also implemented to shift from long-term to short-term dynamics. For more details, please look at the technical report.
