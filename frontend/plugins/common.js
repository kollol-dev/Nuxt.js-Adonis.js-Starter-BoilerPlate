import Vue from 'vue'
import { mapGetters } from 'vuex'

import moment from 'moment'

Vue.mixin({

  methods: {

    async callApi(method, url, dataObj) {

      try {
        let data = await this.$axios({
          config: {
            withCredentials: true

          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.getCookie('token')}`,
          },
          method: method,
          url: url,
          data: dataObj,

        })
        return data

      } catch (e) {

        return e.response
      }
    }

  },
  computed: {
    ...mapGetters({
      authUser: "getAuthUser",
      baseURL: 'getBaseURL'
    })
  },


  filters: {
    formatFeedDate(date) {
      return moment(date).format("DD MMM,YYYY H:mmA")
    },

    fullName(obj) {
      return obj.first_name + ' ' + obj.last_name
    },
  }
})





