
import './App.css';
import AppRouter from './AppRouter/AppRouter';
import ServPages from './AppRouter/ServPages';
import NavBar from './components/NavBar/NavBar';



function App(){




  return (
    <div className="App">
      <NavBar></NavBar>
      <AppRouter>
      <ServPages></ServPages>
      </AppRouter>
      
  </div>
    );

}


export default App;
