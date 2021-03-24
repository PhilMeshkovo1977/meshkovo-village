import React,{useState} from 'react'
import {Header} from './layout/Header'
import {Main} from './components/Main'
import {Sights} from './components/Sights'
import {History} from './components/History'


function App() {
const [view, setView] = useState('main')

  return (
    <div className="App">
      <Header />
      <br/>
      {/* {view === 'main' && <Main view={view} setView={(props) => setView(props)}/>}
      {view === 'sights' && <Sights view={view} setView={(props) => setView(props)}/>}
      {view === 'history' && <History view={view} setView={(props) => setView(props)}/>} */}
      {view === 'main' ? <Main view={view} setView={(props) => setView(props)}/> : view !== 'history' ? 
      <Sights view={view} setView={(props) => setView(props)}/> : <History view={view} setView={(props) => setView(props)}/>}
    </div>
  );
}

export default App;
