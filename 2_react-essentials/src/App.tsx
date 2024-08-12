import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    // This is a Fragment <Fragment>...</Fragment> (older versions) or <>...</> use it as wrapper and avoid unnecessary HTML elements.
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
