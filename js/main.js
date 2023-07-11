import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// sizes
const width = window.innerWidth;
const height = window.innerHeight;

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// camera & scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

// controls
const controls = new OrbitControls(camera, renderer.domElement);

// axes
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(0, 2, 5)
controls.update();

// box geometry
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// animation
const animate = () => {
    requestAnimationFrame( animate );

    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    renderer.render( scene, camera );
}

animate();