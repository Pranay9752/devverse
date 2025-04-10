"use client";
// import { useState, useEffect, useRef } from 'react';
// import * as THREE from 'three';

// export default function HeroSection() {
//   const mountRef = useRef(null);
//   const [isHoveredBuild, setIsHoveredBuild] = useState(false);
//   const [isHoveredExplore, setIsHoveredExplore] = useState(false);

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

//     const width = mountRef.current.clientWidth;
//     const height = 400; // Fixed height for the 3D section

//     renderer.setSize(width, height);
//     renderer.setClearColor(0x000000, 0);
//     mountRef.current.appendChild(renderer.domElement);

//     // Camera position
//     camera.position.z = 5;

//     // Create torus
//     const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
//     const torusMaterial = new THREE.MeshBasicMaterial({
//       color: 0x6366f1,
//       wireframe: true
//     });
//     const torus = new THREE.Mesh(torusGeometry, torusMaterial);
//     scene.add(torus);

//     // Create floating particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 500;

//     const posArray = new Float32Array(particlesCount * 3);

//     for(let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 10;
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.05,
//       color: 0x8b5cf6
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.005;

//       particlesMesh.rotation.y += 0.002;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       const width = mountRef.current.clientWidth;

//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     element.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       id="home"
//       className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen"
//     >
//       {/* Vertical light beam effect */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3/4 bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 blur-md"></div>
//       <div className="absolute top-0 left-1/3 transform -translate-x-1/2 w-0.5 h-1/2 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 blur-sm"></div>
//       <div className="absolute top-1/4 right-1/3 transform translate-x-1/2 w-0.5 h-1/2 bg-gradient-to-b from-orange-500/0 via-orange-500/20 to-orange-500/0 blur-sm"></div>

//       {/* Circular glow */}
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//      {/* 3D Element Container */}
//      <div ref={mountRef} className=" fixed inset-0 w-full h-screen mb-10"></div>
//       <div className="container mx-auto px-4 relative z-10 h-full">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             Your idea, our code —<br />
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300 bg-clip-text text-transparent">
//               welcome to the DevVerse.
//             </span>
//           </h1>
//           <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
//             We build scalable mobile, web, and SaaS apps — with speed,
//             precision, and power.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button
//               onClick={() => scrollToSection("contact")}
//               onMouseEnter={() => setIsHoveredBuild(true)}
//               onMouseLeave={() => setIsHoveredBuild(false)}
//               className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group"
//             >
//               <span className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
//               <span className="relative z-10">Let's Build Together</span>
//               {isHoveredBuild && (
//                 <span className="absolute top-0 left-0 w-full h-full bg-white/10 animate-pulse rounded-full"></span>
//               )}
//             </button>
//             <button
//               onClick={() => scrollToSection("projects")}
//               onMouseEnter={() => setIsHoveredExplore(true)}
//               onMouseLeave={() => setIsHoveredExplore(false)}
//               className="px-8 py-3 bg-transparent border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
//             >
//               <span className="relative z-10">Explore Work</span>
//               {isHoveredExplore && (
//                 <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse rounded-full"></span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
// import BlackHoleScene from './blackHole/BlackholeScene';

// We need to import the GLTFLoader from three.js
export default function HeroSection({ scrollToSpecificSecion }) {
  const [isHoveredBuild, setIsHoveredBuild] = useState(false);
  const [isHoveredExplore, setIsHoveredExplore] = useState(false);

  const [glowIntensity, setGlowIntensity] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setGlowIntensity((prev) => (prev + 0.05) % 1);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);
  const mountRef = useRef(null);
  const createStarTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
  };

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight; // Fixed height for the 3D section

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Camera position
    camera.position.z = 5;

    // Create torus
    // const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
    // const torusMaterial = new THREE.MeshBasicMaterial({
    //   color: 0x6366f1,
    //   wireframe: true
    // });
    // const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    // scene.add(torus);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const starTexture = createStarTexture();

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      map: starTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // torus.rotation.x += 0.01;
      // torus.rotation.y += 0.005;

      particlesMesh.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center "
    >
      {/* 3D Background Container - absolute position taking full screen */}
      {/* <div className="absolute bg-red-500 w-[60vw] bottom-0">
        <img src="./blackhole-crop-hd.gif" className="w-full h- [30vh] " />
      </div> */}
      <div
        ref={mountRef}
        className=" fixed inset-0 w-full h-screen mb-10"
      ></div>
      {/* Content - centered in the screen */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-black rounded-full">
            Your Idea, Our Code
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-200 bg-clip-text text-transparent">
              Welcome To DevVerse.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto bg-black">
            We specialize in building{" "}
            <b>mobile, web, and full-stack applications</b> — turning ideas into
            clean, scalable, and high-performance products.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => scrollToSpecificSecion("about")}
              onMouseEnter={() => setIsHoveredBuild(true)}
              onMouseLeave={() => setIsHoveredBuild(false)}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Get started</span>
              {isHoveredBuild && (
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 animate-pulse rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSpecificSecion("contact")}
              onMouseEnter={() => setIsHoveredExplore(true)}
              onMouseLeave={() => setIsHoveredExplore(false)}
              className="px-8 py-3 bg-black border border-purple-300/20 rounded-full text-white font-medium hover:bg-purple-900/10 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Contact us</span>
              {isHoveredExplore && (
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/10 animate-pulse rounded-full"></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
// export default function HeroSection() {
//   const mountRef = useRef(null);
//   const [isHoveredBuild, setIsHoveredBuild] = useState(false);
//   const [isHoveredExplore, setIsHoveredExplore] = useState(false);
//   const [modelLoaded, setModelLoaded] = useState(false);
//   const [loadingError, setLoadingError] = useState(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

//     // Use full window dimensions
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     renderer.setSize(width, height);
//     renderer.setClearColor(0x000000, 1);
//     mountRef.current.appendChild(renderer.domElement);

//     // Camera position
//     camera.position.z = 14;

//     // Add ambient light
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Background stars
//     const starsGeometry = new THREE.BufferGeometry();
//     const starsCount = 1500;
//     const starsPositions = new Float32Array(starsCount * 3);

//     for (let i = 0; i < starsCount * 3; i += 3) {
//       starsPositions[i] = (Math.random() - 0.5) * 100;
//       starsPositions[i+1] = (Math.random() - 0.5) * 100;
//       starsPositions[i+2] = (Math.random() - 0.5) * 100;
//     }

//     starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));

//     const starsMaterial = new THREE.PointsMaterial({
//       size: 0.1,
//       color: 0xffffff,
//       transparent: true,
//       opacity: 0.8
//     });

//     const stars = new THREE.Points(starsGeometry, starsMaterial);
//     scene.add(stars);

//     // Create black hole with accretion disk
//     const createBlackHole = () => {
//       // Black hole event horizon (black sphere)
//       const blackHoleGeometry = new THREE.SphereGeometry(2, 32, 32);
//       const blackHoleMaterial = new THREE.MeshBasicMaterial({
//         color: 0x000000,
//       });
//       const blackHoleSphere = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
//       scene.add(blackHoleSphere);

//       // Create multiple accretion disk rings with gradient colors
//       const createAccretionRing = (radius, tubeRadius, startColor, endColor, opacity, segments = 100) => {
//         const ringGeometry = new THREE.TorusGeometry(radius, tubeRadius, 16, segments);

//         // Create gradient material with custom shader
//         const ringMaterial = new THREE.ShaderMaterial({
//           uniforms: {
//             color1: { value: new THREE.Color(startColor) },
//             color2: { value: new THREE.Color(endColor) },
//             opacity: { value: opacity }
//           },
//           vertexShader: `
//             varying vec2 vUv;
//             void main() {
//               vUv = uv;
//               gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//             }
//           `,
//           fragmentShader: `
//             uniform vec3 color1;
//             uniform vec3 color2;
//             uniform float opacity;
//             varying vec2 vUv;

//             void main() {
//               // Create a radial gradient effect
//               float intensity = 0.5 + 0.5 * sin(vUv.x * 6.28318);
//               vec3 color = mix(color1, color2, intensity);
//               gl_FragColor = vec4(color, opacity);
//             }
//           `,
//           transparent: true,
//           side: THREE.DoubleSide
//         });

//         const ring = new THREE.Mesh(ringGeometry, ringMaterial);
//         // Tilt the ring to create perspective
//         ring.rotation.x = Math.PI / 2.5;
//         ring.rotation.y = Math.PI / 12;
//         scene.add(ring);
//         return ring;
//       };

//       // Create multiple rings with different colors to create the accretion disk effect
//       const rings = [
//         // Inner bright rings (more yellow/white)
//         createAccretionRing(3.0, 0.4, 0xffdb58, 0xff7b00, 0.9, 120),
//         createAccretionRing(3.6, 0.6, 0xff7b00, 0xff4500, 0.85, 120),
//         createAccretionRing(4.4, 0.8, 0xff4500, 0xb22222, 0.8, 120),
//         // Outer dimmer rings (more red)
//         createAccretionRing(5.4, 0.7, 0xb22222, 0x8b0000, 0.7, 120),
//         createAccretionRing(6.3, 0.5, 0x8b0000, 0x590000, 0.6, 120),
//         createAccretionRing(7.0, 0.3, 0x590000, 0x3d0000, 0.5, 120),
//       ];

//       // Create a glow effect around the black hole
//       const glowGeometry = new THREE.SphereGeometry(2.2, 32, 32);
//       const glowMaterial = new THREE.ShaderMaterial({
//         uniforms: {
//           glowColor: { value: new THREE.Color(0xff4500) },
//           viewVector: { value: camera.position }
//         },
//         vertexShader: `
//           uniform vec3 viewVector;
//           varying float intensity;
//           void main() {
//             vec3 vNormal = normalize(normalMatrix * normal);
//             vec3 vNormel = normalize(normalMatrix * viewVector);
//             intensity = pow(1.0 - dot(vNormal, vNormel), 2.0);
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//           }
//         `,
//         fragmentShader: `
//           uniform vec3 glowColor;
//           varying float intensity;
//           void main() {
//             vec3 glow = glowColor * intensity;
//             gl_FragColor = vec4(glow, 0.6);
//           }
//         `,
//         side: THREE.FrontSide,
//         blending: THREE.AdditiveBlending,
//         transparent: true
//       });

//       const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
//       scene.add(glowMesh);

//       return { blackHoleSphere, rings, glowMesh };
//     };

//     // Create the black hole
//     const blackHole = createBlackHole();
//     setModelLoaded(true);

//     // Animation
//     const clock = new THREE.Clock();

//     const animate = () => {
//       requestAnimationFrame(animate);

//       const elapsedTime = clock.getElapsedTime();

//       // Rotate the stars slowly
//       stars.rotation.y += 0.0001;

//       // Animate the black hole rings
//       if (blackHole && blackHole.rings) {
//         blackHole.rings.forEach((ring, index) => {
//           // Create differential rotation to simulate actual accretion disk physics
//           // Inner rings rotate faster than outer rings
//           const rotationSpeed = 0.001 * (6 - index) / 4;
//           ring.rotation.z += rotationSpeed;

//           // Pulse effect
//           const pulseFactor = 1 + 0.05 * Math.sin(elapsedTime * 0.5 + index * 0.2);
//           ring.scale.set(1, pulseFactor, 1);

//           // Update shader uniforms for glow effect
//           if (ring.material.uniforms && ring.material.uniforms.opacity) {
//             ring.material.uniforms.opacity.value = 0.5 + 0.2 * Math.sin(elapsedTime * 0.3 + index * 0.4);
//           }
//         });
//       }

//       // Update the glow effect
//       if (blackHole && blackHole.glowMesh) {
//         blackHole.glowMesh.material.uniforms.viewVector.value = camera.position;
//       }

//       // Slowly rotate the entire scene for dramatic effect
//       scene.rotation.y = Math.sin(elapsedTime * 0.05) * 0.05;
//       scene.rotation.x = Math.sin(elapsedTime * 0.03) * 0.02;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) element.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       id="home"
//       className="relative w-full h-screen overflow-hidden flex items-center justify-center"
//     >
//       {/* 3D Background Container - absolute position taking full screen */}
//       <div ref={mountRef} className="absolute inset-0 w-full h-full z-0"></div>

//       {/* Loading message */}
//       {!modelLoaded && !loadingError && (
//         <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-md z-30">
//           Loading black hole visualization...
//         </div>
//       )}

//       {/* Error message */}
//       {loadingError && (
//         <div className="absolute top-4 left-4 bg-red-900/50 text-white px-4 py-2 rounded-md z-30">
//           {loadingError}
//         </div>
//       )}

//       {/* Content - centered in the screen */}
//       {/* <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             Your idea, our code —<br />
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-200 bg-clip-text text-transparent">
//               welcome to the DevVerse.
//             </span>
//           </h1>
//           <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
//             We build scalable mobile, web, and SaaS apps — with speed,
//             precision, and power.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button
//               onClick={() => scrollToSection("contact")}
//               onMouseEnter={() => setIsHoveredBuild(true)}
//               onMouseLeave={() => setIsHoveredBuild(false)}
//               className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               <span className="relative z-10">Let's Build Together</span>
//               {isHoveredBuild && (
//                 <span className="absolute top-0 left-0 w-full h-full bg-white/10 animate-pulse rounded-full"></span>
//               )}
//             </button>
//             <button
//               onClick={() => scrollToSection("projects")}
//               onMouseEnter={() => setIsHoveredExplore(true)}
//               onMouseLeave={() => setIsHoveredExplore(false)}
//               className="px-8 py-3 bg-transparent border border-purple-300/20 rounded-full text-white font-medium hover:bg-purple-900/10 transition-all duration-300 relative overflow-hidden"
//             >
//               <span className="relative z-10">Explore Work</span>
//               {isHoveredExplore && (
//                 <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-purple-500/10 animate-pulse rounded-full"></span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div> */}
//     </section>
//   );
// }
