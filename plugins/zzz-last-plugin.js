// This code is run after all plugins have initialized
BOOMR.init({
	autorun: true,
	beacon_send_externally: true, // our application is responsible for beacon sending
	RT: {
		enabled: true,
	},
	Continuity: {
		enabled: true,
		sendTimeline: false, // excluding c.t.* from beacon data
		sendLog: false, // excluding c.l from beacon data
		waitAfterOnload: 1000, // if not set, beacon will be sent without c.tti
		monitorStats: false, // no need for now
		monitorInteractions: false, // no need for now
		afterOnload: true, // boomerang will continue collecting stats after a page is loaded
	},
});
BOOMR.t_end = new Date().getTime();
