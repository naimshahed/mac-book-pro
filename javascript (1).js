function memoryCost(memory) {
    const unifiedMemory = document.getElementById('memory-price');
    if (memory == true) {
        const smallMemoryPrice = 0;
        unifiedMemory.innerText = smallMemoryPrice;
    }
    else {
        const bigMemoryPrice = 180;
        unifiedMemory.innerText = bigMemoryPrice;
    }
    totalPrice()
}

document.getElementById('small-memory').addEventListener('click', function () {
    memoryCost(true)
})
document.getElementById('big-memory').addEventListener('click', function () {
    memoryCost(false)
})

document.getElementById('small-storage').addEventListener('click', function () {
    const smallStorage = document.getElementById('storage-price');
    const smallStoragePrice = 0;
    smallStorage.innerText = smallStoragePrice;
    totalPrice()
})
document.getElementById('medium-storage').addEventListener('click', function () {
    const mediumStorage = document.getElementById('storage-price');
    const mediumStoragePrice = 100;
    mediumStorage.innerText = mediumStoragePrice;
    totalPrice()
})
document.getElementById('big-storage').addEventListener('click', function () {
    const bigStorage = document.getElementById('storage-price');
    const bigStoragePrice = 180;
    bigStorage.innerText = bigStoragePrice;
    totalPrice()
})


function deliveryOption(cost) {
    const delivery = document.getElementById('delivery-price');
    if (cost == true) {
        const deliveryCost = 0;
        delivery.innerText = deliveryCost;
    }
    else {
        const deliveryCost = 20;
        delivery.innerText = deliveryCost;
    }
    totalPrice()
}
document.getElementById('first-delivery').addEventListener('click', function () {
    deliveryOption(true)
})
document.getElementById('second-delivery').addEventListener('click', function () {
    deliveryOption(false)
})


function getPrice(product) {
    const price = document.getElementById(product + '-price');
    const priceInt = parseInt(price.innerText);
    return priceInt;
}
function totalPrice() {
    const memoryPrice = getPrice('memory');
    const StoragePrice = getPrice('storage');
    const deliveryPrice = getPrice('delivery');

    const bestPrice = document.getElementById('best-price');
    const totalBestPrice = parseInt(bestPrice.innerText);

    const priceTotal = document.getElementById('total-price');
    priceTotal.innerText = totalBestPrice + memoryPrice + StoragePrice + deliveryPrice;
    const price = document.getElementById('total');
    price.innerText = priceTotal.innerText;
}

function verifyCode() {
    const typeCode = document.getElementById('type-code');
    typeCodeText = typeCode.value;
    if (typeCodeText == 'stevekaku') {
        const price = document.getElementById('total-price');
        const promoPrice = document.getElementById('total');
        const priceInput = price.innerText;
        const priceTotal = parseFloat((priceInput * 20) / 100);
        const total = priceInput - priceTotal;
        const totalPromoPrice = parseFloat(total);
        promoPrice.innerText = totalPromoPrice;
        typeCode.value = '';
    }
}