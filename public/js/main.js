/**
 * Created by sebschwa on 05.01.17.
 */

$(document).ready(function () {
    console.log("ready!");
    let data;
    let p1;
    let p2;
    let draw;
    let ranking;
    $.getJSON("/getData/", function (json) {
        console.log("success");
        data = json;
        let items = _.countBy(data, "name");
        console.log(items);
        p1 = items.Inan;
        p2 = items.Sebastian;
        draw = items.both;
        if(p1>p2){
            ranking = ['Inan','Sebastian'];
            $('#rank1name').text('Inan');
            $('#rank1count').text('won: '+p1+ 'Cups');
            $('#rank1img').attr('src', '/images/mk9.GIF');
            $('#rank2name').text('Sebastian');
            $('#rank2count').text('won: '+p2+ 'Cups');
            $('#rank2img').attr('src', '/images/mk7.GIF');

        }else if(p2>p1){
            ranking = ['Sebastian','Inan'];
            $('#rank2name').text('Inan');
            $('#rank2count').text('won: '+p1+ 'Cups');
            $('#rank2img').attr('src', '/images/mk9.GIF');
            $('#rank1name').text('Sebastian');
            $('#rank1count').text('won: '+p2+ 'Cups');
            $('#rank1img').attr('src', '/images/mk7.GIF');
        }else{
            ranking = ['both','both'];
            $('#rank2name').text('Inan');
            $('#rank2count').text('won: '+p1+ 'Cups');
            $('#rank2img').attr('src', '/images/mk9.GIF');
            $('#rank1name').text('Sebastian');
            $('#rank1count').text('won: '+p2+ 'Cups');
            $('#rank1img').attr('src', '/images/mk7.GIF');
            $('#rank1header').text('Drawn Game');
            $('#rank2header').text('Drawn Game');

        }

        console.log(p1,p2,draw);
    }).fail(function () {
            alert("couldnt load data from server");
    });

});