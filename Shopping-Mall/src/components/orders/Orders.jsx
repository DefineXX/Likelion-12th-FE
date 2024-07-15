import Header from "../header/Header";
import MakeOrder from "./MakeOrder";
import SearchByMemberID from "./SearchByMemberID";
import SearchOrder from "./SearchOrder";

function Orders() {
  return (
    <>
      <Header />
      <MakeOrder />
      <SearchOrder />
      <SearchByMemberID />
    </>
  );
}

export default Orders;
