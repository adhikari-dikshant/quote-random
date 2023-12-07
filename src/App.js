import { React } from 'react';
import { Quote } from './components/Quote';
import './App.css';
// import Bookmarks from './components/Bookmarks';

function App() {
  return (
    <div className="App">
      <Quote />
      {/*<Routes>
      <Route exact path="/" component={Quotes} />
      <Route path="/bookmarks" component={Bookmarks} />
    </Routes>*/}
    </div>
  );
}

export default App;