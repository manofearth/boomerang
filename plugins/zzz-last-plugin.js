// This code is run after all plugins have initialized
BOOMR.init({
  autorun: true,
  RT: {
    enabled: true,
  },
  Continuity: {
    enabled: true,
    sendTimeline: false, // excluding c.t.* from beacon data
    sendLog: false, // excluding c.l from beacon data
    waitAfterOnload: 1000, // if not set, beacon will be sent without c.tti
  },
});
BOOMR.t_end = new Date().getTime();
