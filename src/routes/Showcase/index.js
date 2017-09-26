/**
 * Created by lichenguang on 2017/9/18.
 */
import { Card, View, WhiteSpace, Showcase } from 'pand';
import styled from 'styled-components';

let { Header, Body } = Card;

export default () => {
  Body = styled(Body)`
    > a {
      margin-bottom: 1rem;
    }
  `;

  return (
    <View>
      <WhiteSpace />
      <Card>
        <Header split>Showcase</Header>
        <Body padding>
          <Showcase
            title="125.28"
            desc="昨日收益（元）"
            button="资产结构"
            leftDesc="总资产（元）"
            leftTitle="542,682.14"
            rightDesc="累计收益（元）"
            rightTitle="21,776.20"
            backgroundColor="primary"
            deg={-225}
            backgroundText="JINKU"
          />
          <Showcase
            title="7.0"
            desc="年均回报率(%)"
            button="第293期"
            leftDesc="无持有期"
            leftTitle="随存随取"
            rightDesc="起转金额(元)"
            rightTitle="100.00"
            backgroundColor="red"
            deg={-225}
            backgroundText="HUOB"
          />
          <Showcase
            title="15,255.24"
            desc="持有资产(元)"
            button="Lv.1级"
            leftDesc="昨日收益(元)"
            leftTitle="3.20"
            rightDesc="累计收益(元)"
            rightTitle="176.32"
            backgroundColor="green"
            deg={-225}
            backgroundText="JIEJIE"
          />
          <Showcase
            title="15,255.24"
            desc="持有资产(元)"
            button="6月期"
            leftDesc="昨日收益(元)"
            leftTitle="3.20"
            rightDesc="累计收益(元)"
            rightTitle="176.32"
            backgroundColor="blue"
            deg={-225}
            backgroundText="DING"
          />
          <Showcase
            title="35,125.28"
            desc="持有总资产 (元)"
            titleColor="primary"
            leftDesc="昨日收益（元）"
            leftTitle="82.14"
            rightDesc="累计收益（元）"
            rightTitle="1,776.20"
          />
        </Body>
      </Card>
      <WhiteSpace />
    </View>
  );
};
