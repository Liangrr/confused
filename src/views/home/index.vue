<template>
  <div class="shouye">
    <head-top></head-top>
    <section class="data_section">
      <h1>数据统计</h1>
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{dataStats.userCount}}</span> 新增用户</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{dataStats.orderCount}}</span> 新增订单</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{dataStats.adminCount}}</span> 新增管理员</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{dataStats.allUserCount}}</span> 注册用户</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{dataStats.allOrderCount}}</span> 订单</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">{{dataStats.allAdminCount}}</span> 管理员</div></el-col>
      </el-row>
    </section>
    <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
  </div>
</template>

<script>
import { dataStats, dataList } from '@/utils/mock.js'
import headTop from '@/components/headTop'
import tendency from '../../components/tendency'
export default {
  components: {
    headTop,
    tendency
  },
  data () {
    return {
      dataStats,
      sevenDay: dataList.sevenDay,
      sevenDate: dataList.sevenDate
    }
  }
}
</script>

<style lang="scss">
.shouye {
  width: 100%;
  .data_section {
    padding: 20px;
    margin-bottom: 40px;
    h1 {
      text-align: center;
      font-size: 30px;
      height: 100px;
      line-height: 80px;
    }
    .data_list{
      text-align: center;
      font-size: 14px;
      color: #666;
      border-radius: 6px;
      background: #E5E9F2;
      .data_num{
        color: #333;
        font-size: 26px;
      }
      .head{
        border-radius: 6px;
        font-size: 22px;
        padding: 4px 0;
        color: #fff;
        display: inline-block;
      }
    }
    .today_head{
      background: #FF9800;
    }
    .all_head{
      background: #20A0FF;
    }
  }
}
</style>
