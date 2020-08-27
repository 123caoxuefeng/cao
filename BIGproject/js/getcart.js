'use strict';

function fun1() {
	// 计算被选中的商品的总件数和价格
	function updata() {
		// 获取所有被选中的商品的checkbox
		var total_count = 0;
		var total_price = 0;
		//:checked  选择器选取所有选中的复选框或单选按钮
		$(".cart-list-td").find(':checked').parents('ul').each(function () {
			cot = $(this).find('.num-show').val();
			amout = $(this).children('.cl7').text();
			//计算总共的商品总件数和总价格
			count = parseInt(cot);
			amount = parseFloat(amout);
			total_count += count;
			total_price += amount;
		});
		//设置被选中的商品的总件数和总价格
		$(".sett").find('span').text(total_price.toFixed(2));
		$(".sett").find('b').text(total_count);
		$(".conghe").text(total_count);
	}
	//计算商品的小计
	function updata_goods_price(sk_ul) {
		for (var i = 0; i < sk_ul.find(".num-show").length; i++) {
			var _count = sk_ul.find(".num-show").eq(i).val();
			var price = sk_ul.children(".cl5").eq(i).text();

			var _amount = parseInt(_count) * parseFloat(price);
			sk_ul.children(".cl7").text(_amount);
			console.log(_amount);
		}
	}
	// 商品的全选和不选
	$(".sett").find(":checked").change(function () {
		//获取全选元素的选中状态
		is_checked = $(this).prop("checked"); //返回这个属性的checked的值
		// console.log( is_checked);返回true或者false;
		$(".cart-list-td").find(":checkbox").each(function () {
			$(this).prop('checked', is_checked);
			// 给带有checked属性的元素被选中
			// 上面这一步是会被选中
		});
		updata();
	});
	//商品对应的checkbox 发生变化时，设置全选checkbox的状态
	$(".cart-list-td").find(":checkbox").change(function () {
		var check_len = $(".cart-list-td").find(":checked").length;
		var all_len = $(".cart-list-td").length;
		// is_checked= true;

		if (check_len < all_len) {
			is_checked = false;
			// $(".sett").find(":checked").prop('checked',false);
		}
		$(".sett").find(":checked").prop('checked', is_checked);
		updata();
	});
	//更新购物车中商品的数量
	var error_updata = false;
	var total = 0;
	function updata_cart_info(sku_id, count) {
		csrf = $("input[name='waretoken']").val();
		params = { 'sku_id': sku_id, 'count': count, 'waretoken': csrf };
	}
	//购物车中商品数量的增加
	$(".add-f").click(function () {
		// console.log(1);
		sku_id = $(this).next().attr('sku_id');
		count = $(this).next().val();
		count = parseInt(count) + 1;
		updata_cart_info(sku_id, count);
		if (error_updata == false) {
			$(this).next().val(count);
			updata_goods_price($(this).parents("ul"));
			is_checked = $(this).parents('ul').find(':checked').prop('checked');
			if (is_checked) {
				updata_cart_info(sku_id, count);
			}
			$('.total-count').children("span").text(total);
			updata_cart_info(sku_id, count);
			updata();
		}
	});
	// 购物车商品的减少
	$(".cut-f").click(function () {
		//获取商品的id和商品的数量
		sku_id = $(this).prev().attr("sku_id");
		count = $(this).prev().val();
		count = parseInt(count) - 1;
		if (count <= 0) {
			return;
		}
		// 更新购物车中的纪录

		updata_cart_info(sku_id, count);
		if (error_updata == false) {
			$(this).prev().val(count);
			//计算商品的小计
			updata_goods_price($(this).parents('ul'));
			is_checked = $(this).parents('ul').find(':checkbox').prop('checked');
			if (is_checked) {
				// 更新页面信息
				updata_cart_info();
				updata();
			}
			$('.total_count').children("span").text(total);
		}
	});
	//删除购物车中的纪录
	// console.log($(".cart-list-td").children(".cl8").children("a"));
	$(".cl8 ").click(function () {
		$(".cl8 ").parent().remove();
	});
}