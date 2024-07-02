import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CustomButtonProps {
  backgroundColor: string;
  color: string;
  text: string;
  onPress: () => void;
  fontSize?: number;
  width?: number | string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
}) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor,
      width,
      padding: 10,
    },
    buttonText: {
      fontSize,
      fontWeight: "700",
      color,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
