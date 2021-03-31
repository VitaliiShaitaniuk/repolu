import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Header, Footer } from '../components';
import Modal from 'react-modal';






Modal.setAppElement('#root')

export default function Dashboard() {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()



  async function handleLogout(){
    setError("")

    try {
      await logout()
      history.push('/')
    } catch {
      setError('Failed to log out')
    }
  }

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
          <Header/>
            <div className="dashboard">
          
          
            
            
          
            
          
            <div className="bloc-tabsP">
              <div className="tabsP">{currentUser.email}</div>
              
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="tabsP"><Link to="/UpdateProfile">Обновить Профиль</Link></div>
              <div className="tabsP" type="button" variant="link" onClick={handleLogout}>Выход</div>
              <div 
              className={toggleState === 1 ? "tabsP active-tabsP" : "tabsP"}
              onClick={() => toggleTab(1)}
              >Мои товары</div>
              <div 
              className={toggleState === 2 ? "tabsP active-tabsP" : "tabsP"}
              onClick={() => toggleTab(2)}
              >Ставки</div>
              <div 
              className={toggleState === 3 ? "tabsP active-tabsP" : "tabsP"}
              onClick={() => toggleTab(3)}
              >Баланс</div>
              <div 
              className={toggleState === 4 ? "tabsP active-tabsP" : "tabsP"}
              onClick={() => toggleTab(4)}
              >Сообщения</div>
              <div 
              className={toggleState === 5 ? "tabsP active-tabsP" : "tabsP"}
              onClick={() => toggleTab(5)}
              >Продано</div>
              
              
            </div>

            <div className="content-tabsP">
              
              <div 
              className={toggleState === 1 ? "contentP active-contentP" : "contentP"}
              >
                <div className="sails_head">
                  
                  <h2>Мои товары</h2>
                  <button onClick={() => setModalIsOpen(true)}>Добавить лот</button>
                  <Modal isOpen={modalIsOpen} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={() => setModalIsOpen(false)} 
                    style={
                      {
                        overlay:{
                          backgroundColor: 'gray'
                        },
                        content: {
                          color: 'black'
                        }
                      }
                    }>
                    <h2>Lucrolote</h2>
                    <p>modal body</p>
                    <form className="adding_form">
                      <input type="text" placeholder="Заголовок"></input>
                      <div className="quadro_add_foto">

                      </div>
                      <p>Максимальное количество фотографий: 5</p>
                      <select>
	                      <option>Выберите категорию</option>
	                      <option>Авто</option>
	                      <option>Телефоны</option>
	                      <option>Ноутбуки</option>
                        <option>Техника</option>
                        <option>Спорт</option>
                        <option>Одежда</option>
                        <option>Детское</option>
                        <option>Дом</option>
                        <option>Продукты</option>
                        <option>Здоровье</option>
                        <option>Услуги</option>
                        <option>Другое</option>
                      </select>
                      <textarea>Описание...</textarea>
                      <p><b>Варианты оплаты</b></p>
                        <p><input name="dzen" type="radio" value="nedzen"/> Предоплата на карту/счет</p>
                        <p><input name="dzen" type="radio" value="dzen"/> Наложеный платеж</p>
                        <p><input name="dzen" type="radio" value="pdzen"/> Оплата наличными</p>
                      <p><b>Возврат и обмен</b></p>
                        <p><input name="dzen" type="radio" value="nedzen"/> Возврат и обмен в течении 14 дней</p>
                        <p><input name="dzen" type="radio" value="dzen"/> Обмен в течении 14 дней</p>
                        <p><input name="dzen" type="radio" value="pdzen"/> Возврата и обмена нет</p> 
                      <h4>Продолжительность аукциона</h4>
                      <select>
	                      <option>2 часа</option>
	                      <option>24 часа</option>
	                      <option>2 дня</option>
	                      <option>3 дня</option>
                        <option>4 дня</option>
                        <option>5 дней</option>
                        <option>6 дней</option>
                        <option>7 дней</option>
                      </select>
                      <h4>Стартовая цена</h4>	
                      <input type="text" placeholder="10"/>
                      <div className="balance_board">
                        <p>Стоимость выставления - 1грн.</p>
                        <p>На вашем счету: 0грн.</p>
                        <p>Пополнить счет</p>
                      </div>
                      <p>Внимание - вы не сможете изменить или удалить запись с аукциона.<br/>
                        Если вы хотите что-то изменить - отредактируйте текст сейчас, до создания аукциона.</p>
                      <input type="submit" value="Разместить за 1грн +9% от продажи" />
                    </form>
                    <div>
                      <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>
                  </Modal>
                  <button>Удалить лот</button>
                  
                  
                    
                  
                  
                </div>
                
                <div className="layer">
                  <ul className="items_sails">
                    <li className="item_sail">
                      <p>Шини</p>
                      <p>400 грн</p>
                      <p>ставок: 2</p>
                      <p>Лидер: Nick</p>
                    </li>
                    <li className="item_sail">
                      <p>Коза живая</p>
                      <p>1500 грн</p>
                      <p>ставок: 5</p>
                      <p>Лидер: Rosa</p>
                    </li>
                    <li className="item_sail">
                      <p>Шапка</p>
                      <p>100 грн</p>
                      <p>ставок: 3</p>
                      <p>Лидер: Vova</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div 
              className={toggleState === 2 ? "contentP active-contentP" : "contentP"}
              >
                <h2>Ставки</h2>
                
                <div className="layer">
                  <ul className="items_sails">
                    <li className="item_sail">
                      <p>Сумка</p>
                      <p>50 грн</p>
                      
                    </li>
                    <li className="item_sail">
                      <p>Powerbank</p>
                      <p>100 грн</p>
                      
                    </li>
                    <li className="item_sail">
                      <p>Лак для нохтів)</p>
                      <p>5 грн</p>
                      
                    </li>
                  </ul>
                </div>
                
              </div>

              <div 
              className={toggleState === 3 ? "contentP active-contentP" : "contentP"}
              >
              <h2>Баланс</h2>
                
                <p>kjblklkjbууауауфцуафуаvkjgvвмфамфымв</p>
              </div>

              <div 
              className={toggleState === 4 ? "contentP active-contentP" : "contentP"}
              >
              <h2>Сообщения</h2>
                
                <p>kjblklkjbууауауфцуафуаvkjgvвмфамфымв</p>
              </div>
              <div 
              className={toggleState === 5 ? "contentP active-contentP" : "contentP"}
              >
              <h2>Продано</h2>
                
                <p>kjblklkjbууауауфцуафуаvkjgvвмфамфымв</p>
                
              </div>

            </div>

          

          </div>
          <Footer/>
          
        </div>
        
    )
}
