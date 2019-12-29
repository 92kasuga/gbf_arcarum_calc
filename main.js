//現有素材
var sephiraOwn = document.querySelector("#sephiraStone");
var astraOwn = document.querySelector("#astra");
var ideanOwn = document.querySelector("#idean");
//設定召喚
var summon = document.querySelector("select");
var getSummon = 0;
//顯示不足的數量
var sephiraLack = document.querySelector("#sephiraLack");
var astraLack = document.querySelector("#astraLack");
var ideanLack = document.querySelector("#ideanLack");
//計算按鈕
var calLackNum = document.querySelector("button");
//取得點數
var point = document.querySelector("#point");
//顯示換算的精柱數量
var sephiraNum = document.querySelector("#sephiraNum");
var astraNum = document.querySelector("#astraNum");
//估算素材
var needNum = document.querySelector("#needNum");
var estmNum = document.querySelector("#estmNum");
var ticket = document.querySelector("#ticket");
var calTicket = document.querySelectorAll("button")[1];
//日期
var nMonth = document.querySelector("#month");
var nDate = document.querySelector("#date");
var ndays = document.querySelector("#days");
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
    sephiraLack.textContent = sephiraLack.textContent - sephiraOwn.value;
    astraLack.textContent = astraLack.textContent - astraOwn.value;
    ideanLack.textContent = ideanLack.textContent - ideanOwn.value;
    sephiraOwn.value = 0;
    astraOwn.value = 0;
    ideanOwn.value = 0;
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
    var estimate = needNum.value / estmNum.value * 9;
    ticket.textContent = Math.ceil(estimate);
})
//日期計算
calDate.addEventListener("click", function(){
var startDate = new Date(2020, nMonth.value-1, nDate.value);
var intValue = 0; 
var endDate = null; 
intValue = startDate.getTime();
intValue += ndays.value * (24 * 3600 * 1000); 
endDate = new Date(intValue); 
estmDate.textContent = (endDate.getMonth() + 1) + "月" + endDate.getDate() + "日"; 
})
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