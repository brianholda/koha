$(document).ready(function() {

    // relabel Similar Items tab
    $("option[value='l-format:ta']").remove();
    $("option[value='l-format:tb']").remove();
    $("option[value='l-format:tc or l-format:fb']").remove();
    $("option[value='mus:j']").remove();
    $("option[value='mus:i']").remove();
    $("li:contains('Tag cloud')").remove();
    $("li:contains('Authority search')").remove();
    $("li:contains('Course reserves')").remove();
    $("legend:contains('Audience')").remove();
    $("legend:contains('Format')").remove();
    $("#subtype_audience").remove();
    $("#subtype_format").remove();
    $("option[value='ctype:a']").remove();
    $("option[value='ctype:k']").remove();
    $("option[value='ctype:q']").remove();
    $("option[value='ctype:g']").remove();
    $("option[value='ctype:j']").remove();
    $("option[value='ctype:t']").remove();
    $("option[value='ctype:v']").remove();
    $("option[value='ctype:z']").remove();
    $("#au_id").remove();
    $("#su-ut_id").remove();
    $("#location_id").remove();
    $("#ISBDview").parent().addClass("hidden");
    $("a:contains('Online Stores')").remove();
    $("a:contains('Open Library')").remove();
    $("#login").remove();
    $("legend:contains('Location and availability:')").parent().remove();
    $("option[value='ln,rtrn:amh']").remove(); //eng french german spanish
    $("option[value='ln,rtrn:ara']").remove();
    $("option[value='ln,rtrn:aze']").remove();
    $("option[value='ln,rtrn:bel']").remove();
    $("option[value='ln,rtrn:ben']").remove();
    $("option[value='ln,rtrn:bul']").remove();
    $("option[value='ln,rtrn:cat']").remove();
    $("option[value='ln,rtrn:cze']").remove();
    $("option[value='ln,rtrn:dan']").remove();
    $("option[value='ln,rtrn:gre']").remove();
    $("option[value='ln,rtrn:baq']").remove();
    $("option[value='ln,rtrn:per']").remove();
    $("option[value='ln,rtrn:fin']").remove();
    $("option[value='ln,rtrn:fao']").remove();
    $("option[value='ln,rtrn:glg']").remove();
    $("option[value='ln,rtrn:heb']").remove();
    $("option[value='ln,rtrn:hin']").remove();
    $("option[value='ln,rtrn:hrv']").remove();
    $("option[value='ln,rtrn:hun']").remove();
    $("option[value='ln,rtrn:arm']").remove();
    $("option[value='ln,rtrn:ind']").remove();
    $("option[value='ln,rtrn:ice']").remove();
    $("option[value='ln,rtrn:ita']").remove();
    $("option[value='ln,rtrn:jpn']").remove();
    $("option[value='ln,rtrn:geo']").remove();
    $("option[value='ln,rtrn:kan']").remove();
    $("option[value='ln,rtrn:khm']").remove();
    $("option[value='ln,rtrn:kor']").remove();
    $("option[value='ln,rtrn:kur']").remove();
    $("option[value='ln,rtrn:lat']").remove();
    $("option[value='ln,rtrn:lao']").remove();
    $("option[value='ln,rtrn:mao']").remove();
    $("option[value='ln,rtrn:mon']").remove();
    $("option[value='ln,rtrn:mar']").remove();
    $("option[value='ln,rtrn:may']").remove();
    $("option[value='ln,rtrn:nob']").remove();
    $("option[value='ln,rtrn:nep']").remove();
    $("option[value='ln,rtrn:dut']").remove();
    $("option[value='ln,rtrn:nno']").remove();
    $("option[value='ln,rtrn:pbr']").remove();
    $("option[value='ln,rtrn:pol']").remove();
    $("option[value='ln,rtrn:prs']").remove();
    $("option[value='ln,rtrn:por']").remove();
    $("option[value='ln,rtrn:rum']").remove();
    $("option[value='ln,rtrn:rus']").remove();
    $("option[value='ln,rtrn:kin']").remove();
    $("option[value='ln,rtrn:snd']").remove();
    $("option[value='ln,rtrn:slo']").remove();
    $("option[value='ln,rtrn:slv']").remove();
    $("option[value='ln,rtrn:alb']").remove();
    $("option[value='ln,rtrn:srp']").remove();
    $("option[value='ln,rtrn:swe']").remove();
    $("option[value='ln,rtrn:swa']").remove();
    $("option[value='ln,rtrn:tam']").remove();
    $("option[value='ln,rtrn:tet']").remove();
    $("option[value='ln,rtrn:tha']").remove();
    $("option[value='ln,rtrn:tgl']").remove();
    $("option[value='ln,rtrn:tur']").remove();
    $("option[value='ln,rtrn:ukr']").remove();
    $("option[value='ln,rtrn:urd']").remove();
    $("option[value='ln,rtrn:vie']").remove();
    $("option[value='ln,rtrn:chi']").remove();
    $("option:contains('Library catalog')").text('Keyword');
});

$(document).ready(function() {
    $("#translControl1").attr("placeholder", "Find Books, Media, & More...");

    var $advancedSearch = $("<p class='advanced-search-wrapper'><a href='/cgi-bin/koha/opac-search.pl'>Advanced Search</a></p>");
    $advancedSearch.appendTo(".mastheadsearch");

    $("legend:contains('Additional content types for books/printed materials')").text("Additional Print Types");
});

$(document).ready(function() {
    $("h3:contains('Fines and charges')").after('<p><a href="https://epay.davenport.edu/C20659_ustores/web/classic/product_detail.jsp?PRODUCTID=481">Pay Library Bill</a></p>');
});

$(document).ready(function() {
    $(".brand").attr('href', 'https://my.davenport.edu/library');
});

//URLs
$(document).ready(function() {
    var x = $("#catalogue_detail_biblio .label:contains('Online resources')").next().clone();
    x = x.text('Available Online');
    x = x.attr("target", "_blank");
    $(".collection:contains('E-book')").next().next().html(x);
    $(".collection:contains('Web')").next().next().html(x);
    $(".collection:contains('Streaming')").next().next().html(x);
    $("#catalogue_detail_biblio .label:contains('Online resources')").css("font-weight", "Bold");
    $("#catalogue_detail_biblio .label:contains('Online resources')").css("color", "#197068");
    $("#catalogue_detail_biblio .label:contains('Online resources')").css("font-size", "110%");
    $("#catalogue_detail_biblio .label:contains('Online resources')").text("Link to full-text: ");
});

// get rid of Syndetics Fiction notes link and move its header
// above the bibliodescription table
$(document).ready(function() {
    $(".results_summary").remove("span:contains('Fiction notes:')");
});
$(window).on('load', function() {
    $(".unbound_element.unbound_nav").insertBefore('#bibliodescriptions');
});


//RESULTS PAGE: add 'request e-book' to each print book in results
$(document).ready(function() {

    //get each print book record on results page
    const BOOK_RECORDS = $("td.bibliocol").has(".mt_icon_BK"); //it's a book
    const BOOKS_FOR_EBOOK_BUTTON = BOOK_RECORDS //book records
        .not(BOOK_RECORDS.has(".online_resources:contains('full-text')")) //NO full-text online content
        .not(BOOK_RECORDS.has(".coverimages > a.p1[href$='biblionumber=24782']")) //NO APA 6th Publication Manual
        .not(BOOK_RECORDS.has(".coverimages > a.p1[href$='biblionumber=40556']")) //NO APA 7th Publication Manual
        .not(BOOK_RECORDS.has(".coverimages > a.p1[href$='biblionumber=37455']")) //NO Habitudes® for the journey
        .not(BOOK_RECORDS.has(".coverimages > a.p1[href$='biblionumber=26866']")) //NO Study manual for the Test of Essential Academic Skills (TEAS)
        .not(BOOK_RECORDS.has(".coverimages > a.p1[href$='biblionumber=27596']")); //NO Netter's infectious diseases...

    //add generic 'request e-book' to each print record
    BOOKS_FOR_EBOOK_BUTTON.find(".actions-menu").append(`<a class="request-ebook" href="https://davenport.libwizard.com/f/request-ebook?"><i class="fa fa-book"></i> Request E-book</a>`);


    //begin loop of each print record
    BOOKS_FOR_EBOOK_BUTTON.each(function(index) {

        //find title and URL
        let title = $(this).find(".title").text(); // book title
        let recordUrl = $(this).find(".coverimages > a.p1").attr("href"); // book URL

        //add title and URL to 'Request E-book' link
        let eBookLink = $(this).find(".request-ebook").attr("href");
        eBookLink += "3600861=" + `${encodeURIComponent(title)}`; //add title field
        eBookLink += "&3454090=https://davenport.kohacatalog.com/" + `${encodeURIComponent(recordUrl)}`; //add URL field
        $(this).find(".request-ebook").attr("href", eBookLink);

        //add title to 'Request E-book' text
        title = title.slice(0, -2); //remove ending period and space of title
        title = title.toUpperCase(); // make title upper case
        if (title.length > 20) { //shorten book title to 20 characters
            title = title.substr(0, 19) + '... ';
        }
        let requestBookText = $(this).find(".request-ebook").html();
        $(this).find(".request-ebook").html(requestBookText + " of " + title); // change ebook button

    }); //end loop of each record
});

//RECORD PAGE: 
//Add 'request e-book' to each print book record
$(document).ready(function() {
    if (
        $("#catalogue_detail_biblio .mt_icon_BK").length && //if it's a book
        !$("#catalogue_detail_biblio .online_resources:contains('Access full-text materials at no charge')").length && //and not an online resource
        !(window.location.href.indexOf("biblionumber=24782") > -1) && //not APA 6th Publication Manual
        !(window.location.href.indexOf("biblionumber=40556") > -1) && //not APA 7th Publication Manual
        !(window.location.href.indexOf("biblionumber=37455") > -1) && //not Habitudes® for the journey
        !(window.location.href.indexOf("biblionumber=26866") > -1) && //not Study manual for the Test of Essential Academic Skills (TEAS)
        !(window.location.href.indexOf("biblionumber=27596") > -1) //not Netter's infectious diseases...
    ) {
        //get title
        let titleElement = $("#catalogue_detail_biblio h1.title");
        let title = titleElement.text();
        let shortTitle = title.slice(0, -2); //remove ending period and space of title
        shortTitle = shortTitle.toUpperCase(); // make title upper case
        if (shortTitle.length > 20) { //shorten book title to 20 characters
            shortTitle = shortTitle.substr(0, 19) + '... ';
        }

        //add button
        titleElement.after(`<p style="margin: 3vh 0"><a class="request-ebook" href="https://davenport.libwizard.com/f/request-ebook?${"3600861=" + 
    encodeURIComponent(title) + "&3454090=" + encodeURIComponent(window.location.href)}"><i class="fa fa-book"></i> Request E-book of ${shortTitle}</a></p>`);
    }
});

//Add hold option to bib record when logged out
if (!$("#action > li > a.reserve").length) { //if hold option isn't there
    //add hold option
    var hold = `<li><a class="reserve" href="/cgi-bin/koha/opac-reserve.pl?biblionumber=144">Place hold</a></li>`;
    $("#action").prepend(hold);
}


//User Login Page
$(document).ready(function() {
    $("#opac-auth > h3:contains('CAS login')").addClass("du-login-heading");
    $(".du-login-heading").html("<a href='https://sso.davenport.edu/cas/login?service=https%3A%2F%2Fdavenport.kohacatalog.com%2Fcgi-bin%2Fkoha%2Fopac-user.pl' class='btn btn-danger du-login-button' role='button'>Davenport University Login</a>");
    $("#opac-auth > h3:contains('Local login')").addClass("guest-login-heading");
    $(".guest-login-heading").html("<button type='button' class='btn btn-outline-secondary btn-sm guest-login-heading-button'>Guest Login</button>");

    $("h3.guest-login-heading ~ *").hide();
    $(".guest-login-heading-button").click(function() {
        $("h3.guest-login-heading ~ *").toggle();
    });

    $(".guest-login-instructions > .no-login-contents").hide();
    $(".guest-login-instructions > .no-login-title").click(function() {
        $(".guest-login-instructions > .no-login-contents").toggle();
    });
});
