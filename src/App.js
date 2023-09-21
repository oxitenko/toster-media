import './App.css';
import Button from './components/Button/Button';
import Description from './components/Description/Description';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import MainShowcase from './components/MainShowcase/MainShowcase';
import Selectors from './components/Selectors/Selectors';

function App() {
  return (
    <main className="App">
      <Header />
      <MainShowcase />
      <Gallery />
      <Description />
      <Selectors />
      <Button />
    </main>
  );
}

export default App;
