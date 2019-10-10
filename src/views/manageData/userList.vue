<template>
  <div id="userList">
    <head-top></head-top>
    <div class="table_container">
      <el-table
        :data="tableData"
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          property="date"
          label="日期">
        </el-table-column>
        <el-table-column
          property="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          property="address"
          label="地址">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { userList } from '@/utils/mock.js'
import headTop from '@/components/headTop'
export default {
  components: {
    headTop
  },
  data () {
    return {
      currentPage: 1,
      total: userList.data.length,
      tableData: userList.data
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss">
.table_container {
  padding: 20px;
  box-sizing: border-box;
}
.el-pagination {
  float: right;
  padding: 10px 10px;
}
</style>
