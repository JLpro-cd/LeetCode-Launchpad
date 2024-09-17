const topicContent = {
    "two_pointer": {
      title: "Two Pointer",
      content: (
        <div>
          <p>The two-pointer technique is a useful tool for solving problems involving arrays or lists. It involves using two pointers to traverse the array or list in order to achieve a specific condition or goal.
          <p></p>
          This technique differs from the sliding window approach in that it typically focuses on comparing the values at the pointers and making decisions based on those comparisons, rather than considering the entire contiguous subset between the pointers, as is done in the sliding window technique.</p>
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
                  <p>
                    Something important to note right away is that we are being given a sorted array - This is important because often enough, this plays a pivotal role in finding the solution. Immediately pivot to thinking: "How can I use the fact that the array is sorted to help me solve the problem?"
                  </p>
                  <p>
                    Another important thing is the required O(1) space complexity, meaning we cannot use any additional data structures in the answer. This should also nudge us towards a two pointer approach if we weren't thinking about it yet, as the approach uses no additional data structures.
                  </p>
                  <p>
                    Begin with two pointers, one at the beginning of the string (<code>left</code>) and one at the end (<code>right</code>). We can take advantage of the array being sorted by checking the <code>sum</code> of <code>array[left] + array[right]</code>. If <code>sum &gt; target</code>, then
                    we should subtract one from <code>right</code>, making our <code>sum</code> smaller. Inversely, if <code>sum &lt; target</code>, we should add one to <code>left</code> to increase our <code>sum</code>. If <code>sum == target</code> , then we have found our answer and we can:
                  </p>
                  <p>
                    <code>return [left + 1, right + 1]</code> 
                  </p>
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
                  <p>
                    Whenever a problem mentions 'repeating' or 'duplicates', sets and dictionaries should come to mind, as they allows us to quickly check for the existence of values within them. In this problem, we want to create a 'sliding window' with our two pointers, updating it as we find repeating characters
                  </p>
                  <p>
                    We will use two pointers, <code>left</code> and <code>right</code>, both beginning at <code>0</code>. We will use <code>right</code> to navigate through the string, checking if a character is in our <code>charSet</code>:
                  </p>
                  <p>
                    If it isn't in <code>charSet</code>, we add it to our set and iterate again, but not before checking if our current count is greater than our total count. We can do this with <code>answer = max(answer, right - left + 1)</code>, where <code>right - left + 1</code> is our current substring length
                  </p>
                  <p>
                    If it is in <code>charSet</code>, then we start updating <code>left</code> by 1, removing <code>charSet[left]</code> along the way so that we can begin our count again with an empty set.
                  </p>
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
                  <p>
                    When working with strings, pay extra attention to requirements. For this problem, we need to ensure the comparison is case-insensitive and ignores non-alphanumeric characters. Python provides useful methods to help with this:
                  </p>
                  <p>
                    <b>Cleaning the String:</b> <br />
                    - Use <code>str.lower()</code> to convert the string to lowercase.<br />
                    - Use <code>filter(str.isalnum, string)</code> to remove non-alphanumeric characters.
                  </p>
                  Example:
                  <pre><code>
                  cleaned_str = ''.join(filter(str.isalnum, original_string.lower()))
                  </code></pre>
                  <p>
                    After cleaning, we can use a two-pointer technique to check for a palindrome:
                  </p>
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
          <p>Hashing is a technique used to uniquely identify a specific object from a group of similar objects. It involves converting data into a fixed-size integer, which acts as a unique identifier (hash code).
          <p></p>  
          Hashing is commonly used in data structures like hash tables, maps, and sets to enable fast data retrieval, insertion, and deletion operations.</p>
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
                  <p>
                    Although this problem is relatively simple, it highlights an important point when it comes to hashing in Python. "Do I want to use a set or a dictionary here?"
                  </p>
                  <p>
                    One of the main considerations in deciding between a set and a dictionary is whether you need to keep track of the frequency of values. If frequency tracking is required, then a dictionary is the appropriate choice.
                  </p>
                  <p>
                    If you only care about the presence of values, a set will likely suffice and be easier to work with. 
                  </p>
                  In this problem, we only care about distinct integers and whether they are in the other list, so a set is more appropriate. We can convert these initial lists into sets using <code>set(nums1)</code> and <code>set(nums2)</code>. This allows us to efficiently check for the presence of elements between the two lists. Now, we can iterate through both lists separately, checking if each number is not in the other list's set. If it isn't, we are free to add it to our answer list. <br></br>
                  <br></br>
                  <p>
                    <b>BUT WAIT!</b>
                  </p>
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
                  <p>
                    The word 'occurrences' in the title and description should alarm us that we might need to use a dictionary.
                  </p>
                  <p>
                    Essentially, we want to count how many occurrences each value has (i.e. its frequency), which we can do by iterating through and updating our dictionary, which we'll call <code>freq</code>. 
                    We can safely create new occurrences and update existing ones in <code>freq</code> by iterating through the array and using the <code>.get()</code> method:
                  </p>
                  <p>
                    <code>freq[num] = freq.get(num, 0) + 1 </code> 
                  </p>
                  <p>
                    This is essentially saying "update existing values' counts by one, or initialize the count to one if it doesn't exist yet". We have to be careful with trying to access values in a dictionary that do not exist (or else errors occur), which why we do it this way.
                  </p>
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
                  <p>
                    I recommend that you click on the Leetcode link and read their description if you are confused, as the premise of the problem can be hard to understand.
                  </p>
                  <p>
                    This one seems tricky, but it's actually straightforward you understand what it is asking. Despite both operations, we still need the same set of characters in both strings. Therefore, we can check if <code>set(word1) != set(word2)</code> and <code>return False</code> if they are not equal.
                  </p>
                  <p>
                    However, it's still possible that the two strings are not 'close' even if they make it past this check. Knowing that they do have the same set of characters, we need to compare the frequencies of these characters. The specific characters don’t matter; only the frequencies themselves do. <br></br>
                  </p>
                  <p>
                    We can use <code>Counter(word1)</code> and <code>Counter(word2)</code> to find the frequencies  (lets call the result <code>counter1</code> and <code>counter2</code>) of each letter, and then sort <code>counter1.values()</code> and <code>counter2.values()</code>. Once we have them sorted, we just need to check if they are equal. <br></br>
                  </p>
                  If they are, then <code>return True</code>, otherwise <code>return False</code>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    "sliding_window": {
      title: "Sliding Window",
      content: (
        <div>
          <p>Sliding window is a technique similar to two pointers, but distinct in the fact that it involves maintaining a 'window' that contains elements, rather than comparding individual values at the pointers themselves.
          <p></p>
          It is typically used when we want to maintain a contigious subset of elements, which is the main difference between it and the two pointers technique.</p>
           <ul>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/description/" target="_blank" rel="noopener noreferrer">Longest Substring Without Repeating Characters</a>
                  <p className="example-description">Given a string s, find the length of the longest substring without duplicate characters.</p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                  <p>
                    To find the longest substring without duplicate characters, we can use a set <code>ourSet</code> to keep track of the characters currently in our sliding window. We will use two pointers <code>l</code> and <code>r</code>, both which will be <code>= 0</code>. We will iterate through the string with <code>r</code>. 
                  </p>
                  <p>
                    With sliding window problems, there is something that defines progression/iteration. In this problem, this "something" is checking if the character at <code>s[r]</code> already in <code>ourSet</code>. If it isn't we add it to <code>ourSet</code> and move <code>r</code> forward by <code>1</code>
                  </p>
                  <p>
                    While we're doing this, we want to keep track of the longest our window gets, which we can effectively get with <code>len(ourSet)</code>. I like doing <code>maxLength = max(maxLength, len(ourSet))</code> after we add <code>s[r]</code> to <code>ourSet</code>, <br></br> but you could also get the length of the window with <code>r - l + 1</code> 
                  </p>
                  <p>
                    If <code>s[r]</code> is in <code>ourSet</code>, then we must do something else. This part requires some thought and involves a common technique in sliding window problems. What could we do here? A couple ideas come to mind: <br></br>
                    We could move <code>l</code> all the way to <code>r</code>, and start the count fresh. This is probably what most people think of doing initially, but consider a case such as with <code>s = "aearo"</code>. Moving the window directly to start at the second <code>"a"</code> would make our final count 
                    <br></br>
                    <code>3</code> intead of <code>4</code>, as we're skipping over the <code>"e"</code> <br></br>
                  </p>
                  <p>
                    Instead, what if we only removed what we needed to from the sliding window? We are essentially looking to remove the first "a", as that is one of the two duplicates. We should remove <code>s[l]</code> and increment it <code>while s[r]</code> is still in <code>ourSet</code>. 
                  </p>
                  <p>
                    This is what I was referring to previously. Many sliding window problems will use a <code>while</code> loop to move the left side of the sliding window to a correct position once again. Keep this in mind for future problems.
                  </p>
                  Once we've iterated through the entire string (<code>s[r]</code> reached <code>len(s)</code>), we can return <code>maxLength</code>, which represents the length of the longest substring found during the process.
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/" target="_blank" rel="noopener noreferrer">Best Time to Buy and Sell Stock</a>
                  <p className="example-description">Given an array prices, where prices[i] is the price of a given stock on the ith day, you want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If no profit can be made, return 0.</p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                  <p>
                    This is a relatively simple problem that involves some greedy thinking. We have the timeline of a stock, and each index forward means another day. We cannot buy a stock and sell it in the past (a previous index). 
                  </p>
                  <p>
                    Knowing this, ask yourself the following: "Is there any reason for me to not buy the lowest priced stock I've seen so far?"
                  </p>
                  <p>
                    This is our greedy heuristic. We will use a variable <code>maxprofit = 0</code> to keep track of our highest profit at any time. Let's use two pointers, <code>l</code> and <code>r</code> (which are initialized to 0) and iterate through <code>prices</code>. <code>while r &lt; len(prices)</code>, will be our condition, as once we've seen every stock price, we're finished.
                  </p>                    
                  <p>
                    If <code>prices[r] &gt; prices[l]</code>, then we've found a new lowest price, and we can set l = r. This is like putting a pin on the price, saying "we'll stay here until I find something even lower."  
                  </p>
                  <p>
                    We also want to keep track of our max profit in every iteration, so before finishing this iteration, let's see if we have a new max with: <code>maxprofit = max(maxprofit, prices[r] - prices[l])</code>.
                  </p>
                  <p>
                    Finally, we increment <code>r</code> by one and continue. Once we exit out of the while loop (due to r reaching the end), we can safely return <code>maxprofit</code>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/permutation-in-string/description/" target="_blank" rel="noopener noreferrer">Permutation in String</a>
                  <p className="example-description">Given two strings s1 and s2, return True if s2 contains a permutation of s1, or False otherwise.</p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                  <p>
                    Although this problem may seem complicated initially, it really isn't too bad. We're going to check every substring of size <code>len(s1)</code> in <code>s2</code> and see if they contain the same frequency of characters.
                  </p>
                  <p>
                    To begin, let's initialize our two pointers <code>l = 0</code> and <code>r = len(s1) - 1</code>, as well as two dictionaries (frequency maps) <code>freq1 = Counter(s1)</code> and <code>freq2 = Counter(s2[:r])</code>. Like mentioned previously, we want to check all of s2's substrings of size <code>len(s1)</code>, hence the <code>s2[:r]</code>. 
                  </p>
                  <p>
                    Now, we will iterate through <code>s2</code> with <code>while r &lt; len(s2)</code>. We will add the current character we're on (<code>s2[r]</code>) to freq2 with <code>freq2[s2[r]] = freq2.get(s2[r], 0) + 1</code>. This is essentially saying, "if <code>s2[r]</code> is in the dictionary, add 1 to the count, else add it to the dictionary with a count of 1".
                  </p>
                  <p>
                    After doing that, we have the character frequencies of all of the entire substring in our current window (the window being l to r). We check if <code>freq1 == freq2</code>. If it is ==, we can return <code>True</code>, as this means s2 contains a permutation of s1.
                  </p>
                  <p>
                    If it isn't ==, we want to slide our window forward, meaning we must remove what was at the end of it. <code>freq2[s2[l]] -= 1</code>, along with incrementing <code>l</code> and <code>r</code> by one after will do just this.
                  </p>
                  <p>
                    If we exit out of the loop, we went through all of s2 and didn't find a permutation. We can safely return <code>False</code>.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    "graphs": {
      title: "Graphs",
      content: (
        <div>
          <p>Graphs are data structures that consist of nodes (or vertices) connected by edges. They are used to represent networks of interconnected objects, such as social networks, transportation systems, and web page links.</p>
          <ul>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/find-the-difference-of-two-arrays/description/" target="_blank" rel="noopener noreferrer">Find the Difference of Two Arrays</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/unique-number-of-occurrences/description/" target="_blank" rel="noopener noreferrer">Unique Number of Occurrences</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
             </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/determine-if-two-strings-are-close/description/" target="_blank" rel="noopener noreferrer">Determine if Two Strings Are Close</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    "dynamic_programming": {
      title: "Dynamic Programming",
      content: (
        <div>
          <p>Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It is used to optimize recursive algorithms by storing the results of subproblems to avoid redundant computations.</p>
          <ul>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/find-the-difference-of-two-arrays/description/" target="_blank" rel="noopener noreferrer">Find the Difference of Two Arrays</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/unique-number-of-occurrences/description/" target="_blank" rel="noopener noreferrer">Unique Number of Occurrences</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/determine-if-two-strings-are-close/description/" target="_blank" rel="noopener noreferrer">Determine if Two Strings Are Close</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    "backtracking": {
      title: "Backtracking",
      content: (
        <div>
          <p>Backtracking is a recursive algorithmic technique used to solve problems by building a solution incrementally, one piece at a time, and removing those solutions that fail to satisfy the problem's constraints. <br></br>
             It explores all possible options by trying out different choices and "backtracks" (undoes the last step) whenever it reaches a dead end or finds that the current path does not lead to a valid solution. <br></br>
              This method is often used in problems involving permutations, combinations, and solving puzzles like Sudoku.</p>
          <ul>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/find-the-difference-of-two-arrays/description/" target="_blank" rel="noopener noreferrer">Find the Difference of Two Arrays</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/unique-number-of-occurrences/description/" target="_blank" rel="noopener noreferrer">Unique Number of Occurrences</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/determine-if-two-strings-are-close/description/" target="_blank" rel="noopener noreferrer">Determine if Two Strings Are Close</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    "binary_search": {
      title: "Binary Search",
      content: (
        <div>
          <p>Binary search is an efficient algorithm for finding an item in an array or list that has some sort of order (typically sorted). It works by repeatedly dividing the search interval in half and selecting one of the two halves to continue searching based on a comparison (heuristic) with the target value.<br></br>
          This process continues until the target is found or the search interval is exhausted.</p>
          <ul>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/binary-search/description/" target="_blank" rel="noopener noreferrer">Binary Search</a>
                  <p className="example-description">Given an array of integers nums, which is sorted in ascending order, and an integer target, write a function to search for target in nums. If target exists, return its index, else return -1. Algo must run with O(log n) time complexity.</p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                  <p>
                    This is the simplest binary search problem (although that doesn't mean it's necessarily easy!), and is the foundation for BS problems in the future. Generally, BS takes the following form:
                  </p>
                  <p>
                    Given an array with some sort of heuristic or quality that allows us to determine where the target is (i.e. sorting, sqrt calcs), we check the middle value of the array. If this value is not our target, we can then pick either the left or right side to move onto.
                  </p>
                  <p>
                    For example, in a sorted array <code>[1, 2, 3, 5]</code> w/ <code>target = 5</code>, <code>mid</code> would be  <code>= 1</code>, meaning <code>arr[mid] = 2</code>. Knowing the array is sorted, we would compare <code>2</code> to our target<code>5</code> and see that our target is greater. Therefore, it must be on the right side of the array.
                  </p>
                  <p>
                    I personally prefer the iterative version of BS, so I present that version although you can do this recursively as well. Code wise, to begin we use two pointers, <code>l = 0</code> and <code>r = len(nums) - 1</code>. We have two choices for our while condition, but they function the same:
                  </p>
                  <p>
                    1. <code>while l &lt;= r</code> - My personal preference. If you use this condition, then you must use <code>l = m + 1</code> and <code>r = m - 1</code> respectfully to select your half. 
                    2. <code>while l &lt; r</code> - If you use this condition, then you must use <code>l = m + 1</code> and <code>r = m</code> respectfully to select your half.
                  </p>
                  <p>
                    Now, inside our while loop, we need to get the midpoint m of the array. In Python, since integers are unbounded (meaning there is no limit to their size), we can simply do <code>m = (l + r) // 2</code>. However, in other languages, where integers are bounded, this can lead to overflow.
                  </p>
                  <p>
                    You can easily solve this issue by calculating the midpoint with <code>m = l + (r - l) // 2</code> instead. This likely won't come up in an interview involving Python, but is good to know nonetheless.
                  </p>
                  <p>
                    Finally, the conditions: If <code>nums[m] == target</code>, we can return m, the index of the target.
                  </p>
                  <p>
                    Else if <code>nums[m] &gt; target</code>, <code>r = m - 1</code> or <code>r = m</code>, depending on which while condition you picked. We move to the left half by bringing the right pointer back.
                  </p>
                  <p>
                    Else, (<code>nums[m] &lt; target</code>) <code>l = m + 1</code>. We move to the right half by bringing the left pointer forward.
                  </p>
                  <p>
                    If we exit out of this loop, we can safely <code>return -1</code>, as we didn't find <code>target</code> in the array.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/search-a-2d-matrix/description/" target="_blank" rel="noopener noreferrer">Search a 2D Matrix</a>
                  <p className="example-description">Given a m x n integer matrix, sorted in non-decreasing order, return True if target is inside the matrix, else False. Solution must run in O(log (m * n)) time complexity</p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                  <p>
                    This is the same problem as before with a few extra steps. I think it's best to think of it as one big list with some caveats.
                  </p>
                  <p>
                    First, calculate the <code>rows</code> and <code>cols</code> of the matrix with <code>len(matrix)</code> and <code>len(matrix[0])</code> respectfully. This is something you'll have to do a lot for graph problems in the future, by the way.
                  </p>
                  <p>
                    We can set <code>l = 0</code> and <code>r = rows * cols - 1</code>. See how we're treating it as one big list still? Pick your preferred while condition for the loop (<code>l &lt;= r </code> or <code>l &lt; r</code>).
                  </p>
                  <p>
                    Now, the hardest part of the problem. Calculating the midpoint in the matrix. our <code>midpoint = (l + r) // 2</code>, but we need to translate this to the matrix. 
                  </p>
                  <p>
                    To do this, we use <code>cols</code>. The number of columns will help us translate the midpoint. <code>midrow = midpoint // cols</code> (integer division // to round down!) will give us the row. If we had <code>midpoint</code> 7 in a 3x4 matrix, <code>midrow = 7 // 4</code>, or 1, which is the second row!   
                  </p>
                  <p>
                    <code>midcol</code> would be <code> = midpoint % cols</code>. With the same example as before, <code>midcol = 7 % 4</code>, which is 3. Our result is, <code>midpoint = 7</code>  in a 3x4 matrix is <code>matrix[1][3]</code>
                  </p>
                  <p>
                    If <code>matrix[midpoint][midcol] == target</code>, we return True.
                  </p>
                  <p>
                    If <code>matrix[midpoint][midcol] &gt; target</code>, <code>r = midpoint - 1</code> or <code>r = midpoint</code> depending on your while condition.
                  </p>
                  <p>
                    Else, (<code>matrix[midpoint][midcol] &lt; target</code>) <code>l = midpoint + 1</code>.
                  </p>
                  <p>
                    If we exit out of this loop, we can safely <code>return False</code>, as we didn't find <code>target</code> in the matrix.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="example-container">
                <div className="example-content">
                  <a href="https://leetcode.com/problems/koko-eating-bananas/description/" target="_blank" rel="noopener noreferrer">Koko Eating Bananas</a>
                  <p className="example-description"></p>
                </div>
                <div className="separator"></div>
                <div className="trick-description">
                </div>
              </div>
            </li>
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
    linked_list: {
      title: "Linked List",
      content: (
        <div>
          <p>A linked list is a linear data structure in which elements, usually called nodes, are stored in a sequence. Linked lists come in two flavors: singly, and doubly. Main difference between these is in what each node contains. <br></br>
          In a singly linked list, a node contains two parts: a value, and a reference (or pointer) to the next node in the list. <br></br>
          A doubly linked list contains these two plus an additional part: a reference (or pointer) to the previous node in the list, allowing backwards traversal of the entire list. <br></br>
          Unlike arrays, linked lists do not store their elements in contiguous memory locations, allowing for efficient insertion and deletion of elements (especially in the front and middle) without needing to shift other elements.</p>
          <h3>Examples:</h3>
          <ul>
            <li>Removing values from the middle of a sequence of elements</li>
            <li>Keeping an order of values that can change efficiently (i.e. least recently used value)</li>
            <li>Traversing through a sequence of elements one by one</li>
          </ul>
        </div>
      )
    },
    "heap": {
      title: "Heap",
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
      title: "Queue (deque)",
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
          <p>A tree is a hierarchical data structure that consists of nodes connected by edges. The structure resembles an inverted tree, with a single node at the top known as the root. <br></br>
          Each node can have 0-2 children (left and/or right child), and nodes without children are called leaves.</p>
          <h3>Examples:</h3>
          <ul>
            <li>Organizing hierarchical data, like file systems or organizational charts</li>
            <li>Implementing efficient search opertaions, like in a binary search tree (BST) or a balanced tree</li>
            <li>Managing strings for applications like autocompletion or spell check (using tries for prefix matching)</li>
          </ul>
        </div>
      )
    },
  };

  export default topicContent;