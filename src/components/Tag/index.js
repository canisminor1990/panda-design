import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'pand';
import { style } from '../';

const TAG_TYPE = {
  BIG: 'BIG',
  FILTER: 'FILTER',
  LARGE: 'LARGE',
  MIDDLE: 'MIDDLE',
  SMALL: 'SMALL',
};

const props = {
  backgroundColor: PropTypes.oneOf(Object.keys(style.color)),
  deg: PropTypes.number,
  textColor: PropTypes.oneOf(Object.keys(style.color)),
  type: PropTypes.oneOf(Object.keys(TAG_TYPE)),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  img: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(style.color)),
};

const Tag = ({
  children = '标题',
  type = 'BIG',
  backgroundColor = 'white',
  textColor = 'white',
  img,
  color,
  deg,
  ...other
}) => {
  let imgIcon = null;

  let Tag = styled.div`
    background: ${style.color[backgroundColor]};
    text-align: center;
    display: inline-block;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    color: ${style.color[textColor]};
  `;
  if (deg) {
    Tag = Tag.extend`background: ${style.gradient[backgroundColor](deg)};`;
  }

  if (type === TAG_TYPE.BIG) {
    Tag = Tag.extend`
      border-radius: 1.62px;
      font-size: 10px;
      letter-spacing: 0.38px;
      height: 18px;
      padding: 2px 4.5px;
    `;
  } else if (type === TAG_TYPE.FILTER) {
    Tag = Tag.extend`
      height: 38px;
      box-shadow: 0 2px 6px 0 #e3e3e3;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      padding: 10px 28px 10px;
    `;
  } else if (type === TAG_TYPE.LARGE) {
    Tag = Tag.extend`
      box-shadow: 0 2px 6px 0 #e3e3e3;
      font-size: 14px;
      line-height: 16px;
      padding: 11px 16px;
      height: 38px;
      > span {
        margin-right: 6px;
      }
    `;
    if (img) {
      imgIcon = <Icon color={color} type={img} size={16} />;
    }
  } else if (type === TAG_TYPE.MIDDLE) {
    Tag = Tag.extend`
      padding: 6px 10px;
      font-size: 12px;
      height: 24px;
      border-radius: 2px;
    `;
  } else if (type === TAG_TYPE.SMALL) {
    Tag = Tag.extend`
      padding: 1px 5px;
      font-size: 8.91px;
      letter-spacing: 0.34px;
      border-radius: 1.62px;
      min-width: 34px;
      height: 14px;
      > span {
        width: inherit;
        height: inherit;
        margin-right: 3.4px;
        line-height: inherit;
        font-size: 8px;
      }
    `;
    // TODO 小尺寸icon怎么写，icon需要渐变
    if (img) {
      imgIcon = <Icon color={color} type={img} size={24} />;
    }
  }
  return (
    <Tag {...other}>
      {imgIcon}
      {children}
    </Tag>
  );
};

Tag.propTypes = props;

export { Tag, TAG_TYPE };