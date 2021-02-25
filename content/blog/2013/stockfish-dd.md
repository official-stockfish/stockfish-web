---
title: "Stockfish DD"
date: 2013-11-29T15:45:00-08:00
aliases:
- /post/68506094600/stockfish-dd
- /post/68506094600/stockfish-dd/amp
---

This is a new release of Stockfish after the last TCEC season. It is
almost the same version that played the superfinal against Komodo.

[Download](http://stockfishchess.org/download/) [Browse the source
code](https://github.com/mcostalba/Stockfish)

For people compiling themselves, please verify signature is correct
running 'stockfish bench' from a terminal window. At the end of the run,
searched nodes shall be 8596156

Diffs from last version is: 32 files changed, 966 insertions(+), 1257
deletions(-)

So 291 lines of code less but should be quite stronger than version 4.
For interested people here is the breakdown of lines count.

  Language       files   blank   comment   code
  -------------- ------- ------- --------- ------
  C++            20      2088    1577      5547
  C/C++ Header   21      638     555       1555
  make           1       82      80        417
  SUM:           41      2726    2132      7102

And here is the list of developers that contributed to this release:

-   Chris Caino
-   Eelco de Groot
-   Gary Linscott
-   Gregor Cramer
-   Hongzhi Cheng
-   Jean-Francois Romang
-   Joona Kiiski
-   Jörg Oster
-   Kelly Wilson
-   Kojirion
-   Lucas Braesch
-   Marco Costalba
-   Matthew Sullivan
-   Ralph Stößer
-   Raminder Singh
-   Reuven Peleg
-   Uri Blass

A special thank to Daylen Yang, our precious webmaster and builder of
the Mac binaries and to <http://abrok.eu/stockfish/> from which I have,
shameless, took the Windows binaries.

This release is dedicated to Don Dailey.
