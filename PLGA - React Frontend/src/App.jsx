import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import FlashCardList from './flashCardListComponent';
import { flashCardsData } from './flashCardDS';
import topicContent from './topicContent';
import SignUp from './SignUp';
import SignIn from './SignIn';
// NEXT STEPS: ADD A LOG OUT BUTTON, MAKE LOGIN AND LOGOUT BUTTONS NEATER, CONTINUE WORKING ON CONTENT

function Home() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch('/api/check-auth/', { // Check user authentication and set accordingly
    method: 'GET',
    credentials: 'include',
  })
    .then(response => response.json())
    .then(data => {
      console.log('Auth check data:', data);
      setIsAuthenticated(data.isAuthenticated);
      if (data.isAuthenticated) {
        setUsername(data.username)
      }
    })
  }, [])

  const handleItemClick = (item) => { 
    console.log(`${item} clicked`);
    navigate(`/${item.toLowerCase().replace(/ /g, '_')}`); // Lowercase and replace space with _. So "Two Pointer" -> "two_pointer" 
  };

  return (
    <div>
      <div className="header-container">
        <h1>Python Leetcode Grind Assistant</h1>
        <p>A tool to help you master Leetcode problems/categories by understanding their overarching patterns and tricks!</p>
        <p>Created and written by Josue Lopez</p>

        {/* Conditionally render the login button or welcome message */}
        {!isAuthenticated ? (
          <Link to="/signin">
          <button>Login or Sign Up</button>
          </Link>
        ) : (
          <p>Welcome, {username}!</p> 
        )}

      </div>
      <div className="boxes-container">
        <div className="box1">
          <h2>Select a problem category to study</h2>
          <ul>
            <li onClick={() => handleItemClick('Hashing')}><div>Hashing</div></li>
            <li onClick={() => handleItemClick('Two Pointer')}><div>Two Pointer</div></li>
            <li onClick={() => handleItemClick('Sliding Window')}><div>Sliding Window</div></li>
            <li onClick={() => handleItemClick('Binary Search')}><div>Binary Search</div></li>
            <li onClick={() => handleItemClick('Graphs')}><div>Graphs</div></li>
            <li onClick={() => handleItemClick('Backtracking')}><div>Backtracking</div></li>
            <li onClick={() => handleItemClick('Dynamic Programming')}><div>Dynamic Programming</div></li>
          </ul>
        </div>
        <div className="box2">
          <h2>Study a specific data structure</h2>
          <ul>
            <li onClick={() => handleItemClick('List')}><div>List</div></li>
            <li onClick={() => handleItemClick('Set')}><div>Set</div></li>
            <li onClick={() => handleItemClick('Dictionary')}><div>Dictionary</div></li>
            <li onClick={() => handleItemClick('Linked List')}><div>Linked List</div></li>
            <li onClick={() => handleItemClick('Queue')}><div>Queue (deque)</div></li>
            <li onClick={() => handleItemClick('Tree')}><div>Tree</div></li>
            <li onClick={() => handleItemClick('Heap')}><div>Heap</div></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


const TopicPage = () => {
  const { topic } = useParams();
  const topicData = topicContent[topic];
  const flashcards = flashCardsData[topic];

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
      <div>{topicData.content}</div>
      {flashcards && flashcards.length > 0 && (
        <>
          <h3>Flashcards:</h3>
          <FlashCardList flashcards={flashcards} />
        </>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:topic" element={<TopicPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}


export default App;


