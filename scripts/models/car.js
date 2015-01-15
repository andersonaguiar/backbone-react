var App = App || {};

(function() {
    'use strict';
    
    var Car = Backbone.Model.extend({
        initialize: function(attrs, opts) {
            this.set('href', '#cars/' + this.id);
        },

        urlRoot: function() {
            return '/api/cars/' + this.id + '.json';
        }
    });

    App.Car = Car;
})();
