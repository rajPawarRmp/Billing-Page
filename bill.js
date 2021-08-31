var s = document.getElementById("sel");
var matter = []; //initilising empty object
var dis = document.getElementById("display");
var fin = document.getElementById("final");
var sum = 0;
// asigning total sum =0 for remmoving previous total 
// pushing items and prises into array
matter.push({ val: 13, item: "Select Item ..", rate: 0 });
matter.push({ val: 0, item: "Idli sambhar", rate: 30 });
matter.push({ val: 1, item: "Dosa", rate: 50 });
matter.push({ val: 2, item: "Paper Dosa", rate: 70 });
matter.push({ val: 3, item: "Butter Dosa", rate: 80 });
matter.push({ val: 4, item: "Cheese Dosa", rate: 80 });
matter.push({ val: 5, item: "Uthappam", rate: 50 });
matter.push({ val: 6, item: " Cheese Uthappam", rate: 80 });
matter.push({ val: 7, item: "Medu Vada", rate: 40 });
matter.push({ val: 8, item: "Aloo Vada", rate: 40 });
matter.push({ val: 9, item: "Butter Uthappa", rate: 80 });
matter.push({ val: 10, item: "Dahi Vada", rate: 40 });
matter.push({ val: 11, item: "Pizza Dosa", rate: 100 });
matter.push({ val: 12, item: "Basundi", rate: 40 });
for (let i = 0; i < 14; i++) {
    // creating options in select tag
    var opt = document.createElement("option"); // inserting option
    opt.text = matter[i].rate.toString(); //rates in text // transfering array into option
    opt.value = matter[i].val.toString(); //val in value
    opt.label = matter[i].item.toString(); //dishes names in label
    s.add(opt);
}
function bill() {
    var inp = document.getElementById("inp"); //this is quantity of items
    var inip = parseInt(inp.value);
    var choice = document.getElementById("sel");
    var sitem = choice.options[choice.selectedIndex].text;
    var isitem = parseInt(sitem);
    if (isNaN(inip)) {
        alert("Enter Quantity Of Items !!");
        // alert if you dont enter number of quantity
    }
    else if (isitem == 0) {
        alert("Select Any Dish !!");
        // alert if you dont select item
    }
    else {
        // console.log(isitem*inip)
        var item = choice.options[choice.selectedIndex].label;
        dis.innerHTML += `Dish : ${item} &nbsp; &nbsp;  &nbsp; &nbsp; Bill = ${isitem} X ${inip} = ${inip * isitem} <br> <br>`;
        sum = sum + (isitem * inip); // each dish discreption
        fin.innerHTML = `Total Bill Is ₹ ${sum}`; //total bill display
    }
}
function cle() {
    console.log("in clear");
    dis.innerHTML = "";
    fin.innerHTML = "";
    sum = 0;
}
//# sourceMappingURL=bill.js.map