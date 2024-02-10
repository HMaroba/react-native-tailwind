import { StatusBar } from "expo-status-bar";
import { Text, View , Button, TextInput, TouchableOpacity} from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl">Open up App.js to start working on your app!</Text>
      <View className="w-full p-10">
      <TextInput placeholder="Username" className="w-full p-2 rounded-md border-2 border-blue-400"/>
      <TouchableOpacity className="w-full text-center bg-blue-700 p-3 mt-4 text-white rounded-2xl">
        <Text className="text-white text-lg text-center">Sign in</Text>
      </TouchableOpacity>
      </View> 
   
    </View>
  );
}
