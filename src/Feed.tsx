import { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import Styles from "./Styles";

const Feed = ({ navigation }: any) => {
  const [countriesData, setCountriesData] = useState([]);

  const getCountries = async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/countries", {
      method: "GET",
    });
    var json = await res.json();
    setCountriesData(json);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const countriesEntries = countriesData.map((country, i) => {
    return (
      <TouchableOpacity key={`Country${i}`}>
        <View style={Styles.row}>
          <Image style={Styles.image_mini} source={{uri: country.countryInfo.flag}} />
          <Text
            style={Styles.country}
            onPress={() => navigation.navigate("CountryDetail", country)}
          >
            {country.country}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={Styles.cointainer}>
      <View style={Styles.centered}>
        <Text style={Styles.title}>Países</Text>
      </View>
      <ScrollView>{countriesEntries}</ScrollView>
    </View>
  );
};

export default Feed;
