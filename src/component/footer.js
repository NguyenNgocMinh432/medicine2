import React from 'react';

export default function Footer() {

    const ig = {
        width: "226px",
        height: "90px",
        marginLeft: "135px",
        marginTop: "40px"
    }
    const title = {
        fontWeight: "bold",
        color: "white"
    }

    const tex = {
        marginLeft: "70px",
        marginTop: "20px"
    }
    return (
        <div
            style={
                {
                    height: "300px",
                    backgroundColor: "rgb(8, 121, 153)"

                }
            }
        >
            <div
                style={
                    {
                        display: "flex",
                       marginRight: "135px"
                       
                    }
                }
            >
                <div>
                    <img
                        style={ig}
                        src={process.env.PUBLIC_URL + "./image/logo.png"} />
                </div>
                <div
                style={
                    tex
                }
                >
                    <p
                        style={title}
                    >VỀ CHÚNG TÔI</p>
                    <br></br>
                    <a href="">Giới Thiệu</a>
                    <br></br>
                    <a href="">Sản phẩm</a>
                    <br></br>
                    <a href="">Dịch vụ</a>
                    <br></br>
                    <a href="">Tin tức-Sự kiện</a>
                    <br></br>
                    <a href="">Liên hệ</a>
                </div>
                <div style={tex}>
                    <p
                        style={title}
                    >HỖ TRỢ MUA HÀNG</p>
                    <br></br>
                    <a href="">Điều khoản dịch vụ</a>
                    <br></br>
                    <a href="">Hướng dẫn thanh toán</a>
                    <br></br>
                    <a href="">Hướng dẫn mua hàng</a>
                    <br></br>
                    <a href="">Hướng dẫn giao nhận</a>
                </div>
                <div style={tex}>
                    <p
                        style={title}
                    >THÔNG TIN</p>
                    <br></br>
                    <a href="">www.bachhopmed.vn</a>
                    <br></br>
                    <a href=""> 0966 648 119</a>
                    <br></br>
                    <a href=""> Số 10, Lô A11, Geleximco Lê Trọng Tấn, An Khánh, Hoài Đức, <br></br>
                        Hà Nội</a>
                </div>
            </div>
        </div>
    )
}