
function getStoredData() {
    let data = localStorage.getItem('cart');
    if(data) {
        return (JSON.parse(data));
    }
    return [];
}

function setDataInLocalStorage(data) {
    let storedData = getStoredData();
    let newData = [...storedData, data];
    localStorage.setItem('cart', JSON.stringify(newData));
}

export {getStoredData, setDataInLocalStorage};