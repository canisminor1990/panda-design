import { Card, Icon, View, WhiteSpace } from 'pand';
import styled from 'styled-components';

const { Header } = Card;

export default () => {
  const Body = styled(Card.Body)`
    display: flex;
    flex-wrap: wrap;
  `;
  const Box = styled.div`
    max-width: 25%;
    width: 88px;
    height: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  `;
  return (
    <View>
      <WhiteSpace />
      <Card>
        <Header split>单色图标 16px</Header>
        <Body padding>
          {SingIcon['16'].map(type => (
            <Box key={type}>
              <Icon size={16} type={type} />
              <p>{type}</p>
            </Box>
          ))}
        </Body>
      </Card>
      <WhiteSpace />
      <Card>
        <Header split>单色图标 24px</Header>
        <Body padding>
          {SingIcon['24'].map(type => (
            <Box key={type}>
              <Icon size={24} type={type} />
              <p>{type}</p>
            </Box>
          ))}
        </Body>
      </Card>
      <WhiteSpace />
      <Card>
        <Header split>双色 24px</Header>
        <Body padding>
          {DoubleIcon['24'].map(type => (
            <Box key={type}>
              <Icon size={24} color={['#333', '#777']} type={type} double />
              <p>{type}</p>
            </Box>
          ))}
        </Body>
      </Card>
      <WhiteSpace />
      <Card>
        <Header split>双色 32px</Header>
        <Body padding>
          {DoubleIcon['32'].map(type => (
            <Box key={type}>
              <Icon size={32} color={['#333', '#777']} type={type} double />
              <p>{type}</p>
            </Box>
          ))}
        </Body>
      </Card>
      <WhiteSpace />
    </View>
  );
};

const SingIcon = {
  16: [
    'Rule',
    'Camera',
    'Remove',
    'Phone',
    'Safe',
    'Point',
    'Right',
    'Select',
    'Swift',
    'Vip',
    'Loading',
    'Confirm',
    'Square',
    'Note',
    'Gift',
    'News',
    'Fund',
    'Data',
    'Stock',
    'Tag',
    'Idea',
    'Message',
    'Trophy',
    'NoConfirm',
  ],
  24: [
    'StepDone',
    'StepNormal',
    'StepDoing',
    'StepWrong',
    'Back',
    'Fliter',
    'Bill',
    'Close',
    'Delete',
    'Money',
    'Sort',
    'News',
    'Keyboard',
    'Setting',
    'Service',
    'Acitve',
    'Normal',
    'Discover',
    'Coin',
    'Home',
    'My',
    'Note',
    'Yes',
  ],
};

const DoubleIcon = {
  24: [
    'ShopDiamond',
    'HomeActive',
    'DiscoverActive',
    'CoinActive',
    'MyActive',
    'Time',
    'Data',
    'User',
    'BaoGao',
    'GoldVip',
    'Bill',
    'GreenSafe',
    'Chart',
    'Deposit',
    'Game',
    'KeFu',
    'Heart',
    'Pay',
    'Qcode',
    'Pocket',
    'Question',
    'Vip',
    'WeChat',
    'ZhaiQuan',
    'Calc',
    'Fast',
    'HomeMoney',
    'HuoBao',
    'JieJieGao',
    'YuE',
    'ShouYi',
    'Gift',
    'Hand',
    'MoneyBag',
    'RedBag',
    'Coupons',
    'Add',
    'Event',
    'LogoXw',
  ],
  32: ['FanFanLe', 'Present', 'Invite', 'Safe'],
};
