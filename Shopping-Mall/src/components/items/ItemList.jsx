import "./items.css";

function ItemList({ title, items, error }) {
  return (
    <>
      <section className="list-container">
      <section className="item-header">
          <h2 className="header__title">{title}</h2>
        </section>
        {error && <p className="error-msg">존재하지 않는 상품입니다.</p>}
        {!error && (
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
        )}
      </section>
    </>
  );
}

export default ItemList;
