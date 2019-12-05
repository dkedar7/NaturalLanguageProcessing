function showfield1(name){
    var revelPitch = "Revel is a full-service digital consultancy that partners\
                        with organizations to lead go-to-market transformation by\
                        building seamless, simple, connected experiences.\
                        \
                        We are problem solvers, designers and builders\
                        united around a core set of values and a commitment\
                        to solving complex challenges swiftly, efficiently and elegantly."

  if(name=="revel")document.getElementById('textarea1').innerHTML=revelPitch;
  else document.getElementById('div1').innerHTML='';
}


function showfield2(name){
    if(name=="revel_what")document.getElementById('textarea2').innerHTML="What does Revel do?";
    else document.getElementById('div1').innerHTML='';
  }

  $("form").submit(function(event){
    event.preventDefault();
    $.post(window.location.href, $("form").serialize(), function (data) {
        console.log('Result Found!')
        $('textarea#textarea3').val(data)
    })
})