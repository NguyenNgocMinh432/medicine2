// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Banner from './component/banner';
import Crossbar from './component/crossbar';
// import Newproduct from './component/Newproduct';
import New from './component/new';
import Crosshotsale from './component/crosshotsale';
import Crossnews from './component/crossnews';
import Outstanding from './component/outstanding';
import OutstandingSecond from './component/outSecond';
import News from './component/news';
import Introduce from './component/introduce';
import IntroduceRight from './component/introduceRight';
import IntroduceLeft from './component/introduceLeft';
import Mailbox from './component/mailbox';
import Footer from './component/footer';
import introducePage from './component/introducePage';
function App() {
  const navbelow = {
    backgroundColor: "#087999",
    height: "100px",
    display: "flex",
    // position: "fixed",
    // top:"0px",
    // right:"0px",
    // left:"0px",
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
            <li> <a href="/introducePage">
              GIỚI THIỆU </a>
            </li>
            <li> <a href="/product">
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
                marginLeft: "-30px",
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
      <Crossbar />
      <New />
      <Crosshotsale />
      <New />
      <Crossnews />
      <div>
        <p
          style={
            {
              marginLeft: "125px",
              fontSize: "20px",
              color: "black",
            }
          }
        >
          <a
            style={
              {
                color: "#007bff",
              }
            }
            href="#">
            NỔI BẬT
          </a>
        </p>
      </div>
      <Outstanding />
      <OutstandingSecond />
      <div>
        <p
          style={
            {
              marginLeft: "125px",
              fontSize: "20px",
              color: "black",
            }
          }
        >
          <a
            style={
              {
                color: "#007bff",
              }
            }
            href="#">
            TIN MỚI
          </a>
        </p>
      </div>
      <News />
      <Introduce />
      <div
        style={
          {
            display: "flex",
            marginLeft: "140px",
            marginRight: "135px"
          }
        }
      >
        <div>
          <img
            style={
              {
                width: "650px",
                height: "400px",
                borderRadius: "10px"
              }
            }
            src={process.env.PUBLIC_URL + "./image/introduce.jpeg"} />
        </div>
        <div>
          <IntroduceRight />
        </div>
      </div>
      <div
        style={
          {
            display: "flex",
            marginLeft: "125px",
            marginRight: "135px",
            marginTop: "50px"
          }
        }
      >
        <div>
          <IntroduceLeft />
        </div>
        <div>
          <img
            style={
              {
                width: "650px",
                height: "400px",
                borderRadius: "10px"
              }
            }
            src={process.env.PUBLIC_URL + "./image/introduce2.jpg"} />
        </div>
      </div>
      <Mailbox />
      <Footer />
      <div
      style={
        {
          height:"30px",
          backgroundColor: "black",
          color: "white",
          textAlign: "center"
        }
      }
      >
        
        Bản quyền thuộc về Công ty TNHH Thiết Bị Công Nghệ Bách Hợp
      </div>
      <Router>
      <Route exact path="/" component={App} />
      <Route path="/introducePage" component={introducePage}/>
      </Router>
    </div>
  );
}

export default App;
