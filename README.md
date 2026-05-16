# DIU CGPA Calculator 🎓

A modern, fast, and feature-rich Next.js web application tailored specifically for Daffodil International University (DIU) students to calculate and track CGPA, Semester GPA, and individual Course Grades.

---

## 🚀 Features

* **Semester GPA Calculator:** Add multiple semesters, input course credits, choose your grading mode, and watch your live GPA update in real time.
* **Dual Input Modes:** Switch dynamically between entering **Raw Marks (0–100)** or **Letter Grades** per course.
* **Assessment Breakdown Calculator:** Input marks for individual components (Attendance, CT, Mid, Final) to predict your final course grade.
* **Average CGPA Calculator:** Computes a precise weighted cumulative CGPA across all completed semesters using the official university formula.
* **Interactive UI Elements:**
  * Collapsible DIU grading scale for quick on-screen reference.
  * Fully responsive layouts optimized beautifully for both mobile screens (with a dedicated hamburger menu) and desktops.
  * Sleek, high-contrast dark theme matching the original design.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router Architecture)
* **Library:** [React 18](https://react.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS (utilizing custom CSS properties for granular design control)

---

## 💻 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone [https://github.com/fahid2002/CGPA-Calculator-DIU.git](https://github.com/fahid2002/CGPA-Calculator-DIU.git)
cd CGPA-Calculator-DIU

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev
Open http://localhost:3000 in your browser to see the running application.

Build for Production
To generate a highly optimized production build, run:
npm run build
npm start

📊 Academic Reference Data
Marks Range,Letter Grade,Grade Point
80 – 100,A+,4.00
75 – 79,A,3.75
70 – 74,A-,3.50
65 – 69,B+,3.25
60 – 64,B,3.00
55 – 59,B-,2.75
50 – 54,C+,2.50
45 – 49,C,2.25
40 – 44,D,2.00
00 – 39,F,0.00

📊 Assessment Component Weights
Component,Weight
Attendance,7%
Class Test (CT),15%
Assignment,5%
Presentation,8%
Mid Term Exam,25%
Final Exam,40%
Total,100%

🧮 CGPA Calculation Formula
The calculator uses a weighted average method based on individual semester credits:

Plaintext
       Σ (SGPA × Credit Hours)
CGPA = ───────────────────────
         Total Credit Hours

Example Calculation:
Semester 1: SGPA 3.50 × 21 credits = 73.50

Semester 2: SGPA 3.75 × 18 credits = 67.50

Plaintext
       73.50 + 67.50     141.00
CGPA = ───────────── = ────────── = 3.62
          21 + 18          39

📄 License & Credits
This project is intended for personal and educational use.

Developed by: Fahid Hasan
Department: Computer Science & Engineering (CSE)
Institution: Daffodil International University
Copyright © 2026
