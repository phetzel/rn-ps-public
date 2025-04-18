import React from "react";
import { Tabs, useRouter } from "expo-router";

import { LayoutDashboard } from "~/lib/icons/LayoutDashboard";
import { FileText } from "~/lib/icons/FileText";
import { History } from "~/lib/icons/History";

import { HeaderBackIcon } from "~/components/HeaderBackIcon";

export default function GameTabLayout() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <HeaderBackIcon onPress={handleGoBack} />,
      }}
    >
      <Tabs.Screen
        name="state"
        options={{
          title: "Status",
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboard color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="current"
        options={{
          title: "Current Month",
          tabBarIcon: ({ color, size }) => (
            <FileText color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="archive"
        options={{
          title: "Archive",
          tabBarIcon: ({ color, size }) => (
            <History color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
