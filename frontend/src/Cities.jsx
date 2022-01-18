import React from "react";
import { useState, useEffect } from "react";
export default function Cities() {
  const [city, setcity] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((res) => setcity([...res]));
  }, []);
  return (
    <div>
      {city.map((elem, index) => {
        return <div key={index}>{elem.name}</div>;
      })}
    </div>
  );
}
