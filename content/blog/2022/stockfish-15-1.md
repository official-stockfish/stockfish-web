---
title: "Stockfish 15.1"
date: 2022-12-04T00:00:00-08:00
---

Today, we have the pleasure to announce Stockfish 15.1.

As usual, downloads will be freely available at [stockfishchess.org/download](/download)

## Elo gain and competition results

With this release, version 5 of the NNUE neural net architecture has been introduced, and the training data has been extended to include Fischer random chess (FRC) positions. As a result, Elo gains are largest for FRC, reaching [up to 50 Elo for doubly randomized FRC][1] (DFRC). More importantly, also for standard chess this release progressed and will [win two times more game pairs than it loses][2] against Stockfish 15. Stockfish continues to [win in a dominating way][3] all chess engine tournaments, including the TCEC Superfinal, Cup, FRC, DFRC, and Swiss as well as the CCC Bullet, Blitz, and Rapid events.

## New evaluation

This release also introduces a new convention for the evaluation that is reported by search. An evaluation of +1 is now no longer tied to the value of one pawn, but to the likelihood of winning the game. With a +1 evaluation, Stockfish has now a 50% chance of winning the game against an equally strong opponent. This convention scales down evaluations a bit compared to Stockfish 15 and allows for consistent evaluations in the future.

## ChessBase settlement

In this release period, the Stockfish team has successfully enforced its GPL license against ChessBase. This has been an intense process that included [filing a lawsuit][4], a [court hearing][5], and finally [negotiating a settlement][6] that established that ChessBase infringed on the license by not distributing the Stockfish derivatives Fat Fritz 2 and Houdini 6 as free software, and that ensures ChessBase will respect the Free Software principles in the future. This settlement has been covered by major chess sites (see e.g. [lichess.org][7] and [chess.com][8]), and we are proud that it has been hailed as a ‘[historic violation settlement][9]’ by the Software Freedom Conservancy.

## Thank you

The Stockfish project builds on a thriving community of enthusiasts (thanks everybody!) that contribute their expertise, time, and resources to build a free and open-source chess engine that is robust, widely available, and very strong. We invite our chess fans to join the fishtest testing framework and programmers to [contribute to the project][10].

The Stockfish team

[1]: https://tests.stockfishchess.org/tests/view/638a6170d2b9c924c4c62cb4
[2]: https://tests.stockfishchess.org/tests/view/638a4dd7d2b9c924c4c6297b
[3]: https://en.wikipedia.org/wiki/Stockfish_(chess)#Competition_results
[4]: https://stockfishchess.org/blog/2021/our-lawsuit-against-chessbase/
[5]: https://stockfishchess.org/blog/2022/public-court-hearing-soon/
[6]: https://stockfishchess.org/blog/2022/chessbase-stockfish-agreement/
[7]: https://lichess.org/blog/Y3u1mRAAACIApBVn/settlement-reached-in-stockfish-v-chessbase
[8]: https://www.chess.com/news/view/chessbase-stockfish-reach-settlement
[9]: https://sfconservancy.org/news/2022/nov/28/sfc-named-trusted-party-in-gpl-case/
[10]: https://stockfishchess.org/get-involved/



