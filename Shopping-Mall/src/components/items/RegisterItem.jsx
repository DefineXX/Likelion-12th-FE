import { useState } from "react";
import { axiosInstance } from "../../api";

function RegisterItem({ setItemList }) {
  const [itemName, setItemName] = useState();
  const [itemQuantity, setItemQuantity] = useState();
  const [itemPrice, setItemPrice] = useState();

  async function registerItem(itemInfos) {
    try {
      const response = await axiosInstance.post("/items", itemInfos);
      console.log(response.data);
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      item_name: itemName,
      stock_quantity: itemQuantity,
      item_price: itemPrice,
    };

    const addedItem = await registerItem(newItem);

    if(addedItem) {
        try {
            const response = await axiosInstance.get("/items");
            const addedItemList = response.data;
            setItemList(addedItemList);

        } catch (error) {
            console.log(error);
        }
    }
  }

  return (
    <>
      <form className="register-box" onSubmit={handleSubmit}>
        <label htmlFor="item_name">상품명</label>
        <input
          type="text"
          id="item_name"
          value={itemName || ""}
          onChange={(e) => setItemName(e.target.value)}
          required
        />

        <label htmlFor="stock_quantity">수량</label>
        <input
          type="number"
          id="stock_quantity"
          value={itemQuantity || ""}
          onChange={(e) => setItemQuantity(e.target.value)}
          required
        />

        <label htmlFor="item_price">판매 가격</label>
        <input
          type="number"
          id="item_price"
          value={itemPrice || ""}
          onChange={(e) => setItemPrice(e.target.value)}
          required
        />

        <button type="submit">상품 등록</button>
      </form>
    </>
  );
}

export default RegisterItem;
