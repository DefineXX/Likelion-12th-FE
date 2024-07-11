import "./items.css";

function Items({ title, items }) {
  return (
    <>
      <section className="item-header">
        <h2 className="item-header__title">{title}</h2>
      </section>
      <section className="item-list">
        <ul className="item-container">
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <li key={item.id} className="item-box">
                <h3 className="item-title">{item.item_name}</h3>
                <p>{item.stock_quantity}개</p>
                <p>{item.item_price}원</p>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default Items;
