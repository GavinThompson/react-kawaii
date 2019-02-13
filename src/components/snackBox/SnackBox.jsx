import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const SnackBox = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <svg
      width={size}
      height={size * 1.2}
      viewBox="60 0 120 230"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-snack-box">
        <g
          id="kawaii-snack-box__body"
          fillRule="nonzero"
          transform="translate(27.000000, 26.000000)"
        >
          <path
            d={paths.shape}
            id="kawaii-snack-box__shape"
            fill={color}
            fill-rule="nonzero"
          />
          <path
            d={paths.label}
            id="kawaii-snack-bag__label"
            stroke="#F7FEFF"
            stroke-width="70"
            stroke-linecap="square"
          />
          <path
            d={paths.shadow}
            id="kawaii-snack-box__shadow"
            fill="#000000"
            fill-rule="nonzero"
            opacity="0.1"
          />
          <path
            d={paths.stripe}
            id="kawaii-snack-box__stripe"
            stroke="#979797"
            fill="#000000"
            fill-rule="nonzero"
            opacity="0.97312128"
          />
        </g>
        <Face
          mood={mood}
          transform="translate(87 101)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
);

SnackBox.propTypes = {
  /**
   * Size of the width
   */
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

SnackBox.defaultProps = {
  size: 200,
  mood: 'ko',
  color: '#277DBB'
};

export default SnackBox;
//
