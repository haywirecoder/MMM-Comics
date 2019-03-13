# MMM-DailyGarfield
Based on andrecarluccis MMM-DailyDilbert module, this is a module for MagicMirror<sup>2</sup> that displays daily or random Comic Strips from famous comics.

<img src="garfield.png"></img>

## Dependencies
  * A [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror) installation
  * [cheerio](https://github.com/cheeriojs/cheerio) npm package

## Installation
  1. Clone this repo into your `modules` directory.
  2. Create an entry in your `config.js` file to tell this module where to display on screen.
  3. Run `npm install -p cheerio`

 **Example:**
```
 {
  module: 'MMM-DailyDilbert',
	position: 'bottom_bar',
	config: {
    updateInterval : 36000000
	}
 },
```

## Config
| **Option** | **Description** |
| --- | --- |
| `updateInterval` | Set to desired update interval (in ms), default is `3600000` (10 hours). |

Based on andrecarluccis [MMM-DailyDilbert](https://github.com/andrecarlucci/MMM-DailyDilbert), which was heavily inspired by [DailyXKCD](https://github.com/Blastitt/DailyXKCD).
Many thanks to both of them for their great modules!
