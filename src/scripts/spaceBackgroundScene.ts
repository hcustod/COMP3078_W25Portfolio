import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from 'three';

const MOBILE_BREAKPOINT = 768;
const DESKTOP_STAR_COUNT = 720;
const MOBILE_STAR_COUNT = 420;
const CLUSTER_POINT_COUNT = 160;
const MAX_PIXEL_RATIO = 1.5;

const getViewportSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth < MOBILE_BREAKPOINT,
});

const createStars = (isMobile: boolean) => {
  const starCount = isMobile ? MOBILE_STAR_COUNT : DESKTOP_STAR_COUNT;
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i += 1) {
    const stride = i * 3;
    positions[stride] = (Math.random() - 0.5) * 120;
    positions[stride + 1] = (Math.random() - 0.5) * 100;
    positions[stride + 2] = (Math.random() - 0.5) * 90;

    const tone = 0.75 + Math.random() * 0.25;
    colors[stride] = 0.55 * tone;
    colors[stride + 1] = 0.75 * tone;
    colors[stride + 2] = tone;
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));
  geometry.setAttribute('color', new BufferAttribute(colors, 3));

  const material = new PointsMaterial({
    size: isMobile ? 0.22 : 0.27,
    transparent: true,
    opacity: 0.95,
    vertexColors: true,
    blending: AdditiveBlending,
    depthWrite: false,
  });

  return {
    geometry,
    material,
    points: new Points(geometry, material),
  };
};

const createCluster = () => {
  const positions = new Float32Array(CLUSTER_POINT_COUNT * 3);
  for (let i = 0; i < CLUSTER_POINT_COUNT; i += 1) {
    const stride = i * 3;
    positions[stride] = (Math.random() - 0.5) * 55;
    positions[stride + 1] = (Math.random() - 0.5) * 55;
    positions[stride + 2] = (Math.random() - 0.5) * 55;
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));

  const material = new PointsMaterial({
    color: 0x3bc5ff,
    size: 0.6,
    transparent: true,
    opacity: 0.06,
    depthWrite: false,
  });

  return {
    geometry,
    material,
    points: new Points(geometry, material),
  };
};

const applyRendererSize = (renderer: WebGLRenderer, camera: PerspectiveCamera) => {
  const { width, height } = getViewportSize();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
  renderer.setSize(width, height);
};

const mountSpaceBackground = (root: HTMLElement) => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(70, 1, 0.1, 1000);
  camera.position.z = 28;

  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: false,
    powerPreference: 'low-power',
    depth: false,
    stencil: false,
  });

  applyRendererSize(renderer, camera);
  root.appendChild(renderer.domElement);

  const stars = createStars(getViewportSize().isMobile);
  const cluster = createCluster();
  scene.add(stars.points);
  scene.add(cluster.points);

  const pointer = { x: 0, y: 0 };
  let animationFrame = 0;
  let isDisposed = false;
  let isAnimating = false;

  const renderFrame = () => {
    if (isDisposed || !isAnimating) return;

    stars.points.rotation.y += 0.00045;
    stars.points.rotation.x += 0.0001;
    cluster.points.rotation.y -= 0.0002;
    cluster.points.rotation.x += 0.00008;

    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.02;
    camera.position.y += (-pointer.y * 0.8 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    animationFrame = window.requestAnimationFrame(renderFrame);
  };

  const startAnimation = () => {
    if (isDisposed || isAnimating || document.hidden) return;
    isAnimating = true;
    renderFrame();
  };

  const stopAnimation = () => {
    isAnimating = false;
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    const { width, height } = getViewportSize();
    pointer.x = (event.clientX / width) * 2 - 1;
    pointer.y = (event.clientY / height) * 2 - 1;
  };

  const onResize = () => {
    applyRendererSize(renderer, camera);
  };

  const onVisibilityChange = () => {
    if (document.hidden) {
      stopAnimation();
      return;
    }

    startAnimation();
  };

  const cleanup = () => {
    if (isDisposed) return;
    isDisposed = true;

    stopAnimation();
    window.removeEventListener('resize', onResize);
    window.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('pagehide', cleanup);

    stars.geometry.dispose();
    stars.material.dispose();
    cluster.geometry.dispose();
    cluster.material.dispose();
    renderer.dispose();

    if (root.contains(renderer.domElement)) {
      root.removeChild(renderer.domElement);
    }
  };

  window.addEventListener('resize', onResize);
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('visibilitychange', onVisibilityChange);
  window.addEventListener('pagehide', cleanup, { once: true });

  startAnimation();

  return cleanup;
};

export default mountSpaceBackground;
