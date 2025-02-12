/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Dummy/Panda.glb -o src/components/Dummy/Panda.jsx -r public 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useControls } from 'leva'
import { useEffect, useState } from 'react'

export function Panda(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/Dummy/Panda.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  const [animation, setAnimation] = useState("CharacterArmature|CharacterArmature|CharacterArmature|Idle");


    useEffect(() => {
      actions[animation].reset().fadeIn(0.7).play();
      return () => actions[animation].fadeOut(0.7);
    }, [animation]);
  
  return (
    <group ref={group} {...props} dispose={null}
    onPointerEnter={() =>
      setAnimation("CharacterArmature|CharacterArmature|CharacterArmature|Wave")} 
    onPointerLeave={() =>
      setAnimation("CharacterArmature|CharacterArmature|CharacterArmature|Idle")}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh name="Headband" geometry={nodes.Headband.geometry} material={materials.AtlasMaterial} skeleton={nodes.Headband.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={150} />
          <skinnedMesh name="Panda" geometry={nodes.Panda.geometry} material={materials.AtlasMaterial} skeleton={nodes.Panda.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={150} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Dummy/Panda.glb')
