// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// components
import Temp from "./Components/Temp";

function App() {
  return (
    <>
     <HomeLayoutHOC path='/' exact component={Temp} />
    </>
  );
}

export default App;
