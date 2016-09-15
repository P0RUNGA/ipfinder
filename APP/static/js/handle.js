$(document).ready(function() {
	function get_ips() {
		$.get("/ips/", function(ret) {
			$('#ips').html(ret)
		})
	}

	var timer;
	$('#ip').bind('input', function() {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			var ip = $("#ip").val();
			$.get(
				"/handle/", { 'ip': ip },
				function(ret) {
					$('#result').html(ret)
					get_ips();
				});
		}, 700);
	});
	get_ips(); //页面初次加载时运行
});
