import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import {Box, Grid} from "@mui/material";
import ContactForm from './Contact/ContactForm';
import Terminal from "./about/Terminal";


export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
    let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
     <Box className={darkMode ? Style.dark : Style.light}>
       <Grid
         container
         display={"flex"}
         flexDirection={"column"}
         minHeight={"100vh"}
         justifyContent={"space-between"}
       >
         <Grid item>
           <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
         </Grid>
         <Grid item flexGrow={1}>
           <Home />
         </Grid>
         <Grid item flexGrow={1}>
           <About />
         </Grid>

         <Box
           display={"flex"}
           flexDirection={"column"}
           alignItems={"center"}
           mt={"3rem"}
         >
           <Terminal text={ContactForm()} />
         </Box>

         <Grid item>
           <Box
             component={"footer"}
             display={"flex"}
             flexDirection={"column"}
             alignItems={"center"}
             py={"1.5rem"}
             sx={{ opacity: 0.7 }}
             width={"100%"}
           >
             <p>
               template created with &hearts; by{" "}
               <a href={"https://paytonpierce.dev"}>Payton Pierce</a>
             </p>
             <a href="https://storyset.com/people">People illustrations by Storyset</a>
             <p>&copy; 2024</p>
           </Box>
         </Grid>
       </Grid>
     </Box>
   );
}

