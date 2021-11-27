import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book a trip</h1>
        <p>An amazing journey is waiting for you and your loved ones! You’re just one step away from a new adventure:</p>
      </header>

      <div className="AppForm">
        <form action="#" method="post">
          <p>
            <label for='name'>Your Name</label>
            <input type="text" name='name' id='name'></input>
          </p>
          <p>
            <label for='email'>E-mail Address</label>
            <input type='text' name='email' id='email'></input>
          </p>
          <p>
            <label for='phone'>Phone Number</label>
            <input type="text" name="phone" id="phone"></input>
          </p>

          <ul>
            <li>
              <label for="adults">Adults</label>
              <input type="number" name="adults" id="adults"></input>
            </li>
            <li>
              <label for="kids">Kids</label>
              <input type="number" name="kids" id="kids"></input>
            </li>
            <li>
              <label for="cabins">Cabin Rooms</label>
              <input type="number" name="cabins" id="cabins"></input>
            </li>
            <div className="formSubmit">
              <button>Complete Your Booking</button>
            </div>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
