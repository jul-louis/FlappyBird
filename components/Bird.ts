import React, { useEffect } from 'react';
import Matter from 'matter-js';

interface BirdProps {
    world: Matter.World;
    colour: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
}

const Bird: React.FC<BirdProps> = ({ world, colour, position, size }) => {
    useEffect(() => {
        const initialBird = Matter.Bodies.rectangle(
            position.x,
            position.y,
            size.width,
            size.height,
            { label: 'Bird' }
        );

        Matter.World.add(world, initialBird);

        // Clean up function to remove the bird from the world when component unmounts
        return () => {
            Matter.World.remove(world, initialBird);
        };
    }, [world, position, size]);

    return null; // Birds in Matter.js are not typically rendered as React components
};

export default Bird;
