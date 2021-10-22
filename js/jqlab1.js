$('p:eq(1)').attr('id', 'jotain');
$('#fp').remove();
$('#fdiv').css(
    {
        backgroundColor:'grey',
        color: 'white'
    }
);

// ('background-color', 'grey').css('color', 'white');
//$('#fdiv').css('color', 'white');

function sayHello(){
    $('#jotain').after('<p id="tp">Hello user<p/>');
}

$('#nappi').click(sayHello);

$('#4p').hide();
$('#sdiv').hover(
    function(){
        $('#4p').text('About to select link').show();
    },
    function(){
        $('#4p').hide();
    }
)

