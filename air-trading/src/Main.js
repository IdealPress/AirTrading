import React, { Component } from 'react';

class Main extends Component {

  constructor(props) {
    super();
    this.state = {
      location : '',
      parameter : '',
      value : '',
      unit : '',
      time : 0
    }
  };

  componentWillMount() {
    // let url = "https://api.openaq.org/v1/latest/?location=Southwark%20A2%20Old%20Kent%20Road&parameter=pm10";
    // fetch(url)
    // .then(results => {
    //   return results.json();
    // }).then(data => {
    //   this.setState({
    //     location : data.results[0].location,
    //     parameter : data.results[0].measurements[0].parameter,
    //     value : data.results[0].measurements[0].value,
    //     unit : data.results[0].measurements[0].unit
    //   })
    // });

    let url2 = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=IG9ZIS7Y1ZLDNVYG";
    fetch(url2)
    .then(results => {
      return results.json();
    }).then(data => {
      // console.log(data);
      this.setState({
        location : data["Realtime Currency Exchange Rate"]["6. Last Refreshed"]
      })
    });
  };



  componentDidMount() {
    this.interval = setInterval(() => {
      let url2 = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=IG9ZIS7Y1ZLDNVYG";
      fetch(url2)
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        this.setState({
          location : data["Realtime Currency Exchange Rate"]["6. Last Refreshed"],
          time: this.state.time + 1
        })
      });
    }, 400000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state.location);
    console.log(this.state.time);
    return (
      <div className="Main">
      </div>
    );
  }
}

export default Main;
