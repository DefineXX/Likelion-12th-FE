import { useState } from "react";
import Header from "../header/Header";
import RegisterMembers from "./RegisterMembers";
import MemberList from "./MemberList";

import "./members.css";
import SearchMember from "./SearchMember";

function Members() {
  const [memberList, setMemberList] = useState();

  return (
    <>
      <Header />
      <RegisterMembers setMemberList={setMemberList} />
      <MemberList title="회원 목록" members={memberList} />
      <SearchMember />
    </>
  );
}

export default Members;