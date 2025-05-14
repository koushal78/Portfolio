import { useEffect, useRef, useState } from "react";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import SelfCard from "./Component/SelfCard";
import Summary from "./Component/Summary";
import Education from "./Component/Education";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import { HashLoader } from "react-spinners";
import Contect from "./Component/Contect";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import FollowCursor from "./Component/FollowCursor";

function App() {
  const [loading, setLoading] = useState(true);

  // Step 1: Create refs for each section
  const summaryRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Function to scroll to the correct section
  const scrollToSection = (section) => {
    if (section === "summary") summaryRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "education") educationRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "skills") skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "projects") projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className="">

      <FollowCursor color="#5e5c5c92"  />
    </div>
      {loading ? (
        <div className="text-purple-700 w-screen bg-black h-screen flex items-center justify-center">
          <HashLoader color="purple" />
        </div>
      ) : (
        
        <div className="h-full w-screen bg-black pt-6 overflow-hidden">
          
          {/* Step 2: Pass scroll function to Navbar */}
         
          <Nav scrollToSection={scrollToSection} />

          <Routes>
            <Route
              path="/"
              element={
                <div className="lg:flex max-w-screen lg:gap-8 overflow-hidden lg:justify-between lg:mt-18 lg:px-[10%] ">
                  <SelfCard />
                  

                  {/* Step 3: Wrap Sections with Refs */}
                  <div className="w-full lg:max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-hide ">
                    <div ref={summaryRef}>
                      <Summary />
                    </div>
                    <div ref={educationRef}>
                      <Education />
                    </div>
                    <div ref={skillsRef}>
                      <Skills />
                    </div>
                    <div ref={projectsRef}>
                      <Projects />
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/Contact" element={<Contect />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;