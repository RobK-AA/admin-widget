import React from 'react';
import { Route } from 'react-router-dom';
import WidgetContainer from './widget/widget_container';
import ClientProfileModalContainer from './client_profile_modal/client_profile_modal_container';

const App = () => (
  <div>
    {/* <ClientProfileModalContainer /> */}
    <WidgetContainer />
  </div>
);

export default App;