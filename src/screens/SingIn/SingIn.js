import React from "react";

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageText,
  SignMessageButton,
  SignMessageButtonBold,
} from "./styles";
import { Image, StyleSheet } from "react-native";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../assets/email.svg"
import LockIcon from "../../assets/lock.svg"
import { useNavigation } from "@react-navigation/native";

export default () => {

  const navigation = useNavigation(); 

  return (
    <Container>
      <Image style={styles.imagem} source={require("../../assets/bola.png")} />
      <InputArea>
        <SignInput IconSvg={EmailIcon} />
        <SignInput IconSvg={LockIcon} />

        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageText>Ainda não possui uma conta?</SignMessageText>
      <SignMessageButton>
        <SignMessageButtonBold onPress={() => navigation.navigate("SingUp")}>
          Cadastre-se agora
        </SignMessageButtonBold>
      </SignMessageButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  imagem: {
    width: 160,
    height: 160,
    marginTop: -110,

  },
});
