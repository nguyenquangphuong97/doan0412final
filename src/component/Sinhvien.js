import React, { Component } from 'react';
import TableRowSinhVien from './TableRowSinhVien.js'
import Navbar from './Navbar'
import { firebaseData } from '../firebaseConnect.js'
import EditSV from './EditSV.js';
import AddSV from './AddSV.js';
import Search from './Search.js';
import TableData from './TableData.js';
import GiayTo from './GiayTo.js';
import Pagination from "react-js-pagination";
class Sinhvien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromFirseBase: [],
      trangthai: false,
      userObject: {},
      ketqua1: [],
      searchText: ''
      
    }
  }
  componentWillMount() { // thuc hien truoc khi render  lay data tu firebase     
    firebaseData.ref('sinhvien').on('value', (admins) => {
      var arrayData = [];
      admins.forEach(element => {
        const key = element.key;
        const masv = element.val().masv;
        const hoten = element.val().hoten;
        const diem = element.val().diem;
        const cmnd = element.val().cmnd;
        arrayData.push({
          key: key,
          masv: masv,
          hoten: hoten,
          diem: diem,
          cmnd: cmnd

        })
      });

      this.setState({
        dataFromFirseBase: arrayData
      });
    })
  }
  changetrangthai = () => {
    this.setState({
      trangthai: !this.state.trangthai
    })
  }
  editUser = (user) => {   //lay du lieu tu bang do ra form edit
    this.setState({
      userObject: user
    });
    console.log("edituser " + user);

  }

  removeUser = (user) => {
    //console.log(user);
    firebaseData.ref('sinhvien').child(user.key).remove();
    this.setState({
      userObject: user
    });

  }
  hienthiformsua = () => {
    if (this.state.trangthai == true) {
      return (
        <EditSV object={this.state.userObject}></EditSV>
      )
    }
  }
  getNewUserData = (masv, hoten, diem, cmnd) => { //nhan du lieu de push vao firebase
    // console.log("du lieu nhan dc " +name);
    // console.log(tel);
    // console.log(Permission);    
    var item = {};
    item.masv = '';
    item.diem = '';
    item.hoten = '';
    item.cmnd = '';
    item.masv = masv;
    item.hoten = hoten;
    item.diem = diem;
    item.cmnd = cmnd;
    var items = [];
    //items.push(item);

    firebaseData.ref('sinhvien').push(item);
    console.log(items);
  }
  getTextfromSearch = (dl) => { //get du lieu tu searchText
    this.setState({
      searchText: dl
    });

    console.log("du lieu nhan dc la: " + dl);

  }

  render() {
    var ketqua = [];
    const temp = this.state.dataFromFirseBase;
    temp.forEach((item) => {
      if (item.hoten.indexOf(this.state.searchText) != -1) {
        ketqua.push(item);
      }
      console.log("search " + ketqua);

    });

    return (
      <div>
        <Navbar></Navbar>

        <div className="container">
          <div className="row">

            <div className="col-9">
              <Search search={(dl) => this.getTextfromSearch(dl)}></Search>
               <TableData datafirebase={ketqua}
                editFun={(user) => this.editUser(user)}
                changeEditUserStatu={() => this.changetrangthai()}
                removeFunClick={(user) => this.removeUser(user)}
              ></TableData>


              <AddSV className="float right" add={(masv, hoten, diem, cmnd) => this.getNewUserData(masv, hoten, diem, cmnd)}  ></AddSV>
            </div>
            <div className="col-3">
              {this.hienthiformsua()}
           
            </div>
          
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item ">
                <a class="page-link" href="#">2 </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
    
      </div>


    );
  }
}

export default Sinhvien;