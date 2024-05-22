const Books = [
    {
        title : 'Physics',
        Price : 350,
        published: 1990,
        Eddition: 24,
        genre : 'Science'
    },
    {
        title : 'Math',
        Price : 450,
        published: 1980,
        Eddition: 28,
        genre : 'Science'
    },
    {
        title : 'Computer Science',
        Price : 800,
        published: 1890,
        Eddition: 100,
        genre : 'CSE'
    },
    {
        title : 'Chemistry',
        Price : 650,
        published: 1790,
        Eddition: 240,
        genre : 'Science'
    },
    {
        title : 'Human History',
        Price : 650,
        published: 1790,
        Eddition: 240,
        genre : 'History'
    },
    {
        title : 'Atomics Habits',
        Price : 250,
        published: 2018,
        Eddition: 7,
        genre : 'Selflearn'
    },

]

let userBooks = Books.filter((ub)=> ub.genre ==='Selflearn');
userBooks = Books.filter( (ub)=>{ 
    return ub.published >=1990 && ub.genre==='Science'
})
console.log(userBooks);