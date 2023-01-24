import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

import Colors from "../../constants/colors";

const PoppersDropdown = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <MultipleSelectList
      boxStyles={styles.input}
      setSelected={(val) => setSelected(val)}
      data={data}
      save="value"
      onSelect={() => {}}
      label="Select Poppers"
    />
  );
};

export default PoppersDropdown;

const styles = StyleSheet.create({
  input: {
    width: "85%",
    borderColor: Colors.accent500,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
