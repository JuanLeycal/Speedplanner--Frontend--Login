<template>
  <v-app>
    <v-content>
      <Login>

      </Login>
    </v-content>
  </v-app>
</template>

<script>
import Login from '@/components/Login'
import FindPassword from '@/components/FindPassword'

export default {
  name: 'App',

  components: {
    Login,
    // eslint-disable-next-line vue/no-unused-components
    FindPassword,
  },

  data: () => ({
    //
  }),
};
</script>

