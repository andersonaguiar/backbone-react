var App = App || {};

(function(){
    'use strict';

    var Filter      = App.Filter,
    Cars            = App.Cars,
    router          = new App.Router(function() {
        Backbone.history.start();
    });

    React.render(<Filter />, document.getElementById('top-filter'));
    React.render(<Cars cars={router.cars} />, document.getElementById('frota'));
})();
