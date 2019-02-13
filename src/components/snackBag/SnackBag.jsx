import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const SnackBag = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 210"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-snack-bag">
        <g id="kawaii-snack-bag__body" fillRule="nonzero">
          <g>
            <path
              d={paths.shape}
              id="kawaii-snack-bag__shape"
              fill={color}
              fillRule="nonzero"
              transform="translate(89.000000, 103.000000) rotate(-90.000000) translate(-89.000000, -103.000000) "
            />
            <path
              d={paths.label}
              id="kawaii-snack-bag__label"
              stroke="#F7FEFF"
              strokeWidth="70"
              strokeLinecap="square"
            />
            <rect
              id="kawaii-snack-bag__riffle-border2"
              fill="#555D67"
              opacity="0.4"
              x="2"
              y="15"
              width="173"
              height="2"
            />
            <rect
              id="kawaii-snack-bag__riffle-border"
              fill="#555D67"
              opacity="0.4"
              x="2"
              y="190"
              width="173"
              height="2"
            />
            <path
              d={paths.bottomRiffle}
              id="kawaii-snack-bag__bottom-riffle"
              fill="#FFFFFF"
              fillRule="nonzero"
              opacity="0.6"
            />
            <path
              d={paths.topRiffle}
              id="kawaii-snack-bag__top-riffle"
              fill="#FFFFFF"
              fillRule="nonzero"
              opacity="0.6"
              transform="translate(89.000000, 7.500000) rotate(-180.000000) translate(-89.000000, -7.500000)"
            />
            <path
              d={paths.shadow}
              id="kawaii-snack-bag__shadow"
              fill="#121212"
              fillRule="nonzero"
              opacity="0.1"
            />
          </g>
        </g>
        <Face
          mood={mood}
          transform="translate(58 90)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
);

SnackBag.propTypes = {
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

SnackBag.defaultProps = {
  size: 200,
  mood: 'happy',
  color: '#DA6F0A'
};

export default SnackBag;
//
