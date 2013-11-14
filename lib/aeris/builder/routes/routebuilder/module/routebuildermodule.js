define([
  'aeris/util',
  'application/module/module'
], function(_, Module) {
  /**
   * @class aeris.builder.routes.routebuilder.module.RouteBuilderModule
   * @extends aeris.application.module.Module
   *
   * @constructor
   *
   * @param {Backbone.View} options.routeControlsController Required.
   * @param {Marionette.Region} options.routeControlsRegion Required.
  */
  var RouteBuilderModule = function(options) {
    /**
     * Controls the UI controls view for the route builder.
     *
     * @type {Backbone.View}
     * @private
     */
    this.routeControlsController_ = options.routeControlsController;


    /**
     * Region in which to render the
     * route builder controls view.
     *
     * @type {Marionette.Region}
     * @private
     */
    this.routeControlsRegion_ = options.routeControlsRegion;


    Module.apply(this, arguments);

    this.addInitializer(this.renderRouteControls_);
  };
  _.inherits(RouteBuilderModule, Module);


  /**
   * Render the route controls view.
   *
   * @private
   */
  RouteBuilderModule.prototype.renderRouteControls_ = function() {
    this.routeControlsRegion_.show(this.routeControlsController_);
  };


  return RouteBuilderModule;
});