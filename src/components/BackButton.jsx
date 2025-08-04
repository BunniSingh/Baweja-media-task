import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    let navigate = useNavigate();
    return (
        <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => navigate(-1)}>
            Back
        </button>
    )
}

export default BackButton