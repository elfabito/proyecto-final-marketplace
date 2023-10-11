import React from 'react'
import { Route, Routes, Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Home
      <Link to="/Perfil">Perfil</Link>
    </div>
  );
};

export default Home