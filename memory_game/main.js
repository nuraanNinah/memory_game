//  console.log('here') 
let clickedCard= null;
let preventClick= false;
 function onCardClicked(e){
    const target = e.currentTarget;
if(preventClick ||
    target === clickedCard || 
    target.className.includes('done')
    ) {
    return;
}
    target.className = target.className
    .replace('color-hidden', '')
    .trim();
    target.className += 'done';
        // console.log(target.getAttribute('data-color'));
if(!clickedCard){
    // if we havnt clicked a card,keep track of the card,display its color

    clickedCard = target;
}else if (clickedCard){
    // if we already clicked a card,check if the new card matches the old card color
preventClick = true;
    if (
    clickedCard.getAttribute('data-color') === 
    target.getAttribute('data-color')
    ) {
preventClick = true;
    setTimeout(() => {
        clickedCard.className = 
        clickedCard.className.replace('done', '').trim() +
         'color-hidden';
    target.className.replace('done', '').trim() + 
    'color-hidden';
    clickedCard = null;
   preventClick = false;
    }, 500);
}else{
    clickedCard = null;
    preventClick = false;
}
}
 }