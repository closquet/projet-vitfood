/* hepl-dw/vitfoud-client
 *
 * /src/js/components/details/info.js - Details Component : info component
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PlaceInfo extends Component {
    render() {
        return (
            <div className="details-resto__resto-info">

                <address className="details-resto__resto-adresse">{ this.props.address }</address>
                <p className="details-resto__resto-distance">
                    <span>{ "Distance : " }</span>
                    <strong>{ `${ this.props.distance }m` }</strong>
                </p>
            </div>
        );
    }
}

PlaceInfo.propTypes = {
    "name": PropTypes.string.isRequired,
    "address": PropTypes.string.isRequired,
    "distance": PropTypes.number.isRequired,
};
//<h3>{ this.props.name }</h3>