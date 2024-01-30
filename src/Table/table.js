import { useEffect, useState } from "react";

const Table = ({ tableData, title, desc }) => {
  const [Data, setTableData] = useState([]);

  useEffect(() => {
    console.log("tableData : ", tableData);
    const delay = setTimeout(() => {
      console.log("tableData2 : ", tableData);
      if (tableData.length > 5) {
        setTableData([...tableData.slice(0, 6)]);
      } else {
        setTableData(tableData);
      }
    }, 1000);
    return () => clearTimeout(delay);
  }, [tableData]);
  return (
    <>
      <h3 style={{ marginTop: "0px" }}>{title}</h3>
      <div class="rana-header">
        <div class="description-label">{desc}</div>
        <div class="value-label">Sales in $</div>
      </div>
      {(Data || []).map((x) => (
        <div class="rana-row">
          <div class="description">{x.label}</div>
          <div class="value">{x.value}</div>
        </div>
      ))}
    </>
  );
};

export default Table;
