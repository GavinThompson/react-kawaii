import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const Chocolate = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    {/* width="104px"       height="200px"*/}
    <svg
      width={size * 0.52}
      height={size}
      viewBox="0 0 100 205"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-chocolate">
        <g id="kawaii-choco__body" fillRule="nonzero">
          <path
            d={paths.bar}
            id="kawaii-choco__bar-shape"
            fill="#501F15"
            transform="translate(53.000000, 100.000000) rotate(-180.000000) translate(-53.000000, -100.000000) "
          />
          <path
            d={paths.wrapper}
            id="kawaii-choco__wrapper-shape"
            fill={color}
          />
          <path
            d={paths.fold}
            id="kawaii-choco__fold"
            fillOpacity="0.9"
            fill="#E7F8F5"
          />
          <path
            d={paths.shadow}
            id="kawaii-choco__shadow"
            fill="#000000"
            opacity="0.1"
          />
        </g>
        <Face
          mood={mood}
          transform="translate(20 81)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
);

Chocolate.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf([
    'sad',
    'shocked',
    'happy',
    'blissful',
    'lovestruck',
    'excited',
    'ko'
  ]),
  /**
   * Hex color
   */
  color: PropTypes.string
};

Chocolate.defaultProps = {
  size: 200,
  mood: 'blissful',
  color: '#F55482'
};

export default Chocolate;
