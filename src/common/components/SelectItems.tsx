import { FC, ReactNode } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Text, Surface, TouchableRipple, MD3Colors } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

interface Props {
  onPress: () => void;
  title: string;
  selectedItemName?: string;
  icon?: ReactNode | string;
  hasNestedItems?: boolean;
  itemName?: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  selectionDetailsContainerStyle?: StyleProp<ViewStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  selectedItemTextStyle?: StyleProp<TextStyle>;
}

const SelectItems: FC<Props> = ({
  onPress,
  title,
  selectedItemName,
  icon,
  hasNestedItems = false,
  itemName,
  mainContainerStyle,
  titleContainerStyle,
  selectionDetailsContainerStyle,
  titleTextStyle,
  selectedItemTextStyle,
}) => {
  return (
    <TouchableRipple onPress={onPress}>
      <Surface style={[styles.mainContainer, mainContainerStyle]}>
        <View style={[styles.titleContainer, titleContainerStyle]}>
          {typeof icon === "string" ? <Text>{icon}</Text> : icon}
          <Text style={titleTextStyle} variant="titleMedium">
            {title}
          </Text>
        </View>
        {hasNestedItems && (
          <View
            style={[
              styles.selectionDetailsContainer,
              selectionDetailsContainerStyle,
            ]}
          >
            <Text
              style={[styles.selectedItemText, selectedItemTextStyle]}
              variant="labelLarge"
            >
              {selectedItemName || itemName || null}
            </Text>
            <MaterialIcon
              name="chevron-right"
              size={20}
              color={MD3Colors.secondary60}
            />
          </View>
        )}
      </Surface>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selectionDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selectedItemText: {
    color: MD3Colors.secondary60,
    marginRight: 4,
  },
});

export default SelectItems;
