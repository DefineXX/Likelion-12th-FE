import { useState } from "react";
import { axiosInstance } from "../../api";
import OrderList from "./OrderList";

function SearchOrder() {
  const [inputID, setInputID] = useState();
  const [searchedOrder, setSearchedOrder] = useState();

  async function searchOrder(id) {
    try {
      const response = axiosInstance.get(`/orders/${id}`);
      const orderList = response.data;
      console.log(orderList);

      setSearchedOrder([orderList]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    searchOrder(inputID);
  }

  return (
    <>
      <div className="search-order-container">
        <div className="search-order_header">
          <h2 className="search-order_title">주문 내역 단건 조회</h2>
        </div>
        <form onSubmit={handleSubmit} className="search-order_form">
          <label htmlFor="orderID">주문 ID</label>
          <input
            type="text"
            id="orderID"
            placeholder="ID를 입력하세요"
            value={inputID || ""}
            onChange={(e) => setInputID(e.target.value)}
            required
          />

          <button type="submit" className="search-order_button">
            조회
          </button>
        </form>
      </div>
      <OrderList orders={searchedOrder} />
    </>
  );
}

export default SearchOrder;
