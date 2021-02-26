<template>
  <div>
    <el-steps :active="mystep" finish-status="success">
      <el-step title="Children">1</el-step>
      <el-step title="teenagers">2</el-step>
      <el-step title="adult">3</el-step>
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">next step</el-button>
    <el-card>
      <div v-if="mystep == 0">
        when you were a child ,your partner tell stories to you
      </div>
      <div v-if="mystep == 1">
        Now you are a teenager and go to experience the world outside,the parent
        is unable to see you
      </div>
      <div v-if="mystep == 2">
        look back on it,the old partent and Children now ,they form a cirle
        together
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">user management
          
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-card>
    <el-input v-model="telephone"></el-input>
    <el-button @click="getQRcode">tuhuo</el-button>
    <el-button circle @click="getServerInfo">Get value</el-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mystep: 0,
      activeName: "first",
      orgOptions: {},
    };
  },

  methods: {
    next() {
      if (this.mystep++ > this.steps.length) this.mystep = 0;
    },
    handleClick() {
      if (this.activeName == "first") {
        this.$message.success("you became a superman successily");
      }
    },
  },
  mounted() {
    this.orgOptions = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    }
  }
};
</script>