// self invoke function
// anonymous function

$(function(){
    // ajax
    $.ajax({
        url : 'http://localhost:7001/sample',
        type : 'GET',
        success : function(res){
            let check = res.status == 200; // bool true
            if(check){
                let container_adapter = $('#my_list');
                let i = 0;
                for(i; i < res.data.length; i++){
                    console.log(res.data[i].name);
                    let listview = `<ul class="list-group">
                                        <li class="list-group-item">`+res.data[i].name+` | `+res.data[i].age+`</li>
                                    </ul>`;
                    container_adapter.append(listview);
                }
            }else{
                alert('error data not found | 4**')
            }
        }
    });

    // axios / promise / async await
});

function multiplyFunc(x){
    let result = x * 1000;
    return result;
}

/**
 * 
 * @param {*} url 
 * @param {*} type 
 */

function requester(obj_param){
    
}


/**
 * 
 * @param {*} url 
 * @param {*} type 
 * @param {}
 */
function submitter(obj_param){

}