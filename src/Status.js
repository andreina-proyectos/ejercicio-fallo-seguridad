import React from 'react';

class Status extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="Status-container">
        <p className="coincidences">Número de coincidencias encontradas: {this.props.coincidences}</p>
      </div>
    )

}
}


export default Status;