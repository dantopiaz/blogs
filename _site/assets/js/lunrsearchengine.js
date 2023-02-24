
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About me",
    "body": "This blog website is a space we share and learn all about technology, innovation and more. Support usThank you for your support! "
    }, {
    "id": 2,
    "url": "http://localhost:4000/author-dantino.html",
    "title": "Dantino",
    "body": "                        Dantino Follow:                                                    Posts by Dantino:                   		Chào mừng đến với trang blog của dantopia. vn	: 		  Lời chàoXin chào, tôi là Tống Vũ Thân Dân, dantopia. vn là trang web cá nhân và trang web này là nơi tôi chia sẻ các kinh nghiệm, kiến thức,… xoay quanh các chủ đề:	 			Trong 				dantopia, 								Feb 20, 2023						        "
    }, {
    "id": 3,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Chào mừng đến với trang blog của dantopia. vn                              :               Lời chào Xin chào, tôi là Tống Vũ Thân Dân, dantopia. vn là trang web cá nhân và trang web này là nơi tôi chia sẻ. . . :                                                                                                                                                                       Tống V. T. Dân                                20 Feb 2023                                                                                                                      All Stories:             "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/welcome-dantopia-blog/",
    "title": "Chào mừng đến với trang blog của dantopia.vn",
    "body": "2023/02/20 - Lời chào: Xin chào, tôi là Tống Vũ Thân Dân, dantopia. vn là trang web cá nhân và trang web này là nơi tôi chia sẻ các kinh nghiệm, kiến thức,… xoay quanh các chủ đề:    Đổi mới sáng tạo - Innovation     Phát triển sản phẩm (sản phẩm vật lý, hữu hình) - Hardware Product Development     Phát triển doanh nghiệp nhỏ  dantopia - Định nghĩa:: Theo định nghĩa tại Urban Dictionary, dantopia mang ý nghĩa:  A state of happiness, confidence, and inner peace. Often used to describe the emotion felt after some important life event. Tiếng Việt:  Một trạng thái hạnh phúc, tự tin và bình an nội tâm. Thường được dùng để diễn tả cảm xúc sau một số sự kiện quan trọng trong đời. Với hơn 15 năm kinh nghiệm trong các lĩnh vực công nghệ, đặc biệt phát triển sản phẩm sử dụng công nghệ như vi điện tử, lập trình, vi mạch, phát triển phần mềm, Dân sẽ ghi lại những kinh nghiệm với mong muốn chia sẻ những thất bại (nhiều hơn), và thành công trên chặng đường phát triển sự nghiệp của mình.  Chúc mọi người thành công, phát đạt , bình an và hạnh phúc "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});