import { Environment, Gltf, Html, PerspectiveCamera, PointerLockControls } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Howl } from 'howler';
import { Controls } from '../App';
import { WoodenSignWithChain } from './Boards/WoodenSignWithChain';
import { degToRad } from 'three/src/math/MathUtils.js';
import { Panda } from './Dummy/Panda';
import { Rabbit } from './Dummy/Rabbit';
import { Alpaca } from './Animals/Alpaca';
import CloudCombined from './Cloud/CloudCombined';
import { WoodenSignSingleStand } from './Boards/WoodenSignSingleStand';
import { WoodenSign } from './Boards/WoodenSign';
import { Fox } from './Animals/Fox';
import { Deer } from './Animals/Deer';
import { Bull } from './Animals/Bull';
import { Wolf } from './Animals/Wolf';
import { Donkey } from './Animals/Donkey';
import { useDrag } from '@use-gesture/react'; // Gesture library for touch support
import { useState } from 'react';
import {useMobile} from '../hooks/useMobile'


const MOVEMENT_SPEED = 0.15;

function Experience() {
  const {isMobile} = useMobile();
  const sound = new Howl({
    src: ["/audio/footsteps.mp3"],
    loop: true, // Footsteps should loop for a natural effect
    volume: 0.5, // Adjust volume as needed
  });

  const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);

  const ref = useRef();

  useEffect(() => {
    // Check if any movement key is pressed and play/pause the audio
    if (forwardPressed || backPressed) {
      if (!sound.playing()) {
        sound.play();
      }
    } else {
      if (sound.playing()) {
        sound.pause();
      }
    }

    return () => {
      sound.stop(); // Ensure the sound stops when the component unmounts
    };
  }, [forwardPressed, backPressed]);

  useFrame(() => {
    if (forwardPressed) {
      if (ref.current.position.x < 25) {
        return ;
      } else {
        ref.current.position.x -= MOVEMENT_SPEED; // Move forward (X-axis)
      }
    }
    if (backPressed) {
      if (ref.current.position.x > 190.9) {
        return ;
      } else {
        ref.current.position.x += MOVEMENT_SPEED; // Move backward (X-axis)
      } 
    }
  });

  return (
    <>
    <group>
      {!isMobile && <PerspectiveCamera
        position={[190.9, 5.8, 0]}
        makeDefault
        fov={42}
        ref={ref}
      />}
      {!isMobile && <PointerLockControls camera={ref.current} />}
      {/* <PointerLockControls camera={ref.current} /> */}
      <Environment preset="sunset" />

      <Gltf src="/models/ground-Optimized.glb" position={[100, 0, 0]} />

      <group>
        <WoodenSignWithChain position={[170, 0, 7]} scale={4} rotation-y={degToRad(99)}/>
        <Html occlude transform position={[170.1, 5, 7]} rotation-y={degToRad(99)}>
          <div>
            <h2 className='WoodenSignWithChain'>Welcome To Zoo</h2>
            <p className='bySaadKhan'>- by Saad Khan</p>
          </div>
        </Html>
      </group>
      
      <group>
      <Rabbit position={[173, 0, 4]} rotation-y={degToRad(99)} />
      </group>

      <group>
        <WoodenSignWithChain position={[25, 0, 7]} scale={4} rotation-y={degToRad(99)}/>
        <Html occlude transform position={[25.1, 5, 7]} rotation-y={degToRad(99)}>
          <div>
            <h2 className='WoodenSignWithChain'>Visit Again</h2>
          </div>
        </Html>
      </group>
      
      <group>
      <Panda position={[28, 0, 7]} rotation-y={degToRad(111)} />
      </group>

      <CloudCombined/>

      <group>

        <Alpaca position={[150, 0, 25]} rotation-y={degToRad(180)}/>

        <group>
          <WoodenSignSingleStand position={[154, 0, 21.6]} scale={2} rotation-y={degToRad(190)}/>
          <Html occlude transform position={[152.6, 2.6, 21.6]} rotation-y={degToRad(190)}>
          <div>
            <h2 className='AnimalBoard'>ALPACA</h2>
          </div>
        </Html>
        </group>

        <group>
          <WoodenSign position={[143, 0, 24]} scale={4} rotation-y={degToRad(170)}/>
          <Html occlude transform position={[143, 9, 23.9]} rotation-y={degToRad(170)}>
          <div>
            <h2 className='AnimalInfoHead'>INFO</h2>
            <p className='AnimalInfo'>
            Alpacas are South American camelids, domesticated for their incredibly soft and warm fleece. Smaller than llamas, alpacas come in a wide array of natural colors and are prized for their gentle temperament and low maintenance needs. Their fleece is lightweight, hypoallergenic, and naturally water-resistant, making it a popular choice for clothing, blankets, and other textiles. While originating in the Andes Mountains, alpacas are now raised on farms around the world, contributing to both the textile industry and sustainable agriculture.
            </p>
          </div>
        </Html>
        </group>

      </group>

      <group>

        <Deer position={[150, 0, -25]} />

        <group>
          <WoodenSignSingleStand position={[154, 0, -21.6]} scale={2} rotation-y={degToRad(190)}/>
          <Html occlude transform position={[152.6, 2.6, -21.1]} >
          <div>
            <h2 className='AnimalBoard'>DEER</h2>
          </div>
        </Html>
        </group>

        <group>
          <WoodenSign position={[143, 0, -19]} scale={4} />
          <Html occlude transform position={[143, 8.7, -18.9]} >
          <div>
            <h2 className='AnimalInfoHead'>INFO</h2>
            <p className='AnimalInfo'>
            Deer are graceful, herbivorous mammals found in various habitats worldwide. They are known for their slender bodies, long legs, and large ears. Males of most species have antlers, which they shed and regrow annually. Deer are primarily herbivores, feeding on grasses, leaves, and twigs. They are often hunted for their meat and hides, and play a significant role in many ecosystems. However, overpopulation of deer can lead to habitat destruction and conflicts with humans.
            </p>
          </div>
        </Html>
        </group>

        <group>

        <Bull position={[130, 0, -25]} />
        
        <group>
          <WoodenSignSingleStand position={[134, 0, -21.6]} scale={2} rotation-y={degToRad(190)}/>
          <Html occlude transform position={[132.6, 2.6, -21.1]} >
          <div>
            <h2 className='AnimalBoard'>BULL</h2>
          </div>
        </Html>
        </group>

        <group>
          <WoodenSign position={[123, 0, -19]} scale={4} />
          <Html occlude transform position={[123, 8.7, -18.9]} >
          <div>
            <h2 className='AnimalInfoHead'>INFO</h2>
            <p className='AnimalInfo'>
            Bull is an intact adult male of the species Bos taurus, commonly known as cattle. They are known for their muscular build, large size, and often aggressive behavior. Bulls play a crucial role in livestock production, as they are responsible for breeding cows and producing offspring. They are also featured in various cultural and sporting events, such as bullfighting and bull riding.
            </p>
          </div>
        </Html>
        </group>


        </group>

        <group>

          <Donkey position={[123, 0, 25]} rotation-y={degToRad(180)}/>

          <group>
          <WoodenSignSingleStand position={[127, 0, 21.6]} scale={2} rotation-y={degToRad(190)}/>
          <Html occlude transform position={[125.7, 2.6, 21.6]} rotation-y={degToRad(190)}>
          <div>
            <h2 className='AnimalBoard'>DONKEY</h2>
          </div>
        </Html>
        </group>

        <group>
          <WoodenSign position={[116, 0, 24]} scale={4} rotation-y={degToRad(170)}/>
          <Html occlude transform position={[116, 9, 23.9]} rotation-y={degToRad(170)}>
          <div>
            <h2 className='AnimalInfoHead'>INFO</h2>
            <p className='AnimalInfo'>
            The donkey is a domesticated member of the horse family. It is known for its long ears, sturdy build, and ability to carry heavy loads over rough terrain. Donkeys have been used as working animals for thousands of years, primarily in agriculture and transportation. They are also valued for their gentle and intelligent nature, making them suitable as pack animals and even companions.
            </p>
          </div>
        </Html>
        </group>

        </group>

        <group>

        <Wolf position={[50, 0, 25]} rotation-y={degToRad(180)} />

        <group>
          <WoodenSignSingleStand position={[54, 0, 21.6]} scale={2} rotation-y={degToRad(190)}/>
          <Html occlude transform position={[52.6, 2.6, 21.6]} rotation-y={degToRad(190)}>
          <div>
            <h2 className='AnimalBoard'>WOLF</h2>
          </div>
        </Html>
        </group>

        <group>
          <WoodenSign position={[43, 0, 24]} scale={4} rotation-y={degToRad(170)}/>
          <Html occlude transform position={[43, 9, 23.9]} rotation-y={degToRad(170)}>
          <div>
            <h2 className='AnimalInfoHead'>INFO</h2>
            <p className='AnimalInfo'>
            Wolves are large, intelligent, and highly social carnivores found in various parts of the Northern Hemisphere. They live in packs, typically consisting of a pair and their offspring, and hunt cooperatively for prey such as deer, elk, and moose. Wolves play a vital role in maintaining the balance of ecosystems by controlling populations of herbivores and scavenging on carcasses. They are known for their distinctive howls, which they use to communicate with other pack members and mark their territory.
            </p>
          </div>
        </Html>
        </group>

        </group>

        <group>

        <Fox position={[75, 0, -25]}/>

        <group>
          <WoodenSignSingleStand position={[79, 0, -21.6]} scale={2} rotation-y={degToRad(190)}/>
          <Html occlude transform position={[77.6, 2.6, -21.1]} >
          <div>
            <h2 className='AnimalBoard'>FOX</h2>
          </div>
        </Html>
        </group>

        <group>
          <WoodenSign position={[68, 0, -19]} scale={4} />
          <Html occlude transform position={[68, 8.7, -18.9]} >
          <div>
            <h2 className='AnimalInfoHead'>INFO</h2>
            <p className='AnimalInfo'>
            The fox is a small, cunning mammal belonging to the Canidae family. Known for their reddish-brown fur, pointed ears, and bushy tails, foxes are adaptable creatures found in diverse habitats across the globe. They are primarily nocturnal hunters, preying on rodents, rabbits, and birds. Foxes are also known for their intelligence and resourcefulness, often using their sharp senses and quick reflexes to outsmart their prey and evade predators.
            </p>
          </div>
        </Html>
        </group>

        </group>

      </group>
      </group>
    </>
  );
}

export default Experience;
