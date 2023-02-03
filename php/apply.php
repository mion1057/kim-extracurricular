<?php
    require_once("message.php");

    $name = $_POST["name"];
    $tel_hyp = $_POST["tel"];
    $tel = str_replace('-', '', $tel_hyp);
    $date = $_POST["date"];
    $url = "example.com/link2";

if(!$name || !$tel || !$date) 
{
    echo("<li>정보를 입력해 주세요!</li>");
}
else
{
    $con = mysqli_connect("localhost", "gusdn1832", "A357wmdrj!", "gusdn1832");
    $sql = "select * from reserve_data where tel='$tel'";
    $result = mysqli_query($con, $sql);

    $num_record = mysqli_num_rows($result);

    if ($num_record)
    {
        echo "<li>이미 예약된 번호입니다.</li>";
    }
    else
    {
        // DB 테이블에 정보입력
        $con = mysqli_connect("localhost", "gusdn1832", "A357wmdrj!", "gusdn1832");
        $sql = "insert into reserve_data(name, tel, date) ";
	    $sql .= "values('$name', '$tel', '$date')";

        mysqli_query($con, $sql);  // $sql 에 저장된 명령 실행

        // $num 정보 불러오고 8자리로 변환
        $sql = "select * from reserve_data where tel='$tel'";
        $result = mysqli_query($con, $sql);

        $row = mysqli_fetch_array($result);
        $index_AI = $row["num"];
        $num = sprintf('%08d', $index_AI);

        mysqli_close($con);  

        $messages = array(
            array(
                "to" => $tel,
                "from" => "01033528779",
                "kakaoOptions" => array(
                    "pfId" => "KA01PF22041206411o33TFWW9Sl71Ppp",
                    "templateId" => "KA01TP230126015632847zNuTqO5FCnB",
                    "variables" => array(
                        "#{name}" => $name,
                        "#{num}" => $num,
                        "#{date}" => $date,
                        "#{tel}" => $tel,
                        "#{url}" => $url
                    ),
                    "disableSms" => TRUE
                )
            ),
        );
        // print_r(send_messages($messages));
        send_messages($messages);

        echo("
            <script>
                location.href = '../index.html';
            </script>
        ");
    }
}
?>