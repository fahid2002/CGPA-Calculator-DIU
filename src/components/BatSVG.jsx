"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import CourseGradePage from "@/components/CourseGradePage";
import CgpaPage from "@/components/CgpaPage";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar page={page} onNavigate={setPage} />
      {page === "home" && <HomePage />}
      {page === "course" && <CourseGradePage />}
      {page === "cgpa" && <CgpaPage />}
      <footer>
        <span>CGPA Calculator · DIU</span>© 2025 All Rights Reserved · Fahid
        Hasan · CSE · Daffodil International University
      </footer>
    </>
  );
}
