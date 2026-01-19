import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

function FloatingNumber({ position, number, color, speed = 1 }) {
  const meshRef = useRef()
  const initialY = position[1]

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.3
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  )
}

function MathSymbol({ position, rotation, symbol, delay = 0 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.3
      meshRef.current.rotation.z = Math.cos(time * 0.3) * 0.2
    }
  })

  const geometry = useMemo(() => {
    switch (symbol) {
      case 'plus':
        return (
          <group>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.4, 0.1, 0.1]} />
              <meshStandardMaterial color="#c4a962" emissive="#c4a962" emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.1, 0.4, 0.1]} />
              <meshStandardMaterial color="#c4a962" emissive="#c4a962" emissiveIntensity={0.2} />
            </mesh>
          </group>
        )
      case 'multiply':
        return (
          <group rotation={[0, 0, Math.PI / 4]}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.4, 0.08, 0.08]} />
              <meshStandardMaterial color="#c4a962" emissive="#c4a962" emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <boxGeometry args={[0.4, 0.08, 0.08]} />
              <meshStandardMaterial color="#c4a962" emissive="#c4a962" emissiveIntensity={0.2} />
            </mesh>
          </group>
        )
      case 'equals':
        return (
          <group>
            <mesh position={[0, 0.08, 0]}>
              <boxGeometry args={[0.3, 0.06, 0.06]} />
              <meshStandardMaterial color="#c4a962" emissive="#c4a962" emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0, -0.08, 0]}>
              <boxGeometry args={[0.3, 0.06, 0.06]} />
              <meshStandardMaterial color="#c4a962" emissive="#c4a962" emissiveIntensity={0.2} />
            </mesh>
          </group>
        )
      default:
        return null
    }
  }, [symbol])

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      {geometry}
    </group>
  )
}

function GeometricShape({ position, type, color, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
    }
  })

  const getGeometry = () => {
    switch (type) {
      case 'icosahedron':
        return <icosahedronGeometry args={[0.25 * scale, 0]} />
      case 'octahedron':
        return <octahedronGeometry args={[0.25 * scale, 0]} />
      case 'tetrahedron':
        return <tetrahedronGeometry args={[0.25 * scale, 0]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.2 * scale, 0]} />
      default:
        return <boxGeometry args={[0.3 * scale, 0.3 * scale, 0.3 * scale]} />
    }
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const particlesRef = useRef()
  const count = 100

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
      particlesRef.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c4a962"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c4a962" />

      <ParticleField />

      {/* Geometric shapes */}
      <GeometricShape position={[-2, 1, -1]} type="icosahedron" color="#ffffff" scale={1.2} />
      <GeometricShape position={[2, -0.5, -2]} type="octahedron" color="#c4a962" scale={1} />
      <GeometricShape position={[-1.5, -1, 0]} type="tetrahedron" color="#ffffff" scale={0.8} />
      <GeometricShape position={[1.5, 1.5, -1.5]} type="dodecahedron" color="#c4a962" scale={1.1} />

      {/* Math symbols */}
      <MathSymbol position={[0, 0.5, 0]} rotation={[0, 0, 0]} symbol="plus" delay={0} />
      <MathSymbol position={[-1, -0.5, 1]} rotation={[0.5, 0.3, 0]} symbol="multiply" delay={1} />
      <MathSymbol position={[1, 0, 0.5]} rotation={[0.2, 0.5, 0]} symbol="equals" delay={2} />

      {/* Floating particles representing numbers */}
      <FloatingNumber position={[-0.5, 1.2, 0.5]} number="π" color="#c4a962" speed={1.2} />
      <FloatingNumber position={[0.8, -0.8, 0.3]} number="∑" color="#ffffff" speed={0.8} />
      <FloatingNumber position={[-1.2, 0.2, -0.5]} number="∞" color="#c4a962" speed={1} />
    </>
  )
}

function LoadingScreen({ onLoadingComplete }) {
  return (
    <div className="loading-screen">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
          Math Geek Albania
        </h1>
        <p className="text-white/80 text-lg md:text-xl">Loading...</p>
        <div className="mt-6 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#c4a962] rounded-full animate-pulse"
            style={{
              animation: 'loadingBar 2s ease-in-out forwards'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
