---
title: "Stockfish 4"
date: 2013-08-20T14:09:00-08:00
aliases:
- /post/58816729741/stockfish-4
- /post/58816729741/stockfish-4/amp
---

Stockfish 4 has been released. You can download at
<http://stockfishchess.org/> or browse the sources at
<https://github.com/mcostalba/Stockfish>

Diffs from last version is: 43 files changed, 1534 insertions(+), 1703
deletions(-)

So 169 lines of code less but should be quite stronger than version 3.
For interested people here is the breakdown of lines count.

  Language       files   blank   comment   code
  -------------- ------- ------- --------- ------
  C++            20      2110    1619      5772
  C/C++ Header   21      636     570       1558
  SUM:           41      2746    2189      7330

This is the first release where we have took full advantage of the power
of our distributed and public testing framework. At one point we reached
41 active machines connected for a total of 136 cores and a compound
testing power of 190M nps (nodes per second). This is even more
noteworthy considering that Gary's 24 core monster was offline at that
moment.

But is the the 'public' part of our development model that is the real
advantage we have and without which the improvement above SF 3 would
have not been possible, no matter how hardware we throw at it.

So here is the list of developers that contributed to this release:

-   Dan Schmidt
-   Dariusz Orzechowski
-   Eelco de Groot
-   Gary Linscott
-   jhellis3
-   Joona Kiiski
-   jundery
-   Leonid Pechenik
-   Marco Costalba
-   Reuven Peleg
-   Ryan Schmitt
-   Ryan Takker
-   Tom Vijlbrief
-   Uri Blass

A special thank to Daylen Yang, our precious webmaster and builder of
the Mac binaries, to Peter Österlund for the Android version and to
<http://abrok.eu/stockfish/> from which I have, shameless, took the
Windows binaries.

For the first time since Stockfish was borne, Jim Ablett didn't compile
the official builds and this is a big miss for us and for me in
particular. I'd like to publicly thank him again for the help and
support during all these years.

Finally a note for the user. In this version there is no more automatic
detection of CPU count, so at startup Stockfish always defaults to 1
thread. In case you want to use more than one CPU you have to manually
set the "Threads" UCI option accordingly.

Have Fun\
SF Team

UPDATE: Just to add another technical detail, that I forgot to mention
in the announcement, for the people compiling themselves please verify
build is ok running:

./stockfish bench

Searched node count must be: 4132374
