define(['aeris', 'aeris/aerisapi'], function(aeris) {

  /**
   * @fileoverview Shared implementation of AerisWeatherDetailsClick strategy.
   */


  aeris.provide('aeris.maps.eventstrategies.mixins.AerisWeatherDetailsClick');


  /**
   * A mixin for shared implementation of the AerisWeatherDetailsClick strategy.
   *
   * @const
   */
  aeris.maps.eventstrategies.mixins.AerisWeatherDetailsClick = {


    /**
     * @override
     */
    onClick: function(aerisEvent, map) {
      var self = this;
      function fn(event) {
        var latLon = self.getLatLonFromEvent(event, map);
        var weatherPromise = aeris.AerisAPI.getInstance().getWeather(latLon, {
          'limit': 3
        });
        weatherPromise.done(function(weather) {
          aerisEvent.trigger('click', latLon, weather);
        });
      };
      return fn;
    },


    /**
     * Extract the latitude and longitude array from the click event.
     *
     * @param {Object} event The click event.
     * @param {Object} map The map the click occurred on.
     * @return {Array.<number,number>}
     * @protected
     */
    getLatLonFromEvent: aeris.abstractMethod

  };

});