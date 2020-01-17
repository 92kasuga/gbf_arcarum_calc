//設定召喚
var summon = document.querySelector("select");
var summonInput = 0;
//現有素材
var formItem = document.querySelector("#item")
//顯示不足的數量
var sephiraLack = document.querySelector("#sephiraLack");
var astraLack = document.querySelector("#astraLack");
var ideanLack = document.querySelector("#ideanLack");
var calLackNum = document.querySelector("button");
var resetLackNum = document.querySelectorAll("button")[1];
var done = document.querySelector("#done");
//點數換算
var point = document.querySelector("#point");
var sephiraNum = document.querySelector("#sephiraNum");
var astraNum = document.querySelector("#astraNum");
//估算素材
var formTicket = document.querySelector("#ticket")
var ticket = document.querySelector("#estmTicket");
var calTicket = document.querySelectorAll("button")[2];
//日期
var dateCheck = document.querySelector("#dateCheck")
var estmtDate = document.querySelector("#estmDate");
var calDate = document.querySelectorAll("button")[3];

//獲取召喚狀態
summon.addEventListener("change", function(){
    getSummon();
})
//所需素材計算
calLackNum.addEventListener("click", function(){
    sephiraLack.textContent = minusToZero(sephiraLack.textContent,formItem.sephiraOwn.value);
    astraLack.textContent = minusToZero(astraLack.textContent,formItem.astraOwn.value);
    ideanLack.textContent = minusToZero(ideanLack.textContent,formItem.ideanOwn.value);
    var doneDisplay = 1 - [(Number(sephiraLack.textContent) + Number(astraLack.textContent) + Number(ideanLack.textContent))/ 530 ];
    done.textContent = toPercent(doneDisplay);
    clear();
})
//所需素材重置
resetLackNum.addEventListener("click",function(){
    getSummon();
    clear();
    done.textContent = 0;
})
//點數換算
point.addEventListener("change", function(){
    var converSephira = Math.floor(point.value / 2000);
    var converAstra = Math.floor(point.value / 1500);
    sephiraNum.textContent = converSephira;
    astraNum.textContent = converAstra;
})
//計算並顯示預估票數
calTicket.addEventListener("click", function(){
    if (getType() === "astra"){
        var estimate = (formTicket.needNum.value - formTicket.estmEvent.value * 20) / formTicket.estmNum.value * 9;
    } else if (getType() === "sephira"){
        var estimate = (formTicket.needNum.value - formTicket.estmStone.value * 8 - formTicket.estmEvent.value * 15) / formTicket.estmNum.value * 9;
    } else {
        var estimate = formTicket.needNum.value / formTicket.estmNum.value * 9;
    }
    ticket.textContent = Math.ceil(estimate);
})
//日期計算
calDate.addEventListener("click", function(){
    var startDate = new Date(2020, dateCheck.month.value-1, dateCheck.date.value);
    var intValue = 0; 
    var endDate = null; 
    intValue = startDate.getTime();
    intValue += (dateCheck.days.value - dateCheck.deDays.value) * (24 * 3600 * 1000); 
    endDate = new Date(intValue); 
    estmDate.textContent = (endDate.getMonth() + 1) + "月" + endDate.getDate() + "日"; 
})
//負數歸零
function minusToZero(a,b){
    var total = a - b;
    if(total < 0){
        return 0;
    } else {
        return total;
    }
}
//轉換百分比
function toPercent(point){
    var str=Number(point*100).toFixed(1);
    return str;
}
//取得預估票數使用的素材類型
function getType(){
    for(var i=0; i<formTicket.needType.length;i++){
        if(formTicket.needType[i].checked){
            var needType = formTicket.needType[i].value;
            return needType;
        }
    }
}
//根據召喚狀換顯示不足的數量
function summonList(){
    switch (summonInput){
        case 0:
        sephiraLack.textContent = 137;
        astraLack.textContent = 314;
        ideanLack.textContent = 79;
            break;
        case 1:
            sephiraLack.textContent = 135;
            astraLack.textContent = 311;
            ideanLack.textContent = 77;
            break;
        case 2:
            sephiraLack.textContent = 130;
            astraLack.textContent = 306;
            ideanLack.textContent = 74;
            break;
        case 3:
            sephiraLack.textContent = 120;
            astraLack.textContent = 296;
            ideanLack.textContent = 69;
            break;
        case 4:
            sephiraLack.textContent = 105;
            astraLack.textContent = 281;
            ideanLack.textContent = 62;
            break;
        case 5:
            sephiraLack.textContent = 75;
            astraLack.textContent = 251;
            ideanLack.textContent = 47;
            break;
        case 6:
            sephiraLack.textContent = 30;
            astraLack.textContent = 206;
            ideanLack.textContent = 22;
            break;
    }
}
//獲取召喚狀態
function getSummon(){
    for(var i = 0; i < summon.length; i++){
        summonInput = Number(summon.value);
        summonList();
    }
}
//重製輸入的素材量
function clear(){
    formItem.sephiraOwn.value = 0;
    formItem.astraOwn.value = 0;
    formItem.ideanOwn.value = 0;
}