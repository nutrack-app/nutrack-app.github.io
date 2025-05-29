
function saveLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
}

function loadLanguage() {
  return localStorage.getItem('selectedLanguage');
}

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  const elements = [
        // index.html
    { id: 'h2App', prop: 'innerText', key: 'h2App' },
    { id: 'pApp1', prop: 'innerText', key: 'pApp1' },
    { id: 'pApp2', prop: 'innerText', key: 'pApp2' },
    { id: 'pApp3', prop: 'innerText', key: 'pApp3' },
    { id: 'h2Web', prop: 'innerText', key: 'h2Web' },
    { id: 'pWeb1', prop: 'innerText', key: 'pWeb1' },
    { id: 'pWeb2', prop: 'innerText', key: 'pWeb2' },
    { id: 'h2Desktop', prop: 'innerText', key: 'h2Desktop' },
    { id: 'pDesktop1', prop: 'innerText', key: 'pDesktop1' },
    { id: 'pDesktop2', prop: 'innerText', key: 'pDesktop2' },
    // privacy.html
    { id: 'title', prop: 'innerText', key: 'title' },
    { id: 'headline', prop: 'innerHTML', key: 'headline' },
    { id: 'privacyText', prop: 'innerHTML', key: 'privacyText' },
    { id: 'tabHome', prop: 'innerText', key: 'tabHome' },
    { id: 'tabPrivacy', prop: 'innerText', key: 'tabPrivacy' },
    { id: 'section1Title', prop: 'innerText', key: 'section1Title' },
    { id: 'section1Text', prop: 'innerText', key: 'section1Text' },
    { id: 'section1Text2', prop: 'innerText', key: 'section1Text2' },
    { id: 'section2Title', prop: 'innerText', key: 'section2Title' },
    { id: 'section2Text', prop: 'innerText', key: 'section2Text' },
    { id: 'section3Title', prop: 'innerText', key: 'section3Title' },
    { id: 'section3Text', prop: 'innerText', key: 'section3Text' },
    { id: 'section3Text2', prop: 'innerHTML', key: 'section3Text2' },
    { id: 'section4Title', prop: 'innerText', key: 'section4Title' },
    { id: 'section4Text', prop: 'innerText', key: 'section4Text' },
    { id: 'section5Title', prop: 'innerText', key: 'section5Title' },
    { id: 'section5Text', prop: 'innerHTML', key: 'section5Text' },
    { id: 'section6Title', prop: 'innerText', key: 'section6Title' },
    { id: 'section6Text', prop: 'innerText', key: 'section6Text' },
    { id: 'lastUpdated', prop: 'innerText', key: 'lastUpdated' }
  ];
  elements.forEach(({ id, prop, key }) => {
    const el = document.getElementById(id);
    if (el && t[key]) {
      el[prop] = t[key];
    }
  });
  saveLanguage(lang);
}

function getPreferredLanguage() {
  const savedLang = loadLanguage();
  if (savedLang) {
    return savedLang;
  }
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  const shortLang = browserLang.split('-')[0];
  const supported = ['de', 'en'];
  const lang = supported.includes(shortLang) ? shortLang : 'en';
  localStorage.setItem('selectedLanguage', lang);
  return lang;
}

window.addEventListener('DOMContentLoaded', () => {
  const lang = getPreferredLanguage();
  setLanguage(lang);
});
const translations = {
  en: {
    // index.html
    h2App: "Nutrack App",
    pApp1: "Track your nutrition and daily intake conveniently on your mobile device. The Nutrack App helps you monitor your meals, set goals, and stay on top of your health—anytime, anywhere.",
    pApp2: "In English and German",
    pApp3: "Available on Play Store soon",
    h2Web: "Nutrack Web",
    pWeb1: "A Nutrack webapp for selfhosting and easy access from any device in your local network Support for a physical barcode scanner connected to your host device",
    pWeb2: "Still in Development",
    h2Desktop: "Nutrack Desktop App",
    pDesktop1: "The full Nutrack app on Desktop, with planned support for a physical barcode scanner connected to your local pc",
    pDesktop2: "Still in Development",
    // privacy.html
    title: "Privacy Policy – Nutrack",
    headline: "Privacy Policy",
    privacyText: "This Privacy Policy describes how your information is collected, used, and protected when you use the Nutrack-App.",
    section1Title: "1. Data Collection and Processing",
    section1Text: "The App is designed to process as little personal data as possible. All food and nutrition data is stored locally on your device unless you choose to use optional cloud backup features (e.g., Dropbox).",
    section1Text2: "No personal information is transmitted to our servers. The App does not use analytics, advertising, or tracking services.",
    section2Title: "2. Optional Cloud Synchronization",
    section2Text: "If you enable synchronization with Dropbox, your nutrition data will be stored in your personal Dropbox account. We do not have access to your Dropbox data. Please refer to Dropbox’s privacy policy (https://www.dropbox.com/privacy) for further information.",
    section3Title: "3. Use of OpenFoodFacts",
    section3Text: "The App uses the OpenFoodFacts database (https://openfoodfacts.org) to provide food and nutrition information. When you search for a product or scan a barcode, the App sends the search term or barcode to the OpenFoodFacts API.",
    section3Text2: "<strong>No personal data</strong> (such as your name, email, device ID, or location) is transmitted to OpenFoodFacts. Only the search query or barcode is sent. OpenFoodFacts is operated by Open Food Facts, a non-profit organization based in France. For more information, please refer to the <a href=\"https://world.openfoodfacts.org/privacy\" target=\"_blank\">OpenFoodFacts Privacy Policy</a>.",
    section4Title: "4. Your Rights",
    section4Text: "As a user in the European Union, you have the right to access, rectify, or erase your personal data, as well as restrict or object to its processing. Since the App stores your data locally (and optionally in your own Dropbox), you have full control over your information.",
    section5Title: "5. Contact",
    section5Text: "If you have any questions about this Privacy Policy or your data, please contact us at: <a href=\"mailto:kachonkdev@gmail.com\">kachonkdev@gmail.com</a>",
    section6Title: "6. Changes to this Policy",
    section6Text: "We may update this Privacy Policy from time to time. Changes will be published within the App.",
    lastUpdated: "Last updated: 2025-05-11",
    tabHome: "Home",
    tabPrivacy: "Privacy Policy"
  },
  de: {
    // index.html
    h2App: "Nutrack App",
    pApp1: "Verfolge deine Ernährung und tägliche Aufnahme bequem auf deinem Mobilgerät. Die Nutrack App hilft dir, deine Mahlzeiten zu überwachen, Ziele zu setzen und deine Gesundheit immer im Blick zu behalten – jederzeit und überall.",
    pApp2: "Auf Deutsch und Englisch",
    pApp3: "Bald im Play Store verfügbar",
    h2Web: "Nutrack Web",
    pWeb1: "Eine Nutrack-Webapp zum Selbsthosten und für einfachen Zugriff von jedem Gerät im lokalen Netzwerk. Unterstützung für einen physischen Barcodescanner am Host-Gerät.",
    pWeb2: "Noch in Entwicklung",
    h2Desktop: "Nutrack Desktop App",
    pDesktop1: "Die vollständige Nutrack-App für den Desktop, mit geplanter Unterstützung für einen physischen Barcodescanner am lokalen PC",
    pDesktop2: "Noch in Entwicklung",
    // privacy.html
    title: "Datenschutzerklärung – Nutrack",
    headline: "Datenschutzerklärung",
    privacyText: "Diese Datenschutzerklärung beschreibt, wie Ihre Informationen gesammelt, verwendet und geschützt werden, wenn Sie die Nutrack-App nutzen.",
    section1Title: "1. Datenerhebung und -verarbeitung",
    section1Text: "Die App ist so konzipiert, dass möglichst wenige personenbezogene Daten verarbeitet werden. Alle Ernährungsdaten werden lokal auf Ihrem Gerät gespeichert, es sei denn, Sie nutzen die optionale Cloud-Backup-Funktion (z.B. Dropbox).",
    section1Text2: "Es werden keine personenbezogenen Daten an Server übermittelt. Die App verwendet keine Analyse-, Werbe- oder Trackingdienste.",
    section2Title: "2. Optionale Cloud-Synchronisierung",
    section2Text: "Wenn Sie die Synchronisierung mit Dropbox aktivieren, werden Ihre Ernährungsdaten in Ihrem persönlichen Dropbox-Konto gespeichert. Wir haben keinen Zugriff auf Ihre Dropbox-Daten. Weitere Informationen finden Sie in der Datenschutzerklärung von Dropbox (https://www.dropbox.com/privacy).",
    section3Title: "3. Nutzung von OpenFoodFacts",
    section3Text: "Die App nutzt die OpenFoodFacts-Datenbank (https://openfoodfacts.org), um Lebensmittel- und Nährwertinformationen bereitzustellen. Bei der Produktsuche oder dem Scannen eines Barcodes wird der Suchbegriff oder Barcode an die OpenFoodFacts-API gesendet.",
    section3Text2: "Es werden <strong>keine personenbezogenen Daten</strong> (wie Name, E-Mail, Geräte-ID oder Standort) an OpenFoodFacts übermittelt. Nur die Suchanfrage oder der Barcode wird gesendet. OpenFoodFacts wird von Open Food Facts, einer gemeinnützigen Organisation mit Sitz in Frankreich, betrieben. Weitere Informationen finden Sie in der <a href=\"https://world.openfoodfacts.org/privacy\" target=\"_blank\">OpenFoodFacts Datenschutzerklärung</a>.",
    section4Title: "4. Ihre Rechte",
    section4Text: "Als Nutzer in der Europäischen Union haben Sie das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten sowie auf Einschränkung oder Widerspruch gegen deren Verarbeitung. Da die App Ihre Daten lokal (und optional in Ihrer eigenen Dropbox) speichert, haben Sie die volle Kontrolle über Ihre Informationen.",
    section5Title: "5. Kontakt",
    section5Text: "Wenn Sie Fragen zu dieser Datenschutzerklärung oder Ihren Daten haben, kontaktieren Sie uns bitte unter: <a href=\"mailto:kachonkdev@gmail.com\">kachonkdev@gmail.com</a>",
    section6Title: "6. Änderungen an dieser Richtlinie",
    section6Text: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden innerhalb der App veröffentlicht.",
    lastUpdated: "Letzte Aktualisierung: 2025-05-11",
    tabHome: "Home",
    tabPrivacy: "Privacy Policy"
  },
};
