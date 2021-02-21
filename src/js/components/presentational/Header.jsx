import React, { Component } from 'react';


export const Header = (props) => {

    return (
            <header>
              <p>Mars Vibing</p>
              <select id="dataChange" onChange={props.handleDataChange}>
                <option value="images">Mars Images</option>
                <option value="weather">Mars Weather</option>
              </select>
            </header>
    );

}