import { useState, useEffect } from "react";
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from "react-native";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  searchBar:{
    backgroundColor: "white",
    margin: 5
  }
});

const SearchBar = ({setFilter}) => {
  const [value, setValue] = useState('');
  const [debouncedValue] = useDebounce(value, 500);

  useEffect(() => {
    setFilter(debouncedValue);
  }, [debouncedValue, setFilter]);

  const handleInput = (text) => {
    setValue(text);
  };

  return (
    <Searchbar 
    placeholder="Search repositories"
    value={value}
    onChangeText={handleInput}
    style={styles.searchBar}
    />
  );
};

export default SearchBar;