function writeCards(names) {
    let copyNames = [];
    for (let i=0; i<names.length;i++) {
        copyNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return copyNames;

}

function countDown(n) {
    let total = 0;
    for (let i=n; i!=-1; i--) {
        console.log(i);
        total+=i;
    }
}