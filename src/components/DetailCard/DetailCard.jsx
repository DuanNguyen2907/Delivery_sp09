import React from "react";
import "./DetailCard.css";
import { UilTimes } from "@iconscout/react-unicons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DateTime = (time) => {
  var date = time.split("T");

  return date[0];
};

const DetailCard = (props) => {
  let param = props.card;
  console.log(param);
  return (
    <div className="detail-card">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mã Đơn</TableCell>
              <TableCell>{param.orderId}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Ngày đặt đơn</TableCell>
              <TableCell>{DateTime(param.createAt)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Trọng lượng</TableCell>
              <TableCell>{param.weight}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Địa chỉ kho</TableCell>
              <TableCell>{param.warehouse.address.detail}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Địa chỉ nhận hàng</TableCell>
              <TableCell>{param.receiver.address.detail}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Giá</TableCell>
              <TableCell>{param.cod}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Phí Ship</TableCell>
              <TableCell>{param.fee}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Khách hàng</TableCell>
              <TableCell>{param.receiver.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Số điện thoại người nhận</TableCell>
              <TableCell>{param.receiver.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Sản phẩm</TableCell>
              <TableCell>
                {param.products.map((product) => (
                  <span key={product.id}>
                    {product.name}
                    <br />
                  </span>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Tình trạng</TableCell>
              <TableCell>{param.status.status}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "black" }}>
        <UilTimes onClick={props.setDetail} />
      </div>
    </div>
  );
};

export default DetailCard;
