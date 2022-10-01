<div class="app">
    <div class="ad_space l_ad"></div>
    <div class="ad_space r_ad"></div>
    <div class="main_container">
        <div class="row">
            <div class="header_container">
                <h1 class="header">TEAMFIGHT TACTICS<br>STRAT ROULETTE</h1>
            </div>
        </div>
        <div class="row">
            <div class="difficulty_container">
                <div class="d_btn d1">
                    <img src="/tftstratroulette/res/d1.png" alt="easy_difficulty">
                </div>
                <div class="d_btn d2">
                    <img src="/tftstratroulette/res/d2.png" alt="medium_difficulty">
                </div>
                <div class="d_btn d3">
                    <img src="/tftstratroulette/res/d3.png" alt="hard_difficulty">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="output_container"></div>
        </div>
        <div class="row">
            <div class="refresh_btn">
                <div class="refresh_btn_l"></div>
                <div class="refresh_btn_triangle"></div>
                <div class="refresh_btn_border"></div>
                <div class="refresh_btn_triangle_border"></div>
                <div class="refresh_btn_r">
                    <div class="refresh_icon">&#x21bb;</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footer">
    <div class="footer_disclaimer">TFTSTRATROULETTE.COM isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</div>
</div>
<script type="application/javascript">
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    var strats = ["Copy cat, contest who ever is in first place.","Can only buy 1 unit per shop","Always pick the middle augument"];
    $('.refresh_btn').on("click",function(){
        $(".output_container").html(strats[getRandomInt(3)]);
    });
</script>