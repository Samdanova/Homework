//функция для того, чтобы второй список соответствовал и изменялся исходы из выбора значения из первого
document.getElementById('model').onchange = function() {
    const value = document.getElementById('model').value
//создаем второй выпадающий список в звисимости от марки машины
    const audi = [[200,'X5'],[100,'RS6'],[500,'Q3 sportback']]
    const toyota= [[300,'4Runner'],[400,'Alphard'],[200,'Corolla']]
    const lada = [[100,'2111'],[50,'Niva'],[600,'Vesta']]
    const lexus = [[200,'CT'],[100,'RC'],[1000,'LX']]

    
    let values=[]
    let select = document.getElementById('type')
    select.innerHTML=''   
    if(value==0){
      select.disabled=true
      return
    }
    else if(value==1){
      values = [...audi]
    }
    else if(value==2){
      values = [...toyota]
    }
    else if(value==3){
        values = [...lada]
      }
      else if(value==4){
        values = [...lexus]
      }
     
    select.disabled=false
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val[0];
        option.text = val[1];
        select.appendChild(option); //добавляем массив в качестве опций выбора
    }

}

//суммирование по нажатию на рассчитать
document.getElementById('button').onclick = () =>{
  const value = document.getElementById('model').value
  if(value==0){
    document.getElementById('container').innerHTML=''
    return //если не выбрана модель машины - возвращает пустое значение
  }
  else{
    const ModelPrice = document.getElementById('type').value;
    const YearsPrice = document.getElementById('years').value;
    const fuelPrice = document.querySelectorAll('input[name=fuel]:checked')[0].value
    
    const cut = document.getElementById('buy')
    const newCar = cut.checked? cut.value: 0; //проверка нажата ли опция
    
    document.getElementById('container').innerText= `Итого: ${Number(ModelPrice) + Number(YearsPrice)+Number(fuelPrice) + Number(newCar)}   тыс.руб.`
  }
  
}
