import QuestionItems from "./QuestionItems";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`group ${className}`}>
      <div className="div11">
        <img className="bg-icon2" loading="lazy" alt="" src="/bg-2@2x.png" />
        <div className="footer-logo-wrapper">
          <h1 className="h14">О процентах</h1>
        </div>
        <div className="div12">
          <span>{`Проценты и пеня, начисленные по Договору потребительского займа, по закону не могут превышать `}</span>
          <b className="b14">130%</b>
          <span> от суммы займа.</span>
        </div>
        <div className="div13">
          <span>{`Диапазон значений ПСК от `}</span>
          <b className="b15">0,000%</b>
          <span>{` до `}</span>
          <b className="b16">292,000%</b>
          <span>{`. Процентная ставка за пользование займом — `}</span>
          <b className="b17">{`0,8% `}</b>
          <span>{`в день; Пеня, начисленная за просрочку возврата займа рассчитывается по ставке `}</span>
          <b className="b18">20%</b>
          <span> годовых от суммы займа.</span>
        </div>
      </div>
      <div className="percentages-questions">
        <div className="questions-title-container-parent">
          <div className="questions-title-container">
            <h1 className="h15">Частые вопросы</h1>
          </div>
          <div className="questions-list">
            <div className="service-cost">
              <div className="service-cost-child" />
              <div className="cost-details-wrapper">
                <div className="cost-details">
                  <h3 className="h33">Какова стоимость услуги?</h3>
                  <div className="div14">
                    Стоимость услуги всего 1875 рублей. Для вашего удобства
                    оплата услуги происходит в рассрочку: пять платежей по
                    375,00 рублей. Оплачивая услугу, вы получаете доступ к
                    функциональности сервиса сроком на 1 год (365 дней) с
                    момента активации услуги.
                  </div>
                </div>
              </div>
              <div className="rectangle-parent">
                <div className="frame-child" />
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <QuestionItems prop="Как долго обрабатывается заявка?" />
            <QuestionItems prop="Как получить деньги?" />
            <QuestionItems prop="Как остановить обработку заявки?" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
