

// const coding =["js","ruby","php","java","bootstrap","python"]

// const values = coding.forEach( (item) =>{
//     console.log(item);

//     return item//for each value doesn't return anything 
// })
// console.log(values);



const mynums =[1,2,3,4,5,5,6,7,8,9,10]

//const newnumber = mynums.filter( (num)=>num > 4)

           //or
           
const newnumber = mynums.filter( (num)=>{
    
    return num > 4
}
)
    //console.log(newnumber);


    const books = [
        {
            title: 'Book One',genre: 'sci fi',published:1992,edition:2003
        },
        {
            title: 'Book two',genre: 'maths',published:1984,edition:2006
        },
        {
            title: 'Book three',genre: 'science',published:1990,edition:2010
        },
        {
            title: 'Book four',genre: 'history',published:1982,edition:2005
        },
        {
            title: 'Book five',genre: 'economics',published:1999,edition:2016
        },
        {
            title: 'Book six',genre: 'history',published:1993,edition:2007
        },
        {
            title: 'Book seven',genre: 'sci fi',published:1987,edition:2013
        },
        {
            title: 'Book eight ',genre: 'geography',published:1989,edition:2011
        }
    ]

    let mybooks = books.filter((bk)=> bk.genre==='history')

    mybooks = books.filter( (bk) =>  bk.published<=1990 && bk.genre ==='geography')

   
    console.log(mybooks);


    //map + filter loops to be used in syntax code 

    const mynumuber = [1,2,3,4,5,6,7,8,9,10]

//const newnum = mynumuber.map(  (num)=> num + 10)

const newnum=mynumuber.map( (num) => num*10)
                      .map( (num)=> num +1)
                      .filter(  (num)=> num <=40)

console.log(newnum);