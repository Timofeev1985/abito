const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');
const cardArray = [
    {
        id:0,
        title:'Первый товар',
        price:'170 ₽',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'./img/card-img.png',
    },
    {
        id:1,
        title:'Второй товар',
        price:'171 ₽',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'./img/card-img.png',
    },
    {
        id:2,
        title:'Третий товар',
        price:'172 ₽',
        address:'Москва, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'./img/card-img.png',
    },
    {
        id:3,
        title:'Четвертый товар',
        price:'173 ₽',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'./img/card-img.png',
    },
    {
        id:4,
        title:'Пятый товар',
        price:'174 ₽',
        address:'Москва, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'./img/card-img.png',
    },
    {
        id:6,
        title:'Шестой товар',
        price:'175 ₽',
        address:'Казань, р-н Вахитовский',
        date:'10 июля 11:39',
        img:'./img/card-img.png',
    }
]
const render = (cardList)=>{
    cardWrapper.innerHTML = '';
    cardList.forEach((item,idx) => {
        cardWrapper.insertAdjacentHTML('beforeend',`
                <a href="/product.html" class="content-main__list-item">
                    <div class="content-main__list-item--img">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <h5 class="content-main__list-item--title"> ${item.title}</h5>
                    <stron class="content-main__list-item--price">${item.price}</stron>
                    <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.address}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
                    </div>   
                </a>
            `);
        })
    }
    const filterArrray = (array, value)=>{

        return array.filter((item)=>{
            return item.title.includes(value) || item.price.includes(value) || item.address.includes(value)
        });
    };
    cardWrapper.style.justifyContent = 'flex-start';
    cardWrapper.style.gap = '30px';
    render(cardArray)
    searchBtn.addEventListener('click', () =>{
        render(filterArrray(cardArray,searchInput.value));
    })