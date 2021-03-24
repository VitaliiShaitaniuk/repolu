/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import SideSubmenu from '../components/SideSubmenu';
import goodyear from '../images/goodyear.jpg';
import {Header, Footer} from '../components';

function Auto() {

    

    return (
        <div>
        <Header />
        <div className="box">
            <SideSubmenu/>
            <div className="content">
                <Link to="/Lot">
                <div className="lot">
                    <div className="name_of_lot">
                        <h3>Шины goodyear</h3>
                    </div>
                    <img class="first_foto" src={goodyear} alt="#"></img>
                    <div class="current_price_card">
                        <h3>125 грн.</h3>
                    </div>
                    <div class="time_to_end">
                        <p>дней осталось: 3</p>
                    </div>
                    <div class="count_of_beats">
                        <p>Количество ставок: 14</p>
                    </div>
                </div>
                </Link>
                
            </div>
        </div>
        <Footer/> 
        </div>

    )
}

export default Auto
