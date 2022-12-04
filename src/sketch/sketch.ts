import p5 from "p5";
import { generateRandomLocation } from "./Utils";
import Particle from "./Particles";
import fontFile from "../assets/fonts/lingfeijin.ttf";

const mySketch = (parentElement: HTMLElement) => (p: p5) => {
    let particles: Particle[] = [];
    let pixelSteps: number = 6;
    let words: string[] = [];
    let wordIndex: number = 0;
    let fontName: p5.Font;
    let bgColor: p5.Color = p.color(20, 50);

    const displayWord = (word: string, sketch: p5) => {
        const wordsTemp: string[] = word.split(/，|。|、|\n/);
        const colorNums: number = 5;
        const maxFontSize: number = 180;
        const newColors: p5.Color[] = [];

        let pg: p5.Graphics = sketch.createGraphics(sketch.width, sketch.height);
        pg.background(0);
        pg.fill(255, 255, 0);
        const fontSize: number = Math.floor(sketch.width / 4) > maxFontSize ? maxFontSize : Math.floor(sketch.width / 8);
        pg.textSize(fontSize);
        pg.textAlign("center", "center");
        pg.textFont(fontName);

        pg.text(wordsTemp[0], sketch.width / 2, sketch.height / 4);
        pg.text(wordsTemp[1], sketch.width / 2, 2 * sketch.height / 3);
        pg.loadPixels();

        for (let i = 0; i < colorNums; i++) {
            let newColor: p5.Color = sketch.color(sketch.random(128, 255), sketch.random(176, 255), sketch.random(176, 255));
            newColors.push(newColor);
        }
        let particleCount: number = particles.length;
        let particleIndex: number = 0;

        let coordsIndexes: number[] = [];

        for (let i = 0; i < (sketch.width * sketch.height); i += pixelSteps) {
            coordsIndexes.push(i);
        }

        for (let i = 0; i < coordsIndexes.length; i++) {
            let randomIndex: number = Math.floor(sketch.random(0, coordsIndexes.length));
            let coordIndex: number = coordsIndexes[randomIndex];
            coordsIndexes.splice(randomIndex, 1);

            if (pg.pixels[coordIndex * 4] !== 0) {
                let x: number = coordIndex % sketch.width;
                let y: number = Math.floor(coordIndex / sketch.width);
                let newParticle: Particle = new Particle(sketch);

                if (particleIndex < particleCount) {
                    newParticle = particles[particleIndex];
                    newParticle.isKilled = false;
                    particleIndex += 1;
                } else {
                    let randomLocation: p5.Vector = generateRandomLocation(sketch.width / 2, sketch.height / 2, (sketch.width + sketch.height) / 2, sketch);
                    newParticle.location.x = randomLocation.x;
                    newParticle.location.y = randomLocation.y;
                    newParticle.maxSpeed = sketch.random(2, 5);
                    newParticle.maxForce = sketch.random(0.3, 0.6);
                    newParticle.particleSize = sketch.random(3, 6);
                    newParticle.colorBlendRate = sketch.random(0.0025, 0.03);
                    particles.push(newParticle);
                }

                newParticle.startColor = sketch.lerpColor(newParticle.startColor, newParticle.targetColor, newParticle.colorWeight);
                newParticle.targetColor = newColors[Math.floor(Math.random() * colorNums)];
                newParticle.colorWeight = 0;
                newParticle.target.x = x;
                newParticle.target.y = y;
            }
        }

        if (particleIndex < particleCount) {
            for (let i = particleIndex; i < particleCount; i++) {
                let p = particles[i];
                p.kill();
            }
        }
    }

    const controlPlay = () => {
        console.log(particles.length);
        // for (let i = 0; i < words.length - 1; i++) {
        //     setTimeout(function () {
        //         displayWord(words[i + 1], p);
        //     }, i * 9000);
        // }
    }

    p.preload = () => {
        fontName = p.loadFont(fontFile);
    }

    p.setup = () => {
        p.frameRate(30);
        p.createCanvas(parentElement.offsetWidth, 600);
        p.background(0, 0, 0);
        p.pixelDensity(1);
        words.push("年少光阴易度\n尊前愁绪难消");
        words.push("落日西风吹尽\n残山新雪初飘");

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