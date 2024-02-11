import { StatusBar } from "expo-status-bar";
import { Text, View , TextInput, TouchableOpacity} from "react-native";

export default function Register() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-semibold">Welcome Back</Text>
      <View className="w-full p-10 space-y-5">
      <TextInput placeholder="Full Names" className="w-full p-2 rounded-md border-2 border-blue-400"/>
      <TextInput placeholder="Email address" className="w-full p-2 rounded-md border-2 border-blue-400"/>
      <TextInput placeholder="Username" className="w-full p-2 rounded-md border-2 border-blue-400"/>
      <TextInput placeholder="Password" className="w-full p-2 rounded-md border-2 border-blue-400"/>
 
      <TouchableOpacity className="w-full text-center bg-blue-700 p-2.5 mt-4 text-white rounded-xl">
        <Text className="text-white text-lg text-center">Sign in</Text>
      </TouchableOpacity>
      </View> 
   
    </View>
  );
}
