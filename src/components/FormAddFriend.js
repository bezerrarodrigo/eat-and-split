import {Button} from "./Button";

export const FormAddFriend = () => {


  return (

    <div>
      <form className='form-add-friend'>
        <label>🧑Friend name</label>
        <input type="text"/>
        <label>📷Avatar URL</label>
        <input type="text"/>
        <Button>Add</Button>
      </form>
    </div>


  );
};

