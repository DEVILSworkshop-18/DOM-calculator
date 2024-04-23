const heading = document.createElement("div");
heading.setAttribute("id", "heading");
heading.innerHTML = `<h1 id = "title">DOM CALCULATOR</h1> <p id = "description">This is my DOM calculator mini project</p>`;

const div1 = document.createElement("div");
div1.setAttribute("id", "container");

const div2 = document.createElement("input");
const div3 = document.createElement("button");
const div4 = document.createElement("button");
const div5 = document.createElement("button");
const div6 = document.createElement("button");
const div7 = document.createElement("button");
const div8 = document.createElement("button");
const div9 = document.createElement("button");
const div10 = document.createElement("button");
const div11 = document.createElement("button");
const div12 = document.createElement("button");
const div13 = document.createElement("button");
const div14 = document.createElement("button");
const div15 = document.createElement("button");
const div16 = document.createElement("button");
const div17 = document.createElement("button");
const div18 = document.createElement("button");
const div19 = document.createElement("button");
const div20 = document.createElement("button");
const div21 = document.createElement("button");

div2.innerText = "00000";
div3.innerText = "c";
div4.innerText = "<-";
div5.innerText = ".";
div6.innerText = "*";
div7.innerText = "7";
div8.innerText = "8";
div9.innerText = "9";
div10.innerText = "/";
div11.innerText = "4";
div12.innerText = "5";
div13.innerText = "6";
div14.innerText = "-";
div15.innerText = "1";
div16.innerText = "2";
div17.innerText = "3";
div18.innerText = "+";
div19.innerText = "0";
div20.innerText = "00";
div21.innerText = "=";

div2.setAttribute("id", "result");
div3.setAttribute("style", "color:red;");
div3.setAttribute("id", "clear");
div21.setAttribute("id", "equal");
div18.setAttribute("id", "add");
div14.setAttribute("id", "subtract");
div3.setAttribute("class", "button");
div4.setAttribute("class", "button");
div5.setAttribute("class", "button");
div6.setAttribute("class", "button");
div7.setAttribute("class", "button");
div8.setAttribute("class", "button");
div9.setAttribute("class", "button");
div10.setAttribute("class", "button");
div11.setAttribute("class", "button");
div12.setAttribute("class", "button");
div13.setAttribute("class", "button");
div14.setAttribute("class", "button");
div15.setAttribute("class", "button");
div16.setAttribute("class", "button");
div17.setAttribute("class", "button");
div18.setAttribute("class", "button");
div19.setAttribute("class", "button");
div20.setAttribute("class", "button");
div21.setAttribute("class", "button");

div15.setAttribute("id", "1");
div16.setAttribute("id", "2");
div17.setAttribute("id", "3");
div11.setAttribute("id", "4");
div12.setAttribute("id", "5");
div13.setAttribute("id", "6");
div7.setAttribute("id", "7");
div8.setAttribute("id", "8");
div9.setAttribute("id", "9");

div3.setAttribute("data-value", "c");
div4.setAttribute("data-value", "<-");
div5.setAttribute("data-value", ".");
div6.setAttribute("data-value", "*");
div7.setAttribute("data-value", "7");
div8.setAttribute("data-value", "8");
div9.setAttribute("data-value", "9");
div10.setAttribute("data-value", "/");
div11.setAttribute("data-value", "4");
div12.setAttribute("data-value", "5");
div13.setAttribute("data-value", "6");
div14.setAttribute("data-value", "-");
div15.setAttribute("data-value", "1");
div16.setAttribute("data-value", "2");
div17.setAttribute("data-value", "3");
div18.setAttribute("data-value", "+");
div19.setAttribute("data-value", "0");
div20.setAttribute("data-value", "00");
div21.setAttribute("data-value", "=");
div2.readOnly = true;

div1.append(
  div2,
  div3,
  div4,
  div5,
  div6,
  div7,
  div8,
  div9,
  div10,
  div11,
  div12,
  div13,
  div14,
  div15,
  div16,
  div17,
  div18,
  div19,
  div20,
  div21
);

document.body.append(heading, div1);

const buttons = document.querySelectorAll(".button");
const display = document.getElementById("result");
const specialChars = ["%", "*", "/", "-", "+", "="];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00"];
let output = "";

const calculate = (btnvalue) => {
  if (btnvalue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnvalue == "c") {
    output = "";
  } else if (btnvalue === "<-") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnvalue)) return;
    output += btnvalue;
  }
  display.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

const calculatekey = (btnvalue) => {
    if (btnvalue == 'Enter' && output !== "") {
      output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "Delete") {
      output = "";
    } else if (btnvalue === "Backspace") {
      output = output.toString().slice(0, -1);
    }
    //  else if(key === specialChars && key === numbers){
    //     alert("only numbers and basics mathamatics operates should be entered")
    //  }
    else {
      if (output === "" && specialChars.includes(btnvalue)) return;
      output += btnvalue;
    }
    display.value = output;
  };
document.addEventListener("keypress", (event) => {
  let key = event.key;
    calculatekey(key)
});
