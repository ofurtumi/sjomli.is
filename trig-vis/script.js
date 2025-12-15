import {
	shapes,
	drawRoundRect,
	drawCircle,
	drawLine,
	circleToEnv,
} from "./drawers";

let start;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.querySelector(".container");

const { rectangles, circles } = shapes;

let [cXs, cYs] = [canvas.width / 2, canvas.height / 2];
let [cXe, cYe] = [canvas.width / 2, canvas.height / 2 + 100];
let [mx, my] = [0, 0];
let moveable = false;
let listening = false;

circles.push(
	{
		x: () => cXs,
		y: () => cYs,
		setPos: (x, y) => ([cXs, cYs] = [x, y]),
		radius: 20,
		draggable: true,
	},
	{
		x: () => cXe,
		y: () => cYe,
		setPos: (x, y) => ([cXe, cYe] = [x, y]),
		radius: 10,
		draggable: true,
	},
);

const setCanvasSize = () => {
	console.log("resizing");
	canvas.width = container.clientWidth;
	canvas.height = container.clientHeight;
	[cXs, cYs] = [canvas.width / 2, canvas.height / 2];
	[cXe, cYe] = [canvas.width / 2, canvas.height / 2 + 100];
};

const loop = (timestamp) => {
	if (
		canvas.width !== container.clientWidth ||
		canvas.height !== container.clientHeight
	) {
		setCanvasSize(canvas);
	}

	if (start === undefined) {
		start = timestamp;
	}

	if (moveable) {
		const canvasPos = canvas.getBoundingClientRect();
		listening = true;
		document.addEventListener("mousemove", (e) => {
			mx = e.x - canvasPos.left;
			my = e.y - canvasPos.top;
		});
		circles
			.filter((c) => c.moving)
			.forEach((circle) => {
				circle.setPos(mx, my);
			});
	} else if (listening) {
		const canvasPos = canvas.getBoundingClientRect();
		document.removeEventListener("mousemove", (e) => {
			mx = e.x - canvasPos.left;
			my = e.y - canvasPos.top;
		});
		circles
			.filter((c) => c.draggable)
			.forEach((circle) => {
				circle.moving = false;
			});
		listening = false;
	}

	ctx.reset();
	ctx.fillStyle = "#fff8";
	ctx.strokeStyle = "#fff8";

	rectangles.forEach((rect) => {
		drawRoundRect(ctx, rect);
	});

	circles.forEach((circle) => {
		drawCircle(ctx, circle);
	});

	lineAndMirror(ctx, cXs, cYs, cXe, cYe);

	requestAnimationFrame(loop);
};

setCanvasSize(canvas);

const lineAndMirror = (ctx, startX, startY, endX, endY) => {
	drawLine(ctx, startX, startY, endX, endY);

	const [rx, ry, rw, rh] = [
		rectangles[0].x,
		rectangles[0].y(canvas.height),
		rectangles[0].w(canvas.width),
		rectangles[0].h,
	];

	if (endX >= rx && endX <= rx + rw && endY >= ry) {
		endY = ry;
	}

	const vec = [endX - startX, endY - startY];
	const vecLength = Math.sqrt(vec[0] ** 2 + vec[1] ** 2);
	const normalizedVec = [vec[0] / vecLength, vec[1] / vecLength];
	drawLine(
		ctx,
		endX,
		endY,
		endX + normalizedVec[0] * vecLength,
		endY + -normalizedVec[1] * vecLength,
	);
};

const isInside = (e) => {
	const rect = canvas.getBoundingClientRect();
	mx = e.x - rect.left;
	my = e.y - rect.top;

	circles
		.filter((circle) => circle.draggable)
		.forEach((circle) => {
			// check if the click is inside the circle
			const { x, y } = circleToEnv(circle, canvas);
			if (Math.sqrt((mx - x) ** 2 + (my - y) ** 2) <= circle.radius) {
				circle.moving = true;
				moveable = true;
			}
		});
};

document.addEventListener("mousedown", isInside);
document.addEventListener("touchstart", isInside);
document.addEventListener("mouseup", () => (moveable = false));
document.addEventListener("touchend", () => (moveable = false));

requestAnimationFrame(loop);
