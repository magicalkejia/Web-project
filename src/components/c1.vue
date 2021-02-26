<template>
    <div>
        {{myData}}
        <p v-if="myData.hasOwnProperty('age')&&myData.age>30">you had enter the middle age</p>
        <p v-else>"Now you are dynamic"</p>
        <el-button @click="Toparent">give father</el-button>
        <p>{{xxx}}</p>
    </div>
</template>
<script>
export default {
    props:{
        myData:{
            type:Object,
            default:()=>({})
        },
    },
    methods:{
        Toparent(){
            if (this.myData.age>30) 
            {this.$emit('XXXToggle',"you are diamond")
                
            } else {
                this.$emit('XXXToggle',"you are dynamic")
            }
        }
    },
    data:{
        return:{
            xxx:""
        }
    },
    mounted(){
        this.xxxInfo.title="哈哈哈"
        this.tttInfo.tag="哈哈哈"
    },
    created(){
        this.xxxInfo.title="哈哈哈"
        this.tttInfo.tag="哈哈哈"
    }    
    
}
</script>