/* hepl-dw/vitfoud-client
 *
 * /src/js/components/commons/header.js - Header component
 *
 * coded by leny@flatLand!
 * started at 22/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default class Header extends Component {
    handleBackClick( oEvent ) {
        oEvent.preventDefault();

        this.props.onBack();
    }

    renderNav() {
        let $prevLink, $aboutLink;

        if ( this.props.backLink ) {
            $prevLink = (
                <Link to={ this.props.backLink } className="main-nav__back">{ "retour" }</Link>
            );
        }

        $aboutLink = (
            <Link to="/about" className="main-nav__about">{ "à propos" }</Link>
        );

        return (
            <nav>
                { $prevLink }
                { $aboutLink }
            </nav>
        );
    }

    render() {
        console.log( "Header.render( props: )", this.props );

        return (
            <header>
                <a href="#/">
                    <h1>{ "Vitfoud" }</h1>
                </a>

                <h2>{ this.props.pageTitle }</h2>
                { this.renderNav() }
            </header>
        );
    }
}

Header.propTypes = {
    "pageTitle": PropTypes.string.isRequired,
    "backLink": PropTypes.string,
};
