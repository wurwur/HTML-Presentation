let root = document.documentElement;

function grad(){
  const x = parseInt(getComputedStyle(root).getPropertyValue('--deg').slice(0, -3))+1;
  var str = x + "deg"
  console.log(str);
  root.style.setProperty('--deg', str);
  setTimeout(grad, 50);
}
grad();
