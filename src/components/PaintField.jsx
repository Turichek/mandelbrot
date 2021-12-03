import { Typography } from '@mui/material';
import React from 'react'
import { useRef } from 'react';
import { abs, add, complex, square } from './helpers/toMandelBrot';

export default function PaintField({ values }) {
    const canvas = useRef(null);

    //нарисовать фрактал
    const drawMandelbrot = (context, coef, shiftX, shiftY) => {
        values.setDisabled(true);
        const width = canvas.current.width;
        const scale = width / coef;
        const shifts = [shiftX / coef, shiftY / coef];
        const maxIteration = 2000;

        for (let y = 0; y < width; y++) {
            for (let x = 0; x < width; x++) {
                const a = (x - shifts[0]) / scale;
                const b = (y - shifts[1]) / scale;

                const z = complex(0, 0);
                const c = complex(a, b);

                let color = "rgb(0, 0, 0, 1)";
                for (let i = 0; i < maxIteration; i++) {
                    square(z);
                    add(z, c);

                    if (abs(z) > 2) {
                        if (i < 100) {
                            color = "rgb(" + (225 * (i / 250) + 50) + ", 0, " + (100 * (i / 250) + 70) + ", 1)";
                        }
                        else if (i < 350) {
                            color = "rgb(" + (225 * (i / 500) + 50) + ", 0, " + (100 * (i / 500) + 70) + ", 1)";
                        }
                        else if (i < 700) {
                            color = "rgb(" + (225 * (i / 750) + 50) + ", 0, " + (100 * (i / 750) + 70) + ", 1)";
                        }
                        else {
                            color = "rgb(" + (225 * (i / 1000) + 50) + ", 0, " + (100 * (i / 1000) + 70) + ", 1)";
                        }
                        break;
                    }
                }
                context.fillStyle = color;
                context.fillRect(x, y, 1, 1);
            }
            console.log(y);
        }
        values.setDisabled(false);
    };

    const Click = (e) => {
        drawMandelbrot(e.target.getContext('2d'), values.scale, values.shiftX, values.shiftY);
    }

    const Hide = (e) =>{
        e.target.hidden = true;
        //canvas.current.onClick();
        console.log(canvas,'hide');
    }

    return (
        <>
            <Typography onClick={(e)=> Hide(e)} sx={{ position: 'absolute', top: '40%', left: '45%' }} variant='h1'>Click here</Typography>
            <canvas onClick={(e) => Click(e)} ref={canvas} width='900px' height='900px'>
            </canvas>
        </>
    )
}