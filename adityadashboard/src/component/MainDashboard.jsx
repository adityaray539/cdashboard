import React from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

import LeftSideBar from "./leftsidebar";

const data = [
  { name: "Mon", Sales: 2400, Orders: 2200 },
  { name: "Tue", Sales: 3200, Orders: 3000 },
  { name: "Wed", Sales: 2800, Orders: 2500 },
  { name: "Thu", Sales: 4000, Orders: 3700 },
  { name: "Fri", Sales: 4500, Orders: 4200 },
];

const data1 = [
  { name: "Jan", satisfaction: 4000 },
  { name: "Feb", satisfaction: 3000 },
  { name: "Mar", satisfaction: 5000 },
  { name: "Apr", satisfaction: 4800 },
  { name: "May", satisfaction: 5200 },
  { name: "Jun", satisfaction: 6000 },
];

const data2 = [
  { name: "January", Target: 8000, Reality: 7200 },
  { name: "February", Target: 9000, Reality: 8700 },
  { name: "March", Target: 10000, Reality: 9300 },
  { name: "April", Target: 11000, Reality: 9800 },
  { name: "May", Target: 12000, Reality: 11900 },
];

const data3 = [
  { country: "USA", sales: 5000, value: 120 },
  { country: "India", sales: 7000, value: 200 },
  { country: "China", sales: 8500, value: 300 },
  { country: "Germany", sales: 4000, value: 150 },
  { country: "France", sales: 4500, value: 130 },
];

const data4 = [
  { name: "Jan", Volume: 4000, Service: 2400 },
  { name: "Feb", Volume: 3000, Service: 2210 },
  { name: "Mar", Volume: 2000, Service: 2290 },
  { name: "Apr", Volume: 2780, Service: 2000 },
  { name: "May", Volume: 1890, Service: 2181 },
  { name: "Jun", Volume: 2390, Service: 2500 },
];

const MainDashboard = () => {
  return (
    <div className="container-fluid d-flex">
      <LeftSideBar />
      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h3>Dashboard</h3>
        {/* Sales Summary Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card bg-danger text-white p-3 rounded-4 shadow">
              <h5>Total Sales</h5>
              <p>
                $1k <br /> <small>In the last 24 hours</small>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-warning text-white p-3 rounded-4 shadow">
              <h5>Total Orders</h5>
              <p>
                300 <br /> <small>+20% from yesterday</small>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-success text-white p-3 rounded-4 shadow">
              <h5>Product Sold</h5>
              <p>
                5 <br /> <small>+10% from yesterday</small>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-info text-white p-3 rounded-4 shadow">
              <h5>New Customers</h5>
              <p>
                10 <br /> <small>+15% from yesterday</small>
              </p>
            </div>
          </div>
        </div>
        {/* Charts Section */}
        <div className="row">
          <div className="col-md-6">
            <h5>Total Revenue</h5>
            <BarChart width={400} height={250} data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Sales" fill="#8884d8" />
              <Bar dataKey="Orders" fill="#82ca9d" />
            </BarChart>
          </div>

          <div className="col-md-6">
            <h5>Visitor Insights</h5>
            <LineChart width={400} height={250} data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="Orders" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-xl font-bold mb-4">Customer Satisfaction</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="satisfaction" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col-md-6">
            <h2 className="text-xl font-semibold mb-4">Target vs Reality</h2>
            <BarChart
              width={500}
              height={300}
              data={data2}
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Target" fill="#FFD700" barSize={30} />
              <Bar dataKey="Reality" fill="#32CD32" barSize={30} />
            </BarChart>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-xl mb-4">Sales Mapping by Country</h2>
            <ResponsiveContainer width="100%" height={200}>
              <ScatterChart>
                <XAxis dataKey="country" type="category" name="Country" />
                <YAxis dataKey="sales" type="number" name="Sales" />
                <ZAxis dataKey="value" range={[60, 400]} name="Value" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="Sales Data" data={data3} fill="#82ca9d" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="col-md-6">
            <h2 className="text-xl font-semibold mb-4">
              Volume vs Service Level
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data4} barCategoryGap={20}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Volume" stackId="a" fill="#4A90E2" />
                <Bar dataKey="Service" stackId="a" fill="#50E3C2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
    </div>
  );
};

export default MainDashboard;
