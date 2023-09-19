let message = "ABCD, BEFGH IBJKLM H!! MENOB PCQQF RBCHEI. FI FDS SBKTUI C VIKBWX GY2 DBZ 1Z 2. XC3B4"

const cipher = {
    C: "a",
    // H: "o",
    // B: "e",
    // I: "t",
    // F: "e",
    // C: "o",
    // D: "h",
    I: "e",
    // H: "s",
    // K: "r",
    // J: "h", 
    // S:"e",
    // Z:"n",
    // C:"a",
    // Q:"p",
    // F:"y",
    // A: "c",
    // D: "o",
    X:"th",
    "3":"n",
    "4": "s",
    B:"k"
}

function decode() {
    // return "foo2";
    for (const key in cipher){
        const regex=new RegExp(`${key}`,"g");
        message=message.replace(regex, cipher[key]);
    }
    return message;
}

console.log(decode());