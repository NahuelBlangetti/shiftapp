import Turnos from './pages/Turnos';
import Presentation from './pages/Presentation';
import SidebarLeft from '../app/SidebarLeft';
import tailwindcss from "../index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer, Progress, Sidebar } from 'flowbite-react';

export default function MainView() {
  return (
    <div>
      <SidebarLeft/>
    </div>
  )
}
