import styles from './App.module.css'
import Categories from './components/Categories/Categories';
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import Sorting from './components/Sorting/Sorting';

function App() {
  return (
    <div className="App">
      <Main />
      <Search />
      <Categories />
      <Sorting />
    </div>
  );
}

export default App;
