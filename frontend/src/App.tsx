import { useEffect } from 'react';
import TaskBoard from './components/Board'
import FooterBanner from './components/FooterBanner';
import Sidebar from './components/Sidebar';

function App() {
  useEffect(() => {
    window.document.addEventListener("DOMContentLoaded", () => {
      let isPressed = false;
      // let startX;
      // let scrollLeft;
      const slider = document.querySelector('.task') as HTMLCanvasElement

      console.log(slider)
      slider.addEventListener("mousedown", () => {
        isPressed = true
        slider.style.cursor = "grabbing";
      });
      slider.addEventListener("mousemove", (e) => {
        isPressed = false;
        if (!isPressed) return;
        e.preventDefault();

      });
      slider.addEventListener("mousemove", () => {
        isPressed = false;
        console.count()


      });

      window.addEventListener("mouseup", (e) => {
        e.preventDefault();
        isPressed = false;
      });
    });
  }, [])
  return (
    <div className="flex flex-col h-screen">
      {/* main container */}
      <div className="flex-1 flex flex-row overflow-y-hidden">
        <nav className="order-first  overflow-y-auto">
          <Sidebar />
        </nav>
        <main className="flex-1   overflow-y-auto">
          <div className="sm:ml-64">
            <div className="bg-slate-900 text-gray-300" >
              <TaskBoard />
            </div>
          </div>
        </main>
      </div>
      {/* end main container */}
      <footer className="bg-gray-100">
        <FooterBanner />
      </footer>
    </div>


  )
}

export default App
