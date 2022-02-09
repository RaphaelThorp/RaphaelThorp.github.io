import './App.css';
import { useState, useEffect } from 'react';
import React, {Component} from "react";
import Button from "./components/Button";
import Home from "./components/Home"


const App = () => {


  const [Home, setHome] = useState(true)
  const [Resume, setResume] = useState(false)
  const [Projects, setProjects] = useState(false)
  const [homeColor, setHomeColor] = useState('steelblue')
  const [resumeColor, setResumeColor] = useState('grey')
  const [projectsColor, setProjectsColor] = useState('grey')  

  
  const onTabClick = tabClicked => {
    if(tabClicked === 'Home') {
      setHome(true)
      setResume(false)
      setProjects(false)
      setHomeColor('steelblue')
      setResumeColor('grey')
      setProjectsColor('grey')
    }
    else if(tabClicked === 'Resume') {
      setHome(false)
      setResume(true)
      setProjects(false)
      setHomeColor('grey')
      setResumeColor('steelblue')
      setProjectsColor('grey')
    }
    else if(tabClicked === 'Projects') {
      setHome(false)
      setResume(false)
      setProjects(true)
      setHomeColor('grey')
      setResumeColor('grey')
      setProjectsColor('steelblue')
    }

  }

  return(
    <div>
      <container className = 'container'>
        <h2>Hello David</h2>
          <Button
          text = 'Home'
          onClick={onTabClick}
          color = {homeColor}
          />
          <Button
          text = 'Resume'
          onClick={onTabClick}
          color = {resumeColor}
          />
          <Button
          text = 'Projects'
          onClick={onTabClick}
          color = {projectsColor}
          />
      </container>
    </div>
    

  )

}
export default App;