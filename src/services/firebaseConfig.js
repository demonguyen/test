import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDXNuoWklju5AfT1hMACoBeuygeM2t3PkA',
  authDomain: 'dashboard-153cc.firebaseapp.com',
  databaseURL: 'https://dashboard-153cc.firebaseio.com',
  projectId: 'dashboard-153cc',
  storageBucket: 'dashboard-153cc.appspot.com',
  messagingSenderId: '677179293806',
  appId: '1:677179293806:web:257d243a3171b6eb4b267f',
  measurementId: 'G-JEKQ8GD28E',
};

firebase.initializeApp(firebaseConfig);
export const { auth } = firebase;
export const firestore = firebase.firestore();

/* 

 */
export const generateUserDocument = async (user) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  try {
    await userRef.set({
      ...user,
    });
  } catch (error) {
    console.error('Error creating user document', error);
  }
};

export const getUserDocument = async (uid) => {
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    const userInfo = userDocument.data();
    if (userInfo) {
      return {
        ...userDocument.data(),
      };
    }
  } catch (error) {
    console.error('Error fetching user', error);
  }
};
