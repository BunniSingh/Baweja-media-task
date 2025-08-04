import React, { useRef, useState } from 'react'
import './GitHub.css';
import BackButton from '../BackButton';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../slices/githubSlice';

const GitHub = () => {
  let { user } = useSelector((state) => state.github);
  let [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  let inputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = inputRef.current.value.trim();
    if (username) {
      try {
        setLoading(true);
        let res = await axios.get(`https://api.github.com/users/${username}`);
        dispatch(setUser(res.data));
        inputRef.current.value = '';
      } catch (error) {
        console.error("Error fetching GitHub user:", error);
        alert('User not found please enter a valid username. Try again.!!');
        inputRef.current.focus();
      }finally{
        setLoading(false);
      }
    } else {
      alert('Please enter a GitHub username');
    }
  }
  return (
    <div className="github-container">
      <h2>Search a GitHub user to get started</h2>
      <BackButton />
      <div className="github">
        <form onSubmit={handleSubmit} className="github-form">
          <input ref={inputRef} type="text" placeholder="Enter GitHub username" className="github-input" />
          <button type="submit">{loading ? "Searching..." : "Search"}</button>
        </form>
        <div className="github-results">
          {user && (
            <div className="github-card">
              <img src={user.avatar_url} alt={user.login} className="github-avatar" />
              <h3>{user.name || user.login}</h3>
              <p><strong>Bio:</strong> {user.bio || "Not available"}</p>
              <p><strong>Location:</strong> {user.location || "Not specified"}</p>
              <p><strong>Followers:</strong> {user.followers}</p>
              <p><strong>Public Repos:</strong> {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="profile-link">View Profile</a>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default GitHub