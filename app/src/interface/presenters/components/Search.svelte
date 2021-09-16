<script>
	let option = []
</script>

<style lang="scss">



</style>

<form>
	<h5>ユーザー検索</h5>
	<div class="form-group">
		<label for="sexInput" class="control-label">性別</label>
		<div id="sexInput" class="form-check form-check-inline">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
			<label class="form-check-label" for="inlineRadio1">男性</label>
		</div>
		<div id="sexInput" class="form-check form-check-inline">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
			<label class="form-check-label" for="inlineRadio2">女性</label>
		</div>
	</div>
	<div class="form-group">
		<label for="adress-select" class="control-label">居住地</label>
		<select id="adress-select" class="form-select">
			<option selected>--項目を選んでください--</option>
			<option>{ option }</option>
		</select>
	</div>
	<div class="form-group">
		<label for="nn-Input" class="control-label">ニックネーム</label>
		<input id="nnInput"class="form-control" type="text">
	</div>
	<button class="btn btn-primary">検索</button>
</form>
