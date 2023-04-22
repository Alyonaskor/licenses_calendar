import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('MTgwODM3NUAzMjMxMmUzMTJlMzMzNVhiclhDbklwY0Rid0pGc3dQUm5vN3puZU5NVHhOekdHNWZscUtNYjl5eEE9;Mgo+DSMBaFt+QHFqVkNrWE5Gf0BAXWFKblJ2T2JadVtyZCQ7a15RRnVfRl9hSH5SdUBhXHdYcg==;Mgo+DSMBMAY9C3t2VFhhQlJBfVtdX2pWfFN0RnNYf1Rxd19DYkwgOX1dQl9gSXpRdERjWHxbcnFcT2I=;Mgo+DSMBPh8sVXJ1S0d+X1RPckBAVHxLflF1VWJZdV9zflBEcC0sT3RfQF5jTXxRd0ViWnpcdnVXRA==;MTgwODM3OUAzMjMxMmUzMTJlMzMzNUpLcnJscm1FeHk1WmlMaVdXM1lKNWtScUVERzRvdU9QOWJVdTN0YW9HVE09;NRAiBiAaIQQuGjN/V0d+XU9Hc1RGQmFAYVF2R2BJfl56dVZMZV5BNQtUQF1hSn5XdEdiWX5ddXZTQmde;ORg4AjUWIQA/Gnt2VFhhQlJBfVtdX2pWfFN0RnNYf1Rxd19DYkwgOX1dQl9gSXpRdERjWHxbcnJTR2I=;MTgwODM4MkAzMjMxMmUzMTJlMzMzNVpMSlZRZnlXRkFTY2t4TVVub0JJSE5EbnBYTGtXZlpmSXdvaHRCV0VHTDQ9;MTgwODM4M0AzMjMxMmUzMTJlMzMzNVdGdWVTLzduYjRpb2RPbnlwU05mUkRJb05idjRSZnVUZ1VUdmcwT2tNV1E9;MTgwODM4NEAzMjMxMmUzMTJlMzMzNVdkS1dZV3F6UTdtald4Wjk5WXRjM2oyNThRcUpzQW9TcnJQUHBxYzBZdE09;MTgwODM4NUAzMjMxMmUzMTJlMzMzNVVodmlOZXRVeEtYRmF6Wmo5U0RuUWlhcERZVEduakZTSFk4RlBJZ2hEQU09;MTgwODM4NkAzMjMxMmUzMTJlMzMzNVhiclhDbklwY0Rid0pGc3dQUm5vN3puZU5NVHhOekdHNWZscUtNYjl5eEE9');



ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
