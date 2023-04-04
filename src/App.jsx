import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import HTML from "./components/HTML";
import Moon from "./components/Moon";

function App() {
  return (
    <div className="App__container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <HTML />
      <Canvas
        orthographic
        style={{
          position: "absolute",
          zIndex: 50,
        }}
        camera={{
          zoom: 80,
          near: 0.0000000000001,
        }}
      >
        <ScrollControls pages={2} damping={0.1}>
          <Scroll page={2} html>
            <footer className="footer">
              Made with ❤️ by{" "}
              <a href="https://twitter.com/MarkSShenouda" target="_blank">
                Mark Shenouda
              </a>
            </footer>
          </Scroll>
          <Moon />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
