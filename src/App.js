import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="profile-card">
          <img
            src="/profile-picture.svg"
            alt="Profil Fotoğrafı"
            className="profile-image"
          />
          <h1 className="name">@codingsalt</h1>
          <p className="title">Web Developer & Content Creator</p>
        </div>
      </div>
    </div>
  );
}

export default App;
