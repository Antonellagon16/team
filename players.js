const players = [
    { firstName: 'Carlos', lastName: 'Rodón', position: 'SP', age: 32, photo: 'imgs/carlosRodon.jpg', funFact: 'Carlos Rodón threw a no-hitter in 2021, missing a perfect game by just one hit-by-pitch.' },
    { firstName: 'Max', lastName: 'Fried', position: 'SP', age: 31, photo: 'imgs/maxFried.jpg', funFact: 'Max Fried is a former first-round draft pick and a high school teammate of Jack Flaherty and Lucas Giolito.' },
    { firstName: 'Marcus', lastName: 'Stroman', position: 'SP', age: 30, photo: 'imgs/marcusStroman.jpg', funFact: 'Marcus Stroman is the first MLB pitcher listed under 6 feet to be drafted in the first round.' },
    { firstName: 'Clarke', lastName: 'Schmidt', position: 'SP', age: 29, photo: 'imgs/clarkeSchmidt.jpg', funFact: 'Clarke Schmidt returned to pitching after Tommy John surgery shortly after being drafted by the Yankees.' },
    { firstName: 'Will', lastName: 'Warren', position: 'SP', age: 25, photo: 'imgs/willWarren.jpg', funFact: 'Will Warren is known for his sweeping slider, a pitch that helped fast-track his rise in the Yankees system.' },
    { firstName: 'Luke', lastName: 'Weaver', position: 'RP', age: 31, photo: 'imgs/LukeWeaver.jpg', funFact: 'Luke Weaver was named after Luke Skywalker, a nod to his family’s love for Star Wars.' },
    { firstName: 'Devin', lastName: 'Williams', position: 'RP', age: 30, photo: 'imgs/devinWilliams.jpg', funFact: 'Devin Williams is famous for his “Airbender” changeup, one of the most unique pitches in baseball.' },
    { firstName: 'Ian', lastName: 'Hamilton', position: 'RP', age: 29, photo: 'imgs/ianHamilton.jpg', funFact: 'Ian Hamilton once suffered a facial injury from a batted ball while sitting in the dugout.' },
    { firstName: 'Tim', lastName: 'Hill', position: 'RP', age: 35, photo: 'imgs/timHill.jpg', funFact: 'Tim Hill overcame colon cancer before making his MLB debut.' },
    { firstName: 'Mark', lastName: 'Leiter Jr.', position: 'RP', age: 34, photo: 'imgs/MarkLeiterJr.jpg', funFact: 'Mark Leiter Jr. is part of a three-generation MLB family including his father and uncle.' },
    { firstName: 'Tyler', lastName: 'Matzek', position: 'RP', age: 34, photo: 'imgs/tylerMatzek.jpg', funFact: 'Tyler Matzek battled severe control issues and the “yips” before making a remarkable comeback with the Braves.' },
    { firstName: 'Fernando', lastName: 'Cruz', position: 'RP', age: 35, photo: 'imgs/fernandoCruz.jpg', funFact: 'Fernando Cruz made his MLB debut at age 32, 15 years after being drafted.' },
    { firstName: 'Yerry', lastName: 'De Los Santos', position: 'RP', age: 27, photo: 'imgs/yerryDeLosSantos.jpg', funFact: 'Yerry De Los Santos made his MLB debut with the Pirates and quickly became a trusted reliever.' },
    { firstName: 'Ryan', lastName: 'Yarbrough', position: 'RP', age: 33, photo: 'imgs/RyanYarbrough.jpg', funFact: 'Ryan Yarbrough is known for his unorthodox pitching style and ability to work as a bulk reliever.' },

    { firstName: 'Austin', lastName: 'Wells', position: 'C', age: 25, photo: 'imgs/austinWells.jpg', funFact: 'Austin Wells was drafted out of the University of Arizona and is known for his power bat.' },
    { firstName: 'J.C.', lastName: 'Escarra', position: 'C', age: 30, photo: 'imgs/J.C.Escarra.jpg', funFact: 'J.C. Escarra played college baseball at FIU and is known for his defensive versatility.' },
    { firstName: 'Ben', lastName: 'Rice', position: 'C', age: 26, photo: 'imgs/benRice.jpg', funFact: 'Ben Rice attended Dartmouth and was an Ivy League standout before being drafted.' },

    { firstName: 'Paul', lastName: 'Goldschmidt', position: '1B', age: 37, photo: 'imgs/paulGoldschmidt.jpg', funFact: 'Paul Goldschmidt is a 7-time All-Star and 2022 National League MVP.' },
    { firstName: 'DJ', lastName: 'LeMahieu', position: '2B/3B', age: 36, photo: 'imgs/DjLemahieu.jpg', funFact: 'DJ LeMahieu is one of the few players to win a batting title in both the AL and NL.' },
    { firstName: 'Jazz', lastName: 'Chisholm Jr.', position: '2B', age: 27, photo: 'imgs/jazzChisholmJr.jpg', funFact: 'Jazz Chisholm Jr. is known for his electric style and was on the cover of MLB The Show 23.' },
    { firstName: 'Anthony', lastName: 'Volpe', position: 'SS', age: 24, photo: 'imgs/anthonyVolpe.jpg', funFact: 'Anthony Volpe grew up a Yankees fan and idolized Derek Jeter, who also played shortstop.' },

    { firstName: 'Pablo', lastName: 'Reyes', position: 'INF', age: 31, photo: 'imgs/pabloReyes.jpg', funFact: 'Pablo Reyes once hit a grand slam as a rookie with the Pirates.' },
    { firstName: 'Jorbit', lastName: 'Vivas', position: '2B', age: 24, photo: 'imgs/JorbitVivas.jpg', funFact: 'Jorbit Vivas hails from Venezuela and has shown promise as a contact hitter with speed.' },

    { firstName: 'Aaron', lastName: 'Judge', position: 'RF', age: 33, photo: 'imgs/AaronJudge.jpg', funFact: 'Aaron Judge hit 62 home runs in 2022, breaking the American League single-season record.' },
    { firstName: 'Cody', lastName: 'Bellinger', position: 'CF/1B', age: 29, photo: 'imgs/codyBellinger.jpg', funFact: 'Cody Bellinger won both Rookie of the Year and MVP while with the Dodgers.' },
    { firstName: 'Jasson', lastName: 'Domínguez', position: 'CF', age: 22, photo: 'imgs/jasonDominguez.jpg', funFact: 'Jasson Domínguez is nicknamed “The Martian” for his otherworldly talent at a young age.' },
    { firstName: 'Oswaldo', lastName: 'Cabrera', position: 'LF/INF', age: 25, photo: 'imgs/oswaldoCabrera.jpg', funFact: 'Oswaldo Cabrera is known for his energy and versatility, playing nearly every position on the field.' },
    { firstName: 'Trent', lastName: 'Grisham', position: 'OF', age: 28, photo: 'imgs/trentGrisham.jpg', funFact: 'Trent Grisham won a Gold Glove for his outstanding defense in center field.' },
];
