<template>
  <div class="advert-space-create">
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      :rules="rules">
        <el-form-item label="广告位名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>

export default {
  name: 'AdvertSpaceCreate',
  data () {
    return {
      form: {
        name: ''
      },
      rules: {}
    }
  },
  methods: {
    onSubmit () {
      console.log('clicked')
    }
  }
}
</script>
