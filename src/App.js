import React from 'react';
import './App.css';
import Main from './views/Main/Main';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <section className="main">
      <Header />
      <Main />
      {/* add your main component here */}
      <Footer />
    </section>
  );
}

export default App;
