function yes() {
    const pic = document.getElementById('pic');
    const title = document.getElementById('title');
    const buttons_hide = document.getElementById('options');
    const read = document.getElementById('read');
    options2.style.display = 'none'; 
    pic.src = 'bugcat-capoo.gif';  
    title.innerHTML = 'Thx i love youu <3';
    buttons_hide.style.display = 'none'; 
    read.style.display = 'block';  
}

function no() {
    const pic = document.getElementById('pic');
    const buttons_hide = document.getElementById('options');
    const options2 = document.getElementById('options2');  
    title.innerHTML = 'Do you love me???';
    pic.src = 'why.gif';
    buttons_hide.style.display = 'none';  
    options2.style.display = 'block';  
}

function hate(){
    const read2 = document.getElementById('read2')
    pic.src = 'khóc.gif';
    title.innerHTML = 'Ok U hate me ?!';
    options2.style.display = 'none'; 
    read2.style.display ='block';
}

function fuck() {
    alert('I hate you too (￣▽￣)')
}

function letter(){
    const letter = document.getElementById('letter')
    pic.style.display ='none';
    read2.style.display ='none';
    title.style.display ='none';
    read.style.display ='none';
    letter.style.display ='block'
}
