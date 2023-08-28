import './scss/app.scss' ;
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import { Categories } from './components/Categories';
import { PizzaBlock } from './components/PizzaBlock';
import { Slider } from './components/Slider/Slider';

function App() {
  return (
    <div class="wrapper">
      <Header/> 
      <Slider/>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h1>Shoxrux dalbaeb</h1>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="мексиканская" price={600}/>            
            <PizzaBlock title="мекси" price={700}/>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
