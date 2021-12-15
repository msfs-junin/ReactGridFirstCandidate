import React, { useEffect, useState } from "react";
import FilterGrid from "./components/FilterGrid";
import jsonData from "./data/data.json";

const fetchData = () => Promise.resolve(jsonData);

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((json) => setData(json));
  }, []);

  const columns = [
    { key: "nameField", field: "name", title: "Name" },
    { key: "ageField", field: "age", title: "Age" },
    { key: "algoField", field: "algo", title: "No se, algo" }
  ];

  return <FilterGrid data={data} columns={columns} />;
};

export default App;
