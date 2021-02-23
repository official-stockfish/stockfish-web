---
title: "Stockfish 11"
date: 2020-01-15T23:29:00-08:00
aliases:
- /post/190398991302/stockfish-11
- /post/190398991302/stockfish-11/amp
---

It is our pleasure to release Stockfish 11 to our fans and supporters.

Downloads are freely available at <http://stockfishchess.org/download/>

This version 11 of Stockfish is 50 Elo stronger than the last version,
and 150 Elo stronger than the version which famously lost a match to
AlphaZero two years ago. This makes Stockfish the strongest chess engine
running on your smartphone or normal desktop PC, and we estimate that on
a modern four cores CPU, Stockfish 11 could give 1:1000 time odds to the
human chess champion having classical time control, and be on par with
him. More specific data, including nice cumulative curves for the
progression of Stockfish strength over the last seven years, can be
found on [our progression
page](https://github.com/glinscott/fishtest/wiki/Regression-Tests), at
[Stefan Pohl site](https://www.sp-cc.de/index.htm) or at
[NextChessMove](https://nextchessmove.com/dev-builds).

In October 2019 Stockfish has regained its crown in the TCEC
competition, beating in the superfinal of season 16 an evolution of the
neural-network engine Leela that had won the previous season. This clash
of style between an alpha-beta and an neural-network engine produced
spectacular chess as always, with Stockfish [emerging victorious this
time](http://mytcecexperience.blogspot.com/2019/10/season-16-superfinal-games-91-100.html).

Compared to Stockfish 10, we have made hundreds of improvements to the
[codebase](https://github.com/official-stockfish/Stockfish), from the
evaluation function (improvements in king attacks, middlegame/endgame
transitions, and many more) to the search algorithm (some innovative
coordination methods for the searching threads, better pruning of
unsound tactical lines, etc), and fixed a couple of bugs en passant.

Our testing framework [Fishtest](https://tests.stockfishchess.org/tests)
has also seen its share of improvements to continue propelling Stockfish
forward. Along with a lot of small enhancements, Fishtest has switched
to new SPRT bounds to increase the chance of catching Elo gainers, along
with a new testing book and the use of pentanomial statistics to be more
resource-efficient.

Overall the Stockfish project is an example of open-source at its best,
as its buzzing community of programmers sharing ideas and daily
reviewing their colleagues' patches proves to be an ideal form to
develop innovative ideas for chess programming, while the mathematical
accuracy of the testing framework allows us an unparalleled level of
quality control for each patch we put in the engine. If you wish, you
too can help our ongoing efforts to keep improving it, just [get
involved](https://stockfishchess.org/get-involved/) :-)

Stockfish is also special in that every chess fan, even if not a
programmer, [can easily
help](https://github.com/glinscott/fishtest/wiki) the team to improve
the engine by connecting their PC to Fishtest and let it play some games
in the background to test new patches. Individual contributions vary
from 1 to 32 cores, but this year Bojun Guo made it a little bit special
by plugging a whole data center during the whole year: it was a
vertiginous experience to see Fishtest spikes with 17466 cores connected
playing [25600
games/minute](https://groups.google.com/forum/?fromgroups=#!topic/fishcooking/lebEmG5vgng%5B1-25%5D).
Thanks Guo!

The Stockfish team
