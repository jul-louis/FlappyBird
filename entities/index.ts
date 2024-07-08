import Matter from "matter-js"

type RestartFunction = () => void;

const restart: RestartFunction = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world
    engine.gravity.y = 0.4

    return {
        physics: { engine, world }
    }
}

export default restart;