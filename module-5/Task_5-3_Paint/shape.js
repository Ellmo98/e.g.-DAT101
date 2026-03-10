"use strict";

import { TPoint } from "lib2d";
import { newShapeType } from "./paint.mjs";
import { EShapeType } from "./menu.js";


// ======================
// Canvas Setup
// ======================

const canvas = document.getElementById("cvsPaint");
const context = canvas.getContext("2d");

let currentMousePosition = new TPoint();
let activeShape = null;
let savedShapes = [];


// ======================
// Base Shape
// ======================

class Shape {

    constructor(startX, startY) {
        this.startPosition = new TPoint(startX, startY);
        this.endPosition = null;
    }

    setEndPosition(x, y) {
        this.endPosition = new TPoint(x, y);
    }

    draw() {}
}


// ======================
// Line
// ======================

export class LineShape extends Shape {

    draw() {
        if (!this.endPosition) return;

        context.beginPath();
        context.moveTo(this.startPosition.x, this.startPosition.y);
        context.lineTo(this.endPosition.x, this.endPosition.y);
        context.stroke();
    }
}


// ======================
// Circle
// ======================

export class CircleShape extends Shape {

    draw() {
        if (!this.endPosition) return;

        const dx = this.endPosition.x - this.startPosition.x;
        const dy = this.endPosition.y - this.startPosition.y;
        const radius = Math.sqrt(dx * dx + dy * dy);

        context.beginPath();
        context.arc(
            this.startPosition.x,
            this.startPosition.y,
            radius,
            0,
            Math.PI * 2
        );
        context.stroke();
    }
}


// ======================
// Rectangle
// ======================

export class RectangleShape extends Shape {

    draw() {
        if (!this.endPosition) return;

        const width = this.endPosition.x - this.startPosition.x;
        const height = this.endPosition.y - this.startPosition.y;

        context.beginPath();
        context.rect(
            this.startPosition.x,
            this.startPosition.y,
            width,
            height
        );
        context.stroke();
    }
}


// ======================
// Oval (Ellipse)
// ======================

export class OvalShape extends Shape {

    draw() {
        if (!this.endPosition) return;

        const centerX = (this.startPosition.x + this.endPosition.x) / 2;
        const centerY = (this.startPosition.y + this.endPosition.y) / 2;

        const radiusX = Math.abs(this.endPosition.x - this.startPosition.x) / 2;
        const radiusY = Math.abs(this.endPosition.y - this.startPosition.y) / 2;

        context.beginPath();
        context.ellipse(
            centerX,
            centerY,
            radiusX,
            radiusY,
            0,
            0,
            Math.PI * 2
        );
        context.stroke();
    }
}


// ======================
// Pen (Freehand)
// ======================

export class PenShape extends Shape {
    #points;

    constructor(startX, startY) {
        super(startX, startY);
        this.#points = [new TPoint(startX, startY)];
    }

    addPoint(x, y) {
        this.#points.push(new TPoint(x, y));
    }

    draw() {

        if (this.#points.length < 2) return;

        context.beginPath();
        context.moveTo(this.#points[0].x, this.#points[0].y);

        for (let i = 1; i < this.#points.length; i++) {
            context.lineTo(this.#points[i].x, this.#points[i].y);
        }

        context.stroke();
    }
}


// ======================
// Polygon (Multi-click)
// ======================

export class PolygonShape extends Shape {
    #isFinished;
    #points;

    constructor(startX, startY) {
        super(startX, startY);
        this.#points = [new TPoint(startX, startY)]; 
        this.#isFinished = false; 
    }

    addPoint(x, y) {
        this.#points.push(new TPoint(x, y));
    }

    finish() {
        this.#isFinished = true;
    }

    draw() {

        if (this.#points.length < 2) return;

        context.beginPath();
        context.moveTo(this.#points[0].x, this.#points[0].y);

        for (let i = 1; i < this.#points.length; i++) {
            context.lineTo(this.#points[i].x, this.#points[i].y);
        }

        // Preview line to mouse
        if (!this.#isFinished) {
            context.lineTo(
                currentMousePosition.x,
                currentMousePosition.y
            );
        } else {
            context.closePath();
        }

        context.stroke();
    }
}


// ======================
// Mouse Helpers
// ======================

function updateMousePosition(event) {

    const rect = canvas.getBoundingClientRect();

    currentMousePosition.x =
        Math.round(event.clientX - rect.left);

    currentMousePosition.y =
        Math.round(event.clientY - rect.top);
}


// ======================
// Mouse Events
// ======================

function handleMouseDown(event) {

    updateMousePosition(event);

    const selectedTool = newShapeType.ShapeType;

    // Hvis vi holder på med polygon men har byttet verktøy → avslutt den
    if (activeShape instanceof PolygonShape &&
        selectedTool !== EShapeType.Polygon) {

        savedShapes.push(activeShape);
        activeShape = null;
    }

    // POLYGON MODE
    if (selectedTool === EShapeType.Polygon) {

        if (!activeShape) {
            activeShape = new PolygonShape(
                currentMousePosition.x,
                currentMousePosition.y
            );
        } else {
            activeShape.addPoint(
                currentMousePosition.x,
                currentMousePosition.y
            );
        }

        return;
    }

    // Hvis en polygon fortsatt er aktiv → ikke gjør noe
    if (activeShape instanceof PolygonShape) return;

    // NORMAL SHAPES
    if (!activeShape) {

        switch (selectedTool) {

            case EShapeType.Line:
                activeShape = new LineShape(
                    currentMousePosition.x,
                    currentMousePosition.y
                );
                break;

            case EShapeType.Circle:
                activeShape = new CircleShape(
                    currentMousePosition.x,
                    currentMousePosition.y
                );
                break;

            case EShapeType.Rectangle:
                activeShape = new RectangleShape(
                    currentMousePosition.x,
                    currentMousePosition.y
                );
                break;

            case EShapeType.Oval:
                activeShape = new OvalShape(
                    currentMousePosition.x,
                    currentMousePosition.y
                );
                break;

            case EShapeType.Pen:
                activeShape = new PenShape(
                    currentMousePosition.x,
                    currentMousePosition.y
                );
                break;
        }
    }
}

function handleMouseMove(event) {

    updateMousePosition(event);

    if (!activeShape) return;

    // Pen (freehand)
    if (activeShape instanceof PenShape) {

        activeShape.addPoint(
            currentMousePosition.x,
            currentMousePosition.y
        );

        return;
    }

    // Normal shapes (not polygon)
    if (!(activeShape instanceof PolygonShape)) {

        activeShape.setEndPosition(
            currentMousePosition.x,
            currentMousePosition.y
        );
    }
}


function handleMouseUp(event) {

    updateMousePosition(event);

    if (!activeShape) return;

    // Pen ends on mouseUp
    if (activeShape instanceof PenShape) {

        savedShapes.push(activeShape);
        activeShape = null;
        return;
    }

    // Polygon ends with double click
    if (activeShape instanceof PolygonShape) return;

    activeShape.setEndPosition(
        currentMousePosition.x,
        currentMousePosition.y
    );

    savedShapes.push(activeShape);
    activeShape = null;
}


// Double click finishes polygon
function handleDoubleClick() {

    if (activeShape instanceof PolygonShape) {

        activeShape.finish();
        savedShapes.push(activeShape);
        activeShape = null;
    }
}


// ======================
// Drawing Loop
// ======================

function drawCanvas() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let shape of savedShapes) {
        shape.draw();
    }

    if (activeShape) {
        activeShape.draw();
    }

    requestAnimationFrame(drawCanvas);
}


// ======================
// Event Listeners
// ======================

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);
canvas.addEventListener("dblclick", handleDoubleClick);


// Start drawing loop
drawCanvas();