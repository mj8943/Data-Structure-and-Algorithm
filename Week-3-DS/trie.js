class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
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




const trie = new Trie();

// Insert words into the trie
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");
trie.insert("band");
trie.insert("bandit");

// Search for words in the trie
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("app"));     // Output: true
console.log(trie.search("apricot")); // Output: true
console.log(trie.search("banana"));  // Output: true
console.log(trie.search("band"));    // Output: true
console.log(trie.search("bandit"));  // Output: true
console.log(trie.search("bandana")); // Output: false
console.log(trie.search("apples"));  // Output: false

// Check if prefixes exist in the trie
console.log(trie.startsWith("app"));    // Output: true
console.log(trie.startsWith("ban"));    // Output: true
console.log(trie.startsWith("banda"));  // Output: true
console.log(trie.startsWith("bandit")); // Output: true
console.log(trie.startsWith("candy"));  // Output: false
console.log(trie.startsWith("a"));  

// Auto-complete
console.log("Auto-complete with prefix 'ap':", trie.autoComplete("ap")); // ['app', 'apple', 'apricot']
console.log("Auto-complete with prefix 'ban':", trie.autoComplete("ban")); // []