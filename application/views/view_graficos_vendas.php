<?php
defined('BASEPATH') or exit('No direct script access allowed');

$this->load->view('view_sidebar');

if (!isset($this->session->login)) {
    redirect(base_url('index.php/BLL_Usuarios'));
}

?>
<html>
<center>
    <div class="container bannerTec">

        <head>
            <html>

            <head>
                <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                <script type="text/javascript">
                    google.charts.load("current", {
                        packages: ["corechart"]
                    });
                    google.charts.setOnLoadCallback(drawChart);

                    function drawChart() {
                        var data = google.visualization.arrayToDataTable([
                            ['Produto', 'Vendas'],
                            <?php
                                foreach($results as $row){
                                    echo "['".$row["nome"]."',".$row["Qtd"]." ],";
                                }
                            ?>
                        ]);

                        var options = {
                            title: 'Grafico De Vendas',
                            is3D: true,
                        };

                        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
                        chart.draw(data, options);
                    }
                </script>
            </head>

        <body>
            <div id="piechart_3d" style="width: 900px; height: 500px;"></div>
        </body>

</html>
</div>
</center>

</html>

</div>