import { useEffect, useState } from 'react';
import axios from 'axios';


import './styles/main.css';

import { Header } from './components/Header';

interface Link{
  id: number;
  label: string;
  url: string;
  created_at: Date; 
}

function App() {
  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    axios('http://localhost:3333/links').then(response => {
      setLinks(response.data)
    })
  }, [])

  console.log(links)

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col my-5 mx-5" >

      <Header />



      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Url</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {links.map(link => (
              <tr key={link.id}>
                <td>{link.id}</td>
                <td>{link.label}</td>
                <td>{link.url}</td>
                <td>{link.created_at}</td>
                
              </tr>

            ))}
          </tbody> 
        </table>
      </div>

    </div>
  )
}

export default App
