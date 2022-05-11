import React from "react";

import "./displayweather.css";


const Weather = ({ weather }) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const iconurl = `${API_URL}` + `${weather.weather[0].icon}` + ".png";

  const renderDataBloc = (title, date) => {
    return (
      <tr>
        <td>
          <h4>{title}</h4>
        </td>
        
        <td>
          <span>{date}</span>
        </td>
      </tr>
    );
  };

  return (
    <div className="displayweather">
      <div className="maincard">
        <span className="cardtitle">Город: {weather.name}</span>
        <span className="cardsubtitle">
          Обновленно: {new Date().toLocaleTimeString()}
        </span>
        <h1>{Math.floor(weather.main.temp)}°</h1>
        {/* <span classNAme="weather-main"> {weather.weather[0].main}</span> */}
        <img src={iconurl} className="weather-icon" alt="" />

        <div className="weatherdetails">
          <div className="section1">
            <table>
              {renderDataBloc(
                "Ощущаться как",
                Math.floor(weather.main.feels_like)
              )}
              {renderDataBloc("Влажность %", weather.main.humidity)}
              {renderDataBloc("Давление hPa", weather.main.pressure)}
              {renderDataBloc("Видимость Км", weather.visibility / 1000)}
            </table>
          </div>
          <div className="section2">
            <table>
              {renderDataBloc(
                "Скорость ветра Км/час",
                Math.floor((weather.wind.speed * 18) / 5)
              )}
              {renderDataBloc("Направление ветра", weather.wind.deg)}
              {renderDataBloc(
                "Восход солнца",
                new Date(weather.sys.sunrise * 1000).toLocaleTimeString()
              )}
              {renderDataBloc(
                "Заход солнца",
                new Date(weather.sys.sunset * 1000).toLocaleTimeString()
              )}
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Weather;
