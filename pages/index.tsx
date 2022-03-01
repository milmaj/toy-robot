import type { NextPage } from 'next';
import Board from '../components/Board';

const Home: NextPage = () => {
  return (
    <div className="home">
      <Board square={6} />
    </div >
  )
}

export default Home
