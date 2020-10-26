window.onload = function () {
    const /* Header menu*/
        burgerBtn = document.getElementById('Toggle'),
        findUsBtn = document.getElementById('Toggle3'),
        header = document.getElementById('header'),
        find = document.getElementById('find'),
        checkBoxes = document.getElementById('check'),
        DATA = [{
                type: 'ring',
                imgLarge: 'img/jewelry/1.jpg',
                imgSmall: 'img/jewelry/small/1.jpg',
                description: 'Кольцо. Золото, бриллианты, демантоиды, розовый опал.'
            },
            {
                type: 'earring',
                imgLarge: 'img/jewelry/2.jpg',
                imgSmall: 'img/jewelry/small/2.jpg',
                description: 'Серьги. Золото, бриллианты, демантоиды, австралийские опалы, горячая эмаль, гравировка.'
                },
            {
                type: 'earring',
                imgLarge: 'img/jewelry/3.jpg',
                imgSmall: 'img/jewelry/small/3.jpg',
                description: 'Серьги. Золото, серебро, бриллианты, резной кахолонг, горячая эмаль.'
                },
            {
                type: 'earring',
                imgLarge: 'img/jewelry/4.jpg',
                imgSmall: 'img/jewelry/small/4.jpg',
                description: 'Серьги. Золото, серебро, бриллианты, барочный жемчуг, горячая эмаль.'
                },
            {
                type: 'necklace',
                imgLarge: 'img/jewelry/5.jpg',
                imgSmall: 'img/jewelry/small/5.jpg',
                description: 'Ожерелье. Золото, серебро, цветные сапфиры, бриллианты, горячая эмаль, морской жемчуг.'
                },
            {
                type: 'earring',
                imgLarge: 'img/jewelry/6.jpg',
                imgSmall: 'img/jewelry/small/6.jpg',
                description: 'Серьги. Золото, серебро, цветные сапфиры, морской жемчуг, горячая эмаль.'
                },
            {
                type: 'earring',
                imgLarge: 'img/jewelry/7.jpg',
                imgSmall: 'img/jewelry/small/7.jpg',
                description: 'Серьги. Золото, цветные сапфиры, бриллианты фантазийной формы, жемчуг кешью, щетки аметистовые.'
                },
            {
                type: 'bracelet',
                imgLarge: 'img/jewelry/8.jpg',
                imgSmall: 'img/jewelry/small/8.jpg',
                description: 'Браслет. бриллианты, барочный жемчуг, горячая эмаль.'
                },
            {
                type: 'earring',
                imgLarge: 'img/jewelry/9.jpg',
                imgSmall: 'img/jewelry/small/9.jpg',
                description: 'Серьги. Золото, серебро, бриллианты, резной кахолонг, горячая эмаль.'
                },
            {
                type: 'brooche',
                imgLarge: 'img/jewelry/10.jpg',
                imgSmall: 'img/jewelry/small/10.jpg',
                description: 'Брошь-подвес. Золото, бриллианты фантазийной формы, резной аметист.'
                },
            {
                type: 'earring',
                imgLarge: 'img/jewelry/12.jpg',
                imgSmall: 'img/jewelry/small/12.jpg',
                description: 'Серьги. Золото, бриллианты огранки «Роза», резной аметист.'
                },
            {
                type: 'brooche',
                imgLarge: 'img/jewelry/13.jpg',
                imgSmall: 'img/jewelry/small/13.jpg',
                description: 'Брошь. Золото, сапфир, опал, горячая эмаль, гравировка.'
                },
            {
                type: 'pendant',
                imgLarge: 'img/jewelry/14.jpg',
                imgSmall: 'img/jewelry/small/14.jpg',
                description: 'Подвес. Золото, бриллианты, демантоиды, витражная эмаль, резная яшма'
                },
            {
                type: 'pendant',
                imgLarge: 'img/jewelry/15.jpg',
                imgSmall: 'img/jewelry/small/15.jpg',
                description: 'Подвес. Золото, бриллианты, демантоиды, горячая эмаль, сапфир'
                },
            {
                type: 'ring',
                imgLarge: 'img/jewelry/16.jpg',
                imgSmall: 'img/jewelry/small/16.jpg',
                description: 'Кольцо. Золото, бриллианты, сапфиры, барочный жемчуг'
                },
            {
                type: 'brooche',
                imgLarge: 'img/jewelry/17.jpg',
                imgSmall: 'img/jewelry/small/17.jpg',
                description: 'Брошь. Золото, бриллианты, резной нефрит, кахолонг'
                }
               ];
    let activeFilters = []; // array of curent checked checkBoxes

    burgerBtn.addEventListener('click', () => {
        header.classList.toggle('disp')
        find.classList.add('disp')
    });

    findUsBtn.addEventListener('click', () => find.classList.toggle('disp'));

    //Scroll
    let Scroll = () => {
        window.scroll({
            top: document.getElementById('first').offsetHeight,
            behavior: 'smooth'
        })
    };

    let renderItems = (items) => {
        items.forEach((item) => {
            document.getElementById('positions').innerHTML += `<div class="position ${item.type}"><a href="${item.imgLarge}" data-lightbox="${item.type}" data-title="${item.description}"><img class="photo" src="${item.imgSmall}" alt="" style="width: 300px; height: auto;"></a></div>`;
        })
    };

    let filterItems = () => {
        let someFiltersData = [];

        DATA.forEach((item) => {
            activeFilters.forEach((elem) => {
                if (elem === item.type) {
                    someFiltersData.push(item)
                }
            })
        })
        document.getElementById('positions').innerHTML = ''
        renderItems(someFiltersData);
    };

    if (checkBoxes != null) {
        checkBoxes.addEventListener('change', (event) => {
            if (event.target.nodeName === 'INPUT') {
                if (activeFilters.indexOf(event.target.name) >= 0) {
                    activeFilters.splice(activeFilters.indexOf(event.target.name), 1);
                } else {
                    activeFilters.push(event.target.name);
                }
                filterItems();
            }
        });

        renderItems(DATA);
    }
}
