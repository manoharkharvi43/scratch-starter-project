export const getAllJoinedDiv = (divs, targetDiv) => {
  let arr = [];
  let tagetPos = Number(targetDiv.style.top.split("px")[0]);

  for (let i = 0; i < divs.length - 1; i++) {
    if (i !== divs.length) {
      let currentPos = Number(divs[i].style.top.split("px")[0]);
      let nextPos = Number(divs[i + 1].style.top.split("px")[0]);

      if (nextPos - currentPos <= 60) {
        arr.push(divs[i]);
        // tagetPos = Number(divs[i].style.top.split("px")[0]);
        console.log("yes,");
      }
    } else {
      let prePos = Number(divs[i - 1].style.top.split("px")[0]);
      let currentPos = Number(divs[i].style.top.split("px")[0]);

      if (currentPos - prePos <= 60) {
        arr.push(divs[i]);
        // tagetPos = Number(divs[i].style.top.split("px")[0]);
        console.log("yes,");
      }
    }
  }
  return arr;
};
