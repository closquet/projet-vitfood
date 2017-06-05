/* hepl-dw/vitfoud-client
 *
 * /src/js/components/details/comment.js - Details Components : comment detail
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PlaceComment extends Component {
    render() {
        let dDate = new Date( this.props.date ),
            sISODate = dDate.toISOString(),
            sReadableDate = `${ dDate.toLocaleDateString() } à ${ dDate.toLocaleTimeString() }`;

        return (
            <li className="details-resto__com">
                <strong className="details-resto__com__nom">{ this.props.name }</strong>
                <time className="details-resto__com__date" dateTime={ sISODate }>{ sReadableDate }</time>
                <div className={`details-resto__com__com-taux-container`}>
                    <em className="details-resto__com__taux-msg">{ "Appréciation : " }</em>
                    <span className={`details-resto__com__com-taux details-resto__com__com-taux--${ this.props.rating }`}>{ `${ this.props.rating }/5` }</span>
                </div>
                <div className="details-resto__com__contenu">{ this.props.comment }</div>
            </li>
        );
    }
}

PlaceComment.propTypes = {
    "comment": PropTypes.string,
    "date": PropTypes.number,
    "name": PropTypes.string,
    "rating": PropTypes.number,
};
