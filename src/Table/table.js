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
    }, 0);
    return () => clearTimeout(delay);
  }, [tableData]);
  return (
    <>
      <h3>{title}</h3>
      <div className="rana-header">
        <div className="description-label">{desc}</div>
        <div className="value-label">Sales in $</div>
      </div>
      {(Data || []).map((x) => (
        <div className="rana-row">
          <div className="description">{x.label}</div>
          <div className="value">{x.value}</div>
        </div>
      ))}
    </>
  );
};

export default Table;
