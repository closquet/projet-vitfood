/* hepl-dw/vitfoud-client
 *
 * /src/js/components/about/me.js - About Component : about me
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <h3>À propos de moi</h3>
                <div className="about-content">{ "Je m'appel Eric Closquet, je suis étudiant à la haute école de la province de Liège en infographie option web bloc 2." }</div>
                <img src="./assets/img/eric.jpg" alt="Une photo de moi"/>
            </div>
        );
    }
}
