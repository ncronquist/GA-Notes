bloggy.factory('AlertService', [function() {

  var alerts = [];

  return {
    clear: function () {
      // Clear all alerts
      console.log('called alert service clear!!');
      alerts = [];
    },
    add: function (type, text) {
      // add an alert
      alerts.push({type:type, text:text});
    },
    get: function () {
      // get list of all alerts
      return alerts;

    },
    remove: function (idx) {
      // Remove an alert by index
      alerts.splice(idx,1);
    }
  }

}])
