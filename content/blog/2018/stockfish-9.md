---
title: "Stockfish 9"
date: 2018-02-04T00:00:00-08:00
aliases:
- /post/180690834147/stockfish-9
- /post/180690834147/stockfish-9/amp
---

I am pleased to announce that Stockfish 9 is out.

You can download the offical builds from here
<https://stockfishchess.org/download/>

I would like to thank all the amazing people that made this release
possible. All our testers and our developers, all the people that donate
CPU time through fishtest (thank you! You are amazing) and a special
thank to Daylen, our webmaster, and to the people contributing to the
final optimized builds:

-   BMI2: Thomas Zipproth
-   POPCNT: Vah
-   64-bit: Vah
-   32-bit: Kiran Panditrao

SF 9 should improve about 45 ELO in self-play compared to SF 8, but
because now we set contempt by default, we could expect something better
in rating lists that use games among different engines to measure ELO.

Another visible change is the merge of the latest version of Ronald de
Man Tablebases code, that is now better at detecting and reporting mate
scores instead of TB scores.

Thank you again to all the people that contributed to this release: you
did a great job!
