const texts = {
  headings: {
    title: {
      nl: '<div class="logo"></div>team generator<br>voor docenten en leraren',
      en: '<div class="logo"></div>team generator<br>for teachers and lecturers',
      es: '<div class="logo"></div>generador de equipo<br>para profesores y conferencistas',
      fr: '<div class="logo"></div>générateur d\'équipe<br>pour les enseignants et les tuteurs'
    },
    subtitle: {
      nl: '<ol><li>Maak groepen van leerlingen of teams van studenten voor schoolprojecten</li><li>Verfijn de resultaten tot u tevreden bent</li></ol>',
      en: '<ol><li>Generate random teams or groups</li><li>Refine the results</li></ol>',
      es: '<ol><li>Genere equipos o grupos</li><li>Refine los resultados</li></ol>',
      fr: '<ol><li>Générez des équipes ou des groupes</li><li>Affinez les résultats</li></ol>'
    }
  },
  intro: {
    title: {
      nl: 'Voor docenten en leraren',
      en: 'For teachers',
      es: 'Para profesores',
      fr: 'Pour les enseignants'
    },
    description: {
      nl: '<p>' +
        'Een leraar of docent maakt regelmatig groepen of teams voor een schoolproject of samenwerkingsopdracht. ' +
        'Soms kan het een uitdaging zijn om optimale groepen te maken:<br><br>' +
        '<ul>' +
        '<li>waarvan de samenstellingen afwisselen.</li>' +
        '<li>waarin studenten of leerlingen verschillende rollen hebben.</li>' +
        '<li>waarin verschillende niveau’s tot hun recht komen.</li>' +
        '</ul>' +
        '<br>Deze tool verschilt van andere omdat u achteraf de samenstelling van de groepen kunt verfijnen.' +
        '</p>',
      en: '<p>' +
        'A teacher or tutor regularly creates groups or teams for a school project or collaborative assignment. ' +
        'Sometimes it is challenging to create optimal groups:<br><br>' +
        '<ul>' +
        '<li>whose compositions vary.</li>' +
        '<li>in which students or pupils have different roles.</li>' +
        '<li>in which different levels come into their own.</li>' +
        '</ul>' +
        '<br>This tool differs from others because you can refine the composition of the groups afterwards.' +
        '</p>',
      es: '<p>' +
        'Un maestro o tutor crea regularmente grupos o equipos para un proyecto escolar o una tarea colaborativa. ' +
        'A veces es un desafío crear grupos óptimos<br><br>' +
        '<ul>' +
        '<li> cuyas composiciones varían.</li>' +
        '<li> en el que los estudiantes o alumnos tienen diferentes roles.</li>' +
        '<li> en el que diferentes niveles entran en juego.</li>' +
        '</ul>' +
        '<br>Esta herramienta se diferencia de otras porque puede refinar la composición de los grupos posteriormente.' +
        '</p>',
      fr: '<p>' +
        'Un enseignant ou un tuteur crée régulièrement des groupes ou des équipes pour un projet scolaire ou un travail collaboratif. ' +
        'C\'est parfois un défi de créer des groupes optimaux:<br><br>' +
        '<ul>' +
        '<li>dont les compositions varient.</li>' +
        '<li>dans lequel les étudiants ou les élèves ont des rôles différents.</li>' +
        '<li>dans lequel différents niveaux prennent tout leur sens.</li>' +
        '</ul>' +
        '<br>Cet outil diffère des autres car vous pouvez affiner la composition des groupes par la suite.' +
        '</p>'
    }
  }
  ,
  manual: {
    title: {
      nl: 'Hoe te gebruiken?',
      en: 'How to use?',
      es: '¿Cómo utilizar?',
      fr: 'Comment utiliser?'
    },
    description: {
      nl: '' +
        '<h3>Stap 1 - Namen</h3>' +
        '<p>Voer de namen van de studenten of leerlingen in:' +
        '<ol>' +
        '<li>Scheid ze met enter, tab, komma of puntkomma</li>' +
        '<li>Namen in een ander document?<br>Kopiëer (ctrl-c) en plak (ctrl-v)</li>' +
        '</ol>' +
        '</p>' +
        '<h3>Stap 2 - Grootte team</h3>' +
        '<p>Geef de grootte van de teams of groepen aan.</p>' +
        '<h3>Stap 3 - Maak teams</h3>' +
        '<p>Druk op de knop.<br>Nu worden de teams of groepen aangemaakt.</p>' +
        '<h3>Stap 4 - Verfijnen?</h3>' +
        '<p>' +
        'Verfijnen kan op twee manieren:' +
        '<ol>' +
        '<li>Sleep namen naar een andere groep.</li>' +
        '<li>Zet teams of groepen vast met de schakelaar en maak opnieuw teams met de rest.</li>' +
        '</ol>' +
        '</p>' +
        '<h3>Stap 5 - Kopiëren</h3>' +
        '<p>U bent tevreden? Kopieer de teams groepen of teams naar het klembord.<br><br>' +
        'U kunt de teams of groepen nu overal plakken waar u ze nodig heeft.<br>Bijvoorbeeld in een opdracht die u wilt uitdelen aan de studenten of leerlingen, in een e-mail of in een chat.' +
        '</p>',
      en: '' +
        '<h3>Step 1 - Names</h3>' +
        '<p>Enter the names of the students or students:' +
        '<ol>' +
        '<li>Separate them with enter, tab, comma or semicolon</li>' +
        '<li>Names in another document?<br>Copy (ctrl-c) and paste (ctrl-v)</li> them in here,' +
        '</ol>' +
        '</p>' +
        '<h3>Step 2 - Team Size</h3>' +
        '<p>Indicate the size of the teams or groups.</p>' +
        '<h3>Step 3 - Create Teams</h3>' +
        '<p>Press the button.<br>Now the teams or groups are created.</p>' +
        '<h3>Step 4 - Refinement?</h3>' +
        "<p>" +
        'Refining can be done in two ways:' +
        '<ol>' +
        '<li>Drag names to another group.</li>' +
        '<li>Pin teams or groups with the switch and regenerate new teams with the rest.</li>' +
        '</ol>' +
        '</p>' +
        '<h3>Step 5 - Copy</h3>' +
        '<p>Are you satisfied? Copy the teams groups or teams to the clipboard.<br><br>' +
        'You can now paste the teams or groups wherever you need them.<br>For example in an assignment that you want to hand out to the students or students, in an email or in a chat.' +
        '</p>',
      es: '' +
        '<h3>Paso 1 - Nombres</h3>' +
        '<p>Ingrese los nombres de los estudiantes o estudiantes:' +
        '<ol>' +
        '<li>Sepárelos con enter, tab, coma o punto y coma</li>' +
        '<li>¿Nombres en otro documento?<br>Copiar (ctrl-c) y pegar (ctrl-v)</li>' +
        '</ol>' +
        '</p>' +
        '<h3>Paso 2 - Tamaño del equipo</h3>' +
        '<p>Indique el tamaño de los equipos o grupos.</p>' +
        '<h3>Paso 3: crear equipos</h3>' +
        '<p>Presione el botón.<br>Ahora se crean los equipos o grupos.</p>' +
        '<h3>Paso 4 - ¿Refinar?</h3>' +
        '<p>' +
        'El refinado se puede realizar de dos formas:' +
        '<ol>' +
        '<li>Arrastra nombres a otro grupo.</li>' +
        '<li>Fije equipos o grupos con el interruptor y vuelva a formar equipo con el resto.</li>' +
        '</ol>' +
        '</p>' +
        '<h3>Paso 5 - Copiar</h3>' +
        '<p>¿Estás satisfecho? Copie los grupos de equipos o equipos en el portapapeles.<br><br>' +
        'Ahora puede pegar los equipos o grupos donde los necesite.<br>Por ejemplo, en una tarea que desea entregar a los estudiantes o estudiantes, en un correo electrónico o en un chat.' +
        '</p>',
      fr: '' +
        '<h3>Étape 1 - Noms</h3>' +
        '<p>Entrez les noms des étudiants ou étudiants :' +
        '<ol>' +
        '<li>Séparez-les par entrée, tabulation, virgule ou point-virgule</li>' +
        '<li>Noms dans un autre document ?<br>Copier (ctrl-c) et coller (ctrl-v)</li>' +
        '</ol>' +
        '</p>' +
        '<h3>Étape 2 - Taille de l\'équipe</h3>' +
        '<p>Indiquez la taille des équipes ou des groupes.</p>' +
        '<h3>Étape 3 - Créer des équipess</h3>' +
        '<p>Appuyez sur le bouton.<br>Maintenant, les équipes ou les groupes sont créés.</p>' +
        '<h3>Étape 4 - Affiner?</h3>' +
        '<p>' +
        'Le raffinage peut se faire de deux manières :' +
        '<ol>' +
        '<li>Faites glisser les noms vers un autre groupe.</§li>' +
        '<li>Épinglez des équipes ou des groupes avec le commutateur et faites équipe avec les autres.</li>' +
        '</ol>' +
        '</p>' +
        '<h3>Étape 5 - Copier</h3>' +
        '<p>Es-tu satisfait? Copiez les groupes d\'équipes ou les équipes dans le presse-papiers.<br><br>' +
        'Vous pouvez désormais coller les équipes ou les groupes là où vous en avez besoin.<brPar exemple dans un devoir que vous souhaitez remettre aux étudiants ou aux étudiants, dans un e-mail ou dans un chat.' +
        '</p>',
    }
  },
  tooltips: {
    back: {
      nl: 'terug naar het invoeren van de namen',
      en: 'back to name entry',
      es: 'volver a ingresar nombres',
      fr: 'retour à la saisie des noms'
    },
    copy: {
      nl: 'kopieer de groepen om ze te plakken/pasten in bijvoorbeeld Microsoft Word (toetscombinatie ctrl-v)',
      en: 'copy the groups so you can paste them in for example Microsoft Word (ctrl-v)',
      es: 'copie los grupos para pegarlos en, por ejemplo, Microsoft Word (combinación de teclas ctrl-v)',
      fr: 'copier les groupes pour les coller dans par exemple Microsoft Word (combinaison de touches ctrl-v)'
    },
    regenerate: {
      nl: 'opnieuw teams maken behalve de groepen die zijn vastgezet',
      en: 'recreate teams but ignore the groups that are pinned',
      es: 'recrear equipos excepto los grupos que están anclados',
      fr: 'recréer des équipes à l\'exception des groupes épinglés'
    },
    entermemberstitle: {
      nl: 'Namen',
      en: 'Names',
      es: 'Nombres',
      fr: 'Noms'
    },
    entermembers: {
      nl: 'Geef hier de namen op gescheiden door enters, komma\'s, punt-komma\'s of tabs.',
      en: 'Enter the names seperated by enters, commas, semicolons, or tabs',
      es: 'Ingrese los nombres aquí separados por entradas, comas, punto y coma o tabulaciones.',
      fr: 'Entrez les noms ici séparés par des entrées, des virgules, des points-virgules ou des tabulations.'
    },
    teamsize: {
      nl: 'Grootte team',
      en: 'Team size',
      es: 'Tamaño del equipo',
      fr: 'Taille de l\'équipe'
    },
    pinned: {
      nl: 'vast',
      en: 'pinned',
      es: 'clavado',
      fr: 'épinglé'
    },
    unpinned: {
      nl: 'niet vast',
      en: 'unpinned',
      es: 'desanclado',
      fr: 'désépinglé'
    },
    drag: {
      nl: 'Sleep de naam naar een andere groep, een groep moet minimaal 1 naam hebben',
      en: 'Drag a name to another group, notice that a group needs at least one name',
      es: 'Arrastre el nombre a otro grupo, un grupo debe tener al menos 1 nombre',
      fr: 'Faites glisser le nom vers un autre groupe, un groupe doit avoir au moins 1 nom'
    }
  },
  buttons: {
    back: {
      nl: 'Terug',
      en: 'Back',
      es: 'Volver arriba',
      fr: 'Retour en haut'
    },
    copy: {
      nl: 'Kopieer naar klembord',
      en: 'Copy to clipboard',
      es: 'Copiar al portapapeles',
      fr: 'Copier dans le presse-papier'
    },
    regenerate: {
      nl: 'Maak opnieuw teams',
      en: 'Create new teams',
      es: 'Crea equipos de nuevo',
      fr: 'Créer à nouveau des équipes'
    },
    generate: {
      nl: 'Maak teams',
      en: 'Create teams',
      es: 'Crear equipos',
      fr: 'Créer des équipes'
    }
  },
  toast: {
    teamsize: {
      nl: {
        title: 'Grootte team',
        description: 'De grootte van het team moet tussen 1 en 500 liggen.'
      },
      en: {
        title: 'Team size',
        description: 'Teamsize should be between 1 and 500.'
      },
      es: {
        title: 'Tamaño del equipo',
        description: 'El tamaño del equipo debe estar entre 1 y 500.'
      },
      fr: {
        title: 'Taille de l\'équipe',
        description: 'La taille de l\'équipe doit être comprise entre 1 et 500.'
      }
    },
    copy: {
      nl: {
        title: 'Kopieren gelukt',
        description: 'U kunt nu de teams in uw favoriete tekstprogramma plakken!'
      },
      en: {
        title: 'Copy successful',
        description: 'You can paste the teams into your favorite text editor now!'
      },
      es: {
        title: 'Copia exitosa',
        description: '¡Ahora puede pegar los equipos en su programa de texto favorito!'
      },
      fr: {
        title: 'Copie réussie',
        description: 'Vous pouvez maintenant coller les équipes dans votre programme de texte préféré!'
      }
    },
    copyfailed: {
      nl: {
        title: 'Kopieren mislukt',
        desc: 'Helaas is er iets misgegaan bij het kopieren van de teams'
      },
      en: {
        title: 'Copy falied',
        desc: 'Unfortunately something went wrong when copying the teams'
      },
      es: {
        title: 'Copiar falló',
        desc: 'Lamentablemente algo salió mal al copiar los equipos'
      },
      fr: {
        title: 'Échec de la copie',
        desc: 'Malheureusement, quelque chose s\'est mal passé lors de la copie des équipes'
      }
    }
  }
};

export {texts};
