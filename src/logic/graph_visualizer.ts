import Graph from "graphology";
import Sigma from "sigma";

function visualizeGraph(nodes: any[], relationships: any[]) {
  const container = document.getElementById("visualizer");
  if (container !== null) {
    container.innerHTML = ""
  }
  const graph = new Graph({});

  // Adding some nodes
  nodes.forEach((node) => {
    const item = node._fields[0];
    graph.addNode(item.elementId, {
      x: 0.1 + Math.random() * 2,
      y: 0.1 + Math.random() * 2,
      size: 8,
      label: item.properties.name,
      color: 'blue'
    });
  });

  // Adding an edge
  relationships.forEach((rel,) => {
    const item = rel._fields[0];
    graph.addDirectedEdge(
      item.startNodeElementId,
      item.endNodeElementId,
      { size: 3 }
    );
  });

  if (container !== null) {
    new Sigma(graph, container);
  }
}

export default visualizeGraph;
