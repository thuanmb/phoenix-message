import React from 'react';
import Message from 'ComponentsPath/message/message';

import './editor-style';

const Editor = () => (
  <div className="editor">
    <ul className="bg-cyan text-center text-white">
      <li className="inline-block p-20 b-white-r b-white-l min-w-120 btn-action">
        <i className="block material-icons">title</i>
        <small>Add Text</small>
      </li>

      <li className="inline-block p-20 b-white-r min-w-120 btn-action">
        <i className="block material-icons">photo</i>
        <small>Add Photo</small>
      </li>

      <li className="inline-block p-20 b-white-r min-w-120 btn-action">
        <i className="block material-icons">ondemand_video</i>
        <small>Add Youtube</small>
      </li>
    </ul>
    <Message />
  </div>
);

export default Editor;
