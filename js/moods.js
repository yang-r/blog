
//alert('ok')
var side_btn=document.getElementById('sideBtn')
var sideFence=document.getElementById('sideFence')
var content=document.getElementById('content-outer')
side_btn.onclick=function(){
    //通过改变边距实现sideFence滑动后content的距离变化（“自适应”）
    if (sideFence.style.marginLeft!=="0rem") {
        sideFence.style.marginLeft= "0rem";
        content.style.marginLeft="15rem";
    } else {
        sideFence.style.marginLeft= "-15rem";
        content.style.marginLeft="12rem";
    }
    //alert(sideFence.offsetLeft);
}


$(window).on('load',function(){
    //alert('now '+$('#sideFence').height());
    Fence_height=$('#sideFence').height();
    //alert(Fence_height)
    Flip_top=$('#sideFlip').position().top;
    //alert((Fence_height-Flip_top)/16+"rem")
    $('#sideFlip').css("margin-top",(Fence_height-Flip_top)/16-2+"rem")

   
});


