
import { Provider } from "react-redux";
import Body from "./components.js/Body";
import appStore from "./utils/appStore";

const App = () => {
  return ( <Provider store={appStore}><Body /></Provider>);
};

export default App;
