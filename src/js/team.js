$("#teamInfo").hide();

var photosTeam=[
    "Carlos.jpg",
    "vero.jpg",
    "Pawel.jpg",
    "Humberto.png",
    "Ale2.jpg",
    "julia_1.jpg",
    "Diego.jpg"
];

var bioTeam = [
    `Carlos es originario del “Llano en Llamas” en Jalisco, México. Su libro favorito es “Pedro
Páramo”. Tiene más de 15 años de experiencia en Private Equity y Venture Capital. Es
también CEO de Kurowi Games, empresa de Ed-Tech dedicada a generar contenido
educativo digital y juegos de video. Es mentor de emprendedores sociales para programas
como Momentum de BBVA, y New Ventures Exponential de Fomento Social Banamex.
Carlos estudió Administración Financiera en el TEC de Monterrey y actualmente trata de
“aprender a aprender” de los grandes: Charlie Munger, Nassim Taleb, Richard Feynman,
Naval Ravikant, H.G. Wells, Borges.`,
    `“La educación es el arma más poderosa que puedes usar para cambiar al mundo”
    <br>- Nelson Mandela
<br>
Ciudad de México, 1990. Nacida en luna llena. Filántropa, viajera, lectora y abogada. Disfruta del
deporte, de las aventuras y las actividades rodeada de amigos y naturaleza. Procura aprender cosas
nuevas para cambiar los ojos con los que ve el mundo. Mente abierta y amante de los animales.
Egresada de la Escuela Libre de Derecho, abogada con experiencia en derecho penal, corporativo,
litigio constitucional, competencia económica y telecomunicaciones. Apasionada de la educación,
ama su trabajo y está decidida a ser una más de todas las personas que tenemos que trabajar para
que la educación en México y Latinoamérica funcione. Como directora de operaciones en The Pale
Blue Dot tiene experiencia en la implementación de proyectos educativos con tecnología en
comunidades mexicanas, piensa que hay mucho trabajo por delante y que solo a través de la
educación y del pensamiento colectivo podrá la humanidad aprender a respetar, amar y cuidar el
bello planeta al que llamamos “hogar”.`,
    "Pawel es programador fullstack y desarrollador de videojuegos. Trabajó 4 años en Yogome como desarrollador de videojuegos, desarrollador web y como lider de programación en el área de HTML5, en donde ayudó a coordinar, asesorar, capacitar y desarrollar software en conjunto con un grupo de 10 personas. Junto con el equipo, Pawel fue parte del desarrollo de alrededor de 200 minijuegos, un torneo multijugador de matemáticas usando distintos dispositivos a la vez, libros interactivos educativos, una sección de videos, sección de aventuras con batallas, la plataforma del torneo reto cuantrix para Televisa, entre muchos otros proyectos... Pawel le fascina la tecnología y siempre le gusta estar aprendiendo cosas nuevas, su mayor pasión son los videojuegos tanto jugar como crear.",
    `“En este lugar perdemos demasiado tiempo mirando hacia atrás.<br>
Camina hacia el futuro, abriendo nuevas puertas y probando cosas nuevas, se curioso… porque
nuestra curiosidad siempre nos conduce por nuevos caminos.” <br>
-Walt Disney
<br>
Julio 17, 1990. Ilustrador y Diseñador Mexicano. Nacido y criado en una ciudad en medio
del desierto. Le gusta: aprender toda clase de cosas innecesarios. Odia: La frase
&quot;¡Compórtate como un adulto, por el amor de Dios!&quot;. Tiene experiencia en diseño Web,
UI/UX y producción para medios. En su último trabajo se desempeñó como líder de
ilustración para Yogome, una compañía nacional de video juegos educativos. Se sientecómodo trabajando en equipo, y conociendo más de la gente que lo rodea. Es apasionado cuando se trata de aprender sobre otras culturas, idiomas y estudios de género. Ama su trabajo como profesor de medio tiempo en una universidad y a su perro llamado Bob.`,
    `“El objetivo del arte no es representar la apariencia externa de las cosas, sino su significado interior”<br>
-Aristóteles.
<br>
México, 1990. Amante de la filosofía del arte. Artista orgullosamente mexicana egresada de la licenciatura de
Bellas Artes por parte del San Francisco Art Institute, espacio y tiempo en donde su vida cambio 360º. Al terminar regresó a su tierra natal, la CDMX. Trabajó como voluntaria en el Museo Jumex en donde aprendió técnicas pedagógicas para la enseñanza de arte contemporáneo. En el 2018 fue la directora de Espacio Fidencia, un espacio multicultural para artistas en México. Hoy en día cursa un diplomado en Arte Terapia por medio de la escuela Taller Mexicano de Arteterapia en la Ciudad de México.
Grandes pasiones: Enseñarle a la gente a explorar su lado creativo y emocional a través de la pintura y diversión. En sus ratos libres ama cocinar comida vegetariana. Actualmente trabaja como Directora de
Comunicación y Arte para The Pale Blue Dot llevándole a la gente de las comunidades la oportunidad de ser un explorador del mundo mediante prácticas artísticas.`,
`“Estoy convencida que la educación es nuestra herramienta primordial que tenemos para lograr
escucharnos y entendernos a nosotros mismos y a los que nos rodean. La educación es un ejercicio de
cultivo constante; nadie nunca tendría por qué dejar de aprender. Al final, citando al educador brasileño
Paulo Freire, la educación per se no cambia al mundo, cambia a las personas que cambian al mundo. Y
para eso estamos aquí nosotros, ¿no? ”
<br>
Egresada de la licenciatura en Animación y Arte Digital por parte del Tecnológico de Monterrey Campus
Estado de México. Con un Diplomado en Danza Terapéutica Humanística por parte de Sensodanza A.C., un Diplomado en Antropología del Arte por parte del Laboratorio Transdisciplinario de Investigación y
Reinvensión, y con el tercer módulo finalizado del Diplomado de Escritura Literaria por parte de Literaria
Centro Mexicano de Escritores. Desde el 2009 ha impartido diversos talleres a niños de arte, movimiento,
lectura y escritura. Publicada en la antología de relato corto "Vita Contemplativa: Los invisibles"; en Textofilia
Ediciones bajo el sello Libros del Marqués; ha participado tanto como autora poeta como moderadora endiferentes presentaciones de poesía. Actualmente escritora en Verde Claro, diseñadora educativa y denarrativa en KurowiGames, Scrum Master con equipos de desarrolladores, y consultora de educación en The Pale Blue Dot. Calculadoramente impulsiva. Con tendencia a ser etiquetada de idealista; nunca aprendió a
cortarse las alas. Sus herramientas predilectas para saciar su necesidad imperiosa de contarse a sí misma y ocuparse de su persona son la escritura, el cuerpo y la imagen. La primera mujer nómada de raíces fuertes.<br>
En constante búsqueda de su reflejo en la pupila del Otro.    
    
    `,
    "Diego es el programador frontend The Pale Blue Dot, nacido en la cuna de la mexicanidad Iztapalapa graduado de la carrera de  diseño gráfico, pero se enfocó más en la parte de programación donde encontró más su pasión, trabajando por 5 años como desarrollador e-learning haciendo interactivos y cursos en línea dio el salto a juegos en HMTL5 para la empresa Yogome. Junto a un gran equipo realizó aplicaciones en línea como reto cuantrix para Televisa.<br>Diego le gusta jugar juegos de arcade y competir con sus amigos en juegos de pelea, y su otra gran pasión son los autos."
]

for(var i = 0; i<=photosTeam.length-1;i++){
    $("#team" + [i+1]).attr("num",i);
    $("#team" + [i+1]).click(function(){
        var thisNum = $(this).attr("num");
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
