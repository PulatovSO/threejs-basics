import * as THREE from 'three';

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

renderer.render(scene, camera);