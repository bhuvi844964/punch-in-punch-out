import React, { useState, useEffect } from "react";



function DataAdd() {
  const [data, setData] = useState({ name: "", age: 0 });

  function handleSubmit(event) {
    event.preventDefault();

    const newData = {
      name: event.target.name.value,
      age: Number(event.target.age.value),
    };
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="number" name="age" />
        <button type="submit">Add</button>
      </form>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataAdd;
