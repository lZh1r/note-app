import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NotePage from "./pages/NotePage.tsx";


function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/note/:noteId',
            element: <NotePage/>
        }
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
