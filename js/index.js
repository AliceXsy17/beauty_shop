/**
 * Created by web on 2019/7/1.
 */
;(function (nums){
    for(var i = 0; i<nums.length; i++){
        (function(a){
            $(`#media${nums[a]}`).click(function(){
                $(`#media${nums[a]}`).addClass("active2");
                $(`#media${nums[a]}>div`).addClass("active");
                var nums2 = JSON.parse(JSON.stringify(nums))
                nums2.splice(a,1);
                for(var j = 0; j< nums2.length; j++){
                    if($(`#media${nums2[j]}`).hasClass("active2")){
                        $(`#media${nums2[j]}`).removeClass("active2");
                        $(`#media${nums2[j]}>div`).removeClass("active");
                    };
                }
            });
        })(i)

    }
})([1,2,3,4]);
