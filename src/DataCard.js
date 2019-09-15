import React from 'react';

class DataCard extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <fragment>
      <li className="hacked-list__element">{this.props.name}</li>
      <li className="hacked-list__element">{this.props.email}</li>
      <li className="hacked-list__element">{this.props.passwords.join(' + ')}</li>
      <li className="hacked-list__element">{this.props.iban}</li>
      <li className="hacked-list__element">{this.props.pin}</li>
      <br/>
    </fragment>
    )

}
}

export default DataCard;