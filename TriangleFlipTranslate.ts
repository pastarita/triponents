//Fractaling Triangle Engine

//equalateral triangle points
    const sideLength = 1
    const aa = sideLength;
    const md = aa * 0.0625; // 1/16th Margin
    const m = aa + md //translate 17/16ths

    //base triangle
    let ptA: number[] = [0, 0];
    let ptB: number[] = [(aa / 2), ((aa / 2) * Math.sqrt(3))];
    let ptC: number[] = [aa, 0];
    const Triangle = [ptA, ptB, ptC]

    // inverted
    let ptD: number[] = [(aa / 4), ((aa / 2) * (Math.sqrt(3) / 2))];
    let ptE: number[] = [((3 / 4) * aa), ((aa / 2) * (Math.sqrt(3) / 2))];
    let ptF: number[] = [(aa / 2), 0];
    const inscribedInverted = [ptD, ptE, ptF]

    // inverted drawn next larger, down right
    let ptG: number[] = [ptD[0] + m, ptD[1]]; // Deconstructing ptD and adding md to both coordinates
    let ptH: number[] = [ptE[0] + m, ptE[1]];
    let ptI: number[] = [ptF[0] + m, ptF[1]]
    const downRight = [ptG, ptH, ptI]

    console.log("Base Triangle:", Triangle);
    console.log("Inscribed Inverted Triangle:", inscribedInverted);
    console.log("Down Right Triangle:", downRight);
    //Draw the Horizontal Bisector
