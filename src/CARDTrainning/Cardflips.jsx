import { useState } from 'react'
import './Cardflip.css'
export const Cardflips = () => {
    const [isfliped, setIsfliped] = useState(false)
    const handleFliped = () => {
        setIsfliped(!isfliped)
    }
    return (
        <>
            <div>

            </div>
        </>
    )
}

return (
    <div className="App">
        <div className="container">
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card-content">{cardFront}</div>
                        <button className="flip-button"onClick={handleFlip}>Flip</button>
                    </div>
                    <div className="flip-card-back">
                        <div className="card-content">{cardBack}</div>
                        <button className="flip-button"onClick={handleFlip}>Flip</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


