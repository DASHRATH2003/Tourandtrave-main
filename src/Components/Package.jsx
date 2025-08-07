import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Weddingtour from './Package/Weddingtour';
import Grouptour from './Package/Grouptour';
import Honeymoontour from './Package/Honeymoontour';
import ResortPackage from './Package/ResortPackage';

const Package = () => {
  const { type } = useParams();

  switch (type) {
    case 'Weddingtour':
      return <Weddingtour />;
    case 'Grouptour':
      return <Grouptour />;
    case 'Honeymoontour':
      return <Honeymoontour />;
    case 'ResortPackage':
      return <ResortPackage />;
    default:
      return <Navigate to="/package/Weddingtour" />;
  }
};

export default Package;
