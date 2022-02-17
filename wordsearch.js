const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    let temp;
    for (l of horizontalJoin) {
        temp = l.split("").reverse().join("");
        if (l.includes(word) || temp.includes(word)) return true;
    }

    let verticalJoin = [];

    for (let i = 0; i < letters[0].length; i++) {
        verticalJoin.push([""]);
        for (let j = 0; j < letters.length; j++) {
            verticalJoin[i] += letters[j][i];
        }

        temp = verticalJoin[i].split("").reverse().join("");

        if (verticalJoin[i].includes(word) || temp.includes(word)) return true;
    }

    return false;
};

// function wordSearch(letters, word) {

//     for (let j = 0 ; j < letters[0].length ; j++) {

//         let verticalWord = '';
//         let horizontalWord = '';

//         for (let i = 0 ; i < letters.length ; i++) {
//             verticalWord += letters[i][j];
//             horizontalWord += letters[j][i];
//         }

//         if ((verticalWord.includes(word)) ||
//             (verticalWord.split('').reverse().join('').includes(word)))
//         {
//             return true;
//         }
//         if ((horizontalWord.includes(word)) ||
//             (horizontalWord.split('').reverse().join('').includes(word)))
//         {
//             return true;
//         }
//     }

//      return false;

// }

module.exports = wordSearch;