// create your App component here
import React, {useState, useEffect} from "react";

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function loadImage() {

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setImage(data.message);
        setIsLoading(false);
      });

    return function cleanup() {

    }
  }, []);

  if (isLoading) return (
    <div>
      <p>Loading...</p>
    </div>
  );

  return (
    <div>
      <img src={image} alt="A Random Dog"></img>
    </div>
  );
}

export default App;