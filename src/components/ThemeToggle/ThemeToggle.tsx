import React, {useEffect, useState} from "react";

const ThemeToggle: React.FC = () => {
    const[darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if(darkMode) {
            document.body.style.background = "#1e1e1e"; // dark mode background
            document.body.style.color = "white"; 
        } 
        else {
            document.body.style.background = "#ffffff";
            document.body.style.color = "black";
        }

        const header = document.getElementById("app-header");
        const filtersContainer = document.querySelector(".filters");
        const filters = document.querySelectorAll(".filters label");

        if(header) {
            header.style.color = darkMode ? "white" : "black";
        }
        if(filtersContainer) {
            (filtersContainer as HTMLElement).style.background = darkMode ? "#292929" : "#ddd";
        }
        filters.forEach((filter) => {
            (filter as HTMLElement).style.color = darkMode ? "white" : "#333";
        });
    }, [darkMode])
    return(

        <button className="theme-toggle" onClick={() => setDarkMode (!darkMode)}>

            {darkMode ? "Light Mode" :  "Dark Mode"}

            </button>
    );

        };

        export default ThemeToggle;
    
