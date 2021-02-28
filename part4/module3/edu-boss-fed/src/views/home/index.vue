<template>
  <div class="course">
    <course-list></course-list>
  </div>
</template>
<script>
import CourseList from '@/views/course/components/List'
export default {
  name: 'Home',
  components: {
    CourseList
  }
}
</script>

<style lang="scss" scoped>
</style>
