function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
  
// Initialize distances and visited
    for (let vertex in graph) {
      distances[vertex] = Infinity;
      visited[vertex] = false;
    }
    distances[start] = 0;
  
//Funtion to find the Min disrance
    function findMinDistanceVertex() {
      let minDistance = Infinity;
      let minVertex = null;
      for (let vertex in distances) {
        if (!visited[vertex] && distances[vertex] < minDistance) {
          minDistance = distances[vertex];
          minVertex = vertex;
        }
      }
      return minVertex;
    }
  
// Main loop
    for (let i = 0; i < Object.keys(graph).length; i++) {
      const currentVertex = findMinDistanceVertex();
      if (!currentVertex) break;
      visited[currentVertex] = true;
  
      for (let neighbor in graph[currentVertex]) {
        const weight = graph[currentVertex][neighbor];
        const totalDistance = distances[currentVertex] + weight;
        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
        }
      }
    }
  
    return distances;
  }
  
//Given graph
  const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };

  //the shortest distances from the starting vertex to all other vertices
  console.log(dijkstra(graph, 'A'));
  