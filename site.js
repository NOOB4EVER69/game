bt1.onclick = function get() {
    document.getElementById("fi").innerHTML = `
    <div id="sec" id="dv1">
    title :<input type="text" id="int1">
    <br>
    <br>
    bgcolor :<input type="text" id="int2">
    <br>
    <br>
    text 0 :<input type="text" id="int3">
    <br>
    <br>
    text 1 :<input type="text" id="int4">
    <br>
    <br>
    text 2 :<input type="text" id="int5">
    <br>
    <br>
    text 0 color :<input type="text" id="int6">
    <br>
    <br>
    text 1 color :<input type="text" id="int7">
    <br>
    <br>
    text 2 color :<input type="text" id="int8">
    <button id="next">next</button>
</div>
    
    `




    next.onclick = function r() {
        var titel1 = document.getElementById("int1").value;
        var bgcolor1 = document.getElementById("int2").value;
        var text1t = document.getElementById("int3").value;
        var text2t = document.getElementById("int4").value;
        var text3t = document.getElementById("int5").value;
        var text1c = document.getElementById("int6").value;
        var text2c = document.getElementById("int7").value;
        var text3c = document.getElementById("int8").value;
        document.title = titel1;
        document.body.style.backgroundColor = bgcolor1;
        document.getElementById("fi").innerHTML = `
        <div id="third">
        <center><h2 id="h22" style="color: ${text1c};">${text1t}</h2></center>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <b><h3 id="h33" style="color: ${text2c};">${text2t}</h3></b>
        <br>
        <b><h3 id="h333" style="color: ${text3c};">${text3t}</h3></b>
    
        </div>
        `
        }
}