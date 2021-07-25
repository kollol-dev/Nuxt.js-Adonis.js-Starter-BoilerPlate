import cookie from 'cookie'
export const strict = false

export const state = () => ({
    authUser: false,
    baseURL: '',
})

// common getters
export const getters = {
    getAuthUser(state) {
        return state.authUser
    },

    getBaseURL(state) {
        return state.baseURL
    }
}

// mutations for changing data from action
export const mutations = {
    updateAuthUser(state, user) {
        state.authUser = user
    },

    setBaseURL(state, data) {
        state.baseURL = data
    }
}

// actionns for commiting mutations
export const actions = {
    async nuxtServerInit({commit}, {$axios}) {
        commit('setBaseURL', process.env.BASE_URL)
        try {
            let { data } = await $axios.get(`${process.env.BASE_URL}/api/initData`)
            commit('updateAuthUser', data)
        } catch (e) {
            console.error(e)
        }
    },

}
