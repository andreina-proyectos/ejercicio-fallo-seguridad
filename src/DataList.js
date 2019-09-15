import React from 'react';
import DataCard from './DataCard';
const hackedData = [
  {
    "name": "Francisco Molina",
    "email": "paco.molina@gmail.com",
    "passwords": ["redbull", "contraseña", "god"],
    "bank": {
      "iban": "ES57 3919 3283 8402 7522 0643",
      "pin": "8970"
    }
  },
  {
    "name": "Bruno Díaz",
    "email": "bruno.diaz@aol.com",
    "passwords": ["bruno-y-ricardo", "thebatrocks", "BB"],
    "bank": {
      "iban": "US24 0776 0001 0000 0000 0001",
      "pin": "0228"
    }
  },
  {
    "name": "Angeles Iglesias",
    "email": "angeles.iglesias@hotmail.com",
    "passwords": ["sword", "0000", "123"],
    "bank": {
      "iban": "ES39 2002 4104 2471 4443 4466",
      "pin": "6732"
    }
  },
  {
    "name": "Lourdes Parra",
    "email": "lourdes.parra@gmail.com",
    "passwords": ["bonnie", "123", "0000"],
    "bank": {
      "iban": "ES23 9636 3150 7215 8752 3353",
      "pin": "3127"
    }
  }
];

class DataList extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="Card-container">
      <ul className="hacked-list">
        {
          hackedData.map(
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