import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  return (
    <div>
      {loading === false ?
        <div>
          <Navbar
          />
        </div>
        :
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="ui container">
            <div>
              <Loader />
            </div>
          </div>
        </div>
      }
    </div>
  )

}
