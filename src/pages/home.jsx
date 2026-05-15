function Home() {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1>Welcome aboard</h1>
        <p>You are now logged in. The interface has been updated for a polished, production-ready layout.</p>

        <div className="stat-grid">
          <div className="stat-box">
            <h3>Fast access</h3>
            <p>Modern page structure and clean spacing create a smooth user flow.</p>
          </div>

          <div className="stat-box">
            <h3>Secure feel</h3>
            <p>Better contrast, rounded cards, and refined typography improve trust.</p>
          </div>

          <div className="stat-box">
            <h3>Responsive</h3>
            <p>The layout works well on desktop and mobile screens with consistent spacing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
