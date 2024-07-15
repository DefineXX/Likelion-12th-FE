import { useState } from "react";
import { axiosInstance } from "../../api";
import ItemList from "./ItemList";

function SearchItem() {
  const [inputId, setInputId] = useState("");
  const [searchedItem, setSearchedItem] = useState(null);
  const [isError, setIsError] = useState(false);


  async function searchItem(id) {
    try {
      setIsError(false);
      const response = await axiosInstance.get(`/items/${id}`);
      console.log(response.status);

      const resData = response.data;
      setSearchedItem([resData]);
    } catch (error) {
      console.log(error.message);
      setIsError(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchItem(inputId);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search-box">
        <div className="tb">
          <label htmlFor="itemId">Search by ID</label>
          <input
            type="text"
            id="itemId"
            value={inputId || ""}
            onChange={(e) => setInputId(e.target.value)}
            required
          />

          <button type="submit" className="search-button">
            <div className="circle"></div>
            <span></span>
          </button>
        </div>
      </form>
      <ItemList
        title="검색 상품"
        items={searchedItem}
        error={isError}
      />
    </>
  );
}

export default SearchItem;
