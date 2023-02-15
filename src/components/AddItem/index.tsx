import { useState } from 'react';
import { Item } from "../../types/type";
import { v4 as uuid } from "uuid";
import "./style.css";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const AddItem = ({ items, setItems }: Props) => {
  const [itemName, setItemName] = useState("");
  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };
  const clickButton = () => {
    setItems([
      ...items,
      {
        itemId: uuid(),
        itemName,
        clear: false,
      },
    ]);
    setItemName("");
  }
  return (
    <div className="addContainer">
      <input
        className="input"
        type="text"
        value={itemName}
        placeholder="할 일 추가"
        onChange={changeItemName}
      />
      <button className="button" onClick={clickButton}>
        생성
      </button>
    </div>
  );
}

export default AddItem;