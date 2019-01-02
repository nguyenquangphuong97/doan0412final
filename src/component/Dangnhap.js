import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,NavLink,Redirect} from 'react-router-dom';
import {firebaseData} from '../firebaseConnect.js'
import { log } from 'util';
import { exists } from 'fs';
import TrangChuForm from './TrangChuForm.js';
import TrangChu from './Trangchu.js'
class Dangnhap extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataFromFirseBase:[]
            
        }
    }
    
    isChange=(event)=>{
     //  var name=event.target.name;
       var value = event.target.value;
     
      //  console.log(name);
      //  console.log(value);   
        this.setState({
                id:value

        }) 
    
    }
        isChangep=(event)=>{
        //    var name=event.target.name;
            var value = event.target.value;
          
           //  console.log(name);
           //  console.log(value);   
             this.setState({
                     pass:value
     
             }) 
            }
        
   componentWillMount() { // thuc hien troc khi render        
    firebaseData.ref('admin').on('value',(admins )=>{
        var arrayData= [];
        admins.forEach(element => {
            const key=element.key;
            const id=element.val().id;
            const pass=element.val().pass;
            arrayData.push({
                key:key,
                id:id,
                pass:pass
            })  
            });
            this.setState({
                dataFromFirseBase:arrayData               
        });            
    })
    }
    abc=()=>{
        return (
            <div>
                <h2>asdasdasd</h2>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="display-4" style={{ textAlign: 'center' }}>Trang Đăng Nhập</h2>
                </div>
                <div className="w3-display-container w3-green">
                    <div className="row">
                        <div className="col-sm-4 push-sm-3" style={{ margin: 'auto' }}>
                            <label>ID</label>
                            <input  onChange={(event)=>this.isChange(event)} className="form-control"  name="id"/>
                            <label>Pass</label>
                            <input  onChange={(event)=>this.isChangep(event)} className="form-control" name="pass" /><br></br>
                            <p className="float-right"><NavLink to="/trangchu" className="btn btn-primary" >Login</NavLink></p>
                           
                        </div>
                        
                    </div>
                </div>
            
            </div>

        );
    }
}

export default Dangnhap;
