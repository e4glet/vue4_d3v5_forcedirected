<template>
  <div class="home">
    <Menu />
    <h2>Vuecli4 力向导图示例</h2>
    <ForceDirected id="mytest" width="900" height="600" :nodes="nodes" :edges="edges"></ForceDirected>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Menu from "@/components/Menu.vue";
import ForceDirected from "@/components/Force-Directed.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Menu,
    ForceDirected,
  },
  data() {
    return {
      // 节点集
      nodes : [
        { name: "天津大学" },
        { name: "智能与计算学部" },       
        { name: "小超" },
        { name: "小丽" },
        { name: "小华" },
        { name: "组长" },
      ],
      // 边集
      edges : [
        { source: 0, target: 4, relation: "学生", value: 1.7 },
        { source: 0, target: 2, relation: "学生", value: 1.7 },
        { source: 0, target: 3, relation: "学生", value: 1.7 },
        { source: 0, target: 1, relation: "分院", value: 1.7 },
        { source: 4, target: 5, relation: "职务", value: 1.7 },
        { source: 2, target: 3, relation: "校友", value: 1.7 },
        { source: 3, target: 4,  relation: "校友", value: 1.7 },
        
      ]
    };
  },
};
</script>
