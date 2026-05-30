document.getElementById('downloadVCard').addEventListener('click', function () {
    // यहाँ अपने क्लाइंट की डिटेल्स भरें
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Doe;John;;;
FN:John Doe
ORG:Premium Business Agency
TITLE:Digital Consultant
TEL;TYPE=CELL;TYPE=PREF:+917895252570
EMAIL;TYPE=PREF,INTERNET: vinaykhatrim@gmail.com
URL:
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'John_Doe_Contact.vcf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
});

