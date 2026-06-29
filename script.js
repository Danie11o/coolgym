/* ==========================================================================
   COOL GYM — SCRIPT.JS
   Spis treści:
   1. Słownik tłumaczeń (PL / EN)
   2. Przełącznik języka
   3. Menu mobilne
   4. Animacje pojawiania się sekcji (reveal on scroll)
   5. Kalkulator BMI
   6. Rok w stopce
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------
     1. SŁOWNIK TŁUMACZEŃ
     Każdy klucz odpowiada atrybutowi data-i18n w HTML.
     Aby dodać nowy tekst tłumaczony: dodaj wpis tutaj oraz
     atrybut data-i18n="twoj.klucz" na odpowiednim elemencie HTML.
  ------------------------------------------------------------ */
  const translations = {
    pl: {
      'nav.about': 'O nas',
      'nav.offer': 'Oferta',
      'nav.pricing': 'Cennik',
      'nav.promos': 'Promocje',
      'nav.hours': 'Godziny',
      'nav.bmi': 'Kalkulator BMI',
      'nav.contact': 'Kontakt',

      'hero.eyebrow': 'Cool Gym · Twoja siłownia',
      'hero.titleLine1': 'SIŁA, KTÓRA',
      'hero.titleLine2': 'NIE ZNA GRANIC',
      'hero.subtitle': 'Profesjonalny sprzęt, doświadczeni trenerzy i atmosfera, która motywuje do działania każdego dnia.',
      'hero.cta': 'Zobacz ofertę',

      'about.eyebrow': 'O nas',
      'about.title': 'Miejsce stworzone dla Twojego progresu',
      'about.lead': 'Cool Gym to nie jest kolejna siłownia — to przestrzeń, w której liczy się każdy trening. Łączymy profesjonalny sprzęt, sprawdzoną wiedzę trenerską i atmosferę, w której chce się wracać.',
      'about.point1Title': 'Sprzęt klasy premium',
      'about.point1Text': 'Maszyny i wolne ciężary renomowanych marek, regularnie serwisowane.',
      'about.point2Title': 'Doświadczeni trenerzy',
      'about.point2Text': 'Indywidualne podejście do każdego — od pierwszej wizyty do zawodowych celów.',
      'about.point3Title': 'Czysto i komfortowo',
      'about.point3Text': 'Zadbana przestrzeń, szatnie i strefa relaksu po treningu.',

      'offer.eyebrow': 'Oferta',
      'offer.title': 'Trenuj tak, jak Ci najlepiej',
      'offer.lead': 'Wybierz formę treningu dopasowaną do Twoich celów — sami lub z naszym wsparciem.',
      'offer.card1Title': 'Siłownia ogólna',
      'offer.card1Text': 'Pełne wyposażenie do treningu siłowego i wytrzymałościowego, dostępne na karnet.',
      'offer.card2Title': 'Trening personalny',
      'offer.card2Text': 'Indywidualny plan i opieka trenera — szybsze i bezpieczniejsze efekty.',
      'offer.card3Title': 'Zajęcia grupowe',
      'offer.card3Text': 'Energia grupy i motywacja, która niesie przez cały trening.',
      'offer.card4Title': 'Sauna i regeneracja',
      'offer.card4Text': 'Strefa relaksu pomagająca ciału zregenerować się po wysiłku.',

      'pricing.eyebrow': 'Cennik',
      'pricing.title': 'Wybierz swój karnet',
      'pricing.lead': 'Przejrzyste ceny, bez skrytych kosztów. Aktualna oferta cenowa Cool Gym.',
      'pricing.pln': 'zł',
      'pricing.perPerson': 'za osobę',
      'pricing.popular': 'Najpopularniejszy',
      'pricing.validFrom': 'Cennik obowiązuje od',

      'pricing.row1Title': 'Karnet OPEN',
      'pricing.row1Desc': 'Karnet całodniowy bez ograniczeń, ważny 1 miesiąc od daty zakupu. Pełna opieka instruktorska, 10% rabatu na odżywki.',
      'pricing.row2Title': 'Karnet OPEN z białkiem po treningu',
      'pricing.row2Desc': 'Karnet całodniowy bez ograniczeń na 1 miesiąc. Pełna opieka instruktorska, 10% rabatu na odżywki oraz odżywka białkowa po każdym treningu.',
      'pricing.row3Title': 'Karnet OPEN na okres 2 / 3 miesiące',
      'pricing.row3Desc': 'Karnet całodniowy bez ograniczeń, ważny 2 lub 3 miesiące od daty zakupu. Pełna opieka instruktorska, 10% rabatu na odżywki.',
      'pricing.row4Title': 'Karnet OPEN na 10 wejść',
      'pricing.row4Desc': 'Karnet całodniowy na 10 wejść, ważny 6 miesięcy od daty zakupu. Pełna opieka instruktorska, 10% rabatu na odżywki.',
      'pricing.row5Title': 'Karnet STUDENT OPEN',
      'pricing.row5Desc': 'Karnet całodniowy bez ograniczeń, ważny 1 miesiąc od daty zakupu. Pełna opieka instruktorska, 10% rabatu na odżywki.',
      'pricing.row6Title': 'Karnet STUDENT z białkiem po treningu',
      'pricing.row6Desc': 'Karnet całodniowy bez ograniczeń na 1 miesiąc. Pełna opieka instruktorska, 10% rabatu na odżywki oraz odżywka białkowa po każdym treningu.',
      'pricing.row7Title': 'Karnet STUDENT OPEN na okres 2 / 3 miesiące',
      'pricing.row7Desc': 'Karnet całodniowy bez ograniczeń, ważny 2 lub 3 miesiące od daty zakupu. Pełna opieka instruktorska, 10% rabatu na odżywki.',
      'pricing.row8Title': 'Wejście jednorazowe',
      'pricing.row8Desc': 'Wejście jednorazowe bez ograniczeń. W cenie opieka instruktorska.',
      'pricing.row9Title': 'Trening personalny — 1 godzina / powyżej 3 godzin',
      'pricing.row9Desc': 'Trening z trenerem personalnym na obiekcie siłowni.',
      'pricing.row10Title': 'Trening personalny dla 2 / 3–4 osób',
      'pricing.row10Desc': 'Trening z trenerem personalnym na obiekcie siłowni dla grupy 2 lub 3–4 osobowej.',

      'promos.eyebrow': 'Promocje',
      'promos.title': 'Zniżki oraz promocje',
      'promos.lead': 'Sprawdź, jak możesz trenować więcej, płacąc mniej.',

      'promos.group1Title': 'Promocje przy zakupie karnetu',
      'promos.card1Title': 'Kup karnet na 1 albo 2 miesiące — otrzymaj gratis',
      'promos.card1Text': 'Przy zakupie karnetu na 1 albo 2 miesiące otrzymujesz <span class="text-accent">plan treningowy GRATIS!</span>',
      'promos.card1Note': 'Przy kontynuacji karnetu skonsultujemy Twój plan i wprowadzimy odpowiednie zmiany!',
      'promos.card2Title': 'Kup karnet 3-miesięczny — otrzymaj gratis',
      'promos.card2Text': 'Przy zakupie karnetu na 3 miesiące otrzymujesz miesięczny plan treningowy z comiesięczną konsultacją oraz <span class="text-accent">trening personalny GRATIS!</span>',

      'promos.group2Title': 'Promocje na treningi personalne',
      'promos.card3Title': 'Promocja na treningi personalne dla osób z karnetem',
      'promos.card3Text': 'Masz karnet? Umów się na trening personalny już teraz, a zapłacisz przy 1-razowym treningu <span class="text-accent">80 zł</span>, przy więcej niż 3 treningach <span class="text-accent">70 zł</span>.',
      'promos.card3Note': 'Cena regularna treningu personalnego to <span class="text-accent">100 zł</span>.',
      'promos.card4Title': 'Trening personalny raz w tygodniu',
      'promos.card4Text': 'Trenuj pod okiem trenera personalnego 1 raz w tygodniu (4 treningi w miesiącu), a za trening zapłacisz <span class="text-accent">65 zł</span>.',
      'promos.card4Note': 'Cena regularna treningu personalnego to <span class="text-accent">100 zł</span>.',

      'promos.group3Title': 'Zniżki na suplementy',
      'promos.card5Title': 'Dla stałych bywalców — tańsze suplementy',
      'promos.card5Text': 'Dla klubowiczów z aktualnym karnetem do <span class="text-accent">10%</span> zniżki na suplementy i odżywki.',

      'promos.group4Title': 'Trenuj z przyjacielem',
      'promos.card6Title': 'Zawołaj przyjaciół',
      'promos.card6Text': 'Przyprowadź <span class="text-accent">dwóch nowych członków</span>, którzy zakupią karnet i ciesz się <span class="text-accent">miesięcznym karnetem za darmo!</span>',
      'promos.card6Note': 'Przyprowadź <span class="text-accent">pięciu nowych członków</span>, którzy zakupią miesięczny karnet, a karnet <span class="text-accent">3-miesięczny</span> otrzymasz za darmo!',
      'promos.card7Title': 'Przyjaciel trenuje za złotówkę',
      'promos.card7Text': 'Posiadasz aktualny karnet? Masz możliwość <span class="text-accent">zaproszenia jednej osoby</span> na jeden trening za <span class="text-accent">1 zł!</span>',
      'promos.card7Note': 'Promocja dotyczy wyłącznie jednego zaproszenia na karnety miesięczne.',

      'hours.eyebrow': 'Godziny otwarcia',
      'hours.title': 'Jesteśmy otwarci<br>dla Ciebie',
      'hours.lead': 'Zaplanuj swój trening — sprawdź, kiedy działamy.',
      'hours.weekdays': 'Poniedziałek – Piątek',
      'hours.saturday': 'Sobota',
      'hours.sunday': 'Niedziela',
      'hours.holidaysLabel': 'Święta',
      'hours.holidaysValue': 'Godziny mogą się różnić',

      'bmi.eyebrow': 'Kalkulator',
      'bmi.title': 'Sprawdź swoje BMI',
      'bmi.lead': 'Szybki wskaźnik punktu wyjścia do rozmowy z trenerem o Twoich celach.',
      'bmi.heightLabel': 'Wzrost (cm)',
      'bmi.weightLabel': 'Masa ciała (kg)',
      'bmi.submit': 'Oblicz BMI',
      'bmi.error': 'Podaj prawidłowe wartości wzrostu i masy ciała.',
      'bmi.categoryUnder': 'Niedowaga',
      'bmi.categoryNormal': 'Waga prawidłowa',
      'bmi.categoryOver': 'Nadwaga',
      'bmi.categoryObese': 'Otyłość',

      'contact.eyebrow': 'Kontakt',
      'contact.title': 'Zacznij trenować już dziś',
      'contact.lead': 'Odwiedź nas, zadzwoń lub napisz — odpowiemy najszybciej, jak możemy.',
      'contact.addressLabel': 'Adres',
      'contact.phoneLabel': 'Telefon',
      'contact.emailLabel': 'E-mail',
      'contact.callCta': 'Zadzwoń teraz',
    },

    en: {
      'nav.about': 'About',
      'nav.offer': 'Offer',
      'nav.pricing': 'Pricing',
      'nav.promos': 'Promotions',
      'nav.hours': 'Hours',
      'nav.bmi': 'BMI Calculator',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Cool Gym · Your Gym',
      'hero.titleLine1': 'STRENGTH WITHOUT',
      'hero.titleLine2': 'LIMITS',
      'hero.subtitle': 'Professional equipment, experienced coaches, and an atmosphere that keeps you motivated every day.',
      'hero.cta': 'See the offer',

      'about.eyebrow': 'About us',
      'about.title': 'A place built for your progress',
      'about.lead': 'Cool Gym is not just another gym — it\'s a space where every workout matters. We combine professional equipment, real coaching expertise, and an atmosphere worth coming back to.',
      'about.point1Title': 'Premium equipment',
      'about.point1Text': 'Machines and free weights from trusted brands, regularly serviced.',
      'about.point2Title': 'Experienced coaches',
      'about.point2Text': 'A personal approach for everyone — from your first visit to pro-level goals.',
      'about.point3Title': 'Clean and comfortable',
      'about.point3Text': 'A well-kept space, changing rooms, and a relax zone after training.',

      'offer.eyebrow': 'Offer',
      'offer.title': 'Train your way',
      'offer.lead': 'Choose the training style that fits your goals — on your own or with our support.',
      'offer.card1Title': 'Open gym',
      'offer.card1Text': 'Full equipment for strength and endurance training, included with your membership.',
      'offer.card2Title': 'Personal training',
      'offer.card2Text': 'An individual plan and coach support — faster, safer results.',
      'offer.card3Title': 'Group classes',
      'offer.card3Text': 'Group energy and motivation that carries you through the whole session.',
      'offer.card4Title': 'Sauna & recovery',
      'offer.card4Text': 'A relax zone that helps your body recover after exercise.',

      'pricing.eyebrow': 'Pricing',
      'pricing.title': 'Choose your membership',
      'pricing.lead': 'Clear pricing, no hidden costs. Cool Gym\'s current price list.',
      'pricing.pln': 'PLN',
      'pricing.perPerson': 'per person',
      'pricing.popular': 'Most popular',
      'pricing.validFrom': 'Price list valid from',

      'pricing.row1Title': 'OPEN membership',
      'pricing.row1Desc': 'Unlimited all-day membership, valid for 1 month from purchase. Full instructor support, 10% off supplements.',
      'pricing.row2Title': 'OPEN membership with post-workout protein',
      'pricing.row2Desc': 'Unlimited all-day membership for 1 month. Full instructor support, 10% off supplements, plus a protein shake after every workout.',
      'pricing.row3Title': 'OPEN membership — 2 / 3 months',
      'pricing.row3Desc': 'Unlimited all-day membership, valid for 2 or 3 months from purchase. Full instructor support, 10% off supplements.',
      'pricing.row4Title': 'OPEN 10-visit pass',
      'pricing.row4Desc': '10-visit all-day pass, valid for 6 months from purchase. Full instructor support, 10% off supplements.',
      'pricing.row5Title': 'STUDENT OPEN membership',
      'pricing.row5Desc': 'Unlimited all-day membership, valid for 1 month from purchase. Full instructor support, 10% off supplements.',
      'pricing.row6Title': 'STUDENT membership with post-workout protein',
      'pricing.row6Desc': 'Unlimited all-day membership for 1 month. Full instructor support, 10% off supplements, plus a protein shake after every workout.',
      'pricing.row7Title': 'STUDENT OPEN membership — 2 / 3 months',
      'pricing.row7Desc': 'Unlimited all-day membership, valid for 2 or 3 months from purchase. Full instructor support, 10% off supplements.',
      'pricing.row8Title': 'Single visit',
      'pricing.row8Desc': 'Unlimited single visit. Instructor support included.',
      'pricing.row9Title': 'Personal training — 1 hour / over 3 hours',
      'pricing.row9Desc': 'Training with a personal trainer at the gym.',
      'pricing.row10Title': 'Personal training for 2 / 3–4 people',
      'pricing.row10Desc': 'Training with a personal trainer at the gym for a group of 2 or 3–4 people.',

      'promos.eyebrow': 'Promotions',
      'promos.title': 'Discounts & promotions',
      'promos.lead': 'See how you can train more while paying less.',

      'promos.group1Title': 'Membership purchase promotions',
      'promos.card1Title': 'Buy a 1- or 2-month membership — get a bonus',
      'promos.card1Text': 'When you buy a 1- or 2-month membership, you get a <span class="text-accent">FREE training plan!</span>',
      'promos.card1Note': 'If you continue your membership, we\'ll review your plan and adjust it as needed!',
      'promos.card2Title': 'Buy a 3-month membership — get a bonus',
      'promos.card2Text': 'When you buy a 3-month membership, you get a monthly training plan with a monthly check-in, plus a <span class="text-accent">FREE personal training session!</span>',

      'promos.group2Title': 'Personal training promotions',
      'promos.card3Title': 'Personal training discount for members',
      'promos.card3Text': 'Have a membership? Book a personal training session now and pay <span class="text-accent">80 PLN</span> for a single session, or <span class="text-accent">70 PLN</span> for more than 3 sessions.',
      'promos.card3Note': 'The regular price of a personal training session is <span class="text-accent">100 PLN</span>.',
      'promos.card4Title': 'Personal training once a week',
      'promos.card4Text': 'Train with a personal trainer once a week (4 sessions a month) for just <span class="text-accent">65 PLN</span> per session.',
      'promos.card4Note': 'The regular price of a personal training session is <span class="text-accent">100 PLN</span>.',

      'promos.group3Title': 'Supplement discounts',
      'promos.card5Title': 'Regulars get cheaper supplements',
      'promos.card5Text': 'Members with an active membership get up to <span class="text-accent">10%</span> off supplements and protein.',

      'promos.group4Title': 'Train with a friend',
      'promos.card6Title': 'Bring your friends',
      'promos.card6Text': 'Bring <span class="text-accent">two new members</span> who buy a membership and enjoy a <span class="text-accent">free month of membership!</span>',
      'promos.card6Note': 'Bring <span class="text-accent">five new members</span> who buy a monthly membership and get a <span class="text-accent">3-month membership</span> for free!',
      'promos.card7Title': 'Your friend trains for a dollar',
      'promos.card7Text': 'Have an active membership? You can <span class="text-accent">invite one person</span> to train for just <span class="text-accent">1 PLN!</span>',
      'promos.card7Note': 'This promotion applies to one invitation per monthly membership only.',

      'hours.eyebrow': 'Opening hours',
      'hours.title': 'Open<br>for you',
      'hours.lead': 'Plan your workout — check when we\'re open.',
      'hours.weekdays': 'Monday – Friday',
      'hours.saturday': 'Saturday',
      'hours.sunday': 'Sunday',
      'hours.holidaysLabel': 'Holidays',
      'hours.holidaysValue': 'Hours may vary',

      'bmi.eyebrow': 'Calculator',
      'bmi.title': 'Check your BMI',
      'bmi.lead': 'A quick starting point for a conversation with your coach about your goals.',
      'bmi.heightLabel': 'Height (cm)',
      'bmi.weightLabel': 'Weight (kg)',
      'bmi.submit': 'Calculate BMI',
      'bmi.error': 'Please enter valid height and weight values.',
      'bmi.categoryUnder': 'Underweight',
      'bmi.categoryNormal': 'Normal weight',
      'bmi.categoryOver': 'Overweight',
      'bmi.categoryObese': 'Obesity',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Start training today',
      'contact.lead': 'Visit us, call, or write — we\'ll get back to you as soon as we can.',
      'contact.addressLabel': 'Address',
      'contact.phoneLabel': 'Phone',
      'contact.emailLabel': 'Email',
      'contact.callCta': 'Call now',
    },
  };

  let currentLang = 'pl';

  /* ------------------------------------------------------------
     2. PRZEŁĄCZNIK JĘZYKA
  ------------------------------------------------------------ */
  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.setAttribute('lang', lang);
    currentLang = lang;

    // Zaktualizuj wynik BMI, jeśli jest już widoczny (zmiana kategorii na bieżąco)
    refreshBmiResultLanguage();
  }

  function setActiveLangButton(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function initLanguageSwitch() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyTranslations(lang);
        setActiveLangButton(lang);
      });
    });
  }

  /* ------------------------------------------------------------
     3. MENU MOBILNE
  ------------------------------------------------------------ */
  function initMobileMenu() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Zamknij menu po kliknięciu linku (mobile)
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------
     3b. LOGO — SCROLL NA SAMĄ GÓRĘ
     Klikniecie logo zawsze wraca na początek strony (smooth scroll),
     niezależnie od tego, w którym miejscu strony jest użytkownik.
  ------------------------------------------------------------ */
  function initLogoScrollTop() {
    const logo = document.getElementById('logoLink');
    if (!logo) return;

    logo.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------
     4. ANIMACJE POJAWIANIA SIĘ SEKCJI (reveal on scroll)
  ------------------------------------------------------------ */
  function initRevealOnScroll() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || revealEls.length === 0) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------
     5. KALKULATOR BMI
  ------------------------------------------------------------ */
  let lastBmiCategoryKey = null;

  function getBmiCategoryKey(bmi) {
    if (bmi < 18.5) return 'bmi.categoryUnder';
    if (bmi < 25) return 'bmi.categoryNormal';
    if (bmi < 30) return 'bmi.categoryOver';
    return 'bmi.categoryObese';
  }

  function refreshBmiResultLanguage() {
    if (!lastBmiCategoryKey) return;
    const categoryEl = document.getElementById('bmiCategory');
    if (categoryEl) {
      categoryEl.textContent = translations[currentLang][lastBmiCategoryKey];
    }
  }

  function initBmiCalculator() {
    const form = document.getElementById('bmiForm');
    if (!form) return;

    const heightInput = document.getElementById('bmiHeight');
    const weightInput = document.getElementById('bmiWeight');
    const resultBox = document.getElementById('bmiResult');
    const valueEl = document.getElementById('bmiValue');
    const categoryEl = document.getElementById('bmiCategory');
    const errorEl = document.getElementById('bmiError');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const heightCm = parseFloat(heightInput.value);
      const weightKg = parseFloat(weightInput.value);

      const isValid =
        Number.isFinite(heightCm) &&
        Number.isFinite(weightKg) &&
        heightCm > 0 &&
        weightKg > 0;

      if (!isValid) {
        resultBox.hidden = true;
        errorEl.hidden = false;
        return;
      }

      errorEl.hidden = true;

      const heightM = heightCm / 100;
      const bmi = weightKg / (heightM * heightM);
      const categoryKey = getBmiCategoryKey(bmi);

      lastBmiCategoryKey = categoryKey;

      valueEl.textContent = bmi.toFixed(1);
      categoryEl.textContent = translations[currentLang][categoryKey];
      resultBox.hidden = false;
    });
  }

  /* ------------------------------------------------------------
     6. ROK W STOPCE
  ------------------------------------------------------------ */
  function setFooterYear() {
    const yearEl = document.getElementById('footerYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /* ------------------------------------------------------------
     INICJALIZACJA
  ------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitch();
    initMobileMenu();
    initLogoScrollTop();
    initRevealOnScroll();
    initBmiCalculator();
    setFooterYear();
  });
})();