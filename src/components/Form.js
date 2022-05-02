import React from "react";

class Form extends React.Component {
    render() {
        return (
          <form onSubmit={this.props.weatherMethod}>
              <h4>Введите название города</h4>
              <input type="text" name="city" placeholder="Например Харьков"/>
              <button>Поиск</button>
          </form>
        );
    }
}

export default Form;