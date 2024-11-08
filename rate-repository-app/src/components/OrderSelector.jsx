import { useState } from "react";
import { Picker } from '@react-native-picker/picker';


const OrderSelector = ({ setOrder }) => {
  const [selection, setSelection] = useState();

  return (
    <Picker
      selectedValue={selection}
      onValueChange={(itemValue) => {
        setOrder(itemValue);
        setSelection(itemValue);
        }
      }>
      <Picker.Item label="Latest repositories" value="latests" />
      <Picker.Item label="Highest rated repositories" value="high" />
      <Picker.Item label="Lowest rated repositories" value="low" />
    </Picker>
  );
};

export default OrderSelector;