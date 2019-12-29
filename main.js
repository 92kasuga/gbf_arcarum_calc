//設定召喚
var summon = document.querySelector("select");
var getSummon = 0;
//現有素材
var formItem = document.querySelector("#item")
//顯示不足的數量
var sephiraLack = document.querySelector("#sephiraLack");
var astraLack = document.querySelector("#astraLack");
var ideanLack = document.querySelector("#ideanLack");
var calLackNum = document.querySelector("button");
//點數換算
var point = document.querySelector("#point");
var sephiraNum = document.querySelector("#sephiraNum");
var astraNum = document.querySelector("#astraNum");
//估算素材
var formTicket = document.querySelector("#ticket")
var ticket = document.querySelector("#estmTicket");
var calTicket = document.querySelectorAll("button")[1];
//日期
var dateCheck = document.querySelector("#dateCheck")
var estmtDate = document.querySelector("#estmDate");
var calDate = document.querySelectorAll("button")[2];

//獲取召喚狀態
summon.addEventListener("change", function(){
    for(var i = 0; i < summon.length; i++){
        getSummon = Number(summon.value);
        cal();
    }
})
//執行計算
calLackNum.addEventListener("click", function(){
    sephiraLack.textContent = sephiraLack.textContent - formItem.sephiraOwn.value;
    astraLack.textContent = astraLack.textContent - formItem.astraOwn.value;
    ideanLack.textContent = ideanLack.textContent - formItem.ideanOwn.value;
    formItem.sephiraOwn.value = 0;
    formItem.astraOwn.value = 0;
    formItem.ideanOwn.value = 0;
})
//點數換算
point.addEventListener("change", function(){
    var converSephira = Math.floor(point.value / 2000);
    var converAstra = Math.floor(point.value / 1500);
    sephiraNum.textContent = converSephira;
    astraNum.textContent = converAstra;
})
//顯示預估的票數
calTicket.addEventListener("click", function(){
    if (getType() === "astra"){
        var estimate = (formTicket.needNum.value - formTicket.estmPoint.value * 20) / formTicket.estmNum.value * 9;
    }else {
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
function cal(){
    switch (getSummon){
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