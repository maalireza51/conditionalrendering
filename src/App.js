import React from 'react'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <span id='enter-form' class='neon'>
          <h3>My chat app</h3>
          <form>
            <input type='text' id="name" placeholder="Write your name . . ." />
            <input type="submit" value="Enter" />
          </form>
        </span>
      </div>
    </div>
  );
}

export default App;
