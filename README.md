Fitbit Solitaire is a program written in Javascript for the Fitbit Ionic watch. It is currently a work in progress.

The controls are mostly mapped to the physical buttons, to avoid the need for accurate touch on such a small screen. The bottom right button cycles the selected card, and the top right button selects the card for movement. The left button is used to cancel the current action, whether it is a selected card or going into the setting menu. To restart a game, go into the settings menu by tapping on the screen, and press the top-right button.

Fitbit Solitaire is inspired by [Pebble Solitaire](https://code.google.com/archive/p/pebble-solitaire/), although no source code is derived from it.

Building
--------

Install [Node.js](https://nodejs.org/en/), preferably the LTS branch. Clone this repository, and run the following commands:

```
npm install
npx fitbit-build
npx fitbit
fitbit$ install
```

This will prompt you to sign into Fitbit, to either sideload directly to your watch or your simulator.

Credits
-------

Fitbit Solitaire uses and credits the following projects:

* Fitbit, Inc. [SDK](https://www.npmjs.com/package/@fitbit/sdk) and [SDK-CLI](https://www.npmjs.com/package/@fitbit/sdk-cli), both licensed under BSD-3-Clause.
* [Pigulla's mersennetwister](https://github.com/pigulla/mersennetwister/), under BSD-3-Clause license.
* Kenney's [Boardgame Pack](https://www.kenney.nl/assets/boardgame-pack) and [Game Icons](https://www.kenney.nl/assets/game-icons), under CC0 1.0 Universal License.
* Caveman Lee's [Pool Table Texture](https://www.toptal.com/designers/subtlepatterns/pool-table/), under CC BY-SA 3.0 License.

Fitbit Solitaire is licensed under the more restrictive GNU GPLv3, for more details see [LICENSE.md]
