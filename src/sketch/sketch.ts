import p5 from "p5";
import { generateRandomLocation } from "./Utils";
import Particle from "./Particles";

const mySketch = (parentElement: HTMLElement) => (p: p5) => {
    let particles: Particle[] = [];
    let pixelSteps: number = 9;
    let words: string[] = [];
    let wordIndex: number = 0;
    let fontName: string = "Arial";
    let bgColor: p5.Color = p.color(20, 100);

    const displayWord = (word: string, sketch: p5) => {
        let pg: p5.Graphics = sketch.createGraphics(sketch.width, sketch.height);
        pg.background(0);
        pg.fill(255);
        pg.textSize(150);
        pg.textAlign("center", "center");
        pg.textFont(fontName);
        pg.text(word, sketch.width / 2, sketch.height / 2);
        pg.loadPixels();

        let newColor: p5.Color = sketch.color(sketch.random(128, 255), sketch.random(176, 255), sketch.random(176, 255));

        let particleCount: number = particles.length;
        let particleIndex: number = 0;

        let coordsIndexes: number[] = [];

        for (let i = 0; i < (sketch.width * sketch.height); i += pixelSteps) {
            coordsIndexes.push(i);
        }

        for (let i = 0; i < coordsIndexes.length; i++) {
            let randomIndex = Math.floor(sketch.random(0, coordsIndexes.length));
            let coordIndex = coordsIndexes[randomIndex];
            coordsIndexes.splice(randomIndex, 1);

            if (pg.pixels[coordIndex * 4] !== 0) {
                let x = coordIndex % sketch.width;
                let y = coordIndex / sketch.width;
                let newParticle = new Particle(sketch);

                if (particleIndex < particleCount) {
                    newParticle = particles[particleIndex];
                    newParticle.isKilled = false;
                    particleIndex += 1;
                } else {
                    let randomLocation = generateRandomLocation(sketch.width / 2, sketch.height / 2, (sketch.width + sketch.height) / 2, sketch);
                    newParticle.location.x = randomLocation.x;
                    newParticle.location.y = randomLocation.y;

                    newParticle.maxSpeed = sketch.random(2, 5);
                    newParticle.maxForce = newParticle.maxSpeed * 0.025;
                    newParticle.particleSize = sketch.random(3, 6);
                    newParticle.colorBlendRate = sketch.random(0.0025, 0.03);

                    particles.push(newParticle);
                }
                newParticle.startColor = sketch.lerpColor(newParticle.startColor, newParticle.targetColor, newParticle.colorWeight);
                newParticle.targetColor = newColor;
                newParticle.colorWeight = 0;

                newParticle.target.x = x;
                newParticle.target.y = y;
            }
        }

        console.log(`particleCount: ${particles.length}`);

        if (particleIndex < particleCount) {
            for (let i = particleIndex; i < particleCount; i++) {
                let p = particles[i];
                p.kill();
            }
        }
    }

    const controlPlay = () => {
        console.log(particles.length);
    }

    p.setup = () => {
        p.frameRate(30);
        p.createCanvas(parentElement.offsetWidth, 300);
        p.background(0, 0, 0);
        p.pixelDensity(1);
        words.push("落日西风吹尽")

        displayWord(words[wordIndex], p);
    }

    p.draw = () => {
        p.background(bgColor);
        for (let i = particles.length - 1; i >= 0; i--) {
            let particle = particles[i];
            particle.run();
            if (particle.isKilled) {
                if (particle.location.x < 0 || particle.location.x > p.width || particle.location.y < 0 || particle.location.y > p.height) {
                    particles.splice(i, 1);
                }
            }
        }
    }

    p.mouseClicked = () => {
        controlPlay();
    }
}

export default mySketch;