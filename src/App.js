import "./App.css";
import request from "./request";
import Row from "./Row";
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      {/* All Movie List */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={request.fetchTrendings} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
