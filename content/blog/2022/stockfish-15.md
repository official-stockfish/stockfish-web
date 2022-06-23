---
title: "Stockfish 15"
date: 2022-04-18T00:00:00-08:00
---

A new major release of Stockfish is now available at https://stockfishchess.org

Stockfish 15 continues to push the boundaries of chess, providing unrivalled analysis and playing strength. In our testing, Stockfish 15 is ahead of Stockfish 14 by 36 Elo points and [wins nine times more game pairs than it loses][1].

Improvements to the engine have made it possible for Stockfish to end up [victorious in tournaments][2] at all sorts of time controls ranging from bullet to classical and even at Fischer random chess. At CCC, Stockfish won all of the latest tournaments: CCC 16 Bullet, Blitz and Rapid, CCC 960 championship, and the CCC 17 Rapid. At TCEC, Stockfish won the Season 21, Cup 9, FRC 4 and in the current Season 22 superfinal, at the time of writing, has won 16 game pairs and not yet lost a single one.

This progress is the result of a dedicated team of developers that comes up with new ideas and improvements. For Stockfish 15, we tested nearly 13000 different changes and retained the best 200. These include the fourth generation of our NNUE network architecture, as well as various search improvements. To perform these tests, contributors provide CPU time for testing, and in the last year, they have collectively played roughly a billion chess games. In the last few years, our distributed testing framework, Fishtest, has been operated superbly and has been developed and improved extensively. This work by Pasquale Pigazzini, Tom Vijlbrief, Michel Van den Bergh, and [various other developers][3] is an essential part of the success of the Stockfish project.

Indeed, the Stockfish project builds on a thriving community of enthusiasts to offer a free and open-source chess engine that is robust, widely available, and very strong. We invite our chess fans to join the Fishtest testing framework and programmers to [contribute to the project][4].

The Stockfish team

[1]: https://tests.stockfishchess.org/tests/view/625d156dff677a888877d1be
[2]: https://en.wikipedia.org/wiki/Stockfish_(chess)#Competition_results
[3]: https://github.com/glinscott/fishtest/blob/master/AUTHORS
[4]: https://stockfishchess.org/get-involved/
