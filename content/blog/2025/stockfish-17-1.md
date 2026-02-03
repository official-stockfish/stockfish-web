---
title: "Stockfish 17.1"
date: 2025-03-30T00:00:00-00:00
image: "images/blog/sf17-1.webp"
description: "Consistent Elo gains featuring a new speedtest command, improved hardware support beyond 1024 threads, and bug fixes for tablebase support."
---

Today, we have the pleasure to announce Stockfish 17.1. As always, you can **freely** download it at [stockfishchess.org/download][1] and use it in the [GUI of your choice][2].

Join our [Discord server][3] to get in touch with the community of developers and users of the project!

## Quality of chess play

In our testing against its predecessor, Stockfish 17.1 shows a consistent improvement in performance, with an [Elo gain of up to 20 points][4] and winning close to 2 times more game pairs than it loses.

## Update highlights

### New speedtest command

The new `speedtest` command benchmarks your computer's performance (measured in nodes per second) using a realistic and stable test. To run it, you'll need [command line access][5]—give it a try and share your results with the community!

### Improved hardware support

Stockfish is [no longer limited to 1024 threads][6] and will allow users to specify whatever their system is capable of. Additionally, hardware such as ppc64 and Loongson is now better supported at build time.

### Bug fixes for tablebase support

Our previous release introduced improved engine lines (principal variations) ending in mate as soon as a mate score is announced. A side effect of this improvement was a [rare corner case][7] involving cursed tablebase wins, only relevant in correspondence chess when the 50-move rule does not apply,  which has now been fixed. Relatedly, [time management][8] has also been improved to avoid potential time losses.

## Shoutouts

### Download page redesign

We've redesigned the [download page][1] to address unclear wording and simplify a previously cluttered experience. The page now features a modernized layout, streamlined navigation, and clearer guidance to help you select the right binary for your system.

### Fishtest framework

Our testing framework has been improved in various ways, both on the worker side, including the adoption of [Fastchess][9] as a new game manager, and on the server side, such as streamlined configuration. The reliable availability of testing resources is key for the progress of the engine.

## Thank you

The Stockfish project builds on a thriving community of enthusiasts (thanks everybody!) who contribute their expertise, time, and resources to build a free and open-source chess engine that is robust, widely available, and very strong.

We would like to express our gratitude for the [12k stars][10] that light up our GitHub project! Thank you for your support and encouragement – your recognition means a lot to us.

We invite our chess fans to [join the Fishtest testing framework][11] to contribute compute resources needed for development. Programmers can contribute to the project either directly to [Stockfish][12] (C++), to [Fishtest][13] (HTML, CSS, JavaScript, and Python), to our trainer [nnue-pytorch][14] (C++ and Python), or to our [website][15] (HTML, CSS/SCSS, and JavaScript).

The Stockfish team

[1]: https://stockfishchess.org/download
[2]: https://official-stockfish.github.io/docs/stockfish-wiki/Download-and-usage.html#download-a-chess-gui
[3]: https://discord.gg/GWDRS3kU6R
[4]: https://tests.stockfishchess.org/tests/view/67e7d2fd6682f97da2178fbd
[5]: https://official-stockfish.github.io/docs/stockfish-wiki/UCI-&-Commands.html#speedtest
[6]: https://github.com/official-stockfish/Stockfish/commit/652a8874b523360a3b19c5003c8ba9894ac54d0f
[7]: https://github.com/official-stockfish/Stockfish/commit/6c7c5c7e471c16f14518229428e51a3e00c0f1dd
[8]: https://github.com/official-stockfish/Stockfish/commit/0f9ae0d11cd034288a49ef3892c580dfed025091
[9]: https://github.com/Disservin/fastchess
[10]: https://github.com/official-stockfish/Stockfish/stargazers
[11]: https://official-stockfish.github.io/docs/fishtest-wiki/Running-the-Worker.html
[12]: https://github.com/official-stockfish/Stockfish
[13]: https://github.com/official-stockfish/fishtest
[14]: https://github.com/official-stockfish/nnue-pytorch
[15]: https://github.com/official-stockfish/stockfish-web
