// import React, { useEffect } from "react";
// import "./App.css";
// import Header from "./Header";
// import Home from "./Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import { useStateValue } from "./StateProvider";
// import { auth } from "./Firebase";

// function App() {
//   const [{}, dispatch] = useStateValue();

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51NSN1UKGy0FU8idpCqsd5hjkwINKcaX1F9v1FfNf7IS96WndawpDXsxi97pgx5k2zL63GRjzIkQeNmu1FIHwJ4Mz00ClEOtOWl"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Order" element={<Order />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
