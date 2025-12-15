/**
 * @typedef {Object} shapes
 * @property {rectangle[]} rectangles - An array of rectangle objects to be drawn.
 * @property {circle[]} circles - An array of circle objects to be drawn.
 */
export const shapes = {
	rectangles: [
		{
			x: 50,
			y: (h) => h / 2 + 100,
			w: (w) => w - 100,
			h: 50,
			radius: 10,
			fill: false,
		},
	],
	circles: [],
};

/**
 * @typedef {Object} rectangle
 * @property {number | (w: number) => number} x - The x-coordinate of the square or a function to calculate the relative position in space.
 * @property {number | (h: number) => number} y - The y-coordinate of the square or a function to calculate the relative position in space.
 * @property {number | (w: number) => number} w - The width of the square or a function to calculate the relative width in space.
 * @property {number | (h: number) => number} h - The height of the square or a function to calculate the relative height in space.
 * @property {number} radius - The radius for rounded corners, default is 0.
 * @property {boolean} fill - Whether to fill the square with color, default is false.
 */

/**
 * @typedef {Object} circle
 * @property {Number | (w: Number) => Number} x - The x-coordinate of the circle or a function to calculate the relative position in space.
 * @property {Number | (h: Number) => Number} y - The y-coordinate of the circle or a function to calculate the relative position in space.
 * @property {Number} radius - The radius of the circle, default is 10.
 * @property {Function} setPos - A function to set the position of the circle, typically used for draggable circles.
 * @property {Boolean} draggable - Whether the circle is draggable, default is false.
 */

/**
 * Convert square functional values to number values based on the canvas dimensions.
 * @param {rectangle} rectangle - The square object with x and y properties that can be numbers or functions.
 */
export const rectToEnv = (rectangle, canvas) => {
	return {
		x:
			typeof rectangle.x === "function"
				? rectangle.x(canvas.width)
				: rectangle.x,
		y:
			typeof rectangle.y === "function"
				? rectangle.y(canvas.height)
				: rectangle.y,
		w:
			typeof rectangle.w === "function"
				? rectangle.w(canvas.width)
				: rectangle.w,
		h:
			typeof rectangle.h === "function"
				? rectangle.h(canvas.height)
				: rectangle.h,
		radius: rectangle.radius || 0,
		fill: rectangle.fill || false,
	};
};

export const circleToEnv = (circle, canvas) => {
	return {
		x: typeof circle.x === "function" ? circle.x(canvas.width) : circle.x,
		y: typeof circle.y === "function" ? circle.y(canvas.height) : circle.y,
		radius: circle.radius || 10,
		draggable: circle.draggable || false,
	};
};

export const drawCircle = (ctx, circle) => {
	circle = circleToEnv(circle, ctx.canvas);
	const { x, y, radius, fill } = circle;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.stroke();
	if (fill) {
		ctx.fill();
	}
};

export const drawRoundRect = (ctx, rect) => {
	rect = rectToEnv(rect, ctx.canvas);
	const { x, y, w, h, radius, fill } = rect;
	ctx.beginPath();
	ctx.moveTo(x + radius, y);
	ctx.lineTo(x + w - radius, y);
	ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
	ctx.lineTo(x + w, y + h - radius);
	ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
	ctx.lineTo(x + radius, y + h);
	ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
	ctx.lineTo(x, y + radius);
	ctx.quadraticCurveTo(x, y, x + radius, y);
	ctx.closePath();
	ctx.stroke();
	if (fill) {
		ctx.fill();
	}
};

export const drawLine = (ctx, startX, startY, endX, endY) => {
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.stroke();
};
