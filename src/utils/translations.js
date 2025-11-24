import { educations } from "./educations";
import { references } from "./references";
import { navigationPaths } from "./navigationPaths";
import { techStackTools } from "./techStack";

const sinceYear = new Date().getFullYear() - 2019;

const contactDatas = {
  email: "chen.kevin05@icloud.com",
  phone: "+36 70 431 0339",
  linkedin: {
    text: "linkedin.com/chencsi",
    href: "https://www.linkedin.com/in/chencsi/",
  },
  github: "https://github.com/chencsi/"
}

const translations = {
  en: {
    time: {
      year: "year",
      month: "month",
      week: "week",
      day: "day",
      hour: "hour",
      minute: "minute",
      second: "second"
    },
    layout: {
      nav: {
        links: [
          { name: "Home", path: navigationPaths.home },
          { name: "Education", path: navigationPaths.education },
          { name: "References", path: navigationPaths.references },
          { name: "Contact", path: navigationPaths.contact }
        ]
      },
      footer: {
        links: {
          linkedin: contactDatas.linkedin.href,
          github: contactDatas.github
        },
        pages: "Pages",
        further: "Further links",
        p: "Code and design: Kevin Chen 💙 · © 2025"
      }
    },
    pages: {
      home: {
        hero: {
          h1: "Kevin Chen",
          h2: "Frontend Developer Student",
          p: "I build simple and user-friendly websites",
          button: "Contact",
          imgAlt: "Portrait photo",
        },
        highlights: [
          {
            h3: "Responsive websites",
            p: "Optimized view for all devices.",
          },
          {
            h3: "Modern technologies",
            p: "React, Angular, Framer Motion and TailwindCSS",
          },
          {
            h3: "UI/UX focus",
            p: "Clean and user-friendly experience.",
          },
        ],
        about: {
          h3: "About me",
          p1: `I started programming ${sinceYear} years ago, but my interest in programming goes back to my elementary school years. Since then, I have learned many programming languages, but I fell in love with web development. I finished a software developer and tester course, and now I'm in my first year at university studying computer engineering. I have worked on many school and personal projects, which you can see in the <a href="/references" class="text-blue-400 hover:underline font-semibold">references</a> section.`,
          p2: "My goal is to build user-friendly websites and web applications that solve real problems. I keep my knowledge up-to-date to use the newest technologies.",
        },
        skills: {
          h3: "My Highlighted Skills",
          coding: "Coding Skills",
          professional: "Extra Skills",
          jumpToReferences: "Jump to references"
        },
        techStack: {
          h4: "Tools & Technologies",
          p: "These are the tools I use every day.",
          items: techStackTools
        },
        education: {
          h3: "My Education",
          p: "School education played a big role in getting my knowledge, but I also spent a lot of time learning by myself to know modern solutions.",
          educations: [
            {
              ...educations.gde,
              h5: "Dennis Gabor University",
              p1: "2025-",
              p2: "I'm currently in my first semester here studying computer engineering and I'm excited to learn what new skills I can get here.",
            },
            {
              ...educations.neu,
              h5: "BMSZC Janos Neumann IT School",
              p1: "2020-2025",
              p2: "Here I learned about Full-Stack development from basics to frameworks, then database management and containerization.",
            },
            {
              ...educations.plugin,
              h5: "My first website and game server plugin",
              p1: "2019",
              p2: "I was still in elementary school, but I started to learn programming actively during summer break.",
            },
          ],
        },
      },
      references: {
        h3: "References",
        p: "I want to show these projects below, most were made in teams, and you can see details through GitHub repositories.",
        references: [
          {
            ...references.uranus,
            description: "This is a mobile app that lets you use Neptune (university system) in app form with one-time login."
          },
          {
            ...references.vagyidenvagysoha,
            description: "A landing page that I'm making for a private education business owner. It has a modern and clean single page design that is completely static."
          },
          {
            ...references.wteDesktop,
            description: "With this web application, we wanted to make daily tasks easier for web teachers in my old school by checking and correcting HTML and CSS assignments automatically. I didn't work on the main logic, but I helped with the design, some API endpoints, and automated testing."
          },
          {
            ...references.extension,
            description: "This project is the student part of the WTE web application, a browser pop-up that helps students track their progress on assignments. This project uses much of the same logic as the main project for checking, but I was responsible for the user interface."
          },
        ],
      },
      contact: {
        h3: "Contact",
        p: "If you have any questions about me, you can reach me using the form below or through my contact information.",
        section1: {
          h4: "My Contact Information:",
          mail: contactDatas.email,
          phone: contactDatas.phone,
          linekdin: contactDatas.linkedin,
        },
        section2: {
          h4: "My Resume:",
          item1: "Download",
          item2: "Quick View",
        },
        form: {
          name: {
            label: "Name",
            placeholder: "Enter your name (optional)",
            required: "Name is required"
          },
          email: {
            label: "Email",
            placeholder: "Enter your email address",
            required: "Email address is required",
            invalid: "Please enter a valid email address"
          },
          phone: {
            label: "Phone",
            placeholder: "Enter your phone number (optional)",
            invalid: "Please enter the following format: +36 30 123 4567"
          },
          subject: {
            label: "Subject",
            placeholder: "Enter the subject of your message",
            required: "Subject is required"
          },
          message: {
            label: "Message",
            placeholder: "Write your message here...",
            required: "Message is required",
            minLength: "Message must be at least 50 characters long",
            maxLength: "Message cannot be longer than 1000 characters"
          },
          send: "Send",
          sent: "Thank you for your message! I will check it and respond as soon as I can!",
          loading: "In progress",
          success: "Success",
          error: "Something went wrong"
        }
      },
      notfound: {
        h1: "Oops!",
        p: "Sorry, the page you are looking for does not exist. :(",
        button: "Back to home page"
      }
    },
  },
  hu: {
    time: {
      year: "év",
      month: "hónap",
      week: "hét",
      day: "nap",
      hour: "óra",
      minute: "perc",
      second: "másodperc"
    },
    layout: {
      nav: {
        links: [
          { name: "Kezdőlap", path: navigationPaths.home },
          { name: "Tanulmányok", path: navigationPaths.education },
          { name: "Referenciák", path: navigationPaths.references },
          { name: "Kapcsolat", path: navigationPaths.contact }
        ]
      },
      footer: {
        links: {
          linkedin: contactDatas.linkedin.href,
          github: contactDatas.github
        },
        pages: "Oldalak",
        further: "További linkek",
        p: "Kód és design: Kevin Chen 💙 · © 2025"
      }
    },
    pages: {
      home: {
        hero: {
          h1: "Kevin Chen",
          h2: "Frontend fejlesztő hallgató",
          p: "Letisztult és felhasználóbarát weboldalakat építek",
          button: "Kapcsolat",
          imgAlt: "Portré fotó",
        },
        highlights: [
          {
            h3: "Reszponzív weboldalak",
            p: "Minden eszközre optimalizált megjelenés.",
          },
          {
            h3: "Modern technológiák",
            p: "React, Angular, Framer Motion és TailwindCSS",
          },
          {
            h3: "UI/UX fókusz",
            p: "Letisztult és felhasználóbarát felhasználói élmény.",
          },
        ],
        about: {
          h3: "Bemutatkozás",
          p1: `${sinceYear} éve kezdtem el foglalkozni programozással, azonban a programozás iránti érdeklődésem egészen általános iskolás koromra nyúlik vissza. Azóta több programozási nyelvvel és iránnyal találkoztam, de végül a webfejlesztés nőtt a szívemhez. Egy szoftverfejlesztő és -tesztelő technikusi képzést végeztem el, most pedig az első évem töltöm egyetemen mérnökinformatikus képzésen. Eddig számos iskolai és saját projektben vettem részt, ezekre pontosabban a <a href="/references" class="text-blue-400 hover:underline font-semibold">referenciáknál</a> térek ki.`,
          p2: "Célom, hogy felhasználóbarát weboldalakat és webalkalmazásokat építsek, amik valós problémákra találnak megoldást. Folyamatosan naprakészen tartom a tudástáram, hogy a legújabb technológiákat használjam.",
        },
        skills: {
          h3: "Kiemelendő készségeim",
          coding: "Programozási készségek",
          professional: "Extra készségek",
          jumpToReferences: "Tovább a referenciákhoz"
        },
        techStack: {
          h4: "Eszközök & Technológiák",
          p: "Ezeket az eszközöket szoktam nap mint nap használni.",
          items: techStackTools
        },
        education: {
          h3: "Tanulmányaim",
          p: "A eddigi tudásom megszerzésében nagy szerepet játszott az oktatás amit kaptam az iskolában, azonban sok időt fordítottam mellette az önfejlesztésre, hogy megismerjem a modern és korszerű megoldásokat.",
          educations: [
            {
              ...educations.gde,
              h5: "Gábor Dénes Egyetem",
              p1: "2025-",
              p2: "Jelenleg az első félévemet töltöm itt, mérnökinformatikus szakon és izgatottan várom, milyen további skilleket sajátíthatok még itt el.",
            },
            {
              ...educations.neu,
              h5: "BMSZC Neumann János Informatikai Technikum",
              p1: "2020-2025",
              p2: "Itt betekintést nyerhettem a Full-Stack fejlesztésbe az alapoktól fogva a keretrendszerekig, majd adatbázis kezelést és konténerizációt is tanultunk.",
            },
            {
              ...educations.plugin,
              h5: "Első weboldalam és játékszerver pluginom",
              p1: "2019",
              p2: "Ekkor még általános iskolába jártam, azonban már aktívan elkezdtem nyári szünetben foglalkozni a programozással.",
            },
          ],
        },
      },
      references: {
        h3: "Referenciák",
        p: "Az alább látható projektjeim szeretném kiemelni, javarészt csapatban készítettük őket, ezeket és a részleteket a GitHub repositorykon keresztül lehet látni.",
        references: [
          {
            ...references.uranus,
            description: "Ez egy mobilalkalmazás ami lehetővé teszi, hogy alkalmazás formájában lehessen használni a Neptunt egyszeri bejelentkezés mellett."
          },
          {
            ...references.vagyidenvagysoha,
            description: "Egy landing page, amit felkérésre készítek egy magán oktatással foglalkozó vállalkozónak. A megjelenés modern és letisztult single page, ami teljesen statikus."
          },
          {
            ...references.wteDesktop,
            description: "Ezzel a webalkalmazással a volt iskolámban tanító web tanáraink napi feladatait szerettük volna megkönnyíteni azáltal, hogy automatizáltuk számukra a HTML és CSS feladatsorok ellenőrzését és kijavítását. A mögöttes logikáért nem én feleltem, én a megjelenésben, pár API végpontban és az automatizált tesztelésben vettem részt."
          },
          {
            ...references.extension,
            description: "Ez a projekt a diák oldali része a WTE webalkalmazásnak, ami egy böngészőben lévő pop-up, hogy a diákok folyamatosan tudják követni, hogy hol tartanak a feladat megoldásában. Ebben a projektben leginkább a nagy testvér projekt logikája van szintén implementálva ellenőrzéshez, azonban én itt a felhasználói felület megjelenítéséért feleltem."
          },
        ],
      },
      contact: {
        h3: "Kapcsolat",
        p: "Bármilyen kérdésed merülne fel velem kapcsolatban, az alábbi form segítségével, esetleg az alatta található elérhetőségeimen tudsz elérni engem.",
        section1: {
          h4: "Elérhetőségeim:",
          mail: contactDatas.email,
          phone: contactDatas.phone,
          linekdin: contactDatas.linkedin,
        },
        section2: {
          h4: "Önéletrajzom:",
          item1: "Letöltés",
          item2: "Megtekintés",
        },
        form: {
          name: {
            label: "Név",
            placeholder: "Add meg a neved (opcionális)",
            required: "Név megadása kötelező"
          },
          email: {
            label: "Email",
            placeholder: "Add meg az email címed",
            required: "Email cím megadása kötelező",
            invalid: "Kérlek adj meg egy érvényes email címet"
          },
          phone: {
            label: "Telefon",
            placeholder: "Add meg a telefonszámod  (opcionális)",
            invalid: "A következő formátumban add meg: +36 30 123 4567"
          },
          subject: {
            label: "Tárgy",
            placeholder: "Add meg az üzenet tárgyát",
            required: "Tárgy megadása kötelező"
          },
          message: {
            label: "Üzenet",
            placeholder: "Írd ide az üzeneted...",
            required: "Üzenet megadása kötelező",
            minLength: "Az üzenetnek legalább 50 karakter hosszúságúnak kell lennie",
            maxLength: "Az üzenet maximum 1000 karakter hosszú lehet"
          },
          send: "Küldés",
          sent: "Köszönöm az üzenetet! Amint engedi az időm, megnézem és válaszolok rá!",
          loading: "Folyamatban",
          success: "Sikeres",
          error: "Hiba történt"
        }
      },
      notfound: {
        h1: "Hoppá!",
        p: "Sajnos az általad keresett oldal nem létezik. :(",
        button: "Vissza a főoldalra"
      }
    },
  }
};

export default translations;
