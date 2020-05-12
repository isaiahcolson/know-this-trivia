$('.quiz-container h3').html('Who is this?');

$('.quiz-container img').attr('src', 'images/test.png')
// $('.quiz-container img').attr('src', 'images/texture3.png')


let $optionA = $('label[for=optionA]').html('A. Martha Stewart');
$('label[for=optionB]').html('B. Mr. Poopybutthole');
$('label[for=optionC]').html('C. Pickle Rick');
$('label[for=optionD]').html('D. Scary Terry');

/* $('input[name=optionA]').on('click', function() {
    console.log($('input:checked').val());
}); */

/* $('input[name=answers]').click(function() {
    console.log($('input').val());
}); */

$('button').click(function() {
    console.log('Clicked');
    const $answer = $('input[name=answers]:checked').siblings('label').html();
    console.log($answer);
});