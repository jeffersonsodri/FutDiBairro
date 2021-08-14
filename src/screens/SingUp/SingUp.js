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
import PersonIcon from "../../assets/person.svg";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passowordField, setPassowordField] = useState("");
  const [nameField, setNameField] = useState("");

  const handleMessageBottomClick = () => {
    navigation.reset({
      routes: [{ name: "SingIn" }],
    });
  };

  const hangleSignClick = () => {};

  return (
    <Container>
      <Image style={styles.imagem} source={require("../../assets/bola.png")} />
      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite Nome completo"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />
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
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageText>Já possui uma conta?</SignMessageText>
      <SignMessageButton>
        <SignMessageButtonBold onPress={handleMessageBottomClick}>
          Faça o Login
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
