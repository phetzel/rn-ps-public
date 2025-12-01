import { schemaMigrations, addColumns } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: 'app_settings',
          columns: [
            { name: 'diagnostics_enabled', type: 'boolean', isOptional: true },
            { name: 'analytics_enabled', type: 'boolean', isOptional: true },
          ],
        }),
      ],
    },
  ],
});
