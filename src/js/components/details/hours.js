/* help-dw/vitfoud-client
 *
 * /src/js/components/details/hours.js - Details Components : Opening hours
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { hoursAsString } from "../../utils/misc";

const DAY_NAMES = [ "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche" ];

export default class PlaceHours extends Component {
    renderOpenState() {
        if ( this.props.open ) {
            return ( <p className="details-resto__resto-statut-msg details-resto__resto-statut-msg--open">{ "Cet endroit est actuellement ouvert" }</p> );
        }

        return ( <p className="details-resto__resto-statut-msg details-resto__resto-statut-msg--closed">{ "Cet endroit est actuellement fermé" }</p> );
    }

    renderDay( [ iOpenHour, iCloseHour ], iDayIndex ) {
        return (
            <li className="details-resto__horaire-list__un-jour" key={ iDayIndex }>
                <strong className="details-resto__horaire-list__jour-nom">{ `${ DAY_NAMES[ iDayIndex ] } : ` }</strong>
                <span className="details-resto__horaire-list__heure">{ `${ hoursAsString( iOpenHour ) } - ${ hoursAsString( iCloseHour ) }` }</span>
            </li>
        );
    }

    render() {
        console.log( "PlaceHours.render( props: )", this.props );

        let aHours = Array.from( this.props.hours );

        aHours.push( aHours.shift() ); // Fix "weeks stars sunday".

        return (
            <div className="details-resto__resto-dispo">
                { this.renderOpenState() }
                <ul>
                    { aHours.map( this.renderDay.bind( this ) ) }
                </ul>
            </div>
        );
    }
}

PlaceHours.propTypes = {
    "hours": PropTypes.arrayOf( PropTypes.arrayOf( PropTypes.number ) ),
    "open": PropTypes.bool,
};
