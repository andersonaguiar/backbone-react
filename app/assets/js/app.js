define(
  'app',
  [
    'backbone',
    'underscore',
    'react',
    'router',
    'components/filter',
    'components/cars'
  ],
  function (Backbone, _, React, Router, ComponentFilter, ComponentCars) {
    'use strict';

    var router  = new Router(function() {
            Backbone.history.start();
        });

    React.render(React.createElement(ComponentFilter), document.getElementById('top-filter'));
    React.render(React.createElement(ComponentCars, {cars: router.cars}), document.getElementById('frota'));
  }
);

