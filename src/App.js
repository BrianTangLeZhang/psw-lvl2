import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddClass from "./pages/AddClass";
import ClassDetails from "./pages/ClassDetails";
import Classes from "./pages/Classes";
import AddStudent from "./pages/AddStudent";
import UpdateClass from "./pages/UpdateClass";
import Students from "./pages/Students";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/classes/:id" element={<ClassDetails />}></Route>
        <Route path="/classes/add" element={<AddClass />}></Route>
        <Route path="/classes/update/:id" element={<UpdateClass />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/students/add" element={<AddStudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
