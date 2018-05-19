$(function () {

    $('#go').click(function () {
        
        function checkIfComplete(){
            if(isComplete == false){
                isComplete = true;
                $("#raceInfoContainer").css('visibility', 'visible');
            }else{
                place = 'second';
            }
        }
        //car width
        var carWidth = $('#car1').width();

        //width of the race track
        var raceTrackWidth = $(window).width() - carWidth;

        //random racing time1
        var racingTime1 = Math.floor((Math.random() * 5000) + 1);
        //random racing time2
        var racingTime2 = Math.floor((Math.random() * 5000) + 1);

        //flag, false default
        var isComplete = false;

        //another flag variable
        var place = 'first';
        //animate the race
        $('#car1').animate({
            left: raceTrackWidth
        }, racingTime1, function(){
            checkIfComplete();
            
            $('#raceInfo1 span').text('Finished in ' + place + ' place clocked in at ' +racingTime1+ ' miliseconds');
            
            
        });

        $('#car2').animate({
            left: raceTrackWidth
        }, racingTime2, function(){
            checkIfComplete();
            
            $('#raceInfo2 span').text('Finished in ' + place + ' place clocked in at ' + racingTime2 + ' miliseconds');
            
            
        });
    });
    
    $('#reset').click(function(){
        $('.car').css('left', '0');
        $('.raceInfo span').text('');
        $("#raceInfoContainer").css('visibility', 'hidden');
    });
});
