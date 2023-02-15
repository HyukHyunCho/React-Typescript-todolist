import { Item } from "../../types/type";
import "./style.css";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList = ({ items, setItems }: Props) => {
  const clickDelete = (data:Item) => {
    setItems(items.filter((item: Item) => item.itemId !== data.itemId));
  };

  const clickComplete = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }
        return item;
      })
    );
  };

  return (
    <ul className="itemContainer">
      {items.map((data: Item) => {
        return (
          <li className="itemList" key={data.itemId}>
            <p className={data.clear ? "complete" : "itemText"}>
              {data.itemName}
            </p>
            <button
              className="button button-complete"
              onClick={() => clickComplete(data)}
            >
              완료
            </button>
            <button
              className="button button-delete"
              onClick={() => clickDelete(data)}
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
