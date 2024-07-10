import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../assets/images/logo (1).png'
import Phone from '../../assets/images/phone 1.svg'
export default class Header extends Component {
  render() {
    return (
     <header className='header'>
      <div className="container">
          <div className="header__top">
            <div className="header__logo">
              <img src={Logo} alt="" />
            </div>
              <div className="header__top__right">
                  <div className="header__top__email">
                      <p>По вопросам и предложениям</p>
                      <a href="">pionerrr@sila.ru</a>
                  </div>
                  <div className="header__top__number">
                      <p>Для консультаций</p>
                      <a href="">+7 (495) 456-24-21</a>
                  </div>
              </div>
          </div>
          <div className="header__line"></div>
          <div className="header__nav">
              <ul className='header__nav__ul'>
                <li>Главная</li>
                <li>О предприятии</li>
                <li>Новости</li>
                <li>Продукция</li>
                <li>Услуги</li>
                <li>Поддержка</li>
                <li>География поставок</li>
                <li>Контакты</li>
              </ul>
            <div className="header__nav__call">
                <img src={Phone} alt="" />
                <p>Перезвоните мне</p>
            </div>
          </div>
      </div>
     </header>
    )
  }
}
