import {FriendsList} from './components/FriendsList';
import {FormAddFriend} from './components/FormAddFriend';
import {FormSplitBill} from './components/FormSplitBill';
import {useState} from 'react';
import {Button} from './components/Button';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {

  //states
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  //functions
  function handleShowFriendForm() {
    setShowAddFriend(prevState => !prevState);
  }

  function handleAddNewFriend(friend) {
    setFriends(prevState => [...prevState, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend(currentFriend => currentFriend?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleBillSplit(value) {
    setFriends(prevState => prevState.map(friend => {
      return friend.id === selectedFriend.id ? {
        ...friend,
        balance: friend.balance + value
      } : friend;
    }));
    setSelectedFriend(null);
  }


  return (
    <div className="app">
      <div className="sidebar">

        <FriendsList friends={friends} onSelectFriend={handleSelectedFriend}
                     selectedFriend={selectedFriend}/>


        {showAddFriend &&
          <FormAddFriend onAddFriend={handleAddNewFriend}/>}
        <Button
          onClick={handleShowFriendForm}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill key={selectedFriend.id} friend={selectedFriend} onSplitBill={handleBillSplit}/>}

    </div>
  );
}
