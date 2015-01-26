var App = App || {};

(function(){
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
                <li className="vehiclesList-item">
                    <a href={"#car/" + car.get('id')}>
                        <img src={this._setImage(car.get('imagem'))} />
                    </a>
                    <p>Marca: {car.get('marca')}</p>
                    <p>Modelo: {car.get('modelo')}</p>
                    <p>Placa: {car.get('placa')}</p>
                    <p>Cor: {car.get('cor')}</p>
                    <p>Combustível: {car.get('combustivel')}</p>
                </li>
            );
        }
    });

    var Cars = React.createClass({
        getInitialState: function() {
            return { cars: this.props.cars };
        },

        componentWillMount: function() {
            // console.time('Render');
            // get cars
            var cars = this.props.cars;
            cars.once('sync', function() {
                this.forceUpdate();
            }, this);

            // listen de event of filter
            Backbone.Events.on('filter:cars', function(filters) {
                console.log(this.props.cars.customFilter(filters), filters)
                this.setState({cars: this.props.cars.customFilter(filters)});
            }.bind(this));
        },

        componentDidMount: function() { },

        render: function() {
            var cars = this.state.cars.map(function(car) {
                return <Car car={car} />;
            });

            return (
                <ul className="vehiclesList">
                {cars}
                </ul>
            );
        }
    });

    App.Cars = Cars;
})();
