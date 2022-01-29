$(window).on("load", function(){
    var dataMaisUmDia = new Date().getFullYear()-1;
        $('#MaisUmDia').countdown(dataMaisUmDia+"/12/31", {elapse: true})
        .on('update.countdown', function(event) {
        var $this = $(this);
        if (event.elapsed) {
            $this.html(event.strftime('Mais um dia: <mark><span>%-D</span></mark>'));
        } else {
            $this.html(event.strftime('Mais um dia: <mark><span>%-D</span></mark>'));
        }
        });


        var dataMenosUmDia = new Date().getFullYear();

          $("#MenosUmDia")
          .countdown(dataMenosUmDia+"/12/31", function (event) {
            $(this).html(
              event.strftime('Menos um dia: <del><span>%-D</span></del>')
            );
          });
        

         var date1 = new Date(dataMenosUmDia+"/01/01");
        var date2 = new Date(dataMenosUmDia+"/12/31");
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        $('#totalDias').text(diffDays);
 });



