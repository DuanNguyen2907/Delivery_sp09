import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DetailCard from "../DetailCard/DetailCard";
import "./Table.css";
import NativeSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import MainDash from "../MainDash/MainDash";

const DateTime = (time) => {
  var date = time.split("T");
  return date[0];
};

const options = [
  { id: 1, value: "chưa giao hàng", label: "chưa giao hàng" },
  { id: 2, value: "đang giao hàng", label: "đang giao hàng" },
  { id: 3, value: "đã giao hàng", label: "đã giao hàng" },
  { id: 4, value: "hủy giao hàng", label: "hủy giao hàng" },
  { id: 5, value: "trả hàng", label: "trả hàng" },
];

const sortOptions = [
  { id: 1, value: "chưa giao hàng", label: "chưa giao hàng" },
  { id: 2, value: "đang giao hàng", label: "đang giao hàng" },
  { id: 3, value: "đã giao hàng", label: "đã giao hàng" },
  { id: 4, value: "hủy giao hàng", label: "hủy giao hàng" },
  { id: 5, value: "trả hàng", label: "trả hàng" },
  { id: 6, value: "toàn bộ", label: "trả hàng" },
];

export default function ShipmentsTable(props) {
  let param = props.shipments;
  let onChange = props.onDataChange;
  return (
    <div className="Shipments">
      <MainDash />
      <BasicTable shipment={param} onChange={onChange} />
    </div>
  );
}

function BasicTable(props) {
  const [details, setDetails] = useState(false);
  const [changedID, setChangedID] = useState();
  const [cardDetail, setCardDetail] = useState({});

  const handleChange = (event) => {
    onchange(event.target.value);
  };
  let shipment = props.shipment;
  let onchange = props.onChange;
  let shipments = [];
  if (shipment !== undefined) {
    if (shipment.length === undefined) {
      shipments = [props.shipment];
    } else {
      shipments = props.shipment;
    }
  }
  return (
    <div className="Table">
      <h2>ORDER LIST</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">
                <NativeSelect
                  value={sortOptions.value}
                  id={sortOptions.id}
                  options={sortOptions}
                  defaultValue={sortOptions[5].id}
                  onChange={handleChange}
                >
                  {sortOptions.map((item) => (
                    <MenuItem value={item.id}>{item.value}</MenuItem>
                  ))}
                </NativeSelect>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mã Đơn</TableCell>
              <TableCell align="left">Ngày đặt đơn</TableCell>
              <TableCell align="left">Khách hàng</TableCell>
              <TableCell align="left">Phí ship</TableCell>
              <TableCell align="left">Tình trạng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments.map((row) => (
              <TableRow
                key={row.orderId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderId}
                </TableCell>
                <TableCell align="left">{DateTime(row.createAt)}</TableCell>
                <TableCell align="left">{row.receiver.name}</TableCell>
                <TableCell align="left">{row.fee}</TableCell>
                <TableCell align="left">
                  <NativeSelect
                    value={options.value}
                    id={options.id}
                    options={options}
                    defaultValue={options[row.statusCode.id - 1].id}
                    onChange={(event) => {
                      setChangedID(event.target.value);
                    }}
                  >
                    {options.map((item) => (
                      <MenuItem value={item.id}>{item.value}</MenuItem>
                    ))}
                  </NativeSelect>
                </TableCell>
                <TableCell
                  align="left"
                  className="Details"
                  onClick={() => {
                    setCardDetail(row);
                    setDetails(true);
                  }}
                >
                  details
                </TableCell>
                <TableCell>
                  <input
                    type="button"
                    value="Update"
                    onClick={() => {
                      let url =
                        "https://delivery-module-production.up.railway.app/api/shipping_order/status/" +
                        row.orderId +
                        "/" +
                        changedID;
                      console.log(url);
                      fetch(url, {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                          "Access-Control-Allow-Origin": "*",
                        },
                      }).then(() => {
                        window.location.reload();
                      });
                    }}
                  ></input>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {details ? (
        <DetailCard card={cardDetail} setDetail={() => setDetails(false)} />
      ) : (
        ""
      )}
    </div>
  );
}
