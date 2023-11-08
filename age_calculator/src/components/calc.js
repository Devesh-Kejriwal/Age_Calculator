import React, { useState } from 'react';

export function Agecalc() {
    const [age, setAge] = useState(0);
    const handleClick = () => {
        const inp = document.getElementById('inp').value;
        const today = new Date();
        const birthDate = new Date(inp);
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
            setAge(age - 1);
        else
            setAge(age);
    }
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="text-center">
                <h1>Age calculator</h1>
                <h4>Enter your date of birth</h4>
                <input type="date" id="inp" className="form-control" style={{ maxWidth: '200px' }} /><br></br>
                <button onClick={handleClick} className="btn btn-primary">Calculate Age</button>
                <p>You are {age} years old</p>
            </div>
        </div>
    )
}