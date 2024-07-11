import { useState } from "react";
import { axiosInstance } from "../../api";
import Items from "./Items";

function SearchItem() {
  const [inputId, setInputId] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
//   const [isExisting, setIsExisting] = useState(true);

  async function searchItem(id) {
    try {
      const response = await axiosInstance.get(`/items/${id}`);
      console.log(response.data);

    //   if(!response.status) {
    //     setIsExisting(false);
    //   }

      const resData = response.data;
      setSearchedItem([resData]);
    } catch (error) {
      //....
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchItem(inputId);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search-box">
        <label htmlFor="itemId">Search by ID</label>
        <input
          type="number"
          placeholder="ID로 검색"
          id="itemId"
          value={inputId || ''}
          onChange={(e) => setInputId(e.target.value)}
          required
        />
        <button type="submit" className="search-button">검색</button>
      </form>
      <Items title="검색한 상품" items={searchedItem} />
    </>
  );
}

export default SearchItem;
