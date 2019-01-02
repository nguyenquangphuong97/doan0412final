import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar.js';
import { firebaseData } from '../firebaseConnect.js'
import TrangChuForm from './TrangChuForm.js'
class Trangchu extends Component {
 constructor(props) {
        super(props);
        this.state = {
            dataFromFirseBase: []

        }
    }
    componentWillMount() {         
        firebaseData.ref('admin').on('value', (admins) => {
            var arrayData = [];
            admins.forEach(element => {
                const key = element.key;
                const id = element.val().id;
                const pass = element.val().pass;
                const hovaten=element.val().hovaten;
                const diachi=element.val().diachi;
                const sdt=element.val().sdt;
                const cmnd=element.val().cmnd;
                arrayData.push({
                    key: key,
                    id: id,
                    pass: pass,
                    hovaten:hovaten,
                    diachi:diachi,
                    sdt:sdt,
                    cmnd:cmnd

                })
            });
            // mảng array data đang chứa tất cả dữ liệu từ trong firebase
            // sau đó set state firsebase bằng cái arraydata
            this.setState({
                dataFromFirseBase: arrayData
            });
        })
    }
    getDataFromDb = () => this.state.dataFromFirseBase.map((value, key) => (
        <TrangChuForm
            key={key}
            a={value.id}
            b={value.pass}
            c={value.hovaten}
            d={value.diachi}
            e={value.sdt}
            f={value.cmnd}
    
        >
        </TrangChuForm>
    ))
    editData=(item)=>{
       
    }
    getData = (item) => {
        firebaseData.ref('admin').push(item);
    }
    render() {
        /*firebaseData.once('value').then(function(snapshot){
            console.log(snapshot.val());
        });*/
        return (
            <div > 
                <Navbar></Navbar>
                {this.getDataFromDb()}
              
            </div>


        );
    }
}

export default Trangchu;