<?php
/* Установка русской локали */
#setlocale(LC_ALL, 'ru_RU.UTF-8');
#mysql_query("SET NAMES utf8");





// Функция генерации паролей
function generatePassword($length = 8)
{
  $chars = 'abdefhiknrstyzABDEFGHKNQRSTYZ23456789';
  $numChars = strlen($chars);
  $string = '';
  for ($i = 0; $i < $length; $i++) 
  {
    $string .= substr($chars, rand(1, $numChars) - 1, 1);
  }
  return $string;
}


############# Запись ошибок в лог-файл
function db_error()
{
	echo '<center>Ошибка подключения к БД</center>';
}

function ShowError($errn,$title,$body="",$_show=1)  {
    $fp=fopen("logs/error.txt",'a+');
    $str="\n".date("d.m.y H:i:s")."\n$errn: $title\n".strip_tags($body)."\n";
       fwrite($fp,$str);
    fclose($fp);
    $_str = "<div class='errortitle'>$title</div>
              <div class='errorbody'>$body</div>";
    if($_show==1) echo $_str;
    else return $_str;
}

############# Запись событий в лог-файл

function ShowSuccess($sn,$body="",$_show=1)  {
        $fp=fopen("logs/success.txt",'a+');
        $str="\n".date("d.m.y H:i:s")."\n$sn: ".strip_tags($body)."\n";
        fwrite($fp,$str);
        fclose($fp);
        $_str="<div class='errortitle'>$body</div>";
        if($_show==1) echo $_str;
        else return $_str;
}

############# Соединение с БД

function db_connect($_cfghost,$_cfguser,$_cfgpass,$_cfgdb) {
        
		$mlink = @mysql_connect($_cfghost,$_cfguser,$_cfgpass);
		//mysql_set_charset( 'utf8' );
    if($mlink==false) {
        ShowError("dberror_001","Ошибка при установлении соединения с базой данных","Ответ сервера:<br>".mysql_error());
        return false;
    } else {
        if(@mysql_select_db($_cfgdb, $mlink)===false) {
            ShowError("dberror_002","Ошибка при установлении соединения с базой данных","Ответ сервера:<br>".mysql_error());
            return false;
        }
    }
return $mlink;
}
//////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////
// Функция авторизации
function Auth($user_name, $user_passwd)
{
	//echo $lnk."Чего мы тут ввели?";
	$r=mysql_query ("SELECT * FROM users WHERE login='".$user_name."'");
	//echo":<br>===="."SELECT * FROM users WHERE login='".$user_name."'  =  ";
	if(mysql_num_rows($r)<1) return false;
	else 
    	{
			//echo"<br>Логин то мы нашли!";
    		$arr = mysql_fetch_array ($r,0);
		if (md5('pswd'.$user_passwd.'sol-sit')==$arr['password'])
		{
			//echo"<br>Пароль тоже гуд ;)";
			date_default_timezone_set("Europe/Moscow");
			
			mysql_query ("UPDATE users SET session='".session_id()."', last_ip='".$_SERVER['REMOTE_ADDR']."', last_login='".date("Y-m-d H:i:s")."', state=1 WHERE login='".$user_name."' AND password='".md5('pswd'.$user_passwd.'sol-sit')."' ");
			$r2=mysql_query ("SELECT * FROM users WHERE login='".$user_name."'");
			$arr2 = mysql_fetch_array ($r2, 0);
			return $arr2; 
		}
		else 
		{
			return false;
		}
	}
}


// Функция проверки был ли авторизирован пользователь
function checkAuth() 
{
	//echo"Тест прошелся тут";
    if(strlen(session_id())<5) return false;
    $r=mysql_query ("SELECT * FROM users WHERE session='".session_id()."'");
    if(mysql_num_rows($r)<1) return false;
    else 
    {
	
    	$arr = mysql_fetch_array ($r, 0);
    	if($arr['last_ip'] == $_SERVER['REMOTE_ADDR'] && $arr['state'] == 1)
	{
			date_default_timezone_set("Europe/Moscow");
			
			mysql_query ("UPDATE users SET session='".session_id()."', last_ip='".$_SERVER['REMOTE_ADDR']."', last_login='".date("Y-m-d H:i:s")."', state=1 WHERE login='".$arr['login']."'  ");
		return $arr; 
	}
    	else {
		return false;
		}
    
    }
}


// Проверка правильности введенного email
function is_email($email)
{
	if (eregi("^([_a-z0-9-]+)(\.[_a-z0-9-]+)*@([a-z0-9-]+)(\.[a-z0-9-]+)*(\.[a-z]{2,4})$", $email))
	{
		return 1;
	}
	return 0;
}


// функция добавляет слеши к кавычкам
function addsl($res)
{
	if (get_magic_quotes_gpc()) return($res);
	else return(addslashes($res));
}


// Проверка прав пользователя есть ли доступ к модулю или нет принимает 
// права пользователя ($rights) из таблицы users  и бит тестируемого модуля ($test)
// В зависимости от результата возвращает либо  false либо true
function CheckPerm($rights, $test) {

    $res = intval($test) & intval($rights);
    if($res==$test) return true;
    else return false;

}
/*
function GetPerm($perm) {
    GLOBAL $_cfg;
    if(array_key_exists(strtolower($perm), $_cfg['permissions'])) return $_cfg['permissions'][$perm];
    else return false;
}
*/


//Проверка прав пользователя на модуль
function CheckPerm_modul($lnk, $modul_name, $dostup){

	//получаем данные модуля в масив $modul_bit
	$modul=mysql_query ($lnk, "SELECT * FROM modules WHERE name='".$modul_name."'");
	$modul_bit =mysql_fetch_array ($modul, 0);

	// Проводим проверку доступен ли данный модуль авторизировавшемуся пользователю в соответствии с его правами 
	// Если прав на использование модуля нет то выдать соответствующее сообщение
	if (!CheckPerm($dostup, $modul_bit['bit']))
	{
		return false;
	}else{
		return true;
		}
}

//Получение прав пользователя внутри модуля возвращает бит прав в запрошеном модуле
function CheckPerm_in_modul($lnk, $modul_name, $id_user, $id_employer){
	//Получаем уровень прав пользователя в модуле
	$perm_in_modul=mysql_query ($lnk, "SELECT * FROM perm_".$modul_name."_users WHERE user_id=".$id_user." AND company_id=".$id_employer."");
	if(mysql_num_rows($perm_in_modul)<1)
	{
	$perm_in_modul_bit=0;
	
	}else
	{
	$perm_in_modul_arr = mysql_fetch_array ($perm_in_modul, 0);
	$perm_in_modul_bit=$perm_in_modul_arr['perm'];
	}
	
	return $perm_in_modul_bit;

	
}

// Проверка пользователя на права рута возврашает true если права root-а есть
function CheckPerm_root($lnk, $dostup){

	//получаем данные бита root прав на модули
	$root_perm=mysql_query ($lnk, "SELECT * FROM modules WHERE name='root'");
	$root_perm_bit = mysql_fetch_array ($root_perm, 0);

	// Проверяем пользователя на права рута
	if (CheckPerm($dostup, $root_perm_bit['bit']))
	{
		return true;
	
	}else
	{
		return false;
	}

	
	
}

// Проверка на права пользователя на отдельную часть модуля
function CheckPerm_sub_mod($lnk, $rights, $sub_mod, $modul_name) {

$perm_sub_mod=mysql_query ($lnk, "SELECT * FROM perm_".$modul_name." WHERE name='".$sub_mod."'");
if (mysql_num_rows($perm_sub_mod)>0)
	{
		$perm_sub_mod_arr = mysql_fetch_array ($perm_sub_mod, 0);

		if (CheckPerm($rights, $perm_sub_mod_arr['bit'])) return true;
		else return false;
	}
	else 
	{
		return false;
		}
}


// ФУНКЦИИ МОДУЛЕЙ

//Получение списка ведомостей первый вариант ()

function GetVedomosty_mod($lnk, $query) {

		
		while($vedomosti_arr=mysql_fetch_array($query))
		{
			$reis_query=mysql_query ("SELECT * FROM `reisy` WHERE id=".$vedomosti_arr['reis_id']." ;") or die(mysql_error());
			$reis_arr=mysql_fetch_array($reis_query); 
			
			$passengers_query=mysql_query ("SELECT * FROM `passengers` WHERE vedomost_id=".$vedomosti_arr['id']." AND type_seat!=5 ;") or die(mysql_error());
			$passengers_num=mysql_num_rows($passengers_query); 
			
			
			
			echo"
			<div>
				<div id=vedomost_".$vedomosti_arr['id']." onclick=\"return SendForm2(edit_form,document.getElementById( 'edit_vedomost_".$vedomosti_arr['id']."' ));\">
					
					Рейс: <b>".$reis_arr['otkuda']." - ".$reis_arr['kuda']."</b><br>
					
					Дата и время отправки: <b>".date_format(new DateTime($vedomosti_arr['data_go']), 'd-m-Y')." | ".$vedomosti_arr['time_go']."</b><br>
					
					Пассажиры: <b>".$passengers_num."</b>
					<hr>
					Примечания: <i>".$vedomosti_arr['info']."</i>
					<form id=\"edit_vedomost_".$vedomosti_arr['id']."\" name=\"edit_vedomost_".$vedomosti_arr['id']."\" action=\"/modules/vedomosti/edit_form.php\" onsubmit=\"return SendForm2(edit_form,this);\">
						<input type=hidden name=vedomost_id value=".$vedomosti_arr['id'].">					
					</form>
						<br>

				</div>
			</div>
			
				";
			
		}	
}

//Получение списка ведомостей второй вариант ()

function GetVedomosty_mod2($lnk, $query) {

		echo"
			<table class=\"mody_table\" style=\"font-size:12px;\">
			
				<td><b>Рейс</b></td>
				<td><b>Дата</b></td>
				<td><b>Пассажиры</b></td>
				<td></td>
			
			
			";
			
		while($vedomosti_arr=mysql_fetch_array($query))
		{
			$reis_query=mysql_query ("SELECT * FROM `reisy` WHERE id=".$vedomosti_arr['reis_id']." ;") or die(mysql_error());
			$reis_arr=mysql_fetch_array($reis_query); 
			
			$passengers_query=mysql_query ("SELECT * FROM `passengers` WHERE vedomost_id=".$vedomosti_arr['id']." AND type_seat!=5;") or die(mysql_error());
			$passengers_num=mysql_num_rows($passengers_query); 
			
			
			
			
			echo"
			<tr title='".$vedomosti_arr['info']."' onclick=\"return SendForm2(edit_form,document.getElementById( 'edit_vedomost_".$vedomosti_arr['id']."' ));\">
				<td nowrap>".$reis_arr['time_start']." | ".$reis_arr['otkuda']." - ".$reis_arr['kuda']."</td>
				<td nowrap>".date_format(new DateTime($vedomosti_arr['data_go']), 'd-m-Y')."</td>
				<td nowrap>".$passengers_num."</td>
				<td>
					<form id=\"edit_vedomost_".$vedomosti_arr['id']."\" name=\"edit_vedomost_".$vedomosti_arr['id']."\" action=\"/modules/vedomosti/edit_form_v1.php\" onsubmit=\"return SendForm2(edit_form,this);\">
						<input type=hidden name=vedomost_id value=".$vedomosti_arr['id'].">					
					</form>				
				</td>

			</tr>
			";
			
		}
		echo "			</table>";	
}


//Получение списка ведомостей третий вариант для проверок ()

function GetVedomosty_mod3($lnk, $query) {

		echo"
			<table class=\"mody_table\" style=\"font-size:12px;\">
			
				<td><b>Рейс</b></td>
				<td><b>Дата</b></td>
				<td><b>Пассажиры</b></td>
				<td></td>
			
			
			";
			
		while($vedomosti_arr=mysql_fetch_array($query))
		{
			$reis_query=mysql_query ("SELECT * FROM `reisy` WHERE id=".$vedomosti_arr['reis_id']." ;") or die(mysql_error());
			$reis_arr=mysql_fetch_array($reis_query); 
			
			$passengers_query=mysql_query ("SELECT * FROM `passengers` WHERE vedomost_id=".$vedomosti_arr['id']." AND type_seat!=5;") or die(mysql_error());
			$passengers_num=mysql_num_rows($passengers_query); 
			
			
			
			
			echo"
			<tr title='".$vedomosti_arr['info']."' onclick=\"return SendForm2(edit_form,document.getElementById( 'edit_vedomost_".$vedomosti_arr['id']."' ));\">
				<td nowrap>".$reis_arr['time_start']." | ".$reis_arr['otkuda']." - ".$reis_arr['kuda']."</td>
				<td nowrap>".date_format(new DateTime($vedomosti_arr['data_go']), 'd-m-Y')."</td>
				<td nowrap>".$passengers_num."</td>
				<td>
					<form id=\"edit_vedomost_".$vedomosti_arr['id']."\" name=\"edit_vedomost_".$vedomosti_arr['id']."\" action=\"/modules/vedomosti/check_vedomost/list_vedomost.php\" onsubmit=\"return SendForm2(edit_form,this);\">
						<input type=hidden name=vedomost_id value=".$vedomosti_arr['id'].">					
					</form>				
				</td>

			</tr>
			";
			
		}
		echo "			</table>";	
}


// Получение списка автобусов

function GetBuses_mod($lnk, $query){

echo"
	<table class=\"table_bus mody_table\" width=\"100%\" id=\"buses\">
		<tr>

			<td>Гос номер</td>
			<td width=\"\">Общее кол-во мест</td>
			<td width=\"\">Мест на 2-ом этаже</td>
			<td width=\"\">Мест на 1-ом этаже</td>
			<td width=\"\">Мест в кабине</td>
			<td width=\"\">ОТК</td>
			<td width=\"\">За дверью</td>
			<td width=\"\">Лежаки</td>
			<td width=\"\">Телефон водителя</td>
			<td width=\"\">Дополнительно</td>
		</tr>
		
	";

	while($buses_arr=mysql_fetch_array($query))
		{
			
			echo"
				<tr>

					<td id=\"number:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['number']."</td>
					<td width=\"\" id=\"seats:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['seats']."</td>
					<td width=\"\" id=\"seat2:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['seat2']."</td>
					<td width=\"\" id=\"seat1:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['seat1']."</td>
					<td width=\"\" id=\"seats_k:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['seats_k']."</td>
					<td width=\"\" id=\"otk:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['otk']."</td>
					<td width=\"\" id=\"out_dor:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['out_dor']."</td>
					<td width=\"\" id=\"sunbeds:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['sunbeds']."</td>
					<td width=\"\" id=\"phone:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['phone']."</td>
					<td width=\"\" id=\"info:".$buses_arr['id']."\" contenteditable=\"true\">".$buses_arr['info']."</td>
				</tr>
			
				";
		}	
	
	
	
	echo"	</table>";


}



// Получение списка Рейсов

function GetReisy_mod($lnk, $query){
	
echo	'
<script>		
		$(function() {
		
		$( "#del_reys_button" ).button();

	});

function show_status_reis(id_div){
	$(function(){
    //var message_status = $("#status");
    
    			$("#"+id_div).show();
				//message_status.text(data);
				//hide the message
				setTimeout(function(){$("#"+id_div).hide()},3000);
			
    
	});
}

</script>	
	';
	
	while($reisy_arr=mysql_fetch_array($query))
		{
			
			if($reisy_arr['status']==1) 
				{			
							$status_radio="<input type=\"radio\" id=\"status1_r_".$reisy_arr['id']."\" name=\"status_r\" checked=\"checked\" value=1 onchange=\"return SendForm2(info_reys_id".$reisy_arr['id'].",document.getElementById( 'update_reys_id".$reisy_arr['id']."' ));\" onclick=\"show_status_reis('info_reys_id".$reisy_arr['id']."');\"><label for=\"status1_r_".$reisy_arr['id']."\">Активен</label>
							<input type=\"radio\" id=\"status2_r_".$reisy_arr['id']."\" name=\"status_r\" value=0 onchange=\"return SendForm2(info_reys_id".$reisy_arr['id'].",document.getElementById( 'update_reys_id".$reisy_arr['id']."' ));\" onclick=\"show_status_reis('info_reys_id".$reisy_arr['id']."');\"><label for=\"status2_r_".$reisy_arr['id']."\">Не активен</label>";
							
							}
						
			if($reisy_arr['status']==0) 
				{			
							$status_radio="<input type=\"radio\" id=\"status1_r_".$reisy_arr['id']."\" value=1 name=\"status_r\" onchange=\"return SendForm2(info_reys_id".$reisy_arr['id'].",document.getElementById( 'update_reys_id".$reisy_arr['id']."' ));\" onclick=\"show_status_reis('info_reys_id".$reisy_arr['id']."');\"><label for=\"status1_r_".$reisy_arr['id']."\">Активен</label>
							<input type=\"radio\" id=\"status2_r_".$reisy_arr['id']."\" name=\"status_r\" value=0 checked=\"checked\" onchange=\"return SendForm2(info_reys_id".$reisy_arr['id'].",document.getElementById( 'update_reys_id".$reisy_arr['id']."' ));\" onclick=\"show_status_reis('info_reys_id".$reisy_arr['id']."');\"><label for=\"status2_r_".$reisy_arr['id']."\">Не активен</label>";
							
							}
		
			echo "<script>
			$(function() {
		
				$( \"#radioset_reis_".$reisy_arr['id']."\" ).buttonset();
			
			});
		
			</script>
		
			";
			
			echo"
				<div id=reis_".$reisy_arr['id']." >
					<div id=\"info_reys_id".$reisy_arr['id']."\" style=\"position: absolute; background: #4682B4; padding: 10px 15px; display:  none; color: #fff;\">сохранено</div>			
					<div>
					<b>".$reisy_arr['time_start']." | ".$reisy_arr['otkuda']." - ".$reisy_arr['kuda']."</b><br>
					
					Растояние: ".$reisy_arr['rasstoyanie']."<br>
					
					Время в пути: ".$reisy_arr['time_go']."<br>
					

						<div id=\"radioset_reis_".$reisy_arr['id']."\" >
							<form id=\"update_reys_id".$reisy_arr['id']."\" name=\"update_reys_id".$reisy_arr['id']."\" action=\"/modules/reisy/update_status.php\" onsubmit=\"return SendForm2(info_reys_id".$reisy_arr['id'].",this);\">							
							".$status_radio."<!--<button id=\"del_reys_button\">в архив</button>-->
							<input type=\"hidden\" name=\"id\" value=\"".$reisy_arr['id']."\">							
							</form>
							
						</div>
						</div><br>

				</div>
			
				";
		}	
}


// Получение списка Рейсов вариант2

function GetReisy_mod2($lnk, $query){
	
	echo"
<table cellpadding=\"4\" cellspacing=\"0\" class=\"mody_table\" style=\"font-size:12px;\">
	
		<th rowspan=\"2\"  >
			<p align=\"justify\">Рейс №</p>
		</th>
		<th rowspan=\"2\" >
			<p align=\"justify\">Откуда</p>
		</th>
		<th rowspan=\"2\"  >
			<p align=\"justify\">Куда</p>
		</th>
		<th rowspan=\"2\"  >
			<p>Время отправки</p>
		</th>
		<th rowspan=\"2\"  >
			<p>Время в пути</p>
		</th>
		<th colspan=\"7\" >
			<p align=\"center\">Дни недели</p>
		</th>
		<th rowspan=\"2\" >
			<p>Онлайн продажи</p>
		</th>


	</tr>
	<tr valign=\"top\">
		<th  >
			<p>Пн</p>
		</th>
		<th  >
			<p>Вт</p>
		</th>
		<th  >
			<p>Ср</p>
		</th>
		<th  >
			<p>Чт</p>
		</th>
		<th  >
			<p>Пт</p>
		</th>
		<th  >
			<p>Сб</p>
		</th>
		<th >
			<p>Вс</p>
		</th>
	</tr>
	
	

	";
	while($reisy_arr=mysql_fetch_array($query))
		{
			
			
			echo"
				
<tr valign=\"top\" onclick=\"return SendForm2(content_reis,document.getElementById( 'edit_reis_".$reisy_arr['id']."' ));\" title=\"ID рейса: ".$reisy_arr['id']."\">
		<td >
		".$reisy_arr['number']." 

		<form id=\"edit_reis_".$reisy_arr['id']."\" name=\"edit_reis_".$reisy_arr['id']."\" action=\"/modules/reisy/edit_reis.php\" onsubmit=\"return SendForm2(content_reis,this);\">
		<input type=hidden name=reis_id value=".$reisy_arr['id'].">					
		</form>

		</td>
		<td  >
		".$reisy_arr['otkuda']."
		</td>
		<td  >
			".$reisy_arr['kuda']."
		</td>
		<td >
			".$reisy_arr['time_start']."
		</td>
		<td  >
			".$reisy_arr['time_go']."
		</td>";
		if($reisy_arr['pn']==1) {
		
		echo "<td bgcolor=#009c00>
			&#10004;
		</td>";
		}else
			{
				echo "<td bgcolor=#9c0000>
					&#10008;
				</td>";
			}

		if($reisy_arr['vt']==1) {
		
		echo "<td bgcolor=#009c00>
			&#10004;
		</td>";
		}else
			{
				echo "<td bgcolor=#9c0000>
					&#10008;
				</td>";
			}

		if($reisy_arr['sr']==1) {
		
		echo "<td bgcolor=#009c00>
			&#10004;
		</td>";
		}else
			{
				echo "<td bgcolor=#9c0000>
					&#10008;
				</td>";
			}

		if($reisy_arr['cht']==1) {
		
		echo "<td bgcolor=#009c00>
			&#10004;
		</td>";
		}else
			{
				echo "<td bgcolor=#9c0000>
					&#10008;
				</td>";
			}
		if($reisy_arr['pt']==1) {
		
		echo "<td bgcolor=#009c00>
			&#10004;
		</td>";
		}else
			{
				echo "<td bgcolor=#9c0000>
					&#10008;
				</td>";
			}

		if($reisy_arr['sb']==1) {
		
		echo "<td bgcolor=#009c00>
			&#10004;
		</td>";
		}else
			{
				echo "<td bgcolor=#9c0000>
					&#10008;
				</td>";
			}

		if($reisy_arr['vs']==1) {
		
		echo "<td bgcolor=#009c00>
			&#10004;
		</td>";
		}else
			{
				echo "<td bgcolor=#9c0000>
					&#10008;
				</td>";
			}
				
		if($reisy_arr['sale_online']==1) {
		
		echo "<td bgcolor=#009c00>&#10004;
			
		</td>";
		}else
			{
				echo "<td bgcolor=#9c0000>
					&#10008;
				</td>";
			}

		
		}
echo "</table>";	
}

// Получение списка остановочных пунктов

function GetDestination_mod($lnk, $query){
	
	echo"
<table class=\"mody_table\" style=\"font-size:12px;\">

	<tr valign=\"top\">
		<td>
			<p>id</p>
		</td>
		<td >
			<p>Название остановочного пункта</p>
		</td>
		<td >
			<p>Ближайший город</p>
		</td>
		<!--<td >
			<p>Краткое название латиницей</p>
		</td>
		<td >
			<p>Краткое название</p>
		</td>
		<td >
			<p>Актуально с</p>
		</td>
		<td >
			<p>Актуально по</p>
		</td>-->
		<td >
			<p>Страна</p>
		</td>
		<td >
			<p>Регион</p>
		</td>
		<td >
			<p>ОКАТО</p>
		</td>
	</tr>";

	while($destination_arr=mysql_fetch_array($query))
		{
			
			
			echo"
<tr valign=\"top\" onclick=\"return SendForm2(content_destination,document.getElementById( 'edit_destination_".$destination_arr['id']."' ));\">
		<td>
			".$destination_arr['id']." <form id=\"edit_destination_".$destination_arr['id']."\" name=\"edit_destination_".$destination_arr['id']."\" action=\"/modules/reisy/destination/edit_destination.php\" onsubmit=\"return SendForm2(content_destination,this);\">
		<input type=hidden name=destination_id value=".$destination_arr['id'].">					
					</form>	
		</td>
		<td>
			".$destination_arr['name']."
		</td>
		<td>
			".$destination_arr['nearestTown']."
		</td>
		<!--<td>
			".$destination_arr['shortLatName']."
		</td>
		<td>
			".$destination_arr['shortName']."
		</td>
		<td>
			".$destination_arr['actualPeriod_from']."
		</td>
		<td>
			".$destination_arr['actualPeriod_to']."
		</td>-->
		<td>
			".$destination_arr['countryCode']."
		</td>
		<td>
			".$destination_arr['federalSubject']."
		</td>
		<td>
			".$destination_arr['okato']."
		</td>				
	</tr>
			
				";
		}
echo "</table>";	
}
?>
