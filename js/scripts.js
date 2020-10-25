window.onload = function () {
let /*Service fields*/
    firstClick = true,
    i;

const   /* Header menu*/
    burgerBtn = document.getElementById('Toggle'),
    jewelryBtn = document.getElementById('Toggle2'),
    findUsBtn = document.getElementById('Toggle3'),
    header = document.getElementById('header'),
    products = document.getElementById('products'),
    find = document.getElementById('find'),
        /* Product Lists (массивы)*/
    allPositions = document.querySelectorAll('.position'),
    earrings = document.getElementsByClassName('position earring'),
    pendants = document.getElementsByClassName('position pendant'),
    bracelets = document.getElementsByClassName('position bracelet'),
    rings = document.getElementsByClassName('position ring'),
    necklace = document.getElementsByClassName('position necklace'),
    brooches = document.getElementsByClassName('position brooche');

    burgerBtn.addEventListener('click', () => {
        header.classList.toggle('disp')
        products.classList.add('disp')
        find.classList.add('disp')
    });

    if (jewelryBtn != null) {
        jewelryBtn.addEventListener('click', () => products.classList.toggle('disp'));
    };

    findUsBtn.addEventListener('click', () => find.classList.toggle('disp'));

    //Scroll
    let Scroll = () => {
        window.scroll({
            top: document.getElementById('first').offsetHeight,
            behavior: 'smooth'
        })
    };

    //function to Show or Hide element by id
    let demonstration = (props, visibility) => {
        if (visibility === true) {
            for (i = 0; i < props.length; i++) {
            props[i].classList.remove('disp')
            }
        } else if (visibility === false) {
            for (i = 0; i < props.length; i++) {
            props[i].classList.add('disp')
            }
        }
    };

    let mainCheckboxesFunction = (id, props) => {
        if (id.checked) {
            if (firstClick == true){
                demonstration(allPositions, false)
                demonstration(props, true)
                firstClick = false
            } else {
                demonstration(props, true)
            }
        } else { //if id.checked = false, we hide elements by id
            demonstration(props, false)
        }
    };

    let mainButtonFunction = (id, props) => {
        id.checked = !0
        if (firstClick == true){
            demonstration(allPositions, false)
            demonstration(props, true)
            firstClick = false
        } else {
            demonstration(props, true)
        }
        Scroll()
    };

        /*Buttons & Checkboxes*/
    let shop = [],
        button = [];

    try {
    button[0] = document.getElementById('button0');
    button[0].addEventListener('click', () => {
        demonstration(allPositions, true)
        shop[1].checked = 0
        shop[2].checked = 0
        shop[3].checked = 0
        shop[4].checked = 0
        shop[5].checked = 0
        shop[6].checked = 0
        firstClick = true
        Scroll()
    });

    for (let i = 1; i < 7; i++) {
        shop[i] = document.getElementById(`shop${i}`)
        button[i] = document.getElementById(`button${i}`)

        shop[i].addEventListener('change', () => mainCheckboxesFunction(shop[i], eval(shop[i].getAttribute('name'))))
        button[i].addEventListener('click', () => mainButtonFunction(shop[i], eval(shop[i].getAttribute('name'))))
    }}
    catch (e) {}
}
