import {Button} from './Button';
import {useState} from 'react';


export const FormAddFriend = ({onAddFriend}) => {

  const [friendName, setFriendName] = useState('');
  const [urlAvatar, setUrlAvatar] = useState('https://i.pravatar.cc/48');

  function handleAddFriendSubmit(e) {
    e.preventDefault();

    if (!friendName || !urlAvatar) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name: friendName,
      image: urlAvatar,
      balance: 0
    };
    onAddFriend(newFriend);
    setFriendName('');
    setUrlAvatar('https://i.pravatar.cc/48');


  }

  return (

    <div>
      <form className="form-add-friend" onSubmit={handleAddFriendSubmit}>
        <label>🧑Friend name</label>
        <input type="text" value={friendName} onChange={(e) => setFriendName(e.target.value)}/>
        <label>📷Avatar URL</label>
        <input type="text" value={urlAvatar} onChange={(e) => setUrlAvatar(e.target.value)}/>
        <Button>Add</Button>
      </form>
    </div>


  );
};

