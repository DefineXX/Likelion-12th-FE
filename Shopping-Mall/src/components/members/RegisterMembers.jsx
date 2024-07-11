import { useState } from "react";
import { axiosInstance } from "../../api";

function RegisterMembers({ setMemberList }) {
  const [memberName, setMemberName] = useState();
  const [memberCity, setMemberCity] = useState();
  const [memberStreet, setMemberStreet] = useState();
  const [memberPostalCode, setMemberPostalCode] = useState();

  async function registerMember(memberData) {
    try {
      const response = await axiosInstance.post("/members", memberData);
      console.log(response.status);
      console.log(response.data);
      return response.data;

    } catch (error) {
      console.log(error);
    }
  }


  async function handleSubmit(event) {
    event.preventDefault();

    const addMember = {
      name: memberName,
      address: {
        city: memberCity,
        street: memberStreet,
        zipcode: memberPostalCode,
      },
    };

    const addedMember = await registerMember(addMember);

    if(addedMember) {
      try {
        const response = await axiosInstance.get("/members");
        const addedMemberList = response.data;
        setMemberList(addedMemberList);

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className="login-box">
        <h1 className="login_register-title">로그인/회원가입</h1>
        <form onSubmit={handleSubmit} className="info-box">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={memberName || ''}
            onChange={(e) => setMemberName(e.target.value)}
            required
          />

          <label htmlFor="city">도시</label>
          <input
            type="text"
            id="city"
            value={memberCity || ''}
            onChange={(e) => setMemberCity(e.target.value)}
            required
          />

          <label htmlFor="street">도로명 주소</label>
          <input
            type="text"
            id="street"
            value={memberStreet || ''}
            onChange={(e) => setMemberStreet(e.target.value)}
            required
          />

          <label htmlFor="postalCode">우편번호</label>
          <input
            type="text"
            id="postalCode"
            value={memberPostalCode || ''}
            onChange={(e) => setMemberPostalCode(e.target.value)}
            required
          />

          <button type="submit">회원가입</button>
        </form>
      </div>
    </>
  );
}

export default RegisterMembers;
