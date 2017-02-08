/**
 * Created by grace on 2017/2/8 0008.
 */
function toggleFollow(eles, className) {
    var begin = 0;
    var end = 0;
    var timer = null;
    eles[begin].classList.add(className);
    eles.forEach(function(v,i){
        v.addEventListener('click',function(){
            end = i;
            clearInterval(timer);
            timer = setInterval(function(){
                begin < end ? begin++ : begin--;
                eles.forEach(function(v,i){
                    v.classList.remove(className);
                })
                eles[begin].classList.add(className);
                if (begin === end) {
                    clearInterval(timer);
                    begin = end;
                }
            },30);
        });
    })
}