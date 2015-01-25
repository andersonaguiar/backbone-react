var App = App || {};

(function() {
    'use strict';

    var Car     = App.Car,
        Cars    = App.CarsCollection;

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'car/:id': 'car'
        },

        initialize: function(callback) {
            this.cars = new Cars();
            this.cars.fetch();
            this.cars.on('sync', function() {
                callback();
            });
        },

        index: function() { },

        car: function(id) { }
    });

    App.Router = Router;
})();
