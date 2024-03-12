const students = [
    {
        name: "John",
        firstNote: 4,
        secondNote: 5
    },
    {
        name: "Carlos",
        firstNote: 5,
        secondNote: 8
    },
    {
        name: "Pedro",
        firstNote: 6,
        secondNote: 7
    }, 
    {
        name: "Maria",
        firstNote: 10,
        secondNote: 8
    },

]

function calculateAverage(firstNote, secondNote){
    let average = ((firstNote + secondNote) / 2).toFixed(1)
    return average
}

for(let student of students){
    let average = calculateAverage(student.firstNote, student.secondNote)

    if(average >= 7){
        alert(`A média do aluno(a) ${student.name} foi: ${average}. Parabéns, ${student.name}! Você foi aprovado (a)!`)
    }else{
        alert(`A média do aluno(a) ${student.name} foi: ${average}. Não foi dessa vez, ${student.name}! Tente novamente.`)
    }
}