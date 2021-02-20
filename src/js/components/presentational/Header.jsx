import React, { Component } from 'react';


export const Header = (props) => {

    return (

            <header>
              <p>What's it like to live on Mars?</p>
              <select id="dataChange" onChange={props.handleDataChange}>
                <option value="images">Mars Images</option>
                <option value="weather">Mars Weather</option>
                {/* <option value="">Mars Images</option> */}
              </select>
            </header>

    );

}