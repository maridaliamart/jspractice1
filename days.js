<!DOCTYPE html>
<html>
<body>

<h2>JavaScript switch</h2>

<p id="demo"></p>

<script>
let day;
switch (new Date().getDay()) {
    case 0:
      day = "6";
      break;
    case 1:
      day = "5";
      break;
    case 2:
       day = "4";
      break;
    case 3:
      day = "3";
      break;
    case 4:
      day = "2";
      break;
    case 5:
      day = "1";
      break;
    case 6:
      day = "0";
  }
  document.getElementById("demo").innerHTML = "Days until Saturday: " + day;
</script>

</body>
</html>