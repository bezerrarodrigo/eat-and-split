import {Button} from "./Button";

export const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
      <h2>SPLIT A BILL WITH X</h2>
      <label>💵 Bill value</label>
      <input type="text"/>
      <label>🧑 Your expense</label>
      <input type="text"/>
      <label>🧑‍🦱 x's expense</label>
      <input type="text" disabled/>
      <label>Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

