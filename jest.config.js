module.exports = {
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|native-base|@react-navigation/.*|@expo/vector-icons/Ionicons|@expo/vector-icons/AntDesign|@expo/vector-icons|@expo(nent)?/.*)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
