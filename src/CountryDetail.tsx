import React from "react";
import { Text, View, Image } from "react-native";
import Styles from "./Styles";
const CountryDetail = ({ route }: any) => {
  const countryData = route.params;

  return (
    <View style={Styles.cointainer}>
      <View style={Styles.centered}>
        <Image
          style={Styles.flag}
          source={{ uri: countryData.countryInfo.flag }}
        />
        <Text style={Styles.title}>{countryData.country}</Text>
      </View>
      <View style={Styles.info}>
        <View style={Styles.fact}>
          <Text style={Styles.secondary}>Today cases: </Text>
          <Text>{countryData.todayCases}</Text>
        </View>
        <View style={Styles.fact}>
          <Text style={Styles.secondary}>Today deaths: </Text>
          <Text>{countryData.todayDeaths}</Text>
        </View>
      </View>
    </View>
  );
};

export default CountryDetail;
