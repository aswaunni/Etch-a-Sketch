const _grid = document.querySelector('#grid');
let _sketchColor = 'grey';

createGrid = (value) => {
    for (let i = 0; i < value*value; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = _sketchColor;
        });
        _grid.appendChild(div);
    }
};

function removeAllChilds() {
    while (_grid.firstChild)
        _grid.removeChild(_grid.firstChild);
}

const _slider = document.querySelector('#slider');
const _value = document.querySelector('#value');
_slider.addEventListener('input', (event) => {
    let newVal = event.target.value;
    _value.innerHTML = newVal;
    removeAllChilds();
    createGrid(newVal);

    grid.setAttribute('style', `grid-template-columns: repeat(${newVal}, 1fr); 
        grid-template-rows: repeat(${newVal}, 1fr);`);
});

const _sketch = document.querySelector('#sketch');
_sketch.addEventListener('click', () => {
    _sketchColor = 'grey';
});

const _erase = document.querySelector('#erase');
_erase.addEventListener('click', () => {
    _sketchColor = 'rgb(218, 210, 210)';
});

const _reset = document.querySelector('#reset');
_reset.addEventListener('click', () => {
    let val = _slider.value;
    let cell = _grid.children;
    for(let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = _sketchColor;
    }
});

createGrid(16);