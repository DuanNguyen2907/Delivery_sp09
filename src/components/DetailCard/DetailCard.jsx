import React from 'react'
// import axios from "axios";
// import { useState, useEffect } from "react";
import './DetailCard.css'
import { UilTimes } from "@iconscout/react-unicons";

const DateTime = (time) => {
    var date = time.split("T");
  
    return date[0];
  };

const DetailCard = (props) => {
    let param = props.card;
  return (
    <div className="detail-card">
        <div className="info">
            <span><span>Mã đơn hàng:</span>{param.orderId}</span><br/>
            <span><span>Ngày tạo đơn:</span>{DateTime(param.createAt)}</span><br/>
            <span><span>Trọng lượng hàng:</span>{param.weight}</span><br/>
            <span><span>Địa chỉ kho:</span>{param.warehouse.address.detail}</span><br/>
            <span><span>Địa chỉ nhận hàng:</span>{param.receiver.address.detail}</span><br/>
            <span><span>Giá:</span>{param.cod}</span><br/>
            <span><span>Phí Ship:</span>{param.fee}</span><br/>
            <span><span>Tên người nhận: </span>{param.receiver.name}</span><br/>
            <span><span>Số điện thoại người nhận: </span>{param.receiver.phone}</span><br/>
        </div>
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "black" }}>
            <UilTimes
                onClick={props.setDetail}
            />
        </div>
    </div>
  )
}

export default DetailCard