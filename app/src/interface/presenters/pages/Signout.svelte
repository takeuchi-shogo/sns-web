<script>

	import Me from '/src/interface/gateways/database/MeRepository.js';

	const _me = new Me

	function init() {
		_me.signout((error, message) => {
			window.location.href = '/'
		})
	}

	init()

</script>
