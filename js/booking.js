var el = document.getElementById('test-5-remove');
var el2 = document.getElementById('test-5-price');
var count = 1;
var price = 6322;
function plus(){
  if (count<8) {
      count++;
      itog=price*count;
      el.textContent = count;
      el2.textContent = "Стоимость: "+itog+"руб";
  }
}
function minus(){
  if (count>1) {
    count--;
    itog=price*count;
    el.textContent = count;
    el2.textContent = "Стоимость: "+itog+"руб";
  }
}
