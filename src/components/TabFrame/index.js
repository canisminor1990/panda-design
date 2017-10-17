/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 选项夹 导航
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, View } from 'pand';
import classnames from 'classnames';
import styled, { css, ThemeProvider } from 'styled-components';
import { style } from '../';
import { TabContent } from './TabContent';

// 基本配置
const singleColorFn = color => style.color[color];
const gradientColorFn = (color, deg) => style.gradient[color](deg);
const singleColor = singleColorFn('orange');
const gradientColor = gradientColorFn('orange', -45);
// icon模式样式
const iconStyleSheet = css`
  flex-direction: column-reverse;
  padding: 2px 13.5px 0;
  font-size: 10px;
  font-weight: 400;
  height: 49px;
  .icon {
    height: 24px;
  }
`;
// ButtonGroup模式下 彩色（高亮）背景样式
const highlightStyleSheet = css`
  background: ${gradientColor};
  color: #fff;
  &.active {
    color: #fff;
  }
`;
// 基本样式
// 包裹tab的div
const TabWarpper = Tab.extend`
  position: relative;
  color: #bbbfc8;
  ${({ theme }) => (theme.hasIcon ? iconStyleSheet : '')};
  font-size: ${({ theme }) => (theme.buttonGroup && !theme.hasIcon ? '16px;' : '')};
  height: ${({ theme }) => (theme.buttonGroup ? '49px;' : '')};
  &.active {
    color: ${({ theme }) => (theme.activeColor ? theme.activeColor : singleColor)};
    .xmjkDoubleIcon span:nth-child(1) {
      background: ${gradientColor};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .xmjkDoubleIcon span:nth-child(2) {
      color: #fff;
      opacity: 0.5;
    }
  }
  ${({ theme }) => (theme.highlight ? highlightStyleSheet : '')};
`;
const BasicTab = (
  { index, title, icon, children, description, buttonGroup = false, highlight = false, ...other },
  { activeIndex }
) => {
  const hasIcon = icon && (icon.selected || icon.common);
  return (
    <ThemeProvider theme={{ buttonGroup, highlight, hasIcon }}>
      <TabWarpper
        index={index}
        className={description !== undefined ? 'description-tab' : ''}
        disable={description !== undefined}
        {...other}
      >
        <div className={'title'}>
          {title}
          {children}
        </div>
        {hasIcon && (
          <div className={'icon'}>
            {activeIndex === index && (icon.selected || icon.common)}
            {activeIndex !== index && icon.common}
          </div>
        )}
        {description !== undefined && <div className={'description'}>{description}</div>}
      </TabWarpper>
    </ThemeProvider>
  );
};
// tab框架 包含 titles 和 contents
const BasicTabFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => (theme.tabsPosition === 'bottom' ? 'flex-direction: column-reverse;' : '')};
`;
const BasicTabTitles = styled(Tabs)`
  padding: ${({ theme }) => (theme.buttonGroup ? '0 !important' : '')};
  box-shadow: 0 ${({ theme }) => (theme.tabsPosition === 'bottom' ? '-' : '')}2px 4px 0
    rgba(0, 0, 0, 0.05);
  &.length-two {
    padding: 0 80px;
  }
  &.length-three {
    padding: 0 30px;
  }
  &.confirm {
    .description-tab {
      .title,
      .icon,
      .description {
        position: absolute;
      }
      .title {
        top: 9px;
        left: 16px;
      }
      .icon {
        top: 13px;
        right: 16px;
      }
      .description {
        top: 26px;
        left: 16px;
      }
    }
    & .tab:nth-child(2) {
      width: 120px;
      flex-grow: 0;
    }
  }
`;

// frame正文
class TabFrame extends React.Component {
  static propTypes = {
    tabsData: PropTypes.array,
    buttonGroup: PropTypes.bool,
    activeIndex: PropTypes.number,
    tabsPosition: PropTypes.oneOfType([PropTypes.oneOf(['top', 'bottom'])]),
    activeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };
  static defaultPorps = {
    tabsData: [],
    buttonGroup: false,
    activeIndex: 0,
    tabsPosition: 'top',
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || 0,
    };
  }

  getChildContext() {
    const t = this;
    return {
      handleSync(index) {
        t.setState({ activeIndex: index });
      },
      activeIndex: t.state.activeIndex,
    };
  }

  render() {
    let {
      tabsData,
      buttonGroup,
      tabsPosition,
      activeColor,
      className,
      confirm,
      ...other
    } = this.props;
    const { activeIndex } = this.state;
    let extraClass = '';
    if (tabsData.length === 2) {
      extraClass = 'length-two';
    } else if (tabsData.length === 3) {
      extraClass = 'length-three';
    }
    if (confirm) {
      extraClass = 'confirm';
      buttonGroup = true;
      tabsPosition = tabsPosition || 'bottom';
    }
    return (
      <ThemeProvider theme={{ tabsPosition, buttonGroup }}>
        <BasicTabFrame className={'tab-frame'}>
          <BasicTabTitles
            activeIndex={activeIndex}
            activeColor={activeColor}
            className={classnames('tabs', className, extraClass)}
            {...other}
          >
            {tabsData.map((tabData, index) => {
              // 排除content字段
              const { content, tab, ...otherData } = tabData;
              if (tab) {
                let { title, description, ...otherData } = tab;
                return (
                  <BasicTab
                    key={index}
                    index={index}
                    description={description}
                    buttonGroup={buttonGroup}
                    {...otherData}
                  >
                    {title}
                  </BasicTab>
                );
              }
            })}
          </BasicTabTitles>
          <div className={'tab-contents'}>
            {tabsData.map((tabData, index) => {
              const { content } = tabData;
              return (
                <TabContent key={index} index={index}>
                  {content}
                </TabContent>
              );
            })}
          </div>
        </BasicTabFrame>
      </ThemeProvider>
    );
  }
}

BasicTab.contextTypes = {
  activeIndex: PropTypes.number,
};
TabFrame.childContextTypes = {
  handleSync: PropTypes.func,
  activeIndex: PropTypes.number,
};
export { TabFrame };