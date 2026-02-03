const { defineConfig } = require('eslint/config');
const expo = require('eslint-config-expo/flat');
const boundaries = require('eslint-plugin-boundaries');

module.exports = defineConfig([
  ...expo,
  {
    plugins: {
      boundaries,
    },
    settings: {
      'import/resolver': {
        typescript: { project: ['./tsconfig.json'] },
      },
      react: { version: 'detect' },
      // Define the architectural layers for eslint-plugin-boundaries
      'boundaries/elements': [
        { type: 'game', pattern: 'lib/game' },
        { type: 'db', pattern: 'lib/db' },
        { type: 'stores', pattern: 'lib/stores' },
        { type: 'hooks', pattern: 'lib/hooks' },
        { type: 'infra', pattern: 'lib/infra' },
        { type: 'data', pattern: 'lib/data' },
        { type: 'schemas', pattern: 'lib/schemas' },
        { type: 'types', pattern: 'types' },
        { type: 'lib-utils', pattern: 'lib/utils.ts', mode: 'file' },
        { type: 'lib-constants', pattern: 'lib/constants.ts', mode: 'file' },
        { type: 'ui', pattern: 'components/ui' },
        { type: 'icons', pattern: 'components/icons' },
        { type: 'shared', pattern: 'components/shared' },
        { type: 'screens', pattern: 'components/screens' },
        { type: 'app', pattern: 'app' },
      ],
      'boundaries/ignore': ['**/*.test.ts', '**/*.test.tsx', '__tests__/**', '__mocks__/**'],
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      // Boundary rules - enforce layer dependencies
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            // game layer: only imports types (THE core constraint - pure game logic)
            {
              from: 'game',
              allow: ['types', 'game'],
            },
            // data layer: only imports types (and itself for composition)
            {
              from: 'data',
              allow: ['types', 'data'],
            },
            // db layer: imports types, schemas, game, data, db itself, utils, constants
            {
              from: 'db',
              allow: ['types', 'schemas', 'game', 'data', 'db', 'lib-utils', 'lib-constants'],
            },
            // schemas: imports types, game, schemas itself
            {
              from: 'schemas',
              allow: ['types', 'game', 'schemas'],
            },
            // stores: imports types, db, game, infra, stores itself, constants
            {
              from: 'stores',
              allow: ['types', 'db', 'game', 'infra', 'stores', 'lib-constants'],
            },
            // hooks: imports types, stores, db, game, hooks itself, utils, constants
            {
              from: 'hooks',
              allow: ['types', 'stores', 'db', 'game', 'hooks', 'lib-utils', 'lib-constants'],
            },
            // infra: imports types, db, infra itself
            {
              from: 'infra',
              allow: ['types', 'db', 'infra'],
            },
            // lib-utils: imports types, game, constants
            {
              from: 'lib-utils',
              allow: ['types', 'game', 'lib-constants'],
            },
            // lib-constants: imports types, game
            {
              from: 'lib-constants',
              allow: ['types', 'game'],
            },
            // ui: imports types, utils, ui itself, icons
            {
              from: 'ui',
              allow: ['types', 'lib-utils', 'ui', 'icons'],
            },
            // icons: only imports icons
            {
              from: 'icons',
              allow: ['icons'],
            },
            // shared: imports types, ui, icons, hooks, stores, db, game, shared itself, utils, constants
            {
              from: 'shared',
              allow: [
                'types',
                'ui',
                'icons',
                'hooks',
                'stores',
                'db',
                'game',
                'data',
                'infra',
                'shared',
                'lib-utils',
                'lib-constants',
              ],
            },
            // screens: imports types, shared, ui, icons, hooks, stores, db, game, screens itself, utils, constants
            {
              from: 'screens',
              allow: [
                'types',
                'shared',
                'ui',
                'icons',
                'hooks',
                'stores',
                'db',
                'game',
                'infra',
                'screens',
                'lib-utils',
                'lib-constants',
              ],
            },
            // app: imports everything except other apps
            {
              from: 'app',
              allow: [
                'types',
                'screens',
                'shared',
                'ui',
                'icons',
                'hooks',
                'stores',
                'db',
                'game',
                'schemas',
                'lib-utils',
                'lib-constants',
                'infra',
              ],
            },
          ],
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules/**',
      'android/**',
      'ios/**',
      '.expo/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'assets/**',
      'lib/data/situations/**',
      'e2e/maestro/**',
      'docs-site/**',
    ],
  },
  {
    files: ['__tests__/**/*'],
    rules: {
      'import/order': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      // Disable boundary checks in tests
      'boundaries/element-types': 'off',
    },
  },
]);
