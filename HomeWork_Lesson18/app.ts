
let pilot1: PILOTS = new PILOTS(1812, "Ori", "Tidhar",15);

let attendet1: CREW = new CREW("Ofir", "Nusbaum", 11, "ISRAEL", "First Class");

let attendet2: CREW = new CREW("Zvi", "Rom", 2, "ISRAEL", "", "Security Officer");

let customer1: CUSTOMER = new CUSTOMER("Noam", "Tidhar",342333432);


pilot1.printPilot();
attendet1.printCrew();
attendet2.printCrew();
customer1.customerPrint();

