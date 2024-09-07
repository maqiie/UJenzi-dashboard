

import React, { useEffect, useState } from "react";
import axios from "axios";
import StatisticsCards from "./StatisticsCards";
import LineChartComponent from "./LineChartComponent";  // Sales Analytics
import BarChartComponent from "./BarChartComponent";    // Monthly Orders
import PieChartComponent from "./PieChartComponent";    // User Distribution
import UpcomingTasks from "./UpcomingTasks";
import OngoingProjects from "./ OngoingProjects";
import SupervisorsPieChart from "./SupervisorsPieChart";
import TendersTable from "./TendersTable";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [lineData, setLineData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [stats, setStats] = useState({ users: 0, orders: 0, sales: 0 });

  useEffect(() => {
    axios
      .get("/api/dashboard") // Adjust the endpoint as necessary
      .then((response) => {
        setLineData(response.data.lineData || []);
        setBarData(response.data.barData || []);
        setPieData(response.data.pieData || []);
        setStats(response.data.stats || { users: 0, orders: 0, sales: 0 });
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handlePieChartClick = (data) => {
    // Implement the logic to fetch and show project managers or other details
    console.log("Pie chart clicked", data);
  };

  return (
    <div className="dashboard-container p-6 bg-gray-100">


      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Dashboard Overview
      </h2>

      <div className="statistics-container mb-6">
        <StatisticsCards stats={stats} />
      </div>

      <div className="charts-container p-8 bg-white rounded-xl shadow-xl mb-8">
        <div className="grouped-charts grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="chart-item p-6 bg-gray-100 rounded-lg shadow-md">
            <LineChartComponent data={lineData} title="Sales Analytics" />
          </div>
          <div className="chart-item p-6 bg-gray-100 rounded-lg shadow-md">
            <PieChartComponent data={pieData} onClick={handlePieChartClick} title="User Distribution" />
          </div>
        </div>

        <div className="chart-item p-6 bg-gray-100 rounded-lg shadow-md">
          <BarChartComponent data={barData} title="Monthly Orders" />
        </div>
      </div>

      <div className="charts-container p-8 bg-white rounded-xl shadow-xl mb-8">
        <SupervisorsPieChart />
      </div>

      <div className="tasks-projects-container grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <UpcomingTasks />
        <OngoingProjects />
      </div>

      <div className="tenders-table-container p-8 bg-white rounded-xl shadow-xl">
        <TendersTable />
      </div>
    </div>
  );
};

export default Dashboard;
