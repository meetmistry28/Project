import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/container/UserRoutes";
import Adminroutes from "./routes/container/Adminroutes";

function App() {
  return (
    <div className="App">

    <Routes>
      <Route exact path="/*" element={<UserRoutes />}/>
      <Route exact path="/admin/*" element={<Adminroutes />}/>
      
    </Routes>

    </div>
  );
}

export default App;
