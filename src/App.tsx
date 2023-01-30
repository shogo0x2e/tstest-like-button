import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonContainer">
          <LikeButton />
          <DynamicButton />
        </div>
      </header>
    </div>
  );
}

/**
 * チュートリアルにあったボタン
 */
function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className='baseButton likeButton' onClick={handleClick}>
      🤍 {count}
    </span>
  );
}

/**
 * 自作ボタン
 */
function DynamicButton() {
  const [content, setContent] = useState("まだ押されてないよーん");

  const handleClick = () => {
    let change = "まだ押されてないよーん";
    if (content == change) {
      change = "押されたよ！戻す！？";
    }
    setContent(change);
  };

  return (
    <span className='baseButton dynamicButton' onClick={handleClick}>
      {content}
    </span>
  );
}

export default App;
