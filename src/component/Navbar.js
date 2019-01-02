import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active" >
                     <NavLink to="/trangchu" className="navbar-brand" >Trang Chủ</NavLink>
                  </li>
                  <li className="nav-item active">
                     <NavLink to="/sinhvien" className="navbar-brand">Sinh Viên</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" className="navbar-brand" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Thu hồ Sơ
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink className="dropdown-item" to="/giayto">Giấy Tờ</NavLink>
                      <NavLink className="dropdown-item" to="/phieunhaphoc">In Phiếu Nhập Học</NavLink>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" className="navbar-brand" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Thu tiền
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink className="dropdown-item" to="/tienhocphi">Tiền Học Phí</NavLink>
                      <NavLink className="dropdown-item" to="/tienbaohiem">Tiền Bảo Hiểm</NavLink>
                      <NavLink className="dropdown-item" to="/khoanthukhac">Khoản Thu Khác</NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                  <NavLink className="navbar-brand" to="/xuatfile">Xuất File</NavLink>
                  </li>
                  <form>
                    <input className="form-control" placeholder="Tìm kiếm" />
                  </form>
                </ul>
              </div>
            </nav>
          
        );
    }
}

export default Navbar;