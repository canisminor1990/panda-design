import React from 'react';
import { View, Input, WhiteSpace, Icon } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>输入框</WhiteSpace>
      <WhiteSpace>small（默认）</WhiteSpace>
      <Input
        placeholder="请输入手机号"
        onChange={e => {
          console.log(e.target.value);
        }}
      />
      <WhiteSpace>large</WhiteSpace>
      <Input
        placeholder="请输入金额"
        type="large"
        right={
          <div
            onClick={() => {
              console.log('dianji');
            }}
          >
            全部转出
          </div>
        }
        left={<Icon color="#666666" size={24} type="Money" />}
      />
      <WhiteSpace>square（应配合键盘使用）</WhiteSpace>
      <Input type="square" value="23248" />
    </View>
  );
};
