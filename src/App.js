import React, { useState, useEffect } from "react";
import "./App.css";
import RandomUser from "./component/RandomUser";
import axios from "axios";

function App() {
  const [randomUser, setRandomUser] = useState({ results: [] });

  const storeToLocal = (fullName, email) => {
    localStorage.setItem("Name", fullName);
    localStorage.setItem("Email", email);
  };
  const fetchRandomUser = async () => {
    const response = await axios("https://randomuser.me/api");
    setRandomUser(response.data);
    let fullName =
      randomUser.results[0].name.first + " " + randomUser.results[0].name.last;
    let email = randomUser.results[0].email;
    storeToLocal(fullName, email);
  };
  useEffect(() => {
    const fetchRandomUser = async () => {
      const response = await axios("https://randomuser.me/api");
      //console.log(response);
      setRandomUser(response.data);
      //console.log(randomUser);
    };
    fetchRandomUser();
  }, []);

  const showData = () => {
    fetchRandomUser();
  };
  return (
    <div>
      {randomUser.results.length > 0 && (
        <RandomUser userData={randomUser.results} fetchAPI={showData} />
      )}
    </div>
  );
}

export default App;
