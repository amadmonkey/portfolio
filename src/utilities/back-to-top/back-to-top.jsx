import React from 'react';

import { ReactComponent as Up } from "../../img/up.svg"; 
import './back-to-top.scss';


const BackToTop = () => (
  <div className="back-to-top">
    <button id="_BACK_TO_TOP" className="_HERO hidden">
      <Up></Up>
      <span>Back to top</span>
    </button>
  </div>
);

BackToTop.propTypes = {};

BackToTop.defaultProps = {};

export default BackToTop;
