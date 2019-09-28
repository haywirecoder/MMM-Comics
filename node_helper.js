var request = require("request");
var NodeHelper = require("node_helper");
var cheerio = require("cheerio");
var moment = require("moment");

module.exports = NodeHelper.create({

  config: [],

	start: function () {
		console.log("Starting node helper: " + this.name);
	},


	socketNotificationReceived: function (notification, payload) {
		this.config = payload.config;
		var comic = payload.config.comic;
		var comicarray = payload.config.comicList;
		var random = payload.config.random;
		var usecomiclist =payload.config.useComnicList;
		var dailyTime = payload.config.timeForDaily;
		var dailyStart = moment(dailyTime[0], "k").format();
		this.log(dailyStart);
		var dailyEnd = moment(dailyTime[1], "k").format();
		this.log(dailyEnd);
		if (moment().isBetween(dailyStart, dailyEnd)) { random = false };

		if  (usecomiclist && comicarray.length > 0) {
			// randomly choose a comic to display
			comic = comicarray[(Math.floor(Math.random() * comicarray.length))];
			
		}
		this.log("displaying: " + comic);
		this.log("Notification: " + notification + " Payload: " + comic);

		if (notification === "GET_COMIC") {

			switch (comic) {
				case "dilbert":
					this.getDilbert(random);
					break;
				case "garfield":
					this.getGarfield(random);
					break;
				case "xkcd":
					this.getXkcd(random);
					break;
				case "peanuts":
					this.getPeanuts(random);
					break;
				case "zits":
					this.getZits(random);
					break;
				case "baby_blue":
						this.getBabyblues(random);
						break;
				default:
					this.log("Comic not found!");
			}
		}
	},

	/*getGarfield: function (random) {
		var self = this;
		var url = "https://garfield.com/comic/";
		this.log("-> Garfield request");
		var start = new Date (1979, 1, 1);
    	var end = new Date();
		var comicDate = (random) ? new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())) : end;
		//url += moment(comicDate).format("YYYY/MM/DD") + "/";
		this.log("Trying url: "+url);
		console.log(url)
		request(url, function (error, response, body) {
			var $ = cheerio.load(body);
			var src = $(".img-responsive").attr('src');
			self.log("Garfield -> " + src);
			self.sendSocketNotification("COMIC", {
				img : src
			});
		});
		return;
	},*/
	getGarfield: function (random) {
		var self = this;
		var url = "https://www.gocomics.com/garfield/";
		this.log("-> Garfield request");
		var start = new Date (1952, 1, 1);
		var end = new Date();
		var comicDate = (random) ? new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())) : end;
		url +=  moment(comicDate).subtract(3, 'hours').format("YYYY/MM/DD") + "/";
		this.log("Trying url: "+url);
		
		request(url, function (error, response, body) {
			var $ = cheerio.load(body);
			var src = $("meta[property='og:image']").attr('content')
			self.log("Garfield -> " + src);
			self.sendSocketNotification("COMIC", {
				img : src
			});
		});
	
		return;
	},

	getZits: function (random) {
		var self = this;
		var url = "https://www.comicskingdom.com/zits/";
		this.log("-> Zits request");
		var start = new Date (1952, 1, 1);
    		var end = new Date();
		var comicDate = (random) ? new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())) : end;
		url += moment(comicDate).subtract(3, 'hours').format("YYYY-MM-DD") + "/";
		this.log("Trying url: "+url);
		request(url, function (error, response, body) {
			var $ = cheerio.load(body);
			var src = $("meta[property='og:image']").attr("content")
			self.log("Zits -> " + src);
			self.sendSocketNotification("COMIC", {
				img : src
			});
		});
		return;
	},
	getBabyblues: function (random) {
		var self = this;
		var url = "https://www.comicskingdom.com/baby-blues/";
		var start = new Date (1952, 1, 1);
    		var end = new Date();
		var comicDate = (random) ? new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())) : end;
		url += moment(comicDate).subtract(3, 'hours').format("YYYY-MM-DD") + "/";
		this.log("Trying url: "+url);
		request(url, function (error, response, body) {
			var $ = cheerio.load(body);
			var src = $("meta[property='og:image']").attr("content")
			self.log("Baby-blues -> " + src);
			self.sendSocketNotification("COMIC", {
				img : src
			});
		});
		return;
	},

	getPeanuts: function (random) {
		var self = this;
		var url = "https://www.gocomics.com/peanuts/";
		this.log("-> peanuts request");
		var start = new Date (1952, 1, 1);
    	var end = new Date();
		var comicDate = (random) ? new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())) : end;
		url += moment(comicDate).subtract(3, 'hours').format("YYYY/MM/DD") + "/";
		this.log("Trying url: "+url);
		request(url, function (error, response, body) {
			var $ = cheerio.load(body);
			var src = $("meta[property='og:image']").attr('content');
			self.log("peanuts -> " + src);
			self.sendSocketNotification("COMIC", {
				img : src
			});
		});
		return;
	},

	getDilbert: function (random) {
		var self = this;
		var url = "https://dilbert.com/";
		this.log("-> Dilbert request");
		var start = new Date (1952, 1, 1);
    	var end = new Date();
		var comicDate = (random) ? new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())) : end;
		url += moment(comicDate).subtract(3, 'hours').format("YYYY-MM-DD") + "/";
		this.log("Trying url: "+url);
		request(url, function (error, response, body) {
			var $ = cheerio.load(body);
			var src = $(".img-comic").attr('src');
			self.log("Dilbert -> " + src);
			self.sendSocketNotification("COMIC", {
				img : src
			});
		});
    	return;
	},


	getXkcd: function (random) {
		var self = this;
		var url = (random) ? "http://c.xkcd.com/random/comic" : "http://xkcd.com/";
		this.log("-> xkcd request");
		this.log(url);
		request(url, function (error, response, body) {
				var $ = cheerio.load(body);
				var src = $("meta[property='og:image']").attr('content');
				self.log("xkcd -> " + src);
				self.sendSocketNotification("COMIC", {
					img : src
				});
			});
			return;
	},


	log: function (msg) {
        if (this.config && this.config.debug) {
          console.log(this.name + ":", JSON.stringify(msg));
    }
	},
});
