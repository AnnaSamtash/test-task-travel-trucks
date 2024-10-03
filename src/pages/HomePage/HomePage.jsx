import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './HomePage.module.css';
import PageLink from '../../components/PageLink/PageLink';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <DocumentTitle>TravelTrucks app/Home Page </DocumentTitle>
      <div className={css.text_container}>
        <h1>Campers of your dreams</h1>
        <h2 className={css.text}>
          You can find everything you want in our catalog
        </h2>
        <PageLink to="/catalog" style={{ width: '173px', height: '56px' }}>
          View Now
        </PageLink>
      </div>
    </div>
  );
};

export default HomePage;
