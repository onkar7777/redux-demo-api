import './App.css';
import store from './Red/store';
import {Provider} from 'react-redux';
import Page01 from './Compo/Page-01';

function App() {
  return (
    <Provider store={store} >

    <div className="App">
      <Page01 />
    </div>
    </Provider>
  );
}

export default App;
