var App = App || {};

(function() {
    'use strict';

    var Content = React.createClass({
        getInitialState: function() {
            return {
                title: null,
                year: null,
                color: null
            };
        },

        componentWillMount: function() {
            Backbone.Events.on('change:cars', function(car) {
                this.setState(car.toJSON());
            }.bind(this));
        },

        componentWillUnmount: function() {
            Backbone.Events.off('change:cars');
        },

        render: function() {
            return (
                <div>
                    <h1>{this.state.title}</h1>
                    <ul>
                        <li>Color: {this.state.color}</li>
                        <li>Year: {this.state.year}</li>
                    </ul>
                </div>
            );
        }
    });

    App.Content = Content;
})();
