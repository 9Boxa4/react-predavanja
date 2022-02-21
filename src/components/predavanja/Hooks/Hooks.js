import React, {useState} from 'react';

import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import Select from './components/Select';
import SongList from './components/SongList';





const Hooks = () => {
  const [show,setShow] = useState(true)
  return (
    <div className="App">
     {/* <Counter/> */}
     {/* {show? <Counter1 /> : null} */}
     {/* <Counter1/> */}
     {/* <button onClick={()=> setShow (!show)}>toggle show</button> */}
     {/* <Select/> */}
    <SongList/>
    </div>
  );
}

export default Hooks;
