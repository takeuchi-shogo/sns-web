<script>
    export let value
</script>

<div class="maxl">
    <label class="radio inline"> 
        <input type="radio" name="gender" value={value} >
        <span>{value}</span> 
    </label>
    <!-- <label class="radio inline"> 
        <input type="radio" name={gender} value={value}>
        <span>{value}</span> 
    </label> -->
</div>