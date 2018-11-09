(function() {
  var CURRENT_PLUGIN_NAME = "Angular2UiRouter";

  BOOMR = window.BOOMR || {};
  BOOMR.plugins = BOOMR.plugins || {};

  if (BOOMR.plugins[CURRENT_PLUGIN_NAME] || typeof BOOMR.plugins.SPA === "undefined") {
    return;
  }

  BOOMR.plugins.SPA.register(CURRENT_PLUGIN_NAME);

  var impl = {
    hooked: false,
    enabled: false,
  };

  BOOMR.plugins[CURRENT_PLUGIN_NAME] = {
    init: function(config) {
      var properties = ["enabled"];
      BOOMR.utils.pluginConfig(impl, config, CURRENT_PLUGIN_NAME, properties);
      return this;
    },

    hook: function(transitionService, hadRouteChange, options) {
      if (impl.hooked || !transitionService) {
        return this;
      }

      transitionService.onStart({}, function(transition) {
        if (!impl.enabled) {
          return;
        }
        BOOMR.debug("Transition started: " + transition.from().url + " => " + transition.to().url, "angular2-uirouter");
        BOOMR.fireEvent("spa_init", [BOOMR.plugins.SPA.current_spa_nav(), transition]);
        BOOMR.plugins.SPA.route_change(null, transition);
      });

      BOOMR.plugins.SPA.hook(hadRouteChange, options);

      impl.hooked = true;

      return this;
    },

    is_complete: function() {
      return true;
    },

    disable: function() {
      impl.enabled = false;
      return this;
    },

    enable: function() {
      impl.enabled = true;
      return this;
    },
  };
}());
