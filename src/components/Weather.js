import React from "react";

import "./displayweather.css";


const Weather = ({ weather }) => {
  const API_URL_ICON = process.env.REACT_APP_API_URL_ICON;

  const iconurl = `${API_URL_ICON}` + `${weather.weather[0].icon}` + ".png";

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
    <div className="displayWeather">
      <div className="mainCard">
        <span className="cardTitle">Город: {weather.name}</span>
        <span className="cardSubtitle">
          Обновленно: {new Date().toLocaleTimeString()}
        </span>
        <h1>{Math.floor(weather.main.temp)}°</h1>
        <img src={iconurl} className="weather-icon" alt="" />

        <div className="weatherDetails">
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
