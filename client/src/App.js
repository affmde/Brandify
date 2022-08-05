import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { GameView } from "./components/gameView";
import { CategoriesPage } from "./components/categoriesPage";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { LevelsPage } from "./components/levels";
import { LogosPage } from "./components/logosPage";
import {HomePage} from "./components/homepage";
import {MessageToast} from './components/messageToast';
import { TopNav } from './components/topNav';

function App() {
  const [level, setLevel] = useState(0);
  const [category, setCategory] = useState(0);
  const [logo, setLogo] = useState(null);
  const [coins, setCoins] = useState(0);
  const [logged, setLogged] = useState(false);
  const [showToast, setShowToast] = useState({
    state: false,
    message: ""
  });

  return (
    <div className="App">
      <BrowserRouter>
        {logged && <TopNav level={level} coins={coins}/>}
        <Routes>
          <Route path="/" element={<HomePage setLogged={setLogged} />}></Route>
          {logged && <Route path="/levels" element={<LevelsPage level={level} setLevel={setLevel} category={category} coins={coins} setCoins={setCoins} setLogged={setLogged}/>}></Route>}
          {logged && <Route path="/categories" element={<CategoriesPage level={level} setCategory={setCategory} category={category} coins={coins} setCoins={setCoins}/>}></Route>}
          {logged && <Route path="/logos" element={<LogosPage level={level} category={category} logo={logo} setLogo={setLogo} coins={coins}/>}></Route> }
          {logged && <Route path="/game" element={<GameView level={level} category={category} logo={logo} coins={coins} setCoins={setCoins} setLogged={setLogged} setShowToast={setShowToast} />}></Route>}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>
      </BrowserRouter>
      {showToast.state && <MessageToast message={showToast.message}/>}
    </div>
  );
}

export default App;
