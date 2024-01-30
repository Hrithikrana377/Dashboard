import { useEffect } from "react";

const DropDown = ({ onDropdownChange, states }) => {
  useEffect(() => {
    if (states) {
      onDropdownChange(states[0]);
    }
  }, [states]);
  return (
    <>
      <select
        className="filter-input"
        onChange={(e) => onDropdownChange(e.target.value)}
      >
        {(states || []).map((x) => (
          <option value={x}>{x}</option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
