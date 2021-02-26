<template>
    <div>
        <C1 :myData="XXXinfo" @XXXToggle="aaa"></C1>
        <C1 :myData="tttinfo" @XXXToggle="bbb"></C1>
        
    </div>
</template>
<script>
import C1 from '@/components/c1.vue'
export default {
  components:{
      C1,
  },
  data(){
      return{
          XXXinfo:{
              title:'come from partent component',
              age:27
          },
          tttinfo:{
              tag:'come from Datang',
              age:35
          },
          
          
      }
  },
  methods:{
      aaa(data){
          alert(data)
      },
      bbb(data){
          this.$message.success(data)
      }
  },

}
</script>