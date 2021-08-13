import React, { useEffect } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import ChuteNaBola from '../../assets/chutandoBola.svg';


export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("SingIn");
      } else {
        navigation.navigate("SingIn");
      }
    };

    checkToken();
  }, []);

  return (
    <Container>
      {/* <Image
        style={styles.imagem}
        source={require("../../assets/futebol-flamejante.png")}
      /> */}
      <ChuteNaBola width="100%" height="160"/>
      <Text>FutDuBairro</Text>
      <LoadingIcon size="large" color="#FFFFFF"></LoadingIcon>
    </Container>
  );
};

const styles = StyleSheet.create({
  imagem: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
  },
});
