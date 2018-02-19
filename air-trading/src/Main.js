import React, { Component } from 'react';

class Main extends Component {

  constructor(props) {
    super();
    this.state = {
      location : '',
      parameter : '',
      value : '',
      unit : ''
    }
  };

  componentWillMount() {
    let url = "https://api.openaq.org/v1/latest/?location=Southwark%20A2%20Old%20Kent%20Road&parameter=pm10";
    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        location : data.results[0].location,
        parameter : data.results[0].measurements[0].parameter,
        value : data.results[0].measurements[0].value,
        unit : data.results[0].measurements[0].unit
      })
    });
  };


  componentDidMount() {
    this.interval = setInterval(() => {
      let url = "https://api.openaq.org/v1/latest/?location=Southwark%20A2%20Old%20Kent%20Road&parameter=pm10";
      fetch(url)
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          value : data.results[0].measurements[0].value,
        })
      });
    }, 60000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state.value)
    return (
      <div className="Main">
      </div>
    );
  }
}

export default Main;
