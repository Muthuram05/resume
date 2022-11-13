const contact = document.querySelector('.contact');
const FotContact = document.querySelector('.FotContact');
const body = document.querySelector('body');
const minimize = document.querySelector('.screen-header-right');

contact.addEventListener('click',()=>{
    if(body.className === 'body')
        body.classList.add('open');
    else
        body.classList.remove('open');
})
FotContact.addEventListener('click',()=>{
    if(body.className === 'body')
        body.classList.add('open');
    else
        body.classList.remove('open');
})
minimize.addEventListener('click',()=>{
        body.classList.remove('open');
})