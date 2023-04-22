<script>

	import Me from '/src/database/MeRepository.js';

	const _me = new Me

	function init() {
		_me.signout((error, message) => {
			window.location.href = '/'
		})
	}

	init()

</script>
