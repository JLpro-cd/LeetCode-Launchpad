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
        <p>A tool to help you master Leetcode problems by understanding their patterns and 'tricks'!</p>
        <p>Created and written by Josue Lopez</p>
      </div>
      <div className="boxes-container">
        <div className="box1">
          <h2>Select a problem category to study</h2>
          <ul>
            <li onClick={() => handleItemClick('Two Pointer')}><div>Two Pointer</div></li>
            <li onClick={() => handleItemClick('Hashing')}><div>Hashing</div></li>
            <li onClick={() => handleItemClick('Sliding Window')}><div>Sliding Window</div></li>
            <li onClick={() => handleItemClick('Graphs')}><div>Graphs</div></li>
            <li onClick={() => handleItemClick('Dynamic Programming')}><div>Dynamic Programming</div></li>
            <li onClick={() => handleItemClick('Backtracking')}><div>Backtracking</div></li>
            <li onClick={() => handleItemClick('Binary Search')}><div>Binary Search</div></li>
          </ul>
        </div>
        <div className="box2">
          <h2>Study a specific data structure</h2>
          <ul>
            <li onClick={() => handleItemClick('List')}><div>List</div></li>
            <li onClick={() => handleItemClick('Sets')}><div>Set</div></li>
            <li onClick={() => handleItemClick('Dictionary')}><div>Dictionary</div></li>
            <li onClick={() => handleItemClick('Linked List')}><div>Linked List</div></li>
            <li onClick={() => handleItemClick('Stack')}><div>Stack</div></li>
            <li onClick={() => handleItemClick('Queue')}><div>Queue</div></li>
            <li onClick={() => handleItemClick('Tree')}><div>Tree</div></li>
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
        <p>The two-pointer technique is a useful tool for solving problems involving arrays or lists. It involves using two pointers to traverse the array or list in order to achieve a certain condition or goal.</p>
        <h3>Examples:</h3>
        <ul>
          <li>
            <div className="example-container">
              <div className="example-content">
                <a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/" target="_blank" rel="noopener noreferrer">Two Sum II - Input Array is Sorted</a>
                <p className="example-description">Find two numbers that add up to a specific target in a 1-indexed sorted in non-decreasing order and return their indices. Solution must use O(1) additional space.</p>
              </div>
              <div className="separator"></div>
              <div className="trick-description">
                Something important to note right away is that we are being given a sorted array - This is important because often enough, this plays a pivotal role in finding the solution. Immediately pivot to thinking: "How can I use the fact that the array is sorted to help me solve the problem?"<br /><br />
                Another important thing is the required O(1) space complexity, meaning we cannot use any additional data structures in the answer. This should also nudge us towards a two pointer approach if we weren't thinking about it yet, as the approach uses no additional data structures. <br /><br />
                Begin with two pointers, one at the beginning of the string (<code>left</code>) and one at the end (<code>right</code>). We can take advantage of the array being sorted by checking the <code>sum</code> of <code>array[left] + array[right]</code>. If <code>sum &gt; target</code>, then
                we should subtract one from <code>right</code>, making our <code>sum</code> smaller. Inversely, if <code>sum &lt; target</code>, we should add one to <code>left</code> to increase our <code>sum</code>. If <code>sum == target</code> , then we have found our answer and we can: <br /><br />
                <code>return [left + 1, right + 1]</code> <br /><br />
                Keeping in mind that this is a 1-indexed array, meaning it begins count at 1 instead of 0. This is why we add 1 to both of the final indices.
              </div>
            </div>
          </li>
          <li>
            <div className="example-container">
              <div className="example-content">
                <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/description/" target="_blank" rel="noopener noreferrer">Longest SubString Without Repeating Characters</a>
                <p className="example-description">Given a string, return the length of the longest substring without repeating characters.</p>
              </div>
              <div className="separator"></div>
              <div className="trick-description">
                Whenever a problem mentions 'repeating' or 'duplicates', sets and dictionaries should come to mind, as they allows us to quickly check for the existence of values within them. In this problem, we want to create a 'sliding window' with our two pointers, updating it as we find repeating characters <br /><br />
                We will use two pointers, <code>left</code> and <code>right</code>, both beginning at <code>0</code>. We will use <code>right</code> to navigate through the string, checking if a character is in our <code>charSet</code>: <br /><br />
                If it isn't in <code>charSet</code>, we add it to our set and iterate again, but not before checking if our current count is greater than our total count. We can do this with <code>answer = max(answer, right - left + 1)</code>, where <code>right - left + 1</code> is our current substring length <br /><br />
                If it is in <code>charSet</code>, then we start updating <code>left</code> by 1, removing <code>charSet[left]</code> along the way so that we can begin our count again with an empty set. <br /><br />
                Once <code>right</code> reaches <code>len(s)</code>, we have finished and can return <code>answer</code>.
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
                When working with strings, pay extra attention to requirements. For this problem, we need to ensure the comparison is case-insensitive and ignores non-alphanumeric characters. Python provides useful methods to help with this: <br /><br />

                <b>Cleaning the String:</b> <br />
                - Use <code>str.lower()</code> to convert the string to lowercase.<br />
                - Use <code>filter(str.isalnum, string)</code> to remove non-alphanumeric characters. <br /><br />

                Example: <br />
                <pre><code>
                cleaned_str = ''.join(filter(str.isalnum, original_string.lower()))
                </code></pre>
                After cleaning, we can use a two-pointer technique to check for a palindrome: <br /><br />
                Begin with two pointers, one at the beginning of the string (<code>left</code>) and one at the end (<code>right</code>). Check that both point to the same character (<code>cleaned_str[left] == cleaned_str[right]</code>), and if they do, bring them both one index closer to the center. If <code>left &gt; right</code>, then we have checked both halves for equality and can safely return <code>True</code>. If the pointers are ever not equal, return <code>False</code>.

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
  "sliding-window": {
    title: "Sliding Window",
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
  "graphs": {
    title: "Graphs",
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
  "dynamic-programming": {
    title: "Dynamic Programming",
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
  "backtracking": {
    title: "Backtracking",
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
  "binary-search": {
    title: "Binary Search",
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
  "list": {
    title: "List",
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
  "dictionary": {
    title: "Dictionary",
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
  },
  "linked-list": {
    title: "Linked List",
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
  "stack": {
    title: "Stack",
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
  "queue": {
    title: "Queue",
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
  "tree": {
    title: "Tree",
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


