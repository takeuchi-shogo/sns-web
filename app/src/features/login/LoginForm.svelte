<script>

	import Me from '/src/database/MeRepository.js'

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

<div class="signin-form-container">
	<div class="row col-md-4 offset-md-4 signin-page">
		<form class="signin-form d-grid gap-4 card">
			<div class="signin-form-header">Application Login</div>
			{ #if errorMessage != '' }
				<p>{ errorMessage }</p>
			{ /if }
			<div class="signin-form-body" >
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
				<div>Forgot Password?</div>
			</div>
			<div class="d-grid gap-2">
				<button on:click|preventDefault={ signin } class="btn btn-primary">ログイン</button>
			</div>
		</form>
	</div>
</div>

<style></style>
