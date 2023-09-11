// display btn content in input box
function display(content){
    result.value += content
}
function resetresult(){
    result.value=""
}
function expreval(){
    try{
        result.value = eval(result.value)
    }catch{
        result.value ="Invalid Expression!!!"
    }
}
function removelast(){
    result.value = result.value.slice(0,-1)
}