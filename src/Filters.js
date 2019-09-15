import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailField = this.handleEmailField.bind(this);
    this.state = {
      phraseEmail: ''
    }
  }

  handleEmailField (event) {
    const inputValue = event.currentTarget.value;
    console.log(inputValue);
    const filterResultdata =  this.props.hackedData.filter(dataItem => {
      return (
        dataItem.email === inputValue
      )
    })
    console.log(filterResultdata.length);
    this.setState(
      {
        phraseEmail: filterResultdata.length > 0 ? 'Tu email ha sido comprometido' : 'Estás de suerte, tu email está seguro'
      }
    );
  }

  render() {
    return (
      <div className="Filters-container">
        <p className="phrase">Comprueba si tu email ha sido comprometido</p>
        <input onChange={this.handleEmailField} type="text" className="email-filter"/>
        <p className="phrase">{this.state.phraseEmail}</p>
      </div>
    )

  }
}

export default Filters;