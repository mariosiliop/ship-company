function scroll() {
  $('.Home').click(()=>{
    $('html, body').animate({scrollTop: '0px'}, 1000);
  });

  $('.About').click(()=>{
    $('html, body').animate({scrollTop: '1020px'}, 1000);
  });

  $('.Fleet').click(()=>{
    $('html, body').animate({scrollTop: '1860px'}, 1000);
  });

  $('.Resources').click(()=>{
    $('html, body').animate({scrollTop: '3090px'}, 1000);
  });

  $('.Contact-btn').click(()=>{
    $('html, body').animate({scrollTop: '4800px'}, 1000);
  });

  swap_language();
}

function swap_language() {
  $('.greek').click(()=>{
    $('h3').html('ΤΑΞΙΔΕΨΕ ΜΕ FASTVESSEL');
    $('.header-message').html('ΕΝΑΣ ΚΟΣΜΟΣ ΜΕ ΑΠΙΣΤΕΥΤΟΥΣ ΠΡΟΟΡΙΣΜΟΥΣ');
    $('.about-flex-header').html('ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ');
    $('.about-flex-message').html('Πάθος για το ταξίδι! Στόχος μας να προσφέρουμε μία προσωπική επαφή, πριν τη διαδρομή σας. Όλο το προσωπικό μας έχει ταξιδέψει εκτεταμένα και διαθέτει μία μεγάλη εμπειρία σχετικά με τον προορισμό σας. Είμαστε στη διαθεσή σας για να έχετε ένα ταξίδι χωρίς προβλήματα. Επικοινωνήστε μαζί μας σήμερα για να μάθετε τις προσφορές μας.');
    $('.our-fleet-header').html('ΣΤΟΛΟΣ');
    $('.georgios-1').html('ΓΕΩΡΓΙΟΣ Ι');
    $('.georgios-2').html('ΓΕΩΡΓΙΟΣ II');
    $('.desc-1').html('ΠΕΙΡΑΙΑΣ - ΣΑΛΑΜΙΝΑ');
    $('.desc-2').html('ΠΕΙΡΑΙΑΣ - ΣΑΛΑΜΙΝΑ');
    $('.contact-fleet-message').html('Η FastVessel είναι έτοιμη να κάνει τις ταξιδιωτικές σας φιλοδοξίες πραγματικότητα. Επικοινωνήστε μαζί μας για να μάθετε για τις ξεναγήσεις που προσφέρουμε.');
    $('.travel-message').html('ΠΛΗΡΟΦΟΡΙΕΣ ΤΑΞΙΔΙΟΥ ΓΙΑ ΤΗΝ ΕΠΟΜΕΝΗ ΠΕΡΙΠΕΤΕΙΑ ΣΑΣ');
    $('.contact-message').html('Στο FastVessel, ο ουρανός είναι το όριο όσον αφορά τη δημιουργία της επόμενης διαδρομής σας. Οι έμπειροι πράκτορές μας περιμένουν να προγραμματίσουν κάθε λεπτομέρεια του επερχόμενου ταξιδιού σας, οπότε το μόνο που έχει απομείνει για σας είναι να το απολαύσετε. Δουλεύουμε M-F: 8 π.μ.-8μ.μ., αλλά μπορείτε να μας στείλετε ένα μήνυμα ηλεκτρονικού ταχυδρομείου και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατόν.');
  })
}
