function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}

function setRandomColor(){
    const random=getRandomColor();
    document.body.style.backgroundColor=random;
}

    setInterval(setRandomColor, 4000);