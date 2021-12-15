import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import MaterialTable from "material-table";

const FilterGrid = (props) => {
  const { data, columns } = props;
  const [filterValue, setFilterValue] = useState("");

  const handleChange = (value) => {
    setFilterValue(value);
    console.log("Value changed...");
  };

  const applyFilter = (records) =>
    records.filter((record) =>
      Object.values(record).some((value) => `${value}`.includes(filterValue))
    );

  const toolbar = () => (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
      }}
    >
      <SearchFilter
        listeners={{
          onChange: handleChange
        }}
      />
    </div>
  );

  console.log("Changed filter:", filterValue);

  return (
    <div>
      <MaterialTable
        data={applyFilter(data)}
        columns={columns}
        components={{
          Toolbar: toolbar
        }}
        options={{
          search: false
        }}
      />
    </div>
  );
};

export default FilterGrid;
