import { NavLink } from 'react-router-dom';

import items from './items';

import css from './menu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className="container">
      <nav className={css.nav}>
        <ul className={css.list}>{elements}</ul>
      </nav>
    </div>
  );
};

export default Menu;
