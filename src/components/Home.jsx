import React from 'react'
import clock from '../images/Clock.jpg';
import cruz from '../images/cruz.jpg';
import coins from '../images/Coins.jpg';
import {Header, Footer} from '../components';

function Home() {

  

    return (
      <div>
      <Header />
        <div className="content">
        
          <div className="premium">
            <div className="lot">
              <div className="name_of_lot">
               <h5>Часы мужские "Geneve"</h5>
              </div>
              <img className="first_foto" src={ clock } alt="#"></img>
              <div className="current_price_card">
                <h5>125 грн.</h5>
              </div>
              <div className="time_to_end">
                <p>дней осталось: 3</p>
              </div>
              <div className="count_of_beats">
                <p>Количество ставок: 14</p>
              </div>
            </div>
          </div>
          <div className="premium">
            <div className="lot">
              <div className="name_of_lot">
                <h5>Цепочка (серебро)</h5>
              </div>
              <img className="first_foto" src={ cruz } alt="#"></img>
              <div className="current_price_card">
                <h5>125 грн.</h5>
              </div>
              <div className="time_to_end">
                <p>дней осталось: 3</p>
              </div>
              <div className="count_of_beats">
                <p>Количество ставок: 14</p>
              </div>
            </div>
          </div>
          <div className="premium">
            <div className="lot">
              <div className="name_of_lot">
                <h5>Монеты</h5>
              </div>
              <img className="first_foto" src={ coins } alt="#"></img>
              <div className="current_price_card">
                <h5>125 грн.</h5>
              </div>
              <div className="time_to_end">
                <p>дней осталось: 3</p>
              </div>
              <div className="count_of_beats">
                <p>Количество ставок: 14</p>
              </div>
            </div>
          </div>
          <div className="premium">
            <div className="lot">
              <div className="name_of_lot">
                <h5>Часы мужские "Geneve"</h5>
              </div>
              <img className="first_foto" src={ clock } alt="#"></img>
              <div className="current_price_card">
                <h5>125 грн.</h5>
              </div>
              <div className="time_to_end">
                <p>дней осталось: 3</p>
              </div>
              <div className="count_of_beats">
                <p>Количество ставок: 14</p>
              </div>
            </div>
          </div>
          <div className="premium">
            <div className="lot">
              <div className="name_of_lot">
                <h5>Цепочка (серебро)</h5>
              </div>
              <img className="first_foto" src={ cruz } alt="#"></img>
              <div className="current_price_card">
                <h5>125 грн.</h5>
              </div>
              <div className="time_to_end">
                <p>дней осталось: 3</p>
              </div>
              <div className="count_of_beats">
                <p>Количество ставок: 14</p>
              </div>
            </div>
          </div>
          <div className="premium">
            <div className="lot">
              <div className="name_of_lot">
                <h5>Монеты</h5>
              </div>
              <img className="first_foto" src={ coins } alt="#"></img>
              <div className="current_price_card">
                <h5>125 грн.</h5>
              </div>
              <div className="time_to_end">
                <p>дней осталось: 3</p>
              </div>
              <div className="count_of_beats">
                <p>Количество ставок: 14</p>
              </div>
            </div>
          </div>
          <div className="premium">
            <div className="lot">
              <div className="name_of_lot">
                <h5>Часы мужские "Geneve"</h5>
              </div>
              <img className="first_foto" src={clock} alt="#"></img>
              <div className="current_price_card">
                <h5>125 грн.</h5>
              </div>
              <div className="time_to_end">
                <p>дней осталось: 3</p>
              </div>
              <div className="count_of_beats">
                <p>Количество ставок: 14</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>  
      </div>
        
        
    )
}

export default Home;
