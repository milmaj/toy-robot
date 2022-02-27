import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Board: React.FC = props => {
  return (
    <div className="board">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Board />
    </div>
  )
}

export default Home
