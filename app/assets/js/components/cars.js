define(
  'components/cars',
  [
    'react'
  ],
  function (React) {
    'use strict';

    var Car = React.createClass({
      _setImage: function(imagem){
      // seta a logo da marca caso a imagem seja null
      return (
      imagem === null || imagem === undefined
      ? 'http://s17.postimg.org/tvd138lv3/Volkswagen_5.jpg'
      : imagem
      );
      },

      render: function() {
        var car = this.props.car;

        return (
          React.DOM.li(
            {className: "vehiclesList-item"},
            React.DOM.a(
              {href: "#car/" + car.get('id')},
              React.DOM.img(
                {src: this._setImage(car.get('imagem'))}
              )
            ),
            React.DOM.p(
              null, 'Marca: ' + car.get('marca')
            ),
            React.DOM.p(
              null, 'Modelo: ' + car.get('modelo')
            ),
            React.DOM.p(
              null, 'Placa: ' + car.get('placa')
            ),
            React.DOM.p(
              null, 'Cor: ' + car.get('cor')
            ),
            React.DOM.p(
              null, 'Combustível: ' + car.get('combustivel')
            )
          )
        );
      }
    });

    var Cars = React.createClass({
      getInitialState: function() {
        return { cars: this.props.cars };
      },

      componentWillMount: function() {
        // get cars
        var cars = this.props.cars;
          cars.once('sync', function() {
          this.forceUpdate();
        }, this);

        // listen event filter
        Backbone.Events.on('filter:cars', function(filters) {
          console.log(this.props.cars.customFilter(filters), filters)
          this.setState({cars: this.props.cars.customFilter(filters)});
        }.bind(this));
      },

      componentDidMount: function() { },

      render: function() {
        var cars = this.state.cars.map(function(car) {
          return React.createElement(Car, {car: car});
        });

        return (
          React.DOM.ul({className: "vehiclesList"}, cars)
        );
      }
    });

    return Cars;
  }
);
