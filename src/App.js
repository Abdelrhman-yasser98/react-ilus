import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Nav from './components/nav/nav';
import Manager from './components/manager/manager';
import Features from './components/features/features';
import Simple from './components/features/simple';
import Speedy from './components/features/speedy';
import Easy from './components/features/easy';
import Down from './components/down/down';
import Frequantly from './components/quest/frequantly';
import Form from './components/form/form';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Manager/>
          <Features/>
          <Route exact path='/' component= {Simple} />
          <Route  path='/speedy' component= {Speedy} />
          <Route  path='/easy' component= {Easy} />
          <Down/>
          <Frequantly/>
          <Form/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
