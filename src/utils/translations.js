const sinceYear = new Date().getFullYear() - 2019;

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
        education: {
          h3: "Tanulmányaim",
          p: "A eddigi tudásom megszerzésében nagy szerepet játszott az oktatás amit kaptam az iskolában, azonban sok időt fordítottam mellette az önfejlesztésre, hogy megismerjem a modern és korszerű megoldásokat.",
          educations: [
            {
              h5: "Gábor Dénes Egyetem",
              p1: "2025-",
              p2: "Jelenleg az első félévemet töltöm itt, mérnökinformatikus szakon és izgatottan várom, milyen további skilleket sajátíthatok még itt el.",
              badges: [
                
              ]
            },
            {
              h5: "BMSZC Neumann János Informatikai Technikum",
              p1: "2020-2025",
              p2: "Itt betekintést nyerhettem a Full-Stack fejlesztésbe az alapoktól fogva a keretrendszerekig, majd adatbázis kezelést és konténerizációt is tanultunk.",
              badges: [
                "Web",
                "C#",
                "MYSQL",
                "Docker",
                "Linux"
              ]
            },
            {
              h5: "Első weboldalam és játékszerver pluginom",
              p1: "2019",
              p2: "Ekkor még általános iskolába jártam, azonban már aktívan elkezdtem nyári szünetben foglalkozni a programozással.",
              badges: [
                "HTML",
                "CSS",
                "JAVA"
              ]
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
            img: "/uranus-splash.png",
            size: "sm",
            badges: [
              "React Native",
              "Expo",
              "Nativewind"
            ],
            description: "Ez egy mobilalkalmazás ami lehetővé teszi, hogy alkalmazás formájában lehessen használni a Neptunt egyszeri bejelentkezés mellett."
          },
          {
            h4: "Vagy idén vagy soha",
            img: "/vagyidenvagysoha.png",
            size: "md",
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
            img: "/wte-desktop.png",
            size: "md",
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
            img: "/extension.jpeg",
            size: "[50px]",
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
          darkmode: "Dark Mode",
          language: "Language",
        },
      },
      footer: {
        p: "Code and design: Kevin Chen 💙 · © 2025"
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
            h3: "Responsive Websites",
            p: "Optimized appearance for all devices.",
          },
          {
            h3: "Modern Technologies",
            p: "React, Angular, Framer Motion and TailwindCSS",
          },
          {
            h3: "UI/UX Focus",
            p: "Clean and user-friendly experience.",
          },
        ],
        about: {
          h3: "About Me",
          p1: `My name is Kevin and I've been programming for ${sinceYear} years, although my interest in programming dates back to elementary school. I've been absolutely dedicated to it ever since. During this time, I completed a software developer and tester technical training, and now I'm starting my university years in computer engineering. So far, I've participated in numerous school and personal projects, which I detail more specifically in the <a href="/references" class="text-blue-400 hover:underline">references</a> section.`,
          p2: "My goal is to build user-friendly websites and web applications that solve real problems. I constantly keep my knowledge up-to-date to use the latest technologies.",
        },
        education: {
          h3: "My Education",
          educations: [
            {
              h5: "Dennis Gabor College",
              p1: "2025-",
              p2: "I'm currently spending my first semester here in computer engineering and I'm excited to see what additional skills I can acquire here.",
              badges: [
                
              ]
            },
            {
              h5: "BMSZC Neumann Technical School of Informatics",
              p1: "2020-2025",
              p2: "Here I gained insight into Full-Stack development from the basics to frameworks, then we also learned database management and containerization.",
              badges: [
                "Web",
                "C#",
                "MYSQL",
                "Docker",
                "Linux"
              ]
            },
            {
              h5: "My first website and game server plugin",
              p1: "2019",
              p2: "I was still in elementary school at this time, but I had already actively started to focus on programming during summer break.",
            },
          ],
        },
      },
      references: {
        h3: "References",
        p: "I would like to highlight my projects below, mostly made in teams. These and the details can be seen through the GitHub repositories.",
        references: [
          {
            h4: "Uranus",
            img: "/uranus-splash.png",
            size: "sm",
            badges: [
              "React Native",
              "Expo",
              "Nativewind"
            ],
            description: "This is a mobile application that allows you to use Neptun in application form with a single sign-on."
          },
          {
            h4: "Vagy idén vagy soha",
            img: "/vagyidenvagysoha.png",
            size: "md",
            badges: [
              "React",
              "Vite",
              "MaterialUI",
              "TailwindCSS"
            ],
            description: "A landing page that I'm creating by request for a private education entrepreneur. The appearance is a modern and clean single page that is completely static."
          },
          {
            h4: "Web Task Evaluator (WTE)",
            img: "/wte-desktop.png",
            size: "md",
            badges: [
              "Vue",
              "Pinia",
              "FormKit",
              "Laravel",
              "TailwindCSS"
            ],
            description: "With this web application, we wanted to make the daily tasks of our web teachers in our former school easier by automating the checking and correction of HTML and CSS task sets. I wasn't responsible for the underlying logic; I participated in the appearance, some API endpoints, and automated testing."
          },
          {
            h4: "WTE - Chrome Extension",
            img: "/extension.jpeg",
            size: "[50px]",
            badges: [
              "Angular",
              "RxJS",
              "Lucide",
              "TailwindCSS"
            ],
            description: "This project is the student side of the WTE web application, which is a pop-up in the browser so that students can continuously track where they are in solving the task. In this project, the logic of the big brother project is similarly implemented for checking, however, I was responsible for the user interface display here."
          },
        ],
      },
      contact: {
        h3: "Contact",
      }
    },
  }
};

export default translations;
