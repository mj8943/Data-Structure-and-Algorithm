// // adjacent matrix;
// const metrix = [
//     [0 , 1 , 0],
//     [1 , 0 , 1],
//     [0 , 1 , 0]
// ]

// console.log(metrix[1][1])

// // adjacent list;
// const list  = {
//     'A' : ['B'],
//     'B' : ['A','C'],
//     'C' : ['B']
// }

// console.log(list['B'])


// graph implimentation

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    bfs(startingNode) {
        const visited = {};
        const queue = [];

        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length) {
            const currentNode = queue.shift();
            console.log(currentNode);

            const neighbors = this.adjList.get(currentNode);

            for (let neighbor of neighbors) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

    dfsHelper(node, visited) {
        visited[node] = true;
        console.log(node);

        const neighbors = this.adjList.get(node);

        for (let neighbor of neighbors) {
            if (!visited[neighbor]) {
                this.dfsHelper(neighbor, visited);
            }
        }
    }

    dfs(startingNode) {
        const visited = {};
        this.dfsHelper(startingNode, visited);
    }
}

// Usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

console.log('BFS:');
graph.bfs('A');

console.log('DFS:');
graph.dfs('A');
