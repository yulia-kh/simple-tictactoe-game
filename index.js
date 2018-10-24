let step = 0;
let oSteps = [];
let xSteps = [];

const turn = (step)=> {
    if (step%2===0) {
        return "O";
    }
    return "X";
}

const includesAll = (arr, subArrToSearch) => {
    for(var j=0; j<subArrToSearch.length; j++) {
        if (!arr.includes(subArrToSearch[j])) {
            return false;
        }
    }
    return true;
}

const findWinner=(arr)=> {
    const wincomb = [["0", "1", "2"],["3", "4", "5"], ["6", "7", "8"], ["0", "3", "6"], ["1", "4", "7"], ["2", "5", "8"], ["0", "4", "8"], ["2", "4", "6"]];
    for (var i=0; i<wincomb.length; i++){
        if(includesAll(arr, wincomb[i])){
            return true;
        }

    }
    return false;
}
const handleClick=(element)=>{
    element.innerHTML = turn(++step);
    element.onclick = function(){};
    position = element.attributes[0].value
    count = step;
    if (count%2===0) {
        oSteps.push(position);
        if (findWinner(oSteps)){
            document.getElementById("winner").innerHTML = "Player O has won";
        };
    }
    else {
        xSteps.push(position);
        if (findWinner(xSteps)){
            document.getElementById("winner").innerHTML = "Player X has won";
        };
    }
}

const resetGame =()=> {
    let square = document.getElementsByClassName("square");
    for (var i=0; i<square.length; i++) {
        square[i].innerHTML = "&nbsp;";
        square[i].onclick=function() {handleClick(this)};
        oSteps = [];
        xSteps = [];
        document.getElementById("winner").innerHTML = "";
        step = 0;
    }
}

