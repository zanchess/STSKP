import React from 'react';
import MainInfo from '../../components/MainInfo/MainInfo';
import MainModal from '../../components/MainModal/MainModal';
import './main-page.scss';

const MainPage = () => (
  <div className="main-page">
    <MainInfo />
    <MainModal />
  </div>
);

export default MainPage;
