import React from 'react'
import goodyear from '../images/goodyear.jpg';
import shina1 from '../images/шина_1.png';
import shina2 from '../images/шина_2.jpg';
import shina4 from '../images/шина4.jpg';
import shina5 from '../images/шина5.jpg';
import {Header, Footer} from '../components';
import { useState } from "react";





function Lot() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div>
        <Header/>
            <div className="content">
            <div className="block_items_top">
                <div className="block_photo">
                    <div class="lot_main_foto">
                        <img src={goodyear} alt="#"/>
                    </div>
                    <div className="marginal_foto">
                        <img src={shina1} alt="#"/>
                        <img src={shina2} alt="#"/>
                        <img src={shina4} alt="#"/>
                        <img src={shina5} alt="#"/>
                    </div>
                </div>
                <div className="trading_panel">
                    <div className="name_of_good">
                        <h2>Комплект шин "Goodyear"</h2>
                    </div>
                    <div className="multimedia_block">
                        <div className="side_data">
                            <div className="current_price">
                                <div className="now_price">
                                    <h3>800 999</h3>
                                </div>
                                <span>Грн.</span>
                                <div className="actions">
                                    <form action="#">
                                        <input className="bet" type="text" id="fname" name="fname"/>
                                    </form>
                                    <span>Грн.</span>
                                </div>
                            </div>
                            <div className="buy_now">
                                <div className="price_now">
                                    <span>Купить сейчас:</span>
                                    <h3 className="price_color">3200</h3>
                                    <span>Грн.</span>
                                </div>
                            </div>
                            <div className="actions_data">
                                <div className="count_of_bets">
                                    <span>Ставок:</span>
                                    <h4>2</h4>
                                </div>
                                <div className="lider">
                                    <span>Лидер:</span>
                                    <h4>mir3000</h4>
                                </div>
                                <div className="start_data">
                                    <span>Начало:</span>
                                    <h4>2021/03/08</h4>
                                </div>
                                <div className="counter_to_end">
                                    <span>Завершение:</span>
                                    <h4>3Дн. 12ч. 40м. 18с.</h4>
                                </div>
                            </div>
                        </div>
                        <div className="buttons_side">
                            <div className="make_bet">
                                <input className="make_bet_button" type="button" value="Сделать ставку"/>
                            </div>
                            <div className="toBuy_now">
                                <input className="make_bet_button" type="button" value="Купить сейчас"/>
                            </div>
                            <div className="proposition">
                                <input className="make_bet_button" type="button" value="Предложить цену"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block_items_bottom">
                
                <div className="bloc-tabs">
                    <div 
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    >Описание</div>
                    <div 
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    >Доставка</div>
                    <div 
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                    >Отзывы</div>
                </div>

                <div className="content-tabs">

                    <div 
                    className={toggleState === 1 ? "contentLot active-content" : "contentLot"}>
                        <h2>Описание</h2>
                        <hr/>
                        <p>
                            Lorem lkjlkjhljh
                        </p>
                    </div>

                    <div 
                    className={toggleState === 2 ? "contentLot active-content" : "contentLot"}>
                        <h2>Доставка</h2>
                        <hr/>
                        <p>
                            Lorem lkjlkjhljh mhbkmb
                        </p>
                    </div>

                    <div 
                    className={toggleState === 3 ? "contentLot active-content" : "contentLot"}>
                        <h2>Отзывы</h2>
                        <hr/>
                        <p>
                            Lorem lkjlkjhljh mhbkmb ljhvgskjghkj
                        </p>
                    </div>


                </div>

            </div>
        </div>
        <Footer/>
        </div>

    )
}



export default Lot;
