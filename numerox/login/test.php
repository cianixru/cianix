<?php
include 'dbc.php';
page_protect();


if (isset($_SESSION['user_id'])) {?>
<div class="myaccount">
<p><strong>My Account</strong></p>
<a href="myaccount.php">My Account</a><br>
<a href="mysettings.php">Settings</a><br>
<a href="logout.php">Logout </a>
<p>You can add more links here for users</p></div>
<? } ?>

