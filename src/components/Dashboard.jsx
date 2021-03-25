import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Header, Footer } from '../components';
import  Modal  from './Modal';



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

  const [modalActive, setModalActive] = useState(true)

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
                  <button className="open_btn">Добавить лот</button>
                  <Modal active={modalActive} setActive={setModalActive}/>
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
