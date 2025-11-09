import { schemaMigrations } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [
    // No migrations defined yet for version 1 -> 2, etc.
    // The first actual migration you add will look like:
    // {
    //   toVersion: 2,
    //   steps: [ /* ... migration steps ... */ ]
    // }
  ],
});
