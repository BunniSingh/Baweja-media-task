import React from 'react'
import '.././App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className='hero-page'>
            <div className="hero-sub">
                <p>Click <strong>ToDo</strong> or <strong>GitHub</strong> to navigate</p>
                <div>
                    <button onClick={() => navigate('/todo')}>To-Do</button>
                    <button onClick={() => navigate('/github')}>GitHub</button>
                </div>
            </div>
        </div>
    )
}

export default Home