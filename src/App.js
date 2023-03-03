import { useState } from 'react';
import './App.css';

const App = () => {

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);
  const [count, setCount] = useState(8);

  const handleClickBox1 = () => {
    setActive1(!active1);
    if (!active1) {
      setCount(pre => pre - 1);
    } else {
      setCount(pre => pre + 1);
    }
  };

  const handleClickBox2 = () => {
    setActive2(!active2);
    if (!active2) {
      setCount(pre => pre - 1);
    } else {
      setCount(pre => pre + 1);
    }
  };

  const handleClickBox3 = () => {
    setActive3(!active3);
    if (!active3) {
      setCount(pre => pre - 1);
    } else {
      setCount(pre => pre + 1);
    }
  };

  const handleClickBox4 = () => {
    setActive4(!active4);
    if (!active4) {
      setCount(pre => pre - 1);
    } else {
      setCount(pre => pre + 1);
    }
  };

  const handleClickBox5 = () => {
    setActive5(!active5);
    if (!active5) {
      setCount(pre => pre - 1);
    } else {
      setCount(pre => pre + 1);
    }
  };

  const handleClickBox6 = () => {
    setActive6(!active6);
    if (!active6) {
      setCount(pre => pre - 1);
    } else {
      setCount(pre => pre + 1);
    }
  };

  const handleClickBox7 = () => {
    setActive7(!active7);
    if (!active7) {
      setCount(pre => pre - 1);
    } else {
      setCount(pre => pre + 1);
    }
  };

  const handleClickBox8 = () => {
    setActive8(!active8);
    if (!active8) {
      setCount(pre => pre - 1);
    } else {
      setCount(pre => pre + 1);
    }
  };
  console.log(count);

  return (
    <>
      <div className="container">
        <div className="box box-1" onClick={handleClickBox1} style={{ backgroundColor: active1 ? "red" : "#a4c400" }}>1</div>
        <div className="box box-2" onClick={handleClickBox2} style={{ backgroundColor: active2 ? "red" : "#a4c400" }}>2</div>
        <div className="box box-3" onClick={handleClickBox3} style={{ backgroundColor: active3 ? "red" : "#a4c400" }}>3</div>
        <div className="box box-4" onClick={handleClickBox4} style={{ backgroundColor: active4 ? "red" : "#a4c400" }}>4</div>
        <div className="box box-5" onClick={handleClickBox5} style={{ backgroundColor: active5 ? "red" : "#a4c400" }}>5</div>
        <div className="box box-6" onClick={handleClickBox6} style={{ backgroundColor: active6 ? "red" : "#a4c400" }}>6</div>
        <div className="box box-7" onClick={handleClickBox7} style={{ backgroundColor: active7 ? "red" : "#a4c400" }}>7</div>
        <div className="box box-8" onClick={handleClickBox8} style={{ backgroundColor: active8 ? "red" : "#a4c400" }}>8</div>

        <h1>{`Available parking slots ${count}`}</h1>

      </div>

    </>
  )
}

export default App;
