function OrderList({ orders }) {
  return (
    <>
      <section className="order-container">
        <ul className="order-list">
          {orders &&
            orders.length > 0 &&
            orders.map((order) => (
              <li key={order.id} className="order-box">
                {/* <h3 className="order-member">{order.member_id}</h3> */}
                <ul className="order-items">
                  {order.items.map((item) => (
                    <li key={item.item_id}>
                      <h3 className="item-title">상품명: {item.item_name}</h3>
                      <p>가격(1개당): {item.item_price}원</p>
                      <p>주문 수량: {item.count}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default OrderList;
