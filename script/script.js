function count() {
    let countInit = document.getElementById('countInit').value;
    let countEnd = document.getElementById('countEnd').value;
    let step = document.getElementById('step').value;
    let divRes = document.getElementById('res');
    let resElement = document.createElement('p');

    countInit = Number(countInit);
    countEnd = Number(countEnd);
    step = Number(step);

    resElement.setAttribute('id', 'resCount');

    if (countInit < 0) {
        divRes.innerHTML = 'Impossível contar!';
        return;
    } else if (step <= 0) {
        alert('[ERRO] Passo inválido, considerando passo igual ao valor inicial inserido [ERRO]');
        if(countInit < countEnd){
            step = countInit;
        } else {
            step = countEnd;
        }
    }
    divRes.innerHTML = 'Contando:';
    if (countInit < countEnd) {
        for (countInit; countInit <= countEnd; countInit += step) {
            resElement.innerHTML += ` ${countInit} ${countInit + step <= countEnd ? `&#128073;` : `\u{1F3C1}`}`
            divRes.appendChild(resElement);
        }
    } else {
        for (countInit; countInit >= countEnd; countInit -= step) {
            resElement.innerHTML += ` ${countInit} ${countEnd + step <= countInit ? `&#128073` : `\u{1F3C1}`}`
            divRes.appendChild(resElement);
        }
    }
}