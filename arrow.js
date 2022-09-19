const imgLists = document.querySelector('.gnb');
const imgList = document.querySelectorAll('.gnb li');
const arrow = document.querySelector('.arrow');
const txtTitle = document.querySelector('.title');
const txtLists = document.querySelector('.txt');
const txtList = document.querySelectorAll('.txt li');


console.log(txtList[0].offsetHeight);
txtLists.style.height = txtList[0].offsetHeight + 'px'

imgLists.addEventListener('click', (e) => { 
    const selected = e.target;
    console.log(selected); 

    imgList.forEach((li) => { 
        li.classList.remove('over')
    })
    selected.classList.add('over')

    UpdateContents(selected.dataset.index);
})

function UpdateContents(ind) { 

    const posArrow = ind * 200;
    const posTitle = -80 * ind;
    arrow.style.left = posArrow + 'px'
    txtTitle.style.top = posTitle + 'px'

    txtList.forEach((li) => { 
        li.style.display = 'none'
    })
    txtList[ind].style.display = 'block'

    txtLists.style.height = txtList[ind].offsetHeight + 'px';

}
