document.addEventListener('DOMContentLoaded', function() {
	const collapses = document.querySelectorAll('.augurio-collapse .collapse');
	collapses.forEach(collapse => {
		const titleBox = collapse.querySelector('.title-box');
		titleBox.addEventListener('click', function() {
			// 關閉所有 collapse
			collapses.forEach(c => {
				c.querySelector('.title-box').removeAttribute('data-expanded');
				c.querySelector('.contents-box').style.display = 'none';
			});
			// 展開目前這個 collapse
			titleBox.setAttribute('data-expanded', 'true');
			collapse.querySelector('.contents-box').style.display = 'block';
		});
		// 預設展開
		if (titleBox.getAttribute('data-expanded') === 'true') {
			collapse.querySelector('.contents-box').style.display = 'block';
		} else {
			collapse.querySelector('.contents-box').style.display = 'none';
		}
	});
});
