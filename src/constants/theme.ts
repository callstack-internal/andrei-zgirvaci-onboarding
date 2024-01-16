export const lightTheme = {
  colors: {
    primary: 'darkturquoise',
  },
  components: {
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: 'white',
    },
    centerText: {
      textAlign: 'center',
      paddingVertical: 10,
    },
    errorMessage: {
      textAlign: 'center',
      paddingVertical: 10,
      color: '#FF4F00',
    },
  },
  safeMargins: {
    horizontal: 20,
  },
  utils: {},
} as const;
