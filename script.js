let text=document.getElementById('text-input');
let form=document.getElementsByTagName('form');
let list=document.getElementById('items');
let filter=document.getElementById('filter');

filter.addEventListener('keyup',search);

list.addEventListener('click',deleteItems);

document.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(text.value==='')
    {
        const errorMsg=document.createElement('h1');
        errorMsg.innerText='Please enter text';
        form[0].appendChild(errorMsg);
        setTimeout(()=>{
            errorMsg.remove();
        },3000);
        return ;
    }
    let li=document.createElement('li');
    li.textContent=text.value;
    li.classList.add('list-group-item');
    let btn=document.createElement('button');
    btn.className='btn btn-danger btn-sm float-right delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    list.appendChild(li);
    form[0].reset();
})

function search(e){
    let text=e.target.value;
    let li=document.getElementsByTagName('li');
    Array.from(li).forEach(item=>{
        let itemName=item.firstChild.textContent;
        if(itemName.indexOf(text)!==-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}

function deleteItems(e){
    let li=e.target.parentNode;
    list.removeChild(li);
}