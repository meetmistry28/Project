import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/container/UserRoutes";
import Adminroutes from "./routes/container/Adminroutes";
import Priveteroutes from "./routes/container/Priveteroutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/*" element={<UserRoutes />} />
        <Route element={<Priveteroutes />}>
          <Route exact path="/admin/*" element={<Adminroutes />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
