const sinceYear = new Date().getFullYear() - 2020;

const translations = {
    hu: {
        layout: {
            nav: {
                links: {
                    home: "Főoldal",
                    referencies: "Referenciák",
                    contact: "Kapcsolat",
                },
                settings: {
                    darkmode: "Sötét mód",
                    language: "Nyelv",
                },
            },
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
                highlights: {
                    blue: {
                        h3: "Reszponzív weboldalak",
                        p: "Minden eszközre optimalizált megjelenés.",
                    },
                    yellow: {
                        h3: "Modern technológiák",
                        p: "React, Angular, Laravel és TailwindCSS",
                    },
                    green: {
                        h3: "UI/UX fókusz",
                        p: "Letisztult és felhasználóbarát felhasználói élmény.",
                    },
                },
                about: {
                    h3: "Rólam",
                    p1: `A nevem Kevin és ${sinceYear} éve kezdtem el foglalkozni programozással, azonban a programozás iránti érdeklődésem egészen általános iskolás koromra nyúlik vissza. Azóta abszolút elszánt vagyok iránta. Ez idő alatt egy szoftverfejlesztő és -tesztelő technikusi képzést végeztem el, most pedig az egyetemi éveim kezdem meg mérnökinformatikus szakon. Eddig számos iskolai és saját projektben vettem részt, ezekre pontosabban a <a href="/references" className="text-blue-400 hover:underline">referenciáknál</a> térek ki.`,
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
        },
    },
    en: {
        layout: {
            nav: {
                links: {
                    home: "Home",
                    referencies: "References",
                    contact: "Contact",
                },
                settings: {
                    darkmode: "Dark mode",
                    language: "Language",
                },
            },
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
                highlights: {
                    blue: {
                        h3: "Responsive websites",
                        p: "Optimized appearance for all devices.",
                    },
                    yellow: {
                        h3: "Modern technologies",
                        p: "React, Angular, Laravel and TailwindCSS",
                    },
                    green: {
                        h3: "UI/UX focus",
                        p: "Clean and user-friendly user experience.",
                    },
                },
                about: {
                    h3: "About me",
                    p1: `My name is Kevin and I started programming ${sinceYear} years ago, but my interest in programming goes back to elementary school. Since then, I have been absolutely dedicated to it. During this time, I completed a software developer and tester technician course, and now I am starting my university years as an engineering IT student. So far, I have participated in several school and personal projects, which I detail more precisely in the <a href="/references" className="text-blue-400 hover:underline">references</a> section.`,
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
        },
    },
};

export default translations;
