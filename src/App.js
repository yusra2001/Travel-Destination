import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails";
import Header from "./components/header/Header";
import Footer  from "./components/footer/Footer";
import Tours from "./components/tours/Tours";
const data = require("./data/db.json");
// import { useState } from "react";



function App() {
//   const [item ,setItem] =useState({});

// function handelItem(data){
//   setItem(data);
// }
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home dataFromAppComponent={data} />} />
        {/* <Route path="/tours" element={<Tours />} /> */}
        <Route path="/city/:id" element={<TourDetails data={data}  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
// // import logo from './logo.svg';
// // import './App.css';
// // import Home from './components/home/Home';



// // function App() {
// //   return (
// //     <>
// //     <Home/>

// //     </>
// //   );
// // }

// // export default App;

// ////
// import './App.css';
// import Home from './components/home/Home';
// import TourDetails from './components/TourDetails/TourDetails';
// import { Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   return (
//     <>
//     <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/city/:id' element={<TourDetails/>}/>
//     </Routes>
//     </>
//   );
// }

// export default App;