const nftImg = document.getElementById('nft-image');
const overLay = document.getElementById('overlay')
const viewIcon = document.getElementsByClassName('view-btn')[0];

nftImg.addEventListener('mouseover', () => {
    overLay.style.display = 'block';
    viewIcon.style.display = 'block';
})

nftImg.addEventListener('mouseout', () => {
    overLay.style.display = 'none';
     viewIcon.style.display = 'none';
})


