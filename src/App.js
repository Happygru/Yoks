import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import { store } from "./redux/store";
import "./App.css";

function App() {
  const pages = useRoutes(AppRoutes);

  return <Provider store={store}>{pages}</Provider>;
}

export default App;
