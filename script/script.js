const header = document.createElement('header')
const sloganDiv = document.createElement('div')
sloganDiv.classList.add('logo')
const sloganImg = document.createElement('img')
sloganImg.classList.add('logo_img')
sloganImg.src = './img/logo_img.png'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'

const menu__nav = document.createElement('div')
menu__nav.classList.add('menu__nav')
const nav = document.createElement('nav')
const ul = document.createElement('ul')
ul.classList.add('menu')

const arr = ['Главная', 'О приложении', 'Главная', 'О проекте', 'Скачать', 'Контакты',]

for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.classList.add('a_href')
    link.textContent = arr[i]
    li.append(link)
    ul.append(li)
}

const burger_menu = document.createElement('div')
burger_menu.classList.add('burger_menu')
const x = document.createElement("input");
x.setAttribute("type", "checkbox");
x.setAttribute('id', 'toggle')


const b = document.createElement("label");
b.setAttribute("for", "toggle");
b.classList.add('btn')

const spanBox = document.createElement("span");

const ul2 = document.createElement('ul')
ul2.classList.add('menu2')
for (let i = 0; i < arr.length; i++) {
    const li2 = document.createElement('li')
    const link2 = document.createElement('a')
    link2.classList.add('menu__item')
    link2.textContent = arr[i]
    li2.append(link2)
    ul2.append(li2)
}

const section1 = document.createElement('section')
section1.classList.add('img_sect')

for (let i = 0; i < 3; i++) {
    const imgBox = document.createElement('div')
    imgBox.classList.add('img2')
    const paragraf = document.createElement('p')
    paragraf.innerHTML = 'Часто ли Вы опаздываете на<br>работу (учёбу)?'
    section1.append(imgBox)
    imgBox.append(paragraf)
}

const section2 = document.createElement('section')
section2.classList.add('sect2')
const creatH2 = document.createElement('h2')
creatH2.classList.add('sect2_h2')
creatH2.innerHTML = 'О приложении'
const divImg2 = document.createElement('div')
divImg2.classList.add('sect2_img')
const sect2Img = document.createElement('img')
sect2Img.src = './img/play-button.png'


const section3 = document.createElement('section')
section3.classList.add('sect3')
const divTellGroup = document.createElement('div')
divTellGroup.classList.add('tell_group')
const imgTell = document.createElement('img')
imgTell.classList.add('tell_img1')
imgTell.src = './img/question.png'
const imgTell2 = document.createElement('img')
imgTell2.classList.add('tell_img2')
imgTell2.src = './img/question.png'
const imgTell3 = document.createElement('img')
imgTell3.classList.add('tell_img3')
imgTell3.src = './img/question.png'
const imgTell4 = document.createElement('img')
imgTell4.classList.add('tell_img4')
imgTell4.src = './img/question.png'
const imgTell5 = document.createElement('img')
imgTell5.classList.add('tell_img5')
imgTell5.src = './img/question.png'


const section4 = document.createElement('section')
section2.classList.add('sect4')
const creatH2Sect4 = document.createElement('h2')
creatH2Sect4.classList.add('sect4_h2')
creatH2Sect4.innerHTML = 'О проекте'
const paragrafSect4 = document.createElement('p')
paragrafSect4.classList.add('sect4_p')
paragrafSect4.innerHTML = 'Курс для начинающих предпринимателей, направленный на<br>качественный результат за 6 недель.Опытные бизнесмены,<br>инвесторы и профессионалы в своем деле помогают<br>участникам на всех этапах развития их бизнеса:от<Br>разработки идеи до ее реализации.'

const section5 = document.createElement('section')
const creath2 = document.createElement('h2')
creath2.classList.add('sect5_h2')
creath2.innerHTML = 'Скачать'
const sect5Icon = document.createElement('div')
sect5Icon.classList.add('sect5_icon')
const imgIcon = document.createElement('img')
imgIcon.classList.add('icons')
imgIcon.src = './img/android.png'
const imgIcon2 = document.createElement('img')
imgIcon2.classList.add('icons')
imgIcon2.src = './img/icon.png'
const paragrafSect5 = document.createElement('p')
paragrafSect5.classList.add('sect5_p')
paragrafSect5.innerHTML = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6<br> недель.Опытные бизнесмены,инвесторы и профессионалы в своем деле помогают <br>участникам на всех этапах развития их бизнеса:от разработки идеи до ее реализации.'


const footer = document.createElement('footer')
const container1 = document.createElement('div')
container1.classList.add('footer_sect')
const h2Creat = document.createElement('h2')
h2Creat.classList.add('footer_h2')
h2Creat.innerHTML = 'SOME'

const footerIcons = document.createElement('div')
footerIcons.classList.add('footer_icons')
const iconsFooter = document.createElement('img')
iconsFooter.classList.add('icon_footer')
iconsFooter.src = './img/vk.png'
const iconsFooter2 = document.createElement('img')
iconsFooter2.classList.add('icon_footer')
iconsFooter2.src = './img/instagram (1).png'
const iconsFooter3 = document.createElement('img')
iconsFooter3.classList.add('icon_footer')
iconsFooter3.src = './img/facebook.png'

const container2 = document.createElement('div')
container2.classList.add('footer_sect2')

const contact = document.createElement('div')
contact.classList.add('footer_contact')
const contactH2 = document.createElement('h3')
contactH2.classList.add('footer_h3')
contactH2.innerHTML = 'Контакты'
const contactp = document.createElement('p')
contactp.classList.add('footer_p')
contactp.innerHTML = 'Tel.: +996 (312) 915000 +<br>Еxt.<br>+996 (312) 915 028'


const contact2 = document.createElement('div')
contact2.classList.add('footer_contact')
const contactH2f = document.createElement('h3')
contactH2f.classList.add('footer_h3')
contactH2f.innerHTML = 'Адреса'
const contactp2 = document.createElement('p')
contactp2.classList.add('footer_p')
contactp2.innerHTML = 'American University of Central Asia<br>7/6 Aaly Tokombaev Street<br>Bishkek, Kyrgyz Republic 720060'


const contact3 = document.createElement('div')
contact3.classList.add('footer_contact')
const contact3H2 = document.createElement('h3')
contact3H2.classList.add('footer_h3')
contact3H2.innerHTML = 'Помощь'
const contact3p = document.createElement('p')
contact3p.classList.add('footer_p')
contact3p.innerHTML = 'Помощь<br>Помощь<br>Помощь'

// =========== добавление в HTML ==========
const body = document.body
body.append(header, section1, section2, section3, section4, section5, footer)
header.append(sloganDiv, menu__nav)
sloganDiv.append(sloganImg, h1)
menu__nav.append(nav, burger_menu)
nav.append(ul,)
section2.append(creatH2, divImg2,)
burger_menu.append(x, b, ul2)
b.append(spanBox)
divImg2.append(sect2Img)
section3.append(divTellGroup)
divTellGroup.append(imgTell, imgTell2, imgTell3, imgTell4, imgTell5)
section4.append(creatH2Sect4, paragrafSect4)
section5.append(creath2, sect5Icon, paragrafSect5)
sect5Icon.append(imgIcon, imgIcon2)
footer.append(container1, container2)
container1.append(h2Creat, footerIcons)
footerIcons.append(iconsFooter, iconsFooter2, iconsFooter3)
container2.append(contact, contact2, contact3)
contact.append(contactH2, contactp)
contact2.append(contactH2f, contactp2)
contact3.append(contact3H2, contact3p)