function MemberList({ title, members }) {
  return (
    <>
      <section className="member-header">
        <h2 className="member-header__title">{title}</h2>
      </section>
      <section className="member-list">
        <ul className="member-container">
          {members &&
            members.length > 0 &&
            members.map((member) => (
              <li key={member.id} className="member-box">
                <h3 className="member-title">이름: {member.name}</h3>
                <p>주소: {member.address.city} {member.address.street}<br/> 우편번호: {member.address.zipcode}</p>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default MemberList;
