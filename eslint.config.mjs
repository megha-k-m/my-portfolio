import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended,'eslint:recommended', 
    'plugin:react/recommended', // React-specific linting rules
    'prettier', // Disable all conflicting ESLint rules with Prettier
    'plugin:prettier/recommended' // Integrate Prettier with ESLint
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
plugins: [
      'react-hooks',
      'react-refresh',
      'react', 
    'prettier',
],
     
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    'prettier/prettier': 'error',  // Throws error if Prettier rules are violated
    'react/prop-types': 'off',  // Example rule, turn off PropTypes validation
    'react-hooks/rules-of-hooks': 'error', // Ensures Hooks are called correctly
    'react-hooks/exhaustive-deps': 'warn', // Warns if dependencies of useEffect are missing
    'react-refresh/only-export-components': 'error'  // (Optional) Ensures only components are exported when using React Refresh
    },

  parserOptions: {
    ecmaVersion: 12,  // Use modern ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing (React)
    },
  },
  settings: {
    react: {
      version: 'detect',  // Automatically detects the version of React you are using
    },
  },
  },
)
