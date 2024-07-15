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
          <p>Hashing is a technique used to uniquely identify a specific object from a group of similar objects. It involves converting data into a fixed-size integer, which acts as a unique identifier (hash code). <br /><br /> Hashing is commonly used in data structures like hash tables, maps, and sets to enable fast data retrieval, insertion, and deletion operations.</p>
          <h3>Examples:</h3>
          <ul>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/find-the-difference-of-two-arrays/description/" target="_blank" rel="noopener noreferrer">Find the Difference of Two Arrays</a>
                  <p className="example-description">Given two 0-indexed arrays <code>nums1</code> and <code>nums2</code>, return a list <code>answer</code> where <code>answer[0]</code> has all distinct values in <code>nums1</code> but not in <code>nums2</code>, and <code>answer[1]</code> has all distinct values in <code>nums2</code> but not in <code>nums1</code></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                  Although this problem is relatively simple, it highlights an important point when it comes to hashing in Python. "Do I want to use a set or a dictionary here?" <br></br>
                  One of the main considerations in deciding between a set and a dictionary is whether you need to keep track of the frequency of values. If frequency tracking is required, then a dictionary is the appropriate choice. <br></br>If you only care about the presence of values, a set will likely suffice and be easier to work with. <br></br>
                  <br></br>
                  In this problem, we only care about distinct integers and whether they are in the other list, so a set is more appropriate. We can convert these initial lists into sets using <code>set(nums1)</code> and <code>set(nums2)</code>. This allows us to efficiently check for the presence of elements between the two lists. Now, we can iterate through both lists separately, checking if each number is not in the other list's set. If it isn't, we are free to add it to our answer list. <br></br>
                  <br></br>
                  <b>BUT WAIT!</b><br></br>
                  <br></br>
                  As our answer currently is, we will be returning duplicates in our answer list (i.e. <code>[[3, 3] [4, 5]]</code> where it should be <code>[[3], [4, 5]]</code>). Does this ring any bells? Instead of inserting our numbers into answer lists, we can add them to two separate sets, and then convert them back to lists at the end with <code>list()</code>. This will ensure our answer lists have no duplicates.
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/unique-number-of-occurrences/description/" target="_blank" rel="noopener noreferrer">Unique Number of Occurrences</a>
                  <p className="example-description">Given an array of integers, return <code>True</code> if the number of occurrences of each value in the array is unique or <code>False</code> otherwise</p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                  The word 'occurrences' in the title and description should alarm us that we might need to use a dictionary. <br></br>Essentially, we want to count how many occurrences each value has (i.e. its frequency), which we can do by iterating through and updating our dictionary, which we'll call <code>freq</code>. <br></br>
                  We can safely create new occurrences and update existing ones in <code>freq</code> by iterating through the array and using the <code>.get()</code> method: <br></br>
                  <br></br>
                  <code>freq[num] = freq.get(num, 0) + 1 </code> <br></br>
                  <br></br>
                  This is essentially saying "update existing values' counts by one, or initialize the count to one if it doesn't exist yet". We have to be careful with trying to access values in a dictionary that do not exist (or else errors occur), which why we do it this way. <br></br>
                  Finally, we can iterate through <code>freq.values()</code>, checking for duplicates. You can do this with a new set, where we check if the value is within it. If it is, return <code>False</code>, otherwise, add it to the set. If we make it past this loop, we can safely <code>return True</code>.
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/determine-if-two-strings-are-close/description/" target="_blank" rel="noopener noreferrer">Determine if Two Strings Are Close</a>
                  <p className="example-description">Two strings are considered close if you can attain one from the other using the following operations: 1. Swap any two existing characters. 2. Transform every occurence of one existing character into another, and do the same with the other character</p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                  I recommend that you click on the Leetcode link and read their description if you are confused, as the premise of the problem can be hard to understand.<br></br>
                  This one seems tricky, but it's actually straightforward you understand what it is asking. Despite both operations, we still need the same set of characters in both strings. Therefore, we can check if <code>set(word1) != set(word2)</code> and <code>return False</code> if they are not equal. <br></br>
                  However, it's still possible that the two strings are not 'close' even if they make it past this check. Knowing that they do have the same set of characters, we need to compare the frequencies of these characters. The specific characters don’t matter; only the frequencies themselves do. <br></br>
                  We can use <code>Counter(word1)</code> and <code>Counter(word2)</code> to find the frequencies  (lets call the result <code>counter1</code> and <code>counter2</code>) of each letter, and then sort <code>counter1.values()</code> and <code>counter2.values()</code>. Once we have them sorted, we just need to check if they are equal. <br></br>
                  If they are, then <code>return True</code>, otherwise <code>return False</code>
                </div>
              </div>
            </li>
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
    "set": {
      title: "Set",
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

  export default topicContent;