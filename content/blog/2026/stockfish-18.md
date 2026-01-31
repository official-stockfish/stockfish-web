---
title: "Stockfish 18"
date: 2026-01-31T00:00:00-00:00
---

Today, we have the pleasure of announcing **Stockfish 18**, a new major release. As always, you can freely download it at [stockfishchess.org/download][1] and use it as a drop-in replacement in the [GUI of your choice][2] to benefit from stronger play and more accurate analysis.

Whether you can spare hours or days of CPU time, your help matters for the ongoing development of Stockfish. Find out how you can help at [stockfishchess.org/get-involved][3]. Join our [Discord server][4] to get in touch with the community of developers and users of the project!

## Quality of chess play

In tests against Stockfish 17, this new release brings an Elo gain of up to [46 points][5], and wins [four times as many game pairs][6] as it loses. Quality improved throughout, including in [Fischer Random Chess][7].

Stockfish is stronger than any human, even when running on older or low-end hardware. On the highest-end hardware, where Stockfish can search over [500 million positions per second][8], it continues to [dominate chess engine tournaments][9].

## Update highlights

### Next-Generation Evaluation

This release introduces the SFNNv10 network architecture. The network’s input layer has been augmented with 'Threat Inputs' features as part of a massive community effort. These features allow the engine to 'see' which pieces are threatened more naturally, resulting in more accurate evaluations.

### Hardware and Performance Optimizations

A key highlight is the new 'Shared Memory' implementation, which allows different Stockfish processes to share the same memory space for neural network weights. This makes it the most efficient version for cloud analysis and high-concurrency testing.

Significant efforts have also been made to utilize hardware more effectively by adapting the code to make use of modern CPU instructions and refining how threads interact during a search.

### Search Improvements

Stockfish 18 features a heavily refined search, utilizing 'Correction History' to dynamically adjust evaluations based on patterns found during the search itself. These and other refinements allow the engine to detect stalemates and evaluate fortresses significantly better than previous versions. A particularly rare issue, involving threefold repetition detection, en passant, and pins, was also fixed.

### Refactored Training Workflow

The training of Stockfish's neural networks has transitioned to an automated and reproducible model. This new framework allows the project to employ standardized recipes to chain complex training stages together. This transition facilitates the training of networks using over 100 billion positions of [Lc0 evaluation data][10].

## Thank you

In this release in particular, we are deeply grateful to the contributors who shared their research and ideas to help develop the new threat-input network architecture.

The Stockfish project builds on a thriving community of enthusiasts (thanks to everybody!) who contribute their expertise, time, and resources to build a free and open-source chess engine that is robust, widely available, and very strong.

We would like to express our gratitude for the [14.6k stars][11] that light up our GitHub project. Thank you for your support and encouragement – your recognition means a lot to us. Programmers can contribute to the project either directly to [Stockfish][12] (C++), to [Fishtest][13] (HTML, CSS, JavaScript, and Python), to our trainer [nnue-pytorch][14] (C++ and Python), or to our [website][15] (HTML, CSS/SCSS, and JavaScript).

The Stockfish team

[1]: https://stockfishchess.org/download
[2]: https://official-stockfish.github.io/docs/stockfish-wiki/Download-and-usage.html#download-a-chess-gui
[3]: https://stockfishchess.org/get-involved/
[4]: https://discord.gg/GWDRS3kU6R
[5]: https://tests.stockfishchess.org/tests/view/696a9e15cec152c6220c1d19
[6]: https://tests.stockfishchess.org/tests/view/696a9e4dcec152c6220c1d1b
[7]: https://tests.stockfishchess.org/tests/view/696a9e83cec152c6220c1d1d
[8]: https://openbenchmarking.org/test/pts/stockfish
[9]: https://en.wikipedia.org/wiki/Stockfish_(chess)#Competition_results
[10]: https://lczero.org/blog/2021/06/the-importance-of-open-data/
[11]: https://github.com/official-stockfish/Stockfish/stargazers
[12]: https://github.com/official-stockfish/Stockfish
[13]: https://github.com/official-stockfish/fishtest
[14]: https://github.com/official-stockfish/nnue-pytorch
[15]: https://github.com/official-stockfish/stockfish-web
