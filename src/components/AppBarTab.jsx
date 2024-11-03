import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../themes/theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  item: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
    color: theme.colors.white,
    padding: 5,
  }
});

const AppBarTab = ({header, linkTo}) => {
  return (
    <Pressable>
      <Link to={linkTo}>
        <Text style={styles.item}>{header}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;