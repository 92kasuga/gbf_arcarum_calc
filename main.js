//現有素材
var sephiraOwn = document.querySelector("#sephiraStone");
var astraOwn = document.querySelector("#astra");
var ideanOwn = document.querySelector("#idean");
//設定召喚
var summon = document.querySelector("select");
var getSummon = 0;
//顯示不足的數量
var sephiraLack = document.querySelector("#sephiraDisplay");
var astraLack = document.querySelector("#astraDisplay");
var ideanLack = document.querySelector("#ideanDisplay");
//計算按鈕
var calButton = document.querySelector("button");
//獲取召喚狀態

summon.addEventListener("change", function(){
    for(var i = 0; i < summon.length; i++){
        getSummon = Number(summon.value);
        cal();
    }
})
//執行計算
calButton.addEventListener("click", function(){
    sephiraLack.textContent = sephiraLack.textContent - sephiraOwn.value;
    astraLack.textContent = astraLack.textContent - astraOwn.value;
    ideanLack.textContent = ideanLack.textContent - ideanOwn.value;
    sephiraOwn.value = 0;
    astraOwn.value = 0;
    ideanOwn.value = 0;
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