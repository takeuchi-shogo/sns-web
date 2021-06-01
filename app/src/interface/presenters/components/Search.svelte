<script>
	let option = []
</script>

<form>
	<h5>ユーザー検索</h5>
	<div class="form-group">
		<label class="control-label">性別</label>
		<div class="form-check form-check-inline">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
			<label class="form-check-label" for="inlineRadio1">男性</label>
		</div>
		<div class="form-check form-check-inline">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
			<label class="form-check-label" for="inlineRadio2">女性</label>
		</div>
	</div>
	<div class="form-group">
		<label class="control-label">居住地</label>
		<select class="form-select">
			<option selected>--項目を選んでください--</option>
			<option>{ option }</option>
		</select>
	</div>
	<div class="form-group">
		<label class="control-label">ニックネーム</label>
		<input class="form-control" type="text">
	</div>
	<button class="btn btn-primary">検索</button>
</form>
