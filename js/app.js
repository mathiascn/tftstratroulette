function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var strats = [
    "You always have to buy the left most unit in the shop and keep until the bench is full",
    "Slam items in the exact order you get them",
    "Can only take carousel items directly in front of you",
    "No carousel item choice - don't move and take whatever is left to you",
    "you can only use 1 & 2 cost champions",
    "Can only buy 2 units per shop",
    "3 star your first carousel unit and can't sell",
    "every carousel unit must be used on the board",
    "you can only buy xp when you're one buy away from leveling up",
    "You can only buy xp when you get a 2 star champion",
    "you can only play units up to 1,2,3,4,5,6,7,10 cost",
    "no refresh until 7",
    "no 3* units",
    "all units positioned in backline",
    "all units positioned in frontline",
    "Copy cat, contest who ever is in first place.",
    "Can only buy 1 unit per shop",
    "Always pick the middle augument",
    "Not allowed to sell champions",
    "Only allowed 3 active traits",
    "Only allowed to use human champions",
    "Not allowed to use human champions",
    "Only allowed to use traits obtained from carousell champions",
    "You have to keep and use the champions that gets dropped in an orb",
    "use only champions with less than 60 mana",
    "Place your champions in a pyramide formations",
    "Always keep the board with the highest cost champion obtainable, change out the lower cost",
    "Win the game with less than 10 hp",
    "Anti interest, stay below 10 gold every round"
];
$('.refresh_btn').on("click",function(){
    $(".output_container").html(strats[getRandomInt(strats.length)]);
});

$('.navlink').on("click",function(){
    Array.from($('.navlink')).forEach(function(currVal){
        $('.'+currVal.id+'_container').css("display","none");
    });
    $('.'+this.id+'_container').css("display","block");
});