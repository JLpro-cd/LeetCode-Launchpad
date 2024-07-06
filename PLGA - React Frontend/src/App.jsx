import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    console.log(`${item} clicked`);
    navigate(`/${item.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <div>
      <div className="header-container">
        <h1>Python Leetcode Grind Assistant</h1>
        <p>"A tool to help you master Leetcode problems by explaining their specific 'tricks'!"</p>
      </div>
      <div className="boxes-container">
        <div className="box1">
          <h2>Select a problem category to study</h2>
          <ul>
            <li onClick={() => handleItemClick('Two Pointer')}><div>Two Pointer</div></li>
            <li onClick={() => handleItemClick('Hashing')}><div>Hashing</div></li>
            <li onClick={() => handleItemClick('Linked List')}><div>Linked List</div></li>
            <li onClick={() => handleItemClick('Sliding Window')}><div>Sliding Window</div></li>
            <li onClick={() => handleItemClick('Trees')}><div>Trees</div></li>
            <li onClick={() => handleItemClick('Graphs')}><div>Graphs</div></li>
            <li onClick={() => handleItemClick('Dynamic Programming')}><div>Dynamic Programming</div></li>
          </ul>
        </div>
        <div className="box2">
          <h2>Study a specific data structure</h2>
          <ul>
            <li onClick={() => handleItemClick('Dictionaries')}><div>Dictionaries</div></li>
            <li onClick={() => handleItemClick('Sets')}><div>Sets</div></li>
            <li onClick={() => handleItemClick('Lists')}><div>Lists</div></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const topicContent = {
  "two-pointer": {
    title: "Two Pointer",
    content: (
      <div>
        <p>The two-pointer technique is a useful tool for solving problems involving arrays or lists. It involves using two pointers to traverse the array or list from different directions to achieve a certain condition or goal.</p>
        <h3>Examples:</h3>
        <ul>
          <li>
            <div className="example-container">
              <div className="example-content">
                <a href="https://leetcode.com/problems/two-sum" target="_blank" rel="noopener noreferrer">Two Sum</a>
                <p className="example-description">Find two numbers that add up to a specific target in a given array      .</p>
              </div>
              <div className="separator"></div>
              <div className="trick-description">
                Use two pointers to iterate through the list and check pairs of elements.
              </div>
            </div>
          </li>
          <li>
            <div className="example-container">
              <div className="example-content">
                <a href="https://leetcode.com/problems/reverse-string" target="_blank" rel="noopener noreferrer">Reverse String</a>
                <p className="example-description">Reverse the characters in a string.</p>
              </div>
              <div className="separator"></div>
              <div className="trick-description">
                Use two pointers starting from the ends of the array and swap characters.
              </div>
            </div>
          </li>
          <li>
            <div className="example-container">
              <div className="example-content">
                <a href="https://leetcode.com/problems/valid-palindrome" target="_blank" rel="noopener noreferrer">Valid Palindrome</a>
                <p className="example-description">Determine if a string is a palindrome (is the same read forward as it is backwards)</p>
              </div>
              <div className="separator"></div>
              <div className="trick-description">
                Remember when working with strings to pay extra attention to requirements. Here, we are told it is case-insensitive and it ignores non-alphanumeric characters, meaning we need to clean the string first.
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  },

  "hashing": {
    title: "Hashing",
    content: (
      <div>
        <p>Hashing is a technique used to uniquely identify a specific object from a group of similar objects. It is commonly used in data structures like hash tables and maps.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Implementing a hash table</li>
          <li>Checking for duplicates in an array</li>
          <li>Finding the first non-repeating character in a string</li>
        </ul>
      </div>
    )
  },
  "linked-list": {
    title: "Linked List",
    content: (
      <div>
        <p>A linked list is a linear data structure where each element is a separate object, known as a node. Each node contains data and a reference (or link) to the next node in the sequence.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Reversing a linked list</li>
          <li>Detecting a cycle in a linked list</li>
          <li>Finding the middle of a linked list</li>
        </ul>
      </div>
    )
  },
  "sliding-window": {
    title: "Sliding Window",
    content: (
      <div>
        <p>The sliding window technique is used to solve problems that involve a window (or subarray) that slides over a larger array or list to achieve a certain condition or goal.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Finding the maximum sum subarray of a fixed size</li>
          <li>Finding the smallest subarray with a sum greater than a given value</li>
          <li>Finding all anagrams of a string within another string</li>
        </ul>
      </div>
    )
  },
  "trees": {
    title: "Trees",
    content: (
      <div>
        <p>Trees are hierarchical data structures that consist of nodes, with each node containing a value and references to its children. Trees are widely used in various applications such as databases, file systems, and network routing algorithms.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Binary search tree operations</li>
          <li>Tree traversals (in-order, pre-order, post-order)</li>
          <li>Finding the lowest common ancestor of two nodes</li>
        </ul>
      </div>
    )
  },
  "graphs": {
    title: "Graphs",
    content: (
      <div>
        <p>Graphs are data structures that consist of nodes (or vertices) connected by edges. They are used to represent networks of interconnected objects, such as social networks, transportation systems, and web page links.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Depth-first search (DFS) and breadth-first search (BFS)</li>
          <li>Detecting cycles in a graph</li>
          <li>Finding the shortest path between two nodes</li>
        </ul>
      </div>
    )
  },
  "dynamic-programming": {
    title: "Dynamic Programming",
    content: (
      <div>
        <p>Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It is used to optimize recursive algorithms by storing the results of subproblems to avoid redundant computations.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Fibonacci sequence</li>
          <li>Longest common subsequence</li>
          <li>Knapsack problem</li>
        </ul>
      </div>
    )
  },
  "dictionaries": {
    title: "Dictionaries",
    content: (
      <div>
        <p>Dictionaries are data structures that store key-value pairs. They provide efficient lookup, insertion, and deletion operations based on the key.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Counting the frequency of elements in an array</li>
          <li>Implementing a simple cache</li>
          <li>Mapping relationships between objects</li>
        </ul>
      </div>
    )
  },
  "sets": {
    title: "Sets",
    content: (
      <div>
        <p>Sets are data structures that store unique elements. They provide efficient membership testing, insertion, and deletion operations.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Removing duplicates from an array</li>
          <li>Finding the union and intersection of two sets</li>
          <li>Checking for the presence of a value</li>
        </ul>
      </div>
    )
  },
  "lists": {
    title: "Lists",
    content: (
      <div>
        <p>Lists are ordered collections of elements. They provide efficient insertion, deletion, and access operations based on the position of the elements.</p>
        <h3>Examples:</h3>
        <ul>
          <li>Reversing a list</li>
          <li>Sorting a list</li>
          <li>Finding the maximum and minimum values in a list</li>
        </ul>
      </div>
    )
  }
};

const TopicPage = () => {
  const { topic } = useParams();
  const topicData = topicContent[topic];

  if (!topicData) {
    return (
      <div>
        <h1>Topic Not Found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{topicData.title}</h1>
      <p>{topicData.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:topic" element={<TopicPage />} />
    </Routes>
  );
}

export default App;


