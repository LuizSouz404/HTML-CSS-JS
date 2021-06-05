let container;
let camera;
let renderer;
let scene;
let cat;

function init() {
	container = document.querySelector('.scene');

	scene = new THREE.Scene();

	const fov = 80;
	const aspect = container.clientWidth / container.clientHeight;
	const near = 10;
	const far = 1000;

	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(-50, 0 , 30);

	const ambient = new THREE.AmbientLight(0x404040, 3);
	scene.add(ambient)

	const light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(10,10,10);
	scene.add(light);

	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);

	container.appendChild(renderer.domElement);

	let loader = new THREE.GLTFLoader();
	loader.load('./3d/NF/scene.gltf', function(gltf) {
		scene.add(gltf.scene);
		cat = gltf.scene.children[0];
		animate();
	});
}

function animate() {
	requestAnimationFrame(animate);

	cat.rotation.z += 0.010;
	renderer.render(scene, camera);
}

init();

function onWindowResize() {
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);