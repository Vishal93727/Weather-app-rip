import React from "react";
import "./Dashboard.css";
// import sunCloudy from "../../assets/sun-cloudy.png";
// import Rain from "../../assets/rain.png";
// import PartlySunny from "../../assets/partly-sunny.png";
// import SunWindy from "../../assets/sun-windy.png";
// import Compass from "../../assets/compass.png";
// import Drops from "../../assets/drops.png";
// import Ultraviolet from "../../assets/ultraviolet.png";

const Dashboard = (props) => {
  return (
    <section className="dashboard-section">
      <div className="home">
        <div className="feed-1">
          <div className="feeds">
            {/* <img src={sunCloudy} alt="" /> */}
            <div>
              <div>
                <span>{props.search}</span>
                <span>Partly Cloud</span>
              </div>
              <div>
                <span>
                <p>{props.city ? `${props.city}°C` : ""}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="feed">
            <div>
              <div>
                {/* <img src={PartlySunny} alt="" /> */}
                <span>
                <p> {props.data && props.data["Maximum Temperature"] ? `${props.data["Maximum Temperature"]}°F` : "N/A"}</p>
                </span>
              </div>
              <div>
                <span>Maximum </span>
                <span>Temperature</span>
              </div>
            </div>
            <div>
              <div>
                {/* <img src={SunWindy} alt="" /> */}
                <span>
                <p> {props.data && props.data["Minimum Temperature"] ? `${props.data["Minimum Temperature"]}°F` : "N/A"}</p>

                </span>
              </div>
              <div>
                <span>Minimum</span>
                <span>Temperature</span>
              </div>
            </div>
          </div>
        </div>
        <div className="highlights">
          <h2>Today's Highlights</h2>
          <div className="all-highlights">
            <div>
              <div>
                {/* <img src={Compass} alt="" /> */}
                <div>
                  <span>Condition</span>
                  <span>:</span>
                </div>
              </div>
              <div>
                <span>
                <p> {props.data && props.data.Conditions || "N/A"}</p>
                </span>
              </div>
            </div>
            <div>
              <div>
                {/* <img src={sunCloudy} alt="" /> */}
                <div>
                  <span>Cloud Cover:</span>
                  <span>Heave</span>
                </div>
              </div>
              <div>
                <span>
                <p> {props.data && props.data["Cloud Cover"] ? `${props.data["Cloud Cover"]}%` : "N/A"}</p>
                </span>
              </div>
            </div>
            <div>
              <div>
                {/* <img src={Rain} alt="" /> */}
                <div>
                  <span>Precipitation</span>
                  <span>Chance:</span>
                </div>
              </div>
              <div>
                <span>
                <p> {props.data && props.data["Chance Precipitation (%)"] ? `${props.data["Chance Precipitation (%)"]}%` : "N/A"}</p>
                </span>
              </div>
            </div>
            <div>
              <div>
                {/* <img src={Drops} alt="" /> */}
                <div>
                  <span>Humidity:
</span>
                  <span>Heavy</span>
                </div>
              </div>
              <div>
                <span>
                <p> {props.data ? `${props.data["Relative Humidity"]}%` : "Loading..."}</p>

                </span>
              </div>
            </div>
            <div>
              <div>
                {/* <img src={Ultraviolet} alt="" /> */}
                <div>
                  <span>Pressure</span>
                  <span>:</span>

                </div>
              </div>
              <div>
                <span>
                <p> {props.data && props.data["Sea Level Pressure"] ? `${props.data["Sea Level Pressure"]} hPa` : "N/A"}</p>
                </span>
              </div>
            </div>
            <div>
              <div>
                {/* <img src={PartlySunny} alt="" /> */}
                <div>
                  <span>Wind Speed</span>
                  <span>:</span>

                </div>
              </div>
              <div>
                <span>
                <p> {props.data && props.data["Wind Speed"] ? `${props.data["Wind Speed"]} km/h` : "N/A"}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cities">
        <h2>Other Cities</h2>
        <div className="all-cities">
          <div>
            <div>
              {/* <img src={sunCloudy} alt="" /> */}
              <div>
                <span>Manchester</span>
                <span>Cloudy. High: 11° Low: 18°</span>
              </div>
            </div>
            <div>
              <span>
                7 <sup>o</sup>
              </span>
            </div>
          </div>
          <div>
            <div>
              {/* <img src={Rain} alt="" /> */}
              <div>
                <span>Edinburgh</span>
                <span>Rain. High: 8° Low: 12°</span>
              </div>
            </div>
            <div>
              <span>
                19 <sup>o</sup>
              </span>
            </div>
          </div>
          <div>
            <div>
              {/* <img src={Rain} alt="" /> */}
              <div>
                <span>Bristol</span>
                <span>Snow. High: 2° Low: 8°</span>
              </div>
            </div>
            <div>
              <span>
                22 <sup>o</sup>
              </span>
            </div>
          </div>
          <div>
            <div>
              {/* <img src={sunCloudy} alt="" /> */}
              <div>
                <span>York</span>
                <span>Cloudy. High: 10° Low: 18°</span>
              </div>
            </div>
            <div>
              <span>
                20 <sup>o</sup>
              </span>
            </div>
          </div>
          <button>
            <span>See More</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;