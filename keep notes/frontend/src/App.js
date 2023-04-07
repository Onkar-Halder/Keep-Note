
import './App.css';
import Header from "./components/header/header"
import Addkeeper from './components/addkeeper/addkeeper';
import Showkeeper from './components/showkeeper/showkeeper';
import {useState,useEffect} from "react"
import axios from "axios"

function App() {
  const [keeperList, setkeeperList]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/api/getAll")
    .then(res => setkeeperList(res.data))
  },[])
  return (
    <div className="App">
      <Header/>
      <Addkeeper keeperList={keeperList} setkeeperList={setkeeperList}/>
      <Showkeeper keeperList={keeperList} setkeeperList={setkeeperList}/>
    </div>
  );
}
//commen
export default App;
