$(document).ready(function(){
    console.log("jq脚本已加载");
    $("#test").click(function(){
        classname=$("select").val();
        console.log(classname);
        console.log((classname != undefined)&&!($(this).hasClass(classname)));
        // 检查需要添加的类名不是undefined且动画类执行完成后会自动移除类，在还有类名时，就是之前的动画还未执行完 此时点击不响应
        if ((classname != undefined)&&!($(this).hasClass(classname)))
        {$(this).addClass(classname);
            setTimeout(() => {
                $(this).removeClass() 
            }, 2000);
        }
    })

});