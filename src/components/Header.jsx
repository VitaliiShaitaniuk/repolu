/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';
import LoginRef from './LoginRef';
import Categories from './Categories'
import {Link} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import  DashboardRef  from './DashboardRef';



function Header () {

  const { currentUser } = useAuth()

    
   
 

    return (
        <div className="header">
          <div className="top_line">
            <Link to="/">
              <div className="face">
                <h1 class="logo">Lucro Lote</h1>
                <p>Интернет аукцион</p>
              </div>
            </Link>
            <form>
              <input type="text" placeholder="Искать здесь..."></input>
              <button className="awesome" type="submit"></button>
            </form>
            
            
            <div className="manage_button">

            {currentUser  ? <DashboardRef/> : <LoginRef/> }
            </div>
            
          </div>
          <div className="bottom_line">
          <Link to="/Auto">
            <Categories onClickItem={(name)=> console.log(name)} items={[
            'Авто',
            'Телефоны',
            'Ноутбуки',
            'Техника',
            'Спорт',
            'Одежда',
            'Детское',
            'Дом',
            'Продукты',
            'Здоровье',
            'Услуги',
            'Другое'
            ]}/>
          </Link>
          
          </div>
        </div>
    );
}

export default Header;