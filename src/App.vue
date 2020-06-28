<template>
  <div id="app">
    <!--router-view/>-->
    <CourseSelection></CourseSelection>
  </div>
</template>
<script>



import CourseSelection from "@/components/CourseSelection";
export default {
  name: 'App',

  components: {
    CourseSelection

  },

  data: () => ({
    //
  }),
};
</script>

