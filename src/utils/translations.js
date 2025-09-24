const sinceYear = new Date().getFullYear() - 2020;

const translations = {
  hu: {
    layout: {
      nav: {
        links: [
          { name: "Kezdőlap", path: "/" },
          { name: "Referenciák", path: "/references" },
          { name: "Kapcsolat", path: "/contact" }
        ],
        settings: {
          darkmode: "Sötét mód",
          language: "Nyelv",
        },
      },
      footer: {
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
            p: "React, Angular, Laravel és TailwindCSS",
          },
          {
            h3: "UI/UX fókusz",
            p: "Letisztult és felhasználóbarát felhasználói élmény.",
          },
        ],
        about: {
          h3: "Rólam",
          p1: `A nevem Kevin és ${sinceYear} éve kezdtem el foglalkozni programozással, azonban a programozás iránti érdeklődésem egészen általános iskolás koromra nyúlik vissza. Azóta abszolút elszánt vagyok iránta. Ez idő alatt egy szoftverfejlesztő és -tesztelő technikusi képzést végeztem el, most pedig az egyetemi éveim kezdem meg mérnökinformatikus szakon. Eddig számos iskolai és saját projektben vettem részt, ezekre pontosabban a <a href="/references" class="text-blue-400 hover:underline">referenciáknál</a> térek ki.`,
          p2: "Célom, hogy felhasználóbarát weboldalakat és webalkalmazásokat építsek, amik valós problémákra találnak megoldást. Folyamatosan naprakészen tartom a tudástáram, hogy a legújabb technológiákat használjam.",
        },
        education: {
          h3: "Tanulmányok",
          schools: [
            {
              h5: "Gábor Dénes Egyetem",
              p1: "2025-",
              p2: "Jelenleg az első félévemet töltöm itt, mérnökinformatikus szakon és izgatottan várom, milyen további skilleket sajátíthatok még itt el.",
            },
            {
              h5: "BMSZC Neumann János Informatikai Technikum",
              p1: "2020-2025",
              p2: "Itt betekintést nyerhettem a Full-Stack fejlesztésbe, adatbázis kezelést és konténerizációt tanultunk.",
            },
          ],
        },
      },
      references: {
        h3: "Referenciák",
        p: "Az alább látható projektjeim szeretném kiemelni, javarészt csapatban készítettük őket, ezeket és a részleteket a GitHub repositorykon keresztül lehet látni.",
        references: [
          {
            h4: "Uranus",
            img: "/assets/uranus.jpg",
            badges: [
              "React Native",
              "Expo",
              "Nativewind"
            ],
            description: "Ez egy mobilalkalmazás ami lehetővé teszi, hogy alkalmazás formájában lehessen használni a Neptunt egyszeri bejelentkezés mellett."
          },
          {
            h4: "Vagy idén vagy soha",
            img: "/assets/vagyidenvagysoha.jpg",
            badges: [
              "React",
              "Vite",
              "MaterialUI",
              "TailwindCSS"
            ],
            description: "Egy landing page, amit felkérésre készítek egy magán oktatással foglalkozó vállalkozónak. A megjelenés modern és letisztult single page, ami teljesen statikus."
          },
          {
            h4: "Web Task Evaulator (WTE)",
            img: "/assets/wte.jpg",
            badges: [
              "Vue",
              "Pinia",
              "FormKit",
              "Laravel",
              "TailwindCSS"
            ],
            description: "Ezzel a webalkalmazással a volt iskolámban tanító web tanáraink napi feladatait szerettük volna megkönnyíteni azáltal, hogy automatizáltuk számukra a HTML és CSS feladatsorok ellenőrzését és kijavítását. A mögöttes logikáért nem én feleltem, én a megjelenésben, pár API végpontban és az automatizált tesztelésben vettem részt."
          },
          {
            h4: "WTE - Chrome Extension",
            img: "/assets/extension.jpg",
            badges: [
              "Angular",
              "RxJS",
              "Lucide",
              "TailwindCSS"
            ],
            description: "Ez a projekt a diák oldali része a WTE webalkalmazásnak, ami egy böngészőben lévő pop-up, hogy a diákok folyamatosan tudják követni, hogy hol tartanak a feladat megoldásában. Ebben a projektben leginkább a nagy testvér projekt logikája van szintén implementálva ellenőrzéshez, azonban én itt a felhasználói felület megjelenítéséért feleltem."
          },
        ],
      },
      contact: {
        h3: "Kapcsolat",
      }
    },
  },
  en: {
    layout: {
      nav: {
        links: [
          { name: "Home", path: "/" },
          { name: "References", path: "/references" },
          { name: "Contact", path: "/contact" }
        ],
        settings: {
          darkmode: "Dark mode",
          language: "Language",
        },
      },
      footer: {
        p: "Code & design: Kevin Chen 💙 · © 2025"
      }
    },
    pages: {
      home: {
        hero: {
          h1: "Kevin Chen",
          h2: "Frontend Developer Student",
          p: "I build clean and user-friendly websites",
          button: "Contact",
          imgAlt: "Portrait photo",
        },
        highlights: [
          {
            h3: "Responsive websites",
            p: "Optimized appearance for all devices.",
          },
          {
            h3: "Modern technologies",
            p: "React, Angular, Laravel and TailwindCSS",
          },
          {
            h3: "UI/UX focus",
            p: "Clean and user-friendly user experience.",
          },
        ],
        about: {
          h3: "About me",
          p1: `My name is Kevin and I started programming ${sinceYear} years ago, but my interest in programming goes back to elementary school. Since then, I have been absolutely dedicated to it. During this time, I completed a software developer and tester technician course, and now I am starting my university years as an engineering IT student. So far, I have participated in several school and personal projects, which I detail more precisely in the <a href="/references" class="text-blue-400 hover:underline">references</a> section.`,
          p2: "My goal is to build user-friendly websites and web applications that solve real problems. I constantly keep my knowledge up to date to use the latest technologies.",
        },
        education: {
          h3: "Education",
          schools: [
            {
              h5: "Gábor Dénes University",
              p1: "2025-",
              p2: "Currently in my first semester here as an engineering IT student, and I am excited to see what further skills I can acquire.",
            },
            {
              h5: "BMSZC Neumann János Informatics Technical School",
              p1: "2020-2025",
              p2: "Here I gained insight into Full-Stack development, learned about database management and containerization.",
            },
          ],
        },
      },
      references: {
        h3: "References",
        p: "I would like to highlight my projects below, most of which were created in a team. You can see these and the details through the GitHub repositories.",
        references: [
          {
            h4: "Uranus",
            img: "/assets/uranus.jpg",
            badges: [
              "React Native",
              "Expo",
              "Nativewind"
            ],
            description: "This is a mobile application that allows you to use Neptun in app form with a single login."
          },
          {
            h4: "Vagy idén vagy soha",
            img: "/assets/vagyidenvagysoha.jpg",
            badges: [
              "React",
              "Vite",
              "MaterialUI",
              "TailwindCSS"
            ],
            description: "A landing page I am creating on commission for a private education entrepreneur. The appearance is a modern and clean single page, which is completely static."
          },
          {
            h4: "Web Task Evaulator (WTE)",
            img: "/assets/wte.jpg",
            badges: [
              "Vue",
              "Pinia",
              "FormKit",
              "Laravel",
              "TailwindCSS"
            ],
            description: "With this web application, we wanted to make the daily tasks of our web teachers at my former school easier by automating the checking and correction of HTML and CSS assignments. I was not responsible for the underlying logic, I participated in the UI, some API endpoints, and automated testing."
          },
          {
            h4: "WTE - Chrome Extension",
            img: "/assets/extension.jpg",
            badges: [
              "Angular",
              "RxJS",
              "Lucide",
              "TailwindCSS"
            ],
            description: "This project is the student-side part of the WTE web application, which is a browser pop-up so that students can continuously track their progress in solving the task. In this project, the logic of the main project is also implemented for checking, but I was responsible for the user interface."
          }
        ],
      },
    },
  },
};

export default translations;
