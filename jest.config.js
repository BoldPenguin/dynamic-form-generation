module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001]
      },
      allowSyntheticDefaultImports: true
    }
  },
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest"
  },
  coveragePathIgnorePatterns: ['/node_modules/']
}