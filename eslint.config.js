const { defineConfig } = require('eslint/config');
const expo = require('eslint-config-expo/flat');
const boundaries = require('eslint-plugin-boundaries');
const sonarjs = require('eslint-plugin-sonarjs');

module.exports = defineConfig([
  ...expo,
  sonarjs.configs.recommended,
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
        { type: 'entry', pattern: 'index.js', mode: 'file' },
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
        { type: 'connected', pattern: 'components/connected' },
        { type: 'shared', pattern: 'components/shared' },
        { type: 'screens', pattern: 'components/screens' },
        { type: 'app', pattern: 'app' },
        { type: 'scripts', pattern: 'scripts' },
      ],
      'boundaries/ignore': [
        '**/*.css',
        '**/*.d.ts',
        '**/*.config.js',
        '**/*.config.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
        '__tests__/**',
        '__mocks__/**',
      ],
    },
    rules: {
      // React 17+ / JSX runtime does not require React in scope
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      // React Hooks (Expo already provides the plugin; avoid redefinition)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
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
            // entry: app startup
            {
              from: 'entry',
              allow: ['app', 'infra', 'lib-utils', 'lib-constants', 'types'],
            },
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
            // connected: data-aware UI composition
            {
              from: 'connected',
              allow: [
                'types',
                'schemas',
                'shared',
                'screens',
                'ui',
                'icons',
                'hooks',
                'stores',
                'db',
                'game',
                'infra',
                'data',
                'connected',
                'lib-utils',
                'lib-constants',
              ],
            },
            // shared: presentational-only components
            {
              from: 'shared',
              allow: [
                'types',
                'ui',
                'icons',
                'data',
                'infra',
                'shared',
                'lib-utils',
                'lib-constants',
              ],
            },
            // screens: presentational, no db/helpers
            {
              from: 'screens',
              allow: [
                'types',
                'schemas',
                'shared',
                'ui',
                'icons',
                'hooks',
                'game',
                'data',
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
                'connected',
              ],
            },
            // scripts: content generation / tooling
            {
              from: 'scripts',
              allow: ['types', 'schemas', 'data', 'game', 'lib-utils', 'lib-constants', 'scripts'],
            },
          ],
        },
      ],
      'boundaries/no-unknown-files': 'error',
      'boundaries/no-unknown': 'error',
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
    files: ['__tests__/**/*', '__mocks__/**/*'],
    rules: {
      'import/order': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-nested-conditional': 'off',
      'sonarjs/no-nested-functions': 'off',
      'sonarjs/pseudo-random': 'off',
      'sonarjs/no-identical-functions': 'off',
      'sonarjs/slow-regex': 'off',
      'sonarjs/anchor-precedence': 'off',
      'sonarjs/no-commented-code': 'off',
      // Disable boundary checks in tests
      'boundaries/element-types': 'off',
      'boundaries/no-unknown-files': 'off',
      'boundaries/no-unknown': 'off',
    },
  },
  {
    files: ['scripts/**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'import/order': 'off',
      'import/no-duplicates': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-nested-conditional': 'off',
      'sonarjs/no-nested-functions': 'off',
      'sonarjs/no-identical-functions': 'off',
      'sonarjs/no-commented-code': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/slow-regex': 'off',
      'sonarjs/anchor-precedence': 'off',
    },
  },
]);
