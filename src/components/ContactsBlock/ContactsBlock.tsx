import React, { FC } from "react";
import MapIcon from "../../imgs/Vector (1).svg";
import PhoneIcon from "../../imgs/bxs_phone.svg";
import ClockIcon from "../../imgs/bi_clock-fill.svg";

import "./contacts-block.scss";

const ContactsBlock: FC = () => {
  return (
    <div className="contacts-block">
      <div className="contacts-block__container _container">
        <div className="contacts-block__content">
          <div className="contacts-block__text">
            <div className="contacts-block__title">Get In Touch With Us</div>
            <div className="contacts-block__subtitle">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us <br /> An Email. Our Staff Always Be There To Help
              You Out. Do Not Hesitate!
            </div>
          </div>
          <div className="contacts-block__main-info">
            <div className="contacts-block__info">
              <div className="contacts-block__info-card">
                <div className="contacts-block__icon">
                  <img src={MapIcon} alt="" />
                </div>
                <div className="contacts-block__info-cont">
                  <div className="contacts-block__info-title">Address</div>
                  <div className="contacts-block__info-subtitle">
                    236 5th SE Avenue, New <br /> York NY10000, United States
                  </div>
                </div>
              </div>
              <div className="contacts-block__info-card">
                <div className="contacts-block__icon">
                  <img src={PhoneIcon} alt="" />
                </div>
                <div className="contacts-block__info-cont">
                  <div className="contacts-block__info-title">Phone</div>
                  <div className="contacts-block__info-subtitle">
                    Mobile: +(84) 546-6789
                    <br /> Hotline: +(84) 456-6789
                  </div>
                </div>
              </div>
              <div className="contacts-block__info-card">
                <div className="contacts-block__icon">
                  <img src={ClockIcon} alt="" />
                </div>
                <div className="contacts-block__info-cont">
                  <div className="contacts-block__info-title">Working Time</div>
                  <div className="contacts-block__info-subtitle">
                    Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </div>
                </div>
              </div>
            </div>
            <form
              autoComplete="off"
              className="contacts-block__personal-info personal-info"
            >
              <div className="personal-info__input-section">
                <div className="personal-info__title">Your name</div>
                <input
                  type="text"
                  placeholder="Abc"
                  className="personal-info__input"
                />
              </div>
              <div className="personal-info__input-section">
                <div className="personal-info__title">Email address</div>
                <input
                  type="email"
                  placeholder="Abc@gmail.com"
                  className="personal-info__input"
                />
              </div>
              <div className="personal-info__input-section">
                <div className="personal-info__title">Subject</div>
                <input
                  type="text"
                  placeholder="This is an optional"
                  className="personal-info__input"
                />
              </div>
              <div className="personal-info__input-section">
                <div className="personal-info__title">Message</div>
                <textarea
                  placeholder="Hi! i’d like to ask about"
                  className="personal-info__textarea"
                />
              </div>
              <button className="personal-info__submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
