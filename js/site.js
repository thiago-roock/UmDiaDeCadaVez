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

        var dataMenosUmDia = new Date().getFullYear()+1;

          $("#MenosUmDia")
          .countdown(dataMenosUmDia+"/01/01", function (event) {
            $(this).html(
              event.strftime('Menos um dia: <del><span>%-D</span></del>')
            );
          });
        
        var ano = new Date().getFullYear();
        var bissexto = false;
        
        if(ano / 4 == 0 && ano / 100 != 0 || ano / 400 == 0 )
        {
          bissexto = true;
        }
  
        var totalDias = 0;

        if(bissexto)
        {
          totalDias = 366;
        }
        else
        {
          totalDias = 365;
        }
        
        $('#totalDias').text(totalDias);
 });
