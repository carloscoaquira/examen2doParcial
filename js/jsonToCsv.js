const jsonForm = document.querySelector('#jsonForm');
const csvForm = document.querySelector('#csvform');
const btnConvert = document.querySelector('#convertJson');

btnConvert.addEventListener('click', e => {
    convertJsonToCsv();
});

function convertJsonToCsv(){
    let jsonItem;
    let keys = [];
    let values = [];
    try{
        jsonItem = JSON.parse(jsonForm.value);
        document.querySelector('.span-errorJson').innerHTML = ' ';
    }catch (error){
        document.querySelector('.span-errorJson').innerHTML = 'No es un Json';
    }

    if(Array.isArray(jsonItem)){
        jsonItem.forEach(item => {
            const nKeys = Object.keys(item);
            if(keys.length === 0){
                keys = [...nKeys];
            }
            const row = keys.map(k => {
                return item[k]
            });
            values.push([...row]);
        });
        values.unshift(keys);
        const text = values.map(v => v.join(',')).join('\n');
        csvForm.value = text;
    }else{
        document.querySelector('.span-errorJson').innerHTML = 'No es un arreglo Json';
    }
}