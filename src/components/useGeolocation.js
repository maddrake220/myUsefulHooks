import { useState, useEffect } from "react";
const useGeolocation = () => {
  const [state, setState] = useState({
    latitude: null,
    longitude: null
  });
  let mounted = true;
  let watchId;

  const onEvent = (event) => {
    if (mounted) {
      setState({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude
      });
    }
  };
  const onError = (error) => {
    setState(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onError);
    watchId = navigator.geolocation.watchPosition(onEvent, onError);

    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, [0]);

  return state;
};

export default useGeolocation;
