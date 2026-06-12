// Hero 3D — Koltrex
// Filamentos grossos em hélice, canvas transparente sobre as letras

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

// ── Renderer: transparente, canvas na frente das letras (z-index CSS: 2) ──────
const canvas   = document.getElementById('hero-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x000000, 0); // fundo transparente — CSS do hero aparece por trás

// ── Cena + Câmera ─────────────────────────────────────────────────────────────
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0.6, 0.2, 7);

// ── Iluminação ────────────────────────────────────────────────────────────────
scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d8d8, 0.7));
scene.add(new THREE.AmbientLight(0xffffff, 0.35));

// Principal — sombras fortes que definem cada filamento
const sol = new THREE.DirectionalLight(0xffffff, 2.8);
sol.position.set(4, 7, 3);
sol.castShadow = true;
sol.shadow.mapSize.set(1024, 1024);
sol.shadow.radius = 2;
scene.add(sol);

// Preenchimento lateral
const fill = new THREE.DirectionalLight(0xf0f0f0, 1.0);
fill.position.set(-5, 1, 2);
scene.add(fill);

// Contraluz: destaca bordas e separa filamentos visualmente
const rim = new THREE.DirectionalLight(0xffffff, 0.7);
rim.position.set(0, -3, -6);
scene.add(rim);

// ── Curva helicoidal ──────────────────────────────────────────────────────────
const pontos = [];
for (let i = 0; i <= 80; i++) {
  const t     = i / 80;
  const angle = t * Math.PI * 4;        // 2 rotações completas
  const r     = 1.5 - t * 0.35;        // raio diminui levemente
  pontos.push(new THREE.Vector3(
    -0.2 + Math.cos(angle) * r,
     2.7 - t * 5.6,                    // topo → fundo (atravessa a área das letras)
    Math.sin(angle) * r * 0.72
  ));
}
const curva = new THREE.CatmullRomCurve3(pontos);

// ── Filamentos grossos (InstancedMesh) ────────────────────────────────────────
// Poucos (38) e espessos — gap visível entre cada um
const N = 38;

// Filamento: largo em X, grosso em Y e Z (placa com volume real)
const geo = new THREE.BoxGeometry(1.65, 0.28, 0.16);

// Leve cinza para ter contraste contra fundo branco; sombras fazem o resto
const mat = new THREE.MeshStandardMaterial({
  color:     0xebebeb,
  roughness: 0.32,
  metalness: 0.0,
});

const fita = new THREE.InstancedMesh(geo, mat, N);
fita.castShadow    = true;
fita.receiveShadow = true;

const frames = curva.computeFrenetFrames(N - 1, false);
const aux    = new THREE.Object3D();

for (let i = 0; i < N; i++) {
  const T = frames.tangents[i];
  const N_ = frames.normals[i];
  const B  = frames.binormals[i];

  aux.position.copy(curva.getPoint(i / (N - 1)));
  aux.setRotationFromMatrix(new THREE.Matrix4().makeBasis(N_, B, T));
  aux.updateMatrix();
  fita.setMatrixAt(i, aux.matrix);
}
fita.instanceMatrix.needsUpdate = true;

const grupo = new THREE.Group();
grupo.add(fita);
scene.add(grupo);

// ── Parallax do mouse ─────────────────────────────────────────────────────────
const mouse = { x: 0, y: 0 };
const lerp  = { x: 0, y: 0 };

document.addEventListener('mousemove', e => {
  mouse.x =  (e.clientX / window.innerWidth  - 0.5);
  mouse.y = -(e.clientY / window.innerHeight - 0.5);
});

// ── Resize ────────────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Loop ──────────────────────────────────────────────────────────────────────
const clock = new THREE.Clock();

(function tick() {
  requestAnimationFrame(tick);
  const t = clock.getElapsedTime();

  lerp.x += (mouse.x - lerp.x) * 0.04;
  lerp.y += (mouse.y - lerp.y) * 0.04;

  grupo.rotation.y = t * 0.07 + lerp.x * 0.28;
  grupo.rotation.x = Math.sin(t * 0.14) * 0.04 + lerp.y * 0.13;

  renderer.render(scene, camera);
})();
