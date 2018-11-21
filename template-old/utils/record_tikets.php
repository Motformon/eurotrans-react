<?php
/**
 * Created by PhpStorm.
 * User: 45-parallel.org
 * Date: 21.09.2018
 * Time: 15:45
 */

$arPostData = array();
$index = 0;
foreach ($_POST as $key => $prop)
{
    if (isset($prop)&&!(empty($prop)))
    {
        if ($prop == 'border') $index++;  else $arPostData[$index][] = $prop;
    }
    else
    {
        $error = 'Ошибка полей';
    }
}
//echo '<pre>';print_r($arPostData);echo '</pre>';
if (!(isset($error))&&empty($error))
{
    if (!(function_exists(prepare_fields)))
    {
        function prepare_fields($arPostData)
        {
            $i=1;
            $fields = array();
                foreach ($arPostData as $key => $prop)
                {
                    $fields['vedomost_id'] = $prop[10];
                    $fields['data_b'] = $prop[3];
                    $fields['doc_type'] = 123;
                    $fields['document_n'] = $prop[7];
                    $fields['type_seat'] = 2;
                    $fields['seat'] = $i++;

                    $fields['f'] = $prop[0];
                    $fields['i'] = $prop[1];
                    $fields['o'] = $prop[2];
                    $fields['gender'] = 1;
                    $fields['info'] = 'test';
                    $fields['to'] = $prop[11];
                    $fields['from'] = $prop[12];
                    $fields['price'] = $prop[13];
                    $fields['oksm'] = $prop[5];
                    $fields['telephone'] = $prop[9];
                }
            return $fields;
        }
    }
    $arTest = prepare_fields($arPostData);
   // echo '<pre>';print_r($arTest);echo '</pre>';
    $fields = http_build_query($arTest);
   // $fields2='vedomost_id=2096&data_b=06-09-2018&doc_type=123&document_n=486468648&type_seat=2&seat=1&f=SER&i=SER&o=SER&gender=1&info=test&to=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&from=%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C&price=2700&oksm=%D0%A0%D0%9E%D0%A1%D0%A1%D0%98%D0%AF&telephone=%2B418618686';

    echo '<pre>';echo $fields;echo '</pre>';
   // echo '<pre>';echo $fields2;echo '</pre>';


    if (!(function_exists(prepare_headers)))
    {
        function prepare_headers()
        {
            $headers = [];
            $headers[] = 'Content-type: application/json; charset=utf-8';
            $headers[] = 'Accept: application/json';
            return $headers;
        }
    }

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://testerp.evrotrans.net/new_passenger.php?".$fields,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_HTTPHEADER => prepare_headers(),
        ));

        $response = curl_exec($curl);
        if ($response === false)
        {
            echo curl_error($curl);
        }
        else
        {
            echo $response;
        }

        curl_close($curl);

        $response = json_decode($response);
        $arTikets = $response;
        echo '<pre>';print_r($arTikets);echo '</pre>';
}
else
{
    echo $error;
    die;
}