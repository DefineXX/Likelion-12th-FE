import { useState, useEffect } from "react";
import { axiosInstance } from "../../api/index.js";
import ItemList from "./ItemList.jsx";
import SearchItem from "./SearchItem.jsx";
import RegisterItem from "./RegisterItem.jsx";
import Header from "../header/Header.jsx";

function Items() {
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
      <RegisterItem setItemList={setItemList}/>
      <ItemList title="상품 목록" items={itemList} />
    </>
  );
}

export default Items;
