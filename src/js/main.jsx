// App Config
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <DocumentTitle title="Some Title">
        <Component />
      </DocumentTitle>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App);
  });
}
