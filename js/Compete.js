var tekan = document.getElementsByClassName('contests-container');
var textInput = document.querySelector('.search-text')
var box = document.querySelector('.search-box')
var clickArea = document.querySelector('.search-padding')
var icon = document.querySelectorAll('.message-notif-profile')

function tampilkan(tampil) {
    if (tampil.style.maxHeight) {
        tampil.style.maxHeight = null;
    } else {
        tampil.style.maxHeight = tampil.scrollHeight + 'px';
    }
}

function showBox(id){
    var div = document.getElementById(id);
    document.querySelectorAll('.message-notif-profile.show').forEach(function(elem){
        if (elem !== div) elem.classList.remove('show');
    });
    div.classList.toggle('show');
}

for (let i of tekan) {
    i.addEventListener('click', function() {
        if (!i.classList.contains('muncul')) {
            for (let i of tekan) {
                if (i.classList.contains('muncul')) {
                    i.classList.remove('muncul');
                    tampilkan(i.nextElementSibling);
                }
            }
        }
        i.classList.toggle('muncul');
        tampilkan(i.nextElementSibling);
    });
}

clickArea.addEventListener('click', function(){
    textInput.focus();
    box.classList.toggle('melebar');
});

textInput.addEventListener('blur', function(){
    box.classList.remove('melebar');
})

window.addEventListener('click', function(e){
    if (!e.target.matches('.dropdown') && !e.target.matches('.dropdown-menu') && !e.target.matches('.message-header') && !e.target.matches('.messaage-inbox') && !e.target.matches('.message-text') && !e.target.matches('.message-notif-footer') && !e.target.matches('.show-all') && !e.target.matches('notif-inbox') && !e.target.matches('.user-profile') && !e.target.matches('.ui-icon-user') && !e.target.matches('.username') && !e.target.matches('.ui-icon-chevron-down')){
        for(var i = 0; i < icon.length; i++){
            if(icon[i].classList.contains('show')){
                icon[i].classList.remove('show');
            }
        }
    }
})