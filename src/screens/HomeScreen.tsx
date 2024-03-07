import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationOnlyProps } from "../typesAndInterfaces/interfaces";
import Card from "../components/Card";

const HomeScreen: FC<NavigationOnlyProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Transactions");
  };

  return (
    <View style={styles.container}>
      <Card onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
