const DUMMY_DATA = [
  { id: "d1", value: 5, region: "USA" },
  { id: "d2", value: 11, region: "India" },
  { id: "d3", value: 12, region: "China" },
  { id: "d4", value: 14, region: "Pakistan" },
];

const container = d3.select(".d3container").style("border", "1px solid black");

container
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("div")
  .classed("bar", true)
  .style("width", "50px")
  .style("height", (data) => data.value * 15 + `px`);
