<?php
    require_once("message.php");

    $name = $_POST["name"];
    $tel = $_POST["tel"];
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

    if (!$num_record)
    {
        echo "<li>예약이 필요한 번호입니다.</li>";
    }
    else
    {
        // DB 테이블에 정보 변경
        $con = mysqli_connect("localhost", "gusdn1832", "A357wmdrj!", "gusdn1832");
        $sql = "update reserve_data set name = '$name', date = '$date' where tel='$tel'";

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