# DIU CGPA Calculator 🎓

http://googleusercontent.com/map_location_reference/1
A modern, fast, and feature-rich Next.js web application tailored specifically for [Daffodil International University](http://googleusercontent.com/map_location_reference/0) (DIU) students to calculate and track CGPA, Semester GPA, and individual Course Grades.

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
2. Install DependenciesBashnpm install
3. Run the Development ServerBashnpm run dev
Open http://localhost:3000 in your browser to see the running application.Build for ProductionTo generate a highly optimized production build, run:Bashnpm run build
npm start
📊 Academic Reference DataDIU Grading ScaleMarks RangeLetter GradeGrade Point80 – 100A+4.0075 – 79A3.7570 – 74A-3.5065 – 69B+3.2560 – 64B3.0055 – 59B-2.7550 – 54C+2.5045 – 49C2.2540 – 44D2.0000 – 39F0.00Assessment Component WeightsComponentWeightAttendance7%Class Test (CT)15%Assignment5%Presentation8%Mid Term Exam25%Final Exam40%Total100%🧮 CGPA Calculation FormulaThe calculator uses a weighted average method based on individual semester credits:$$CGPA = \frac{\sum (SGPA \times \text{Credit Hours})}{\sum (\text{Total Credit Hours})}$$Example Calculation:Semester 1: SGPA $3.50 \times 21 \text{ credits} = 73.50$Semester 2: SGPA $3.75 \times 18 \text{ credits} = 67.50$$$CGPA = \frac{73.50 + 67.50}{21 + 18} = \frac{141.00}{39} = 3.62$$📄 License & CreditsThis project is intended for personal and educational use.Developed by: Fahid HasanDepartment: Computer Science & Engineering (CSE)Institution: Daffodil International UniversityCopyright © 2026
