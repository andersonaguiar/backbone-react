var App = App || {};

(function() {
    'use strict';

    var Content = App.Content
      , Sidebar = App.Sidebar;

    var Bootstrap = React.createClass({
        componentWillMount: function() {
            cars.once('sync', function() {
                this.forceUpdate();
            }, this);
        },

        render: function() {
            return (
                <div>
                    <Sidebar cars={this.props.cars} />
                    <Content />
                </div>
            );
        }
    });

    var router = new App.Router(function() {
        Backbone.history.start();
    });

    var cars = router.cars
      , mount = document.getElementById('bootstrap');

    React.render(<Bootstrap cars={cars} />,mount);
})();
