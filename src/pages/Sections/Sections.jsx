import React, { Component } from 'react'
import './Sections.scss'

import Banner from '../../assets/images/hero-image.jpg'
import Romain from '../../assets/images/aurelien-romain-DB_q6rPFnBM-unsplash 1.jpg'
import Aranda from '../../assets/images/carlos-aranda-QMjCzOGeglA-unsplash 1.jpg'

export default class Sections extends Component {
  render() {
    return (
      <div>
        <main>
          <section className='hero'>
            <div className="container">
              <div className="hero__box">
                  <h1>Российский завод силовых машин</h1>
                  <p>научно-производственное предприятие, занимающееся разработкой и производством силовых машин.</p>
              </div>
              <img src={Banner} alt="" />
            </div>
          </section>
          <section className='about'>
                <div className="container">
                  <div className="about__box">
                      <div className="about__box__left">
                            <h1>О предприятии</h1>
                            <p>За 20 лет развития в структуре завода сформирован мощный производственный потенциал, научно-технический центр, испытательная лаборатория, современная база, учебный центр и широкая сеть региональных и международных представительств в Российской Федерации, Республике Беларусь, Узбекистане и Казахстане.</p>
                            <p>Ежегодно НПП «ПИОНЕР» реализует несколько проектов по модернизации серийных и разработке новых приборов, призванные в наибольшей степени удовлетворять возрастающие требования наших заказчиков.</p>
                      </div>

                      <div className="about__box__right">
                          <p>
                          В номенклатуре выпускаемой НПП «ПИОНЕР» продукции найдется все, что необходимо для успешного решения задачи автоматизации технологических процессов на любом предприятии. Все средства измерения производства «ПИОНЕР» внесены в Государственный реестр СИ и имеют необходимые разрешительные документы.
                          </p>
                      </div>
                  </div>
                  <div className="about__photo">
                      <img src={Romain} alt="" />
                      <img src={Aranda} alt="" />
                  </div>
                </div>
          </section>
        </main>
      </div>
    )
  }
}
