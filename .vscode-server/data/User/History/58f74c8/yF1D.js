import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const mac_address = 'imane'; // replace this with your mac address
    const socket = new WebSocket(`ws://localhost:8000/ws/vitalsigns/average/${mac_address}`);

    socket.onopen = () => {
      console.log('Connected to the server');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received:', data);
    };

    socket.onerror = (error) => {
      console.log('Error:', error);
    };

    socket.onclose = () => {
      console.log('Connection closed');
    };

    // Disconnect WebSocket when component unmounts
    return () => {
      socket.close();
    };
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
