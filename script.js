const games = [
    {
        id: 1,
        name: "Grand Theft Auto: San Andreas",
        category: "PlayStation 2",
        image: "https://static.wikia.nocookie.net/esgta/images/c/c2/Grand_Theft_Auto_San_Andreas.JPG",
        description: "Videojuego desarrollado por Rockstar North. Es la séptima entrega de la saga.",
        console: "PlayStation 2",
        details: {
            year: "2004",
            genre: "Acción / Mundo abierto",
            consoles: "PS2, Xbox, PC",
            developer: "Rockstar Games",
            story: "Carl 'CJ' Johnson regresa a Los Santos tras la muerte de su madre, enfrentando bandas y corrupción policial.",
            reviews: "IGN 9.9/10, considerado de los mejores juegos de la historia.",
            modes: "Un jugador"
        }
    },
    {
        id: 2,
        name: "Shadow of the Colossus",
        category: "PlayStation 2",
        image: "https://img2-levelup.buscafs.com/46993_256x362.jpg",
        description: "Un joven debe derrotar a 16 gigantes conocidos como Colossi.",
        console: "PlayStation 2",
        details: {
            year: "2005",
            genre: "Aventura / Acción",
            consoles: "PS2 (remake en PS4)",
            developer: "Team Ico",
            story: "Un joven llamado Wander debe derrotar 16 colosos para revivir a una joven.",
            reviews: "Metacritic 91/100, obra de culto.",
            modes: "Un jugador"
        }
    },
    {
        id: 3,
        name: "God of War II",
        category: "PlayStation 2",
        image: "https://static.wikia.nocookie.net/gamezonee/images/b/b9/270px-Portada_God_of_War_II_PS2.jpg/revision/latest?cb=20120829181827&path-prefix=es",
        description: "Basado en la mitología griega. Kratos debe encontrar a las Hermanas del Destino.",
        console: "PlayStation 2",
        details: {
            year: "2007",
            genre: "Acción / Hack and Slash",
            consoles: "PS2",
            developer: "Santa Monica Studio",
            story: "Kratos desafía a los dioses del Olimpo tras convertirse en dios de la guerra.",
            reviews: "IGN 9.7/10, uno de los mejores juegos de acción.",
            modes: "Un jugador"
        }
    },
    {
        id: 4,
        name: "Resident Evil 4",
        category: "PlayStation 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuyTt6zYUOfdtBu9KB2mf8yS-8EjnFVVgKA&s",
        description: "Leon S. Kennedy debe rescatar a la hija del presidente secuestrada en España.",
        console: "PlayStation 2",
        details: {
            year: "2005",
            genre: "Survival Horror / Acción",
            consoles: "PS2, GameCube, PC",
            developer: "Capcom",
            story: "Leon S. Kennedy debe rescatar a la hija del presidente en un pueblo infectado.",
            reviews: "Metacritic 96/100, redefinición del survival horror.",
            modes: "Un jugador"
        }
    },
    {
        id: 5,
        name: "Halo: Combat Evolved",
        category: "Xbox",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjsNf8z91hPYpssWsAHX_0FRqLlHwpMmpNQ&s",
        description: "FPS desarrollado por Bungie Studios. Título debut de la Xbox.",
        console: "Xbox",
        details: {
            year: "2001",
            genre: "Shooter en primera persona",
            consoles: "Xbox, PC",
            developer: "Bungie",
            story: "El Jefe Maestro lucha contra el Covenant y descubre el misterio del anillo Halo.",
            reviews: "GameSpot 9.7/10, revolucionó los FPS en consola.",
            modes: "Un jugador / Multijugador"
        }
    },
    {
        id: 6,
        name: "Halo 2",
        category: "Xbox",
        image: "https://es.pickgamer.com/media/3751/Halo-2-285x380.jpg",
        description: "Segunda entrega de Halo. Continúa los sucesos de Combat Evolved.",
        console: "Xbox",
        details: {
            year: "2004",
            genre: "Shooter en primera persona",
            consoles: "Xbox",
            developer: "Bungie",
            story: "Expande la guerra del Covenant contra la humanidad.",
            reviews: "Metacritic 95/100, referente del online en consolas.",
            modes: "Campaña, multijugador"
        }
    },
    {
        id: 7,
        name: "Black",
        category: "Xbox",
        image: "https://media.vandal.net/t200/4705/200622723109_1.jpg",
        description: "FPS donde controlas a Jack Kellar, agente de operaciones encubiertas.",
        console: "Xbox",
        details: {
            year: "2006",
            genre: "Shooter en primera persona / Acción",
            consoles: "PlayStation 2, Xbox",
            developer: "Criterion Games / Electronic Arts",
            story: "El soldado Jack Kellar combate a la organización terrorista Séptima Ola.",
            reviews: "IGN 8.6/10, aclamado por sus gráficos y acción explosiva.",
            modes: "Un jugador"
        }
    },
    {
        id: 8,
        name: "Gears of War 3",
        category: "Xbox 360",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Y8z3rbd7q5p2d6KFcVkt_HzsohXRMFz_Tw&s",
        description: "Shooter en tercera persona. Tercera entrega de la serie.",
        console: "Xbox 360",
        details: {
            year: "2011",
            genre: "Shooter en tercera persona / Acción",
            consoles: "Xbox 360",
            developer: "Epic Games",
            story: "Marcus Fenix y el Escuadrón Delta luchan por salvar a la humanidad.",
            reviews: "Metacritic 91/100, elogiado por su multijugador.",
            modes: "Campaña, cooperativo, multijugador online"
        }
    },
    {
        id: 9,
        name: "The Elder Scrolls V: Skyrim",
        category: "Xbox 360",
        image: "https://www.igroshop.com/images/detailed/4/ElderScrollsV-Skyrim-Xbox-360.jpg",
        description: "RPG de mundo abierto. Quinta entrega de The Elder Scrolls.",
        console: "Xbox 360",
        details: {
            year: "2011",
            genre: "Rol (RPG) / Aventura / Mundo abierto",
            consoles: "Xbox 360, PlayStation 3, PC",
            developer: "Bethesda Game Studios",
            story: "El jugador es el Dovahkiin, destinado a enfrentar al dragón Alduin.",
            reviews: "Metacritic 96/100, aclamado por su libertad y mundo abierto.",
            modes: "Un jugador"
        }
    },
    {
        id: 10,
        name: "Red Dead Redemption",
        category: "Xbox 360",
        image: "https://i.3djuegos.com/juegos/3749/red_dead_redemption/fotos/ficha/red_dead_redemption-5927075.jpg",
        description: "Acción-aventura ambientado en 1911. Historia de John Marston.",
        console: "Xbox 360",
        details: {
            year: "2010",
            genre: "Acción / Aventura / Mundo abierto",
            consoles: "Xbox 360, PlayStation 3",
            developer: "Rockstar San Diego",
            story: "John Marston es obligado a cazar a los miembros de su antigua pandilla.",
            reviews: "Metacritic 95/100, obra maestra del western.",
            modes: "Un jugador, multijugador online"
        }
    },
    {
        id: 11,
        name: "Call of Duty: Black Ops II",
        category: "Xbox 360",
        image: "https://i0.wp.com/www.madboxpc.com/wp-content/uploads/2012/08/Black-Ops-II-special-edition.jpg",
        description: "FPS desarrollado por Treyarch y distribuido por Activision.",
        console: "Xbox 360",
        details: {
            year: "2012",
            genre: "Shooter en primera persona / Acción",
            consoles: "PlayStation 3, Xbox 360, PC, Wii U",
            developer: "Treyarch / Activision",
            story: "La trama alterna entre la Guerra Fría y 2025.",
            reviews: "Metacritic 83/100, destacado por su campaña con múltiples finales.",
            modes: "Campaña, multijugador online, modo Zombies"
        }
    },
    {
        id: 12,
        name: "Grand Theft Auto V",
        category: "Xbox 360",
        image: "https://static.wikia.nocookie.net/esgta/images/1/1b/Car%C3%A1tula_GTA_V.jpg",
        description: "Mundo abierto desarrollado por Rockstar North. Título revolucionario de 2013.",
        console: "Xbox 360",
        details: {
            year: "2013",
            genre: "Acción / Aventura / Mundo abierto",
            consoles: "PS3, Xbox 360, PC, PS4, Xbox One, PS5, Xbox Series X/S",
            developer: "Rockstar North",
            story: "Sigue a tres protagonistas: Michael, Franklin y Trevor.",
            reviews: "Metacritic 97/100, aclamado por su mundo abierto.",
            modes: "Un jugador, multijugador online (GTA Online)"
        }
    },
    {
        id: 13,
        name: "Fallout 3",
        category: "Xbox 360",
        image: "https://static.wikia.nocookie.net/fallout/images/c/c0/Fallout_3_cover_art.png",
        description: "RPG postapocalíptico. El Morador del Refugio 101 busca a su padre.",
        console: "Xbox 360",
        details: {
            year: "2008",
            genre: "Rol / Acción en primera y tercera persona",
            consoles: "PlayStation 3, Xbox 360 y PC",
            developer: "Bethesda Game Studios",
            story: "Abandonas el Refugio 101 para buscar a tu padre en el Yermo Capital.",
            reviews: "Metacritic 91/100, Juego del Año.",
            modes: "Un jugador"
        }
    },
    {
        id: 14,
        name: "Uncharted 2: Among Thieves",
        category: "PlayStation 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOlfuxgWOgYipHbeC5Yzd0NBBcWE_8SvCww&s",
        description: "Nathan Drake busca la legendaria Piedra Cintamani.",
        console: "PlayStation 3",
        details: {
            year: "2009",
            genre: "Acción-aventura / Disparos en tercera persona",
            consoles: "PlayStation 3 (remasterizada en PS4)",
            developer: "Naughty Dog",
            story: "Nathan Drake busca la Piedra Cintamani y Shambhala.",
            reviews: "Metacritic 96/100, elogiado por su narrativa.",
            modes: "Campaña y multijugador online"
        }
    },
    {
        id: 15,
        name: "The Last of Us",
        category: "PlayStation 3",
        image: "https://i.blogs.es/ddd629/the-last-of-us-joel-ellie-ps3/840_560.jpeg",
        description: "Joel y Ellie, supervivientes de una pandemia zombi.",
        console: "PlayStation 3",
        details: {
            year: "2013",
            genre: "Acción / Aventura / Survival Horror",
            consoles: "PlayStation 3 (remaster en PS4)",
            developer: "Naughty Dog",
            story: "Joel debe escoltar a Ellie, una joven inmune, a través de Estados Unidos.",
            reviews: "Metacritic 95/100, uno de los mejores juegos de la historia.",
            modes: "Un jugador, multijugador online"
        }
    },
    {
        id: 16,
        name: "Grand Theft Auto V",
        category: "PlayStation 3",
        image: "https://static.wikia.nocookie.net/esgta/images/1/1b/Car%C3%A1tula_GTA_V.jpg",
        description: "Mundo abierto desarrollado por Rockstar North. Título revolucionario de 2013.",
        console: "PlayStation 3",
        details: {
            year: "2013",
            genre: "Acción / Aventura / Mundo abierto",
            consoles: "PS3, Xbox 360, PC, PS4, Xbox One, PS5, Xbox Series X/S",
            developer: "Rockstar North",
            story: "Sigue a tres protagonistas: Michael, Franklin y Trevor.",
            reviews: "Metacritic 97/100, aclamado por su mundo abierto.",
            modes: "Un jugador, multijugador online (GTA Online)"
        }
    },
    {
        id: 17,
        name: "Call of Duty: Black Ops II",
        category: "PlayStation 3",
        image: "https://i0.wp.com/www.madboxpc.com/wp-content/uploads/2012/08/Black-Ops-II-special-edition.jpg",
        description: "FPS desarrollado por Treyarch y distribuido por Activision.",
        console: "PlayStation 3",
        details: {
            year: "2012",
            genre: "Shooter en primera persona / Acción",
            consoles: "PlayStation 3, Xbox 360, PC, Wii U",
            developer: "Treyarch / Activision",
            story: "La trama alterna entre la Guerra Fría y 2025.",
            reviews: "Metacritic 83/100, destacado por su campaña.",
            modes: "Campaña, multijugador online, modo Zombies"
        }
    },
    {
        id: 18,
        name: "Fallout 3",
        category: "PlayStation 3",
        image: "https://static.wikia.nocookie.net/fallout/images/c/c0/Fallout_3_cover_art.png",
        description: "RPG postapocalíptico. El Morador del Refugio 101 busca a su padre.",
        console: "PlayStation 3",
        details: {
            year: "2008",
            genre: "Rol / Acción en primera y tercera persona",
            consoles: "PlayStation 3, Xbox 360 y PC",
            developer: "Bethesda Game Studios",
            story: "Abandonas el Refugio 101 para buscar a tu padre.",
            reviews: "Metacritic 91/100, Juego del Año.",
            modes: "Un jugador"
        }
    },
    {
        id: 19,
        name: "Red Dead Redemption 2",
        category: "PlayStation 4",
        image: "https://i0.wp.com/levelup.buscafs.com/2025/09/Red-Dead-Redemption-2-estaria-en-camino-a-Nintendo-Switch-2-asegura-insider-1.jpg",
        description: "Mundo abierto ambientado en 1899. Historia de Arthur Morgan.",
        console: "PlayStation 4",
        details: {
            year: "2018",
            genre: "Acción / Aventura / Mundo abierto",
            consoles: "PlayStation 4, Xbox One, PC",
            developer: "Rockstar Games",
            story: "Arthur Morgan, miembro de la banda de Dutch van der Linde.",
            reviews: "Metacritic 97/100, elogiado por su narrativa.",
            modes: "Un jugador, multijugador online"
        }
    },
    {
        id: 20,
        name: "God of War",
        category: "PlayStation 4",
        image: "https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg",
        description: "Kratos y su hijo Atreus en un viaje por la mitología nórdica.",
        console: "PlayStation 4",
        details: {
            year: "2018",
            genre: "Acción / Aventura",
            consoles: "PlayStation 4, PC (2022)",
            developer: "Santa Monica Studio",
            story: "Kratos y Atreus viajan para esparcir las cenizas de la esposa de Kratos.",
            reviews: "Metacritic 94/100, Juego del Año 2018.",
            modes: "Un jugador"
        }
    },
    {
        id: 21,
        name: "Marvel's Spider-Man",
        category: "PlayStation 4",
        image: "https://media.revistagq.com/photos/61c9832dec2157b47d0637e7/1:1/w_1645,h_1645,c_limit/marvel-spiderman.jpeg",
        description: "Peter Parker como Spider-Man enfrenta a Mister Negative.",
        console: "PlayStation 4",
        details: {
            year: "2018",
            genre: "Acción / Aventura / Mundo abierto",
            consoles: "PlayStation 4, PlayStation 5, PC",
            developer: "Insomniac Games",
            story: "Peter Parker debe detener a Mister Negative y otras amenazas.",
            reviews: "Metacritic 87/100, elogiado por su jugabilidad.",
            modes: "Un jugador"
        }
    }
];

function displayGames(list) {
    const container = document.getElementById('gamesContainer');
    const categories = {};
    
    list.forEach(function(game) {
        if (!categories[game.category]) {
            categories[game.category] = [];
        }
        categories[game.category].push(game);
    });
    
    let html = '';
    
    for (let category in categories) {
        html += '<div class="category">';
        html += '<h3>' + category + '</h3>';
        html += '<div class="games-grid">';
        
        categories[category].forEach(function(game) {
            html += '<div class="game-card">';
            html += '<img src="' + game.image + '" alt="' + game.name + '">';
            html += '<div class="game-info">';
            html += '<h4>' + game.name + '</h4>';
            html += '<p>' + game.description + '</p>';
            html += '<div class="game-footer">';
            html += '<span class="badge">' + game.console + '</span>';
            html += '<button class="btn btn-small" onclick="openModal(' + game.id + ')">Leer más</button>';
            html += '</div></div></div>';
        });
        
        html += '</div></div>';
    }
    
    container.innerHTML = html;
}

function openModal(id) {
    const game = games.find(function(g) {
        return g.id === id;
    });
    
    if (!game || !game.details) return;
    
    document.getElementById('modalTitle').textContent = game.name;
    document.getElementById('modalImage').src = game.image;
    
    let detailsHTML = '';
    detailsHTML += '<div class="detail-item"><h4>Año</h4><p>' + game.details.year + '</p></div>';
    detailsHTML += '<div class="detail-item"><h4>Género</h4><p>' + game.details.genre + '</p></div>';
    detailsHTML += '<div class="detail-item"><h4>Consolas</h4><p>' + game.details.consoles + '</p></div>';
    detailsHTML += '<div class="detail-item"><h4>Desarrollador</h4><p>' + game.details.developer + '</p></div>';
    detailsHTML += '<div class="detail-item"><h4>Modos</h4><p>' + game.details.modes + '</p></div>';
    
    document.getElementById('modalDetails').innerHTML = detailsHTML;
    
    let storyHTML = '';
    storyHTML += '<div class="detail-item"><h4>Historia</h4><p>' + game.details.story + '</p></div>';
    storyHTML += '<div class="detail-item"><h4>Críticas</h4><p>' + game.details.reviews + '</p></div>';
    
    document.getElementById('modalStory').innerHTML = storyHTML;
    
    document.getElementById('gameModal').classList.add('active');
}

function closeModal() {
    document.getElementById('gameModal').classList.remove('active');
}

function searchGames() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    
    if (term === '') {
        displayGames(games);
    } else {
        const filtered = games.filter(function(game) {
            return game.name.toLowerCase().includes(term) || 
                   game.description.toLowerCase().includes(term);
        });
        displayGames(filtered);
    }
}

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allSpans = document.querySelectorAll('.faq-question span');
    
    allAnswers.forEach(function(ans) {
        if (ans !== answer) {
            ans.classList.remove('active');
        }
    });
    
    allSpans.forEach(function(span) {
        span.textContent = '+';
    });
    
    answer.classList.toggle('active');
    
    const span = element.querySelector('span');
    if (answer.classList.contains('active')) {
        span.textContent = '−';
    } else {
        span.textContent = '+';
    }
}

function enviarFormulario(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    event.target.reset();
}

displayGames(games);