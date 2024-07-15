import { useState } from "react";
import { axiosInstance } from "../../api";
import "./orders.css";

function MakeOrder() {
  const [memberID, setMemberID] = useState();
  const [itemID, setItemID] = useState();
  const [itemQuantity, setItemQuantity] = useState();

  async function makeOrder(orderData) {
    try {
      const response = await axiosInstance.post("/orders", orderData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const orderList = {
      member_id: memberID,
      items: [
        {
          item_id: itemID,
          count: itemQuantity,
        },
      ],
    };

    makeOrder(orderList);
  }

  return (
    <>
      <div className="make-order-area">
        <div className="make-order-container">
          <div className="make-order_header">
            <h2 className="make-order_title">상품 주문</h2>
          </div>

          <form onSubmit={handleSubmit} className="make-order_form">
            <div className="make-order__info">
              <label htmlFor="member-id">Member ID</label>
              <input
                type="text"
                id="member-id"
                placeholder="Member ID를 입력하세요"
                value={memberID || ""}
                onChange={(e) => setMemberID(e.target.value)}
                required
              />
            </div>
            <div className="make-order__info">
              <label htmlFor="item-id">상품 ID</label>
              <input
                type="text"
                id="item-id"
                placeholder="상품 ID를 입력하세요"
                value={itemID || ""}
                onChange={(e) => setItemID(e.target.value)}
                required
              />
            </div>
            <div className="make-order__info">
              <label htmlFor="order-quantity">등록 수량</label>
              <input
                type="text"
                id="order-quantity"
                placeholder="수량을 입력하세요"
                value={itemQuantity || ""}
                onChange={(e) => setItemQuantity(e.target.value)}
                required
              />
            </div>
            <div className="make-order__button-container">
              <button type="submit" className="make-order_button">Order</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MakeOrder;
