---
title: "Stockfish 17"
date: 2024-09-06T00:00:00-00:00
image: "images/blog/sf17.webp"
description: "Significantly stronger release with improved principal variations, and NUMA optimization for high-end multi-CPU systems."
---

Today we have the pleasure to announce a new major release of Stockfish. As always, you can freely download it at [stockfishchess.org/download](https://stockfishchess.org/download) and use it in the GUI of your choice.

Don’t forget to join our [Discord server][1] to get in touch with the community of developers and users of the project!

## Quality of chess play

In tests against Stockfish 16, this release brings an Elo gain of [up to 46 points][2] and wins [up to 4.5 times more game pairs][3] than it loses. In practice, high-quality moves are now found in less time, with a user upgrading from Stockfish 14 being able to analyze games [at least 6 times][4] faster with Stockfish 17 while maintaining roughly the same quality.

During this development period, Stockfish won its 9th consecutive first place in the main league of the [Top Chess Engine Championship (TCEC)][5], and the 24th consecutive first place in the main events (bullet, blitz, and rapid) of the [Computer Chess Championship (CCC)][6].

## Update highlights

### Improved engine lines

This release introduces principal variations (PVs) that are more informative for mate and decisive table base (TB) scores. In both cases, the PV will contain all moves up to checkmate. For mate scores, the PV shown is the best variation known to the engine at that point, while for table base wins, it follows, based on the TB, a sequence of moves that preserves the game outcome to checkmate.

### NUMA performance optimization

For high-end computers with multiple CPUs (typically a dual-socket architecture with 100+ cores), this release automatically improves performance with a `NumaPolicy` setting that optimizes non-uniform memory access (NUMA). Although typical consumer hardware will not benefit, [speedups of up to 2.8x][7] have been measured.

## Shoutouts

### ChessDB

During the past 1.5 years, hundreds of cores have been continuously running Stockfish to grow a database of analyzed positions. This [chess cloud database][8] now contains well over 45 billion positions, providing excellent coverage of all openings and commonly played lines. This database is already integrated into GUIs such as [En Croissant][9] and [Nibbler][10], which access it through the public API.

### Leela Chess Zero

Generally considered to be the strongest GPU engine, it continues to provide open data which is essential for training our NNUE networks. They [released version 0.31.1][11] of their engine a few weeks ago, check it out!

### Website redesign

Our website has undergone a redesign in recent months, most notably in our [home page][12], now featuring a darker color scheme and a more modern aesthetic, while still maintaining its core identity. We hope you'll like it as much as we do!

## Thank you

The Stockfish project builds on a thriving community of enthusiasts (thanks everybody!) who contribute their expertise, time, and resources to build a free and open-source chess engine that is robust, widely available, and very strong.

We would like to express our gratitude for the [11k stars][13] that light up our GitHub project! Thank you for your support and encouragement – your recognition means a lot to us.

We invite our chess fans to [join the Fishtest testing framework][14] to contribute compute resources needed for development. Programmers can contribute to the project either directly to [Stockfish][15] (C++), to [Fishtest][16] (HTML, CSS, JavaScript, and Python), to our trainer [nnue-pytorch][17] (C++ and Python), or to our [website][18] (HTML, CSS/SCSS, and JavaScript).

The Stockfish team

[1]: https://discord.gg/GWDRS3kU6R
[2]: https://tests.stockfishchess.org/tests/view/66d738ba9de3e7f9b33d159a
[3]: https://tests.stockfishchess.org/tests/view/66d738f39de3e7f9b33d15a0
[4]: https://github.com/official-stockfish/Stockfish/wiki/Useful-data#equivalent-time-odds-and-normalized-game-pair-elo
[5]: https://en.wikipedia.org/wiki/Stockfish_(chess)#Top_Chess_Engine_Championship
[6]: https://en.wikipedia.org/wiki/Stockfish_(chess)#Chess.com_Computer_Chess_Championship
[7]: https://github.com/official-stockfish/Stockfish/pull/5285
[8]: https://chessdb.cn/queryc_en/
[9]: https://encroissant.org/
[10]: https://github.com/rooklift/nibbler
[11]: https://github.com/LeelaChessZero/lc0/releases/tag/v0.31.1
[12]: https://stockfishchess.org/
[13]: https://github.com/official-stockfish/Stockfish/stargazers
[14]: https://github.com/official-stockfish/fishtest/wiki/Running-the-worker
[15]: https://github.com/official-stockfish/Stockfish
[16]: https://github.com/official-stockfish/fishtest
[17]: https://github.com/official-stockfish/nnue-pytorch
[18]: https://github.com/official-stockfish/stockfish-web
