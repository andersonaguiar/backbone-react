define(
  'collection/car',
  [
    'model/car'
  ],
  function (CarModel) {
    'use strict';

    var CarCollection = Backbone.Collection.extend({
      model: CarModel,
      url: 'http://private-eb7e67-cars12.apiary-mock.com',

      customFilter: function(filters){
        var results = this.where(filters);
        return results;
      },

      parse: function(payload){
        return payload;
      }
    });

    return CarCollection;
  }
);
