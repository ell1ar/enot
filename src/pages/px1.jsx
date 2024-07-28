import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import CardHomeDesk from "../components/card-home-desk";
import Component1 from "../components/component1";
import Footer from "../components/footer";
import PaymentInfoContainer from "../components/payment-info-container";
import "./px1.css";

const Px1 = () => {
  return (
    <div className="px1">
      <FrameComponent6 />
      <FrameComponent5 />
      <section className="frame-section">
        <div className="wrapper1">
          <h1 className="h1">А у нас лучше</h1>
        </div>
        <div className="frame-parent2">
          <div className="frame-parent3">
            <div className="parent1">
              <div className="div10">
                <div className="child3" />
                <b className="working-hours-placeholder-container">
                  <span>0</span>
                  <span className="span">1</span>
                </b>
                <b className="b7">Работаем 24/7</b>
                <div className="div11">
                  <p className="p">Работаем круглые сутки и без выходных.</p>
                  <p className="p1">Без праздников. В дождь и снег</p>
                </div>
              </div>
              <img
                className="arrows-icon"
                loading="lazy"
                alt=""
                src="/arrows.svg"
              />
            </div>
            <div className="div12">
              <div className="wrapper-bg">
                <img className="bg-icon" alt="" src="/bg1@2x.png" />
              </div>
              <div className="parent2">
                <h1 className="h11">Уникальная технология</h1>
                <div className="div13">
                  <p className="p2">
                    Наша система работает без звонков, полностью
                    автоматизировано. Вам нужно только заполнить анкету. Дальше
                    система сделает все сама
                  </p>
                  <p className="p3">и не будет вас беспокоить.</p>
                </div>
                <button className="button3">
                  <b className="b8">Подать заявку</b>
                </button>
              </div>
              <div className="frame-parent4">
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src="/group1.svg"
                />
                <b className="b9">+486 Микрозаймов быстро и удобно</b>
              </div>
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="frame-child5" />
            <b className="working-hours-banner-container">
              <span>0</span>
              <span className="span1">1</span>
            </b>
            <b className="b10">Работаем 24/7</b>
            <div className="div14">
              <p className="p4">Работаем круглые сутки и без выходных.</p>
              <p className="p5">Без праздников. В дождь и снег</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-inner">
        <div className="frame-parent5">
          <div className="parent3">
            <h1 className="h12">Требования к заемщику</h1>
            <div className="card-home-desk-parent">
              <CardHomeDesk icon="/icon1.svg" prop="Паспорт РФ" />
              <Component1
                materialSymbolsLightidCar="/materialsymbolslightidcard1.svg"
                prop="СНИЛС (опционально)"
              />
            </div>
          </div>
          <div className="first-row-separator-parent">
            <Component1
              materialSymbolsLightidCar="/gravityuiantennasignal1.svg"
              prop="Доступ в интернет"
              propFlex="1"
            />
            <CardHomeDesk
              icon="/icon-11.svg"
              prop="Банковская карта"
              propFlex="0.9439"
            />
          </div>
          <div className="parent4">
            <Component1
              materialSymbolsLightidCar="/materialsymbols18upratingrounded1.svg"
              prop="Возраст от 18 лет"
              propFlex="0.8144"
            />
            <div className="div15">
              <div className="child4" />
              <div className="icon-wrapper">
                <div className="icon">
                  <div className="icon-child" />
                  <input className="fa6-solidmobile" type="checkbox" />
                </div>
              </div>
              <b className="b11">Мобильный телефон</b>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper2">
        <div className="div16">
          <img className="bg-icon1" loading="lazy" alt="" src="/bg-11@2x.png" />
          <h1 className="h13">О процентах</h1>
          <div className="wrapper3">
            <div className="div17">
              <span>{`Проценты и пеня, начисленные по Договору потребительского займа, по закону не могут превышать `}</span>
              <b className="b12">130%</b>
              <span> от суммы займа.</span>
            </div>
          </div>
          <div className="div18">
            <span>{`Диапазон значений ПСК от `}</span>
            <b className="b13">0,000%</b>
            <span>{` до `}</span>
            <b className="b14">292,000%</b>
            <span>{`. Процентная ставка за пользование займом — `}</span>
            <b className="b15">{`0,8% `}</b>
            <span>{`в день; Пеня, начисленная за просрочку возврата займа рассчитывается по ставке `}</span>
            <b className="b16">20%</b>
            <span> годовых от суммы займа.</span>
          </div>
        </div>
      </section>
      <section className="px-child">
        <div className="parent5">
          <h1 className="h14">Частые вопросы</h1>
          <div className="eventos-em-destaque-parent">
            <div className="eventos-em-destaque">
              <div className="eventos-em-destaque-child" />
              <b className="b17">Какова стоимость услуги?</b>
              <div className="div19">
                Стоимость услуги всего 1875 рублей. Для вашего удобства оплата
                услуги происходит в рассрочку: пять платежей по 375,00 рублей.
                Оплачивая услугу, вы получаете доступ к функциональности сервиса
                сроком на 1 год (365 дней) с момента активации услуги.
              </div>
              <div className="group-div">
                <div className="frame-child6" />
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
            <div className="div20">
              <div className="child5" />
              <b className="b18">Как долго обрабатывается заявка?</b>
              <img
                className="child6"
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
            </div>
            <div className="card-faq">
              <div className="card-faq-child" />
              <b className="b19">Как получить деньги?</b>
              <img
                className="card-faq-item"
                loading="lazy"
                alt=""
                src="/group-2.svg"
              />
            </div>
            <div className="info-card-icon">
              <div className="info-card-icon-child" />
              <b className="b20">Как остановить обработку заявки?</b>
              <img
                className="info-card-icon-item"
                loading="lazy"
                alt=""
                src="/group-2.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <PaymentInfoContainer />
    </div>
  );
};

export default Px1;
