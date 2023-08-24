function jsonUpdater(url,json_func)
{
    ajaxObj=$.ajax({url:url
        ,success:function(){
            if(ajaxObj.responseText != null){
                var jsonObj = JSON.parse(ajaxObj.responseText);
                json_func(jsonObj);
            }
        }
    });
}