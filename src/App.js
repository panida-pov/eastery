import Root from './components/Root/Root'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>} />
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;