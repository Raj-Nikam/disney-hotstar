import Head from 'next/head'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Brands from '../components/Brands'
import MoviesCollection from '../components/MoviesCollection'
import ShowsCollection from '../components/ShowsCollection'

export default function Home({
  tredM, trendS, highRM, highRS
}) {
   //https://gitmemory.cn/repo/trekhleb/javascript-algorithms
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat 
      after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
      <Slider />
      <Brands />
      <MoviesCollection results={tredM} title="Popular Movies"/>
      <ShowsCollection results={trendS} title="Popular Shows"/>
      <MoviesCollection results={highRM} title="High Rated Movies"/>
      <ShowsCollection results={highRS} title="High Rated Shows"/>
      </main>

    </div>
    //KEY - 1deb1e4cf6d593913bbe41c8cb45
  )
}


export async function getServerSideProps() {
  const [tredMovie, trendShows, highRatedM, highRatedS] = await Promise.all([
    fetch('https://developers.themoviedb.org/3/movie/popular?api_keys=1deb1e4cf6d593913bbe41c8cb45&language=en-US&page=1'),
    fetch('https://developers.themoviedb.org/3/tv/popular?api_keys=1deb1e4cf6d593913bbe41c8cb45&language=en-US&page=1'),
    fetch('https://developers.themoviedb.org/3/movie/top_rated?api_keys=1deb1e4cf6d593913bbe41c8cb45&language=en-US&page=1'),
    fetch('https://developers.themoviedb.org/3/tv/top_rated?api_keys=1deb1e4cf6d593913bbe41c8cb45&language=en-US&page=1')
  ]);

  const [tredM, trendS, highRM, highRS] = await Promise.all([
      tredMovie.json(), trendShows.json(), highRatedM.json(), highRatedS.json()
  ]);

  return {
    props: {
     tredM: tredM.results,
     tredS: tredS.results,
     highRM: highRM.results,
     highRS: highRS.results
    }
  }
}
