import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="ml-2.5" /*"item-info"*/>
        <h2 className="ml-2.5 mt-2 text-3xl">{info.name}</h2>
        <p className="ml-2.5 my-2 text-base italic">{info.desc}</p>
      </div>
      <div className="flex items-center mb-5" /*"item-quantity"*/>
        <button
          className="item-less
          ml-2.5 bg-white border-0 px-4 py-2 min-w-150 text-base rounded cursor-pointer transition-opacity ease-in-out shadow-333xl hover:opacity-80 active:shadow-222xl active:translate-y-px disabled:opacity-40 mx-2.5"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="text-base p-0 m-0">{total ? total : ""}</h3>
        <button className="item-more 
        ml-2.5 bg-white border-0 px-4 py-2 min-w-150 text-base rounded cursor-pointer transition-opacity ease-in-out shadow-333xl hover:opacity-80 active:shadow-222xl active:translate-y-px disabled:opacity-40 mx-2.5" 
        onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
