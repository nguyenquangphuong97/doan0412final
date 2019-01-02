import React, { Component } from 'react';

class TableRowThuHs extends Component {
    constructor(props) {
        super(props);
        this.state={
            tthoso:true,
            tthosoOut:"Đã thu"
        }
    }
    
    HoSoClick =()=>{
      //  console.log("props f  "+this.props.f);
      this.setState({
        tthoso:!this.state.tthoso
    })
     if(this.state.tthoso==true){
         this.state.tthosoOut="Đã thu"
     }else{
        this.state.tthosoOut="Chưa thu"   
     }

       // this.props.hosoFunClick(this.state.tthosoOut);
      //  this.props.keyclick();
     //   console.log(ok);

    }

    render() {
        return (
            <tr>
                <td>{this.props.a}</td>
                <td>{this.props.b}</td>
                <td>{this.props.c}</td>
                <td>{this.props.d}</td>
                <td>{this.state.tthosoOut}</td>
                <td>bb</td>
                <td><button onClick={()=>this.HoSoClick()} className="btn btn-info">Thu HS</button></td>
                <td><button  className="btn btn-success">Thu tiền</button></td>


            </tr>
        );
    }
}

export default TableRowThuHs;