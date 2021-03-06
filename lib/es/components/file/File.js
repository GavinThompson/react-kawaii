import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

var File = function File(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return React.createElement(Wrapper, {
    className: className
  }, React.createElement("svg", {
    width: size * 1.38,
    height: size,
    viewBox: "0 0 198 153",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("g", {
    id: "kawaii-file"
  }, React.createElement("g", {
    id: "kawaii-file__body",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: paths.shape,
    id: "kawaii-file__shape",
    fill: color
  }), React.createElement("path", {
    d: paths.shadow,
    id: "kawaii-file__shadow",
    fill: "#000",
    opacity: ".1"
  }), React.createElement("path", {
    id: "kawaii-file__fold",
    fill: "#000",
    opacity: ".2",
    d: "M70.1445,0 L70.1445,22.641 C70.1445,29.387 75.6135,34.855 82.3595,34.855 L104.9995,34.855 L70.1445,0"
  })), React.createElement(Face, {
    mood: mood,
    transform: "translate(21 73)",
    uniqueId: getUniqueId()
  }))));
};

File.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: PropTypes.string
};
File.defaultProps = {
  size: 200,
  mood: 'ko',
  color: '#83D1FB'
};
export default File;