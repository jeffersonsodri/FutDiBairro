import React, { useEffect } from "react";
import { Text } from "react-native";
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
     
      <ChuteNaBola width="100%" height="160"/>
      <Text>FutDuBairro</Text>
      <LoadingIcon size="large" color="#FFFFFF"></LoadingIcon>
    </Container>
  );
};

