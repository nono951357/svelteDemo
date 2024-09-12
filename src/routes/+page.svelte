<script>
    var a = 0
    var b = 0
</script>
<h1>Eredményjelző</h1>
<table>
    <tr>
        <th>{a}</th>
        <th> - </th>
        <th>{b}</th>
    </tr>
    <tr>
        <td><button on:click={() => a++}>+</button></td>
        <td></td>
        <td><button on:click={() => b++}>+</button></td>
    </tr>


    <tr>
        <td><button on:click={() => {
            if (a > 0) {
                a--
            }
        }}>-</button></td>
        <td></td>
        <td><button on:click={() => {
            if (b > 0) {
                b--
            }
        }}>-</button></td>
    </tr>


</table>

<style>
        h1 {
            text-align:center;
            font-size: 70px;
        }
        td, th {
            text-align: center;
            width: 200px;
            font-size: 30px;
        }
        th {
            font-size: 50px;
        }
        table {
            margin: 0 auto;
        }
        button {
            all: unset;
            display:inline-block;
            cursor:pointer;
            border: solid 2px black;
            padding: 10px;
            margin: 20px;
            border-radius:10px;
            box-shadow: 5px 5px black;
            width: 70px;
            height:40px;
        }
        a {
            all: unset;
            display:inline-block;
            cursor:pointer;
            border: solid 2px black;
            padding: 10px;
            margin: 20px;
            border-radius:10px;
            box-shadow: 5px 5px black;
            width: 70px;
            height:40px;
        }
        a:hover {
            background-color: lightblue;
        }
</style>
