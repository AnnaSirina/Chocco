$(document).ready(function() {
  //прикрепляем клик по заголовкам 
	$('#team .team__title').on('click', f_acc);
});

function f_acc(){
//скрываем все кроме того, что должны открыть
  $('#accordeon .team__title').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(500);
}