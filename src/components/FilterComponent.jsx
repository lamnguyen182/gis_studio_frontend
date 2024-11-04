// src/components/FilterComponent.js
import React, { useState } from "react";

const FilterComponent = ({ onFilter }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên..."
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default FilterComponent;
