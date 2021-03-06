/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 这是演示页面，展示组件的功能
 */

import { Tabs, Tab, Badge, WhiteSpace, Card } from 'pand';
import React from 'react';
import './../../components/Modal/_modal.scss';

export default () => {
  class PageTab extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tabsDataA: [
          { title: '这是有点长的标题' },
          { title: '这是有点长的标题呢' },
          { title: '嗯嗯确实有点长呢' },
          { title: 'TITLE2' },
          { title: 'TITLE3' },
          { title: 'TITLE4' },
          { title: 'TITLE5' },
          { title: 'TITLE6' },
          { title: '哈哈哈哈哈哈果然很长啊' },
          { title: 'TITLE8' },
          { title: 'TITLE9' },
          { title: 'TITLE10' },
          { title: '有我长吗HIAHIAHIAHIAHIAHIAHIA～' },
        ],
        tabsDataB: [
          { title: 'TITLE1' },
          { title: 'TITLE2' },
          { title: 'TITLE3' },
          { title: 'TITLE4' },
        ],
        tabsDataC: [
          {
            title: (
              <div>
                TITLE1
                <Badge className={'corner'} type="text">
                  new
                </Badge>
              </div>
            ),
          },
          {
            title: (
              <div>
                TITLE2<Badge className={'corner dot'} type="dot" />
              </div>
            ),
          },
        ],
        tabsDataD: [
          {
            title: (
              <div>
                TITLE1
                <Badge className={'corner'} type="text">
                  new
                </Badge>
              </div>
            ),
          },
          {
            title: (
              <div>
                TITLE2<Badge>188</Badge>
              </div>
            ),
          },
          {
            title: (
              <div>
                TITLE3<Badge className={'corner dot'} type="dot" />
              </div>
            ),
          },
        ],
        activeIndexB: 2,
      };
    }

    render() {
      const { tabsDataA, tabsDataB, tabsDataC, tabsDataD, activeIndexB } = this.state;
      return (
        <div>
          <WhiteSpace>无数据时的样式</WhiteSpace>
          <Card>
            <Tabs />
          </Card>
          <WhiteSpace>有数据时的默认样式</WhiteSpace>
          <Card>
            <Tabs titles={tabsDataC} />
          </Card>
          <WhiteSpace />
          <Card>
            <Tabs
              titles={tabsDataD}
              linkBar
              onTabChange={i => {
                console.log('onTabChange');
                console.log(i);
              }}
            />
          </Card>
          <WhiteSpace />
          <Card>
            <Tabs titles={tabsDataA} linkBar />
          </Card>
          <WhiteSpace>定制 linkBar</WhiteSpace>
          <Card>
            <Tabs titles={tabsDataB} linkBar />
          </Card>
          <WhiteSpace>定制 activeColor</WhiteSpace>
          <Card>
            <Tabs titles={tabsDataB} activeColor={'orange'} />
          </Card>
          <WhiteSpace>定制 activeIndex</WhiteSpace>
          <Card>
            <Tabs titles={tabsDataB} activeIndex={activeIndexB} />
          </Card>
          <Card>
            <Tabs>
              <Tab index={0}>a</Tab>
              <Tab index={1}>b</Tab>
            </Tabs>
          </Card>
        </div>
      );
    }
  }

  return <PageTab />;
};
