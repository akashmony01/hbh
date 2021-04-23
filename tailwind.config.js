module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2E294E',
        secondery: '#EACDC2',
      },
      fontFamily: {
        pompiere: ['pompiere'],
        ralewayLight: ['raleway-light'],
        ralewayRegular: ['raleway-regular'],
        ralewayMedium: ['raleway-medium'],
        ralewaySemiBold: ['raleway-semibold'],
        ralewayBold: ['raleway-bold'],
        ralewayBlack: ['raleway-black'],
      },
      filter: ['hover', 'focus'],
    },
    // container customization
    container: (theme) => ({
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1200px"
      },
      padding: "1rem",
    }),
    // max width customization
    width: {
      "cMxLogo": "134px",
      "cMxClient": "292px",
      "cMxSm": "590px",
      "cMxMd": "794px",
    },
    // font size customization
    fontSize: {
      "cFsXs": "16px",
      "cFsXs2": "17px",
      "cFsSm": "18px",
      "cFsSm2": "20px",
      "cFsMd": "22px",
      "cFsMd2": "30px",
      "cFsMl": "40px",
      "cFsMl2": "50px",
      "cFsLg": "71px",
      "cFsXl": "90px",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
