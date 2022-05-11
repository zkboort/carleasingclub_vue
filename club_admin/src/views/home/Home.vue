<template>
  <!--首页-->
  <div>
    <!--功能区域-->
    <div style="margin: 10px">
      <el-button type="primary" @click="add">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <!--搜索区域-->
    <div style="margin: 10px 0">
       <el-input v-model="search" placeholder="请输入搜索内容" style="width: 25%"></el-input>
       <el-button type="primary" style="margin-left: 5px">查询</el-button>
    </div>


    <!--表格-->
    <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
      <el-table-column
          prop="id"
          label="系统用户ID"
          sortable>
      </el-table-column>

      <el-table-column
          prop="email"
          label="邮箱">
      </el-table-column>

      <el-table-column
          prop="username"
          label="用户名">
      </el-table-column>

      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text">编辑</el-button>
          <el-popconfirm
              title="确定删除吗？"
          >
            <el-button type="text" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <div style="margin: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 40, 100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handleEdit(){

    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    },
    currentPage4(){

    },

    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
  data(){
    return{
      search: "",
      currentPage: 1,
      total: 20,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>