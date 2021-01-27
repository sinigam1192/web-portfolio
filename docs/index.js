$(function(){
    //  アンカーリンク
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });

    // フェイドイン
    // $(window).scroll(function () {
    //     const wHeight = $(window).height();
    //     const scrollAmount = $(window).scrollTop();
    //     $('.scrollanime').each(function () {
    //         const targetPosition = $(this).offset().top;
    //         if(scrollAmount > targetPosition - wHeight + 60) {
    //             $(this).addClass("fadeInDown");
    //         }
    //     });
    // });

    var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 1500; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });



    //　popber 
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

      // skill-list  
    $("#code").click( function() {
        $("#skill-content").html("<h2>html, CSS, javascript</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>html,css,javascriptを使用しwebサイトを作成することができます。</p>                            <i class='fas fa-code col-4 skill-centers-icon skill-centers centers'></i></div>");
    });
    $("#teach").click( function() {
        $("#skill-content").html("<h2>プログラミング講座</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>プログラミングに関すること、ITリテラシーに関する内容で講座をできます。</p><i class='fas fa-chalkboard-teacher col-4 skill-centers-icon skill-centers centers'></i></div>");
    });
    $("#dev").click( function() {
        $("#skill-content").html("<h2>開発</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>開発全般できます。</p><i class='fas fa-database col-4 skill-centers-icon skill-centers centers'></i></div>");
    });
    $("#excel").click( function() {
        $("#skill-content").html("<h2>Excel, VBA</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>vba,excelを使用したツール開発ができます。業務改善や、手入力の自動化などできます。</p><i class='fas fa-file-excel col-4 skill-centers-icon skill-centers centers'></i></div>");
    });
    $("#ruby").click( function() {
        $("#skill-content").html("<h2>ruby</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>rubyを使用したツール開発。スクレイピング、業務自動化などできます。</p><i class='devicons devicons-ruby col-4 skill-centers-icon skill-centers centers'></i></div>");
    });
    $("#rails").click( function() {
        $("#skill-content").html("<h2>ruby on rails</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>webアプリケーション開発ができます。対応可能フレームワークは、ruby on rails, laravelなどです。他は要相談くださいませ。</p><i class='devicons devicons-ruby_on_rails col-4 skill-centers-icon skill-centers centers'></i></div>");
    });
  });


  
//                         <div class='row'>
//                             <p class='col-4 offset-2 skill-centers centers'>プログラミング講座</p>
//                             <i class='fas fa-chalkboard-teacher col-4 skill-centers-icon skill-centers centers'></i>
//                         </div>

// fas fa-database
// devicons devicons-ruby
// fas fa-file-excel
// devicons devicons-ruby_on_rails
// // <div class='row'><p class='col-4 offset-2 skill-centers centers'>プログラミング講座</p><i class='fas fa-chalkboard-teacher col-4 skill-centers-icon skill-centers centers'></i></div>
// <div class='row'><p class='col-4 offset-2 skill-centers centers'>開発全般できます。</p><i class='fas fa-database col-4 skill-centers-icon skill-centers centers'></i></div>
// <div class='row'><p class='col-4 offset-2 skill-centers centers'>rubyを使用したツール開発。スクレイピング、業務自動化などできます。</p><i class='devicons devicons-ruby col-4 skill-centers-icon skill-centers centers'></i></div>
// <div class='row'><p class='col-4 offset-2 skill-centers centers'>vba,excelを使用したツール開発ができます。業務改善や、手入力の自動化などできます。</p><i class='fas fa-file-excel col-4 skill-centers-icon skill-centers centers'></i></div>
// <div class='row'><p class='col-4 offset-2 skill-centers centers'>webアプリケーション開発ができます。対応可能フレームワークは、ruby on rails, laravelなどです。他は要相談くださいませ。</p><i class='devicons devicons-ruby_on_rails col-4 skill-centers-icon skill-centers centers'></i></div>


                        