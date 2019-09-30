<template>
  <div class="params-info">
    <div v-if="paramsinfo.rule">
    <h3>{{paramsinfo.rule.key}}</h3>
    <table v-for="(table,index) in paramsinfo.rule.tables" :key="index">
      <tr v-for="(item,indey) in table" :key="indey">
        <td v-for="(td,indez) in item" :key="indez">
          {{td}}
        </td>
      </tr>
    </table>
    </div>

    <table v-if="paramsinfo.info" class="infoClass">
      <h3>{{paramsinfo.info.key}}</h3>
      <tr v-for="(table,index) in paramsinfo.info.set" :key="index">
        <td class="params-info-key">{{table.key}}</td>
        <td class="params-info-value">{{table.value}}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    paramsinfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
  },
  created(){
    
  },
  mounted(){
  }
}
</script>
<style scoped>
.params-info{
  border: 5px solid #f2f5f8;
  padding: 20px 15px;
  font-size: 14px;
}
.params-info table{
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
.params-info table tr{
  height: 42px;
}
.params-info table tr td{
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.params-info-key{
  width: 95px;
}
.infoClass{
  border-top: 1px solid rgba(0,0,0,.1);
}
.params-info-value{
  color: #eb4868
}

</style>