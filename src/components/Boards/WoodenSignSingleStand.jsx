/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Boards/WoodenSignSingleStand.glb -o src/components/Boards/WoodenSignSingleStand.jsx -r public 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function WoodenSignSingleStand(props) {
  const { nodes, materials } = useGLTF('/models/Boards/WoodenSignSingleStand.glb')
  return (
    <group {...props} dispose={null}>
      
      <group scale={100}>
        <mesh geometry={nodes.Sign9_1.geometry} material={materials['Dark Wood']} />
        <mesh geometry={nodes.Sign9_2.geometry} material={materials['Light Wood']} />
        <mesh geometry={nodes.Sign9_3.geometry} material={materials.Rocks} />
        <mesh geometry={nodes.Sign9_4.geometry} material={materials.Herbs} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Boards/WoodenSignSingleStand.glb')
