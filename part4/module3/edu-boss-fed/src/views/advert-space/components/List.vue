<template>
  <div class="adver-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button
          @click="$router.push({ name: 'advert-space-create' })"
        >添加广告位</el-button>
      </div>
      <!-- 展示区域 -->
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="spaceKey"
          prop="spaceKey">
        </el-table-column>
        <el-table-column
          prop="name"
          label="广告位名称">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="更新时间">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllSpaces } from '@/services/advert.js'
export default {
  name: 'AdvertSpacetList',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    async loadAllSpace () {
      const { data } = await getAllSpaces()
      if (data.state === 1) {
        this.tableData = data.content
      }
    }
  },
  created () {
    this.loadAllSpace()
  }
}

</script>
