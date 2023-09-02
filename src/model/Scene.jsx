import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({props, meshRef}) { 
  const { nodes, materials } = useGLTF('/car/scene.gltf');

  console.log(meshRef.current.position);

  return (
    <group {...props} dispose={null} ref={meshRef} position={[0, -1, 0]} rotation={[0, 0, 0]} >
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_8.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Eraser} />
      </group>
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_11.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Eraser} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Symbol_Icons} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Lights} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.FarolGINside} />
      </group>
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_31.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Eraser} />
      </group>
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_34.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Eraser} />
      </group>
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_39.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.Eraser} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.INSIDE} />
      </group>
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_43.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Eraser} />
      </group>
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_48.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.Eraser} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.Metallic} />
      </group>
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_54.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.Metallic} />
      </group>
      <group position={[-0.719, 0.513, -1.895]} rotation={[-0.36, -0.423, 0.94]} scale={0.00}>
        <mesh geometry={nodes.Object_59.geometry} material={materials.ParafusoBDKT} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.BLACK} />
      </group>
      <group position={[-0.425, 0.991, 2.028]} rotation={[-0.016, 0, 0]}>
        <mesh geometry={nodes.Object_96.geometry} material={materials.PAINTMAIN} />
        <mesh geometry={nodes.Object_97.geometry} material={materials.BLACK} />
      </group>
      <group position={[-0.975, 0.37, 1.258]} rotation={[2.855, -0.025, 1.654]} scale={0.246}>
        <mesh geometry={nodes.Object_103.geometry} material={materials['ParafusosH.001']} />
        <mesh geometry={nodes.Object_104.geometry} material={materials['Disco.001']} />
        <mesh geometry={nodes.Object_105.geometry} material={materials['Roda.001']} />
        <mesh geometry={nodes.Object_106.geometry} material={materials['Centro.001']} />
        <mesh geometry={nodes.Object_107.geometry} material={materials['ParafusosS.001']} />
        <mesh geometry={nodes.Object_108.geometry} material={materials['Pneu2.001']} />
        <mesh geometry={nodes.Object_109.geometry} material={materials['Pneu.001']} />
        <mesh geometry={nodes.Object_110.geometry} material={materials.BrakeDIsk} />
      </group>
      <group position={[0.9, 0.337, -1.295]} rotation={[-1.121, -0.174, -1.557]} scale={0.238}>
        <mesh geometry={nodes.Object_112.geometry} material={materials['ParafusosH.001']} />
        <mesh geometry={nodes.Object_113.geometry} material={materials['Disco.001']} />
        <mesh geometry={nodes.Object_114.geometry} material={materials['Roda.001']} />
        <mesh geometry={nodes.Object_115.geometry} material={materials['Centro.001']} />
        <mesh geometry={nodes.Object_116.geometry} material={materials['ParafusosS.001']} />
        <mesh geometry={nodes.Object_117.geometry} material={materials['Pneu2.001']} />
        <mesh geometry={nodes.Object_118.geometry} material={materials['Pneu.001']} />
        <mesh geometry={nodes.Object_119.geometry} material={materials.BrakeDIsk} />
      </group>
      <group position={[1.005, 0.363, 1.258]} rotation={[-1.497, -0.174, -1.557]} scale={0.246}>
        <mesh geometry={nodes.Object_121.geometry} material={materials['ParafusosH.001']} />
        <mesh geometry={nodes.Object_122.geometry} material={materials['Disco.001']} />
        <mesh geometry={nodes.Object_123.geometry} material={materials['Roda.001']} />
        <mesh geometry={nodes.Object_124.geometry} material={materials['Centro.001']} />
        <mesh geometry={nodes.Object_125.geometry} material={materials['ParafusosS.001']} />
        <mesh geometry={nodes.Object_126.geometry} material={materials['Pneu2.001']} />
        <mesh geometry={nodes.Object_127.geometry} material={materials['Pneu.001']} />
        <mesh geometry={nodes.Object_128.geometry} material={materials.BrakeDIsk} />
      </group>
      <group position={[0.558, 0.316, 2.079]} rotation={[-0.032, 0, 0]} scale={0.188}>
        <mesh geometry={nodes.Object_132.geometry} material={materials['glass.001']} />
        <mesh geometry={nodes.Object_133.geometry} material={materials.SVGMat} />
        <mesh geometry={nodes.Object_134.geometry} material={materials.DigitalRed} />
      </group>
      <group position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]}>
        <mesh geometry={nodes.Object_140.geometry} material={materials['glass.001']} />
        <mesh geometry={nodes.Object_141.geometry} material={materials.Metallic} />
        <mesh geometry={nodes.Object_142.geometry} material={materials.INSIDE} />
        <mesh geometry={nodes.Object_143.geometry} material={materials.Bars} />
        <mesh geometry={nodes.Object_144.geometry} material={materials.Bars} />
        <mesh geometry={nodes.Object_145.geometry} material={materials.Bars} />
      </group>
      <group position={[-0.546, 0.526, -2.06]} rotation={[-1.587, -0.003, 0.382]} scale={0.006}>
        <mesh geometry={nodes.Object_157.geometry} material={materials.BLACK} />
        <mesh geometry={nodes.Object_158.geometry} material={materials.XEONEMISSION} />
      </group>
      <group position={[0, 0.159, -0.092]} rotation={[-0.016, 0, 0]} scale={8.359}>
        <mesh geometry={nodes.Object_160.geometry} material={materials.BLACK} />
        <mesh geometry={nodes.Object_161.geometry} material={materials.LANTERNA} />
        <mesh geometry={nodes.Object_162.geometry} material={materials.REDLIGHT} />
        <mesh geometry={nodes.Object_163.geometry} material={materials.YELLOW} />
      </group>
      <group position={[-0.9, 0.344, -1.298]} rotation={[1.019, -0.173, 1.557]} scale={0.238}>
        <mesh geometry={nodes.Object_165.geometry} material={materials['ParafusosH.001']} />
        <mesh geometry={nodes.Object_166.geometry} material={materials['Disco.001']} />
        <mesh geometry={nodes.Object_167.geometry} material={materials['Roda.001']} />
        <mesh geometry={nodes.Object_168.geometry} material={materials['Centro.001']} />
        <mesh geometry={nodes.Object_169.geometry} material={materials['ParafusosS.001']} />
        <mesh geometry={nodes.Object_170.geometry} material={materials['Pneu2.001']} />
        <mesh geometry={nodes.Object_171.geometry} material={materials['Pneu.001']} />
        <mesh geometry={nodes.Object_172.geometry} material={materials.BrakeDIsk} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Lanterna} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.PLASTIC} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.LineRed} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.Chao} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_21.geometry} material={materials['glass.001']} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials['glass.001']} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.BLACKWINDOWN} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.BLACKWINDOWN} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.Exhaust} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_37.geometry} material={materials['glass.001']} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.BLACKWINDOWN} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_52.geometry} material={materials['glass.001']} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_57.geometry} material={materials.Farol} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.FarolBlack} position={[0, 0.121, 0.009]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_64.geometry} material={materials.Metallic} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.PAINTMAIN} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_68.geometry} material={materials.material_0} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_70.geometry} material={materials.PAINTMAIN} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_72.geometry} material={materials.Eraser} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_74.geometry} material={materials.BLACK} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_76.geometry} material={materials.PAINTMAIN} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_78.geometry} material={materials.PAINTMAIN} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_80.geometry} material={materials.PAINTMAIN} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_82.geometry} material={materials.CARBON} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_84.geometry} material={materials.PAINTMAIN} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_86.geometry} material={materials.Spoiler} position={[0, 0.154, 0.247]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_88.geometry} material={materials.SpoilerSup} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_90.geometry} material={materials.Spoiler} position={[-0.425, 0.991, 2.028]} rotation={[0.009, 0, 0]} />
      <mesh geometry={nodes.Object_92.geometry} material={materials.Spoiler} position={[0, 0.154, 0.247]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_94.geometry} material={materials.Metallic} position={[-0.418, 0.982, 2.037]} rotation={[1.894, -1.454, 1.442]} scale={0.009} />
      <mesh geometry={nodes.Object_99.geometry} material={materials.Eraser} position={[0.002, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_101.geometry} material={materials.Eraser} position={[0.003, 0.159, 0.009]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_130.geometry} material={materials.BrakeDIsk} position={[0.965, 0.363, 1.258]} rotation={[-2.383, -0.022, -1.592]} scale={0.246} />
      <mesh geometry={nodes.Object_136.geometry} material={materials.CARBON} position={[0, 0.172, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_138.geometry} material={materials.PAINTMAIN} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_147.geometry} material={materials.PAINTMAIN} position={[0, 0.161, 0.008]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_149.geometry} material={materials.Chao} position={[0, 0.161, 0.008]} rotation={[1.554, 0, 0]} />
      <mesh geometry={nodes.Object_151.geometry} material={materials.CARBON} position={[-0.425, 1.033, 1.982]} rotation={[-0.016, 0, 0]} />
      <mesh geometry={nodes.Object_153.geometry} material={materials.Radiator} position={[0, 0.296, -2.04]} rotation={[-0.278, 0, 0]} scale={0.224} />
      <mesh geometry={nodes.Object_155.geometry} material={materials.Metallic} position={[-0.896, 1.163, 1.914]} rotation={[-0.016, 0, 1.478]} scale={0.006} />
      <mesh geometry={nodes.Object_174.geometry} material={materials.chao} scale={3.438} />
    </group>
  )
}

useGLTF.preload('/car/scene.gltf')
