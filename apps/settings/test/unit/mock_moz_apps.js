'use strict';

/* exported MockMozApps */
var MockMozApps = {
  mGetCurrentAppCallback: {
    onsuccess: null
  },
  mGetAllAppsCallback: {
    onsuccess: null
  },
  mApps: [],
  mCurrentApp: null,
  mAddToCurrentApp: function(app) {
    MockMozApps.mCurrentApp = app;
    MockMozApps.mApps.push(app);
  },
  mSetApps: function(apps) {
    MockMozApps.mApps = apps;
  },
  mgmt: {
    getAll: function() {
      return MockMozApps.mGetAllAppsCallback;
    },
    uninstall: function(app) {
      for (var i = 0; i < MockMozApps.mApps.length; i++) {
        if (MockMozApps.mApps[i].manifest.name && app.manifest.name &&
            MockMozApps.mApps[i].manifest.name == app.manifest.name) {
          MockMozApps.mApps.splice(i, 1);
          break;
        }
      }
    }
  },
  getSelf: function() {
    return MockMozApps.mGetCurrentAppCallback;
  },
  mTriggerGetCurrentAppCallback: function() {
    MockMozApps.mGetCurrentAppCallback.onsuccess({
      target: {
        result: MockMozApps.mCurrentApp
      }
    });
  },
  mTriggerGetAllAppsCallback: function() {
    MockMozApps.mGetAllAppsCallback.onsuccess({
      target: {
        result: MockMozApps.mApps
      }
    });
  }
};
