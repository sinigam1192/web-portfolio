$(function(){
    //変数宣言
    var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 1500; // エフェクトの時間(ms) 1秒なら1000
    var pageNum = $('#main').children().length;
    var currentPage = 0;
    const pageIds = [];
    //#mainの子要素のIDを取得する
    for(var i = 0; i < pageNum; i++){
        var pageId = "#" + $('#main').children()[i].id;
        const pageData = {
            page: i,
            id: pageId,
            height: $(pageId).height()
         };
        

        pageIds.push(pageData);
    };
    console.log(pageIds);

    //  アンカーリンク
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      jumpElementHandler(href);
      return false;
    });

    
    $(window).on("scroll", function() {
        const $window = $(window);
        var height = $("#page-0").height();
        var scroll = $window.scrollTop();
        var currentPageNum = parseInt(scroll / pageIds[0].height);
        var offsetUp = currentPageNum * pageIds[0].height - pageIds[0].height * 0.2;
        var offsetBottom = currentPageNum * pageIds[0].height + pageIds[0].height * 1.2;
        nearestElementHandler(scroll);
        // すぐ下の「.scroll」にスクロール値を表示debug
        $(".scroll").text(scroll);
        $(".height").text(height);
        $(".page").text(currentPageNum);
      });


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
        $("#skill-content").html("<h2>HP作成</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>html,css,javascriptを駆使しwebサイトを作成することができます。本サイトも一から作成しております。</p>                            <i class='fas fa-code col-4 skill-centers-icon skill-centers centers'></i></div>");
    });
    $("#teach").click( function() {
        $("#skill-content").html("<h2>プログラミング講座</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>プログラミングに関すること、ITリテラシーに関する内容で講座をできます。</p><i class='fas fa-chalkboard-teacher col-4 skill-centers-icon skill-centers centers'></i></div>");
    });
    $("#dev").click( function() {
        $("#skill-content").html("<h2>開発</h2><div class='row'><p class='col-4 offset-2 skill-centers centers'>webアプリケーションを開発、常駐、委託として承っております。ぜひご相談ください。</p><i class='fas fa-database col-4 skill-centers-icon skill-centers centers'></i></div>");
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



    //呼び出し用関数
    //現在のページを管理する

    function nearestElementHandler(scroll){
        //ids =[{page: init, id: "string", hegiht: init, }...]
        const distances = [];
        pageIds.forEach((pageData) => {
            var distance = $(pageData.id).offset().top - scroll;
            var abs = Math.abs(distance);
            distances.push({id: pageData.id, distance: abs});
        });
        near = Math.min(...distances.map((p) => p.distance));
        
        var targetId = pageIds.filter(function(page, index){
            if (page.distance == near) {
                console.log(page.id);
                return page.id;
            }
          });
        
        //   jumpElementHandler(targetId);

        $(".up").text(near);
    };
    nearestElementHandler();
    
    function jumpElementHandler(id){
        $("html, body").animate({scrollTop:$(id).offset().top});
    };

  });