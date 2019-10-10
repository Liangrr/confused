<template>
  <div id="shopList">
    <head-top></head-top>
    <div class="table_container">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="店铺名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="销售量">
                <span>{{ props.row.recent_order_num }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="店铺名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="店铺地址"
          prop="address">
        </el-table-column>
        <el-table-column
          label="店铺介绍"
          prop="description">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { shopList } from '@/utils/mock.js'
import headTop from '@/components/headTop'
export default {
  components: {
    headTop
  },
  data () {
    return {
      tableData: shopList.restaurant
      // tableShop: [
      //   { label: '商品名称' },
      //   { label: '所属店铺' },
      //   { label: '商品' },
      //   { label: '店铺' },
      //   { label: '商品分类' },
      //   { label: '店铺地址' },
      //   { label: '商品描述' }
      // ]
    }
  }
}
</script>

<style lang="scss">
.table_container {
  padding: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
