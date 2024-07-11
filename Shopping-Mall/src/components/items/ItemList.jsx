import { useState, useEffect } from "react";
import { axiosInstance } from "../../api/index.js";
import Items from "./Items";
import SearchItem from "./SearchItem.jsx";
import RegisterItem from "./RegisterItem.jsx";
import Header from "../header/Header.jsx";

function ItemList() {
  const [itemList, setItemList] = useState([]);
  // const [error, setError] = useState();

  useEffect(() => {
    async function getItemList() {
      try {
        const response = await axiosInstance.get("/items");
        const resData = response.data;

        setItemList(resData);
      } catch (error) {
        console.log(error);
      }
    }

    getItemList();
  }, []);

  // if(error) {
  //   return
  // }

  return (
    <>
      <Header />
      <SearchItem />
      <Items title="상품 목록" items={itemList} />
      <RegisterItem setItemList={setItemList}/>
    </>
  );
}

export default ItemList;
