import * as React from "react";
import { View, Image } from "react-native";
import { Text } from "~/components/ui/text";

export function HomeHeader() {
  return (
    <View className="w-full items-center justify-center mt-10">
      <Image
        source={require("../../../assets/images/splash-icon.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <Text className="text-5xl font-bold mt-4">Press Office</Text>
      <Text className="text-2xl text-muted-foreground">Command the Podium</Text>
    </View>
  );
}
