import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <div>React meetups</div>
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
    </header>
  );
}

export default MainNavigation;
