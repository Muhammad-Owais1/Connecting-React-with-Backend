import { useState } from "react"


function App() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    let response = await fetch(
      'https://connecting-react-with-backend.vercel.app/adduser', 
      {
        crossDomain: true,
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          username: userName,
          email: email,
        })
      }
    );
  }
  return (
    <>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />

      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App
