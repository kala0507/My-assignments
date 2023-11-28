/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result
*/

function calculateGrade (studentscore)
{
    let grade;
    switch (true){
        case (studentscore >=90 && studentscore <=100 ):
        return ("Grade is A")
        break
        case (studentscore >= 80 && studentscore<90):
        return ("Grade is B")
        break
        case (studentscore >=70 && studentscore < 60):
            return(" Grade is C")
        default:
            return("Grade D")
            break

    }
    return grade;
}
const studentscore = 90
const studentGrade = calculateGrade(studentscore)
console.log(" student grade is :${studentGrade}")


    