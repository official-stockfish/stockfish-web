---
title: "Stockfish 2.0"
date: 2011-01-01T00:00:00-08:00
aliases:
- /post/6064047789/stockfish-20
- /post/6064047789/stockfish-20/amp
---

Diff stats from 1.9.1 says:

54 files changed, 2130 insertions(+), 2812 deletions(-)

So almost 700 lines of code removed for this release.

Actually we didn't plan to release now, but it happens that our test
framework will be down for a couple of weeks due to new year holidays
and so, instead of just waiting two weeks, we thought it could be more
useful to release.

The release number 2.0 is to be intended as the new year release not as
a much improved version from 1.9.1: we expect some ELO gain but nothing
earth shattering.

Among the new user-visible changes we would like to note:

-   Maximum allowed threads increased to 16 (it was 8)
-   Added new option "Use Sleeping Threads" that modifies how threads
    are managed during multi CPU searches. Setting to ON should greatly
    help on Hyper Thread enabled machines and *could* help also for
    other SMP cases. It is off by default because is not tested a lot
    (also because we don't have big hardware) and results depend on the
    specific machine. So to be on the safe side we release 2.0 with the
    option disabled (here specific tests by users would be *very*
    welcomed and perhaps there could be some nice surprise especially on
    powerful hardware).
-   Fixed some bugs in Multi PV (courtesy of Peter Petrov), hopefully
    should work now, but please report any bug you may find in this
    area.

On the technical side:

-   We now use RKISS random generator for hash keys (courtesy of Heinz
    van Saanen) instead of mersenne, it is as good as the old one and is
    much smaller and simpler.
-   For people compiling themselves, stockfish 2.0 signature is 7224363.
    It means that running from command line 'stockfish bench' you should
    get at the end 7224363 searched nodes. If this not happens please
    report back, it means SF is miscompiled.

As usual a big thanks to Jim Ablett for his wonderful compiles and a
special thank to the people that allow us to use a powerful testing
framework that has really helped us to speed up development and to
achieve a better code quality overall.
