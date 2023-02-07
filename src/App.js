import logo from './logo.svg';
import './App.css';

function App() {

    window.electronAPI.fetchRenderAfterMainReplay(async (event) => {
        // console.log('fetch render from main =>');
        // const res = await fetchFromRenderAfterMain();

    });

    const fetchFromMain = async () => {
        try {
            // const response = await fetch("https://localhost:4433");
            console.log('click test')
            await window.electronAPI.fetchFromMain();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button
                    className="App-link"
                    onClick={() => fetchFromMain()}
                >
                    Test Teradata
                </button>
            </header>
        </div>
    );
};

export default App;
