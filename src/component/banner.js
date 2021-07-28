import React from 'react';

export default function banner() {
    return(
        <>
            <div>
                <img src={process.env.PUBLIC_URL + "./backgroun.jpg"} width="1520px" height="641px"/>
                
            </div>
        </>
    )
}