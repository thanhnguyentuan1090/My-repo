let operator = prompt("nhap vao may tinh(+,-,*,/):");
let So_A = prompt("nhap vao so dau tien:");
let So_B = prompt("nhap vao so thu hai:");

if (Phep_tinh() == "+") {
    console.log(Number(So_A) + Number(So_B));
}
else if (Phep_tinh() == "-") {
    console.log(Number(So_A) - Number(So_B));
}
else if (Phep_tinh() == "*") {
    console.log(Number(So_A) * Number(So_B));
}
else if (Phep_tinh() == "/") {
    console.log(Number(So_A) / Number(So_B));
}

console.log(Result = Number(So_A) + Number(So_B));
console.log(Result = Number(So_A) - Number(So_B));
console.log(Result = Number(So_A) * Number(So_B));
console.log(Result = Number(So_A) / Number(So_B));

function kiem_tra_so_nguyen_to(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i < n - 1; i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
        console.log(n,'la so nguyen to')
    }
    else {
        document.write(n,'khong phai so nguyen to')
    }
}

