import { FC, useState } from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import { NavigationOnlyProps } from "../common/interfaces";
import { useAppDispatch } from "../store/hooks";
import { useSignOutMutation } from "../store/apis/authApis";

const Settings: FC<NavigationOnlyProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [signOut, { isLoading, error }] = useSignOutMutation();

  const handleSignOut = async () => {
    await signOut();
    // if ("data" in result) {
    //   navigation.navigate("Home");
    // }
  };

  return (
    <View style={[styles.verticallySpaced, styles.mt20]}>
      <Button disabled={isLoading} onPress={handleSignOut}>
        Sign Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});

export default Settings;
