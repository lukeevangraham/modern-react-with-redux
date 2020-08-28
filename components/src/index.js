import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Donald had a great speech!" img={faker.image.avatar()} />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" commentText="Pizza has always been great!"  img={faker.image.avatar()}/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" commentText="But what about labradors?" img={faker.image.avatar()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
