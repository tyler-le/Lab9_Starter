let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
    catch (err) {
        throw new SyntaxError('The input must be numbers')
    }

});

window.onerror = function () {
    console.log('window.onerror called')
}

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

function doLog() {
    console.log('logging');
}

function doError() {
    console.error('error')
}

function doCount() {
    console.count()
}

function doWarn() {
    console.warn('warning')
}

function doAssert() {
    console.assert(1 == "No", "1 is equal to No")
}

function doClear() {
    console.clear()
}

function doDir() {
    console.dir(errorBtns[6])
}

function doDirxml() {
    console.dirxml(errorBtns[7])
}

function doGroupStart() {
    console.group()
}

function doGroupEnd() {
    console.groupEnd()
}

function doTable() {
    console.table(["first", "second", "third"]);
}

function doStartTimer() {
    console.time()
}

function doEndTimer() {
    console.timeEnd()
}

function doTrace() {
    console.trace()
}

function doGlobalError() {
    throw whatIsThis.click()
}

var fnMap = {
    "Console Log": doLog,
    "Console Error": doError,
    "Console Count": doCount,
    "Console Warn": doWarn,
    "Console Assert": doAssert,
    "Console Clear": doClear,
    "Console Dir": doDir,
    "Console dirxml": doDirxml,
    "Console Group Start": doGroupStart,
    "Console Group End": doGroupEnd,
    "Console Table": doTable,
    "Start Timer": doStartTimer,
    "End Timer": doEndTimer,
    "Console Trace": doTrace,
    "Trigger a Global Error": doGlobalError
};

for (let i = 0; i < errorBtns.length; i++) {
    errorBtns[i].addEventListener("click", () => {
        console.log(errorBtns[i].innerText);
        fnMap[errorBtns[i].innerText]()
    });
}