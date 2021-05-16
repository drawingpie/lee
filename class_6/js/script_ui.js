var loadData;//로드된 json데이터닫는 변수
var nameArr = []; //선택된자리를 저장하는 배열
var totalPrice = 0;//선택된 자리의 가격의 총합을 저장해주는 변수

$(function () {
    //인트로 관련함수 호출
    introFn();


    //자리셋팅 클릭이벤트
    $(".btn_setting").click(function () {
        reserveFn();
    });

})

//인트로 함수
function introFn() {
    $(".section.reservation").hide();
    $(".section.complete").hide();
}

//자리선택 함수
function reserveFn() {
    $(".section.reservation").show();
    $(".box_intro").hide();

    //json데이터 로드하는 ajax
    $.ajax({
        url: "js/data.json",
        dataType: "json",
        success: function (result) {
            //ajax결과값을 변수에 담는다.
            loadData = result.seatInfo;

            //자리셋팅
            for (var i = 0; i < loadData.length; i++) {
                var n = loadData[i].name;
                var p = loadData[i].price;
                var r = loadData[i].reserve;
                $(".section.reservation > ol").append('<li class="unit"><button data-price="' + p + '" ' + r + '>' + n + '</button></li>');
            }

            //동적으로 셋팅된 버튼에 클릭 이벤트
            $(".section.reservation > ol .unit > button").click(function () {
                //select클래스 토글기능 (있으면 뺴주고 없으면 넣어주는 기능)
                $(this).toggleClass("select");

                //셋팅된 11개의 버튼을 탐색(each문을 통해)

                $(".section.reservation > ol .unit > button").each(function (index) {
                    //해당순번의 버튼의 select클래스가 있을 경우  true 발생(hasClass를통해) 
                    if ($(this).hasClass("select")) {
                        //select를 갖고있는 버튼순서에서 작동
                        console.log(index);
                        loadData[index]


                    }


                });

            });
        }
    });
}

