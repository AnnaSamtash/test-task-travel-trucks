import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.text_container}>
        <h1>Campers of your dreams</h1>
        <h2 className={css.text}>
          You can find everything you want in our catalog
        </h2>
        <Link className={css.link} to={'/catalog'}>
          View Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
