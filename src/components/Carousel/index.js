/**
 * Created by lichenguang on 2017/9/21.
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCarousel from './ReactCarousel';
import { style } from '../';

const props = {
  color: PropTypes.oneOf(Object.keys(style.color)),
  deg: PropTypes.number,
  dots: PropTypes.bool,
  autoplay: PropTypes.bool,
  infinite: PropTypes.bool,
};

const Carousel = ({
  color = 'white',
  deg,
  dots = false,
  autoplay = false,
  infinite = false,
  ...other
}) => {
  let Carousel = styled(ReactCarousel)`
    background: ${style.color[color]};
    a {
      display: inline-block;
      width: 100%;
      img {
        width: 100%;
        vertical-align: top;
      }
    }
  `;
  if (deg) {
    Carousel = Carousel.extend`background: ${style.gradient[color](deg)};`;
  }

  return (
    <Carousel
      {...other}
      dots={dots}
      autoplay={autoplay}
      wrapAround={infinite}
    />
  );
};

Carousel.propTypes = props;

export default Carousel;