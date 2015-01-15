var App = App || {};

(function() {
    'use strict';
    
    var Cars = Backbone.Collection.extend({
        model: App.Car,
        url: '/api/cars.json'
    });

    App.Cars = Cars;
})();
