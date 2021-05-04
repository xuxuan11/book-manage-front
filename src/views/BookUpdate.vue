<template>
  <el-form style="width:50%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
    <el-form-item label="Id" prop="name">
      <el-input v-model="ruleForm.id" readonly></el-input>
    </el-form-item>
    <el-form-item label="Name" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="Author" prop="author">
      <el-input v-model="ruleForm.author"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id: '',
        name: '',
        author: ''

      },
      rules: {
        name: [
          { required: true, message: 'Please input  Name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        author: [
          { required: true, message: 'Please input  Author', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this=this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.put('http://localhost:8181/book/update',this.ruleForm).then(function (resp){
            if(resp.data=='success'){
              _this.$router.push('/BookManage')
              _this.$message('edit successful!')
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    const _this=this
    axios.get('http://localhost:8181/book/findById/'+this.$route.query.id).then(function (resp){
      _this.ruleForm=resp.data
    })

  }
}
</script>