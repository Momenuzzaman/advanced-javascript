const students = [

    {id : 21, name : 'Omor'},
    {id : 11, name : 'Rayan'},
    {id : 31, name : 'Rakib'},
    {id : 41, name : 'Shakib'},

];

const names = students.map(s => s.name);
const ids =  students.map(s => s.id);
const bigger = students.filter(s =>s.id>21);
console.log(bigger);