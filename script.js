        window.onload = function() {
            setTimeout(function() {
                document.getElementById('welcome-message').classList.add('show');
            }, 0);
            changeLanguage('en'); // Set default language to English
        }

        function showWelcomeMessage() {
            const message = document.getElementById('welcome-message');
            message.style.display = 'block';
        }

        function changeLanguage(lang) {
            const translations = {
                'hu': {
                    'welcome-message': 'ÜDVÖZLÖM, JÓ LÁTNI ÖNT',
                    'about': 'Magamról',
                    'about-description': 'Feltöltés folyamatban...',
                    'current-work': ''
                },
                'de': {
                    'welcome-message': 'HERZLICH WILLKOMMEN UND GUT SIE ZU SEHEN',
                    'about': 'Über mich',
                    'about-description': 'Mein Name ist Laszlo Geiger und ich bin ein 25-jähriger Computer Science Operational Ingenieur mit 3 Jahren Erfahrung in der Cybersicherheit. Meine Spezialisierung war Cybersicherheit an der Universität Obuda und ich habe relevante Erfahrungen mit SIEM-Systemen (Splunk, QRadar, Sentinel) und Sicherheitstools. Ich verstehe die Prinzipien von Firewalls, IDS/IPS, ASA und EDR/XDR-Lösungen (Microsoft Defender, ESET, CrowdStrike, Carbon Black (VMware)). Ich habe die CCNAv7 1, 2 und Security-Semester abgeschlossen, die mir eine solide Grundlage in den Bereichen Netzwerk und Sicherheit gegeben haben. Anschließend habe ich die Prüfung zum Certified Ethical Hacker bestanden. Diese Zertifizierung sowie meine frühere Berufserfahrung haben mir ein umfassendes Verständnis der Cybersicherheit vermittelt.',
                    'current-work': 'Derzeit bin ich Teil eines Teams, das Unternehmen auf die NIS2-Prüfung vorbereitet. Wir unterstützen bei der Implementierung der erforderlichen Sicherheitsinfrastruktur, um die Einhaltung der NIS2-Anforderungen zu gewährleisten.'
                },
                'en': {
                    'welcome-message': 'WELCOME AND GOOD TO SEE YOU',
                    'about': 'About me',
                    'about-description': 'My name is Laszlo Geiger and I am a 25-year-old Computer Science Operational Engineer with 3 years of experience in Cyber Security. My specialization was Cyber Security at the University of Obuda, and I have relevant experience with SIEM systems (Splunk, QRadar, Sentinel) and security tools. I understand the principles of firewalls, IDS/IPS, ASA, and EDR/XDR solutions (Microsoft Defender, ESET, CrowdStrike, Carbon Black (VMware)). I have completed the CCNAv7 1, 2 and Security semesters, which have provided me with a solid foundation in networking and security. Subsequently, I passed the Certified Ethical Hacker exam. This certification, along with my previous workplace experience, has provided me with a comprehensive understanding of Cyber Security.',
                    'current-work': 'Currently, I am part of a team tasked with preparing companies for the NIS2 Audit. We assist in implementing the necessary security infrastructure to ensure compliance with NIS2 requirements.'
                }
            };

            document.getElementById('welcome-message').textContent = translations[lang]['welcome-message'];
            document.querySelector('.about-text h1').textContent = translations[lang]['about'];
            document.getElementById('about-description').textContent = translations[lang]['about-description'];
            document.getElementById('current-work').textContent = translations[lang]['current-work'];
        }
