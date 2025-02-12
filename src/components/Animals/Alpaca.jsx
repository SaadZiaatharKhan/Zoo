/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Animals/Alpaca.gltf -o src/components/Animals/Alpaca.jsx -r public 
*/

import React, { useState } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useControls } from 'leva';
import { useEffect } from 'react';

export function Alpaca(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/Animals/Alpaca.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  // const { animation } = useControls({
  //   animation: { value: "Eating", options: Object.keys(actions) },
  // });
  const [currentAnimation, setCurrentAnimation] = useState("Idle");

  useEffect(() => {
    const animationSequence = ["Idle", "Idle_2", "Eating"];
    let currentIndex = 0;

    // Helper function to play the current animation with a smooth transition
    const playAnimation = (animationName) => {
      Object.values(actions).forEach((action) => action.fadeOut(0.5)); // Fade out all actions
      actions[animationName]?.reset().fadeIn(0.5).play(); // Fade in the target action
    };

    // Play the initial animation
    playAnimation(currentAnimation);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % animationSequence.length;
      const nextAnimation = animationSequence[currentIndex];
      setCurrentAnimation(nextAnimation);
      playAnimation(nextAnimation);
    }, 6000); // Change animation every 2 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="AnimalArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.IKBackLegL} />
          <primitive object={nodes.IKFrontLegL} />
          <primitive object={nodes.IKBackLegR} />
          <primitive object={nodes.IKFrontLegR} />
          <group name="Alpaca">
            <skinnedMesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Main} skeleton={nodes.Cube.skeleton} />
            <skinnedMesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials.Main_Light} skeleton={nodes.Cube_1.skeleton} />
            <skinnedMesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials.Hooves} skeleton={nodes.Cube_2.skeleton} />
            <skinnedMesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={materials.Main_Dark} skeleton={nodes.Cube_3.skeleton} />
            <skinnedMesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials.Muzzle} skeleton={nodes.Cube_4.skeleton} />
            <skinnedMesh name="Cube_5" geometry={nodes.Cube_5.geometry} material={materials.Eyes_Black} skeleton={nodes.Cube_5.skeleton} />
            <skinnedMesh name="Cube_6" geometry={nodes.Cube_6.geometry} material={materials.Eyes_White} skeleton={nodes.Cube_6.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Animals/Alpaca.gltf')
