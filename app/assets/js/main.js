var requirejsConfig = {
  baseUrl: '',
  paths: {},
  // shim: {
  //   "backbone" : {
  //     "deps" : [
  //       "jquery",
  //       "underscore"
  //     ],
  //     "exports" : "Backbone"
  //   },
  //   "jquery" : {
  //     "exports" : "$"
  //   },
  //   "underscore" : {
  //     "exports" : "_"
  //   }
  // },
};

var configMap = [
  {
    module: 'jquery',
    modulePath: 'vendor/jquery/dist/jquery.min'
  },
  {
    module: 'underscore',
    modulePath: 'vendor/underscore/underscore-min'
  },
  {
    module: 'backbone',
    modulePath: 'vendor/backbone/backbone-min'
  },
  {
    module: 'react',
    modulePath: 'vendor/react/react'
  },
  {
    module: 'app',
    modulePath: 'assets/js/app'
  },
  {
    module: 'model/car',
    modulePath: 'assets/js/model/car'
  },
  {
    module: 'collection/car',
    modulePath: 'assets/js/collection/car'
  },
  {
    module: 'router',
    modulePath: 'assets/js/router'
  },
  {
    module: 'components/filter',
    modulePath: 'assets/js/components/filter'
  },
  {
    module: 'components/cars',
    modulePath: 'assets/js/components/cars'
  },
];

var sizeConfig = configMap.length;

for (i = 0; i < sizeConfig; i++) {
  requirejsConfig.paths[configMap[i].module] = configMap[i].modulePath
}

requirejs.config(requirejsConfig);

require(
  [
    'jquery',
    'react',
    'app'
  ],
  function($, React, App) {
    window.App = window.App || {};
    var j, sizeBodyClass, cfgModule

    for (j = 0; j < sizeConfig; j++) {
      cfgModule = configMap[j];

      if (cfgModule.hasOwnProperty('bodyClass')) {
        sizeBodyClass = cfgModule.bodyClass.length;

        if ($.isArray(cfgModule.bodyClass)) {
          for (i = 0; i < sizeBodyClass; i++) {
            if ($('body').hasClass(cfgModule.bodyClass[i])) {
              require([cfgModule.module]);
            }
          }
        } else if ($('body').hasClass(cfgModule.bodyClass)) {
          require([cfgModule.module]);
        }
      }
    }
  }
);
