import LoggerContext from './context/LoggerContext';
import Layout from './hoc/Layout';

function App() {
  const value = {
      helloMessage: 'Hello from'
  };

  return (
    <div className="App">
      <LoggerContext.Provider value={value}>
        <Layout />
      </LoggerContext.Provider>
    </div>
  );
}

export default App;
