import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const MedicalHeart = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 239 192"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path d={paths.heart} id="path-1" />
      </defs>
      <g
        id="Kawaii-Builder"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="kawaii-heart" transform="translate(0.000000, -26.000000)">
          <g
            id="kawaii-heart-body"
            transform="translate(110.500000, 120.000000) scale(-1, 1) translate(-110.500000, -120.000000) "
          >
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-2)"
              xlinkHref="#path-1"
            />
            <use fill={color} fill-rule="evenodd" xlinkHref="#path-1" />
          </g>
          <path
            d={paths.heartShadow}
            id="kawaii-heart-shadow"
            fill="#121212"
            opacity="0.1"
          />
          <path
            d={paths.cross}
            id="kawaii-heart-cross"
            stroke="#FFFFFF"
            strokeWidth="8"
            fill="#FF6F6F"
          />
          <path
            d={paths.crossShadow}
            id="kawaii-heart-cross-shadow"
            fill="#121212"
            opacity="0.1"
          />
          <Face
            mood={mood}
            transform="translate(79.000000, 92.000000)"
            uniqueId={getUniqueId()}
          />
        </g>
      </g>
    </svg>
  </Wrapper>
);

MedicalHeart.propTypes = {
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

MedicalHeart.defaultProps = {
  size: 300,
  mood: 'blissful',
  color: '#FF6F6F'
};

export default MedicalHeart;
