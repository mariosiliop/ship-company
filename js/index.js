function scroll() {

  $('.send').click( () => {
    var name = $('#name').val();
    var mail = $('#mail').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var message = $('#message').val();
    console.log(name);
    $.ajax({
      url: '/mail',
      type: 'post',
      data: {name:name, mail:mail, phone:phone, addr: address, message:message}
    })
  })

  $('.Home').click(()=>{
    $('html, body').animate({scrollTop: '0px'}, 1000);
  });

  $('.About').click(()=>{
    $('html, body').animate({scrollTop: '860px'}, 1000);
  });

  $('.Fleet').click(()=>{
    $('html, body').animate({scrollTop: '1700px'}, 1000);
  });

  $('.Resources').click(()=>{
    $('html, body').animate({scrollTop: '2830px'}, 1000);
  });

  $('.Contact-btn').click(()=>{
    $('html, body').animate({scrollTop: '5000px'}, 1000);
  });

  swap_language();
}

function swap_language() {
  $('.greek').click(()=>{
    $('h3').html('ΤΑΞΙΔΕΨΕ ΜΕ BROUFAS VESSELS');
    $('.header-message').html('ΕΝΑΣ ΚΟΣΜΟΣ ΜΕ ΑΠΙΣΤΕΥΤΟΥΣ ΠΡΟΟΡΙΣΜΟΥΣ');
    $('.about-flex-header').html('ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ');
    $('.about-flex-message').html('Τα καραβάκια, Ε/Γ Γεώργιος Μπρούφας και Ε/Γ Γεώργιος Μπρούφας II, κατασκευάστηκαν το 1997 και 1998 αντίστοιχα από τον κ Κρουστάλλη Σ Γεώργιο. Δραστηριοποιούνται από τότε στην γραμμή Πειραιά- Παλούκλια (Σαλαμίνας) με ενδιάμεση στάση στην περιοχή του Καματερού (Σαλαμίνας). Έχουν και τα δύο μήκος 25 μέτρα και πληρούνται από 3 άτομα, ένα καπετάνιο, ένα μηχανικό και ένα ναύτη. Κάθε 21 μέχρι 24 Αυγούστου δρομολογούνται στην γραμμή Μ Πεύκο- Φανερωμένη διευκολύνοντας την πρόσβαση των προσκυνητών για την πανηγυρική εορτή της Ιεράς Μονής Φανερωμένης Σαλαμίνας.  Κάθε καλοκαίρι, τα καραβάκια ναυλώνονται για εκδρομές με προορισμό την Αίγινα, την Αγία Μαρίνα Αιγίνης, τον Πόρο, την Ύδρα, τις Σπέτσες και το Αγκίστρι. Το καλοκαίρι του 2016  το Ε/Γ Γεώργιος Μπρούφας II ναυλώθηκε για εκδρομές από το λιμάνι της  Ίου με προορισμούς την Σίκινο και την  Φολέγανδρο.');
    $('.our-fleet-header').html('ΣΤΟΛΟΣ');
    $('.georgios-1').html('ΓΕΩΡΓΙΟΣ Ι');
    $('.georgios-2').html('ΓΕΩΡΓΙΟΣ II');
    $('.desc-1').html('ΠΕΙΡΑΙΑΣ - ΣΑΛΑΜΙΝΑ');
    $('.desc-2').html('ΣΑΛΑΜΙΝΑ - ΠΕΙΡΑΙΑΣ');
    $('.contact-fleet-message').html('Τα εισιτήρια προμηθεύονται εντός του πλοίου. Η τιμή του εισιτηρίου είναι 2.90€. Παιδιά έως 5 ετών ταξιδεύουν δωρεάν. Επίσης διατίθεται μειωμένο εισιτήριο(1.45€) σε ειδικές ομάδες επιβατών(π.χ. πολύτεκνοι, φοιτητές, κλπ.). Εάν επιθυμείτε να ναυλώσετε κάποιο από τα καραβάκια μας, παρακαλούμε επικοινωνήστε μαζί μας για να λάβετε προσφορά!');
    $('.travel-message').html('ΠΛΗΡΟΦΟΡΙΕΣ ΤΑΞΙΔΙΟΥ ΓΙΑ ΤΗΝ ΕΠΟΜΕΝΗ ΠΕΡΙΠΕΤΕΙΑ ΣΑΣ');
    $('.contact-message').html('Χρειάζεστε περισσότερες πληροφορίες? Η εξειδικευμένη ομάδα μας είναι έτοιμη να σας εξυπηρετήσει. Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατόν!');
    $('.Home').html('Αρχική');
    $('.About').html('Εταιρεία');
    $('.Fleet').html('Στόλος');
    $('.Resources').html('Δρομολόγια');
    $('.button').html('Αποστολή');
    $('.Contact-btn').html('Επικοινωνία');
    $('.contact-header').html('Επικοινωνία');
    $('.days').html('ΔΕΥΤΕΡΑ - ΠΑΡΑΣΚΕΥΗ');
    $('.day').html('ΣΑΒΒΑΤΟ');
    $('.capacity').html('Χωρητικότητα 200 επιβάτες');
    $('.dimensions').html('Διαστάσεις 25μ χ 7μ');
    $('.speed').html('Ταχύτητα 11-15 κόμβους');
  });
  $('.english').click(()=>{
    window.location.reload(true);
  })
  event.preventDefault()

  travel_slide();
}

var travelSlideIndex = 0;

function travel_slide() {
  var i;
  var x = document.getElementsByClassName("slide-2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  travelSlideIndex++;
  if (travelSlideIndex > x.length) {travelSlideIndex = 1}
  x[travelSlideIndex-1].style.display = "block";
  setTimeout(travel_slide, 3000); // Change image every 2 seconds

}
