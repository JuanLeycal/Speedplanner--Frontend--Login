import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        id: null,
        username: null,
        email: null,
        password: null
    },

    mutations: {
        saveId(state, userId){
            this.state.id = userId;
        },

        saveUsername(state, username){
            this.state.username = username;
        },

        saveEmail(state, email){
            this.state.email = email;
        },

        savePassword(state, password){
            this.state.password = password;
        }
    }
});
