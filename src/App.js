import './App.css';
import MyCard  from './card';
function App() {
  const videoinfo = {
    vt: "youtube video",
    vd: "youtube video discription"
  }; 

  return <>
    <MyCard {...videoinfo} />
  </>
}

export default App;
