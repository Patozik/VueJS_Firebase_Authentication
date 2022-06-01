import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'


export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {

    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }

  },
  actions: {

 // LOGOWANIE

    async login ({ commit }, details ) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found' : 
            alert("Nie znaleziono użytkownika");
            break;
          case 'auth/wrong-password' :
            alert("Błędne hasło");
            break;
          default:
            alert("Coś poszło nie tak");
        }

        return
      }

      commit('SET_USER', auth.currentUser);

      router.push('/');
    },

// REJESTRACJA

    async register ({ commit }, details ) {
      const { email, password } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use' : 
            alert("Email już został użyty");
            break;
          case 'auth/invail-emial' : 
            alert("Błędny email");
            break;
          case 'auth/operation-not-allowed' : 
            alert("Operacja niedozwolona");
            break;
          case 'auth/weak-password' : 
            alert("Hasło jest zbyt słabe");
            break;
          default:
            alert("Coś poszło nie tak");
        }

        return
      }

      commit('SET_USER', auth.currentUser);

      router.push('/');
    },

// WYLOGOWANIE

    async logout ({ commit }) {
      await signOut(auth);

      commit('CLEAR_USER');

      router.push('/login');
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER');
        } else {
          commit('SET_USER', user);

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/');
          }
        }
      })
    }

  },
  modules: {
  }
})
