import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [serverConnect, setServerConnect] = useState("");

  useEffect(() => {
    const connectServerWithFrontend = async () => {
      try {
        const response = await axios.get('/'); // Make request to backend
        setServerConnect(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    connectServerWithFrontend(); 
  }, []);

  return (
    <div>
      {serverConnect}

    </div>
  );
}

export default App;
