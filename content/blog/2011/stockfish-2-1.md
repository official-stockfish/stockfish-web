---
title: "Stockfish 2.1"
date: 2011-05-04T17:07:00-08:00
aliases:
- /post/5203305648/stockfish-21
- /post/5203305648/stockfish-21/amp
---

This is Stockfish 2.1.

Diff stats from 2.0.1 says: 54 files changed, 4138 insertions(+), 5656
deletions(-)

So more than 1500 lines of code removed for this release.

In this release a new skill level facility has been introduced.
Stockfish can be set to skill level 20 (default) to play at maximum
strength or, through setting the "Skill Level" UCI option, can be
lowered until 0 when should be beatable even by weak players.
Implementation of skill levels has been developed around an idea from
Heinz van Saanen and is time control and CPU speed independent: you can
set skill level at 4 and SF will play with the same strength both on a
cell phone at 1' per game or on a super quad-core machine at 120'+30"
TC.

Also of note, "seldepth" UCI info is now correctly implemented and
maximum number of threads has been raised from 16 to 32.

For people compiling themselves, Stockfish 2.1's signature is 6487630.
It means that running from command line 'stockfish bench' you should get
at the end 6487630 searched nodes. If this does not happen please report
back; it means SF is miscompiled.

We would like to thank Heinz, Onno, Justin, BB+ and Fruity for their
contributions in ideas and useful suggestions, and of course, a big
thank you to Jim for its usual kind help.

Have fun.

Stockfish Team
