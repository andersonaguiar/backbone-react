var App = App || {};

(function() {
    'use strict';

    var Item = React.createClass({
        render: function() {
            var car = this.props.car;

            return (
                <li>
                    <a href={car.get('href')}>
                        {car.get('title')}
                    </a>
                </li>
            );
        }
    });

    var Sidebar = React.createClass({
        render: function() {
            var items = this.props.cars.map(function(car) {
                return <Item car={car} />;
            });

            return (
                <ul>
                    {items}
                </ul>
            );
        }
    });

    App.Sidebar = Sidebar;
})();
