import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./Header.css";
import Dashboard from "../Dashboard/Dashboard.jsx";

const Header = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?contentType=csv&unitGroup=us&aggregateHours=24&location=${search}&units=metric&shortColumnNames=false`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'ca3f15d0f7msh3911e7b026560c0p17340bjsnc39e6c503f09',
                    'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const csvText = await response.text();
                const parsedData = Papa.parse(csvText, { header: true });
                const data = parsedData.data[0];
                if (!data || !data.Temperature) {
                    throw new Error("Invalid weather data");
                }
                setData(data);
const tempF = parseFloat(data.Temperature);
const tempC = ((tempF - 32) * 5) / 9;
setCity(tempC.toFixed(1)); // Set with 1 decimal place

                // setCity(data.Temperature); // set just the Temperature value
                // console.log(data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchWeather();
    }, [search]);

    return (
        <>
        
            <section className="header-section">
                <div>
                    <ion-icon name="location-outline"></ion-icon>
                    <span>
                        <p>{search}</p>
                        </span>
                </div>
                <div>
                    <ion-icon name="search-outline"></ion-icon>
                    <input
                        type="search"
                        placeholder="Search here"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>
                <div>
                <p><strong>Date:</strong> {data && data["Date time"] ? new Date(data["Date time"]).toLocaleDateString() : "N/A"}</p>                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-icon name="notifications-outline"></ion-icon>
                </div>
            </section>
            <Dashboard city={city} search={search} data={data}/>
        </>
    );
};

export default Header;
