import React from 'react';
import DataCard from './DataCard';

class DataList extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="Card-container">
      <ul className="hacked-list">
        {
          this.props.hackedData.map(
            dataItem => {
              return (
                <fragment>
                  <DataCard 
                  name = {dataItem.name}
                  email = {dataItem.email}
                  passwords = {dataItem.passwords}
                  iban = {dataItem.bank.iban}
                  pin = {dataItem.bank.pin}
                  />
                </fragment>
              )
            }
          )
        }
      </ul>
    </div>
    )

}
}

export default DataList;