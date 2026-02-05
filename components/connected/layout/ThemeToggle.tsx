import { ThemeToggleView } from '~/components/shared/layout/ThemeToggleView';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/hooks/useColorScheme';
import { setAndroidNavigationBar } from '~/lib/infra/android-navigation-bar';

export function ThemeToggle() {
  const { isDarkColorScheme, colorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newTheme = isDarkColorScheme ? 'light' : 'dark';
    setAndroidNavigationBar({
      theme: newTheme,
      backgroundColor: newTheme === 'dark' ? NAV_THEME.dark.background : NAV_THEME.light.background,
    });
  }

  return (
    <ThemeToggleView
      isDarkColorScheme={isDarkColorScheme}
      colorScheme={colorScheme}
      onToggle={toggleColorScheme}
    />
  );
}
