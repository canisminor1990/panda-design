import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../style_index';

const props = {
  size: PropTypes.number,
  transparent: PropTypes.bool,
};
const WhiteSpack = ({ size = 10, transparent = false, children, ...other }) => {
  let WhiteSpace = styled.div`
    color: ${style.color.textLight};
    width: 100%;
    background: ${transparent ? 'transparent' : style.color.bgPage};
  `;

  if (children) {
    WhiteSpace = WhiteSpace.extend`
      font-size: 14px;
      padding: ${children ? '10px 16px' : 0};
    `;
  } else {
    WhiteSpace = WhiteSpace.extend`height: ${size}px;`;
  }

  return <WhiteSpace {...other}>{children}</WhiteSpace>;
};

WhiteSpack.propTypes = props;

export { WhiteSpack };
