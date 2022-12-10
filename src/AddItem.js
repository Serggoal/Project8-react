import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="m-2.5 text-base px-2 py-2 rounded border-solid border border-gray-300"    /*"textfield"*/
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="m-2.5 text-base px-2 py-2 rounded border-solid border border-gray-300"
        />
      </div>
      <div className="form-footer">
        <div className="validation text-red-400">{props.valid}</div>
        <input type="submit" className="btn btn-basic
        ml-2.5 bg-secondary border-0 px-4 py-2 min-w-150 text-base rounded cursor-pointer transition-opacity ease-in-out shadow-333xl hover:opacity-80 mx-2.5
        active:shadow-222xl active:translate-y-px disabled:opacity-40" 
        value="Добавить" />
      </div>
    </form>
  );
}
