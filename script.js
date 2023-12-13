let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
        var text = this.value;
        let char = text.length;
        document.getElementById("char").innerHTML = char;
        var count=0;
        for(let i=0;i<text.length;++i){
            if(text[i]==" "){
                count++;
            }
        }
        document.getElementById("word").innerHTML = char-count;
});