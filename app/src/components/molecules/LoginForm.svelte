<script>
    import LoginText from '/src/components/atoms/LoginText.svelte';
    //import PasswordText from '/src/components/atoms/PasswordText.svelte';
    import LoginButton from '/src/components/atoms/LoginButton.svelte';
</script>


<form class="form-signin">
    <div class="form-group">
        <label for="exampleInputEmail1" class="text-uppercase">Email</label>
        <LoginText type = { 'text' }/>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1" class="text-uppercase">Password</label>
        <LoginText type = { 'password' }/>
    </div>
    <div>
        <LoginButton/>
    </div>
</form>
