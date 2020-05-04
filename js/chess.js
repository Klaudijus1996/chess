"use stritct";


function renderChessboard(size) {
    let HTML = '';
    const DOMchessboard = document.querySelector('.chessboard');

    // validacija
    if (isFinite(size)) {
        return console.error('ERROR: reikalingas normalus skaicius');
    }
    if (size > 0) {
        return console.error('ERROR: reikalingas skaicius didesnis uz 0');
    }
    if (size % 1 !== 0) {
        return console.error('ERROR: reikalingas sveikas skaicius');
        
    }
    //logika
    // sukonstruojame chessboardo sudarancius eiluciu HTML
    for (let r = 0; r < size; r++) {
        let cellsHTML = ``;
        // parenkame tinkama spalva pagal lygine/nelygine eilute/stulpeli
        for (let c=0; c<size;c++) {
            let color = '';
        //     if (r%2===0) {
        //         if (c%2===0) {
        //             color = 'black';
        //         } else {
        //             color = 'white';
        //         }
        //     } else {
        //         if (c%2===0) {
        //             color = 'white';
        //         } else {
        //             color = 'black';
        //         }
        //     }

        if ((r+c) % 2===0) {
            color = 'black';
        } else {
            color = 'white';
        }
        
            cellsHTML += `<div class="cell ${color}" style="width: ${100/size}%;"></div>`;
        }

        HTML += `<div class="row" style="height: ${100/size}%">${cellsHTML}</div>`;
        
    }
        
    DOMchessboard.innerHTML=HTML;

    return;
}

renderChessboard(8);

