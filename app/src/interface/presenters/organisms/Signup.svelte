<script>
	import _foreach from 'lodash.foreach'

	import User from '/src/interface/gateways/database/UserRepository.js'

	const _user = new User

	let params = {
		userName: '',
		sex: '',
		age: '',
		prefecture: '',
		city: '',
		tel: '',
		email: '',
		password: '',
	}

	let errorMessage = ''
	//let isInput = false

	/* function init() {
		_user.get((error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}

		})
	} */

	function create() {

		let sendParams = {}

		_foreach(params, (value, key) => {
			sendParams[key] = value
		})

		_user.create(sendParams, (error, message, data) => {
			errorMessage = ''
			if (error) {
				errorMessage = message
				return
			}
			window.location.href = '/dashboard'
		})
	}

	//init()

</script>

<div class="row">
    <div class="col-md-4 offset-md-4">
        <h2 class="text-center">Sign Up</h2>
        <from>
			<div class="form-group">
				<label for="InputName" class="form-label">User Name</label>
				<div class="form-control mb10">
					<input class="form-control" type="text" bind:value={params.userName}>
				</div>
			</div>
			<div class="form-group">
				<label for="InputSex" class="form-label">Sex</label>
				<div class="maxl">
					<label class="radio inline ml-5">
						<input type="radio" name="gender" bind:value={params.sex}>
						<span>Man</span>
					</label>
					<label class="radio inline">
						<input type="radio" name="gender" bind:value={params.sex}>
						<span>Woman</span>
					</label>
					<label class="radio inline">
						<input type="radio" name="gender" bind:value={params.sex}>
						<span>Other</span>
					</label>
				</div>
			</div>
			<div class="form-group">
				<label for="InputAge" class="form-label">Age</label>
				<div class="form-control mb10">
					<input class="form-control" type="text" bind:value={params.age}>
				</div>
			</div>
			<div class="form-group">
				<label for="InputPrefecture" class="form-label">Prefecture</label>
				<div class="form-control mb10">
    				<input class="form-control" type="text" bind:value={params.prefecture}>
				</div>
			</div>
			<div class="form-group">
				<label for="InputCity" class="form-label">City</label>
				<div class="form-control mb10">
    				<input class="form-control" type="text" bind:value={params.city}>
				</div>
			</div>
			<div class="form-group">
				<label for="InputTel" class="form-label">Tel</label>
				<div class="form-control mb10">
    				<input class="form-control" type="text" bind:value={params.tel}>
				</div>
			</div>
			<div class="form-group">
				<label for="InputEmail" class="form-label">E-mail</label>
				<div class="form-control mb10">
    				<input class="form-control" type="text" bind:value={params.email}>
				</div>
			</div>
			<div class="form-group">
				<label for="InputPassword" class="form-label">Password</label>
				<div class="form-control mb10">
					<input class="form-control" type="password" bind:value={params.password}>
				</div>
			</div>
			<div class="d-grid gap-2 col-6 mx-auto">
				<button on:click|preventDefault={create} class="btn btn-primary mb10">Sign Up</button>
			</div>
		</from>
    </div>
</div>
