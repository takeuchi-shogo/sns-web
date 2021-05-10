<script>
    import InputText from '/src/components/atoms/InputText.svelte';
    import Radio from '/src/components/atoms/Radio.svelte';

    function signup() {
        window.location.href = "/#/hm"
    }
</script>

<from>
    <div class="form-group">
        <label for="InputName" class="form-label">User Name</label>
        <InputText type = {'text'} id = {'InputName'}/>
    </div>
    <div class="form-group">
        <label for="InputSex" class="form-label">Sex</label>
        <Radio value = {'man'}/>
        <Radio value = {'woman'}/>
    </div>
    <div class="form-group">
        <label for="InputOld" class="form-label">Old</label>
        <InputText type = {'text'}/>
    </div>
    <div class="form-group">
        <label for="InputPrefecture" class="form-label">Address Prefecture</label>
        <InputText type = {'text'}/>
    </div>
    <div class="form-group">
        <label for="InputCity" class="form-label">City</label>
        <InputText type = {'text'}/>
    </div>
    <div class="form-group">
        <label for="InputTel" class="form-label">Tel</label>
        <InputText type = {'text'}/>
    </div>
    <div class="form-group">
        <label for="InputEmail" class="form-label">E-mail</label>
        <InputText type = {'text'}/>
    </div>
    <div class="form-group">
        <label for="InputPassword" class="form-label">Password</label>
        <InputText type = {'password'}/>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button on:click={signup} class="btn btn-primary mb10">Sign Up</button>
    </div>
</from>