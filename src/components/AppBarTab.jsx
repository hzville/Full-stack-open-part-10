import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../themes/theme";

const styles = StyleSheet.create({
  item: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
    color: theme.colors.white,
    padding: 5,
  }
});

const AppBarTab = ({header}) => {
  return (
    <Pressable>
      <Text style={styles.item}>{header}</Text>
    </Pressable>
  );
};

export default AppBarTab;