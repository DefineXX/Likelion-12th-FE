import { useState } from "react";
import { axiosInstance } from "../../api";
import Header from "../header/Header";

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

    if (addedMember) {
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
      <Header />
      <div className="login-box_container">
        <div className="login-box">
          <h2 className="login_register-title">Login/Register</h2>
          <form onSubmit={handleSubmit} className="info-box">
            <div className="login-info">
              <input
                type="text"
                id="name"
                placeholder="Name (이름)"
                value={memberName || ""}
                onChange={(e) => setMemberName(e.target.value)}
                required
              />
              {/* <label htmlFor="name">Name</label> */}
            </div>

            <div className="login-info login-margin">
              <input
                type="text"
                id="city"
                placeholder="City (ex.서울특별시)"
                value={memberCity || ""}
                onChange={(e) => setMemberCity(e.target.value)}
                required
              />
            </div>
            <div className="login-info login-margin">
              <input
                type="text"
                id="street"
                placeholder="Street Address (도로명 주소)"
                value={memberStreet || ""}
                onChange={(e) => setMemberStreet(e.target.value)}
                required
              />
            </div>
            <div className="login-info login-margin">
              <input
                type="text"
                id="postalCode"
                placeholder="ZIP Code (우편번호)"
                value={memberPostalCode || ""}
                onChange={(e) => setMemberPostalCode(e.target.value)}
                required
              />
            </div>

            <div className="register-btn_container">
              <button type="submit" className="register-btn">
                회원 가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterMembers;
