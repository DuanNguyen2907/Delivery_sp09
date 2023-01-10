import React from 'react'
import './Cards.css'
import { useEffect,useState } from 'react'
import axios from 'axios';

import Card from '../Card/Card'
const Cards = () => {
    const [pending,setPending] = useState();
    const [delivered,setDelivered] = useState();
    const [shipping,setShipping] = useState();
  // https://delivery-module-production.up.railway.app/api/shipping_order/count/status/

  useEffect(() => {
    axios
    .get('https://delivery-module-production.up.railway.app/api/shipping_order/count/status/1')
    .then((response) => {
        setPending(response.data.data)
    })
    axios
    .get('https://delivery-module-production.up.railway.app/api/shipping_order/count/status/3')
    .then((response) => {
        setDelivered(response.data.data)
    })
    axios
    .get('https://delivery-module-production.up.railway.app/api/shipping_order/count/status/2')
    .then((response) => {
        setShipping(response.data.data)
    })
    
  }, []);
  return (
    <div className="Cards">
        <Card
            title = "Delivered"
            number = {delivered}
            color = "green"
        />
        <Card
            title = "Pending"
            number = {pending}
            color = "blue"
        />
        <Card
            title = "Shipping"
            number = {shipping}
            color = "orange"
        />
    </div>
  )
}

export default Cards