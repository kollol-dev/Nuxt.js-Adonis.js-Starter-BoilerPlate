import Vue from 'vue'
Vue.mixin({

    methods: {
        setBaseURL(url) {
            return process.env.BASE_URL + url
        }
    }
})









