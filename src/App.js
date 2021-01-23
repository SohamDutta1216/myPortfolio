import React from 'react'
import Navbar from './components/Navbar'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default function App() {
  const size = useWindowSize()
  return (
    <div>
      {size.width > 1400 ?
        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
          <Navbar />
        </div>
        :
        <div style={{ marginLeft: '0', marginRight: '0' }}>
          <Navbar />
        </div>

      }

    </div>
  )
}
