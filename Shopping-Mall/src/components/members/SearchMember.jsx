import { useState } from "react";
import { axiosInstance } from "../../api";
import MemberList from "./MemberList";

function SearchMember() {
  const [inputId, setInputId] = useState("");
  const [searchedMember, setSearchedMember] = useState();

  async function searchMember(id) {
    try {
      const response = await axiosInstance.get(`/members/${id}`);
      console.log(response.data);

      const memberData = response.data;
      setSearchedMember([memberData]);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchMember(inputId);
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
          </button>
        </div>
      </form>
      <MemberList title="조회한 회원" members={searchedMember} />
    </>
  );
}

export default SearchMember;
