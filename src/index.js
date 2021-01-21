import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} />
      <h2>Name: {name}</h2>
      <h3>Jop: {job}</h3>
      {children}
    </article>
  );
};

const PeopleList = () => {
  return (
    <section className="person-list">
      <Person img="5" name="bank" job="software engineering">
        <p>skill</p>
      </Person>
      <Person img="62" name="oat" job="software engineering">
        <p>skill</p>
      </Person>
      <Person img="1" name="au" job="software engineering">
        <p>skill</p>
      </Person>
      <Person img="5" name="bank" job="software engineering">
        <p>skill</p>
      </Person>
      <Person img="62" name="oat" job="software engineering">
        <p>skill</p>
      </Person>
      <Person img="1" name="au" job="software engineering">
        <p>skill</p>
      </Person>
    </section>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <PeopleList />
  </React.StrictMode>,
  document.getElementById("root")
);
