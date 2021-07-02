---
title: "Stockfish 14"
date: 2021-07-02T00:00:00-08:00
---

Today, we have the pleasure to announce Stockfish 14.

As usual, downloads will be freely available at [stockfishchess.org/download](https://stockfishchess.org/download/).

The engine is now significantly stronger than just a few months ago,
and [wins four times more game pairs than it loses against the previous
release version][0]. Stockfish 14 is now at least [400 Elo ahead of
Stockfish 7][1], a top engine in 2016. During the last five years,
Stockfish has thus gained about 80 Elo per year.

Stockfish 14 evaluates positions more accurately than Stockfish 13 as
a result of two major steps forward in defining and training the
efficiently updatable neural network (NNUE) that provides the evaluation
for positions.

First, the collaboration with the Leela Chess Zero team - [announced
previously][2] - has come to fruition. The LCZero team has provided a
collection of billions of positions evaluated by Leela that we have
combined with billions of positions evaluated by Stockfish to train the
NNUE net that powers Stockfish 14. The fact that we could use and combine
these datasets freely was essential for the progress made and [demonstrates
the power of open source and open data][3].

Second, the [architecture of the NNUE network was significantly updated][4]:
the new network is not only larger, but more importantly, it deals better
with large material imbalances and can specialize for multiple phases of
the game. A new project, kick-started by Gary Linscott and
Tomasz Sobczyk, led to a [GPU accelerated net trainer written in
pytorch][5]. This tool allows for training high-quality nets in a couple
of hours.

Finally, this release features some search refinements, minor bug
fixes and additional improvements. For example, Stockfish is now about
90 Elo stronger for chess960 (Fischer random chess) at short time control.

The Stockfish project builds on a thriving community of enthusiasts
(thanks everybody!) that contribute their expertise, time, and resources
to build a free and open-source chess engine that is robust, widely
available, and very strong. We invite our chess fans to join the fishtest
testing framework and programmers to [contribute to the project on
github][6].

Stay safe and enjoy chess!

The Stockfish team

[0]: https://tests.stockfishchess.org/tests/view/60dae5363beab81350aca077
[1]: https://nextchessmove.com/dev-builds
[2]: https://stockfishchess.org/blog/2021/stockfish-13/
[3]: https://lczero.org/blog/2021/06/the-importance-of-open-data/
[4]: https://github.com/official-stockfish/Stockfish/commit/e8d64af1
[5]: https://github.com/glinscott/nnue-pytorch/
[6]: https://stockfishchess.org/get-involved/
