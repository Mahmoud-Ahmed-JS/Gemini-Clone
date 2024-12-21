import React from 'react';
import './main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt='' />
      </div>
      <div className='main-container'>
        <div className='greet'>
          <p>
            <span>Hello, Mahmoud.</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div className='cards'>
          <div className='card'>
            <p>Suggest Beatiful places to see on an upcoming road trips</p>
            <img src={assets.compass_icon} alt='' />
          </div>
          <div className='card'>
            <p>Breifly summarize this concept : Urban Planning</p>
            <img src={assets.bulb_icon} alt='' />
          </div>
          <div className='card'>
            <p>brainStorm teams bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt='' />
          </div>
          <div className='card'>
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
