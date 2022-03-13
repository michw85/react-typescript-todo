import React from "react";
import { useNavigate } from "react-router-dom"

export  const AboutPage: React.FC = () => {
    const history = useNavigate()
    return (
        <>
            <h1>About page</h1>
            <button className="btn" onClick={() => history('/')}>
                Return
            </button>
        </>     
    )
}