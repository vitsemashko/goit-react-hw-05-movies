import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <p>Page not found</p>
      <p>
        Visit{' '}
        <Link to="/" className={css.link}>
          {' '}
          Home page
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
