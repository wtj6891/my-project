<template>
  <div class='create-content'>
    <label>useranme</label>
    <input type="text" id="username" name="firstname" placeholder="Your useranme..">
    <label>password</label>
    <input type="text" id="password" name="lastname" placeholder="Your password..">
    <label>repassword</label>
    <input type="text" id="repassword" name="lastname" placeholder="Your repassword..">
    <input type="button" value="create">
  </div>
</template>

<script scoped>
  export default {}
</script>

<style>

  .create-content {
    width: 480px;

  }

  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=button] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
</style>
