define(
  'router',
  [
    'collection/car'
  ],
  function (CarCollection) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'car/:id': 'car'
        },

        initialize: function(callback) {
            this.cars = new CarCollection();
            this.cars.fetch();
            this.cars.on('sync', function() {
                callback();
            });
        },

        index: function() { },

        car: function(id) { }
    });

    return Router;
  }
);
