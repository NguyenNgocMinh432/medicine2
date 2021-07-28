import React from 'react';

export default function crossbar() {
    const styleText = {
        display: 'flex',
        justifyContent: "flex-end",
    }
    const stylehr = {
        width: "100px",
        height: "1px",
    }
    const stylehr2 = {
        width: "1000px",
        height: "1px",
        color: "black",
    }
    return (
        <>
            <div>
                <p style={styleText}>
                    <a href=""
                        style={
                            {
                                color: "black",
                            }
                        }
                    >Xem Thêm </a>
                </p>
            </div>
            <div
                style={
                    {
                        display: "flex",
                        marginLeft: "130px",
                        marginRight: "130px",
                    }
                }
            >
                <hr
                    style={stylehr}
                ></hr>
                <p
                    style={
                        {
                            fontWeight: 'bold',
                            fontSize: '20px',
                            marginTop: '-10px',
                        }
                    }
                >
                    New Product
                </p>
                <hr
                    style={stylehr2}
                ></hr>
            </div>
        </>
    )
}