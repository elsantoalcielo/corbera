export type Font = {
  nom: string,
  descripcio?: string,
  com?: string,
  historia?: string,
  riera: string,
  latitud: number,
  longitud: number,
  fitxer?: string
}

export const data: Font[] = [
  {
    nom: 'Fonteta de Can Canals',
    descripcio: "Dins una balma humida i fresca, de la paret de roca, entre molses i falgueres, sorgeix un rajolí que brolla tot l'any. Vora la font, hi ha dos bancs fets de pedres. És un racó preciós.",
    com: "Camí del Safari, passada la tanca de Can Canals, un corriol hi baixa. A la vora de la font, hi ha un diposit molt gran (més de 25 metres de diàmetre).",
    historia: "Indret arranjat pels de la finca de Can Canals. Hi ha una rajola de la Mare de Déu de Montserrat de l'any 1928.",
    riera: 'Riera de Corbera',
    latitud: 41.425833,
    longitud: 1.8929
  },
  {
    nom: 'Font de Can Canonge',
    descripcio: 'Espai reduït i a tocar de la riera',
    com: "Passat el pont que creua la riera des de la masia de Can Canonge, a 50 metres del pont i al camí de Can Palet, a mà esquerra hi ha uns esglaons que baixen fins a la font.",
    riera: 'Riera de Corbera',
    latitud: 41.43495,
    longitud: 1.95725,
    fitxer: 'font-de-can-canonge.webp'
  },
  {
    nom: 'Font del conill blanc',
    latitud: 41.424633,
    longitud: 1.9609,
    descripcio: "Es tracta d'un aljub d'aigua molt important. La font de l'antic hostal està a cobert, dins una caseta, amb bancs, i al davant hi ha una bassa. A la vora hi ha un tanc enorme amb reserves d'aigua (capacitat de més d'un milió de litres). Raja abundosament tot l'any.",
    com: "A l'entrada de la masia de Can Montmany de Mas Passoles, hi ha un camí que baixa fins a la font.",
    historia: "Des de temps molt antics es coneix aquesta font i tradicionalment la gent hi anava a omplir garrafes d'aigua.",
    riera: 'Riera de Corbera'
  },
  {
    nom: 'Font del Corró o font del pi de Can Deu',
    latitud: 41.426733,
    longitud: 1.958333,
    descripcio: "Espai estret i cobert d'espessa vegetació de ribera, per sobre del marge dret de la riera.",
    com: "A Can Margarit. Desde la carretera a Sant Andreu, afagar el camí cap a Can Deu i, passat el primer recolt, acostar-se a la riera, que caldrà creuar perquè la font queda a l'altra riba. Des de Santa Maria de la Vall, baixar pel camí forestal que neix al final del carrer 16 i arriba a la masia de Can Deu. Cal tombar direcció Can Margarit i, al darrer revolt, abans de la carretera, allí està la font.",
    riera: 'Riera de Corbera',
    fitxer: 'font-del-corro.webp'
  },
  {
    nom: 'Font de la Casa Cremada',
    latitud: 41.424083,
    longitud: 1.9062,
    descripcio: "L'aigua brolla tot l'any de la roca. A la vora hi ha diverses basses i canalitzacions per regar els horts. Racó privilegiat.",
    com: "Camí de Casa Cremada, cal creuar el pati de la casa i afagar el camí que, en 2-3 minuts, us mena a la font. Compte perquè a la casa hi ha un gos perillós!",
    riera: 'Riera de Corbera',
  },
  {
    nom: 'Font del dipòsit',
    latitud: 41.422624443109825,
    longitud: 1.8982090769800515,
    riera: 'Riera de Corbera'
  },
  {
    nom: "Font de l'Elies",
    latitud: 41.405333,
    longitud: 1.91,
    descripcio: "Al peu de l'antic camí de Sant Ponç, l'aigua sorgeix entre un mur de pedra seca i cau a un bonic abeurador de pedra. L'aigua raja amb caràcter estacional.",
    com: "Des de la urbanització de Can Rigol, on hi ha la parada de l'autobús L3, pel carrer que encara es diu Antic Camí de Sant Ponç.",
    historia: "Coneguda i documentada des de temps antics, a la vora hi havia uns safareigs que actualment estan colgats sota les bardisses.",
    riera: 'Riera de Rafamans'
  },
  {
    nom: 'Font del ferro de Can Xandri',
    latitud: 41.437233,
    longitud: 1.929967,
    descripcio: "En un indret descobert, al peu del camí cap a Can Xandri, hi ha una mina d'aigua de color grogós que llista pel pendent de la muntanya. La font raja tot l'any.",
    com: "Al camí rural que va de Can Moriscot a Can Xandri, passada l'entrada de Can Ponç, a uns 50 m. un camí a la dreta puja costerut fins a la font.",
    historia: "Antigament es creia que l'aigua d'aquesta font tenia propietats medicinals.",
    riera: 'Riera de Corbera'
  },
  {
    nom: 'Font de Flandes',
    latitud: 41.411183,
    longitud: 1.8889,
    descripcio: "Al peu del Puig d'Agulles, al camí dels Masets. Sota unes alzines, l'espai és ample i agradable. La font raja tot l'any.",
    com: "Al camí dels Masets fins el Puig d'Agulles. Des de la urbanització Can Armengol, al final del carrer de les Arts, uns 50 metres direcció a Els Masets, sota el camí.",
    historia: "Coneguda com a mínim des de fa cent anys, abans la font estava situada una mica més amunt de la seva ubicació actual. Se sap que a la vora hi ha una bassa que es feia servir per regar.",
    riera: 'Riera de Rafamans',
    fitxer: 'font-de-flandes.webp'
  },
  {
    nom: 'Fonteta o font de Can Toni Joan',
    latitud: 41.412983,
    longitud: 1.9027,
    descripcio: "Al peu de la carretera que va cap a l'Amunt, té bancs i un espai força agradable, ombrejat, ideal per berenar o reposar d'una caminada. Pràcticament raja tot l'any.",
    com: "Per la carretera de l'Amunt. Des de Corbera de Dalt, pel camí que va des de Cal Piter fins a Can Toni Joan. Des de Corbera de baix, pel camí que va des de Can Planes cap els horts de l'Amunt.",
    riera: 'Riera de Rafamans',
    fitxer: 'font-de-can-toni-joan.webp'
  },
  {
    nom: 'Font vella de Can Casildo',
    latitud: 41.401583,
    longitud: 1.923217,
    descripcio: "Dins de l'Espai d'Interès Natural (EIN de l'Ordal), en una fondalada d'obaga amb vegetació espessa, sota una alzina la que penja una cortina d'heures, l'entorn és rústic i de gran bellesa, hi ha murs de pedra seca, escales, bancs i una cabana de pastor. Raja tot l'any.",
    com: "Al peu del camí que va de la masia de Can Casildo a Can Cases de Sant Ponç. Accés des del Cau de la Guineu pel camí cap a Can Casildo, després d'uns 15 minuts caminant trobem un corriol que baixa a mà esquerra.",
    riera: 'Riera de Rafamans'
  },
  {
    nom: "Font de l'Amunt",
    latitud: 41.41025,
    longitud: 1.9065,
    descripcio: "Dins el barri de l'Amunt, sota l'ombra dels arbres, l'indret té bancs, un abeurador i uns safareigs. Raja pràcticament tot l'any.",
    com: "Per la carretera de l'Amunt. Des del nucli urbà, per Can Planes Sud i Can Rigol fins l'Amunt.",
    riera: 'Riera de Rafamans',
    fitxer: 'font-de-lamunt.webp'
  },
  {
    nom: 'Font de la cova de Sant Andreu',
    latitud: 41.44265,
    longitud: 1.978167,
    descripcio: "Aquesta és la darrera font abans de la desembocadura de la riera al riu Llobregat. Entre els horts del marge esquerra, la font sorgeix prop de les penyes roges de la cova. Hi ha també un safareig. Raja tot l'any i l'aigua es fa servir per regar.",
    com: "Trobarem la font si ens dirigim entre els horts cap a una alzina. També des del carrer Josep Tarradelles núm. 28 de Sant Andreu, hi baixa un corriol (al costat de la torre de la llum)-",
    riera: 'Riera de Corbera'
  },
  {
    nom: 'Font de la figuera o font de Can Rafel',
    latitud: 41.40915,
    longitud: 1.930883,
    descripcio: "Sota una acàcia i un roure, al camí que anava des de les Cases d'en Roig cap a Puig Montmany (hotel Can Rafel), la zona ha estat urbanitzada, s'han obert carrers nous i l'entorn està força degradat (hi ha grafitis).",
    com: "A les antigues cases de Can Roig, creuant el pont de Can Rafel i pujant els carrers de la urbanització Costa de la Perdiu fins el final del carrer de l'Amunt.",
    riera: 'Riera de Rafamans'
  },
  {
    nom: 'Font de les febres',
    latitud: 41.421167,
    longitud: 1.902617,
    descripcio: "Sota les penyes del Calaix, vora el camí cap Els Fitons, sota una enorme alzina, espai ample i agradable com a destí de passejades. A la vora hi ha una bassa o antic abeurador.",
    com: "Des del Camí Ral, direcció a Els Herbatges, agafar el camí de terra que trenca a mà esquerra només començar la urbanització. Continuar per aquest camí uns 500 metres, direcció a Els Fitons.",
    historia: "L'any 1902 Corbera va patir una epidèmia de verola, el que va portar a l'ajuntament a construir safarejos a la zona alta i a la baixa, a les afores del poble, per tal de poder netejar la roba de les persones malaltes. És molt possible que aquest nom vingui d'una altra epidèmia, ja que en aquells temps a les malalties desconegudes se les donava el nom de febres.",
    riera: 'Riera de Corbera',
    fitxer: 'font-de-les-febres.webp'
  },
  {
    nom: 'Font de la mata',
    latitud: 41.408117,
    longitud: 1.9243,
    descripcio: "A tocar de la riera, té un banc i un espai enrajolat, davant els horts. Raja tot l'any.",
    com: "Des de Corbera de Baix, pel camí de Sant Ponç, entre l'empresa CENBA i l'Oliverà, hi ha un trencall a l'esquerra que baixa i creua la riera. Seguir aigües amunt uns 80 m. pel marge dret fins arribar a la font. Des del poble, seguint el camí dels horts, passat els horts del \"Rimachu\", al trobar una olivera vella, prendre el corriol que baixa cap a la riera.",
    historia: "Se sap que a la zona hi havia una resclosa i un molí de blat conegut com el \"molinot\". Vora el molí hi havía unea bassa i una gruta buidada a la pedra on saltava l'aigua que feia voltar les moles del molí. Podria remuntar-se al segle XI.",
    riera: 'Riera de Rafamans'
  },
  {
    nom: "Font de l'alzina de Can Llopart",
    latitud: 41.431483,
    longitud: 1.948883,
    descripcio: "En una fondalada de gran bellesa, sota una enorme alzina, la font neix i forma un salt d'aigua que cau dins una antiga rescolsa. Lloc ombrívol i molt agradable.",
    com: "Des de la masia de Can Llopart, seguir el camí direcció a Can Deu.",
    riera: 'Riera de Corbera',
    fitxer: 'font-de-can-llopart.webp'
  },
  {
    nom: 'Font de Can Margarit',
    latitud: 41.425633,
    longitud: 1.9368,
    descripcio: "Prop d'un parc infantil i sota l'ombra de dos roures centenaris, l'indret és espaiós i conforma una zona de lleure molt agradable.",
    com: "A la urbanització Can Margarit, des de la carretera de Sant Andreu, al carrer dels Pins.",
    historia: "Actualment l'aigua no és natural perquè la font ha estat connectada a la xarxa.",
    riera: 'Riera de Corbera',
    fitxer: 'font-de-can-margarit.webp'
  },
  {
    nom: 'Font de Can Moriscot',
    latitud: 41.433183,
    longitud: 1.929967,
    descripcio: "En un capçal de torrent, coberta de vegetació molt espessa, espai estret, s'hi arriba per uns esglaons de pedra.",
    com: "Al camí forestal que uneix Can Margarit i Can Moriscot, abans del trecall que va cap a Can Ponç, un corriol baixa a la dreta cap a la riera.",
    riera: 'Riera de Corbera',
    fitxer: 'font-de-can-moriscot.webp'
  },
  {
    nom: 'Font dels plataners',
    latitud: 41.434117,
    longitud: 1.9695,
    descripcio: "Envoltada de plataners, en un indret molt agradable i ombrejat, l'aigua brolla entre les arrels dels arbres creant un espai ple de màgia.",
    com: "Des de la urbanització Can Palet, al final del carrer Font dels Plataners, neix un corriol a peu del camí forestal i, per sota un túnel natural d'heures, ens condueix a la font.",
    riera: 'Riera de Corbera',
    fitxer: 'font-dels-plataners.webp'
  },
  {
    nom: 'Font del Pontarró',
    latitud: 41.42,
    longitud: 1.932417,
    descripcio: "En una placeta del casc urbà, prop l'antiga depuradora i al costat de l'escola nova, la font neix sota un roure gegant. Espai agradable per a passejar.",
    com: "A la urbanització Creu Nova, al final del carrer Font del Pontarró.",
    riera: 'Riera de Corbera',
    fitxer: 'font-del-pontarro.webp'
  },
  {
    nom: 'Font del Rauré',
    descripcio: "A peu del curs d'aigua i dins de la llera, en una fondalada, poc espai de lleure, l'indret és força agreste perquè la vegetació és espessa.",
    com: "S'hi arriba des del camí forestal que ve de Bon Repòs i Les Parretes, passada aquesta urbanització, poc abans d'arribar las horts del Marquès, un corriol hi baixa. També desde de Creu Aregall Junior, carrer del Fonoll, al costat del número 13 baixa un corriol passant per uns horts i creuant la riera.",
    historia: "Coneguda com a Rauré, Rourer o Rouré, podria tenir el seu origen en un roure o roureda, ja que a la zona encara n'hi ha.",
    riera: 'Riera de Corbera',
    latitud: 41.421333,
    longitud: 1.913317,
    fitxer: 'font-del-raure.webp'
  },
  {
    nom: 'Font del Rovira',
    latitud: 41.414333,
    longitud: 1.935,
    descripcio: "L'aigua surt de la roca. una alzina de tronc retorçat ha crescut al damunt del cobert. Tot i que l'emplaçament és espaiós i molt agradable, sota plataners de fulla caduca, l'indret està molt degradat, amb pintades a les parets i les taules trencades. L'aigua raja abundosament tot l'any però està contaminada.",
    com: "Arribant a Corbera de Baix per la carretera d'entrada al poble, quan aquesta pren el nom de Carrer Rafamans agafar el trencall de l'aparcament. Davant de l'antiga depuradora. Es creua la riera per una passera.",
    historia: "El nom ve de la família Rovira, amos dels horts i les terres des de la font fins a la Font Vella de Corbera. Sempre ha estat un indret molt visitat com a destí de passejades. Les persones del poble hi anaven cap el tard a buscar aigua fresca. Després de la Guerra Civil, molta gent de Barcelona hi anava a passar el diumenge.",
    riera: 'Riera de Rafamans'
  },
  {
    nom: 'Font de Sant Ponç',
    latitud: 41.394383,
    longitud: 1.914067,
    descripcio: "Al peu del sender PR-70, la font brolla abundosament tot l'any. Hi ha un estanyol amb peixos.",
    com: "Des de Sant Ponç, seguir el sender PR-70, marcat de color groc i blanc, en direcció a Vallirana. La font queda al marge del sender.",
    historia: "Font mil·lenària.",
    riera: 'Riera de Rafamans'
  },
  {
    nom: 'Font de la senyora',
    latitud: 41.41375,
    longitud: 1.903467,
    descripcio: "Prop de Sant Crisfòfol. A tocar de la riera, en un racó de vegetació espessa, el rajolí sorgeix de la roca i cau entre heures, molses i falgueres. Raja tot l'any.",
    com: "Des de Corbera de Dalt, al camí que va des de Cal Piter a Can Toni Joan, just després de creuar la riera, deixem el camí ample i ens endinsem per un corriol a mà dreta que s'enfila aigües amunt. Des de Can Toni Joan, hi baixen diversos corriols.",
    riera: 'Riera de Rafamans',
    fitxer: 'font-de-la-senyora.webp'
  },
  {
    nom: 'Font de Socies',
    latitud: 41.430717,
    longitud: 1.9657,
    descripcio: "Vora un pi gegant. Dalt la font, hi ha una alzina molt gran des d'on comença un corriol que puja fins el dipòsit. L'aigua surt entre pedres. És un indret ombrejat i molt agradable, hi ha un banc i una taula de pedra. Ideal com a destí o punt de parada durant les excursions.",
    com: "Des de Cases Pairals, al final del carrer Miquel Balada agafar el camí forestal que va cap a Socies, la font queda a la dreta en una clariana ombrejada. Des del dipòsit que hi ha al final del carrer Llorenç i Vidal, neix un corriol que arriba directament a la font.",
    riera: 'Riera de Corbera',
    fitxer: 'font-de-socies.webp'
  }
]