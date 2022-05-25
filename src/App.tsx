import React from 'react';
import { Header, CarouselPersonal, InfoContent, Agendamento, Footer } from './components/index'
import './App.css'

function App() {
  return (
    <div className='mainsection'>
      <Header />
      <InfoContent />
      <CarouselPersonal />
      <Agendamento />
      <Footer />
    </div>
  );
}

export default App;
