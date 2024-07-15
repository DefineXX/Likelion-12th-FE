import { useState } from "react";
import OrderList from "./OrderList";
import { axiosInstance } from "../../api";

function SearchByMemberID() {
  const [memberID, setMemberID] = useState();
  const [orderList, setOrderList] = useState();

  async function searchByID() {
    try {
      const response = await axiosInstance.get("/orders", {
        params: {
          memberId: memberID,
        },
      });

      const searchedOrder = response.data;
      console.log(searchedOrder);

      setOrderList(searchedOrder);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchByID();
  }

  return (
    <>
      <div className="search-by-id-container">
        <h2 className="search-by-member_title">Member ID로 주문 조회</h2>
        <form onSubmit={handleSubmit} className="search-by-member_form">
          <label htmlFor="memberID">Member ID</label>
          <input
            type="text"
            id="memberID"
            placeholder="ID를 입력하세요"
            value={memberID || ""}
            onChange={(e) => setMemberID(e.target.value)}
            required
          />

          <button className="search-by-member_button" type="submit">조회</button>
        </form>
        <OrderList orders={orderList} />
      </div>
    </>
  );
}

export default SearchByMemberID;
