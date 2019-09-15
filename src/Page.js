import React from 'react';
import Header from './Header';
import DataList from './DataList';
import DataCard from './DataCard';
import Footer from './Footer';

class Page extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="Page">
        <Header />
        <DataList />
        <Footer />
      </div>
    )
}
}


export default Page;