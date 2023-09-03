import React, { useState } from "react";
import styles from "../css/homefeatures.module.css";
import BellIcon from "../icons/iconBell.js";
import RevenueIcon from "../icons/iconRevenue.js";
import TotalTransactionsIcon from "../icons/iconTransactions.js";
import LikesIcon from "../icons/iconLikes.js";
import User2Icon from "../icons/iconPerson2.js";
import loginPic from "../icons/iconPerson.jpg";
import IconInsta from "../icons/IconInsta";
import IconWhatsapp from "../icons/IconWhatsapp";
import Iconemail from "../icons/Iconemail";
import Iconyoutube from "../icons/Iconyoutube";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
} from "recharts";


const HomeFeatures = () => {
  var data = [
    { title: "Total Revenues", value: "$2,129,430", css: [styles.revenue] },
    { title: "Total Transactions", value: "1,520", css: [styles.transactions] },
    { title: "Total Likes", value: "9,721", css: [styles.likes] },
    { title: "Total Users", value: "9,721", css: [styles.users] },
  ];

  const Icon = (value) => {
    if (value === "Total Revenues") return <RevenueIcon />;
    else if (value === "Total Transactions") return <TotalTransactionsIcon />;
    else if (value === "Total Likes") return <LikesIcon />;
    else if (value === "Total Users") return <User2Icon />;
  };

  const Dashboard = () => {
    return (
      <>
        <div className={`d-flex flex-column ${styles.w100}`}>
          <div className={`d-flex flex-row ${styles.w100}`}>
            <div className={`d-flex ${styles.w50} justify-content-start`}>
              <span style={{ display: "flex" }} className={styles.dashboard}>
                Dashboard
              </span>
            </div>
            <div className={`d-flex ${styles.w50} justify-content-end`}>
              <input
                type="search"
                id="form1"
                class={`form-control ${styles.search}`}
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
            <BellIcon />
            <img
              src={loginPic}
              height={30}
              width={30}
              className={styles.loggedInImg}
              alt="Person"
            />
          </div>
          <div className={`d-flex ${styles.tilesStyle}`}>
            {data.map((each) => (
              <div className={styles.tiles}>
                <div className={styles.iconspan}>
                  <span className={`${styles.w100} ${each.css}`}>
                    {Icon(each.title)}
                  </span>
                  <span
                    className={`${styles.w100} justify-content-left ${styles.span1}`}
                  >
                    {each.title}
                  </span>
                  <span
                    className={`${styles.w100} justify-content-left ${styles.span2}`}
                  >
                    {each.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const Chart = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const data = [
      [
        { name: "Week1", uv: 500, pv: 400 },
        {
          name: "Week2",
          uv: 370,
          pv: 430,
        },
        {
          name: "Week3",
          uv: 200,
          pv: 300,
        },
        {
          name: "Week4",
          uv: 400,
          pv: 350,
        },
      ],
      [
        {
          name: "Week1",
          uv: 300,
          pv: 100,
        },
        {
          name: "Week2",
          uv: 320,
          pv: 130,
        },
        {
          name: "Week3",
          uv: 70,
          pv: 30,
        },
        {
          name: "Week4",
          uv: 120,
          pv: 350,
        },
      ],
      [
        {
          name: "Week1",
          uv: 100,
          pv: 200,
        },
        {
          name: "Week2",
          uv: 270,
          pv: 130,
        },
        {
          name: "Week3",
          uv: 100,
          pv: 400,
        },
        {
          name: "Week4",
          uv: 400,
          pv: 350,
        },
      ],
    ];
    const renderLineChart = (
      <ResponsiveContainer
        width="100%"
        height={319}
        className={styles.chartbox}
      >
        <BarChart
          data={data[value]}
          margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
          barGap={20}
          barCategoryGap={40}
        >
          <CartesianGrid vertical={false} stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 100, 200, 300, 400, 500]} domain={[0, 500]} />
          <Tooltip />
          <Legend align="right" verticalAlign="top" iconType="circle" />
          <Bar
            dataKey="pv"
            fill="#98D89E"
            name="Guest"
            radius={10}
            type="monotone"
            strokeWidth={3}
          />
          <Bar
            dataKey="uv"
            fill="#EE8484"
            name="User"
            radius={10}
            strokeWidth={3}
          />
        </BarChart>
      </ResponsiveContainer>
    );

    return (
      <div className={styles.barcontainer}>
        <div className={`d-flex flex-column ${styles.abovechart}`}>
          <span className={styles.chartTitle}>Activities</span>
          <select
            value={value}
            onChange={handleChange}
            className={styles.options}
          >
            <option value={0}>Apr-May 2021</option>

            <option value={1}>May-Jun 2021</option>

            <option value={2}>Jun-Jul 2021</option>
          </select>
        </div>
        {renderLineChart}
      </div>
    );
  };

  const Schedule = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const data01 = [
      [
        { name: "Basic Tees", value: 580, fill: "#98D89E" },
        { name: "Custom Short Pants", value: 380, fill: "#F6DC7D" },
        { name: "Super Hoodies", value: 250, fill: "#EE8484" },
      ],
      [
        { name: "Basic Tees", value: 440, fill: "#98D89E" },
        { name: "Custom Short Pants", value: 260, fill: "#F6DC7D" },
        { name: "Super Hoodies", value: 360, fill: "#EE8484" },
      ],
      [
        { name: "Basic Tees", value: 220, fill: "#98D89E" },
        { name: "Custom Short Pants", value: 410, fill: "#F6DC7D" },
        { name: "Super Hoodies", value: 350, fill: "#EE8484" },
      ],
    ];

    const totalValue = data01[value].reduce(
      (total, entry) => total + entry.value,
      0
    );

    const legendDataWithPercentage = data01[value].map((entry) => ({
      ...entry,
      percentage: ((entry.value / totalValue) * 100).toFixed(2),
    }));

    return (
      <>
        <div className={`d-flex ${styles.scheduleflex} ${styles.w100}`}>
          <div
            className={`d-flex flex-column ${styles.w50} ${styles.schedule} ${styles.padding30}`}
          >
            <div className={`d-flex flex-row ${styles.abovepie}`}>
              <span className={`${styles.w50} ${styles.piechartTitle}`}>
                Top Products
              </span>
              <select
                value={value}
                onChange={handleChange}
                className={`${styles.w50} ${styles.optionsPie}`}
              >
                <option value={0}>Apr-May 2021</option>

                <option value={1}>May-Jun 2021</option>

                <option value={2}>Jun-Jul 2021</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={data01[value]}
                  dataKey="value"
                  nameKey="name"
                  cx="45%"
                  cy="50%"
                  outerRadius={60}
                  innerRadius={50}
                  labelLine={false}
                  fill="#fff"
                ></Pie>

                <Legend
                  layout="vertical"
                  labelLine={false}
                  align="right"
                  verticalAlign="middle"
                  iconType="circle"
                  iconSize={10}
                  content={() => (
                    <ul>
                      {legendDataWithPercentage.map((entry, index) => (
                        <li
                          key={`legend-${index}`}
                          style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            listStyle: "none",
                          }}
                        >
                          <p style={{ margin: "0px", textAlign: "left" }}>
                            {" "}
                            <span
                              style={{
                                fontSize: "1.5em",
                                margin: "0px 0px",
                                color: entry.fill,
                                alignItems: "left",
                                textAlign: "left",
                              }}
                            >
                              •{" "}
                            </span>
                            {entry.name}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              margin: "0px 15px",
                              color: "#858585",
                              textAlign: "left",
                            }}
                          >
                            {entry.percentage}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div
            className={`d-flex flex-column ${styles.w50} ${styles.schedule} ${styles.padding30}`}
          >
            <span className={`${styles.w100} ${styles.scheduletext}`}>
              John Doe
            </span>
                <p className={styles.details}> 
                  <span style={{marginRight:"65px"}}><IconWhatsapp/>+91 29938 81234</span>
                  <span><IconInsta/>john_official</span>
                </p>
                <p className={styles.details}> 
                  <span style={{marginRight:"75px"}}><Iconemail/>john@xyz.com</span>
                  <span ><Iconyoutube/>john_official</span>
                </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.homefeat}`}
      >
        <Dashboard />
        <Chart />
        <Schedule />
      </div>
    </>
  );
};

export default HomeFeatures;
