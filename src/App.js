import React, { useState } from "react";
import "./styles.css";
import useDeviceOrientation from "./components/useDeviceOrientation";
import useFavicon from "./components/useFavicon";
import useGeolocation from "./components/useGeolocation";
import useKeyPress from "./components/useKeyPress";
import useLocalStorage from "./components/useLocalStorage";
import useMousePosition from "./components/useMousePosition";
import useOnlineStatus from "./components/useOnlineStatus";
import useLockScroll from "./components/useLockScroll";


function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();

  const [initialFaviconUrl, setinitialFaviconUrl] = useState("");
  const fav = useFavicon(initialFaviconUrl);
  const changeFavicon = (onClick) => {
    setinitialFaviconUrl(
      "../icon/Yootheme-Social-Bookmark-Social-facebook-box-blue.ico"
    );
  };

  const Geostate = useGeolocation();

  const press_k = useKeyPress("k");
  const press_i = useKeyPress("i");
  const press_m = useKeyPress("m");
  const press_c = useKeyPress("c");
  const press_h = useKeyPress("h");

  const name = "myLS";
  const initialValue = null;

  const [LS, setLS] = useLocalStorage(name, initialValue);

  const { x, y } = useMousePosition();

  const onlineStatus = useOnlineStatus();

  const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();

  return (
    <div className="App">

      <div>
        <h1>useDeviceOrientation</h1>
        <p>Alpha: {alpha ? alpha : "null"}</p>
        <p>Beta: {beta ? beta : "null"}</p>
        <p>Gamma: {gamma ? gamma : "null"}</p>
      </div>

      <div>
        <h1>useFavicon</h1>
        <button onClick={changeFavicon}>Set Favicon</button>
      </div>

      <div>
        <h1>useGeolocation</h1>
        <pre>Latitude: {Geostate.latitude}</pre>
        <pre>Longitude: {Geostate.longitude}</pre>
        <pre>Geolocation Error: {Geostate.error ? "Error" : "NULL"}</pre>
      </div>

      <div>
        <h1>useKeyPress</h1>
        <div>k:{press_k && "k"}</div>
        <div>i:{press_i && "i"}</div>
        <div>m:{press_m && "m"}</div>
        <div>c:{press_c && "c"}</div>
        <div>h:{press_h && "h"}</div>
        <div>i:{press_i && "i"}</div>
      </div>
      <div>
        <h1>useLocalStorage</h1>
        <div>Current Value : {LS}</div>
        <div>
          <button onClick={() => setLS(12345)}>SET 12345</button>
          <button onClick={() => setLS(null)}>CLEAR LS</button>
        </div>
      </div>

      <div>
        <h1>useMousePosition</h1>
        <pre>{JSON.stringify({ x, y })}</pre>
      </div>

      <div>
        <h1>useOnline</h1>
        <h3>Are we Online ?{onlineStatus ? "Yes" : "No"}</h3>
      </div>

      <div>
        <h1>useLockScroll</h1>
        <h3>isLocked: {isLocked ? "TRUE" : "FALSE"}</h3>
        <button onClick={() => lockScroll()}>Lock Scroll</button>
        <button onClick={() => unlockScroll()}>UnLock Scorll</button>
      </div>
    </div>
  );
}

export default App;
