$(document).ready(function(){

	$("body").click(function(){
		
		/*CSS styling*/

		$("h1").css({
			color: "#006666",
			textAlign: "center"
		});

		$(".purple").css({
			backgroundColor: "#ff9999",
			height: 100,
			width: 100,
		});

		$(".green").css({
			backgroundColor: "#4dff88",
			height: 100,
			width: "100%"
		});

		$(".blue").css({
			backgroundColor: "#3399ff",
			width: "100%",
			height: 10
		});

		$(".coral").css({
			backgroundColor: "#ff884d",
			height: 100,
			width: 100,	
		});
		
		$(".yellow").css({
			backgroundColor: "#ffff00",
			height: 100,
			width: "100%",
		});

		$(".gray").css({
				backgroundColor: "#7a7a52",
				width: "100%",
				height: 10
		});

		$(".click").css({
			width: 100,
			backgroundColor: "#ff6600",
			color: "#ffffff",
			fontSize: 32,
			fontWeight: "bold",
			padding: 10,
			textAlign: "center",
			/*margin: 10 auto,*/
		})

		$(".ball").css({
			position: "fixed",
			top: "40%",
			left: "30%",
			width: 100,
			height: 100,
			borderRadius: "50%",
			backgroundColor: "#9900cc",
		})

		$(".greenball").css({
				position: "fixed",
				top: "20%",
				left: "60%",
				backgroundColor: "#29a329",
		})

		/*Action*/
		$("h1").slideUp(1000, function(){
			$(".purple").animate({
				width: "100%",
				opacity: 0.5
			}, 1000, function() {
				$(".green").animate({
					width: 100,
					opacity: 0.5
				}, 1000, function(){
					$(".blue").animate({
						height: 100
					}, 1000, function(){
						$("h1").slideDown(1000)
					})
				})
			})	
		});

		$(".gray").animate({
				height: 100,
				opacity: 0.5
		}, 1000, function(){
			$(".yellow").animate({
				width: 100,
				opacity: 0.5
			},500,function(){
				$(".coral").animate({
					width: "100%",
					opacity: 0.5
				},2000)
			})
		})

		$(".click").click(function(){
			$(".ball").show();
			$(".ball").animate({
				width: 300,
				height: 300,
			},1000, function(){
				$(".ball").fadeOut(500, function(){
					$(".greenball").fadeIn(1000);
				});
			});

		})
	});	
});