---
title: "Introducing NNUE Evaluation"
date: 2020-08-07T14:36:00-08:00
aliases:
- /post/625828091343896577/introducing-nnue-evaluation
- /post/625828091343896577/introducing-nnue-evaluation/amp
---

As of August 6, the efficiently updatable neural network (NNUE)
evaluation [has
landed](https://github.com/official-stockfish/Stockfish/commit/84f3e867903f62480c33243dd0ecbffd342796fc)
in the Stockfish repo!

## What is NNUE?

Both the NNUE and the classical evaluations are available, and can be
used to assign a value to a position that is later used in alpha-beta
(PVS) search to find the best move. The **classical evaluation**
computes this value as a function of various chess concepts, handcrafted
by experts, tested and tuned using fishtest. The **NNUE evaluation**
computes this value with a neural network based on basic inputs. The
network is optimized and trained on the evaluations of millions of
positions at moderate search depth.

The NNUE evaluation was first introduced in shogi, and ported to
Stockfish afterward. It can be evaluated efficiently on CPUs, and
exploits the fact that only parts of the neural network need to be
updated after a typical chess move. [The nodchip
repository](https://github.com/nodchip/Stockfish) provides additional
tools to train and develop the NNUE networks.

## Results

The performance of the NNUE evaluation relative to the classical
evaluation depends somewhat on the hardware, and is expected to improve
quickly, but is **currently on \> 80 Elo** on fishtest:

    60000 @ 10+0.1 th 1
    https://tests.stockfishchess.org/tests/view/5f28fe6ea5abc164f05e4c4c
    ELO: 92.77 +-2.1 (95%) LOS: 100.0%
    Total: 60000 W: 24193 L: 8543 D: 27264
    Ptnml(0-2): 609, 3850, 9708, 10948, 4885

    40000 @ 20+0.2 th 8
    https://tests.stockfishchess.org/tests/view/5f290229a5abc164f05e4c58
    ELO: 89.47 +-2.0 (95%) LOS: 100.0%
    Total: 40000 W: 12756 L: 2677 D: 24567
    Ptnml(0-2): 74, 1583, 8550, 7776, 2017

## Trying it out

Stockfish 12 is not expected to be released imminently--we want some
time to let this major change bake for a bit. But you might still want
to try out NNUE! Three simple steps:

1.  [Download the latest development build](https://abrok.eu/stockfish/)
    of Stockfish (or build yourself, [from
    GitHub](https://github.com/official-stockfish/Stockfish/))
2.  [Download the default net](https://tests.stockfishchess.org/nns).
    Currently that would be `nn-9931db908a9b.nnue` but you can check
    which is the default one as indicated by the `EvalFile` UCI option.
    Place the .nnue file in the same directory as the engine binary.
    (Tip: you could also run the `make net` command from the `src`
    directory to automatically download the default net)
3.  By default NNUE is off, but it can be enabled with the `Use NNUE`
    (true/false) UCI option, provided the `EvalFile` option points to
    the network file (if you put it in the same directory as the engine
    it should work, but in some cases you may need to specify the full
    path).

## Acknowledgements

This patch is the result of contributions of various authors, from
various communities, including: nodchip, ynasu87, yaneurao (initial port
and NNUE authors), domschl, FireFather, rqs, xXH4CKST3RXx, tttak,
zz4032, joergoster, mstembera, nguyenpham, erbsenzaehler, dorzechowski,
and vondele.

This new evaluation needed various changes to fishtest and the
corresponding infrastructure, for which tomtor, ppigazzini, noobpwnftw,
daylen, and vondele are gratefully acknowledged.

The first networks have been provided by gekkehenker and sergiovieri,
with the latter net being the current default.

## For Developers

Guidelines for testing new nets can be found
[here](https://github.com/glinscott/fishtest/wiki/Creating-my-first-test#nnue-net-tests).

Integration has been discussed in various Github issues:

-   <https://github.com/official-stockfish/Stockfish/issues/2823>
-   <https://github.com/official-stockfish/Stockfish/issues/2728>

The pull requests:

-   WIP (not merged)
    <https://github.com/official-stockfish/Stockfish/pull/2825>
-   Actual PR (merged)
    <https://github.com/official-stockfish/Stockfish/pull/2912>

------------------------------------------------------------------------

This will be an exciting time for computer chess, looking forward to
seeing the evolution of this approach.
