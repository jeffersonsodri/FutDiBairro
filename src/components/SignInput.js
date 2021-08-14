import React from "react";

import styled from "styled-components/native";

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #00bd6d;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;

export default ({ IconSvg, placeholder, value, onChangeText, passoword }) => {
  return (
    <InputArea>
      <IconSvg width={24} height={24} fill="#00856d" />
      <Input
        placeholder={placeholder}
        require={true}
        placeholderTextColor="#00856d"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={passoword}
        
      />
    </InputArea>
  );
};
