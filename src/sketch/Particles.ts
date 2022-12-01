import p5 from "p5";
import { generateRandomLocation } from "./Utils";

export default class Particle {
    sketch: p5
    location: p5.Vector;
    velocity: p5.Vector;
    acceleration: p5.Vector;
    target: p5.Vector;

    closeEnoughTarget: number;
    maxSpeed: number;
    maxForce: number;
    particleSize: number;
    isKilled: boolean;

    startColor: p5.Color;
    targetColor: p5.Color;
    colorWeight: number;
    colorBlendRate: number;

    constructor(sketch: p5) {
        this.sketch = sketch;
        this.location = this.sketch.createVector(0, 0);
        this.velocity = this.sketch.createVector(0, 0);
        this.acceleration = this.sketch.createVector(0, 0);
        this.target = this.sketch.createVector(0, 0);

        this.closeEnoughTarget = 50;
        this.maxSpeed = 4;
        this.maxForce = 0.1;
        this.particleSize = 9;
        this.isKilled = false;

        this.startColor = this.sketch.color(0);
        this.targetColor = this.sketch.color(0);
        this.colorWeight = 0;
        this.colorBlendRate = 0.025;
    }

    move = () => {
        let proximityMult = 1.0;
        let distance = this.sketch.dist(this.location.x, this.location.y, this.target.x, this.target.y);
        if (distance < this.closeEnoughTarget) {
            proximityMult = distance / this.closeEnoughTarget;
        }

        let towardsTarget = this.sketch.createVector(this.target.x, this.target.y);
        towardsTarget.sub(this.location);
        towardsTarget.normalize();
        towardsTarget.mult(this.maxSpeed * proximityMult);

        let steer = this.sketch.createVector(towardsTarget.x, towardsTarget.y);
        steer.sub(this.velocity);
        steer.normalize();
        steer.mult(this.maxForce);
        this.acceleration.add(steer);

        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    display = () => {
        let currentColor = this.sketch.lerpColor(this.startColor, this.targetColor, this.colorWeight);
        this.sketch.noStroke();
        this.sketch.fill(currentColor);
        this.sketch.ellipse(this.location.x, this.location.y, this.particleSize, this.particleSize);

        if (this.colorWeight < 1.0) {
            this.colorWeight = this.sketch.min(this.colorWeight + this.colorBlendRate, 1.0);
        }
    }

    run = () => {
        this.move();
        this.display();
    }

    kill = () => {
        if (!this.isKilled) {
            let randomLocation = generateRandomLocation(this.sketch.width / 2, this.sketch.height / 2, (this.sketch.width + this.sketch.height) / 2, this.sketch);
            this.target.x = randomLocation.x;
            this.target.y = randomLocation.y;

            this.startColor = this.sketch.lerpColor(this.startColor, this.targetColor, this.colorWeight);
            this.targetColor = this.sketch.color(0);
            this.colorWeight = 0;

            this.isKilled = true;
        }
    }
}
