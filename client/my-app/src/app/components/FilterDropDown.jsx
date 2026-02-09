import React from "react";
import styles from "./css/filterdropdown.module.css";

const FilterDropdown = ({ value, setValue, options }) => {
  return (
    <select
      className={styles.dropdown}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="">All</option>
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
