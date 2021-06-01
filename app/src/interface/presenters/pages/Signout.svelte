<script>

	import User from '/src/interface/gateways/database/UserRepository.js';

	const _user = new User

	function init() {
		_user.signout((error, message) => {
			window.location.href = '/'
		})
	}

	init()

</script>
