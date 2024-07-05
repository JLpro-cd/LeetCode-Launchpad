import { useState } from 'react';
import './App.css';

function App() {
  const handleItemClick = (item) => {
    console.log(`${item} clicked`);
    // Handle the click event for the list item
  };

  return (
    <div>
      <div className="header-container">
        <h1>Python Leetcode Grind Assistant</h1>
        <p>Your personal assistant to help you master Leetcode problems for job interviews</p>
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

export default App;

