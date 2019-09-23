<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"
        :key="item"
        class="tab-control-class"
        :class="{active:curronterIndex===index}"
        @click="activeclick(index)">
        <!-- 通过判断curronterIndex和index是否相同来判断当前点击的div，来加载active样式 -->
        <!-- 通过监听click点击来激活div的active -->
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      curronterIndex: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    activeclick(index){
      this.curronterIndex = index  //当点击div时将该div的index赋给curronterIndex，从而激活active样式
    }
  },
  created() {},
  mounted() {}
};
</script>
<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
}
.tab-control-class {
  flex: 1;

}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
  padding:5px
}
</style>