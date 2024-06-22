// // finding the longest prefix

// function longestCommonPrefix(strs) {
//     if (strs.length === 0) return "";

//     let prefix = strs[0]; // flower

//     for (let i = 1; i < strs.length; i++) { // 3
//         let j = 0;
//         while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) { // 6 / f l o w e r
//             j++;
//         }
//         prefix = prefix.substring(0, j);
//         if (prefix === "") break;
//     }

//     return prefix;
// }

// const strings = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strings));

// // Number of nodes in a binory tree

// function numberOfNode(node){
//     if(node === null){
//         return 0
//     }
//     return 1 + numberOfNode(root.left) + numberOfNode(root.right);
// }

// // 2D array creating

// function create2DArrayFrom1D(rows, cols, values) {
//     let arr = new Array(rows);
//     let valueIndex = 0;

//     for (let i = 0; i < rows; i++) {
//         arr[i] = new Array(cols);
//         for (let j = 0; j < cols; j++) {
//             if (valueIndex < values.length) {
//                 arr[i][j] = values[valueIndex++];
//             } else {
//                 arr[i][j] = null;
//             }
//         }
//     }

//     return arr;
// }
// const myArr = [1,2,3,4,5,6,7,8,9,10,11,12]
// let my2DArray = create2DArrayFrom1D(3, 4, myArr);
// console.log(my2DArray);

// // array flatten method

// const arr = [1, [2, [3, [4, 5]]]];
// const flatArray = arr.flat(Infinity); // Using Infinity to flatten all levels
// console.log(flatArray);

class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startWith(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }

    autoComplete(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];
            if (!(charToFind in curr.children)) {
                return [];
            }
            curr = curr.children[charToFind];
        }

        return this.collectWords(curr, prefix);
    }

    collectWords(node, prefix) {
        let words = [];

        if (node.isEndOfWord) {
            words.push(prefix);
        }

        for (let char in node.children) {
            words = words.concat(this.collectWords(node.children[char], prefix + char));
        }

        return words;
    }
}


const trie = new Trie
trie.insert('Minhaj')
trie.insert('Minhal')
trie.insert('Midlaj')
trie.insert('Sabith')
trie.insert('Sahad')

console.log(trie.search("Minhj"))
console.log(trie.startWith("Sa"))
console.log(trie.autoComplete('Mi'))