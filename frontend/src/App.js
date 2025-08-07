import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Wiki from "./pages/Wiki";
import Donations from "./pages/Donations";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen bg-slate-950 text-slate-100">
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/donations" element={<Donations />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;