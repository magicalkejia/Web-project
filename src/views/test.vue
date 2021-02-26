<template>
  <div>
    <el-button @click="changeshow">Can you see that?</el-button>
    <template v-if="seen">
      <p v-for="(item, idx) in datalist" :key="idx">{{ item }}</p>
    </template>
    <template v-else>
      <p>guess who are them?</p>
    </template>
    <p v-show="seen">hhhh</p>
    <template>
      <div v-for="(xxItem, xxIdx) in xxxlist" :key="'xx' + xxIdx">
        <span>
          <p>{{ xxItem.name }}</p>
          <p>{{ xxItem.gender }}</p>
          <p>{{ xxItem.age }}</p>
        </span>
      </div>
    </template>
    <template>
      <el-table :data="xxxlist">
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="gender"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="计算">
          <template slot-scope="scope">
            <p v-if="scope.row.age > 30">you are not young</p>
            <p v-else>you are quite young</p>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip
              class="item"
              effect="dark"
              content="Top Left 提示文字"
              placement="top-start"
            >
              <el-button
                type="warning"
                icon="el-icon-delete"
                circle
                @click="del(scope)"
              ></el-button>
            </el-tooltip>
            <el-button
              type="danger"
              icon="el-icon-star-off"
              circle
              @click="modifer(scope)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      
    </template>
      <el-dialog :visible.sync="visible" title="我的对话框">
        <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="formLabelAlign.gender"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="formLabelAlign.age"></el-input>
          </el-form-item>
          <el-form-item label="日期">
            <el-input v-model="formLabelAlign.date"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="save">save</el-button>
      </el-dialog>

  </div>
  
</template>
<script>
export default {
  data() {
    return {
      seen: false,
      visible: false,
      formLabelAlign: {
          name: '',
          gender: '',
          age: '',
          _xid:{},
          date:'2020-10-20'
      },

      datalist: ["张三", "李四", "Alice"],
      xxxlist: [
        {
          name: "zhang",
          gender: "female",
          age: "30",
        },
      ],
    };
  },
  methods: {
    changeshow() {
      this.seen = !this.seen;
    },
    del(scope) {
      console.log("hi")
    },
    modifer(scope) {
      console.log("hello")
      this.visible = true
      this.formLabelAlign.name=scope.row.name
      this.formLabelAlign.gender=scope.row.gender
      this.formLabelAlign.age=scope.row.age
      this.formlabelalign._xid=scope//save scope
    },
    save(){
      let rowindex=this.formLabelAlign._xid.$index
      this.$set(this.xxxlist[rowindex],"name",this.formLabelAlign.name)
      // this.xxxlist[rowindex].name=this.formLabelAlign.name
      this.xxxlist[rowindex].gender=this.formLabelAlign.gender
      this.xxxlist[rowindex].age=this.formLabelAlign.age
      

    }
  },
  
};
</script>