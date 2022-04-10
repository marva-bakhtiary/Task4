import '../src/index.css'
export const parameters = {
  backgrounds: {
    default: 'Primary',
    values: [
      {
        name: 'Primary',
        value: '#ffffff',
      },
      {
        name: 'Secondary',
        value: '#16d9c9',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
