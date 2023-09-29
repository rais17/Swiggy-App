import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import Offer from './src/Components/Offer';
import Help from './src/Components/Help';
import Footer from './src/Components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './src/Components/RestaurantMenu';
import Search from './src/Components/Search';
import store from './utils/store';
import { Provider } from 'react-redux';
import Cart from './src/Components/Cart';

const App = () => {
    return (
      <div className="relative w-screen h-screen">
        <Provider store={store}>
          <Header />
          <Outlet />
          <Footer />
        </Provider>
      </div>
    );

}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);