import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TextInput, TouchableOpacity } from "react-native";

type Props = {
  labelName: string;
  placeholder: string;
  type: any;
};

export default function CustomInput({ labelName, placeholder, type }: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={type}
      className="w-full p-2 rounded-md border-2 border-blue-400"
    />
  );
}
