import React from 'react'
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const navigate = useNavigate();
  return (
      <div>
          <h1>Order Comfirmed!</h1>

          <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
  )
}

export default OrderSummary