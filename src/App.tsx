import React from 'react';
import { Header, CarouselPersonal, InfoContent } from './components/index'
import './App.css'

function App() {
  return (
    <div className='mainsection'>
      <Header />
      <InfoContent />
      <CarouselPersonal />
    </div>
  );
}

export default App;
