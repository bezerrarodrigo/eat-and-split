import {Friend} from './Friend';

export const FriendsList = ({friends, onSelectFriend, selectedFriend}) => {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend key={friend.id}
                       friend={friend}
                       onSelectFriend={onSelectFriend}
                       selectedFriend={selectedFriend}
        />;
      })}
    </ul>
  );
};
