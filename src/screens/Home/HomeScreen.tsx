import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { NavigationOnlyProps } from "../../common/interfaces";
import Card from "../../common/components/Card";
import { width } from "../../utils/constants";

const HomeScreen: FC<NavigationOnlyProps> = ({ navigation }) => {
  const accounts = useAppSelector((state) => state.accounts);

  const handleAccountPress = () => {
    navigation.navigate("Transactions");
  };

  const handleAddAccount = () => {
    navigation.navigate("AddAccountScreen");
  };

  return (
    <View style={styles.container}>
      {Object.values(accounts).map((account) => (
        <Card
          key={account.id}
          onPress={handleAccountPress}
          balance={account.accountBalance}
          name={account.name}
          addAccount={false}
        />
      ))}
      <Card onPress={handleAddAccount} addAccount={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: width / 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default HomeScreen;
