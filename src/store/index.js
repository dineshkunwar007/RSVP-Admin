import Vue from "vue";
import Vuex from "vuex";
import { firebaseAuth, signInWithEmailAndPassword } from "../data/firebase";
//import { db } from "../data/firebase";
//import { doc, getDoc } from "firebase/firestore";
import router from "../router";
//import { router } from "../main.js";
//import { doc, getDoc} from "boot/firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    loginUser({ commit }, userCredentials) {
      signInWithEmailAndPassword(
        firebaseAuth,
        userCredentials.email,
        userCredentials.password
      ).then((usrCredential) => {
        let uId = usrCredential.user.uid;
        //const docRef = doc(db, "Profiles", uId);
        commit("setUser", {
          email: userCredentials.email,
          id: uId,
          // name: userDetails.name,
          // role: userDetails.role,
        });

        router.push("/home");
        // getDoc(docRef).then((docSnap) => {
        //   let userDetails = docSnap.data();
        //   if (userDetails.role == "Admin") {
        //     commit("setUser", {
        //       email: userCredentials.email,
        //       id: uId,
        //       name: userDetails.name,
        //       role: userDetails.role,
        //     });

        //     router.push("/home");
        //   }
        // });

        //});
      });
    },
  },
  modules: {},
});
