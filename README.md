# MMM-Comics
Based on andrecarluccis MMM-DailyDilbert module, this is a module for MagicMirror<sup>2</sup> that displays daily or random Comic Strips from famous comics.
You can choose to display a coloured and a b/w version of the comic (b/w does not always work that well). 
Additionally you can choose a daily time frame at which the current daily comic (supported for dilbert, xkcd) is being shown. For the rest of the day a random comic is picked.

Currently integrated:
  * Dilbert (english)
  * xkcd
  * peanuts
  * garfield
  * zits
  * baby_blues
  * garfield
  

<img src="dilbert.png"></img>

## Dependencies
  * A [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror) installation
  * [cheerio](https://github.com/cheeriojs/cheerio) npm package

## Installation
  1. Clone this repo into your `modules` directory.
  2. Create an entry in your `config.js` file to tell this module where to display on screen.
  3. Run `npm install`

 **Example:**
```
  {
   module: 'MMM-Comics',
			position: 'middle_center',
			config: {
			  comic: "dilbert",         // Choose between  ["dilbert", "xkcd", "garfield", "peanuts", "zits", "baby_blue"]
			  useComnicList: true,      // use the comiclist and rotate cominc rather than static attribute
			  comicList: ["garfield", "peanuts", "zits", "baby_blue"],  //list of comic to rotate
			  updateInterval : 1000 * 60 * 30,  // 30 minutes
			  coloredImage: true,      //colored or black&white (inverted) image
			  comicWidth: 800,
			  timeForDaily: [7, 9]    //time frame to show the most recent (or daily) comic.
			}
    }
  },
```

## Config
| **Option** | **default** | **Description** |
| --- | --- | --- |
| `comic` | "dilbert" | Choose between the currently available comics: ["dilbert", "zits", "baby_blue","xkcd", "peanuts", "garfield"] |
| `useComnicList` | false | use the comiclist option rather than static comic |
| `comicList` | "dilbert" | list of comics to rotate randomly |
| `updateInterval` | 1800000 | Set to desired update interval (in ms), default is `1800000` (30 minutes). |
| `comicWidth` | 500 | Set comic maximum width. Be If your comics are too small you can try to set a higher width here. |
| `coloredImage` | false | Colored or black&white (inverted) image |
| `timeForDaily` | [7, 9] | Time frame to show the most recent (or daily) comic. The standard option would equate to 7 - 9 o'clock in the morning. Please use only 24h time formatting!! For any other time you will get a random comic if possible. (Dilbert_de does not provide random comics yet) |




This module is based on andrecarluccis [MMM-DailyDilbert](https://github.com/andrecarlucci/MMM-DailyDilbert), which was heavily inspired by [DailyXKCD](https://github.com/Blastitt/DailyXKCD).
Many thanks to both of them for their great modules!
