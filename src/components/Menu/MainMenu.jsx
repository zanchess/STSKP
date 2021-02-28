import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faChartBar, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import routes from '../../constants/routes';
import './main-menu.scss';

/* const links = [
  { to: '/', label: 'Главная страница', exact: true },
  { to: '/note', label: 'Новая запись', exact: false },
  { to: '/stat', label: 'Статистика', exact: false },
]; */

const MainMenu = () => {
  const { hash } = document.location;
  useEffect(() => {
    if (hash) {
      const activeElem = document.querySelector(`.side-nav-item a[href='${hash}']`);
      document.querySelectorAll('.side-nav-item a').forEach((elem) => {
        elem.classList.remove('active');
      });
      activeElem?.classList.add('active');
    }
  });

  return (
    <div className="left-side-menu mm-active">

      <div className="leftbar-user">
        <a href="">
          <span className="leftbar-user-name">Email</span>
        </a>
      </div>

      <ul className="metismenu side-nav mm-show">
        <li className="side-nav-title side-nav-item" />

        <li className="side-nav-item">

          <Link to={routes.LANDING} className="side-nav-link">
            <FontAwesomeIcon icon={faHome} />
            <span> Главная </span>
          </Link>
        </li>

        <li className="side-nav-item">
          <Link to={routes.NEW_TRAINING} className="side-nav-link">
            <FontAwesomeIcon icon={faPlus} />
            <span> Новая запись </span>
          </Link>
        </li>

        <li className="side-nav-item">
          <Link to={routes.STATISTICS} className="side-nav-link">
            <FontAwesomeIcon icon={faChartBar} />
            <span> Статистика </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
