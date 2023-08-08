import 'dotenv/config';

export default {
  "expo": {
    "name": "KeyBoxMobileDev",
    "slug": "keyboxmobiledev",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/logo.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "package": "com.theiotproject.keyboxmobile.dev",
      "googleServicesFile": "./google-services.json",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": ["@react-native-google-signin/google-signin"],
    "extra": {
      "eas": {
        "projectId": "0169478a-9842-4509-ac0a-da8738a08894",
        "build": {
          "development": {
            "developmentClient": true,
            "distribution": "internal"
          },
          "preview": {
            "distribution": "internal"
          },
        },
      },

      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseGoogleWebClientId: process.env.FIREBASE_GOOGLE_WEB_CLIENT_ID,   
    },
  }
}
