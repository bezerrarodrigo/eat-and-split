import {Friend} from "./Friend";

export const FriendsList = ({friends}) => {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend key={friend.id} friend={friend}/>;
      })}
    </ul>
  );
};
