import React from 'react';
import './message-style';

const Message = () => (
  <div className="message bg-grey-3 text-white">
    <h1 className="tlt text-deeppink">
      <ul className="texts">
        <li data-in-effect="tada">A sad day for me...</li>
        <li data-in-effect="tada">Today, you go to school at noon then go to work... you must have a tired day.</li>
        <li data-in-effect="tada">When you come home, take a rest, then</li>
        <li data-in-effect="tada">Message me and go to sleep soon, honey.</li>
        <li data-in-effect="tada">Wo ai ni!!! &hearts;&hearts;&hearts;!</li>
      </ul>
    </h1>
    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/t7vSqJ_2n20" frameBorder="0" allowFullscreen />
    <image className="b-rad-7" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t35.0-12/15878140_696187497221404_603225035_o.jpg?oh=4ed62ebb987aa6ee01f618273d041688&oe=58D1F076" width="100%" />
  </div>
);

export default Message;
