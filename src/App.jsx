import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './pages/BookList';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<BookList />} />
          {/* <Route path='/newbook' element={<AddBook />} /> */}
          {/* <Route path='/update' element={<EditBook />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
