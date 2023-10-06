// const coding = ["js", "ruby", "java", "ccp"];
// const values = coding.forEach( (num) => {
//     console.log(num);
//     return num;
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => { 
//     return num>5
// })
// console.log(newNums);

const Book = [
    {title: "book1", genre: "fiction", publish: 1985, edition: 2020},
    {title: "book2", genre: "non-fiction", publish: 1994, edition: 2006},
    {title: "book3", genre: "fiction", publish: 1996, edition: 2010},
    {title: "book4", genre: "non-fiction", publish: 2002, edition: 2012},
    {title: "book5", genre: "history", publish: 2010, edition: 2020},
    {title: "book6", genre: "fiction", publish: 2016, edition: 2022},
    {title: "book7", genre: "history", publish: 2017, edition: 2023},
    
]
let userbook = Book.filter( (bk) => bk.genre === 'history')
 userbook = Book.filter( (bk) => bk.genre === 'history' && bk.edition >= 2010)

console.log(userbook)
 