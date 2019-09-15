import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    }

    const updateClock = () => {
      this.setState({
        time: new Date().toLocaleString()
      })
    };

    setInterval(updateClock, 1000);  
  }

  render() {
    return (
      <div className="Footer-container">
        <p className="footer-phrase">loh()</p>
        <p className="clock">The time is {this.state.time}.</p>
      </div>
    )

}
}


export default Footer;