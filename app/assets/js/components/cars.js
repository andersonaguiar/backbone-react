define(
  'components/cars',
  [
    'react'
  ],
  function (React) {
    'use strict';

    var Car = React.createClass({
      render: function() {
        var car = this.props.car;

        return (
          React.DOM.li(
            {className: "vehiclesList-item"},
            React.DOM.p(
              {}, 'Marca: ' + car.get('marca')
            ),
            React.DOM.p(
              {}, 'Modelo: ' + car.get('modelo')
            ),
            React.DOM.p(
              {}, 'Placa: ' + car.get('placa')
            ),
            React.DOM.p(
              {}, 'Cor: ' + car.get('cor')
            ),
            React.DOM.p(
              {}, 'Combustível: ' + car.get('combustivel')
            ),
            React.DOM.p(
              {},
              React.DOM.a(
                {href: "#car/" + car.get('id')},
                'Detalhes'
              ),
              React.DOM.a(
                {href: "#car/" + car.get('id')},
                'Editar'
              ),
              React.DOM.a(
                {href: "#car/" + car.get('id')},
                'Excluir'
              )
            )
          )
        )
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
          // console.log(this.props.cars.customFilter(filters), filters)
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
