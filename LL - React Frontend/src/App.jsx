import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import FlashCardList from './components/flashCard/flashCardListComponent';
import { flashCardsData } from './components/flashCard/flashCardDS';
import topicContent from './topicContent';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import { Box, Button, Typography, List, ListItem, Grid2 } from '@mui/material';
import { getCookie } from './util/utils';
// NEXT STEPS: fill out home page more, work on content, start optional GPT API implementation

function Home() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [username, setUsername] = useState('');

  useEffect(() => { // Check user authentication and set accordingly
    fetch('/api/check-auth/', { 
    method: 'GET',
    credentials: 'include',
  })
    .then(response => response.json())
    .then(data => {
      setIsAuthenticated(data.isAuthenticated);
      if (data.isAuthenticated) {
        setUsername(data.username)
      }
    })
  }, [])

  const handleLogout = () => {
    fetch('/api/logout/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken'),
    },
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          setIsAuthenticated(false);
          setUsername('');
          navigate('/');
        } else {
          console.error("Failed to log out");
        }
      })
      .catch((error) => {
        console.error("Error during logout", error);
      })
  };

  const handleItemClick = (item) => { 
    console.log(`${item} clicked`);
    navigate(`/${item.toLowerCase().replace(/ /g, '_')}`); // Lowercase and replace space with _. So "Two Pointer" -> "two_pointer" 
  };

  return (
    <Box p = {3}>
      <Box textAlign="center" mb = {4}>
        <Typography className= "web-title" variant="h3" sx={{fontWeight: 700}}>LeetCode Launchpad</Typography>
        <Typography variant="subtitle1">Your guide to exploring LeetCode problems and categories by uncovering key patterns and strategies!</Typography>
        <Typography p = {2} variant = "body2">Created and written by Josue Lopez</Typography>
        {/* Conditionally render the login button or welcome message */}
        {!isAuthenticated ? (
          <Link to="/signin">
          <Button className="sign-in-out" variant="outlined">Log In or Sign Up</Button>
          </Link>
        ) : (
          <>
          <p>Welcome, {username}!</p> 
          <Button className="sign-in-out" variant="outlined" onClick = {handleLogout}>Sign Out</Button>
          </>
        )}
      </Box>
      <Grid2 container spacing = {12}>
        <Grid2>
          <Box className = "list-boxes" border = {1} borderColor = "gray" borderRadius={4} p = {3}>
            <Typography variant = "h5" sx= {{fontWeight: 700 }}>Select a problem category to study</Typography>
            <List>
            <ListItem className="hover-text" onClick={() => handleItemClick('Hashing')}>Hashing</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Two Pointer')}>Two Pointer</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Sliding Window')}>Sliding Window</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Binary Search')}>Binary Search</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Graphs')}>Graphs</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Backtracking')}>Backtracking</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Dynamic Programming')}>Dynamic Programming</ListItem>
            </List>
          </Box>
        </Grid2>
        <Grid2>
          <Box className = "list-boxes" border = {1} borderColor = "gray" borderRadius = {4} p = {3}>
            <Typography variant = "h5" sx= {{fontWeight: 700 }}>Study a specific data structure</Typography>
            <List>
            <ListItem className="hover-text" onClick={() => handleItemClick('List')}>List</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Set')}>Set</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Dictionary')}>Dictionary</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Linked List')}>Linked List</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Queue')}>Queue (Deque)</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Tree')}>Tree</ListItem>
            <ListItem className="hover-text" onClick={() => handleItemClick('Heap')}>Heap</ListItem>
            </List>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
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


