const menuIcone = $('.iconeMenu');
const menu = $('.menu');
const menuList = $('.listMenu');
const menuItem = $('.itemMenu');
const close = $('.close');

close.click(() =>{
	menu.removeClass('menuContainerMobile');
	menuList.removeClass('menuDropMobile');
	close.removeClass('closeMobile');
	menuItem.removeClass('itemMenuMobile');
	menu.addClass('menu');
	menuList.addClass('listMenu');
});

menuIcone.click(function(event) {
	menu.addClass('menuContainerMobile');
	menu.removeClass('menu');
	menuList.addClass('menuDropMobile');
	menuList.removeClass('listMenu');
	menuItem.addClass('itemMenuMobile');
	close.addClass('closeMobile');
});