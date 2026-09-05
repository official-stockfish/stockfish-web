---
title: "Stockfish 19"
date: 2026-09-05T00:00:00-00:00
image: "images/blog/sf19.webp"
description: "Stronger, smaller, and easier to run, thanks to an upgraded network architecture, universal binaries, and more!"
---

Today, we have the pleasure of announcing **Stockfish 19**, a new major release. As always, you can freely download it at [stockfishchess.org/download][1] and use it as a drop-in replacement in the [GUI of your choice][2] to benefit from stronger play and more accurate analysis.

Whether you can spare hours or days of CPU time, your help matters for the ongoing development of Stockfish. Find out how you can contribute at [stockfishchess.org/get-involved][3]. Join our [Discord server][4] to get in touch with the community of developers and users of the project!

## Quality of Chess Play

In tests against Stockfish 18, this new release brings an Elo gain of [up to 44 points][5], and wins [more than three times as many game pairs][6] as it loses.

Stockfish continues to set the standard for engine strength. Against the strongest competition, it consistently secures the top spot in engine championships, continuing to [dominate the field][7].

## Update Highlights

### Universal Binaries

We have transitioned to universal binaries for our releases, simplifying the download process. These universal binaries automatically detect the features of your CPU and run the optimal code, eliminating the need to manually choose between AVX2, AVX-512, etc.

### Upgraded NNUE Architecture and Training

This release introduces the SFNNv16 network architecture, reducing binary size by removing redundant threat features while increasing strength by introducing new pawn-pair features. The secondary neural network, introduced in Stockfish 16.1, has been retired, enhancing strength in positions where the small net previously underperformed.

The training process has been further improved with the introduction of new techniques, such as Quantization-Aware Training (QAT), and further parameter tweaks. These techniques have been applied to hundreds of billions of training positions, all of which have been consistently rescored using a strong [Leela][8] net.

### Expanded Platform Support

We have added native support for RISC-V (RVV) and LoongArch (LSX/LASX), 1GB Linux huge pages, as well as WebAssembly targets. The shared-memory implementation for Linux, macOS, and BSD was also overhauled.

### Strict Position Validation

We have implemented stricter validation for board positions, FEN strings, and UCI commands. The engine will now output an `info string CRITICAL ERROR` followed by the exact command and the reason it failed, and then immediately terminate the process. A good GUI will ensure you never encounter these errors.

## Thank You

The Stockfish project builds on a thriving community of enthusiasts (thanks to everybody!) who contribute their expertise, time, and resources to build a free and open-source chess engine that is robust, widely available, and very strong.

We would like to express our gratitude for the 16.4k stars that light up our GitHub project. Thank you for your support and encouragement – your recognition means a lot to us. Programmers can contribute to the project either directly to [Stockfish][9] (C++), to [Fishtest][10] (HTML, CSS, JavaScript, and Python), to our trainer [nnue-pytorch][11] (C++ and Python), or to our [website][12] (HTML, CSS/SCSS, and JavaScript).

The Stockfish team

[1]: https://stockfishchess.org/download
[2]: https://official-stockfish.github.io/docs/stockfish-wiki/Download-and-usage.html#download-a-chess-gui
[3]: https://stockfishchess.org/get-involved/
[4]: https://discord.gg/GWDRS3kU6R
[5]: https://tests.stockfishchess.org/tests/view/6a85df4c5b1b38ebda864ccd
[6]: https://tests.stockfishchess.org/tests/view/6a85df595b1b38ebda864ccf
[7]: https://en.wikipedia.org/wiki/Stockfish_(chess)#Competition_results
[8]: https://lczero.org/
[9]: https://github.com/official-stockfish/Stockfish
[10]: https://github.com/official-stockfish/fishtest
[11]: https://github.com/official-stockfish/nnue-pytorch
[12]: https://github.com/official-stockfish/stockfish-web
