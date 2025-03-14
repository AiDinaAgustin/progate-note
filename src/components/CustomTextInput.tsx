import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

interface CustomTextInputProps {
  text: string;
  onChange: (text: string) => void;
  label: string;
  placeholder: string;
  multiline?: boolean;
  numberOfLines?: number;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "#DDD",
      padding: 10,
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
};

export default CustomTextInput;
