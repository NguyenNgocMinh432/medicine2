import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './component/Header';
import Banner from './component/banner';
import Crossbar from './component/crossbar';
function App() {
  const navbelow = {
    backgroundColor: "#087999",
    height: "100px",
    display: "flex",
  }
  const logo = {
    width: "226px",
    height: "90px",
    marginLeft: "140px",
  }
  const navlink = {
    display: "flex",
    listStyle: "none",

  }
  return (
    <div>
      <Header />
      <div style={navbelow} >
        <div >
          <img src={process.env.PUBLIC_URL + "/image/logo.png"} style={logo} />
        </div>
        <div style={{
          marginLeft: "70px",
          marginTop: "20px",
        }}>
          <ul style={navlink}>
            <li> <a href="">
              GIỚI THIỆU</a>
            </li>
            <li> <a href="">
              SẢN PHẨM
              <i class="fas fa-angle-down"></i>
            </a>
            </li>
            <li> <a href="">DỊCH VỤ</a> </li>
            <li> <a href="">TIN TỨC-SỰ KIỆN
              <i class="fas fa-angle-down"></i>
            </a></li>
            <li> <a href="">LIÊN HỆ </a></li>
          </ul>
        </div>
        <div>
          <input type="text" placeholder="Tìm kiêm" style={{
            borderRadius: "15px",
          }} />
          <i 
          style={
            {
              marginLeft:"-30px",
            }
          }
          class="fas fa-search">
          </i>
        </div>
        <div
          className="nav-search"
        >
          <i class="fas fa-user-alt"></i>
        </div>
      </div>
      <Banner />
      <Crossbar/> 
    </div>
  );
}

export default App;
