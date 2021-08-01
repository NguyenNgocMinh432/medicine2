import React from 'react';

export default function Mailbox() {

    const container = {
        width: "911px",
        height: "350px",
        backgroundColor: "#ffff",
        borderRadius: "10px",
        marginLeft: "303px"
    }

    const mailbox = {
        width: "492px",
        height: "150px",
        borderRadius: "10px",
        marginLeft: "205px"
    }
    const btn={
        width: "492px",
        height: "30px",
        borderRadius: "4px",
        backgroundColor:"rgb(8, 121, 153)",
        marginLeft:"210px",
        marginTop: "10px"
    }
    return (
        <div
            style={
                {
                    height: "500px",
                    backgroundColor: "rgb(127, 204, 220)",
                    marginTop: "50px"
                }
            }
        >
            <div>
                <p
                    style={
                        {
                            fontWeight: "bold",
                            fontSize: "25px",
                            textAlign: "center",
                            padding: "30px"

                        }
                    }
                >
                    HÒM THƯ LIÊN HỆ
                </p>
            </div>
            <div
                style={container}
            >
                <div>
                    <input 
                    style={mailbox}
                    type="text" placeholder="Mời bạn nhập phản hồi....." name="name" />
                </div>
                <div>
                    <button
                    style={
                        btn
                    }
                    >

                    </button>
                   
                </div>
                <div>
                    <button style={btn}></button>
                </div>
                <div>
                    <button
                    style={
                        {
                            width:"200px",
                            height:"30px",
                            backgroundColor: "rgb(8, 121, 153)",
                            color:"white",
                            borderRadius: "4px",
                            marginLeft:"355px",
                            marginTop:"20px"
                        }
                    }
                    >Send</button>
                </div>
            </div>

        </div>
    )
}