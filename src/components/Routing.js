import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import User from "./User";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="*" element={<PageNotFound/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/admin/user" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
