import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="shop">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="btn-delete
            ml-2.5 bg-primary text-white border-0 px-4 py-2 min-w-150 text-base rounded cursor-pointer transition-opacity ease-in-out shadow-333xl hover:opacity-80
            active:shadow-222xl active:translate-y-px disabled:opacity-40"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
