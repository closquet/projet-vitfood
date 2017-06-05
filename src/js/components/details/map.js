/* hepl-dw/vitfoud-client
 *
 * /src/js/components/details/map.js - Details Component : map
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PlaceMap extends Component {
    render() {
        return (
            <div className="details-resto__map">
                <img
                    src={ `https://maps.googleapis.com/maps/api/staticmap?center=${ this.props.position.latitude },${ this.props.position.longitude }&zoom=17&size=361x288&key=AIzaSyASObNu2JIp2Ud61K_swmjUzWej32XKrOs` }
                    alt="carte géographique montrant l'emplacement du restaurant"
                />
            </div>
        );
    }
}



PlaceMap.propTypes = {
    "position": PropTypes.shape( {
        "latitude": PropTypes.number,
        "longitude": PropTypes.number,
    } ),
};
