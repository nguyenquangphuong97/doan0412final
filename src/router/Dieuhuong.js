import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';
import Dangnhap from '../component/Dangnhap.js'
import Sinhvien from '../component/Sinhvien.js'
import Trangchu from '../component/Trangchu.js';
import GiayTo from '../component/GiayTo.js';
import PhieuNhapHoc from '../component/PhieuNhapHoc.js';
import TienHocPhi from '../component/TienHocPhi.js';
import TienBaoHiem from '../component/TienBaoHiem.js';
import KhoanThuKhac from '../component/KhoanThuKhac.js';
import XuatFile from '../component/XuatFile.js';
class Dieuhuong extends Component {
    render() {
        return (
            <div>
                 <Route exact path="/sinhvien" component={Sinhvien}/>
                 <Route exact path="/giayto" component={GiayTo}/>
                 <Route exact path="/phieunhaphoc" component={PhieuNhapHoc}/>
                 <Route exact path="/tienhocphi" component={TienHocPhi}/>
                 <Route exact path="/tienbaohiem" component={TienBaoHiem}/>
                 <Route exact path="/khoanthukhac" component={KhoanThuKhac}/>
                 <Route exact path="/xuatfile" component={XuatFile}/>
                 <Route exact path="/" component={Dangnhap}/>
                 <Route exact path="/trangchu" component={Trangchu}/>
            </div>
        );
    }
}

export default Dieuhuong;