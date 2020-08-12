import React from 'react';

import Header from '../components/Header';
import AddedFeatures from '../components/AddedFeatures';
import AdditionalFeatures from '../components/AdditionalFeatures';
import Total from '../components/Total';

const MustangDetails = () => {
    const carName = '2019 Ford Mustang'


  return (
    <div className="boxes">
      <div className="box">
        <Header car={carName} />
        <AddedFeatures car={carName}/>
      </div>
      <div className="box">
        <AdditionalFeatures car={carName} />
        <Total  car={carName}/>
      </div>
    </div>
  );
};

export default MustangDetails;