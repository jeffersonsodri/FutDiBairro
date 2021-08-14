import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #00ff9a;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
/**
  Container,
  InputArea,
  SignInput,
  CustomButton,
  CustomButtonText,
  SignMessageText,
  SignMessageButton,
  SignMessageButtonBold,
 */
export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #00bd6d;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 20px;
  color: #8fd;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;
export const SignMessageButtonBold = styled.Text`
  font-size: 16px;
  color: #00856d;
  font-weight: bold;
`;
export const SignMessageText = styled.Text`
  font-size: 16px;
  color: #00856d;
  margin-top: 15px;
`;
