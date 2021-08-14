import React, { useState } from "react";

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
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passowordField, setPassowordField] = useState("");

  const handleMessageBottomClick = () => {
    navigation.reset({
      routes: [{ name: "SingUp" }],
    });
  }

  const hangleSignClick = () => {
    
  }

  return (
    <Container>
      <Image style={styles.imagem} source={require("../../assets/bola.png")} />
      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu Email"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passowordField}
          onChangeText={(t) => setPassowordField(t)}
          passoword={true}
        />

        <CustomButton onPress={hangleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageText>Ainda não possui uma conta?</SignMessageText>
      <SignMessageButton>
        <SignMessageButtonBold onPress={handleMessageBottomClick}>
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
