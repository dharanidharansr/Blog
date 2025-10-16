import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ResourcesPage from "./pages/Resources";
import EventsPage from "./pages/Events";
import WhyStartBlog from "./pages/blogs/WhyStartBlog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blogs/why-start-blog" element={<WhyStartBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
