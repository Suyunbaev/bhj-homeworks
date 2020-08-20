let hasToolTip = document.getElementsByClassName('has-tooltip');
let tooltip = document.getElementsByClassName('tooltip');

for (let i = 0; i < hasToolTip.length; i++){

    hasToolTip[i].addEventListener('click', function (e) {

        e.preventDefault();

        if (tooltip.length == 0){
            hasToolTip[i].insertAdjacentHTML("afterEnd" , "<div class='tooltip' style ='display: block'></div>")
            tooltip[0].textContent = hasToolTip[i].title;

            let  hasTooltipPosition = hasToolTip[i].getBoundingClientRect();
            tooltip[0].style.top = hasTooltipPosition.bottom + 'px';
            tooltip[0].style.left = hasTooltipPosition.left + 'px';
            tooltip[0].textContent = hasToolTip[i].title;
            
        }else{
            tooltip[0].remove()
        }
    })
}

  
