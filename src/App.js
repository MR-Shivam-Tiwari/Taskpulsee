import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import TaskList from './components/TaskList';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="services"><Services /></div>
      <div id="about"><About /></div>
      <div id="task-list"><TaskList /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </div>
  );
}

export default App;
