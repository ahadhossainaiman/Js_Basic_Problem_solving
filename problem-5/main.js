let animateString = (id) =>{
    let element = document.getElementById(id)
    console.log(element);
    let textNode = element.childNodes[0];
    console.log(textNode)
    let text = textNode.data;
    console.log(text[text.length-1])
    console.log(text.substring(0,text.length-1))

    setInterval(()=>{
        text = text[text.length - 1] + text.substring(0,text.length-1);
        textNode.data = text;
    },1000);
}