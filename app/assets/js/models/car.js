var App = App || {};

(function() {
    'use strict';

    App.Car = Backbone.Model.extend({
        initialize: function(attrs, opts) { },

        validate: function(attrs, options){ },

        urlRoot: function() {
            return 'carro.json';
        }
    });
})();
