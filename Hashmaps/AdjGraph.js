/*

  Show an algorithm that uses hash tables to solve the following problem in linear time.
  The input is a directed unweighted graph G=(V,E), where V the set of vertices of the graph,
  E is the set of directed edges of the graph given by their endpoints, and G induces a directed simple path.
  The algorithm should label the endpoints of the edges with labels 1,2,.., |V|, so that the simple directed
  path can be obtained by traversing the vertices in that order. The output of the algorithm should be an array
  Label[1..|V|] where L[i] =v if the label of v is i.

*/
/*

Example 1:
Input Graph:
V = {A, B, C, D}
E = {(B→D), (A→B), (D→C)}
A -> B -> D -> C
This graph induces the path A→B→D→C, so the labeling should be:
A gets label 1
B gets label 2
D gets label 3
C gets label 4
Output array Label[1..4]:
Label[1] = A  (vertex with label 1)
Label[2] = B  (vertex with label 2)
Label[3] = D  (vertex with label 3)
Label[4] = C  (vertex with label 4)



Essentially we just have to order the nodes based on the output , Finding the first node and finding the last node is simple
*/


var adjacencyList = {
  'B' : 'D' , 
  'A' : 'B' , 
  'D' : 'C' , 
  'C' : null, 
}

var hashmap = new Array(4).fill(0) ; 


/* 
  * We can use the concept of # of predecessors to assign values to the given nodes , we will
  * since we know that the simple induced graph will always have n-1 edges , ( How do we use this ? ) ; 
  * 
*/


/*
 *Solution
*/

// Iterate through each Vertex relation , everytime we find a connecting vertex we increment the count + 1 
// , The vertex with the most relative edges becomes the initial node L[0] 



//We insert using adjacency count + 1 % |V| to get the index in the hashmap , Collisions will not occur due to the fact it is a simple graph 



function getPath(adjacencyList , hashmap) {
  const m = hashmap.length ; 
  for (const [key, value] of Object.entries(adjacencyList)) {
    let count = 1; // Start the count at 1 for the current key
    let tmp = value; // Start traversal from the current value

    // Traverse the path until the end (null)
    while (tmp !== null) {
      count++;
      tmp = adjacencyList[tmp];
    }

    console.log(`${key} : ${count}`);
    hashmap[Math.abs(count - m)] = key 
  }
}

getPath(adjacencyList , hashmap) ;



for(let i = 0 ; i < hashmap.length ; ++i){
  console.log(hashmap[i]) ;
}
