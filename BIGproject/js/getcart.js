		// 计算被选中的商品的总件数和价格
		function updata(){
			// 获取所有被选中的商品的checkbox
			let total_count=0;
			let total_price=0;
			//:checked  选择器选取所有选中的复选框或单选按钮
			$(".cart-list-td").find(':checked').parents('ul').each(function(){
			 cot = $(this).find('.num-show').val();
			amout = $(this).children('.cl7').text();
				//计算总共的商品总件数和总价格
			 count= parseInt( cot);
			amount = parseFloat(amout);
				total_count += count;
				total_price += amount;
			});
			//设置被选中的商品的总件数和总价格
			$(".sett").find('span').text(total_price.toFixed(2));
			$(".sett").find('b').text(total_count);
			
		}
		//计算商品的小计
		function updata_goods_price(sk_ul){
			let count = sk_ul.find(".num-show").val();
			let price= sk_ul.children(".cl5").text();
			
			let amount = parseInt(count)*parseFloat( price);
			sk_ul.children(".cl7").text(amount);
			
		}
		// 商品的全选和不选
		$(".sett").find(":checked").change(function(){
			//获取全选元素的选中状态
			 is_checked= $(this).prop("checked");
			$(".cart-list-td").find(":checked").each(function(){
				$(this).prop('checked',is_checked)
				// 上面这一步是会被选中
			})
			updata();
		});
		//商品对应的checkbox 发生变化时，设置全选checkbox的状态
		$(".cart-list-td").find(":checkbox").change(function(){
		let check_len = $(".cart-list-td").find(":checked").length;
		let all_len =$(".cart-list-td").length;
			// is_checked= true;
			if(check_len<all_len){
				// is_checked = false;
				$(".sett").find(":checked").prop('checked',false);
			}else{
				$(".sett").find(":checked").prop('checked',true);
			}
			
				updata();		 
		});
		//更新购物车中商品的数量
		let error_updata = false;
		let total=0;
		function updata_cart_info(sku_id,count){
			csrf = $("input[name='waretoken']").val();
			params = {'sku_id':sku_id,'count':count,'waretoken':csrf}
			// 设置AJax为同步
			// $.ajaxSettings.async = false;
			// // 发起ajax post 请求，访问
			// $.post('')
		}
		//购物车中商品数量的增加
		$(".add-f").click(function(){
			sku_id = $(this).next().attr('sku_id');
			count= $(this).next().val();
			count= parseInt(count)+1;
			updata_cart_info(sku_id,count);
			if(error_updata==false){
				$(this).next().val(count);
				updata_goods_price($(this).parents("ul"));
				is_checked = $(this).parents('ul').find(':checked').prop('checked');
				if(is_checked){
					updata_cart_info(sku_id,count)
				}
				$('.total-count').children("span").text(total);
				updata_cart_info(sku_id,count)
			}
		});
		// 购物车商品的减少
		$(".cut-f").click(function(){
			//获取商品的id和商品的数量
			sku_id = $(this).prev().attr("sku_id");
			count= $(this).prev().val();
			count = parseInt(count)-1;
			if(count<=0){
				return
			}
				// 更新购物车中的纪录
			
				updata_cart_info(sku_id,count);
				if(error_updata==false){
					$(this).prev().val(count);
					//计算商品的小计
					updata_goods_price($(this).parents('ul'));
					 is_checked = $(this).parents('ul').find(':checkbox').prop('checked')
					     if (is_checked){
					     // 更新页面信息
					     updata_cart_info();	 
				}
					$('.total_count').children("span").text(total);
				}
		});
		//删除购物车中的纪录
		// console.log($(".cart-list-td").children(".cl8").children("a"));
		$(".cart-list-td").children(".cl8").children("a").click(function(){
		
			//获取对应商品的id
			let sku_id = $(this).parents('ul').find('.num-show').attr('sku_id');
			let csrf = $("input[name='waretoken']").val();
		let params = {'sku_id':sku_id,'waretoken':csrf}
			// 获取所有商品的ul
			sku_id = $("this").parents('ul');
			// //发起ajax请求
			 $.post('shanchu.php', params, function (data){
				 
				 
			 });
			
		});
		
		// class cartupdata(view)
		
		
		
		
		
		
		
		
		
		
		
		
		