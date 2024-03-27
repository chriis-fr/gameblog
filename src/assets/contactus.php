<!DOCTYPE html>
<!--  This site was created in Webflow. http://www.webflow.com  -->
<!--  Last Published: Tue Sep 18 2018 08:16:25 GMT+0000 (UTC)  -->
<html data-wf-page="5b8ea3c23506c9f399c676fc" data-wf-site="5b86f0068be1a70982add237">
<head>
  <meta charset="utf-8">
  <title>page</title>
  <meta content="page" property="og:title">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta content="Webflow" name="generator">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/casda.webflow.css" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Raleway:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  }});</script>
  <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="https://daks2k3a4ib2z.cloudfront.net/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="https://daks2k3a4ib2z.cloudfront.net/img/webclip.png" rel="apple-touch-icon">
</head>
<body>
  <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class="nav w-container"><a href="index.html" class="logo w-nav-brand"></a>
      <nav role="navigation" class="nav-menu w-nav-menu"><a href="index.html" class="nav-link w-nav-link">Home</a><a href="about-us.html" class="nav-link w-nav-link">About</a><a href="projects.html" class="nav-link w-nav-link"> Projects</a><a href="team-partners.html" class="nav-link w-nav-link">Founders &amp; Partners</a><a href="contacts.html" class="nav-link w-nav-link w--current">Contacts</a></nav>
      <div class="w-nav-button">
        <div class="icon w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
  <div class="section-page-title">
    <div class="section-page-title-wrapper w-container">
      <h1 class="section-page-title-heading">Contact Us </h1>
    </div>
  </div>
  <div class="section">
    <div class="container w-container">
      <p class="pre-feature title-intro">We&#x27;re committed to getting you the answers you need, when you need them.</p>
      <div class="w-row">
        <div class="column-4 w-col w-col-6">
          <h1 class="title">Details</h1>
          <p class="contact_p">CooperationArena for Sustainable Development in Africa<br>P. O.Box 66842 – 00800<br>Nairobi– Kenya<br>Office+ 254 20 2407012<br>Mobile:+254 722 314436 / 733 314436<br>Email:<a href="mailto:info@casdaafrica.org">info@casdaafrica.org<br>‍</a>Website:<a href="http://www.casdaafrica.org">www.casdaafrica.org</a></p>
          <h1 class="title">Social Media</h1>
          <p class="contact_p">Find us on Facebook: CASDA_Africa<br>Find us on Twitter: @CASDA_Africaa<br>Find us on Instagram: @CASDA_Africa<br>Find us on Youtube: CASDA_Africa</p>
        </div>

        <div class="column-5 w-col w-col-6">
          <h1 class="title">Email Us</h1>
          <div class="form-wrapper">
            <div class="form w-form">
             

             <?php
// define variable and set to empty values
$name_error = $email_error = $phone_error = "";
$name = $email = $phone = $message = "";

//form is submitted with POST method 
if($_SERVER["REQUEST_METHOD"] == "POST"){
	if (empty($_POST['name'])) {
	  $name_error = "Name is required";
	}else{
		$name = test_input($_POST["name"]);
                if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
               $name_Error = "Only letters and white space allowed";
                }
	}
	if (empty($_POST["email"])) {
	  $email_error = "Email is required";
	}else{
		$email = test_input($_POST["email"]);
		// check if email address is well-formed
		if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
			$email_error = "Invalid email format";
		}
	}
	if (empty($_POST["phone"])) {

		$phone_error = "phone is required";
	}else{
		$phone = test_input ($_POST["phone"]);
		
		//check if phone number is correct	
		
               if(preg_match("/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/", $phone)) {
               
                 $phone_error = "Invalid phone number";
               }
	}

	if (empty($_POST["message"])) {
		$message = "";
	}else{
		$comment = test_input($_POST["message"]);
	}

	if ($name_error == '' and $email_error =='' and $phone_error == ''){
		$message_body = '';
		unset($_POST['submit']);
		foreach ($_POST as $key => $value) {
			$message_body .= "$key: $value\n";
		}
        $to = '2alexcosmas@gmail.com'; // where you want to send the mail
        $from = 'www.casdaafrica.org'; 
        
        $subject = 'Enquiry From CASDA Website';
        
    
        $message = '<html><body>';
				 
		$message .= '<table width="100%"; rules="all" style="border:1px solid #3A5896;" cellpadding="10">';
		$message .= "<tr><td colspan=2>$comment</td></tr>";
		$message .= "<tr><td colspan=2 font='colr:#999999;'><I>From:$name<br>
							Phone: $phone<br>
							Email: $email</I></td>
							</tr>";
				 
		$message .= "</table>";
				 
		$message .= "</body></html>";
        
        
        
        
        // From 
		$headers = "FROM: $from\r\n";
		//Reply To
		$headers .= "Reply-To: $email\r\n";
		
		$headers .= "MIME-Version: 1.0\r\n";
		
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        
        
        $sent = mail($to, $subject, $message, $headers);
        if ($sent) {
          echo "<script>window.open('contactus.php?success','_self')</script>";
        }else{
        	 echo "<script>window.open('contactus.php?fail','_self')</script>";
        }
	}


}


function test_input($data){
	$data = trim($data);
	$data = stripcslashes($data);
	$data = htmlspecialchars($data);

	return $data;
}

 


 ?>
              
               <form id="email-form"  action="<?= $_SERVER['PHP_SELF']; ?>" method="post">
  

		<label for="name" class="field-name">Name:</label>
		
		<input type="text" name="name" class="field w-input" placeholder="Your name" tabindex="1" value="<?= $name ?>" autofocus>
		<span class="error"><?= $name_error ?></span>
	

		 <label for="email" class="field-name">Email Address:</label>
		 
		<input type="text" name="email" class="field w-input" placeholder="Your Email Address" tabindex="2" value="<?= $email ?>">
		<span class="error"><?= $email_error ?></span>
		

		<label for="phone" class="field-name">Number:</label>
		<input type="text" name="phone" class="field w-input" placeholder="Your Phone Number" tabindex="3" value="<?= $phone ?>">
		<span class="error"><?= $phone_error ?></span>
		

		<label for="email-2" class="field-name">Message:</label>
		<textarea name="message" class="field w-input" placeholder="Type your Message Here...."  tabindex="4" value="<?= $message ?>"></textarea>
		<span class="error"><?= $message_error ?></span>
		
		
		
		<button name="submit" type="submit" id="contact-submit" class="submit w-button" data-submit="....Sending">Submit</button>
		

	</form>
                
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="footer-container w-container">
      <div class="footerwrapper">
        <div class="row w-row">
          <div class="w-col w-col-6"><img src="images/casda.png" class="image">
            <p class="footer_about">Cooperation Arena for Sustainable Development in Africa (CASDA) is an international NGO in Kenya with an aim of developing sustainability initiatives in energy, social services and collaborative business development</p>
          </div>
          <div class="w-col w-col-6">
            <ul class="footer_menu_lit w-list-unstyled">
              <li class="footer_menu_list">Latest News</li>
              <li class="footer_menu_list">Join Us</li>
              <li class="footer_menu_list">Research</li>
              <li class="footer_menu_list">Publications &amp; Media</li>
              <li class="footer_menu_list">Videos</li>
            </ul>
          </div>
        </div>
        <div>
          <p class="footer_credits"><a href="https://www.hostgator.com/tos" class="link">Terms &amp; Conditions Terms of Use Privacy Policy About CASDA<br>© 2018 CASDA</a></p>
        </div>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</body>
</html>