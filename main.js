//display btn content in input box
function display(content)
{
result.value += content
}
function resetResult(){
    result.value=""
}
function exprEval(){
    console.log("inside function");
    try{
        result.value=eval
       ( result.value)
       console.log("try block");
    } catch{
        console.log("Invalid expression!!!");
        result.value="Invalid expression!!!"
    }
}
function removeLast(
)
{
    result.value=result.value.slice(0,-1)
}