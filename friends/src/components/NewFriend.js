import React, { useState } from "react";
import { connect } from "react-redux";
import { newFriend } from "../actions";

const NewFriend = props => {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const inputValues = (e) => {
    e.preventDefault();
    props.newFriend(friend);
    setFriend({
      name: "",
      age: "",
      email: "",
    })
  }

  return (
    <form onSubmit={inputValues}>
      <input
        type="text"
        name="name"
        id="fname"
        onChange={handleChange}
        value={friend.name}
        placeholder="Friend Name"
      />

      <input
        type="number"
        name="age"
        id="fage"
        onChange={handleChange}
        value={friend.age}
        placeholder="Friend Age"
      />

      <input
      type="email"
      name="email"
      id="femail"
      onChange={handleChange}
      value={friend.email}
      placeholder="Email"
      />
      <button onClick={inputValues}>Add Friend</button>
    </form>
  );
};

export default connect(null, {newFriend})(NewFriend)
