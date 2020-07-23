<template> 
  <svg :id="id" :width="width" :height="height" />  
</template>
<script>
import * as d3 from "d3";

export default {
  name: "ForceDirected",
  props: {
    id: String,
    width: String,
    height: String,
    nodes: Array,
    edges: Array,
  },
  data() {
    return {      
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    load() {
      this.init();
    },
  },
  methods: {
    init() {
      let marge = { top: 60, bottom: 60, left: 60, right: 60 };
      let svg = d3.select("svg");
      let width = this.width ? this.width : 900;
      let height = this.height ? this.height : 600;
      let g = svg
        .append("g")
        .attr("transform", "translate(" + marge.top + "," + marge.left + ")");
      // 准备数据
      // 节点集
      let nodes = this.nodes;
      // 边集
      let edges = this.edges;
      // 设置一个颜色比例尺
      let colorScale = d3
        .scaleOrdinal()
        .domain(d3.range(nodes.length))
        .range(d3.schemeCategory10);
      // 新建一个力导向图
      let forceSimulation = d3
        .forceSimulation()
        .force("link", d3.forceLink())
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter());
      // 生成节点数据
      forceSimulation.nodes(nodes).on("tick", ticked);
      // 生成边数据
      forceSimulation
        .force("link")
        .links(edges)
        .distance(function (d) {
          // 每一边的长度
          return d.value * 100;
        });
      // 设置图形中心位置
      forceSimulation
        .force("center")
        .x(width / 2)
        .y(height / 2);
      // // 顶点集，边集
      // console.log(nodes)
      // console.log(edges)
      // 绘制边
      let links = g
        .append("g")
        .selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .attr("stroke", function (d, i) {
          return colorScale(i);
        })
        .attr("stroke-width", 1);
      // 边上的文字
      let linksText = g
        .append("g")
        .selectAll("text")
        .data(edges)
        .enter()
        .append("text")
        .text(function (d) {
          return d.relation;
        });
      // 创建分组
      let gs = g
        .selectAll(".circleText")
        .data(nodes)
        .enter()
        .append("g")
        .attr("transform", function (d) {
          let cirX = d.x;
          let cirY = d.y;
          return "translate(" + cirX + "," + cirY + ")";
        })
        .call(
          d3.drag().on("start", started).on("drag", dragged).on("end", ended)
        );
      // 绘制节点
      gs.append("circle")
        .attr("r", 10)
        .attr("fill", function (d, i) {
          return colorScale(i);
        });
      // 文字
      gs.append("text")
        .attr("x", -10)
        .attr("y", -20)
        .attr("dy", 10)
        .text(function (d) {
          return d.name;
        });
      // ticked
      function ticked() {
        links
          .attr("x1", function (d) {
            return d.source.x;
          })
          .attr("y1", function (d) {
            return d.source.y;
          })
          .attr("x2", function (d) {
            return d.target.x;
          })
          .attr("y2", function (d) {
            return d.target.y;
          });
        linksText
          .attr("x", function (d) {
            return (d.source.x + d.target.x) / 2;
          })
          .attr("y", function (d) {
            return (d.source.y + d.target.y) / 2;
          });
        gs.attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
      }
      // drag
      function started(d) {
        if (!d3.event.active) {
          forceSimulation.alphaTarget(0.8).restart(); // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0, 1]
        }
        d.fx = d.x;
        d.fy = d.y;
      }
      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }
      function ended(d) {
        if (!d3.event.active) {
          forceSimulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
      }
    },
  },
};
</script>