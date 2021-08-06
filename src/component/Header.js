import React from 'react';
// import import './App.css';
export default function Header() {
    const stylenav = {
        // display: 'flex',
        // justifyContent: 'end',
        position: 'absolute',
        right: "0",
        top: "-2px",
    }
    const navtop = {
        backgroundColor: "#087999",
        height: "32px",
        // position: "fixed",
        // top: "0px",
        // right: "0px",
        // left: "0px"

    }
    return (
        <>
            <div className="nav-top" style={navtop}>
                {/* <img src={process.env.PUBLIC_URL + "./backgroun.jpg"} width="1520px"/> */}
                <img style={stylenav} src={process.env.PUBLIC_URL + '/navtop.PNG'} width="500px" />
            </div>
        </>
    )
}