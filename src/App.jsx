import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { useMemo, useRef } from "react";
import { KeyboardControls, PerspectiveCamera } from "@react-three/drei";
import { LoadingScreen } from "./components/LoadingScreen";
import { useMobile } from "./hooks/useMobile";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
};

const ROATATION_SPEED = 0.25;
const MOVEMENT_SPEED = 2;

function App() {
  const { isMobile } = useMobile();
  const ref = useRef();

  // Define the mapping for KeyboardControls
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  return (
    <>
    <div className="game-container">
      {/* Fixed on-screen game buttons */}
      {isMobile && (<>
        <div className="bottom-right">
        <button className="game-button" onClick={() => {
          if (ref.current.position.x < 25) {
            return ;
          } else {
            ref.current.position.x -= MOVEMENT_SPEED; // Move forward (X-axis)
          }
        }}>FORWARD</button>
        <button className="game-button" onClick={() => {
          if (ref.current.position.x > 190.9) {
            return ;
          } else {
            ref.current.position.x += MOVEMENT_SPEED; // Move backward (X-axis)
          }
        }}>BACKWARD</button>
      </div>

      <div className="bottom-left">
  <div className="horizontal-buttons">
    <button
      className="game-button"
      onClick={() => {
        ref.current.rotation.y += ROATATION_SPEED;
      }}
    >
      LEFT
    </button>
    <button
      className="game-button"
      onClick={() => {
        ref.current.rotation.y -= ROATATION_SPEED;
      }}
    >
      RIGHT
    </button>
  </div>
</div>
</>)}

        
      {/* Main 3D Canvas */}
      <KeyboardControls map={map}>
        <LoadingScreen />
        <Canvas>
          {isMobile && (
            <PerspectiveCamera
              position={[190.9, 5.8, 0]}
              makeDefault
              fov={42}
              ref={ref}
            />
          )}
          <color attach="background" args={["#9dd2f5"]} />
          <fog attach="fog" args={["white", 200, 200]} />
          <ambientLight intensity={1} />
          <Experience />
        </Canvas>
      </KeyboardControls>
    </div>
    </>
  );
}

export default App;
