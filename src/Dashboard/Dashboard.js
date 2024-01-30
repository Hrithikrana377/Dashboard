import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../enum";
import { StatusCode } from "../StatusCode";
import { getRecordsOnParameter } from "../store/sales";
import "./Dashboard.css";
import TopCard from "../Top-Card/Top-Card";
import DropDown from "../DropeDown/Dropdown";
import Spinner from "../Spinner/spinner";
import DatePicker from "../DatePicker/DatePicker";
import { getStates } from "../store/states";
import { getsalesByCity } from "../store/salesByCity";
import Chart from "../Chart/Chart";
import { getsalesByProduct } from "../store/salesByProduct";
import Table from "../Table/table";
import { getsalesBySubCategory } from "../store/salesBySubCategory";
import DonutChart from "../Chart/DonutChart";
import { getsalesByCategory } from "../store/salesByCategory";
import { getsalesBySegment } from "../store/salesBySegment";

const Dashboard = () => {
  const { data: stateNames, status } = useSelector((state) => state.state);
  const { data: salesByCity } = useSelector((state) => state.salesByCity);
  const { data: salesData } = useSelector((state) => state.sale);
  const { data: salesByProduct } = useSelector((state) => state.salesByProduct);
  const { data: salesBySubCategory } = useSelector(
    (state) => state.salesBySubCategory
  );
  const { data: salesByCategory } = useSelector(
    (state) => state.salesByCategory
  );
  const { data: salesBySegment } = useSelector((state) => state.salesBySegment);
  const [startDate, setStartDate] = useState("2010-01-01");
  const [endDate, setEndDate] = useState("2024-01-01");
  const dispatch = useDispatch();
  const [dropdownValue, setDropdownValue] = useState();

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleDropdownChange = (selectedValue) => {
    setDropdownValue(selectedValue);
  };

  useEffect(() => {
    dispatch(getStates());
  }, []);

  useEffect(() => {
    if (startDate && endDate && dropdownValue && stateNames) {
      const request = {
        startingDate: startDate,
        endDate: endDate,
        state: dropdownValue,
      };
      dispatch(getRecordsOnParameter(request));
      dispatch(getsalesByCity(request));
      dispatch(getsalesByProduct(request));
      dispatch(getsalesBySubCategory(request));
      dispatch(getsalesByCategory(request));
      dispatch(getsalesBySegment(request));
    }
  }, [startDate, endDate, dropdownValue]);

  if (status === StatusCode.LOADING) return <Spinner />;

  if (status === StatusCode.ERROR)
    return <Alert variant="danger">Somthing went wrong!!!!!!</Alert>;

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">Sales Overview</div>
          <div className="spacer"></div>
          <div className="filter">
            <span className="filter-title">Select a State</span>
            <DropDown
              onDropdownChange={handleDropdownChange}
              states={stateNames}
            />
          </div>
          <DatePicker
            onDateChange={handleStartDateChange}
            dateValue={startDate}
            title={"Select From Date"}
          />
          <DatePicker
            onDateChange={handleEndDateChange}
            dateValue={endDate}
            title={"Select To Date"}
          />
        </div>
        <div className="summary">
          <TopCard
            title={"Total Sales"}
            value={"$" + salesData.totalSales}
            image={Icon.Rupee}
          />
          <TopCard
            title={"Quantity"}
            value={salesData.quantitySold}
            image={Icon.Quantity}
          />
          <TopCard
            title={"Discount"}
            value={salesData.discount + " %"}
            image={Icon.Discount}
          />
          <TopCard
            title={"Profit"}
            value={"$" + salesData.profit}
            image={Icon.Profit}
          />
        </div>
        <div className="charts">
          <div className="chart-row">
            <div className="chart">
              <Chart chartData={salesByCity} type="bar" name="Sales By City" />
            </div>
            <div className="chart">
              <Table
                tableData={salesByProduct}
                title="Sales By Product"
                desc="Product Name"
              />
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="chart-row">
            <div className="chart">
              <DonutChart chartData={salesByCategory} />
            </div>
            <div className="chart">
              <Table
                tableData={salesBySubCategory}
                title="Sales By Sub Category"
                desc="Sub Category"
              />
            </div>
            <div className="chart">
              <DonutChart chartData={salesByCategory} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
