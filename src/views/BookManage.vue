<template>
  <div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          fixed
          prop="id"
          label="id"
          width="150">
      </el-table-column>
      <el-table-column
          prop="name"
          label="name"
          width="120">
      </el-table-column>
      <el-table-column
          prop="author"
          label="author"
          width="120">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">edit</el-button>
          <el-button @click="deletebook(scope.row)"type="text" size="small">delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="page">
    </el-pagination>
  </div>

</template>

<script>
export default {
  methods: {
    deletebook(row){

      axios.delete('http://localhost:8181/book/deleteById/'+row.id).then(function (resp){
        console.log(resp)
        window.location.reload()
      })
    },
    edit(row) {
      this.$router.push({
        path:'/update',
        query:{
          id:row.id
        }

      })
    },
    page(currentPage){
      const _this=this
      axios.get("http://localhost:8181/book/findAll/"+currentPage+"/6").then(function (resp){
        _this.tableData=resp.data.content
        _this.total=resp.data.totalElements
      })
    },
  },
  created(){
    const _this=this
    axios.get("http://localhost:8181/book/findAll/1/6").then(function (resp){
      _this.tableData=resp.data.content
      _this.total=resp.data.totalElements
    })
  },

  data() {
    return {
      total:null,
      tableData:null
    }
  }
}
</script>