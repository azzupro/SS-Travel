import React, { useState } from "react";

import "../Styles/Recommendation.css";

import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      duration: "Approx 1 person trip",
      cost: "8,559/-"
    },
    {
      image: Destination2,
      title: "Saudi Arabia",
      subTitle: "Saudi Arabia is a Muslim country. It's known for ibaadat ",
      duration: "Approx 1 person trip",
      cost: "37,401/-"
    },
    {
      image: Destination3,
      title: "Dubai",
      subTitle: "Dubai, AI country, is a major European explore country and a",
      duration: "Approx 1 person trip",
      cost: "17,247/-"
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      duration: "Approx 1 person trip",
      cost: "60,447/-"
    },
    {
      image: Destination5,
      title: "Kashmir",
      subTitle: "kashmir is a major Indian explore citry and a",
      duration: "Approx 1 person trip in AC (1A)",
      cost: "3,395/-"
    },
    {
      image: Destination6,
      title: "Bangkok",
      subTitle: "Bangkok,  is a major European & Indian explore country and a",
       duration: "Approx 1 person trip",
      cost: "8,559/-"
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>₹{item.cost}</p>
              </div>

              <div className="details">
                <p>...kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
