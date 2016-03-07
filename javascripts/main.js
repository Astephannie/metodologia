var input_name = document.querySelector('#input_name');
var btn_name = document.querySelector('#btn_name');
var span_name = document.querySelector('#name');
var message = document.querySelector('#message');

btn_name.addEventListener('click', function() {
	var name = input_name.value;
	if (name.trim().length > 0) {
		span_name.textContent = name.trim();
		message.classList.remove("hidden");
	} else {
		message.classList.add("hidden");
	}
})