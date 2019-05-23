$("#teamInfo").hide();

var namesTeam = [
    "<b>Carlos Michel</b><br>      CEO and founder",
    "<b>Verónica Pastrana</b><br>  Project Manager",
    "<b>Pawel Lewinski</b><br>     Technology and Systems",
    "<b>Humberto Zugasti</b><br>   Educational content and art",
    "<b>Alejandra Morales</b><br>  Communication and Art",
    "<b>Julia Ivalú</b><br>        Education and content",
    "<b>Diego Rojas</b><br>        UX/UI Frontend",
    "<b>Ignacio Ordoñez</b><br>    Accounting and Finance"

]


var photosTeam=[
    "Carlos.jpg",
    "vero.jpg",
    "Pawel.jpg",
    "Humberto.png",
    "Ale2.jpg",
    "julia_1.jpg",
    "Diego.jpg",
    "ignacio.jpg"
];

var bioTeam = [
    `Carlos was born at the heart of "The Burning Plain" in Jalisco, México; and his
    bedside book is "Pedro Páramo". He has more than 15 years of experience in
    Private Equity and Venture Capital. He is also CEO of Kurowi Games, an Ed-Tech
    company dedicated to develop digital educational content, and video games. He is
    a mentor of social entrepreneurs for programs such as Momentum of BBVA, and
    New Ventures Exponential for Fomento Social Banamex. Carlos studied Financial
    Administration at the TEC of Monterrey, and is currently trying to "learn how to
    learn" from the great ones: Charlie Munger, Nassim Taleb, Richard Feynman,
    Bertrand Russell, Naval Ravikant, H.G. Wells, Borges ...`,
    `<i>"Education is the most powerful weapon you can use to change the world"</i>
    <br>- Nelson Mandela
<br>
<br>
Mexico City, 1990. Born on a full moon. Philanthropist, traveler, reader and lawyer.
Enjoy sports, adventures and activities surrounded by friends and nature. She tries
to learn new things to change the eyes with those she sees the world. Open mind
and animal lover. Graduated from the Escuela Libre de Derecho, lawyer with
experience in criminal law, corporate, constitutional litigation, economic competition
and telecommunications. Passionate about education, she loves her job and she´s
determined to be one of all the people we have to work to make education in
México and Latin America work. As director of operations at The Pale Blue Dot she
has experience in the implementation of educational projects with technology in
Mexican communities, she thinks that there is a lot of work ahead and that only
through education and collective thinking can humanity learn to respect, love and
take care of this beautiful planet we call "home".`,


    `Pawel is a full-stack programmer and video game developer. He worked for 4
    years in Yogome as a video game developer, web developer and as a
    programming leader in the HTML5 area, where he helped coordinate, advise, train
    
    and develop software together with a group of 10 people. Along with the team,
    Pawel was part of the development of around 200 mini-games, a multiplayer math
    tournament using different devices at the same time, interactive educational books,
    a video section, adventure section with battles, the questrix challenge platform for
    Televisa, among many other projects ... Pawel is fascinated by technology and
    always likes to be learning new things, his biggest passion is videogames both play
    and create them.`,

    `<i>"In this place we waste too much time looking back.
Walk to the future, opening new doors and trying new things, be curious ...
because our curiosity always leads us in new ways."</i> <br>
-Walt Disney
<br>
<br>
July 17, 1990. Illustrator and Mexican Designer. Born and raised in a city in the
middle of the desert. He likes to: learn all kinds of unnecessary things. Hates: The
phrase "Be an adult, for God´s sake!" He has experience in Web design, UI / UX
and production for media. In his last job, he worked as an illustration leader for
Yogome, a national educational video game company. He feels comfortable
working in a team, and knowing more about the people around him. He is
passionate when it comes to learning about other cultures, languages ​​and gender
studies. He loves his job as a part-time professor at a university and his dog
named Bob.`,

    `<i>"The goal of art is not to represent the external appearance of things, but their
    inner meaning"</i><br>
    -Aristotle.
<br>
<br>
Mexico, 1990. Lover of the philosophy of art. Proudly Mexican artist graduated
from the Bachelor of Fine Arts by the San Francisco Art Institute, space and time
where her life changed 180º. When she finished she returned to her homeland, the
CDMX. She worked as a volunteer at the Jumex Museum where she learned
pedagogical techniques for the teaching of contemporary art. In 2018 she was the
Director of Espacio Fidencia, a multicultural space for artists in Mexico. Nowadays,
she is taking a diploma in Art Therapy through the Mexican Workshop School of
Art Therapy in Mexico City.
Great passions: Teach people to explore their creative and emotional side through
painting and fun. In her spare time she loves cooking vegetarian food. She
currently works as Director of Communication and Art for The Pale Blue Dot, giving
people of the communities the opportunity to be an explorer of the world through
artistic practices.`,

`<i>"I am convinced that education is our primary tool that we have to be able to listen
and understand ourselves and those around us. Education is an exercise in
constant cultivation; No one would ever have to stop learning. In the end, citing
Brazilian educator Paulo Freire, education per se does not change the world, it
changes the people who change the world. And that&#39;s what we&#39;re here for, is not it?
"</i>
<br><br>
Graduated from the degree in Animation and Digital Art by the Tecnológico de
Monterrey Campus Estado de México. With a Diploma in Humanistic Therapeutic
Dance by Sensodanza A.C., a Diploma in Anthropology of Art from the
Transdisciplinary Research and Reinvestment Laboratory, and with the third
completed module of the Literary Writing Diploma by Literary Centro Mexicano de
Escritores. Since 2009 he has given various workshops to children of art,
movement, reading and writing. Published in the anthology of short story "Vita
Contemplativa: Los invisibles"; in Textofilia Editions under the seal Libros del
Marqués; she has participated both as poet author and moderator in different
presentations of poetry. She is currently a writer in Verde Claro, educational and
denarrative designer in KurowiGames, Scrum Master with teams of developers,
and education consultant in The Pale Blue Dot. Calculatingly impulsive. With a
tendency to be labeled as idealist; he never learned to cut his wings. Her favorite
tools to satisfy her imperative need to tell herself and take care of herself are
writing, body and image. The first nomad woman with strong roots.
In constant search of its reflection in the pupil of the Other.    
    
    `,
    `Diego is the frontend programmer at The Pale Blue Dot, born in the birthplace of la
“mexicanidad”, Iztapalapa. Graduated from the graphic design career, but focused
more on the part of programming where he found his passion. Working for 5 years
as an e-learning developer doing Interactive and online courses gave the jump to
games in HMTL5 for the company Yogome. Together with a great team he
developed online applications for the “Quantrix challenge” for Televisa. Diego likes
arcade games, and competing with his friends in fight games; and his other great
passion is cars.`,
`Ignacio is originally from Mexico City. Proud "Puma" since he has a Bachelor of
Accounting from the National Autonomous University of Mexico (UNAM). Apart

from his work as a tax specialist, he is also a shareholder of "Cuarto Piso Boutique
Audio - Visual", an advertising media agency.
In his free time he enjoys reading and painting.`
]

for(var i = 0; i<=photosTeam.length-1;i++){
    $("#team" + [i+1]).attr("num",i);
    $("#team" + [i+1]).click(function(){
        var thisNum = $(this).attr("num");
        
        $("#nameMemberWindow").html(namesTeam[thisNum])
        
        $("#photoInfo").attr("src","img/Portaretratos/"+ photosTeam[thisNum])
        $("#textInfo").html( bioTeam[thisNum] )
        showWindow();
    });
}

function showWindow(){
    $("#teamInfo").show();
    $("#teamInfo").css("opacity",1);
}

$("#closeBtnWindow").click(function(){
    $("#teamInfo").hide();
    $("#teamInfo").css("opacity",0);
});
