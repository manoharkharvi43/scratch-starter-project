// export const getAllJoinedDiv = (divs, targetDiv) => {
//   let arr = [];
//   let tagetPos = Number(targetDiv.style.top.split("px")[0]);

//   for (let i = 0; i < divs.length - 1; i++) {
//     if (i !== divs.length) {
//       let currentPos = Number(divs[i].style.top.split("px")[0]);
//       let nextPos = Number(divs[i + 1].style.top.split("px")[0]);

//       if (nextPos - currentPos <= 35) {
//         arr.push(divs[i]);
//         // tagetPos = Number(divs[i].style.top.split("px")[0]);
//         console.log("yes,");
//       }
//     } else {
//       let prePos = Number(divs[i - 1].style.top.split("px")[0]);
//       let currentPos = Number(divs[i].style.top.split("px")[0]);

//       if (currentPos - prePos <= 35) {
//         arr.push(divs[i]);
//         // tagetPos = Number(divs[i].style.top.split("px")[0]);
//         console.log("yes,");
//       }
//     }
//   }
//   return arr;
// };

export const getAllPossibleDivs = (divs, targetDiv, posDiff = 40) => {
  console.log(divs.length, targetDiv, "1111");

  let arrs = getAllTopPositionOfDivs(divs);
  let pos = Number(targetDiv.style.top.split("px")[0]);

  let newArr = [];
  const arr1 = arrs.slice(0, arrs.indexOf(pos)).reverse();
  const arr2 = arrs.slice(arrs.indexOf(pos) + 1, arrs.length);
  let num1 = pos;
  let num2 = pos;
  newArr.push(pos);
  console.log(arr1, arr2, pos, "sss", arrs);
  arr1.map((val, i) => {
    if (num1 - val <= posDiff) {
      num1 = arr1[i];
      newArr.push(val);
    }
  });
  arr2.map((val, i) => {
    if (val - num2 <= posDiff) {
      num2 = arr2[i];
      newArr.push(val);
    }
  });

  return getAllDivsFromTopPosition(divs, newArr);
};

export const getAllTopPositionOfDivs = (divs) => {
  let arr = [];
  for (let i = 0; i < divs.length; i++) {
    let topVal = Number(divs[i].style.top.split("px")[0]);
    console.log(topVal, "ccc");
    arr.push(topVal);
  }
  return arr;
};

export const getAllDivsFromTopPosition = (targetDiv, arr) => {
  const newArr = [];
  arr.map((val, i) => {
    for (let i = 0; i < targetDiv.length; i++) {
      let topVal = Number(targetDiv[i].style.top.split("px")[0]);
      if (topVal === val) newArr.push(targetDiv[i]);
    }
  });
  return newArr;
};
