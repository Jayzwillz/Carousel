let previousBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
let imageContainer = document.getElementById('display-div');
let picOne = document.createElement('img');
let picTwo = document.createElement('img')
let picThree = document.createElement('img')
let picFour = document.createElement('img')
let picFive = document.createElement('img')
let picSix = document.createElement('img')
let picSeven = document.createElement('img')

picOne.src = 'https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=1600';
picOne.alt = 'First Image';
console.log(picOne)

picTwo.src = 'https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg';
picTwo.alt = 'Second Image';

picThree.src = 'https://i.ytimg.com/vi/0id5rVsErUw/maxresdefault.jpg';
picThree.alt = 'Third Image';

picFour.src = 'https://eu-images.contentstack.com/v3/assets/blt0bbd1b20253587c0/blt4bf1a4090380d5b0/651579e1a95ca40cf4969a68/00-Divo_BUGATTI.jpg?disable=upscale&width=1200&height=630&fit=crop';
picFour.alt = 'Fourth Image';

picFive.src = 'https://news.dupontregistry.com/wp-content/uploads/2018/02/8901McLaren-Senna-Victory-Grey-18.jpg'
picFive.alt = 'Fifth Image';

picSix.src = 'https://di-uploads-pod12.dealerinspire.com/universitydodgeram/uploads/2018/07/2018-Dodge-Challenger-SRT-Demon-University-Dodge.jpg'
picSix.alt = 'Sixth Image';

picSeven.src = 'https://robbreport.com/wp-content/uploads/2016/01/5854-mclaren570scoupe-mantisgreen-0051.jpg'
picSeven.alt = 'Seventh Image';

let picture = [picOne, picTwo, picThree, picFour, picFive, picSix, picSeven]
console.log(picture)

let index = 0;

function updatePicture(){
    imageContainer.innerHTML = '';
    imageContainer.appendChild(picture[index]);
}

previousBtn.addEventListener('click', () => {
    index = (index - 1 + picture.length) % picture.length;
    updatePicture();
})

nextBtn.addEventListener('click', () => {
    index = (index + 1 + picture.length) % picture.length
    updatePicture()
})

imageContainer.appendChild(picOne);







import { computePosition } from "https://cdn.skypack.dev/@floating-ui/dom";

function positionElements() {

    const screenWidth = window.innerWidth
if (screenWidth > 650){
    computePosition(imageContainer, previousBtn, {
        placement: "left",
    }).then(({ x, y }) => {
        Object.assign(previousBtn.style, {
            top: `${y}px`,
            left: `${x}px`,
        });
    });

    computePosition(imageContainer, nextBtn, {
        placement: "right",
    }).then(({ x, y }) => {
        Object.assign(nextBtn.style, {
            top: `${y}px`,
            left: `${x}px`,
        });
    });

}
else{
    computePosition(imageContainer, previousBtn, {
        placement: "bottom-start",
    }).then(({ x, y }) => {
        Object.assign(previousBtn.style, {
            top: `${y}px`,
            left: `${x}px`,
        });
    });

    computePosition(imageContainer, nextBtn, {
        placement: "bottom-end",
    }).then(({ x, y }) => {
        Object.assign(nextBtn.style, {
            top: `${y}px`,
            left: `${x}px`,
        });
    });
}

}

// Initial positioning
positionElements();

// Re-position on window resize
window.addEventListener('resize', positionElements);

// Ensure re-positioning on any significant layout change
new ResizeObserver(positionElements).observe(document.body);
