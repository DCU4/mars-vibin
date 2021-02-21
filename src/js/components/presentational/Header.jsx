import React, { Component } from 'react';


export const Header = (props) => {

    return (
            <header>
              <h1>Mars Vibing</h1>
              <select id="dataChange" onChange={props.handleDataChange}>
                <option value="info">Mars Info</option>
                <option value="images">Mars Images</option>
                <option value="weather">Mars Weather</option>
              </select>
            </header>
    );

}