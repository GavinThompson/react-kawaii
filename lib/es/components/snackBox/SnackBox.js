import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

var SnackBox = function SnackBox(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return React.createElement(Wrapper, {
    className: className
  }, React.createElement("svg", {
    width: size,
    height: size * 1.2,
    viewBox: "30 -20 130 230",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("g", {
    id: "kawaii-snack-box"
  }, React.createElement("g", {
    id: "kawaii-snack-box__body",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: paths.shape,
    id: "kawaii-snack-box__shape",
    fill: color,
    fillRule: "nonzero"
  }), React.createElement("path", {
    d: paths.label,
    id: "kawaii-snack-bag__label",
    stroke: "#F7FEFF",
    strokeWidth: "70",
    strokeLinecap: "square"
  }), React.createElement("path", {
    d: paths.shadow,
    id: "kawaii-snack-box__shadow",
    fill: "#000000",
    fillRule: "nonzero",
    opacity: "0.1"
  }), React.createElement("path", {
    d: paths.stripe,
    id: "kawaii-snack-box__stripe",
    stroke: "#979797",
    fill: "#000000",
    fillRule: "nonzero",
    opacity: "0.97"
  })), React.createElement(Face, {
    mood: mood,
    transform: "translate(61 78)",
    uniqueId: getUniqueId()
  }))));
};

SnackBox.propTypes = {
  /**
   * Size of the width
   */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: PropTypes.string
};
SnackBox.defaultProps = {
  size: 200,
  mood: 'lovestruck',
  color: '#277DBB'
};
export default SnackBox; //