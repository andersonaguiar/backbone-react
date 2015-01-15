var App = App || {};

(function() {
    'use strict';

    var Car = App.Car
      , Cars = App.Cars;

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'cars/:id': 'cars'
        },

        initialize: function(callback) { // keep an eye on callback
            this.cars = new Cars();
            this.cars.fetch();
            this.cars.on('sync', function() {
                callback();
            });
        },

        index: function() {
            var car = this.cars.at(0);

            this.navigate('cars/' + car.id, {trigger: true});
        },

        cars: function(id) {
            var car = new Car();
            car.id = id;
            car.fetch();
            car.on('sync', function() {
                Backbone.Events.trigger('change:cars', car);
            });
        }
    });

    App.Router = Router;
})();
