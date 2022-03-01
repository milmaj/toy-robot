import type { NextPage } from 'next';
import Board from '../components/Board';
import ControlPanel from '../components/ControlPanel';

const Home: NextPage = () => {
  return (
    <div className="home">
      <ControlPanel />
      <Board square={6} />
    </div >
  )
}

export default Home
