<?php
defined('BASEPATH') or exit('No direct script access allowed');

$this->load->view('view_sidebar');

if (!isset($this->session->login)) {
    redirect(base_url('index.php/BLL_Usuarios'));
}

?>
<html>
<center>
    <div class="container bannerProdutos">
        <h1 class="display-4">Relatorio de Produtos</h1>
        <head>
            <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <script type="text/javascript">
                google.charts.load('current', {
                    'packages': ['bar']
                });
                google.charts.setOnLoadCallback(drawStuff);

                function drawStuff() {
                    var data = new google.visualization.arrayToDataTable([
                        ['Produto', 'Estoque'],
                        <?php
                            foreach($results as $row){
                                echo "['".$row["nome"]."', ".$row["quantidade"]."],";
                            }
                        ?>
                    ]);

                    var options = {
                        width: 800,
                        legend: {
                            position: 'none'
                        },
                        chart: {
                            title: 'Produtos e Estoque',
                            subtitle: 'Produtos com baixo estoque'
                        },
                        axes: {
                            x: {
                                0: {
                                    side: 'top',
                                    label: 'Produtos'
                                } // Top x-axis.
                            }
                        },
                        bar: {
                            groupWidth: "90%"
                        }
                    };

                    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
                    // Convert the Classic options to Material options.
                    chart.draw(data, google.charts.Bar.convertOptions(options));
                };
            </script>
        </head>

        <body>
            <div id="top_x_div" style="width: 900px; height: 500px;"></div>
        </body>
    </div>
</center>

</html>


</div>