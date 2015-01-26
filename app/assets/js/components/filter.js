var App = App || {};

(function() {
    'use strict';

    var Filter = React.createClass({
        getInitialState: function() {
            return {
                inputColor: null,
                inputModel: null
            };
        },

        componentWillMount: function() {
            Backbone.Events.on('change:cars', function(car) {
                this.setState(car.toJSON());
                console.log(car);
            }.bind(this));
        },

        componentWillUnmount: function() {
            Backbone.Events.off('change:cars');
        },

        _filter: function() {
            var color = this.refs.inputColor.getDOMNode().value,
            model = this.refs.inputModel.getDOMNode().value,
            filters = {};

            if (color != '' && color != undefined) {
                filters.cor = color;
            }

            if (model != '' && model != undefined) {
                filters.modelo = model;
            }

            Backbone.Events.trigger('filter:cars', filters);
        },

        render: function() {
            return (
                <ul className="left">
                    <li>
                        <div className="row" onKeyUp={this._filter}>
                            <div className="large-6 small-6 columns">
                                <input type="text" placeholder="Digite a cor" ref="inputColor" />
                            </div>
                            <div className="large-6 small-6 columns">
                                <input type="text" placeholder="Digite a marca" ref="inputModel" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="button bt-filtrar" onClick={this._filter}>Filtrar</a>
                    </li>
                </ul>
            );
        }
    });

    App.Filter = Filter;
})();
