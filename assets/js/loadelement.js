

if (window.location.hostname == "127.0.0.1") {
    var domain = '';
}
//  else if (window.location.hostname == "kataoka.a2ztech.vn") {
//     var domain = 'https://kataoka.a2ztech.vn/';
// } else if (window.location.hostname == "comotec.ne.jp") {
//     var domain = 'https://comotec.ne.jp/test_space/test/kataoka/';
// } else {
//     var domain = 'http://www.kataoka.co.jp/';
// }

loadelement = {
    init: function () {
        loadelement.header();
        loadelement.footer();
        // loadelement.loading();

        // // breadcrumb
        // loadelement.breadcrumb();

        loadelement.block();
    },

    header: function() {
        $("Header").each(function () {
            var elememnt = $(this);
            $.get(domain +"elements/header/header.html", function (data, status) {
                elememnt.html(data);
            });
        });
    },

    footer: function() {
        $("Footer").each(function () {
            var elememnt = $(this);
            $.get(domain +"elements/footer/footer.html", function (data, status) {
                elememnt.html(data);
            });
        });
    },

    title: function(_this, jp_title, en_title, sub_title, style) {
        switch (style) {
            case ('style1'): {
                $.get(domain +"elements/title/titlestyle1.html", function (data) {
                    _this.html(data);
                    if (en_title) {
                        _this.find(".en-title").text(en_title);
                    } else {
                        _this.find(".en-title").remove();
                    }

                    _this.find(".jp-title").text(jp_title);

                    if (sub_title) {
                        _this.find(".sub-title").html(sub_title.replace("\n", "<br />"));
                    } else {
                        _this.find(".sub-title").remove();
                    }
                });
        
                _this.attr('loaded', true);
                break;
            }            
            case ('style2'): {
                $.get(domain +"elements/title/titlestyle2.html", function (data) {
                    _this.html(data);
                    _this.find(".title").text(en_title);
                });
        
                _this.attr('loaded', true);
                break;
            }                        
            case ('style3'): {
                $.get(domain +"elements/title/titlestyle3.html", function (data) {
                    _this.html(data);
                    _this.find(".title").text(en_title);
                });
        
                _this.attr('loaded', true);
                break;
            }                      
            case ('style4'): {
                $.get(domain +"elements/title/titlestyle4.html", function (data) {
                    _this.html(data);
                    _this.find(".title").text(jp_title);
                });
        
                _this.attr('loaded', true);
                break;
            }                      
            case ('style5'): {
                $.get(domain +"elements/title/titlestyle5.html", function (data) {
                    _this.html(data);
                    _this.find(".title").text(jp_title);
                });
        
                _this.attr('loaded', true);
                break;
            }                           
            case ('style6'): {
                $.get(domain +"elements/title/titlestyle6.html", function (data) {
                    _this.html(data);
                    _this.find(".title").text(jp_title);
                });
        
                _this.attr('loaded', true);
                break;
            }        
            case ('titleacc'): {
                $.get(domain +"elements/title/titleacc.html", function (data) {
                    _this.html(data);
                    _this.find(".jp-title").text(jp_title);
                    _this.find(".jp-number").text(en_title + ".");
                    _this.find("a").attr('href', "#");
                });
        
                _this.attr('loaded', true);
                break;
            } 
        }
    },

    
    product: function(_this, img, title, url, des, element) {
        switch (element) {
            case ('grid'): {
                $.get(domain +"elements/product/product_grid.html", function (data) {
                    _this.html(data);
                    _this.find(".product-item a").attr('href', url);
                    _this.find(".box-image img").attr('src', img);
                    _this.find(".title").text(title);
                    _this.find(".description").text(des);
                });
        
                _this.attr('loaded', true);
                break;
            }            
            case ('list'): {
                $.get(domain +"elements/product/product_list.html", function (data) {
                    _this.html(data);
                    _this.find(".product-item a").attr('href', url);
                    _this.find(".box-image img").attr('src', img);
                    _this.find(".title").text(title);
                    _this.find(".description").text(des);
                });
        
                _this.attr('loaded', true);
                break;
            }   
        }
    },

    newsitem: function(style){
        switch (style) {
            case ('grid1'): 
                $("NewsCard").each(function () {
                    var elememnt = $(this);
            
                    var title = $(this).attr("title");
                    var date = $(this).attr("date");
                    var description = $(this).attr("description");
                    var link = $(this).attr("link");
                    var image = $(this).attr("image");
                    var lable = $(this).attr("lable");
                    
            
                    $.get(domain +"elements/news/newsgrid.html", function (data, status) {
                        elememnt.html(data);
                        elememnt.find(".title").html('<a href="'+ link +'">'+title+'</a>');
                        elememnt.find(".date").text(date);
                        elememnt.find(".description").text(description);
            
                        elememnt.find(".imgage-box").html('<a href="'+ link +'"><img src="'+image+'"></a>');
                        if (lable != undefined && lable != "") {
                            elememnt.find(".imgage-box").append('<span class="lable">' + lable + "</span>");
                        }
                    });
                });   
                break;
            case ('grid2'): 
                $("NewsCard2").each(function () {
                    var elememnt = $(this);
            
                    var title   = $(this).attr("title");
                    var date    = $(this).attr("date");
                    var link    = $(this).attr("link");
                    var image   = $(this).attr("image");
                    var cat     = $(this).attr("cat");
                    var cat_url = $(this).attr("cat-url");
            
                    $.get(domain +"elements/news/newsgrid2.html", function (data, status) {
                        elememnt.html(data);
                        elememnt.find(".title").html('<a href="'+ link +'">'+title+'</a>');
                        elememnt.find(".date").text(date);
                        elememnt.find(".imgage-box").html('<a href="'+ link +'"><img src="'+image+'"></a>');
                        if (cat != undefined || cat != "") {
                            elememnt.find(".imgage-box").append("<span class='cat'><a href='"+cat_url+"'>" + cat + "</span>");
                        }
                    });
                });
                break;
            case ('grid3'): 
                $("NewsCard3").each(function () {
                    var elememnt = $(this);
            
                    var title = $(this).attr("title");
                    var date = $(this).attr("date");
                    var description = $(this).attr("description");
                    var link = $(this).attr("link");
                    var image = $(this).attr("image");
                    var cat = $(this).attr("cat");
                    var cat_url = $(this).attr("cat-url");
            
                    $.get(domain +"elements/news/newsgrid3.html", function (data, status) {
                        elememnt.html(data);
                        elememnt.find(".title").html('<a href="'+ link +'">'+title+'</a>');
                        elememnt.find(".description").text(description);
                        elememnt.find(".date").text(date);
            
                        elememnt.find(".imgage-box").html('<a href="'+ link +'"><img src="'+image+'"></a>');
                        if (cat != undefined || cat != "") {
                            elememnt.find(".cat").html('<a href="'+ cat_url +'">'+cat+'</a>');
                        }
                    });
                });
                break;
            case ('grid4'): 
                $("NewsCard4").each(function () {
                    var elememnt = $(this);
            
                    var title = $(this).attr("title");
                    var description = $(this).attr("description");
                    var link = $(this).attr("link");
                    var image = $(this).attr("image");
            
                    $.get(domain +"elements/news/newsgrid4.html", function (data, status) {
                        elememnt.html(data);
                        elememnt.find(".title").html('<a href="'+ link +'">'+title+'"</a>');
                        elememnt.find(".description").text(description);
            
                        elememnt.find(".imgage-box").html('<a href="'+ link +'"><img src="'+image+'"></a>');
                    });
                });
                break;
            // case ('list'): 
            //     $("NewsCard2").each(function () {
            //         var elememnt = $(this);
            
            //         var title = $(this).attr("title");
            //         var date = $(this).attr("date");
            //         var link = $(this).attr("link");
            //         var image = $(this).attr("image");
            //         var cat = $(this).attr("cat");
            
            //         $.get(domain +"elements/news/newsgrid2.html", function (data, status) {
            //             elememnt.html(data);
            //             elememnt.find(".title").html('<a href="'+ link +'">'+title+'"</a>');
            //             elememnt.find(".date").text(date);
            
            //             elememnt.find(".imgage-box").html('<a href="'+ link +'"><img src="'+image+'"></a>');
            //             if (cat != undefined) {
            //                 elememnt.find(".imgage-box").append('<span class="cat">' + cat + "</span>");
            //             }
            //         });
            //     });
            //     break;
            case ('newslist'): 
                $("Newslist").each(function () {
                    var elememnt = $(this);
            
                    var title = $(this).attr("title");
                    var date = $(this).attr("date");
                    var link = $(this).attr("url");
                    var cat = $(this).attr("cate");
                    var cat_url = $(this).attr("cate-url");
                    var lable = $(this).attr("lable");
                    $.get(domain +"elements/news/newslist.html", function (data, status) {
                        elememnt.html(data);
                        elememnt.find(".post-title").html('<a href="'+ link +'">'+title+'</a>');
                        elememnt.find(".date").text(date);                        
                        elememnt.find(".cate").html('<a href="'+ cat_url +'">'+cat+'</a>');

                        if (lable != undefined && lable != "") {
                            elememnt.find(".post-item").append('<span class="lable">' + lable + "</span>");
                        }
                    });
                });
                break;
        }        
    },

    newsbox: function(style) {
        switch (style) {
            case "hotnews": {
                $("HotNews").each(function () {
                    var _this = $(this);
            
                    var loaded = $(this).attr('loaded');
                    if (loaded == undefined || loaded == false) {

                        var title = $(this).attr('title');
                        var param = $(this).attr('param');
                        var class_inner = $(this).attr('class-inner');
                        var element = $(this).attr('element');
                        var post_type = $(this).attr('post-type');
                
                        $.get(domain +"elements/news/hotnews.html", function (data) {
                            _this.html(data);
                            _this.find('.title-block').text(title);                
            
                            loadPosts(param, _this.find('.post-list'), class_inner, element, post_type);       
                        });
                
                        _this.attr('loaded', true);
                        
                    }
                });
                break;
            }
        }
    },

    producttab: function() {
        $("TabProduct").each(function () {
            var elememnt = $(this);
    
            $.get(domain +"elements/product/tabproduct.html", function (data, status) {
                elememnt.html(data);
                
                loadelement.title('tabproduct');
                loadelement.block();
            });
        });

    },

    contactlist: function() {
        $("ContactList").each(function () {
            var elememnt = $(this);
    
            $.get(domain +"elements/contact/contactlist.html", function (data, status) {
                elememnt.html(data);
            });
        });    
    },

    workitem: function(style) {
        switch (style) {
            case ('grid1'): 
                $("WorkCard").each(function () {
                    var elememnt = $(this);
            
                    var title = $(this).attr("title");
                    var link = $(this).attr("link");
                    var image = $(this).attr("image");
                    var cat = $(this).attr("cat");
                    var cat_url = $(this).attr("cat-url");
            
                    $.get(domain +"elements/work/workcard.html", function (data, status) {
                        elememnt.html(data);
                        elememnt.find(".title").html('<a href="'+ link +'">'+title+'</a>');
            
                        elememnt.find(".imgage-box").html('<a href="'+ link +'"><img src="'+image+'"></a>');
                        if (cat != undefined) {
                            elememnt.find(".imgage-box").append('<span class="cat"><a href="'+ cat_url +'">'+cat+'</a></span>');
                        }
                    });
                });
                break;
            
        }   
    },

    breadcrumb: function() {
        $("Breadcrumb").each(function () {
            var elememnt = $(this);

            var imgae = $(this).attr("bg-image");
            var jp_title = $(this).attr("jp-title");
            var en_title = $(this).attr("en-title");
            var mid_title = $(this).attr("mid-title");
            var mid_link = $(this).attr("mid-link");

            $.get(domain +"elements/breadcrumb/breadcrumb.html", function (data, status) {
                elememnt.html(data);
                elememnt.find(".jp-title").text(jp_title);
                elememnt.find(".en-title").text(en_title);

                if (mid_title != undefined) {
                    $( "<a href='"+mid_link+"'>" + mid_title + "</a>>" ).insertBefore(elememnt.find(".breadcrumb-list .jp-title"));
                }

                $('#breadcrumb').css("background-image", "url(" + imgae + ")");
            });
        });
    },

    hotnews: function (_this, jp_title, en_title, param, element, class_inner, post_type) {
        $.get(domain +"elements/news/block_hotnews.html", function (data) {
            _this.html(data);
            _this.find(".jp-title").text(jp_title);
            _this.find(".en-title").text(en_title);
        });
    },

    loading: function () {
        var _this = $('#loading');
        $.get(domain +"elements/footer/loading.html", function (data) {
            _this.html(data);
        });
    },

    block: function() {
        $('div[data="block"]').each(function(){
            var loaded = $(this).attr('loaded');
            if (loaded == undefined || loaded == false) {
                var type = $(this).data('type');
                var _this = $(this);

                switch (type) {
                    case "hotnews": {
                        var jp_title    = $(this).attr('jp-title');
                        var en_title    = $(this).attr('en-title');
                        var param       = $(this).attr('param');
                        var element     = $(this).attr('element');
                        var class_inner = $(this).attr('class-inner');
                        var post_type   = $(this).attr('post-type');
                        loadelement.hotnews(_this, jp_title, en_title, param, element, class_inner, post_type);
                        break;
                    }

                    case "title": {
                        var jp_title    = $(this).attr('jp-title');
                        var en_title    = $(this).attr('en-title');
                        var sub_title   = $(this).attr('sub-title');
                        var style       = $(this).attr('tt-style');
                        loadelement.title(_this, jp_title, en_title, sub_title, style);
                        break;
                    }

                    case "product-item": {

                        console.log(type);

                        var img     = $(this).attr('img');
                        var title   = $(this).attr('title');
                        var url     = $(this).attr('url');
                        var des     = $(this).attr('des');
                        var element = $(this).attr('element');
                        
                        loadelement.product(_this, img, title, url, des, element);
                        break;
                    }
                }

                $(this).attr('loaded', true);
            }
        });
    }    
}