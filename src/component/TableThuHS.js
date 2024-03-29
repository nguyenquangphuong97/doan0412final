import React, { Component } from 'react';
import TableRowSinhVien from './TableRowSinhVien.js'
import TableRowThuHs from './TableRowThuHs.js';
class TableThuHS extends Component {
    constructor(props) {
        super(props);

    }
    getDataFromDb = () => this.props.datafirebase.map((value, key) => (
        <TableRowThuHs
          key={key}
          e={value.key}
          a={value.masv}
          b={value.hoten}
          c={value.diem}
          d={value.cmnd}
          f={value.hoso}
          hosoFunClick={(ok)=>this.props.hosoFun(ok)}
          removeFun={() => this.removeUser(value)}
          keyclick={(user)=>this.props.keyFun(value)}
         
        >
        </TableRowThuHs>
        
    
      ))
    render() {
        return (
            <div>

                <table className="table table-striped" id="table1">
                    <thead className="thead-default">
                        <tr>
                            <th>Mã SV</th>
                            <th>Họ Tên</th>
                            <th>Điểm </th>
                            <th>CMND </th>
                            <th>Hồ Sơ</th>
                            <th>Tiền</th>
                            <th>Thu HS</th>
                            <th>thu Tiền</th>

                        </tr>
                    </thead>
                    <tbody>

                        {this.getDataFromDb()}

                    </tbody>

                </table>

            </div>
        );
    }
}

export default TableThuHS;