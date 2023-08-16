import {Button} from './Button';
import {useState} from 'react';

export const FormSplitBill = ({friend, onSplitBill}) => {

  const [bill, setBill] = useState('');
  const [paidByTheUser, setPaidByTheUser] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const paidByFriend = bill ? bill - paidByTheUser : '';

  function handleUserPayment(e) {
    setPaidByTheUser(e.target.value > bill ? paidByTheUser : e.target.value);
  }


  function handleSplitBillSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByTheUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByTheUser);


  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBillSubmit}>
      <h2>SPLIT A BILL WITH {friend.name}</h2>
      <label>💵 Bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(+e.target.value)}/>

      <label>🧑 Your expense</label>
      <input type="text" value={paidByTheUser} onChange={handleUserPayment}/>

      <label>🧑‍🦱 {friend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend}/>

      <label>Who is paying the entire bill?</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

