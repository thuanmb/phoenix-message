import React, { PropTypes } from 'react';
import './message-style';

const Message = ({ editing }) => (
  <div className={`message bg-grey-3 text-white scrollable-y p-t-20 p-b-20 ${editing ? 'message--editing' : ''}`}>
    <h3 className="tlt text-deeppink">
      <ul className="texts no-list-style">
        <li data-in-effect="tada" className="m-t-20">Finally tomorrow I can meet you. I miss you so much</li>
        <li data-in-effect="tada" className="m-t-20">Tonight I'm upset and nearly cry with my mom. I will tell you know by tomorrow</li>
        <li data-in-effect="tada" className="m-t-20">Message me and go to sleep soon, honey.</li>
        <li data-in-effect="tada" className="m-t-20">I love you!</li>
      </ul>
    </h3>

    <img alt="Message" className="m-t-20 b-rad-7 gallery-image" src={'https://scontent.fsgn4-1.fna.fbcdn.net/v/t35.0-12/15224720_672815266225294_132304232_o.jpg?oh=8a897c8615f57467626e397116510b2c&oe=58D6FBCA'} width="100%" />

    <div className="message__video-container">
      <iframe className="full-screen" src="https://www.youtube.com/embed/t7vSqJ_2n20" frameBorder="0" allowFullScreen />
    </div>
  </div>
);

Message.propTypes = {
  editing: PropTypes.bool,
};

export default Message;
