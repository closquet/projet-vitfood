/* hepl-dw/vitfoud-client
 *
 * /src/js/components/commons/place.js - Commons Component : place infos
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Place extends Component {
    renderOpenState() {
        if ( this.props.open ) {
            return ( <span className={`resto-info-container__statut`}>{ "Ouvert" }</span> );
        }

        return ( <span className={`resto-info-container__statut`}>{ "Fermé" }</span> );
    }

    renderAddress() {
        return ( <address className={`resto-info-container__adresse`}>{ this.props.address }</address> );
    }

    renderDistance() {
        return ( <em className={`resto-info-container__distance`}>{ `${ parseInt(this.props.distance) }m` }</em> );
    }

    render() {
        return (
            <div className={`resto-info-container resto-info-container${ this.props.open?"--open":"--closed" }`}>
                <strong className={`resto-info-container__nom`}>{ this.props.name }</strong>
                { this.renderAddress() }
                { this.renderDistance() }
                { this.renderOpenState() }
            </div>
        );
    }
}

Place.propTypes = {
    "address": PropTypes.string,
    "distance": PropTypes.number,
    "name": PropTypes.string.isRequired,
    "open": PropTypes.bool,
};

Place.defaultProps = {
    "open": false,
    "address": "Adresse inconnue",
};
