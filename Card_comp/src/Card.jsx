import profilePic from "./assets/profilePic.jpeg";

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Nishant Kumar</h2>
            <p className="card-text">I am pursuing Btech CSE</p>
        </div>
    );
}

export default Card;