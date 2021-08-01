import React from 'react';

export default function introduce() {
    const styleText = {
        display: 'flex',
        justifyContent: "flex-end",
    }
    const stylehr = {
        width: "150px",
        height: "1px",
    }
    const stylehr2 = {
        width: "1050px",
        height: "1px",
        color: "black",
    }
    return (
        <>
            <div
            >
                <p style={styleText}>
                    <a href=""
                        style={
                            {
                                color: "#007bff",
                                fontSize: "20px",
                                marginRight: "50px",
                                marginBottom: "-30px"
                            }
                        }
                    >Xem Thêm
                        <i
                            style={
                                {
                                    fontSize: "15px"
                                }
                            }
                            class="fas fa-chevron-right"></i>
                        <i
                            style={
                                {
                                    fontSize: "15px"
                                }
                            }
                            class="fas fa-chevron-right"></i>
                    </a>
                </p>
            </div>
            <div
                style={
                    {
                        display: "flex",
                        marginLeft: "50px",
                        marginRight: "50px",
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
                    GIỚI THIỆU 
                </p>
                <hr
                    style={stylehr2}
                ></hr>
            </div>
        </>
    )
}