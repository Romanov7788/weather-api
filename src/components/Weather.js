import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city &&
                <div>
            <p>Город: {this.props.city}</p>
            <p>Температура, °C: {this.props.temp}</p>
            <p>Давление, мм: {this.props.pressure}</p>
            <p>Ветер: {this.props.speed}</p>
        </div>
    }
    </div>
        );
    }
}

export default Weather;