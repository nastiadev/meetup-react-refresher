import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header>
      <div className={classes.header}>
        <div className={classes.logo}>React meetups</div>

        <nav>
          <ul>
            <li>
              <Link to='/'>All Meetups</Link>
            </li>
            <li>
              <Link to='/new-meetup'>Add new meetup</Link>
            </li>
            <li>
              <Link to='/favourites'>My favourites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
