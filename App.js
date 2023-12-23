import React, { useState, useEffect } from "react";
import "./App.css";

const url = "https://fmd76m-8080.csb.app/data";

function App() {
  const [nme, setnm] = useState("");
  const [data, setdata] = useState([]);

  const hndlsbmt = (e) => {
    e.preventDefault();

    const post = {
      id: new Date().getTime().toString(),
      name: nme,
      age: Math.floor(Math.random() * (50 - 18 + 1) + 18),
    };

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something is wrong!");
        } else {
          console.log("Data is added");
          setnm(""); // Clear input field after submission
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, [url]);

  return (
    <>
      <div>
        <h1>Hello everyone</h1>
        <form onSubmit={hndlsbmt}>
          <input
            required
            onChange={(e) => setnm(e.target.value)}
            type="text"
            name="text"
            value={nme}
            id="text1"
          />
          <button type="submit">add</button>
        </form>
      </div>
    </>
  );
}

export default App;
    

