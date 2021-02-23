---
title: "Stockfish 12"
date: 2020-09-02T11:44:00-08:00
aliases:
- /post/628172810852925440/stockfish-12
- /post/628172810852925440/stockfish-12/amp
---

It is our pleasure to release Stockfish 12 to users worldwide.

Downloads are freely available at

<https://stockfishchess.org/download/>

This version 12 of Stockfish plays significantly stronger than any of
its predecessors. In a match against Stockfish 11, Stockfish 12 will
typically win at least ten times more game pairs than it loses.

This jump in strength, visible in [regular progression tests during
development](https://github.com/glinscott/fishtest/wiki/Regression-Tests),
results from the [introduction of an efficiently updatable neural
network
(NNUE)](https://github.com/official-stockfish/Stockfish/commit/84f3e867903f62480c33243dd0ecbffd342796fc)
for the evaluation in Stockfish, and associated tuning of the engine as
a whole. The concept of the NNUE evaluation was first introduced in
shogi, and ported to Stockfish afterward. Stockfish remains a CPU-only
engine, since the NNUE networks can be very efficiently evaluated on
CPUs. The recommended parameters of the NNUE network are embedded in
distributed binaries, and Stockfish will use NNUE by default.

Both the NNUE and the classical evaluations are available, and can be
used to assign values to positions that are later used in alpha-beta
(PVS) search to find the best move. The classical evaluation computes
this value as a function of various chess concepts, handcrafted by
experts, tested and tuned using fishtest. The NNUE evaluation computes
this value with a neural network based on basic inputs. The network is
optimized and trained on the evaluations of millions of positions.

The Stockfish project builds on a thriving community of enthusiasts that
contribute their expertise, time, and resources to build a free and open
source chess engine that is robust, widely available, and very strong.
We invite chess fans to [join the fishtest testing
framework](https://stockfishchess.org/get-involved/) and programmers to
contribute on github.

Stay safe and enjoy chess!

The Stockfish team
