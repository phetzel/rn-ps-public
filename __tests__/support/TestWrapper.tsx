import type { Database } from '@nozbe/watermelondb';
import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider';
import type { ReactNode } from 'react';
import React from 'react';

interface TestWrapperProps {
  children: ReactNode;
  database: Database;
}

/**
 * A wrapper component for tests that need access to the WatermelonDB database.
 * It provides the database context to all children components.
 *
 * @example
 * render(
 *   <TestWrapper database={database}>
 *     <MyComponent />
 *   </TestWrapper>
 * );
 */
export function TestWrapper({ children, database }: TestWrapperProps) {
  return <DatabaseProvider database={database}>{children}</DatabaseProvider>;
}
