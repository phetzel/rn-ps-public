import React from "react";
import { Tabs, useRouter } from "expo-router";

import { LayoutDashboard } from "~/lib/icons/LayoutDashboard";
import { FileText } from "~/lib/icons/FileText";
import { History } from "~/lib/icons/History";

import { HeaderBackIcon } from "~/components/shared/layout/HeaderBackIcon";

export default function GameTabLayout() {
  const router = useRouter();

  const handleGoBack = () => {
    router.navigate("/games");
  };

  const handleGoToCurrent = () => {
    router.replace("./current");
  };

  return (
    <Tabs>
      <Tabs.Screen
        name="state"
        options={{
          title: "Status",
          headerLeft: () => <HeaderBackIcon onPress={handleGoToCurrent} />,
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboard color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="current"
        options={{
          title: "Current Month",
          headerLeft: () => <HeaderBackIcon onPress={handleGoBack} />,
          tabBarIcon: ({ color, size }) => (
            <FileText color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="archive"
        options={{
          title: "Archive",
          headerLeft: () => <HeaderBackIcon onPress={handleGoToCurrent} />,
          tabBarIcon: ({ color, size }) => (
            <History color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
