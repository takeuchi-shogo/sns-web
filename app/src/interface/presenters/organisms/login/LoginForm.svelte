<script>
    import Me from '/src/interface/gateways/database/MeRepository.js'

	const _me = new Me

	let params = {
		id: '',
		password: '',
	}

	let errorMessage = ''

	function signin() {
		_me.signin(params.id, params.password, (error, message) => {
			errorMessage = ''
			if (error) {
				errorMessage = message
				return
			}
			window.location.href = '/dashboard'
		})
	}
</script>

<div class="row col-4 offset-md-4">
	<h2 class="text-center">Login Now</h2>
	<form class="form-signin">
		{ #if errorMessage != '' }
			<p>{ errorMessage }</p>
		{ /if }
		<div class="form-group">
			<label for="exampleInputEmail1" class="text-uppercase">Login ID</label>
			<div class="mb10">
				<input class="form-control" type="text" bind:value={ params.id }>
			</div>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1" class="text-uppercase">Password</label>
			<div class="mb10">
				<input class="form-control" type="password" bind:value={ params.password }>
			</div>
		</div>
		<div class="d-grid gap-2 col-6 mx-auto">
			<button on:click|preventDefault={ signin } class="btn btn-primary mb10">ログイン</button>
		</div>
	</form>
</div>
