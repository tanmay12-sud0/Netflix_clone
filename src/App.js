import React from 'react'
import './App.css';
import Row from './Row';
import requests from './Request';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="app">
    <Navbar />
        <Banner />
        <Row 
        isLargeRow
        title="Netflix-Original" fetchURL={requests.fetchNetflixOriginals} />
        <Row title="Tranding Now" fetchURL={requests.fetchTrending} />

        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />

        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Documentries" fetchURL={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
