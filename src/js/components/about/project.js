/* hepl-dw/vitfoud-client
 *
 * /src/js/components/about/project.js - About Component : about project
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";

export default class AboutProject extends Component {
    render() {
        return (
            <div>
                <h3>À propos du projet</h3>
                <div className="about-content">{ "Ce site est un projet dont le but est de créer une application web pour le cours de design web dont le contenu est généré par React. Ce qui m'a permis entre autres de découvir un peu ce qu'était cette technologie." }</div>
            </div>
        );
    }
}
