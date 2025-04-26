let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    
        const newcontact ={
        name:"Maisie Haley",
        phone: "0913 531 3030",
        email:"risus.Quisque@urna.ca."
    }
        
    contacts.push (newcontact);
    contacts.forEach ((contact, index) => {
        console.log(`${index + 1}. name: ${contact.name}, phone: ${contact.phone} emmail: ${contact.email}`);
    }) 

    
    
