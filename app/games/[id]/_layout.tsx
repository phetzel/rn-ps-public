import { Tabs } from 'expo-router';
import React from 'react';

import { FileText } from '~/components/icons/FileText';
import { History } from '~/components/icons/History';
import { LayoutDashboard } from '~/components/icons/LayoutDashboard';

export const unstable_settings = {
  initialRouteName: 'current',
};

export default function GameTabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="state"
        options={{
          title: 'Status',
          tabBarIcon: ({ color, size }) => <LayoutDashboard color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="current"
        options={{
          title: 'Current Month',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FileText color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="archive"
        options={{
          title: 'Archive',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <History color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
