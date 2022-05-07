import React from "react";
import "./displayweather.css";

function Weather(props) {
    const {data} = props;
    console.log(data);

    const iconurl = "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png"
    return <div className="displayweather">
            <div className="maincard">
                <span className="cardtitle">
                    Город: {data.name} 
                </span>
                <span className="cardsubtitle">
              Обновленно: {new Date().toLocaleTimeString()}
            </span>
                    <h1>
                        {Math.floor(data.main.temp)}°
                    </h1>
                    {/* <span classNAme="weather-main"> {data.weather[0].main}</span> */}
                    <img src={iconurl} className="weather-icon" alt=""/>
    
     <div className="weatherdetails">
            <div className="section1">
              <table>
              <tr>
                  <td>
                    <h4>Ощущаться как</h4>
                  </td>
                  <td>
                    <span>{Math.floor(data.main.feels_like)}°</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Влажность</h4>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Давление</h4>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Видимость</h4>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Скорость</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Направление ветра</h4>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Восход солнца</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Заход солнца</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          </div>
          <br /><br />
          </div>

}

export default Weather;