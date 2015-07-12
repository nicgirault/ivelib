angular.module('ivelib', ['maps-api', 'station', 'statistics', 'map']);

angular.module('ivelib').controller('mainCtrl', function(distanceService, statisticsService, Map) {
  var map;
  return map = Map.initialize();
});

angular.module('maps-api', []);

angular.module('maps-api').constant('MAPS_API_KEY', 'AIzaSyDL-EFCmlespdMNy-nPlKiqgxLBSGHSE0c').constant('DISTANCE_API_URL', 'https://maps.googleapis.com/maps/api/distancematrix/json');

angular.module('map', ['station']);

angular.module('station', []);

angular.module('station').constant('apiKey', '7ceedd184447f8d34c74c1dde423c2580b4c82a2').constant('apiURL', 'https://api.jcdecaux.com/vls/v1').constant('CONTRACT_NAME', 'Paris');

angular.module('statistics', []);

angular.module('statistics').constant('STATISTICS_API_URL', 'http://62.4.25.210/velib-statistics');

angular.module('station').constant('STATIONS', [
  {
    "number": 31705,
    "name": "31705 - CHAMPEAUX (BAGNOLET)",
    "address": "RUE DES CHAMPEAUX (PRES DE LA GARE ROUTIERE) - 93170 BAGNOLET",
    "latitude": 48.8645278209514,
    "longitude": 2.416170724425901
  }, {
    "number": 10042,
    "name": "10042 - POISSONNIÈRE - ENGHIEN",
    "address": "52 RUE D'ENGHIEN / ANGLE RUE DU FAUBOURG POISSONIERE - 75010 PARIS",
    "latitude": 48.87242006305313,
    "longitude": 2.348395236282807
  }, {
    "number": 8020,
    "name": "08020 - METRO ROME",
    "address": "74 BOULEVARD DES BATIGNOLLES - 75008 PARIS",
    "latitude": 48.882148945631904,
    "longitude": 2.319860054774211
  }, {
    "number": 1022,
    "name": "01022 - RUE DE LA PAIX",
    "address": "37 RUE CASANOVA - 75001 PARIS",
    "latitude": 48.8682170167744,
    "longitude": 2.330493511399174
  }, {
    "number": 35014,
    "name": "35014 - DE GAULLE (PANTIN)",
    "address": "139 AVENUE JEAN LOLIVE / MAIL CHARLES DE GAULLE - 93500 PANTIN",
    "latitude": 48.893268664697416,
    "longitude": 2.412715733388685
  }, {
    "number": 20040,
    "name": "20040 - PARC DE BELLEVILLE",
    "address": "57 & 36 RUE JULIEN LACROIX - 75020 PARIS",
    "latitude": 48.870393671603765,
    "longitude": 2.384222472712587
  }, {
    "number": 28002,
    "name": "28002 - SOLJENITSYNE (PUTEAUX)",
    "address": "BOULEVARD ALEXANDRE SOLJENITSYNE - 92800 PUTEAUX",
    "latitude": 48.884478,
    "longitude": 2.24772065
  }, {
    "number": 15111,
    "name": "15111 - SERRES",
    "address": "48 RUE OLIVIER DE SERRES - 75015 PARIS",
    "latitude": 48.834658862792736,
    "longitude": 2.295789480315903
  }, {
    "number": 12124,
    "name": "12124 - PYRAMIDE ARTILLERIE",
    "address": "ROUTE DE L'ARTILLERIE - 75012 PARIS",
    "latitude": 48.839041145908176,
    "longitude": 2.437655339082955
  }, {
    "number": 9021,
    "name": "09021 - SAINT GEORGES",
    "address": "56 RUE SAINT GEORGES - 75009 PARIS",
    "latitude": 48.877872278317966,
    "longitude": 2.337446804203667
  }, {
    "number": 7007,
    "name": "07007 - MUSÉE D'ORSAY",
    "address": "62 RUE DE LILLE - 75007 PARIS",
    "latitude": 48.85971010443503,
    "longitude": 2.325809024625026
  }, {
    "number": 20011,
    "name": "20011 - PYRÉNÉES-DAGORNO",
    "address": "103 RUE DES PYRENNEES - 75020 PARIS",
    "latitude": 48.85550135398888,
    "longitude": 2.405168520639166
  }, {
    "number": 33006,
    "name": "33006 - KARMAN (AUBERVILLIERS)",
    "address": "FACE 143 RUE ANDRE KARMAN - 93300 AUBERVILLIERS",
    "latitude": 48.9101436710038,
    "longitude": 2.38505201824411
  }, {
    "number": 5005,
    "name": "05005 - SAINT JACQUES GAY LUSSAC",
    "address": "27 RUE GAY LUSSAC - 75005 PARIS",
    "latitude": 48.844730256132095,
    "longitude": 2.341923944866407
  }, {
    "number": 11029,
    "name": "11029 - MENILMONTANT OBERKAMPF",
    "address": "137 BOULEVARD MENILMONTANT - 75011 PARIS",
    "latitude": 48.8666176586814,
    "longitude": 2.38301344041578
  }, {
    "number": 4020,
    "name": "04020 - BEAUBOURG PLACE MICHELET",
    "address": "FACE 27 RUE QUINCAMPOIX - 75004 PARIS",
    "latitude": 48.86008832610481,
    "longitude": 2.350148335920203
  }, {
    "number": 7012,
    "name": "07012 - CITE VANEAU",
    "address": "7 CITE VANEAU - 75007 PARIS",
    "latitude": 48.854268334051035,
    "longitude": 2.319454010061415
  }, {
    "number": 19019,
    "name": "19019 - PETIT HONNEGER",
    "address": "124 RUE PETIT - 75019 PARIS",
    "latitude": 48.886389634924626,
    "longitude": 2.393637514433606
  }, {
    "number": 14113,
    "name": "14113 - ARAGO 2",
    "address": "36 RUE DE LA SANTE - 75014 PARIS",
    "latitude": 48.83512886504287,
    "longitude": 2.34157863455693
  }, {
    "number": 15028,
    "name": "15028 - DUPLEIX",
    "address": "54 BOULEVARD DE GRENELLE - 75015 PARIS",
    "latitude": 48.851396721123486,
    "longitude": 2.291889313228121
  }, {
    "number": 22005,
    "name": "22005 - DE GAULLE 3 (NEUILLY)",
    "address": "195 AVENUE CHARLES DE GAULLE - 92200 NEUILLY",
    "latitude": 48.8842989293728,
    "longitude": 2.26099177209953
  }, {
    "number": 20027,
    "name": "20027 - PORTE DE MENILMONTANT",
    "address": "1 rue Vidal de la Blache / Angle 78 boulevard Mortier - 75020 PARIS",
    "latitude": 48.8691543609174,
    "longitude": 2.40932246879487
  }, {
    "number": 18042,
    "name": "18042 - PIGALLE GERMAIN PILLON",
    "address": "FACE 36 BOULEVARD DE CLICHY - 75018 PARIS",
    "latitude": 48.882728090545086,
    "longitude": 2.336262639016585
  }, {
    "number": 11008,
    "name": "11008 - FAIDHERBE CHALIGNY",
    "address": "223 RUE DU FAUBOURG SAINT ANTOINE - 75011 PARIS",
    "latitude": 48.850379753879935,
    "longitude": 2.38386933547444
  }, {
    "number": 19038,
    "name": "19038 - JOURDAIN",
    "address": "9 RUE LASSUS - 75019 PARIS",
    "latitude": 48.8755503947562,
    "longitude": 2.389038160847546
  }, {
    "number": 13037,
    "name": "13037 - IVRY BAUDICOURT",
    "address": "76 AVENUE D'IVRY - 75013 PARIS",
    "latitude": 48.824695995415006,
    "longitude": 2.363106073577468
  }, {
    "number": 13040,
    "name": "13040 - PORTE DE CHOISY",
    "address": "111 BOULEVARD MASSENA - 75013 PARIS",
    "latitude": 48.819941965677195,
    "longitude": 2.36507858638901
  }, {
    "number": 16027,
    "name": "16027 - JASMIN",
    "address": "79 AV MOZART- 75016 PARIS",
    "latitude": 48.85286124871689,
    "longitude": 2.268483570651513
  }, {
    "number": 15118,
    "name": "15118 - PLACE BIENVENUE",
    "address": "11 RUE DE L'ARRIVEE - 75015 PARIS",
    "latitude": 48.84319882807092,
    "longitude": 2.322257377279243
  }, {
    "number": 6006,
    "name": "06006 - NOTRE DAME DES CHAMPS",
    "address": "41 RUE NOTRE DAME DES CHAMPS - 75006 PARIS",
    "latitude": 48.84479928858768,
    "longitude": 2.329337755887181
  }, {
    "number": 20015,
    "name": "20015 - BAGNOLET-ORTEAUX",
    "address": "44 BIS RUE DE BAGNOLET - 75020 PARIS",
    "latitude": 48.8571433920909,
    "longitude": 2.398472
  }, {
    "number": 9005,
    "name": "09005 - SQUARE D'ANVERS",
    "address": "95 RUE DE DUNKERQUE - 75009 PARIS",
    "latitude": 48.882633484310816,
    "longitude": 2.344884406212207
  }, {
    "number": 8031,
    "name": "08031 - ROND POINT DES CHAMPS ELYSEES",
    "address": "2 RUE JEAN MERMOZ - 75008 PARIS",
    "latitude": 48.86970884795243,
    "longitude": 2.310714655374236
  }, {
    "number": 12015,
    "name": "12015 - NATION PICPUS",
    "address": "FACE 67 BOULEVARD DE PICPUS - 75012 PARIS",
    "latitude": 48.846964359503055,
    "longitude": 2.399868277428793
  }, {
    "number": 14120,
    "name": "14120 - JOURDAN BARBOUX",
    "address": "7 RUE HENRI BARBOUX - 75014 PARIS",
    "latitude": 48.82195530645611,
    "longitude": 2.326806869905884
  }, {
    "number": 9007,
    "name": "09007 - CONDORCET",
    "address": "34 RUE CONDORCET - 75009 PARIS",
    "latitude": 48.87983122511022,
    "longitude": 2.345396338986368
  }, {
    "number": 9019,
    "name": "09019 - VICTOR MASSE",
    "address": "38 RUE VICTOR MASSE - 75009 PARIS",
    "latitude": 48.881149033952994,
    "longitude": 2.336681004295117
  }, {
    "number": 15040,
    "name": "15040 - MONCLAR",
    "address": "33 BIS RUE SAINT AMAND - 75015 PARIS",
    "latitude": 48.83411714783768,
    "longitude": 2.308850015466539
  }, {
    "number": 14013,
    "name": "14013 - LIART AMIRAL MOUCHEZ",
    "address": "1 RUE LIARD - 75014 PARIS",
    "latitude": 48.82122766331853,
    "longitude": 2.342104214557966
  }, {
    "number": 42201,
    "name": "42201 - NECKER (CHARENTON)",
    "address": "RUE NECKER/ RUE DU PORT AUX LIONS - 94220 CHARENTON",
    "latitude": 48.823963252286866,
    "longitude": 2.399998420132992
  }, {
    "number": 11038,
    "name": "11038 - TEMPLE REPUBLIQUE",
    "address": "44 BD DU TEMPLE - 75011 PARIS",
    "latitude": 48.865745077094815,
    "longitude": 2.365312950780227
  }, {
    "number": 18019,
    "name": "18019 - MONTCALM",
    "address": "2 RUE MONTCALM - 75018 PARIS",
    "latitude": 48.891877957087424,
    "longitude": 2.335447427689794
  }, {
    "number": 17008,
    "name": "17008 - PORCHE POUCHET",
    "address": "7 PLACE ARNAUD TZANCK - 75017 PARIS",
    "latitude": 48.898773792804256,
    "longitude": 2.322478477864687
  }, {
    "number": 901,
    "name": "00901 - PORT SOLFÉRINO (STATION MOBILE)",
    "address": "QUAI ANATOLE FRANCE - PONT SOLFERINO - 75007 PARIS",
    "latitude": 48.86138,
    "longitude": 2.32442
  }, {
    "number": 15064,
    "name": "15064 - JAVEL",
    "address": "DEV 5 AVENUE EMILE ZOLA - 75015 PARIS",
    "latitude": 48.84629491826888,
    "longitude": 2.278413912593796
  }, {
    "number": 12031,
    "name": "12031 - LAME",
    "address": "49 RUE GABRIEL LAME - 75012 PARIS",
    "latitude": 48.835138050689515,
    "longitude": 2.385478486564838
  }, {
    "number": 13021,
    "name": "13021 - BOUSSINGAULT - TOLBIAC",
    "address": "55 RUE BOUSSINGAULT - 75013 PARIS",
    "latitude": 48.82603516605852,
    "longitude": 2.342176808004326
  }, {
    "number": 34002,
    "name": "34002 - PERI (SAINT OUEN)",
    "address": "128 AVENUE GABRIEL PERI / AVENUE DU CAPITAINE GLAMER - 93400 SAINT OUEN",
    "latitude": 48.90259224163092,
    "longitude": 2.330513564840273
  }, {
    "number": 2005,
    "name": "02005 - MONTORGUEIL RUE MONTMARTRE VERSION 2",
    "address": "46 RUE DE MONTMARTRE - 75002 PARIS",
    "latitude": 48.865021945810085,
    "longitude": 2.345068440144759
  }, {
    "number": 22012,
    "name": "22012 - MICHELIS (NEUILLY)",
    "address": "32 RUE DE MADELEINE MICHELIS - 92200 NEUILLY",
    "latitude": 48.8827499154713,
    "longitude": 2.27740638127753
  }, {
    "number": 5104,
    "name": "05104 - BUFFON",
    "address": "47 RUE BUFFON - 75005 PARIS",
    "latitude": 48.841916179825965,
    "longitude": 2.358912681317667
  }, {
    "number": 31008,
    "name": "31008 - VINCENNES (MONTREUIL)",
    "address": "7 BIS RUE DE VINCENNES - 93100 MONTREUIL",
    "latitude": 48.857702134021,
    "longitude": 2.43736866129498
  }, {
    "number": 15062,
    "name": "15062 - BOUCICAUT",
    "address": "87 RUE DE LA CONVENTION - 75015 PARIS",
    "latitude": 48.84214433157821,
    "longitude": 2.285862655943941
  }, {
    "number": 4012,
    "name": "04012 - ECOUFFES RIVOLI",
    "address": "2 RUE TIRON - 75004 PARIS",
    "latitude": 48.85579663740384,
    "longitude": 2.357907882135172
  }, {
    "number": 3011,
    "name": "03011 - TURBIGO",
    "address": "55 RUE TURBIGO - 75003 PARIS",
    "latitude": 48.86558419108518,
    "longitude": 2.356278447633629
  }, {
    "number": 20017,
    "name": "20017 - RUE SAINT BLAISE",
    "address": "69 RUE SAINT BLAISE - 75020 PARIS",
    "latitude": 48.8569749400317,
    "longitude": 2.408842457406961
  }, {
    "number": 18028,
    "name": "18028 - VAUVENARGUES",
    "address": "195 RUE CHAMPIONNET - 75018 PARIS",
    "latitude": 48.89405725132698,
    "longitude": 2.332199335980013
  }, {
    "number": 12024,
    "name": "12024 - GARE DE BERCY",
    "address": "GARE DE BERCY - ANGLE RUE CORBINEAU - 75012 PARIS",
    "latitude": 48.83976,
    "longitude": 2.38241
  }, {
    "number": 11113,
    "name": "11113 - REPUBLIQUE FERRY",
    "address": "FACE 140 BOULEVARD RICHARD LENOIR - 75011 PARIS",
    "latitude": 48.86651607982108,
    "longitude": 2.369322530407524
  }, {
    "number": 21015,
    "name": "21015 - NATIONALE (BOULOGNE-BILLANCOURT)",
    "address": "39 RUE NATIONALE - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.827600424128306,
    "longitude": 2.241835191324587
  }, {
    "number": 42015,
    "name": "42015 - JEAN FERRAT (IVRY)",
    "address": "PLACE JEAN FERRAT - 94200 IVRY",
    "latitude": 48.8185,
    "longitude": 2.37427
  }, {
    "number": 5002,
    "name": "05002 - SAINT JACQUES",
    "address": "20 RUE SOMMERARD - 75005 PARIS",
    "latitude": 48.850310432924466,
    "longitude": 2.345015835298588
  }, {
    "number": 10040,
    "name": "10040 - BELLEVILLE",
    "address": "8 BOULEVARD DE LA VILETTE - 75010 PARIS",
    "latitude": 48.87277815648997,
    "longitude": 2.376348394645978
  }, {
    "number": 13018,
    "name": "13018 - AURIOL CHEVALERET",
    "address": "1 RUE BRUANT - 75013 PARIS",
    "latitude": 48.83484845292942,
    "longitude": 2.366826499627087
  }, {
    "number": 13026,
    "name": "13026 - PLACE HENOCQUE VERSION 2",
    "address": "21 RUE DU DR LERAY ET LANDOUZY - 75013 PARIS",
    "latitude": 48.823316172177535,
    "longitude": 2.35433694417225
  }, {
    "number": 19028,
    "name": "19028 - PLACE DES FETES",
    "address": "17 RUE DES FETES - 75019 PARIS",
    "latitude": 48.876468339733144,
    "longitude": 2.392284629788502
  }, {
    "number": 10008,
    "name": "10008 - CITE RIVERIN",
    "address": "12 RUE CITE RIVERIN / ANGLE RUE DU CHATEAU D'EAU - 75010 PARIS",
    "latitude": 48.8707649818776,
    "longitude": 2.35872446227434
  }, {
    "number": 6015,
    "name": "06015 - MAZET SAINT ANDRE DES ARTS",
    "address": "10 RUE ANDRE MAZET - 75006 PARIS",
    "latitude": 48.853751073467855,
    "longitude": 2.339113722899687
  }, {
    "number": 43006,
    "name": "43006 - MINIMES (VINCENNES)",
    "address": "30 AVENUE DES MINIMES - 94300 VINCENNES",
    "latitude": 48.841486856300165,
    "longitude": 2.430793451133684
  }, {
    "number": 15054,
    "name": "15054 - CHANDON",
    "address": "293 RUE LECOURBE - 75015 PARIS",
    "latitude": 48.83797034201205,
    "longitude": 2.287582307043615
  }, {
    "number": 11043,
    "name": "11043 - CIRQUE D HIVER",
    "address": "PLACE PASDELOUP - 75011 PARIS",
    "latitude": 48.862650300140295,
    "longitude": 2.367053490449912
  }, {
    "number": 5024,
    "name": "05024 - PLACE MONGE",
    "address": "4 RUE DOLOMIEU - 75005 PARIS",
    "latitude": 48.84273504298964,
    "longitude": 2.352472437223356
  }, {
    "number": 15036,
    "name": "15036 - LAMBERT",
    "address": "102 RUE DE LA CROIX NIVERT - 75015 PARIS",
    "latitude": 48.84307638694992,
    "longitude": 2.29514141310447
  }, {
    "number": 42504,
    "name": "42504 - MALON (GENTILLY)",
    "address": "FACE 59 RUE BENOIT MALON - 94250 GENTILLY",
    "latitude": 48.81444017962381,
    "longitude": 2.341070654172592
  }, {
    "number": 6107,
    "name": "06107 - CHERCHE MIDI",
    "address": "29 RUE DU CHERCHE MIDI - 75006 PARIS",
    "latitude": 48.85024108719566,
    "longitude": 2.327551549210571
  }, {
    "number": 17029,
    "name": "17029 - PLACE AIMÉE MAILLART",
    "address": "29 RUE PIERRE DEMOURS - 75017 PARIS",
    "latitude": 48.88141110121936,
    "longitude": 2.29482820074442
  }, {
    "number": 13050,
    "name": "13050 - QUAI PANHARD ET LEVASSOR",
    "address": "23 QUAI PANHARD ET LEVASSOR - 75013 PARIS",
    "latitude": 48.828369893809565,
    "longitude": 2.384440354604646
  }, {
    "number": 9020,
    "name": "09020 - TOUDOUZE CLAUZEL",
    "address": "FACE 27 RUE CLAUZEL - 75009 PARIS",
    "latitude": 48.879505265624786,
    "longitude": 2.337190639271711
  }, {
    "number": 14029,
    "name": "14029 - GERGOVIE VERCINGETORIX",
    "address": "112 RUE VERCINGETORIX - 75014 PARIS",
    "latitude": 48.83425924993043,
    "longitude": 2.313391647113252
  }, {
    "number": 10029,
    "name": "10029 - PLACE DE ROUBAIX",
    "address": "39 RUE DE DUNKERQUE - 75010 PARIS",
    "latitude": 48.88072668576597,
    "longitude": 2.351464333201903
  }, {
    "number": 9004,
    "name": "09004 - ROCHECHOUART GERANDO",
    "address": "19 RUE GUERANDO - 75009 PARIS",
    "latitude": 48.88291108953936,
    "longitude": 2.346319371627125
  }, {
    "number": 10015,
    "name": "10015 - RECOLLETS",
    "address": "46 RUE LUCIE SAMPAIX - 75010 PARIS",
    "latitude": 48.874112916506824,
    "longitude": 2.362498528696257
  }, {
    "number": 6029,
    "name": "06029 - VAUGIRARD PRINCE",
    "address": "FACE 1 RUE DE VAUGIRARD - 75006 PARIS",
    "latitude": 48.84892295818577,
    "longitude": 2.341040508705961
  }, {
    "number": 12151,
    "name": "12151 - GARE DE LYON",
    "address": "GARE DE LYON - 75012 PARIS",
    "latitude": 48.8455150897939,
    "longitude": 2.3726498446286
  }, {
    "number": 12019,
    "name": "12019 - GARE DE REUILLY",
    "address": "58 RUE DE LA GARE DE REUILLY - 75012 PARIS",
    "latitude": 48.842577100515385,
    "longitude": 2.397249990597384
  }, {
    "number": 13116,
    "name": "13116 - PLACE DU DOCTEUR YERSIN",
    "address": "FACE 5 AVENUE DE LA PORTE D'IVRY - 75013 PARIS",
    "latitude": 48.820226792619714,
    "longitude": 2.372209309645734
  }, {
    "number": 19114,
    "name": "19114 - MANIN SECRETAN",
    "address": "31 RUE MANIN - 75019 PARIS",
    "latitude": 48.87927519569598,
    "longitude": 2.378637021920256
  }, {
    "number": 8025,
    "name": "08025 - MIROMESNIL",
    "address": "39 RUE DE MIROMESNIL - 75008 PARIS",
    "latitude": 48.873760472140056,
    "longitude": 2.315876308346374
  }, {
    "number": 14033,
    "name": "14033 - DAGUERRE GASSENDI",
    "address": "31 RUE FRODEVAUX - 75014 PARIS",
    "latitude": 48.83568044417256,
    "longitude": 2.328290822051698
  }, {
    "number": 22011,
    "name": "22011 - MONTROSIER (NEUILLY)",
    "address": "7 RUE MONTROSIER - 92200 NEUILLY",
    "latitude": 48.87944136963256,
    "longitude": 2.278535717122779
  }, {
    "number": 12032,
    "name": "12032 - PORTE DOREE",
    "address": "1 PLACE EDOUARD RENARD - 75012 PARIS",
    "latitude": 48.835545043575955,
    "longitude": 2.40745551592605
  }, {
    "number": 16110,
    "name": "16110 - OCTAVE FEUILLET",
    "address": "4-6 RUE OCTAVE FEUILLET - 75016 PARIS",
    "latitude": 48.8609983661382,
    "longitude": 2.27312852713658
  }, {
    "number": 16030,
    "name": "16030 - MIRABEAU",
    "address": "4 PLACE DE BARCELONE - 75016 PARIS",
    "latitude": 48.84766571002937,
    "longitude": 2.273556264965371
  }, {
    "number": 15049,
    "name": "15049 - PORTE DE VERSAILLES",
    "address": "2 AVENUE ERNEST RENAN - 75015 PARIS",
    "latitude": 48.83217944426036,
    "longitude": 2.287122261982559
  }, {
    "number": 15042,
    "name": "15042 - FARMAN",
    "address": "61 RUE HENRY FARMAN - 75015 PARIS",
    "latitude": 48.83373383017729,
    "longitude": 2.271396472461431
  }, {
    "number": 19012,
    "name": "19012 - LALLY TOLLENDAL",
    "address": "5 RUE LALLY TOLLENDAL - 75019 PARIS",
    "latitude": 48.88270064422199,
    "longitude": 2.37469338894231
  }, {
    "number": 21018,
    "name": "21018 - SEINE (BOULOGNE-BILLANCOURT)",
    "address": "FACE AU 13 RUE DE LA SEINE - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.82824349415854,
    "longitude": 2.250657739639016
  }, {
    "number": 15053,
    "name": "15053 - LECOURBE",
    "address": "250 RUE LECOURBE - 75015 PARIS",
    "latitude": 48.83922209776229,
    "longitude": 2.291540507948998
  }, {
    "number": 18027,
    "name": "18027 - DAMREMONT ORDENER",
    "address": "102 RUE DAMREMONT - 75018 PARIS",
    "latitude": 48.893400392981874,
    "longitude": 2.336266523912805
  }, {
    "number": 6103,
    "name": "06103 - MEZIERES RENNES",
    "address": "16 RUE DE MEZIERES - 75006 PARIS",
    "latitude": 48.850297010217595,
    "longitude": 2.330446820277252
  }, {
    "number": 42006,
    "name": "42006 - BROSSOLETTE (IVRY)",
    "address": "23 RUE PIERRE BROSSOLETTE - 94200 IVRY",
    "latitude": 48.816929720561234,
    "longitude": 2.381460319184223
  }, {
    "number": 17011,
    "name": "17011 - PORTE DE CLICHY FRAGONARD",
    "address": "4 RUE FRAGONARD - 75017 PARIS",
    "latitude": 48.894151383293696,
    "longitude": 2.314678001115381
  }, {
    "number": 6020,
    "name": "06020 - SAINT MICHEL DANTON",
    "address": "2 RUE DANTON - 75006 PARIS",
    "latitude": 48.85293041059132,
    "longitude": 2.342657392891206
  }, {
    "number": 11017,
    "name": "11017 - ALEXANDRE DUMAS",
    "address": "FACE 77 BOULEVARD DE CHARONNE - 75011 PARIS",
    "latitude": 48.854176040414856,
    "longitude": 2.396093495321842
  }, {
    "number": 14111,
    "name": "14111 - DENFERT-ROCHEREAU CASSINI",
    "address": "18 RUE CASSINI - 75014 PARIS",
    "latitude": 48.837549292197465,
    "longitude": 2.335983030466524
  }, {
    "number": 11032,
    "name": "11032 - METALLOS",
    "address": "81 BIS RUE JP TIMBAUD - 75011 PARIS",
    "latitude": 48.86793796309799,
    "longitude": 2.377885515684799
  }, {
    "number": 21113,
    "name": "21113 - PETIT (CLICHY)",
    "address": "2 RUE PETIT - 92110 CLICHY",
    "latitude": 48.8993483537726,
    "longitude": 2.29662648341284
  }, {
    "number": 11044,
    "name": "11044 - RICHARD LENOIR VOLTAIRE NORD",
    "address": "FACE 104 BOULEVARD RICHARD LENOIR - 75011 PARIS",
    "latitude": 48.86343198963591,
    "longitude": 2.37120861796012
  }, {
    "number": 3001,
    "name": "03001 - CHEMIN VERT BEAUMARCHAIS",
    "address": "69 BOULEVARD BEAUMARCHAIS - 75003 PARIS",
    "latitude": 48.85804405694242,
    "longitude": 2.367832659296124
  }, {
    "number": 20133,
    "name": "20133 - RASSELINS",
    "address": "2 RUE DES RASSELINS - 75020 PARIS",
    "latitude": 48.85352868594103,
    "longitude": 2.409615362775532
  }, {
    "number": 13047,
    "name": "13047 - BOUTROUX VITRY",
    "address": "1 AVENUE BOUTROUX - 75013 PARIS",
    "latitude": 48.822632842232245,
    "longitude": 2.377738433657617
  }, {
    "number": 34009,
    "name": "34009 - MAAR (SAINT OUEN)",
    "address": "RUE DORA MAAR / GARE RER - 93400 SAINT OUEN",
    "latitude": 48.905269629379745,
    "longitude": 2.322171248688672
  }, {
    "number": 11001,
    "name": "11001 - BASTILLE RICHARD LENOIR",
    "address": "2 BOULEVARD RICHARD LENOIR - 75011 PARIS",
    "latitude": 48.85384822621097,
    "longitude": 2.369701488217501
  }, {
    "number": 3007,
    "name": "03007 - ARCHIVES PASTOURELLE",
    "address": "67 RUE DES ARCHIVES - 75003 PARIS",
    "latitude": 48.86240121191442,
    "longitude": 2.359447031946381
  }, {
    "number": 9009,
    "name": "09009 - SQUARE MONTHOLON",
    "address": "26 RUE MONTHOLON - 75009 PARIS",
    "latitude": 48.87660117136262,
    "longitude": 2.345785516803243
  }, {
    "number": 905,
    "name": "00905 - CONCORDE/BERGES DE SEINE (STATION MOBILE)",
    "address": "QUAI D'ORSAY - CONCORDE - 75007 PARIS",
    "latitude": 48.86314,
    "longitude": 2.31669
  }, {
    "number": 15115,
    "name": "15115 - VAUGIRARD",
    "address": "25-31 BOULEVARD DE VAUGIRARD - 75015 PARIS",
    "latitude": 48.841325259808,
    "longitude": 2.31829155159271
  }, {
    "number": 5018,
    "name": "05018 - MUTUALITE",
    "address": "20 RUE MONGE - 75005 PARIS",
    "latitude": 48.84838576471672,
    "longitude": 2.350169939020645
  }, {
    "number": 35006,
    "name": "35006 - DELIZY (PANTIN)",
    "address": "FACE AU 23 RUE DELIZY - 93500 PANTIN",
    "latitude": 48.89633193166097,
    "longitude": 2.409087652725976
  }, {
    "number": 9036,
    "name": "09036 - ATHENES CLICHY",
    "address": "4 RUE D'ATHENES - 75009 PARIS",
    "latitude": 48.878113787876,
    "longitude": 2.32956021945824
  }, {
    "number": 4107,
    "name": "04107 - BEAUMARCHAIS",
    "address": "27 BOULEVARD BEAUMARCHAIS - 75004 PARIS",
    "latitude": 48.855501357701705,
    "longitude": 2.368429069929045
  }, {
    "number": 17050,
    "name": "17050 - BATIGNOLLES",
    "address": "1 RUE DES BATIGNOLLES - 75017 PARIS",
    "latitude": 48.88310390458221,
    "longitude": 2.323834749088381
  }, {
    "number": 5013,
    "name": "05013 - ULM ERASME",
    "address": "13 RUE ERASME - 75005 PARIS",
    "latitude": 48.8425479496716,
    "longitude": 2.344596649931604
  }, {
    "number": 20110,
    "name": "20110 - PORTE DES LILAS",
    "address": "FACE 241 AVENUE GAMBETTA - 75020 PARIS",
    "latitude": 48.87541242186098,
    "longitude": 2.4059603311549
  }, {
    "number": 13001,
    "name": "13001 - PORT ROYAL",
    "address": "51 BOULEVARD PORT ROYAL - 75013 PARIS",
    "latitude": 48.83772792097816,
    "longitude": 2.344664043426302
  }, {
    "number": 13103,
    "name": "13103 - SAINT MARCEL",
    "address": "89 BOULEVARD DE L'HOPITAL - 75013 PARIS",
    "latitude": 48.83772768745433,
    "longitude": 2.360460336476805
  }, {
    "number": 17018,
    "name": "17018 - MONCEAU",
    "address": "4 RUE DE THANN - 75017 PARIS",
    "latitude": 48.881161983577115,
    "longitude": 2.30951238050775
  }, {
    "number": 31704,
    "name": "31704 - HORNET (BAGNOLET)",
    "address": "FACE AU 1 RUE JEANNE HORNET - 93170 BAGNOLET",
    "latitude": 48.873929200033544,
    "longitude": 2.427933579778934
  }, {
    "number": 4103,
    "name": "04103 - HOTEL DE VILLE",
    "address": "1 RUE DES ARCHIVES - 75004 PARIS",
    "latitude": 48.857203787697095,
    "longitude": 2.353976273618783
  }, {
    "number": 21013,
    "name": "21013 - GRENIER (BOULOGNE-BILLANCOURT)",
    "address": "4 AVENUE PIERRE GRENIER - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.82584693469992,
    "longitude": 2.248821391087721
  }, {
    "number": 11012,
    "name": "11012 - MONTREUIL VOLTAIRE",
    "address": "93 RUE DE MONTREUIL - 75011 PARIS",
    "latitude": 48.85050701184191,
    "longitude": 2.393075558274471
  }, {
    "number": 33012,
    "name": "33012 - LANDY (AUBERVILLIERS)",
    "address": "FACE 2 RUE DU LANDY - 93300 AUBERVILLIERS",
    "latitude": 48.915156182813234,
    "longitude": 2.376424009514086
  }, {
    "number": 35001,
    "name": "35001 - JAURES 1 (PANTIN)",
    "address": "168 AVENUE JEAN JAURES - 93500 PANTIN",
    "latitude": 48.91013709505388,
    "longitude": 2.399325633305226
  }, {
    "number": 21703,
    "name": "21703 - MARTINIE (VANVES)",
    "address": "5-7 AVENUE MARCEL MARTINIE - 92170 VANVES",
    "latitude": 48.821049923459526,
    "longitude": 2.29130063072414
  }, {
    "number": 2101,
    "name": "02101 - BACHAUMONT",
    "address": "14 RUE BACHAUMONT - 75002 PARIS",
    "latitude": 48.866067150086806,
    "longitude": 2.345463652702569
  }, {
    "number": 17025,
    "name": "17025 - COURCELLES",
    "address": "2 RUE DE CHAZELLES - 75017 PARIS",
    "latitude": 48.8794303755264,
    "longitude": 2.303467406687128
  }, {
    "number": 7004,
    "name": "07004 - RASPAIL VARENNE",
    "address": "FACE 28 BOULEVARD RASPAIL - 75007 PARIS",
    "latitude": 48.853261668611665,
    "longitude": 2.326319806384382
  }, {
    "number": 20032,
    "name": "20032 - AMANDIERS",
    "address": "55 RUE DES CENDRIERS - 75020 PARIS",
    "latitude": 48.86629510600211,
    "longitude": 2.389350412433471
  }, {
    "number": 9008,
    "name": "09008 - TOUR D'AUVERGNE",
    "address": "24 RUE D'AUVERGNE - 75009 PARIS",
    "latitude": 48.87916177777549,
    "longitude": 2.34369843072095
  }, {
    "number": 43007,
    "name": "43007 - VORGES (VINCENNES)",
    "address": "4 AVENUE VORGES - 94300 VINCENNES",
    "latitude": 48.848257752729346,
    "longitude": 2.439892899386235
  }, {
    "number": 12006,
    "name": "12006 - GARE DE LYON VAN GOGH",
    "address": "15 RUE VAN GOGH - 75012 PARIS",
    "latitude": 48.84419240789483,
    "longitude": 2.371691677977748
  }, {
    "number": 21204,
    "name": "21204 - D'ORVES (MONTROUGE)",
    "address": "FACE 44 RUE D'ESTIENNES D'ORVES / PISCINE - 92120 MONTROUGE",
    "latitude": 48.815388220397274,
    "longitude": 2.320886790760933
  }, {
    "number": 14016,
    "name": "14016 - REILLE MONTSOURIS",
    "address": "61 AVENUE RENE COTY - 75014 PARIS",
    "latitude": 48.82476710259696,
    "longitude": 2.335999677300567
  }, {
    "number": 31002,
    "name": "31002 - REPUBLIQUE (MONTREUIL)",
    "address": "38 RUE DE LA REPUBLIQUE - 93100 MONTREUIL",
    "latitude": 48.85281419134583,
    "longitude": 2.419307088753658
  }, {
    "number": 15070,
    "name": "15070 - BLANC",
    "address": "88 RUE BALARD - 75015 PARIS",
    "latitude": 48.83863387153602,
    "longitude": 2.278274193061826
  }, {
    "number": 17047,
    "name": "17047 - COURCELLES - DEMOURES",
    "address": "172 RUE DE COURCELLES - 75017 PARIS",
    "latitude": 48.883769733273496,
    "longitude": 2.29858466343129
  }, {
    "number": 18018,
    "name": "18018 - CARPEAUX",
    "address": "13 RUE CARPEAUX - 75018 PARIS",
    "latitude": 48.890747210171405,
    "longitude": 2.330820396477741
  }, {
    "number": 4014,
    "name": "04014 - ARCHIVES BLANCS MANTEAUX",
    "address": "29 RUE DES BLANCS MANTEAUX - 75004 PARIS",
    "latitude": 48.85940271964358,
    "longitude": 2.35592748653501
  }, {
    "number": 15105,
    "name": "15105 - SUFFREN FÉDÉRATION",
    "address": "84 RUE DE LA FEDERATION - 75015 PARIS",
    "latitude": 48.85276674352813,
    "longitude": 2.297876431467921
  }, {
    "number": 10024,
    "name": "10024 - BUISSON SAINT LOUIS",
    "address": "2 RUE DU BUISSON SAINT LOUIS - 75010 PARIS",
    "latitude": 48.87182588992616,
    "longitude": 2.372203224856393
  }, {
    "number": 32008,
    "name": "32008 - EMGP NORD (SAINT DENIS)",
    "address": "EMGP PARKING ENTREE NORD - 93200 SAINT DENIS",
    "latitude": 48.905745467654526,
    "longitude": 2.364997877155126
  }, {
    "number": 8054,
    "name": "08054 - HOCHE ALBRECHT",
    "address": "10 AVENUE BERTHIER ALBRECHT - 75008 PARIS",
    "latitude": 48.87614039826388,
    "longitude": 2.301303138307601
  }, {
    "number": 7009,
    "name": "07009 - ASSEMBLEE NATIONALE",
    "address": "FACE 119 RUE DE LILLE - 75007 PARIS",
    "latitude": 48.86137389094257,
    "longitude": 2.320131276903925
  }, {
    "number": 1015,
    "name": "01015 - PLACE ANDRE MALRAUX",
    "address": "2 PLACE ANDRE MALRAUX - 75001 PARIS",
    "latitude": 48.86397965515107,
    "longitude": 2.335599603893845
  }, {
    "number": 17002,
    "name": "17002 - LA FOURCHE RUE DE LA CONDAMINE",
    "address": "4 RUE DE LA CONDAMINE - 75017 PARIS",
    "latitude": 48.88790134553051,
    "longitude": 2.324400445437174
  }, {
    "number": 18030,
    "name": "18030 - SIMPLON",
    "address": "1 RUE JOSEPH DIJON - 75018 PARIS",
    "latitude": 48.89373427753593,
    "longitude": 2.347517966604574
  }, {
    "number": 32605,
    "name": "32605 - HORTENSIAS (LES LILAS)",
    "address": "1 ALLEE DES HORTENSIAS - 93260 LES LILAS",
    "latitude": 48.88217309420464,
    "longitude": 2.42327263606036
  }, {
    "number": 43005,
    "name": "43005 - AUBERT (VINCENNES)",
    "address": "18 AVENUE AUBERT - 94300 VINCENNES",
    "latitude": 48.847550436310826,
    "longitude": 2.433432607923368
  }, {
    "number": 13045,
    "name": "13045 - TOLBIAC ALBERT",
    "address": "FACE 1 RUE JEAN COLLY - 75013 PARIS",
    "latitude": 48.82783803264948,
    "longitude": 2.370530563855483
  }, {
    "number": 8034,
    "name": "08034 - HAUSSMANN COURCELLES",
    "address": "49 RUE DE BERRI - 75008 PARIS",
    "latitude": 48.874810390028195,
    "longitude": 2.308314064189137
  }, {
    "number": 2012,
    "name": "02012 - QUATRE SEPTEMBRE",
    "address": "10 RUE DE CHOISEUL - 75002 PARIS",
    "latitude": 48.869969733968915,
    "longitude": 2.3360394555421
  }, {
    "number": 5029,
    "name": "05029 - PORT ROYAL",
    "address": "FACE 41 AVENUE GEORGES BERNANOS - 75005 PARIS",
    "latitude": 48.8401089566606,
    "longitude": 2.337296889737942
  }, {
    "number": 20008,
    "name": "20008 - MARAICHERS",
    "address": "73 RUE DES PYRENEES - 75020 PARIS",
    "latitude": 48.853246898211985,
    "longitude": 2.405871044529538
  }, {
    "number": 17039,
    "name": "17039 - PLACE SAINT FERDINAND",
    "address": "26 RUE SAINT FERDINAND - 75017 PARIS",
    "latitude": 48.87815529789739,
    "longitude": 2.288518047864942
  }, {
    "number": 15069,
    "name": "15069 - BOUCICAUT FAURE",
    "address": "41 AVENUE FELIX FAURE - 75015 PARIS",
    "latitude": 48.841249336041045,
    "longitude": 2.288386600849503
  }, {
    "number": 5027,
    "name": "05027 - GOBELINS",
    "address": "22 AVENUE DES GOBELINS - 75005 PARIS",
    "latitude": 48.83712603861059,
    "longitude": 2.351433329767636
  }, {
    "number": 12017,
    "name": "12017 - ST MANDE NETTER",
    "address": "82 AVENUE SAINT MANDE - 75012 PARIS",
    "latitude": 48.84463462629767,
    "longitude": 2.405099826323643
  }, {
    "number": 35003,
    "name": "35003 - VAILLANT (PANTIN)",
    "address": "ANGLE RUE GENERAL GOSSERAND ET AVENUE EDOUARD VAILLANT - 93500 PANTIN",
    "latitude": 48.902691617981425,
    "longitude": 2.393255829334146
  }, {
    "number": 20116,
    "name": "20116 - HAIES REUNION",
    "address": "53 RUE DES HAIES - 75020 PARIS",
    "latitude": 48.85386896766491,
    "longitude": 2.402426162238911
  }, {
    "number": 18011,
    "name": "18011 - HERBERT",
    "address": "85 RUE PAJOL - 75018 PARIS",
    "latitude": 48.89284571116732,
    "longitude": 2.363429016279767
  }, {
    "number": 13005,
    "name": "13005 - ARAGO CORDELIERE - VERSION 2",
    "address": "2 RUE DES CORDELIERES - 75013 PARIS",
    "latitude": 48.83548071896613,
    "longitude": 2.348572461702221
  }, {
    "number": 10032,
    "name": "10032 - DODU",
    "address": "N° 12-14 RUE CLAUDE VELLEFAUX- 75010 PARIS",
    "latitude": 48.87285913900304,
    "longitude": 2.370071706985146
  }, {
    "number": 15037,
    "name": "15037 - GROULT",
    "address": "202 RUE LECOURBE - 75015 PARIS",
    "latitude": 48.84041618840877,
    "longitude": 2.295464906515111
  }, {
    "number": 21106,
    "name": "21106 - MORICE 2 (CLICHY)",
    "address": "2-4 RUE MORICE - 92110 CLICHY",
    "latitude": 48.90066034942664,
    "longitude": 2.308569535028556
  }, {
    "number": 8055,
    "name": "08055 - TERNES COURCELLES",
    "address": "87 BD COURCELLES - 75008 PARIS",
    "latitude": 48.87818887641853,
    "longitude": 2.299296003861458
  }, {
    "number": 4002,
    "name": "04002 - MARCHE AUX FLEURS",
    "address": "PLACE LOUIS LEPINE - 75004 PARIS",
    "latitude": 48.85525336084426,
    "longitude": 2.347356447642631
  }, {
    "number": 15030,
    "name": "15030 - LINOIS",
    "address": "66 RUE EMERIAU - 75015 PARIS",
    "latitude": 48.84804578628324,
    "longitude": 2.284380633700994
  }, {
    "number": 11020,
    "name": "11020 - CHARONNE",
    "address": "1 RUE DE BELFORT - 75011 PARIS",
    "latitude": 48.85631717803066,
    "longitude": 2.383072452374457
  }, {
    "number": 15059,
    "name": "15059 - CITROEN",
    "address": "RUE BALARD - 75015 PARIS",
    "latitude": 48.84071436444365,
    "longitude": 2.278018571567725
  }, {
    "number": 8549,
    "name": "08549 - PLACE DUNANT",
    "address": "39 AVENUE GEORGE V - 75008 PARIS",
    "latitude": 48.87040913507474,
    "longitude": 2.301123191744092
  }, {
    "number": 21501,
    "name": "21501 - SELLIER (SURESNES)",
    "address": "RUE DE SAINT CLOUD / BOULEVARD HENRI SELLIER - 92150 SURESNES",
    "latitude": 48.867565806130166,
    "longitude": 2.225998484960623
  }, {
    "number": 14011,
    "name": "14011 - ALESIA SARRETTE",
    "address": "6 RUE SARRETTE - 75014 PARIS",
    "latitude": 48.827525292006904,
    "longitude": 2.331729378994153
  }, {
    "number": 8013,
    "name": "08013 - MARIGNAN",
    "address": "24 RUE DE MARIGNAN - 75008 PARIS",
    "latitude": 48.8696161948985,
    "longitude": 2.306620834902348
  }, {
    "number": 43001,
    "name": "43001 - PARIS 1 (VINCENNES)",
    "address": "168 AVENUE DE PARIS - 94300 VINCENNES",
    "latitude": 48.84633805388875,
    "longitude": 2.420247340474637
  }, {
    "number": 44101,
    "name": "44101 - PLACE MONGOLFIER (SAINT MAURICE)",
    "address": "PLACE MONTGOLFIER - 94410 SAINT MAURICE",
    "latitude": 48.815050006197445,
    "longitude": 2.459239414806482
  }, {
    "number": 1007,
    "name": "01007 - ETIENNE MARCEL",
    "address": "2 RUE DE TURBIGO - 75001 PARIS",
    "latitude": 48.86356704711952,
    "longitude": 2.347702021141098
  }, {
    "number": 8105,
    "name": "08105 - FRANCOIS 1ER LINCOLN",
    "address": "56 RUE FRANCOIS 1ER - 75008 PARIS",
    "latitude": 48.86951797934417,
    "longitude": 2.302426218841562
  }, {
    "number": 16042,
    "name": "16042 - PORTE DE SAINT CLOUD",
    "address": "120 BOULEVARD MURAT - 75016 PARIS",
    "latitude": 48.837555260014625,
    "longitude": 2.257972572706903
  }, {
    "number": 18022,
    "name": "18022 - BARBES MARCADET",
    "address": "57 RUE MARCADET - 75018 PARIS",
    "latitude": 48.89045112096476,
    "longitude": 2.349057392968696
  }, {
    "number": 21101,
    "name": "21101 - VALITON (CLICHY)",
    "address": "4 RUE DE VALITON - 92110 CLICHY",
    "latitude": 48.90249245151852,
    "longitude": 2.297840007374352
  }, {
    "number": 14125,
    "name": "14125 - DAREAU",
    "address": "34 RUE DAREAU - 75014 PARIS",
    "latitude": 48.830723214583635,
    "longitude": 2.336146557204349
  }, {
    "number": 14115,
    "name": "14115 - CITÉ UNIVERSITAIRE",
    "address": "AVENUE MAURICE D'OCAGNE - 75014 PARIS",
    "latitude": 48.823923168544646,
    "longitude": 2.316573329316086
  }, {
    "number": 17004,
    "name": "17004 - LEGENDRE AVENUE DE CLICHY",
    "address": "130 RUE LEGENDRE - 75017 PARIS",
    "latitude": 48.88896161855884,
    "longitude": 2.322528975094376
  }, {
    "number": 17007,
    "name": "17007 - NAVIER",
    "address": "FACE 57 RUE NAVIER - 75017 PARIS",
    "latitude": 48.89591411750011,
    "longitude": 2.322727367054828
  }, {
    "number": 17116,
    "name": "17116 - REIMS",
    "address": "6 BOULEVARD DE REIMS - 75017 PARIS",
    "latitude": 48.891834448210986,
    "longitude": 2.300144659954865
  }, {
    "number": 9104,
    "name": "9104 - CAUMARTIN PROVENCE",
    "address": "52 RUE DE CAUMARTIN - 75009 PARIS",
    "latitude": 48.8745052459648,
    "longitude": 2.32847426086664
  }, {
    "number": 8008,
    "name": "08008 - ROME SAINT LAZARE",
    "address": "1 RUE JOSEPH SANSBOEUF - 75008 PARIS",
    "latitude": 48.875353174464706,
    "longitude": 2.322884365751902
  }, {
    "number": 3013,
    "name": "03013 - RUE DE SEVIGNE",
    "address": "36 RUE DE SEVIGNE - 75003 PARIS",
    "latitude": 48.856954148055344,
    "longitude": 2.362897420229539
  }, {
    "number": 13023,
    "name": "13023 - BOBILLOT VERLAINE",
    "address": "30 RUE BOBILLOT - 75013 PARIS",
    "latitude": 48.82860289084512,
    "longitude": 2.353034582951421
  }, {
    "number": 43008,
    "name": "43008 - FONTENAY (VINCENNES)",
    "address": "12 RUE DE FONTENAY - 94300 VINCENNES",
    "latitude": 48.84779066448261,
    "longitude": 2.444690887827985
  }, {
    "number": 20016,
    "name": "20016 - PYRENEES VITRUVE",
    "address": "114 BIS RUE DES PYRENEES - 75020 PARIS",
    "latitude": 48.85712940035504,
    "longitude": 2.404425625176959
  }, {
    "number": 18005,
    "name": "18005 - TARDIEU",
    "address": "8 RUE TARDIEU - 75018 PARIS",
    "latitude": 48.88416326647457,
    "longitude": 2.341879802310627
  }, {
    "number": 14106,
    "name": "14106 - STADE DIDOT",
    "address": "FACE 58 AVENUE MARC SANGNIER - 75014 PARIS",
    "latitude": 48.825325870060475,
    "longitude": 2.310670653467625
  }, {
    "number": 20120,
    "name": "20120 - NOISY LE SEC",
    "address": "1 RUE EVARISTE GALOIS - 75020 PARIS",
    "latitude": 48.873338225236466,
    "longitude": 2.413239879550039
  }, {
    "number": 15107,
    "name": "15107 -  PALAIS DES SPORTS",
    "address": "42 BOULEVARD VICTOR - 75015 PARIS",
    "latitude": 48.8335736182304,
    "longitude": 2.28548042091786
  }, {
    "number": 15013,
    "name": "15013 - LECOURBE VOLONTAIRE",
    "address": "DEV 1 RUE DES VOLONTAIRES - 75015 PARIS",
    "latitude": 48.843542735006295,
    "longitude": 2.306558615574665
  }, {
    "number": 33104,
    "name": "33104 - JOINEAU (PRE SAINT GERVAIS)",
    "address": "RUE ANDRE JOINEAU / PLACE ANATOLE FRANCE - 93310 LE PRE SAINT GERVAIS",
    "latitude": 48.883620233843736,
    "longitude": 2.403240318366616
  }, {
    "number": 4009,
    "name": "04009 - VILLAGE SAINT PAUL",
    "address": "6 RUE SAINT PAUL - 75004 PARIS",
    "latitude": 48.852725972189546,
    "longitude": 2.360878343431665
  }, {
    "number": 16034,
    "name": "16034 - PORTE D'AUTEUIL",
    "address": "76 RUE D'AUTEUIL - 75016 PARIS",
    "latitude": 48.84795020779427,
    "longitude": 2.260659826137633
  }, {
    "number": 9029,
    "name": "09029 - TRINITE",
    "address": "62 RUE SAINT LAZARE - 75009 PARIS",
    "latitude": 48.87685932729332,
    "longitude": 2.332762380011633
  }, {
    "number": 13022,
    "name": "13022 - BUTTE AUX CAILLES",
    "address": "27 ET 36 RUE DE LA BUTTE AUX CAILLES - 75013 PARIS",
    "latitude": 48.827564379878744,
    "longitude": 2.34906350669476
  }, {
    "number": 20018,
    "name": "20018 - HARPIGNIES",
    "address": "2 RUE HARPIGNIES- 75020 PARIS",
    "latitude": 48.85862166935013,
    "longitude": 2.409942553877677
  }, {
    "number": 8002,
    "name": "08002 - GARE SAINT LAZARE - COUR DU HAVRE",
    "address": "Cour du Havre - Face au 2, rue d'Amsterdam - 75008 PARIS",
    "latitude": 48.87572,
    "longitude": 2.32668
  }, {
    "number": 8047,
    "name": "08047 - GEORGE V",
    "address": "28 AVENUE GEORGE V - 75008 PARIS",
    "latitude": 48.868165940558264,
    "longitude": 2.301274609316824
  }, {
    "number": 33009,
    "name": "33009 - FELIX (AUBERVILLIERS)",
    "address": "120 BOULEVARD FELIX FAURE - 93300 AUBERVILLIERS",
    "latitude": 48.907885757266726,
    "longitude": 2.378838474064149
  }, {
    "number": 11042,
    "name": "11042 - OBERKAMPF",
    "address": "1 RUE DU GRAND PRIEURE - 75011 PARIS",
    "latitude": 48.8646494198968,
    "longitude": 2.369261438255258
  }, {
    "number": 21707,
    "name": "21707 - PASTEUR (VANVES)",
    "address": "9 AVENUE PASTEUR ANGLE CARREFOUR ALBERT LEGRIS - 92170 Vanves",
    "latitude": 48.82509932921558,
    "longitude": 2.292500331456548
  }, {
    "number": 15047,
    "name": "15047 - DANTZIG",
    "address": "FACE AU 37 RUE MORILLONS - 75015 PARIS",
    "latitude": 48.83317977055646,
    "longitude": 2.299282641599619
  }, {
    "number": 13121,
    "name": "13121 - IVRY BRUNESEAU",
    "address": "RUE BRUNESEAU - 75013 PARIS",
    "latitude": 48.824952872870355,
    "longitude": 2.388580678853776
  }, {
    "number": 7001,
    "name": "07001 - DUROC",
    "address": "63 BOULEVARD DES INVALIDES - 75007 PARIS",
    "latitude": 48.84776985682885,
    "longitude": 2.316183886729462
  }, {
    "number": 15039,
    "name": "15039 - CHARLES VALLIN",
    "address": "133 RUE DE L'ABBE GROULT - 75015 PARIS",
    "latitude": 48.836058393856256,
    "longitude": 2.301865968384287
  }, {
    "number": 8057,
    "name": "08057 - HOCHE",
    "address": "62 AVENUE HOCHE - 75008 PARIS",
    "latitude": 48.87494475810723,
    "longitude": 2.29743857720451
  }, {
    "number": 6001,
    "name": "06001 - INSTITUT",
    "address": "5 QUAI MALAQAIS - 75006 PARIS",
    "latitude": 48.85761567856468,
    "longitude": 2.335831353037739
  }, {
    "number": 11109,
    "name": "11109 - REPUBLIQUE PIERRE LEVEE",
    "address": "1 RUE DE LA PIERRE LEVEE - 75011 PARIS",
    "latitude": 48.866331347902545,
    "longitude": 2.371097448471508
  }, {
    "number": 14027,
    "name": "14027 - ALESIA GERGOVIE",
    "address": "FACE 83 RUE DE GERGOVIE - 75014 PARIS",
    "latitude": 48.83088717455243,
    "longitude": 2.318882101207347
  }, {
    "number": 16104,
    "name": "16104 - PAUL VALÉRY",
    "address": "26-32 RUE PAUL VALERY - 75016 PARIS",
    "latitude": 48.871361039775586,
    "longitude": 2.288866396041159
  }, {
    "number": 11111,
    "name": "11111 - CHARONNE FROT",
    "address": "31 RUE LEON FROT - 75011 PARIS",
    "latitude": 48.854963800335234,
    "longitude": 2.387217085372007
  }, {
    "number": 18111,
    "name": "18111 - FELIZ ZIEM",
    "address": "2 RUE FELIX ZIEM - 75018 PARIS",
    "latitude": 48.88949630486821,
    "longitude": 2.333393658804396
  }, {
    "number": 14108,
    "name": "14108 - JOURDAN LE BRIX ET MESNIN",
    "address": "RUE LE BRIX ET MESNIN - 75014 PARIS",
    "latitude": 48.82234096593411,
    "longitude": 2.327861653302471
  }, {
    "number": 8026,
    "name": "08026 - MESSINE",
    "address": "2 AVENUE MESSINE - 75008 PARIS",
    "latitude": 48.87545720024482,
    "longitude": 2.315465494584916
  }, {
    "number": 9002,
    "name": "09002 - MAUBEUGE CONDORCET",
    "address": "19 RUE D'ABBEVILLE - 75009 PARIS",
    "latitude": 48.879223370628495,
    "longitude": 2.349147493536092
  }, {
    "number": 11019,
    "name": "11019 - CHARONNE PHILIPPE AUGUSTE",
    "address": "156 RUE DE CHARONNE - 75011 PARIS",
    "latitude": 48.85560316202584,
    "longitude": 2.390546390619984
  }, {
    "number": 19118,
    "name": "19118 - BOLIVAR BURNOUF",
    "address": "82 AVENUE SIMON BOLIVAR - 75019 PARIS",
    "latitude": 48.87712417766737,
    "longitude": 2.374276509236151
  }, {
    "number": 5022,
    "name": "05022 - CARDINAL LEMOINE",
    "address": "40 RUE BOU LANGERS - 75005 PARIS",
    "latitude": 48.84629503172156,
    "longitude": 2.352222921607491
  }, {
    "number": 10009,
    "name": "10009 - HITTORFF",
    "address": "FACE 14 RUE HITTORFF - 75010 PARIS",
    "latitude": 48.87208360886937,
    "longitude": 2.35766368561921
  }, {
    "number": 12038,
    "name": "12038 - BEL AIR",
    "address": "FACE 12 BOULEVARD PICPUS - 75012 PARIS",
    "latitude": 48.839988788911874,
    "longitude": 2.400525668552064
  }, {
    "number": 14036,
    "name": "14036 - BOULARD DAGUERRE",
    "address": "14 RUE BOULARD - 75014 PARIS",
    "latitude": 48.834390797006805,
    "longitude": 2.329303946545288
  }, {
    "number": 17005,
    "name": "17005 - BROCHANT",
    "address": "43 RUE BROCHANT - 75017 PARIS",
    "latitude": 48.89032998912038,
    "longitude": 2.319730559929781
  }, {
    "number": 16019,
    "name": "16019 - HENRI MARTIN",
    "address": "FACE 98 AV. HENRI MARTIN - 75016 PARIS",
    "latitude": 48.863025315388256,
    "longitude": 2.268806550199479
  }, {
    "number": 18104,
    "name": "18104 - CHAPELLE",
    "address": "2 IMPASSE DE LA CHAPELLE - 75018 PARIS",
    "latitude": 48.892656891991216,
    "longitude": 2.359435454901881
  }, {
    "number": 13106,
    "name": "13106 - BOBILLOT MERY",
    "address": "17 RUE BOBILLOT - 75013 PARIS",
    "latitude": 48.82987537265954,
    "longitude": 2.35424653463425
  }, {
    "number": 21007,
    "name": "21007 - RHIN DANUBE (BOULOGNE BILLANCOURT)",
    "address": "15 ROND POINT RHIN DANUBE - 92100 BOULOGNE BILLANCOURT",
    "latitude": 48.84064929857331,
    "longitude": 2.227978774754288
  }, {
    "number": 10111,
    "name": "10111 - BOURSE DU TRAVAIL",
    "address": "100 QUAI DE JEMMAPES - 75010 PARIS",
    "latitude": 48.87346279870817,
    "longitude": 2.364035059250436
  }, {
    "number": 35008,
    "name": "35008 - LOLIVE 2 (PANTIN)",
    "address": "132 RUE JEAN LOLIVE - 93500 PANTIN",
    "latitude": 48.89271966633131,
    "longitude": 2.412529571472175
  }, {
    "number": 19109,
    "name": "19109 - PLACE DU MAROC",
    "address": "27 RUE DE TANGER - 75019 PARIS",
    "latitude": 48.886233417429835,
    "longitude": 2.368856390499634
  }, {
    "number": 8048,
    "name": "08048 - MARCEAU",
    "address": "45 AVENUE MARCEAU - 75008 PARIS",
    "latitude": 48.868851708234864,
    "longitude": 2.298514048803577
  }, {
    "number": 9014,
    "name": "09014 - FAUBOURG MONTMARTRE",
    "address": "55 RUE DU FAUBOURG MONTMARTRE - 75009 PARIS",
    "latitude": 48.875329723153264,
    "longitude": 2.340772662331439
  }, {
    "number": 9108,
    "name": "09108 - ROCHECHOUART MAUBEUGE",
    "address": "25 RUE DE ROCHECHOUART - 75009 PARIS",
    "latitude": 48.87789001497427,
    "longitude": 2.344785602987212
  }, {
    "number": 13009,
    "name": "13009 - BLANQUI CORVISART",
    "address": "46 BOULEVARD AUGUSTE BLANQUI - 75013 PARIS",
    "latitude": 48.82998371071962,
    "longitude": 2.350403587821832
  }, {
    "number": 19006,
    "name": "19006 - MATHIS",
    "address": "6 RUE MATHIS - 75019 PARIS",
    "latitude": 48.89067812943125,
    "longitude": 2.376142468863619
  }, {
    "number": 17009,
    "name": "17009 - BODIN AVENUE DE CLICHY",
    "address": "2 RUE PAUL BODIN - 75017 PARIS",
    "latitude": 48.89263392143244,
    "longitude": 2.317313258110739
  }, {
    "number": 12106,
    "name": "12106 - BARTHES TROYES",
    "address": "3 RUE ROLAND BARTHES - 75012 PARIS",
    "latitude": 48.84394917584249,
    "longitude": 2.37908134343237
  }, {
    "number": 19125,
    "name": "19125 - LEDIT DE NANTES",
    "address": "PLACE LEDIT DE NANTES - 75019 PARIS",
    "latitude": 48.8887900267753,
    "longitude": 2.378500156138491
  }, {
    "number": 42703,
    "name": "42703 - FONTAINEBLEAU (KREMLIN BICETRE)",
    "address": "93 AVENUE DE FONTAINEBLEAU - 94270 LE KREMLIN BICETRE",
    "latitude": 48.8095823380351,
    "longitude": 2.36268350990116
  }, {
    "number": 8016,
    "name": "08016 - SQUARE LOUIS XVI",
    "address": "DEV 32 RUE PASQUIER - 75008 PARIS",
    "latitude": 48.87320440102894,
    "longitude": 2.323658830743138
  }, {
    "number": 15025,
    "name": "15025 - AMETTE",
    "address": "26 RUE DUPLEIX - 75015 PARIS",
    "latitude": 48.851454182127426,
    "longitude": 2.296710300930856
  }, {
    "number": 5031,
    "name": "05031 - LACEPEDE",
    "address": "2 RUE LACEPEDE - 75005 PARIS",
    "latitude": 48.84367484543761,
    "longitude": 2.354615982683207
  }, {
    "number": 6008,
    "name": "06008 - ASSAS LUXEMBOURG",
    "address": "90 RUE D'ASSAS - 75006 PARIS",
    "latitude": 48.84373446877937,
    "longitude": 2.333428381875887
  }, {
    "number": 1116,
    "name": "01116 - OPÉRA PYRAMIDES",
    "address": "4 RUE DE VENTADOUR - 75001 PARIS",
    "latitude": 48.866810653323,
    "longitude": 2.334388448251871
  }, {
    "number": 15033,
    "name": "15033 - VIOLET",
    "address": "5 PLACE VIOLET - 75015 PARIS",
    "latitude": 48.84479039026177,
    "longitude": 2.290541560154527
  }, {
    "number": 12130,
    "name": "12130 - NOGENT - PORTE JAUNE",
    "address": "AVENUE DE NOGENT - LA PORTE JAUNE - 75012 PARIS",
    "latitude": 48.83884,
    "longitude": 2.46031
  }, {
    "number": 19035,
    "name": "19035 - PORTE CHAUMONT",
    "address": "RUE SIGMUND FREUD / PORTE CHAUMONT - 75019 PARIS",
    "latitude": 48.88573329985865,
    "longitude": 2.397846415383189
  }, {
    "number": 19001,
    "name": "19001 - OURCQ CRIMEE",
    "address": "243 RUE DE CRIMEE - 75019 PARIS",
    "latitude": 48.894104140316266,
    "longitude": 2.372946088467279
  }, {
    "number": 41603,
    "name": "41603 - PASTEUR (SAINT MANDE)",
    "address": "AVENUE PASTEUR/AVENUE DE PARIS - 94160 SAINT MANDE",
    "latitude": 48.845779219164555,
    "longitude": 2.42377059524055
  }, {
    "number": 18041,
    "name": "18041 - MARTYRS 2",
    "address": "FACE 112 BOULEVARD DE ROCHECHOUART - 75018 PARIS",
    "latitude": 48.88219420395092,
    "longitude": 2.340651849622331
  }, {
    "number": 20119,
    "name": "20119 - SQUARE DE MENILMONTANT",
    "address": "138 RUE DE MENILMONTANT - 75020 PARIS",
    "latitude": 48.87013645868239,
    "longitude": 2.396690612876254
  }, {
    "number": 20047,
    "name": "20047 - COURS DE VINCENNES BD DAVOUT",
    "address": "107 COURS DE VINCENNES - 75020 PARIS",
    "latitude": 48.8473310531154,
    "longitude": 2.4103900081973
  }, {
    "number": 15026,
    "name": "15026 - BIR HAKEIM",
    "address": "FACE 6 BOULEVARD DE GRENELLE - 75015 PARIS",
    "latitude": 48.853844054333514,
    "longitude": 2.289705348222022
  }, {
    "number": 2022,
    "name": "02022 - BONNE NOUVELLE SAINT FIACRE",
    "address": "20 RUE SAINT FIACRE - 75002 PARIS",
    "latitude": 48.87078277953678,
    "longitude": 2.345905811394424
  }, {
    "number": 20006,
    "name": "20006 - PYRÉNÉES - PLAINE",
    "address": "33 RUE DES PYRENEES - 75020 PARIS",
    "latitude": 48.850285280635795,
    "longitude": 2.406296107816583
  }, {
    "number": 16044,
    "name": "16044 - STADE FRANCAIS",
    "address": "24 AVENUE DE LA PORTE DE SAINT CLOUD - 75016 PARIS",
    "latitude": 48.838713363162405,
    "longitude": 2.252191060537607
  }, {
    "number": 17033,
    "name": "17033 - CARNOT",
    "address": "8 AVENUE CARNOT - 75017 PARIS",
    "latitude": 48.87553842110213,
    "longitude": 2.293732100169925
  }, {
    "number": 20035,
    "name": "20035 - PYRENEES",
    "address": "262 RUE DES PYRENEES - 75020 PARIS",
    "latitude": 48.86941289116132,
    "longitude": 2.395039981220676
  }, {
    "number": 18040,
    "name": "18040 - CHAPELLE MARX DORMOY",
    "address": "29 BOULEVARD DE LA CHAPELLE - 75018 PARIS",
    "latitude": 48.88457006316311,
    "longitude": 2.360215572664323
  }, {
    "number": 10021,
    "name": "10021 - MARCHE ST QUENTIN",
    "address": "4 RUE DES PETITS HOTELS - 75010 PARIS",
    "latitude": 48.877356057652264,
    "longitude": 2.354511445637388
  }, {
    "number": 10006,
    "name": "10006 - PETITES ECURIES",
    "address": "5 RUE DES PETITES ECURIES - 75010 PARIS",
    "latitude": 48.872939767837096,
    "longitude": 2.35403448428308
  }, {
    "number": 18026,
    "name": "18026 - RUISSEAU ORDENER",
    "address": "37 RUE DU RUISSEAU - 75018 PARIS",
    "latitude": 48.892895283967825,
    "longitude": 2.340119632436559
  }, {
    "number": 16016,
    "name": "16016 - PAUL DOUMER / LA TOUR",
    "address": "53 AVENUE PAUL DOUMER - 75016 PARIS",
    "latitude": 48.860116109626574,
    "longitude": 2.280840481911055
  }, {
    "number": 19009,
    "name": "19009 - CITE DES SCIENCES",
    "address": "28BIS AVENUE CORENTIN CARIOU - 75019 PARIS",
    "latitude": 48.89654905978759,
    "longitude": 2.384649644021933
  }, {
    "number": 19101,
    "name": "19101 - SIMON BOLIVAR",
    "address": "36 AVENUE SIMON BOLIVAR - 75019 PARIS",
    "latitude": 48.875070404063074,
    "longitude": 2.382591714979966
  }, {
    "number": 17044,
    "name": "17044 - PORTE DE SAINT OUEN",
    "address": "1 AVENUE DE LA PORTE DE SAINT OUEN - 75017 PARIS",
    "latitude": 48.89792240854517,
    "longitude": 2.32851451022192
  }, {
    "number": 12107,
    "name": "12107 - DIDEROT BOURDAN",
    "address": "146 BOULEVARD DIDEROT - 75012 PARIS",
    "latitude": 48.847653880984645,
    "longitude": 2.390238633141864
  }, {
    "number": 7014,
    "name": "07014 - SAINT FRANCOIS XAVIER",
    "address": "35 BOULEVARD DES INVALIDES - 75007 PARIS",
    "latitude": 48.85167822904787,
    "longitude": 2.314633840627834
  }, {
    "number": 14001,
    "name": "14001 - EDGAR QUINET",
    "address": "13 BOULEVARD EDGAR QUINET - 75014 PARIS",
    "latitude": 48.84115621648301,
    "longitude": 2.324448789519074
  }, {
    "number": 12021,
    "name": "12021 - COURTELINE",
    "address": "1 - 3  et 5 avenue Courteline (angle boulevard Soult) - 75012 PARIS",
    "latitude": 48.844373193657,
    "longitude": 2.41097245166824
  }, {
    "number": 3009,
    "name": "03009 - TEMPLE 113",
    "address": "76 RUE DU TEMPLE - 75003 PARIS",
    "latitude": 48.861581157730946,
    "longitude": 2.35660934144383
  }, {
    "number": 3004,
    "name": "03004 - REPUBLIQUE 23",
    "address": "19 PLACE DE LA REPUBLIQUE - 75003 PARIS",
    "latitude": 48.86707,
    "longitude": 2.36351
  }, {
    "number": 19105,
    "name": "19105 - PORTE BRUNET",
    "address": "FACE 1 AVENUE AMBROISE RENDU - 75019 PARIS",
    "latitude": 48.88365921093733,
    "longitude": 2.395719508193907
  }, {
    "number": 18001,
    "name": "18001 - DAMREMONT CAULAINCOURT",
    "address": "6 RUE DAMREMONT - 75018 PARIS",
    "latitude": 48.88727464264267,
    "longitude": 2.332648363845394
  }, {
    "number": 20030,
    "name": "20030 - PERE LACHAISE",
    "address": "54 BOULEVARD MENILMONTANT - 75020 PARIS",
    "latitude": 48.863411107404715,
    "longitude": 2.387133957573714
  }, {
    "number": 2020,
    "name": "02020 - OPERA CASANOVA",
    "address": "02 RUE DANIEL CASANOVA - 75002 PARIS",
    "latitude": 48.867623078056845,
    "longitude": 2.333268593101536
  }, {
    "number": 14104,
    "name": "14104 - LOSSERAND BOYER-BARRET",
    "address": "4 RUE BOYER BARRET - 75014 PARIS",
    "latitude": 48.833139,
    "longitude": 2.317377
  }, {
    "number": 11004,
    "name": "11004 - CHARONNE SAINT ANTOINE",
    "address": "3 RUE DE CHARONNE - 75011 PARIS",
    "latitude": 48.852255290042486,
    "longitude": 2.374027235613735
  }, {
    "number": 16022,
    "name": "16022 - RUE JEAN BOLOGNE",
    "address": "16 RUE JEAN BOLOGNE - 75016 PARIS",
    "latitude": 48.857566889784465,
    "longitude": 2.280027395306772
  }, {
    "number": 19106,
    "name": "19106 - GARE EMGP",
    "address": "35, rue de la Gare - 75019 PARIS",
    "latitude": 48.90162,
    "longitude": 2.37267
  }, {
    "number": 13010,
    "name": "13010 - PLACE D ITALIE AURIOL",
    "address": "FACE 11 PLACE D'ITALIE - 75013 PARIS",
    "latitude": 48.831582643774894,
    "longitude": 2.356708420760657
  }, {
    "number": 17107,
    "name": "17107 - BERTHIER STUART MERRIL",
    "address": "182 BOULEVARD BERTHIER - 75017 PARIS",
    "latitude": 48.88591312825616,
    "longitude": 2.293234151072418
  }, {
    "number": 13101,
    "name": "13101 - CROULEBARBE RECULETTES",
    "address": "67-69 RUE DE CROULEBARBE - 75013 PARIS",
    "latitude": 48.831121775069235,
    "longitude": 2.348108654777346
  }, {
    "number": 42503,
    "name": "42503 - LENINE (GENTILLY)",
    "address": "FACE 71 AVENUE LENINE - 94250 GENTILLY",
    "latitude": 48.81315667771776,
    "longitude": 2.332054794950423
  }, {
    "number": 13151,
    "name": "13151 - GARE D'AUSTERLITZ",
    "address": "GARE D'AUSTERLITZ - 75013 PARIS",
    "latitude": 48.84057730290756,
    "longitude": 2.366124461859616
  }, {
    "number": 8029,
    "name": "08029 - PLACE DU CANADA",
    "address": "1 AVENUE FRANKLIN ROOSEVELT - 75008 PARIS",
    "latitude": 48.865346269362675,
    "longitude": 2.310193787964762
  }, {
    "number": 15034,
    "name": "15034 - COMMERCE",
    "address": "2 RUE LAKANAL - 75015 PARIS",
    "latitude": 48.844425919545365,
    "longitude": 2.29404143328216
  }, {
    "number": 3003,
    "name": "03003 - TURENNE BRETAGNE",
    "address": "4 RUE DES FILLES DU CALVAIRE - 75003 PARIS",
    "latitude": 48.86213223497159,
    "longitude": 2.364951386893752
  }, {
    "number": 13046,
    "name": "13046 - OUDINE PATAY",
    "address": "10 RUE EUGENE OUDINE - 75013 PARIS",
    "latitude": 48.825712903519616,
    "longitude": 2.375044300094851
  }, {
    "number": 20023,
    "name": "20023 - PELLEPORT BELGRAND",
    "address": "44 RUE PELLEPORT - 75020 PARIS",
    "latitude": 48.86500081847653,
    "longitude": 2.403980836377493
  }, {
    "number": 1012,
    "name": "01012 - BOURSE DU COMMERCE",
    "address": "FACE 29 RUE JEAN JACQUES ROUSSEAU - 75001 PARIS",
    "latitude": 48.86299816676784,
    "longitude": 2.341555077827231
  }, {
    "number": 13111,
    "name": "13111 - CIMETIERE DE GENTILLY",
    "address": "RUE DE LA POTERNE DES PEUPLIERS - 75013 PARIS",
    "latitude": 48.818574415839485,
    "longitude": 2.353260183740912
  }, {
    "number": 42008,
    "name": "42008 - CASANOVA (IVRY)",
    "address": "128 AVENUE DANIEL CASANOVA - 94200 IVRY",
    "latitude": 48.81420628475591,
    "longitude": 2.384207013557983
  }, {
    "number": 12041,
    "name": "12041 - BOIS DE VINCENNES",
    "address": "AVENUE DAUMESNIL - 75012 PARIS",
    "latitude": 48.833654852830335,
    "longitude": 2.413463576486826
  }, {
    "number": 34001,
    "name": "34001 - FRUCTIDOR (SAINT OUEN)",
    "address": "FACE 10 RUE FRUCTIDOR / FACE BAT 2 LE COLYSEE - 93400 SAINT OUEN",
    "latitude": 48.900889626876015,
    "longitude": 2.324819807804481
  }, {
    "number": 21104,
    "name": "21104 - SANZILLON (CLICHY)",
    "address": "64 RUE DE MADAME DE SANZILLON - 92110 CLICHY",
    "latitude": 48.903676702256305,
    "longitude": 2.319176657580128
  }, {
    "number": 11009,
    "name": "11009 - RUE DES BOULETS",
    "address": "45 RUE DES BOULETS - 75011 PARIS",
    "latitude": 48.852193095437535,
    "longitude": 2.3890216505832
  }, {
    "number": 19031,
    "name": "19031 - MANIN CRIMEE",
    "address": "8 RUE MANIN - 75019 PARIS",
    "latitude": 48.8830298392804,
    "longitude": 2.38634884002286
  }, {
    "number": 23010,
    "name": "23010 - VOLTAIRE (LEVALLOIS)",
    "address": "47 RUE VOLTAIRE - 92300 LEVALLOIS-PERRET",
    "latitude": 48.891962328964816,
    "longitude": 2.284204990113615
  }, {
    "number": 13031,
    "name": "13031 - ITALIE MAISON BLANCHE",
    "address": "121 AVENUE D'ITALIE - 75013 PARIS",
    "latitude": 48.821159320800966,
    "longitude": 2.358701217878322
  }, {
    "number": 9017,
    "name": "09017 - TRUDAINE MARTYRS",
    "address": "01 RUE LALLIER - 75009 PARIS",
    "latitude": 48.88103214901626,
    "longitude": 2.340774412117837
  }, {
    "number": 12026,
    "name": "12026 - PARC DE BERCY",
    "address": "61 RUE DE BERCY - 75012 PARIS",
    "latitude": 48.83772145898209,
    "longitude": 2.382217337050408
  }, {
    "number": 12012,
    "name": "12012 - REUILLY DIDEROT",
    "address": "71 BOULEVARD DIDEROT - 75012 PARIS",
    "latitude": 48.847296310645035,
    "longitude": 2.385707672217665
  }, {
    "number": 5026,
    "name": "05026 - MOUFFETARD SAINT MEDARD",
    "address": "3 RUE PASCAL - 75005 PARIS",
    "latitude": 48.83899382454321,
    "longitude": 2.34993205295774
  }, {
    "number": 11045,
    "name": "11045 - SAINT SEBASTIEN FROISSARD",
    "address": "12 BD DES FILLES DU CALVAIRE - 75011 PARIS",
    "latitude": 48.861205051934334,
    "longitude": 2.367352328799597
  }, {
    "number": 32602,
    "name": "32602 - POULMARCH (LES LILAS)",
    "address": "7 RUE JEAN POULMARCH - 93260 LES LILAS",
    "latitude": 48.8794000532367,
    "longitude": 2.41616066183218
  }, {
    "number": 18046,
    "name": "18046 - FOURCHE",
    "address": "12 RUE ETIENNE JOGELLE - 75018 PARIS",
    "latitude": 48.88794016394694,
    "longitude": 2.326124420314341
  }, {
    "number": 10014,
    "name": "10014 - BEAUREPAIRE",
    "address": "14 RUE DE MARSEILLE - 75010 PARIS",
    "latitude": 48.8716626619994,
    "longitude": 2.363933311380362
  }, {
    "number": 19115,
    "name": "19115 - PORTE DE LA VILLETTE",
    "address": "1 AVENUE DE LA PORTE DE LA VILLETTE - 75019 PARIS",
    "latitude": 48.89849005307383,
    "longitude": 2.386120008210507
  }, {
    "number": 12113,
    "name": "12113 - CARDINAL LAVIGERIE",
    "address": "4 PLACE DU CARDINAL LAVIGERIE - 75012 PARIS",
    "latitude": 48.832934193699835,
    "longitude": 2.402636749399156
  }, {
    "number": 20042,
    "name": "20042 - PYRENEES ERMITAGE",
    "address": "300 RUE DES PYRENEES - 75020 PARIS",
    "latitude": 48.87215737993568,
    "longitude": 2.391739173776302
  }, {
    "number": 7023,
    "name": "07023 - BOURDONNAIS TOUR EIFFEL",
    "address": "QUAI BRANLY - 75007 PARIS",
    "latitude": 48.860897797941035,
    "longitude": 2.29559959844703
  }, {
    "number": 18113,
    "name": "18113 - LEPIC",
    "address": "70 - 72 RUE LEPIC - 75018 PARIS",
    "latitude": 48.8875730709534,
    "longitude": 2.33432733641793
  }, {
    "number": 19027,
    "name": "19027 - SERRURIER",
    "address": "FACE 109 BOULEVARD SERURIER - 75019 PARIS",
    "latitude": 48.8806060535742,
    "longitude": 2.3978962906105
  }, {
    "number": 33102,
    "name": "33102 - JAURES 1 (PRE SAINT GERVAIS)",
    "address": "RUE GABRIEL PERI ANGLE AVENUE JAURES - 93310 LE PRE SAINT GERVAIS",
    "latitude": 48.886526983267544,
    "longitude": 2.407468689386476
  }, {
    "number": 19026,
    "name": "19026 - DANUBE",
    "address": "53 RUE MIGUEL HIDALGO - 75019 PARIS",
    "latitude": 48.88195317244523,
    "longitude": 2.392496216649528
  }, {
    "number": 17028,
    "name": "17028 - PORTE DE COURCELLE",
    "address": "34 BOULEVARD DE REIMS - 75017 PARIS",
    "latitude": 48.88880002064895,
    "longitude": 2.296319931841717
  }, {
    "number": 17030,
    "name": "17030 - RENNEQUIN PEREIRE",
    "address": "143 BOULEVARD DE PEREIRE - 75017 PARIS",
    "latitude": 48.88363915389933,
    "longitude": 2.295152067446227
  }, {
    "number": 10017,
    "name": "10017 - GARE DE L'EST SAINT LAURENT",
    "address": "1 RUE DE LA FIDELITE - 75010 PARIS",
    "latitude": 48.874575036780286,
    "longitude": 2.356796765204903
  }, {
    "number": 15103,
    "name": "15103 - SQUARE DES CÉVENNES",
    "address": "01 RUE CAUCHY - 75015 PARIS",
    "latitude": 48.84341723238589,
    "longitude": 2.275108332056225
  }, {
    "number": 19025,
    "name": "19025 - BOTZARIS",
    "address": "FACE 80 RUE BOTZARIS - 75019 PARIS",
    "latitude": 48.8795614522371,
    "longitude": 2.38896041078391
  }, {
    "number": 8033,
    "name": "08033 - SAINT PHILIPPE DU ROULE",
    "address": "1 RUE DU CDT RIVIERE - 75008 PARIS",
    "latitude": 48.872787680846464,
    "longitude": 2.309722588932229
  }, {
    "number": 4018,
    "name": "04018 - RIVOLI SEBASTOPOL",
    "address": "1 RUE SAINT BON - 75004 PARIS",
    "latitude": 48.857999643314926,
    "longitude": 2.350217280976349
  }, {
    "number": 16118,
    "name": "16118 - MICHEL ANGE",
    "address": "91 RUE MICHEL ANGE - 75016 PARIS",
    "latitude": 48.840610399663696,
    "longitude": 2.258373658198948
  }, {
    "number": 2107,
    "name": "02107 - THOREL",
    "address": "11 RUE THOREL - 75002 PARIS",
    "latitude": 48.87000061719652,
    "longitude": 2.348995518049354
  }, {
    "number": 42706,
    "name": "42706 - SALENGRO (KREMLIN BICETRE)",
    "address": "3 RUE ROGER SALENGRO -  94270 LE KREMLIN BICETRE",
    "latitude": 48.814662495608864,
    "longitude": 2.36134550272134
  }, {
    "number": 12128,
    "name": "12128 - ROUTE DE LA PYRAMIDE- ECOLE DU BREUIL",
    "address": "Pyramide  (proche rond-point Route de la Ferme) - 75012 PARIS",
    "latitude": 48.82256,
    "longitude": 2.45877
  }, {
    "number": 20025,
    "name": "20025 - GAMBETTA GATINES",
    "address": "13 RUE DES GATINES - 75020 PARIS",
    "latitude": 48.8653941647232,
    "longitude": 2.397814475307571
  }, {
    "number": 28003,
    "name": "28003 - JAURES (PUTEAUX)",
    "address": "152 RUE JEAN JAURES - 92800 PUTEAUX",
    "latitude": 48.88047087219649,
    "longitude": 2.237362446304566
  }, {
    "number": 14009,
    "name": "14009 - COTY TOMBE D'ISSOIRE",
    "address": "49 RUE DE LA TOMBE D'ISSOIRE - 75014 PARIS",
    "latitude": 48.83055599940998,
    "longitude": 2.33378329803361
  }, {
    "number": 11035,
    "name": "11035 - GONCOURT",
    "address": "140 AVENUE PARMENTIER - 75011 PARIS",
    "latitude": 48.86946960532872,
    "longitude": 2.371536810663942
  }, {
    "number": 18101,
    "name": "18101 - CHAMPIONNET",
    "address": "32 RUE CHAMPIONNET - 75018 PARIS",
    "latitude": 48.895470370399146,
    "longitude": 2.349865450921441
  }, {
    "number": 19123,
    "name": "19123 - QUAI DE METZ",
    "address": "7 QUAI DE METZ - 75019 PARIS",
    "latitude": 48.89106,
    "longitude": 2.3865
  }, {
    "number": 15011,
    "name": "15011 - THEBAUD RUE DE CAMBRONNE",
    "address": "32 RUE CAMBRONNE - 75015 PARIS",
    "latitude": 48.845831419610754,
    "longitude": 2.301753086991115
  }, {
    "number": 12033,
    "name": "12033 - SAINT EMILION",
    "address": "FACE 28 RUE FRANCOIS TRUFFAUT - 75012 PARIS",
    "latitude": 48.83350833245743,
    "longitude": 2.386133168700345
  }, {
    "number": 9034,
    "name": "09034 - GODOT DE MAUROY",
    "address": "2 RUE GODOT DE MAUROY - 75009 PARIS",
    "latitude": 48.869956681574806,
    "longitude": 2.326599657113696
  }, {
    "number": 14035,
    "name": "14035 - MAINE GAITE",
    "address": "90 AVENUE DU MAINE - 75014 PARIS",
    "latitude": 48.83788362776244,
    "longitude": 2.322551640018162
  }, {
    "number": 21009,
    "name": "21009 - LECORBUSIER (BOULOGNE-BILLANCOURT)",
    "address": "FACE AU 1 RUE LECORBUSIER - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.83799829528177,
    "longitude": 2.240846664821182
  }, {
    "number": 17023,
    "name": "17023 - AVENUE DE LA PORTE D'ASNIÈRES",
    "address": "22 AVENUE DE LA PORTE D'ASNIERES - 75017 PARIS",
    "latitude": 48.89058621555025,
    "longitude": 2.303457408685266
  }, {
    "number": 20039,
    "name": "20039 - COURONNES",
    "address": "44 BOULEVARD DE BELLEVILLE - 75020 PARIS",
    "latitude": 48.868940642855314,
    "longitude": 2.381282601102786
  }, {
    "number": 16010,
    "name": "16010 - BELLES FEUILLES",
    "address": "4 RUE DES BELLES FEUILLES - 75016 PARIS",
    "latitude": 48.86585549636314,
    "longitude": 2.282859908979733
  }, {
    "number": 8052,
    "name": "08052 - WASHINGTON",
    "address": "2 RUE BALZAC - 75008 PARIS",
    "latitude": 48.87288299097443,
    "longitude": 2.299972932642669
  }, {
    "number": 17026,
    "name": "17026 - WAGRAM COURCELLES",
    "address": "105 RUE JOUFFROY D'ABBANS - 75017 PARIS",
    "latitude": 48.88185715074461,
    "longitude": 2.301138378176729
  }, {
    "number": 42702,
    "name": "42702 - LECLERC (KREMLIN BICETRE)",
    "address": "73 RUE DU GENERAL LECLERC - 94270 LE KREMELIN BICETRE",
    "latitude": 48.81047749960048,
    "longitude": 2.358172896462481
  }, {
    "number": 14110,
    "name": "14110 - ABBE CARTON",
    "address": "89 RUE DE L'ABBE CARTON - 75014 PARIS",
    "latitude": 48.82774626607583,
    "longitude": 2.320714098089133
  }, {
    "number": 10152,
    "name": "10152 - GARE DU NORD 2",
    "address": "3 BOULEVARD DE DENAIN - 75010 PARIS",
    "latitude": 48.87904931076023,
    "longitude": 2.354159095958248
  }, {
    "number": 14107,
    "name": "14107 - PORTE DE MONTROUGE 2",
    "address": "2 AVENUE DE LA PORTE DE MONTROUGE - 75014 PARIS",
    "latitude": 48.82341630050286,
    "longitude": 2.322936857107952
  }, {
    "number": 15031,
    "name": "15031 - THEATRE",
    "address": "60 RUE DU THEATRE - 75015 PARIS",
    "latitude": 48.84817034136516,
    "longitude": 2.289906646457531
  }, {
    "number": 11010,
    "name": "11010 - ST ANTOINE GONNET",
    "address": "1 RUE DES BOULETS - 75011 PARIS",
    "latitude": 48.84925926211519,
    "longitude": 2.391754614194301
  }, {
    "number": 7021,
    "name": "07021 - BOSQUET SAINT DOMINIQUE",
    "address": "37 AVENUE BOSQUET - 75007 PARIS",
    "latitude": 48.85865170952645,
    "longitude": 2.303716580234576
  }, {
    "number": 16005,
    "name": "16005 - POINCARE VICTOR HUGO",
    "address": "89 AVENUE RAYMOND POINCARE - 75016 PARIS",
    "latitude": 48.870306124369975,
    "longitude": 2.285074541420228
  }, {
    "number": 21303,
    "name": "21303 - ILES (ISSY LES MOULINEAUX)",
    "address": "ANGLE AVENUE JEAN MONNET ET BOULEVARD DES ILES -  92130 ISSY LES MOULINEAUX",
    "latitude": 48.8234505470138,
    "longitude": 2.249665298288027
  }, {
    "number": 15041,
    "name": "15041 - LABROUSTE",
    "address": "13 RUE FRANQUET - 75015 PARIS",
    "latitude": 48.83285390827691,
    "longitude": 2.306898478208195
  }, {
    "number": 13055,
    "name": "13055 - LAGROUA",
    "address": "18 RUE MARIE ANDREE LAGROUA - 75013 PARIS",
    "latitude": 48.828595283857425,
    "longitude": 2.380220606266108
  }, {
    "number": 21021,
    "name": "21021 - PARADIS (BOULOGNE-BILLANCOURT)",
    "address": "FACE AU 128 RUE DES ENFANTS DU PARADIS - 92100 BOULOGNE BILLANCOURT",
    "latitude": 48.833174958910085,
    "longitude": 2.257005867300889
  }, {
    "number": 10025,
    "name": "10025 - ECLUSES SAINT MARTIN",
    "address": "148 QUAI DE JEMMAPES - 75010 PARIS",
    "latitude": 48.87742034308959,
    "longitude": 2.366011448983217
  }, {
    "number": 20121,
    "name": "20121 - MENILMONTANT BOYER",
    "address": "27 RUE BOYER - 75020 PARIS",
    "latitude": 48.868910127448686,
    "longitude": 2.392020489286297
  }, {
    "number": 19011,
    "name": "19011 - ROUVET DAMPIERRE",
    "address": "2 RUE ROUVET - 75019 PARIS",
    "latitude": 48.8933800500227,
    "longitude": 2.38499975689617
  }, {
    "number": 13038,
    "name": "13038 - CHOISY POINT D'IVRY",
    "address": "28 AVENUE DE CHOISY - 75013 PARIS",
    "latitude": 48.82190796881169,
    "longitude": 2.363334710614756
  }, {
    "number": 1016,
    "name": "01016 - OPERA PYRAMIDES",
    "address": "27 RUE THERESE - 75001 PARIS",
    "latitude": 48.86648351450895,
    "longitude": 2.334433421223788
  }, {
    "number": 1102,
    "name": "01102 - FRANCAISE",
    "address": "6 RUE FRANCAISE - 75001 PARIS",
    "latitude": 48.864065046949904,
    "longitude": 2.347597912716465
  }, {
    "number": 16025,
    "name": "16025 - FONTAINE RAYNOUARD",
    "address": "4 RUE JEAN DE LA FONTAINE - 75016 PARIS",
    "latitude": 48.852786944099584,
    "longitude": 2.275580584185594
  }, {
    "number": 16017,
    "name": "16017 - RUE DE SIAM",
    "address": "1 BIS RUE DE SIAM - 75016 PARIS",
    "latitude": 48.861720329027264,
    "longitude": 2.275346568555312
  }, {
    "number": 22101,
    "name": "22101 - GARE ROUTIERE ( SAINT CLOUD)",
    "address": "GARE ROUTIERE - ARRET TRAM - 92210 SAINT CLOUD",
    "latitude": 48.843126205966946,
    "longitude": 2.222189235680779
  }, {
    "number": 20131,
    "name": "20131 - REPOS",
    "address": "41 RUE DU REPOS - 75020 PARIS",
    "latitude": 48.859358523592554,
    "longitude": 2.389613136684456
  }, {
    "number": 1003,
    "name": "01003 - RIVOLI SAINT DENIS",
    "address": "7 RUE SAINT DENIS - 75001 PARIS",
    "latitude": 48.859150287255645,
    "longitude": 2.347620087684511
  }, {
    "number": 17001,
    "name": "17001 - GUY MOQUET",
    "address": "RUE GUY MOQUET - 75017 PARIS",
    "latitude": 48.8928229630235,
    "longitude": 2.3268034898348
  }, {
    "number": 1010,
    "name": "01010 - PONT NEUF",
    "address": "10 RUE BOUCHER - 75001 PARIS",
    "latitude": 48.85946238924527,
    "longitude": 2.344366128446111
  }, {
    "number": 17016,
    "name": "17016 - BROCHANT",
    "address": "3 RUE BROCHANT - 75017 PARIS",
    "latitude": 48.88818698581028,
    "longitude": 2.316861143151153
  }, {
    "number": 11002,
    "name": "11002 - ROQUETTE THIERE",
    "address": "37 RUE DE LA ROQUETTE - 75011 PARIS",
    "latitude": 48.85510629540472,
    "longitude": 2.373424541930557
  }, {
    "number": 13120,
    "name": "13120 - VITRY DESAULT",
    "address": "RUE PIERRE ET JOSEPH DESAULT - 75013 PARIS",
    "latitude": 48.821138751437616,
    "longitude": 2.378718606608679
  }, {
    "number": 8004,
    "name": "08004 - MALESHERBES PASQUIER",
    "address": "FACE 4 BD MALESHERBES - 75008 PARIS",
    "latitude": 48.87042188343355,
    "longitude": 2.323288994791708
  }, {
    "number": 20113,
    "name": "20113 - PARC DE BELLEVILLE",
    "address": "30 RUE PIAT - 75020 PARIS",
    "latitude": 48.87195626635528,
    "longitude": 2.384981390278095
  }, {
    "number": 10036,
    "name": "10036 - AQUEDUC",
    "address": "80 RUE DE L'AQUEDUC - 75010 PARIS",
    "latitude": 48.88384326568884,
    "longitude": 2.367110644031659
  }, {
    "number": 42207,
    "name": "42207 - PARIS 3 (CHARENTON)",
    "address": "136 RUE DE PARIS - 94220 CHARENTON",
    "latitude": 48.8266572063246,
    "longitude": 2.405876723011083
  }, {
    "number": 12028,
    "name": "12028 - VIVALDI",
    "address": "42 ALLEE VIVALDI - 75012 PARIS",
    "latitude": 48.841923663276546,
    "longitude": 2.389728979467376
  }, {
    "number": 5008,
    "name": "05008 - ST GERMAIN-DANTE",
    "address": "9 RUE DE DANTE - 75005 PARIS",
    "latitude": 48.850977229793614,
    "longitude": 2.346076825913541
  }, {
    "number": 2003,
    "name": "02003 - ALLEE PIERRE LAZAEFF",
    "address": "189 RUE SAINT DENIS - 75002 PARIS",
    "latitude": 48.86614574652862,
    "longitude": 2.350844595287827
  }, {
    "number": 1026,
    "name": "01026 - COLONEL DRIANT",
    "address": "PLACE DU LIEUTENANT HENRI KARCHER - 75001 PARIS",
    "latitude": 48.86343050194121,
    "longitude": 2.340169767017624
  }, {
    "number": 20112,
    "name": "20112 - JOURDAIN",
    "address": "3 RUE DU JOURDAIN - 75020 PARIS",
    "latitude": 48.87409248091576,
    "longitude": 2.389435908330615
  }, {
    "number": 16101,
    "name": "16101 - MALAKOFF",
    "address": "161 AVENUE MALAKOFF - 75016 PARIS",
    "latitude": 48.87669268743692,
    "longitude": 2.283457593383419
  }, {
    "number": 17110,
    "name": "17110 - LEGENDRE",
    "address": "83 RUE LEGENDRE - 75017 PARIS",
    "latitude": 48.8877723254283,
    "longitude": 2.32036786584418
  }, {
    "number": 15120,
    "name": "15120 - AVIA",
    "address": "26 RUE DU COLONEL PIERRE AVIA - 75015 PARIS",
    "latitude": 48.8296843300915,
    "longitude": 2.275342586850291
  }, {
    "number": 10114,
    "name": "10114 - HOPITAL SAINT LOUIS",
    "address": "12 BIS RUE DE LA GRANGE AUX BELLES - 75010 PARIS",
    "latitude": 48.874794994841274,
    "longitude": 2.366669436984963
  }, {
    "number": 17031,
    "name": "17031 - PORTE DE CHAMPERET",
    "address": "PLACE DE LA PORTE DE CHAMPERET - 75017 PARIS",
    "latitude": 48.88561741628322,
    "longitude": 2.290781411279206
  }, {
    "number": 6021,
    "name": "06021 - BONAPARTE BEAUX ARTS",
    "address": "17 RUE DES BEAUX ARTS - 75006 PARIS",
    "latitude": 48.8564374096868,
    "longitude": 2.334797622948368
  }, {
    "number": 16031,
    "name": "16031 - BOULAINVILLIERS",
    "address": "51 RUE DES VIGNES - 75016 PARIS",
    "latitude": 48.85615074338874,
    "longitude": 2.275188414671189
  }, {
    "number": 16103,
    "name": "16103 - TRAKTIR",
    "address": "3 RUE TRAKTIR - 75016 PARIS",
    "latitude": 48.87279915599243,
    "longitude": 2.291508179426733
  }, {
    "number": 6027,
    "name": "06027 - VAUGIRARD DESGOFFE",
    "address": "2 RUE BLAISE DESGOFFE - 75006 PARIS",
    "latitude": 48.84612989154848,
    "longitude": 2.324240578144087
  }, {
    "number": 8030,
    "name": "08030 - MONTAIGNE",
    "address": "25 RUE BAYARD - 75008 PARIS",
    "latitude": 48.86729323621449,
    "longitude": 2.307691605650344
  }, {
    "number": 4105,
    "name": "04105 - MORLAND",
    "address": "17 BOULEVARD DU MORLAND - 75004 PARIS",
    "latitude": 48.84996003527753,
    "longitude": 2.363239868721318
  }, {
    "number": 20044,
    "name": "20044 - DAVOUT VOLGA",
    "address": "63 BOULEVARD DAVOUT / ANGLE 84 RUE VOLGA 75020 PARIS",
    "latitude": 48.852919679957296,
    "longitude": 2.410522909779111
  }, {
    "number": 12120,
    "name": "12120 - CONSERVATION",
    "address": "ROUTE DE LA CEINTURE DU LAC DAUMESNIL - 75012 PARIS",
    "latitude": 48.82772523704757,
    "longitude": 2.41827234236864
  }, {
    "number": 16018,
    "name": "16018 - FLANDRIN",
    "address": "2 BOULEVARD FLANDRIN - 75016 PARIS",
    "latitude": 48.86441140945903,
    "longitude": 2.272448647646471
  }, {
    "number": 13042,
    "name": "13042 - NATIONALE BACH",
    "address": "150 RUE NATIONALE - 75013 PARIS",
    "latitude": 48.830957464145705,
    "longitude": 2.364107053254628
  }, {
    "number": 41302,
    "name": "41302 - CHARLES DE GAULLE (NOGENT)",
    "address": "FACE AU 60 AVENUE CHARLES DE GAULLES - 94130 NOGENT SUR MARNE",
    "latitude": 48.83648112918176,
    "longitude": 2.479464268709081
  }, {
    "number": 23004,
    "name": "23004 - COUTURIER 2 (LEVALLOIS)",
    "address": "109 RUE  PAUL VAILLANT COUTURIER - 92300 LEVALLOIS",
    "latitude": 48.89819702263572,
    "longitude": 2.293848017974069
  }, {
    "number": 12109,
    "name": "12109 - CHAROLAIS",
    "address": "212 RUE DE CHARENTON - 75012 PARIS",
    "latitude": 48.840869459702354,
    "longitude": 2.387564334932072
  }, {
    "number": 9030,
    "name": "09030 - VICTOIR CHAUSSEE D ANTIN",
    "address": "79 RUE DE LA VICTOIRE - 75009 PARIS",
    "latitude": 48.87518586417745,
    "longitude": 2.332036313368639
  }, {
    "number": 18017,
    "name": "18017 - PECQUEUR",
    "address": "93 RUE CAULAINCOURT - 75018 PARIS",
    "latitude": 48.8896779050281,
    "longitude": 2.33817871442611
  }, {
    "number": 18107,
    "name": "18107 - CHARTRES",
    "address": "22-24 RUE DE CHARTRES - 75018 PARIS",
    "latitude": 48.88470686398326,
    "longitude": 2.35358041022707
  }, {
    "number": 15008,
    "name": "15008 - SEVRES LECOURBE",
    "address": "FACE 4 BOULEVARD PASTEUR - 75015 PARIS",
    "latitude": 48.844838019227154,
    "longitude": 2.311085506094106
  }, {
    "number": 7018,
    "name": "07018 - SEGUR ESTREES",
    "address": "23 AVENUE DE SEGUR - 75007 PARIS",
    "latitude": 48.85129433458901,
    "longitude": 2.309747615603337
  }, {
    "number": 19044,
    "name": "19044 - GRANDS MOULINS",
    "address": "RUE DE LA CLOTURE / ANGLE RUE DU DEBARCADERE - 75019 PARIS",
    "latitude": 48.89713005307456,
    "longitude": 2.396079008206681
  }, {
    "number": 10012,
    "name": "10012 - VINAIGRIERS",
    "address": "58 RUE DES VINAIGRIERS - 75010 PARIS",
    "latitude": 48.873267841170026,
    "longitude": 2.359323613430623
  }, {
    "number": 7022,
    "name": "07022 - PONT DE L'ALMA",
    "address": "3 AVENUE BOSQUET - 75007 PARIS",
    "latitude": 48.86164049957625,
    "longitude": 2.302250344175951
  }, {
    "number": 35012,
    "name": "35012 - CANDALE (PANTIN)",
    "address": "FACE AU 12 RUE CANDALE - 93500 PANTIN",
    "latitude": 48.889485840195675,
    "longitude": 2.414307515111288
  }, {
    "number": 1009,
    "name": "01009 - PONT NEUF - 14",
    "address": "14 RUE DU PONT NEUF - 75001 PARIS",
    "latitude": 48.860245194532624,
    "longitude": 2.344333545273837
  }, {
    "number": 15051,
    "name": "15051 - ROLLET",
    "address": "1 PLACE HENRI ROLLET - 75015 PARIS",
    "latitude": 48.83598100445596,
    "longitude": 2.293467119128608
  }, {
    "number": 20107,
    "name": "20107 - STADE MARYSE HILSZ",
    "address": "26 RUE MARYSE HILSZ - 75020 PARIS",
    "latitude": 48.851285276158144,
    "longitude": 2.412733641628248
  }, {
    "number": 8012,
    "name": "08012 - CLICHY",
    "address": "10 BOULEVARD DES BATIGNOLLES SUR TPC - 75008 PARIS",
    "latitude": 48.883318044354574,
    "longitude": 2.326207175385489
  }, {
    "number": 3012,
    "name": "03012 - GAITE LYRIQUE",
    "address": "FACE 8 RUE SALOMON DE CAUS - 75003 PARIS",
    "latitude": 48.86749798940664,
    "longitude": 2.353660816249226
  }, {
    "number": 10105,
    "name": "10105 - BONNE NOUVELLE PROP2",
    "address": "2 RUE DE MAZAGRAN - 75010 PARIS",
    "latitude": 48.870278078579595,
    "longitude": 2.351281636686514
  }, {
    "number": 9033,
    "name": "09033 - HAVRE CAUMARTIN",
    "address": "FACE 45 RUE CAUMARTIN - 75009 PARIS",
    "latitude": 48.872795019872605,
    "longitude": 2.328315742616178
  }, {
    "number": 14116,
    "name": "14116 - ROMAIN ROLLAND",
    "address": "49-51 BD ROMAIN ROLLAND - 75014 PARIS",
    "latitude": 48.820323646126774,
    "longitude": 2.32300304092451
  }, {
    "number": 12027,
    "name": "12027 - MONTGALLET CHARENTON",
    "address": "2 RUE MONTGALLET - 75012 PARIS",
    "latitude": 48.84264777870052,
    "longitude": 2.386164927813738
  }, {
    "number": 13034,
    "name": "13034 - EDISON",
    "address": "54 AVENUE EDISON - 75013 PARIS",
    "latitude": 48.82902666973469,
    "longitude": 2.361069024089417
  }, {
    "number": 9026,
    "name": "09026 - BRUYERE PIGALLE",
    "address": "28 RUE J.B.PIGALLE - 75009 PARIS",
    "latitude": 48.87939826447722,
    "longitude": 2.333709173337285
  }, {
    "number": 17013,
    "name": "17013 - LEGENDRE",
    "address": "62 RUE LEGENDRE - 75017 PARIS",
    "latitude": 48.885437730894544,
    "longitude": 2.316473835914172
  }, {
    "number": 31004,
    "name": "31004 - PARIS 2 (MONTREUIL)",
    "address": "175/179 RUE DE PARIS - 93100 MONTREUIL",
    "latitude": 48.85550131286469,
    "longitude": 2.422055733613231
  }, {
    "number": 9106,
    "name": "09106 - AUBER",
    "address": "3 RUE BOUDREAU - 75009 PARIS",
    "latitude": 48.87219025140095,
    "longitude": 2.329423494000903
  }, {
    "number": 16028,
    "name": "16028 - MILLET - JEAN DE LA FONTAINE",
    "address": "12 RUE FRANCOIS MILLET - 75016 PARIS",
    "latitude": 48.85100487466529,
    "longitude": 2.272469482915694
  }, {
    "number": 18034,
    "name": "18034 - LEIBNITZ",
    "address": "50 RUE LEIBNITZ - 75018 PARIS",
    "latitude": 48.896328348515986,
    "longitude": 2.333390423834684
  }, {
    "number": 5010,
    "name": "05010 - SAINT MICHEL HENRI BARBUSSE",
    "address": "1 RUE HENRI BARBUSSE - 75005 PARIS",
    "latitude": 48.84375698130157,
    "longitude": 2.339306721981416
  }, {
    "number": 12102,
    "name": "12102 - DIDEROT BERCY",
    "address": "224 RUE DE BERCY - 75012 PARIS",
    "latitude": 48.84618800146489,
    "longitude": 2.37040616152132
  }, {
    "number": 5019,
    "name": "05019 - POISSY",
    "address": "8-10 RUE DE POISSY - 75005 PARIS",
    "latitude": 48.84969041137042,
    "longitude": 2.352970183602024
  }, {
    "number": 16038,
    "name": "16038 - RUE MOLITOR",
    "address": "RUE MOLITOR - 75016 PARIS",
    "latitude": 48.84509712653168,
    "longitude": 2.265724147895062
  }, {
    "number": 9022,
    "name": "09022 - LAFITTE ROSSINI",
    "address": "19 RUE ROSSINI - 75009 PARIS",
    "latitude": 48.87334627510507,
    "longitude": 2.337980867701675
  }, {
    "number": 11030,
    "name": "11030 - SAINT MAUR OBERKAMPF",
    "address": "80 RUE OBERKAMPF - 75011 PARIS",
    "latitude": 48.86530798423503,
    "longitude": 2.376019912019568
  }, {
    "number": 16130,
    "name": "16130 - BOIS DE BOULOGNE / PORTE DE LA MUETTE 2",
    "address": "AVENUE LOUIS BARTHOU / PLACE DE LA COLOMBIE - 75016 PARIS",
    "latitude": 48.863757931035046,
    "longitude": 2.267504683574771
  }, {
    "number": 43009,
    "name": "43009 - MURS DU PARC (VINCENNES)",
    "address": "AVENUE DES MURS DU PARC - 94300 VINCENNES",
    "latitude": 48.84696126017499,
    "longitude": 2.452237396596088
  }, {
    "number": 15113,
    "name": "15113 - FALGUIERE ARSONVAL",
    "address": "2 RUE D'ARSONVAL - 75015 PARIS",
    "latitude": 48.84040040365445,
    "longitude": 2.313117867297474
  }, {
    "number": 1001,
    "name": "01001 - ILE DE LA CITE PONT NEUF",
    "address": "41 QUAI DE L'HORLOGE - 75001 PARIS",
    "latitude": 48.857091635218225,
    "longitude": 2.341747995157864
  }, {
    "number": 18044,
    "name": "18044 - CLICHY",
    "address": "132 BOULEVARD DE CLICHY - 75018 PARIS",
    "latitude": 48.88412710804656,
    "longitude": 2.328807098192234
  }, {
    "number": 23001,
    "name": "23001 - COUTURIER 1 (LEVALLOIS)",
    "address": "2 RUE PAUL VAILLANT COUTURIER - 92300 LEVALLOIS",
    "latitude": 48.8936146524531,
    "longitude": 2.277618727223195
  }, {
    "number": 17046,
    "name": "17046 - MAC MAHON",
    "address": "18 AVENUE MARC MAHON - 75017 PARIS",
    "latitude": 48.877532084130166,
    "longitude": 2.294512536052928
  }, {
    "number": 19018,
    "name": "19018 - CITÉ DE LA MUSIQUE",
    "address": "FACE 210 AVENUE JEAN JAURES - 75019 PARIS",
    "latitude": 48.8887860708258,
    "longitude": 2.39268612206715
  }, {
    "number": 14126,
    "name": "14126 - VAILLANT COUTURIER",
    "address": "155 AVENUE PAUL VAILLANT COUTURIER - 75014 PARIS",
    "latitude": 48.816980981259285,
    "longitude": 2.332609687921881
  }, {
    "number": 16033,
    "name": "16033 - MICHEL ANGE AUTEUIL",
    "address": "85 RUE JEAN DE LA FONTAINE - 75016 PARIS",
    "latitude": 48.84842761367387,
    "longitude": 2.265253821160005
  }, {
    "number": 14031,
    "name": "14031 - DIDOT CHATEAU",
    "address": "13 RUE DIDOT - 75014 PARIS",
    "latitude": 48.8337,
    "longitude": 2.3215
  }, {
    "number": 16029,
    "name": "16029 - MAISON DE RADIO FRANCE",
    "address": "1 RUE GROS - 75016 PARIS",
    "latitude": 48.851359912581465,
    "longitude": 2.277697269448623
  }, {
    "number": 17021,
    "name": "17021 - WAGRAM (17EME ARR.)",
    "address": "RUE JOUFFROY D'ABBANS - 75017 PARIS",
    "latitude": 48.8842894403224,
    "longitude": 2.305497444260642
  }, {
    "number": 19116,
    "name": "19116 - JAURES VILLETTE",
    "address": "180 BOULEVARD DE LA VILLETTE - 75019 PARIS",
    "latitude": 48.881472498481,
    "longitude": 2.37026248225988
  }, {
    "number": 34010,
    "name": "34010 - DIDEROT 2 (SAINT OUEN)",
    "address": "FACE 61-63 RUE DIDEROT- 93400 SAINT OUEN",
    "latitude": 48.91157045930829,
    "longitude": 2.333910127129224
  }, {
    "number": 22006,
    "name": "22006 - PIERRET (NEUILLY)",
    "address": "33 RUE PIERRET - 92200 NEUILLY SUR SEINE",
    "latitude": 48.883026659159576,
    "longitude": 2.260096983931875
  }, {
    "number": 15038,
    "name": "15038 - PLACE ADOLPHE CHERIOUX",
    "address": "18 PLACE ADOLPHE CHERIOUX - 75015 PARIS",
    "latitude": 48.839635080561905,
    "longitude": 2.300654459291639
  }, {
    "number": 19014,
    "name": "19014 - LORRAINE",
    "address": "28 RUE DE LORRAINE - 75019 PARIS",
    "latitude": 48.886335082615275,
    "longitude": 2.38246120055766
  }, {
    "number": 20043,
    "name": "20043 - CHARONNE AVRON",
    "address": "48 BOULEVARD DE CHARONNE - 75011 PARIS",
    "latitude": 48.85160266522164,
    "longitude": 2.398403047037931
  }, {
    "number": 20036,
    "name": "20036 - MENILMONTANT - PELLEPORT",
    "address": "164 RUE DE MENILMONTANT - 75020 PARIS",
    "latitude": 48.87068263384462,
    "longitude": 2.398959602331646
  }, {
    "number": 21207,
    "name": "21207 - VERDIER (MONTROUGE)",
    "address": "AVENUE VERDIER ANGLE AVENUE DE LA REPUBLIQUE - 92120 MONTROUGE",
    "latitude": 48.815529633678416,
    "longitude": 2.317029863731327
  }, {
    "number": 15067,
    "name": "15067 - DESAIX",
    "address": "23 RUE DESAIX - 75015 PARIS",
    "latitude": 48.852804604940296,
    "longitude": 2.293077029857222
  }, {
    "number": 18114,
    "name": "18114 - LEPIC VERON",
    "address": "35 RUE VERON - 75018 PARIS",
    "latitude": 48.885257971348466,
    "longitude": 2.334617735640665
  }, {
    "number": 9035,
    "name": "09035 - PLACE DE BUDAPEST",
    "address": "38 RUE DE LONDRES - 75009 PARIS",
    "latitude": 48.87775323400056,
    "longitude": 2.327339290714228
  }, {
    "number": 2016,
    "name": "02016 - ABOUKIR",
    "address": "108 RUE D'ABOUKIR - 75002 PARIS",
    "latitude": 48.868660481539266,
    "longitude": 2.35018588824494
  }, {
    "number": 5021,
    "name": "05021 - JUSSIEU",
    "address": "41 RUE JUSSIEU - 75005 PARIS",
    "latitude": 48.847184641150214,
    "longitude": 2.353398379689353
  }, {
    "number": 18006,
    "name": "18006 - MARCHE ST-PIERRE",
    "address": "PLACE SAINT PIERRE - 75018 PARIS",
    "latitude": 48.88469160640549,
    "longitude": 2.344139285947184
  }, {
    "number": 4015,
    "name": "04015 - MAIRIE DU 4 EME",
    "address": "25 RUE DU PONT LOUIS PHILIPPE - 75004 PARIS",
    "latitude": 48.8559658562102,
    "longitude": 2.35638115487306
  }, {
    "number": 20117,
    "name": "20117 - SAINT FARGEAU MORTIER",
    "address": "72 RUE SAINT-FARGEAU - 75020 PARIS",
    "latitude": 48.872747269036246,
    "longitude": 2.408203454302088
  }, {
    "number": 17012,
    "name": "17012 - MAIRIE DU 17EME",
    "address": "FACE 16 RUE DES BATIGNOLLES - 75017 PARIS",
    "latitude": 48.884101293163106,
    "longitude": 2.322206025347343
  }, {
    "number": 35009,
    "name": "35009 - LOLIVE 1 (PANTIN)",
    "address": "104 AVENUE LOLIVE - 93500 PANTIN",
    "latitude": 48.892139409307205,
    "longitude": 2.409107737701187
  }, {
    "number": 19029,
    "name": "19029 - SEINE FLANDRE",
    "address": "51 QUAI DE LA SEINE - 75019 PARIS",
    "latitude": 48.88679881177337,
    "longitude": 2.374719516795626
  }, {
    "number": 10004,
    "name": "10004 - METZ",
    "address": "7 RUE DE METZ - 75010 PARIS",
    "latitude": 48.870893425955984,
    "longitude": 2.353521565011111
  }, {
    "number": 2010,
    "name": "02010 - BOULEVARD MONTMARTRE",
    "address": "21 RUE D'UZES - 75002 PARIS",
    "latitude": 48.87077575727228,
    "longitude": 2.343163334385358
  }, {
    "number": 9027,
    "name": "09027 - FONTAINE DOUAI",
    "address": "24 RUE DE DOUAI - 75009 PARIS",
    "latitude": 48.88235325984544,
    "longitude": 2.333263372748175
  }, {
    "number": 11040,
    "name": "11040 - TEMPLE JEAN PIERRE TIMBAUD",
    "address": "18 BD DU TEMPLE - 75011 PARIS",
    "latitude": 48.86442014173202,
    "longitude": 2.366136374249966
  }, {
    "number": 21003,
    "name": "21003 - JAURES 1 (BOULOGNE-BILLANCOURT)",
    "address": "2 BOULEVARD JEAN JAURES -  92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.8456381388333,
    "longitude": 2.23701147134366
  }, {
    "number": 13036,
    "name": "13036 - TOLBIAC NATIONALE",
    "address": "86 RUE TOLBIAC - 75013 PARIS",
    "latitude": 48.82690019971573,
    "longitude": 2.365177603483576
  }, {
    "number": 42014,
    "name": "42014 - CACHIN (IVRY)",
    "address": "PLACE MARCEL CACHIN - 94200 IVRY SUR SEINE",
    "latitude": 48.81414053750237,
    "longitude": 2.390909368067142
  }, {
    "number": 906,
    "name": "00906 - GARE DE L'EST",
    "address": "GARDE DE L'EST-PARVIS GARE DE L'EST - 75010 PARIS",
    "latitude": 48.876419813641114,
    "longitude": 2.358630064544601
  }, {
    "number": 14117,
    "name": "14117 - MOUCHOTTE",
    "address": "5 RUE DU COMMANDANT RENE MOUCHOTTE - 75014 PARIS",
    "latitude": 48.83932502506044,
    "longitude": 2.320954125728877
  }, {
    "number": 10031,
    "name": "10031 - AQUEDUC",
    "address": "48 RUE LOUIS BLANC - 75010 PARIS",
    "latitude": 48.88199720999019,
    "longitude": 2.363625214552995
  }, {
    "number": 13053,
    "name": "13053 - CHEVALERET TOLBIAC",
    "address": "56 RUE CHEVALERET - 75013 PARIS",
    "latitude": 48.82941013459557,
    "longitude": 2.375934558013933
  }, {
    "number": 9010,
    "name": "09010 - CADET",
    "address": "1/3 RUE DE ROCHECHOUART - 75009 PARIS",
    "latitude": 48.876719895109,
    "longitude": 2.344393021853951
  }, {
    "number": 1002,
    "name": "01002 - PLACE DU CHATELET",
    "address": "14 AVENUE VICTORIA - 75001 PARIS",
    "latitude": 48.857940092963034,
    "longitude": 2.347010058114489
  }, {
    "number": 16107,
    "name": "16107 - GODARD",
    "address": "2 RUE BENJAMIN GODARD - 75016 PARIS",
    "latitude": 48.86598324102434,
    "longitude": 2.275725635731198
  }, {
    "number": 13118,
    "name": "13118 - PATAY REGNAULT",
    "address": "36-38 RUE REGNAULT - 75013 PARIS",
    "latitude": 48.82434285685922,
    "longitude": 2.376060091685724
  }, {
    "number": 20013,
    "name": "20013 - PLACE DE LA REUNION",
    "address": "106 RUE ALEXANDRE DUMAS - 75020 PARIS",
    "latitude": 48.85535513998681,
    "longitude": 2.399728589689724
  }, {
    "number": 17043,
    "name": "17043 - PLACE GENERAL KOENIG",
    "address": "10 RUE BELIDOR - 75017 PARIS",
    "latitude": 48.88023362761321,
    "longitude": 2.285380679473588
  }, {
    "number": 17105,
    "name": "17105 - PALADINES",
    "address": "18 BOULEVARD D'AURELLE DE PALADINES - 75017 PARIS",
    "latitude": 48.883498081948446,
    "longitude": 2.28201558962579
  }, {
    "number": 14037,
    "name": "14037 - JEAN MOULIN",
    "address": "56 AVENUE JEAN MOULIN - 75014 PARIS",
    "latitude": 48.82570981702807,
    "longitude": 2.321849987344236
  }, {
    "number": 8005,
    "name": "08005 - MADELEINE",
    "address": "04 PLACE DE LA MADELEINE - 75008 PARIS",
    "latitude": 48.86909008833763,
    "longitude": 2.324429630496505
  }, {
    "number": 5003,
    "name": "05003 - GAY LUSSAC LE GOFF",
    "address": "9 RUE LE GOFF - 75005 PARIS",
    "latitude": 48.84623928170344,
    "longitude": 2.341324916011569
  }, {
    "number": 11037,
    "name": "11037 - FAUBOURG DU TEMPLE PLACE DE LA REPUBLIQUE",
    "address": "2 RUE DU FAUBOURG DU TEMPLE - 75011 PARIS",
    "latitude": 48.868,
    "longitude": 2.36498
  }, {
    "number": 10034,
    "name": "10034 - CHAPELLE LOUIS BLANC",
    "address": "68 RUE LOUIS BLANC - 75010 PARIS",
    "latitude": 48.88384931844148,
    "longitude": 2.360053088985318
  }, {
    "number": 21211,
    "name": "21211 - MARNE (MONTROUGE)",
    "address": "100 AVENUE DE LA MARNE - 92120 MONTROUGE",
    "latitude": 48.811749821310805,
    "longitude": 2.303169887627808
  }, {
    "number": 16002,
    "name": "16002 - PERGOLESE",
    "address": "FACE 25 RUE PERGOLESE - 75016 PARIS",
    "latitude": 48.87518496111192,
    "longitude": 2.284219432060596
  }, {
    "number": 13008,
    "name": "13008 - ITALIE ROSALIE",
    "address": "FACE 2 PLACE D'ITALIE - 75013 PARIS",
    "latitude": 48.83199636916928,
    "longitude": 2.354809472700658
  }, {
    "number": 21110,
    "name": "21110 - VILLENEUVE (CLICHY)",
    "address": "FACE 51 RUE VILLENEUVE - 92110 CLICHY",
    "latitude": 48.90550311453459,
    "longitude": 2.310820381708937
  }, {
    "number": 17041,
    "name": "17041 - PORTE DE VILLIERS",
    "address": "51 RUE GUERSANT - 75017 PARIS",
    "latitude": 48.88287775178599,
    "longitude": 2.287667370814871
  }, {
    "number": 8102,
    "name": "08102 - LAMENAIS WASHINGTON",
    "address": "1 RUE LAMENNAIS - 75008 PARIS",
    "latitude": 48.87355533448877,
    "longitude": 2.303288666125152
  }, {
    "number": 11027,
    "name": "11027 - SAINT AMBROISE PARMENTIER",
    "address": "17 RUE SAINT AMBROISE - 75011 PARIS",
    "latitude": 48.8621350384716,
    "longitude": 2.377229858571335
  }, {
    "number": 15027,
    "name": "15027 - GIDE",
    "address": "4 RUE ANDRE GIDE  - 75015 PARIS",
    "latitude": 48.8365662244334,
    "longitude": 2.312707121097412
  }, {
    "number": 20045,
    "name": "20045 - LOUIS GANNE",
    "address": "3-5 RUE LOUIS GANNE - 75020 PARIS",
    "latitude": 48.86346964122224,
    "longitude": 2.409670100215905
  }, {
    "number": 10001,
    "name": "10001 - JOHANN STRAUSS",
    "address": "FACE 50 RUE RENE BOULANGER - 75010 PARIS",
    "latitude": 48.86849994171273,
    "longitude": 2.359970049607283
  }, {
    "number": 15021,
    "name": "15021 - CROIX NIVERT",
    "address": "DEV 2 RUE JOSEPH LOUVILLE - 75015 PARIS",
    "latitude": 48.844806421735925,
    "longitude": 2.297572005982148
  }, {
    "number": 9113,
    "name": "09113 - BLEUE",
    "address": "5 RUE BLEUE - 75009 PARIS",
    "latitude": 48.87582185503067,
    "longitude": 2.347303230302456
  }, {
    "number": 5107,
    "name": "05107 - PONTOISE",
    "address": "1 RUE DE PONTOISE - 75005 PARIS",
    "latitude": 48.85045800918843,
    "longitude": 2.352454275492188
  }, {
    "number": 17040,
    "name": "17040 - TERNES PEREIRE",
    "address": "227 BOULEVARD PEREIRE SUR TPC - 75017 PARIS",
    "latitude": 48.879813218337546,
    "longitude": 2.287956452342442
  }, {
    "number": 41203,
    "name": "41203 - STALINGRAD (FONTENAY SOUS BOIS)",
    "address": "14 AVENUE STALINGRAD - 94120 FONTENAY SOUS BOIS",
    "latitude": 48.850125232056115,
    "longitude": 2.455529172111142
  }, {
    "number": 15010,
    "name": "15010 - CAMBRONNE",
    "address": "FACE 3 BD GARIBALDI - 75015 PARIS",
    "latitude": 48.84757532146731,
    "longitude": 2.30286310050181
  }, {
    "number": 9012,
    "name": "09012 - ROUGEMONT",
    "address": "3-5 RUE ROUGEMONT - 75009 PARIS",
    "latitude": 48.87154221364212,
    "longitude": 2.345836455597928
  }, {
    "number": 2015,
    "name": "02015 - OPERA - CAPUCINES",
    "address": "25 RUE LOUIS LE GRAND - 75002 PARIS",
    "latitude": 48.870508937203915,
    "longitude": 2.334054461939329
  }, {
    "number": 34011,
    "name": "34011 - DHALENNE (SAINT OUEN)",
    "address": "FACE AU 61 RUE ALBERT DHALENNE - 93400 SAINT OUEN",
    "latitude": 48.914188312399,
    "longitude": 2.33208283587176
  }, {
    "number": 31706,
    "name": "31706 - CHATEAU (BAGNOLET)",
    "address": "RUE DU CHATEAU - 93170 BAGNOLET",
    "latitude": 48.86302549226599,
    "longitude": 2.415622204179507
  }, {
    "number": 16123,
    "name": "16123 - MAHATMA GANDHI",
    "address": "Avenue du Mahatma Gandhi face à la Fondation Louis Vuitton dans le Bois de Boulogne - 75016 PARIS",
    "latitude": 48.876356,
    "longitude": 2.264205
  }, {
    "number": 12002,
    "name": "12002 - LACUEE",
    "address": "17 RUE LACUEE - 75012 PARIS",
    "latitude": 48.849215862624035,
    "longitude": 2.370503423869599
  }, {
    "number": 15009,
    "name": "15009 - SUFFREN",
    "address": "140 AVENUE DE SUFFREN - 75015 PARIS",
    "latitude": 48.84717561492764,
    "longitude": 2.307052147596786
  }, {
    "number": 12036,
    "name": "12036 - REUILLY",
    "address": "116 RUE DE REUILLY - 75012 PARIS",
    "latitude": 48.84030274499962,
    "longitude": 2.394630398715453
  }, {
    "number": 14004,
    "name": "14004 - PORT ROYAL COCHIN",
    "address": "111 BD PORT ROYAL - 75014 PARIS",
    "latitude": 48.838431825491696,
    "longitude": 2.340794666870659
  }, {
    "number": 8001,
    "name": "08001 - PETIT PALAIS",
    "address": "AV. DUTUIT - 75008 PARIS",
    "latitude": 48.866843803252216,
    "longitude": 2.315779713410026
  }, {
    "number": 3101,
    "name": "03101 - PORTE SAINT MARTIN",
    "address": "62 RUE MESLAY - 75003 PARIS",
    "latitude": 48.86863640502551,
    "longitude": 2.355591592778568
  }, {
    "number": 10010,
    "name": "10010 - JACQUES BONSERGENT",
    "address": "FACE 8 PLACE JACQUES BONSERGENT - 75010 PARIS",
    "latitude": 48.87099998982137,
    "longitude": 2.361141436574885
  }, {
    "number": 13122,
    "name": "13122 - PARC DE CHOISY",
    "address": "FACE 153 AVENUE DE CHOISY - 75013 PARIS",
    "latitude": 48.828156251574946,
    "longitude": 2.358513532903332
  }, {
    "number": 18029,
    "name": "18029 - POTEAU",
    "address": "1 RUE EMILE BLEMONT - 75018 PARIS",
    "latitude": 48.89453090447961,
    "longitude": 2.341541339092219
  }, {
    "number": 21005,
    "name": "21005 - MORIZET (BOULOGNE-BILLANCOURT)",
    "address": "20 AVENUE ANDRE MORIZET - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.834953979664654,
    "longitude": 2.241688247102405
  }, {
    "number": 15061,
    "name": "15061 - DESNOUETTES",
    "address": "12 SQUARE DESNOUETTES - 75015 PARIS",
    "latitude": 48.83476837934194,
    "longitude": 2.284142297394666
  }, {
    "number": 14122,
    "name": "14122 - BRUNE",
    "address": "1 RUE DU COLONEL MONTEIL - 75014 PARIS",
    "latitude": 48.82650293311012,
    "longitude": 2.309274799827166
  }, {
    "number": 18025,
    "name": "18025 - MAIRIE DU 18 EME",
    "address": "81 RUE MONT-CENIS - 75018 PARIS",
    "latitude": 48.892925653432606,
    "longitude": 2.344517921162641
  }, {
    "number": 7003,
    "name": "07003 - BON MARCHE",
    "address": "RUE VELPEAU - 75007 PARIS",
    "latitude": 48.85123038028847,
    "longitude": 2.325070038738617
  }, {
    "number": 10113,
    "name": "10113 - PARMENTIER LOUVEL-TESSIER",
    "address": "151 AVENUE PARMENTIER - 75010 PARIS",
    "latitude": 48.87137987425661,
    "longitude": 2.369896383666685
  }, {
    "number": 12030,
    "name": "12030 - WATTIGNIES",
    "address": "245 RUE DE CHARENTON - 75012 PARIS",
    "latitude": 48.83667579640627,
    "longitude": 2.391795855555629
  }, {
    "number": 10161,
    "name": "10161 - GARE DE L'EST",
    "address": "FACE 129 RUE DU FBG SAINT MARTIN - 75010 PARIS",
    "latitude": 48.875670112481366,
    "longitude": 2.359509937592322
  }, {
    "number": 16043,
    "name": "16043 - PLACE DE PASSY",
    "address": "2 PLACE DE PASSY - 75016 PARIS",
    "latitude": 48.85780291711202,
    "longitude": 2.277500546942199
  }, {
    "number": 12123,
    "name": "12123 - CHATEAU DE VINCENNES",
    "address": "COURS DES MARECHAUX - 94300 VINCENNES",
    "latitude": 48.84423193255657,
    "longitude": 2.439209537709179
  }, {
    "number": 18122,
    "name": "18122 - BINET",
    "address": "5 RUE BINET - 75018 PARIS",
    "latitude": 48.899268863316706,
    "longitude": 2.342963477309899
  }, {
    "number": 908,
    "name": "00908 - PORT DU GROS CAILLOU (STATION MOBILE)",
    "address": "QUAI D'ORSAY - PORT DU GROS CAILLOU - 75007 PARIS",
    "latitude": 48.86288,
    "longitude": 2.30652
  }, {
    "number": 12126,
    "name": "12126 - AVENUE DE GRAVELLE",
    "address": "FACE 71 AVENUE DE GRAVELLE - 75012 PARIS",
    "latitude": 48.824407767562604,
    "longitude": 2.418455004234756
  }, {
    "number": 14006,
    "name": "14006 - SAINT JACQUES TOMBE ISSOIRE",
    "address": "46 BOULEVARD SAINT JACQUES - 75014 PARIS",
    "latitude": 48.833190318752514,
    "longitude": 2.336933391248149
  }, {
    "number": 17117,
    "name": "17117 - PEREIRE SAUSSURE",
    "address": "2 BIS BOULEVARD PEREIRE - 75017 PARIS",
    "latitude": 48.888185641932566,
    "longitude": 2.310120536549759
  }, {
    "number": 6013,
    "name": "06013 - JACQUES CALLOT",
    "address": "1 RUE JACQUES CALLOT - 75006 PARIS",
    "latitude": 48.85525468775053,
    "longitude": 2.337539334060287
  }, {
    "number": 8015,
    "name": "08015 - ROQUEPINE",
    "address": "4 RUE ROQUEPINE - 75008 PARIS",
    "latitude": 48.873486169349846,
    "longitude": 2.320281234210629
  }, {
    "number": 5014,
    "name": "05014 - CALVIN",
    "address": "8 RUE JEAN CALVIN - 75005 PARIS",
    "latitude": 48.84163270861767,
    "longitude": 2.348552018116996
  }, {
    "number": 19119,
    "name": "19119 - BOURET PAILLERON",
    "address": "20 RUE EDOUARD PAILLERON - 75019 PARIS",
    "latitude": 48.8805744614225,
    "longitude": 2.376853000562019
  }, {
    "number": 13048,
    "name": "13048 - TOLBIAC WURTZ",
    "address": "20 RUE WURTZ - 75013 PARIS",
    "latitude": 48.82649432826404,
    "longitude": 2.344301715865302
  }, {
    "number": 6003,
    "name": "06003 - SAINT SULPICE",
    "address": "15 RUE DU VIEUX COLOMBIER - 75006 PARIS",
    "latitude": 48.851647848142655,
    "longitude": 2.33081707438869
  }, {
    "number": 8113,
    "name": "08113 - PLACE ST AUGUSTIN",
    "address": "5 PLACE SAINT AUGUSTIN - 75008 PARIS",
    "latitude": 48.874923109802,
    "longitude": 2.319395144377322
  }, {
    "number": 19039,
    "name": "19039 - PAILLERON",
    "address": "6 RUE EDOUARD PAILLERON - 75019 PARIS",
    "latitude": 48.879775248860305,
    "longitude": 2.374834351164813
  }, {
    "number": 18012,
    "name": "18012 - DOUDEAUVILLE STEPHENSON",
    "address": "51 RUE STEPHENSON - 75018 PARIS",
    "latitude": 48.888864896056646,
    "longitude": 2.355966721417555
  }, {
    "number": 21310,
    "name": "21310 - KLEBER (ISSY LES MOULINEAUX)",
    "address": "4 RUE KLEBER - 92130 ISSY LES MOULINEAUX",
    "latitude": 48.82692976736927,
    "longitude": 2.272250431956518
  }, {
    "number": 13025,
    "name": "13025 - PLACE DE RUNGIS",
    "address": "FACE 35 RUE DE LA FONTAINE A MULARD - 75013 PARIS",
    "latitude": 48.82245594764965,
    "longitude": 2.347382729482953
  }, {
    "number": 31702,
    "name": "31702 - CURIE (BAGNOLET)",
    "address": "40 PIERRE ET MARIE CURIE - 93170 BAGNOLET",
    "latitude": 48.870658012858954,
    "longitude": 2.424046437536216
  }, {
    "number": 10002,
    "name": "10002 - STRASBOURG",
    "address": "3 BD STRASBOURG - 75010 PARIS",
    "latitude": 48.86967912445944,
    "longitude": 2.354327697377583
  }, {
    "number": 43401,
    "name": "43401 - GARE RER (JOINVILLE)",
    "address": "PARC DU STATIONNEMENT / GARE RER - 94340 JOINVILLE-LE-PONT",
    "latitude": 48.819954101228014,
    "longitude": 2.464025504702534
  }, {
    "number": 11025,
    "name": "11025 - FROMENT BREGUET",
    "address": "9 RUE FROMENT - 75011 PARIS",
    "latitude": 48.85704145047844,
    "longitude": 2.37289470306807
  }, {
    "number": 15114,
    "name": "15114 - PASTEUR COTENTIN",
    "address": "FACE 1 RUE DU COTENTIN - 75015 PARIS",
    "latitude": 48.838936909959585,
    "longitude": 2.316168412063174
  }, {
    "number": 11013,
    "name": "11013 - NATION VOLAIRE",
    "address": "5 PLACE DE LA NATION - 75011 PARIS",
    "latitude": 48.8492766381855,
    "longitude": 2.39493447775012
  }, {
    "number": 17037,
    "name": "17037 - BAYERN PEREIRE",
    "address": "40 RUE BAYEN - 75017 PARIS",
    "latitude": 48.881830717500975,
    "longitude": 2.292140665828861
  }, {
    "number": 9101,
    "name": "09101 - CADET LA FAYETTE",
    "address": "24-26 RUE CADET - 75009 PARIS",
    "latitude": 48.87563967181739,
    "longitude": 2.343523591554751
  }, {
    "number": 11101,
    "name": "11101 - SQUARE NORDLING",
    "address": "15 RUE CHARLES DELESCLUZE - 75011 PARIS",
    "latitude": 48.85252900039587,
    "longitude": 2.380583632323688
  }, {
    "number": 21012,
    "name": "21012 - LECLERC (BOULOGNE-BILLANCOURT)",
    "address": "745 AVENUE DU GENERAL LECLERC - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.830586296160526,
    "longitude": 2.23449077993291
  }, {
    "number": 20132,
    "name": "20132 - REUNION",
    "address": "4 RUE DE LA REUNION - 75020 PARIS",
    "latitude": 48.852566752033766,
    "longitude": 2.403928068708116
  }, {
    "number": 12042,
    "name": "12042 - MONTEMPOIVRE",
    "address": "36-38 boulevard Soult - 75012 PARIS",
    "latitude": 48.8403981721562,
    "longitude": 2.40922942058058
  }, {
    "number": 18038,
    "name": "18038 - ROND POINT DE LA CHAPELLE",
    "address": "70 RUE DE LA CHAPELLE - 75018 PARIS",
    "latitude": 48.89521990468008,
    "longitude": 2.360097619095422
  }, {
    "number": 10153,
    "name": "10153 - GARE DU NORD 3",
    "address": "7 BOULEVARD DE DENAIN - 75010 PARIS",
    "latitude": 48.87957771852628,
    "longitude": 2.354463131150579
  }, {
    "number": 10023,
    "name": "10023 - VERDUN",
    "address": "1 AVENUE DE VERDUN - 75010 PARIS",
    "latitude": 48.87615605427147,
    "longitude": 2.360914908320552
  }, {
    "number": 8017,
    "name": "08017 - ROCHER",
    "address": "14 RUE ROCHER - 75008 PARIS",
    "latitude": 48.876079329226044,
    "longitude": 2.322731562049324
  }, {
    "number": 20122,
    "name": "20122 - DAVOUT VITRUVE",
    "address": "98 RUE VITRUVE - 75020 PARIS",
    "latitude": 48.86024012095245,
    "longitude": 2.408758427822183
  }, {
    "number": 8103,
    "name": "08103 - D'ARTOIS BERRY",
    "address": "31 RUE D'ARTOIS - 75008 PARIS",
    "latitude": 48.873794318379595,
    "longitude": 2.306299550271081
  }, {
    "number": 32003,
    "name": "32003 - METALLURGIE (SAINT DENIS)",
    "address": "AVENUE DU PRESIDENT WILSON / RUE DE LA METALLURGIE - 93200 SAINT DENIS",
    "latitude": 48.90933002188958,
    "longitude": 2.358050565736408
  }, {
    "number": 43004,
    "name": "43004 - MONTREUIL (VINCENNES)",
    "address": "43 RUE DE MONTREUIL - 94300 VINCENNES",
    "latitude": 48.85041836676044,
    "longitude": 2.43451378622076
  }, {
    "number": 17019,
    "name": "17019 - MALESHERBES",
    "address": "20 RUE DE PHALSBOURG - 75017 PARIS",
    "latitude": 48.88260881643341,
    "longitude": 2.309026487339271
  }, {
    "number": 17119,
    "name": "17119 - TOQUEVILLE",
    "address": "64 RUE DE TOQUEVILLE - 75017 PARIS",
    "latitude": 48.884924358880866,
    "longitude": 2.310908552941167
  }, {
    "number": 2009,
    "name": "02009 - BOURSE",
    "address": "1 RUE DES FILLES SAINT THOMAS - 75002 PARIS",
    "latitude": 48.86885168937216,
    "longitude": 2.339731401086941
  }, {
    "number": 19016,
    "name": "19016 - OURCQ",
    "address": "78 RUE D'HAUTPOUL - 75019 PARIS",
    "latitude": 48.88639367943585,
    "longitude": 2.386541454435452
  }, {
    "number": 20115,
    "name": "20115 - PORTE DE BAGNOLET",
    "address": "102 RUE LOUIS LUMIERE - 75020 PARIS",
    "latitude": 48.864423648565946,
    "longitude": 2.410411115844628
  }, {
    "number": 11021,
    "name": "11021 - PHILIPPE AUGUSTE (20EME ARR.)",
    "address": "212 BOULEVARD CHARONNE - 75011 PARIS",
    "latitude": 48.858445054261914,
    "longitude": 2.39039812238911
  }, {
    "number": 8036,
    "name": "08036 - RIO",
    "address": "39 RUE DE LISBONNE - 75008 PARIS",
    "latitude": 48.87745567681383,
    "longitude": 2.309694221419506
  }, {
    "number": 9039,
    "name": "09039 - CHAUSSEE D'ANTIN",
    "address": "22 rue de la Chaussée d'Antin - 75009 PARIS",
    "latitude": 48.87243,
    "longitude": 2.33359
  }, {
    "number": 18002,
    "name": "18002 - CLIGNANCOURT",
    "address": "25 RUE DE CLIGNANCOURT - 75018 PARIS",
    "latitude": 48.88530162190401,
    "longitude": 2.347211037538656
  }, {
    "number": 41301,
    "name": "41301 - CLEMANCEAU (NOGENT)",
    "address": "2 AVENUE GEORGES CLEMENCEAU - 94130 NOGENT",
    "latitude": 48.836125842982426,
    "longitude": 2.470375451268832
  }, {
    "number": 19017,
    "name": "19017 - PARC DE LA VILLETTE",
    "address": "197 AVENUE JEAN JAURES - 75019 PARIS",
    "latitude": 48.88836894202208,
    "longitude": 2.390991659376403
  }, {
    "number": 18032,
    "name": "18032 - PORTE DE CLIGNANCOURT",
    "address": "FACE 59 RUE BELLIARD - 75018 PARIS",
    "latitude": 48.89748845974928,
    "longitude": 2.343996499337776
  }, {
    "number": 8039,
    "name": "08039 - COLISEE",
    "address": "6 RUE DU COLISEE - 75008 PARIS",
    "latitude": 48.870481938552295,
    "longitude": 2.307662540152187
  }, {
    "number": 14101,
    "name": "14101 - PLACE FERNAND MOURLOT",
    "address": "33 BD EDGAR QUINET - 75014 PARIS",
    "latitude": 48.8415048015128,
    "longitude": 2.323277715643321
  }, {
    "number": 4003,
    "name": "04003 - PONT SAINT LOUIS",
    "address": "1 QUAI AUX FLEURS - 75004 PARIS",
    "latitude": 48.8529448879212,
    "longitude": 2.352088649440748
  }, {
    "number": 18010,
    "name": "18010 - MARX DORMOY - RIQUET",
    "address": "100 RUE RIQUET - 75018 PARIS",
    "latitude": 48.89026411,
    "longitude": 2.36029911
  }, {
    "number": 15060,
    "name": "15060 - MONDRIAN",
    "address": "9 PLACE DE LA MONTAGNE DU GOULET - 75015 PARIS",
    "latitude": 48.84429286557653,
    "longitude": 2.277345897096496
  }, {
    "number": 12105,
    "name": "12105 - BERCY VILLOT",
    "address": "153 RUE DE BERCY - 75012 PARIS",
    "latitude": 48.84190715333373,
    "longitude": 2.376605625312414
  }, {
    "number": 12003,
    "name": "12003 - QUAI DE LA RAPEE",
    "address": "FACE 98 QUAI DE LA RAPEE - 75012 PARIS",
    "latitude": 48.845886946386784,
    "longitude": 2.366896793773722
  }, {
    "number": 14103,
    "name": "14103 - MAINE LIANCOURT",
    "address": "132 / 136 AVENUE DU MAINE - 75014 PARIS",
    "latitude": 48.835064363954,
    "longitude": 2.323731449973991
  }, {
    "number": 13030,
    "name": "13030 - ITALIE TOLBIAC",
    "address": "88 AVENUE D'ITALIE - 75013 PARIS",
    "latitude": 48.82583946069817,
    "longitude": 2.357215357508107
  }, {
    "number": 8046,
    "name": "08046 - ALMA MARCEAU",
    "address": "2 Avenue MARCEAU - 75008 PARIS",
    "latitude": 48.865194405295554,
    "longitude": 2.300249545157282
  }, {
    "number": 16023,
    "name": "16023 - RUE DE PASSY",
    "address": "1 RUE DE PASSY - 75016 PARIS",
    "latitude": 48.85838125289731,
    "longitude": 2.284129012892127
  }, {
    "number": 10035,
    "name": "10035 - AUBERVILLIERS",
    "address": "1 BOULEVARD DE LA CHAPELLE - 75010 PARIS",
    "latitude": 48.8843481513331,
    "longitude": 2.3641633298742
  }, {
    "number": 14127,
    "name": "14127 - ODESSA",
    "address": "5-7 RUE D'ODESSA - 75014 PARIS",
    "latitude": 48.842842278074414,
    "longitude": 2.324441565139471
  }, {
    "number": 21111,
    "name": "21111 - LERICHE (CLICHY)",
    "address": "14 RUE DU PROFESSEUR RENE LERICHE - 92110 CLICHY",
    "latitude": 48.90811038299345,
    "longitude": 2.307519710082483
  }, {
    "number": 13016,
    "name": "13016 - PRIMO LEVI",
    "address": "9 RUE PRIMO LEVI - 75013 PARIS",
    "latitude": 48.83094844846017,
    "longitude": 2.37965351592796
  }, {
    "number": 12010,
    "name": "12010 - MICHEL BIZOT",
    "address": "251 AVENUE DAUMESNIL - 75012 PARIS",
    "latitude": 48.83749044650707,
    "longitude": 2.401825585802231
  }, {
    "number": 20105,
    "name": "20105 - GAUMONT",
    "address": "AVENUE BENOIT FRACHON - 75020 PARIS",
    "latitude": 48.85255339271965,
    "longitude": 2.415542372109208
  }, {
    "number": 19023,
    "name": "19023 - MANIN SIMON BOLIVAR",
    "address": "FACE 1 RUE MANIN - 75019 PARIS",
    "latitude": 48.87649965412676,
    "longitude": 2.379407362599104
  }, {
    "number": 15125,
    "name": "15125 - AQUABOULEVARD",
    "address": "2 AVENUE DE LA PORTE DE SEVRES / AQUABOULEVARD - 75015 PARIS",
    "latitude": 48.83321982302087,
    "longitude": 2.276630334051614
  }, {
    "number": 8049,
    "name": "08049 - DUNANT",
    "address": "42 AVENUE GEORGE V - 75008 PARIS",
    "latitude": 48.870437805350605,
    "longitude": 2.300830261423519
  }, {
    "number": 5017,
    "name": "05017 - DESCARTES",
    "address": "17 RUE DESCARTES - 75005 PARIS",
    "latitude": 48.84660186578123,
    "longitude": 2.34901473289268
  }, {
    "number": 18037,
    "name": "18037 - AMIRAUX",
    "address": "48 RUE BOINOD - 75018 PARIS",
    "latitude": 48.89454171584971,
    "longitude": 2.352295466779576
  }, {
    "number": 19033,
    "name": "19033 - CAMBRAI",
    "address": "30 RUE DE CAMBRAI - 75019 PARIS",
    "latitude": 48.89594736851349,
    "longitude": 2.381133802246315
  }, {
    "number": 5034,
    "name": "05034 - CENSIER",
    "address": "21 RUE CENSIER - 75005 PARIS",
    "latitude": 48.84050866371248,
    "longitude": 2.353713552033412
  }, {
    "number": 6024,
    "name": "06024 - SAINT GERMAIN DES PRES",
    "address": "55 RUE DES SAINTS PERES - 75006 PARIS",
    "latitude": 48.85394230916141,
    "longitude": 2.33015352476927
  }, {
    "number": 11014,
    "name": "11014 - NATION TRONE",
    "address": "FACE 21 PLACE DE LA NATION - 75011 PARIS",
    "latitude": 48.848482816609724,
    "longitude": 2.39721188193514
  }, {
    "number": 20021,
    "name": "20021 - PRAIRIE L INDRE",
    "address": "2 RUE DE L'INDRE - 75020 PARIS",
    "latitude": 48.86272646274573,
    "longitude": 2.403351311000777
  }, {
    "number": 2011,
    "name": "02011 - BIBLIOTHEQUE NATIONALE",
    "address": "71 RUE DE RICHELIEU - 75002 PARIS",
    "latitude": 48.86829988920071,
    "longitude": 2.338089782278504
  }, {
    "number": 32603,
    "name": "32603 - CALMETTE (LES LILAS)",
    "address": "1 ALLEE DOCTEUR CALMETTE - 93260 LES LILAS",
    "latitude": 48.881141015697715,
    "longitude": 2.424974243066201
  }, {
    "number": 16121,
    "name": "16121 - SABLONS MAILLOT",
    "address": "ROUTE PORTE DES SABLONS / PORTE MAILLOT - 75016 PARIS",
    "latitude": 48.87872089183019,
    "longitude": 2.270568097209188
  }, {
    "number": 7101,
    "name": "07101 - SEVRES BABYLONE",
    "address": "BOULEVARD RASPAIL - 75007 PARIS",
    "latitude": 48.852241617707335,
    "longitude": 2.326606019476806
  }, {
    "number": 32006,
    "name": "32006 - EGLISE SAINT JUSTE (SAINT DENIS)",
    "address": "AVENUE DU PRESIDENT WILSON / PARKING DE L'EGLISE SAINT JUSTE - 93210 SAINT DENIS",
    "latitude": 48.908586716952485,
    "longitude": 2.358482457792231
  }, {
    "number": 18024,
    "name": "18024 - CLIGNANCOURT MARCADET",
    "address": "105 RUE DE CLIGNANCOURT - 75018 PARIS",
    "latitude": 48.891457726153774,
    "longitude": 2.348636478060487
  }, {
    "number": 20106,
    "name": "20106 - MAIRIE DU 20ÈME",
    "address": "44-46 AVENUE GAMBETTA - 75020 PARIS",
    "latitude": 48.86535224200028,
    "longitude": 2.398946448081101
  }, {
    "number": 16105,
    "name": "16105 - CREVAUX",
    "address": "1 RUE CREVAUX - 75016 PARIS",
    "latitude": 48.870809428669546,
    "longitude": 2.281149007691853
  }, {
    "number": 9025,
    "name": "09025 - TAITBOUT CHÂTEAUDUN",
    "address": "77 RUE TAITBOUT - 75009 PARIS",
    "latitude": 48.876383969379,
    "longitude": 2.335356677933531
  }, {
    "number": 22002,
    "name": "22002 - ARGENSON (NEUILLY)",
    "address": "44 BOULEVARD D'ARGENSON - 92200 NEUILLY",
    "latitude": 48.8886487735565,
    "longitude": 2.263904602692138
  }, {
    "number": 13024,
    "name": "13024 - BOBILLOT TOLBIAC",
    "address": "81 RUE BOBILLOT - 75013 PARIS",
    "latitude": 48.82552586188404,
    "longitude": 2.350205084974572
  }, {
    "number": 9016,
    "name": "09016 - MARTYRS CHORON",
    "address": "24 RUE DE CHORON - 75009 PARIS",
    "latitude": 48.877770695346776,
    "longitude": 2.339784967507022
  }, {
    "number": 9037,
    "name": "09037 - CLICHY PARME",
    "address": "01 RUE DE PARME - 75009 PARIS",
    "latitude": 48.88126642422664,
    "longitude": 2.328197093450571
  }, {
    "number": 9001,
    "name": "09001 - POISSONNIERE",
    "address": "5 RUE DE BELLEFOND - 75009 PARIS",
    "latitude": 48.877501465298494,
    "longitude": 2.348569373385955
  }, {
    "number": 20002,
    "name": "20002 - PIXERECOURT",
    "address": "FACE 65 RUE PIXERECOURT - 75020 PARIS",
    "latitude": 48.8738036229888,
    "longitude": 2.396012223300534
  }, {
    "number": 23009,
    "name": "23009 - FRANCE (LEVALLOIS)",
    "address": "18 RUE ANATOLE FRANCE - 92300 LEVALLOIS-PERRET",
    "latitude": 48.888762777712394,
    "longitude": 2.288136014379512
  }, {
    "number": 19046,
    "name": "19046 - PORTE DE PANTIN",
    "address": "3 PLACE DE LA PORTE DE PANTIN - 75019 PARIS",
    "latitude": 48.8890400680668,
    "longitude": 2.39528946179638
  }, {
    "number": 2017,
    "name": "02017 - CAIRE",
    "address": "40, rue du Caire - 75002 PARIS",
    "latitude": 48.86789,
    "longitude": 2.34925
  }, {
    "number": 19003,
    "name": "19003 - QUAI DE SEINE",
    "address": "3 QUAI DE LA SEINE - 75019 PARIS",
    "latitude": 48.884316180647176,
    "longitude": 2.369829579572023
  }, {
    "number": 14023,
    "name": "14023 - MALAKOFF PINARD",
    "address": "76-78 BOULEVARD ADOLPHE PINARD - 75014 PARIS",
    "latitude": 48.823653480254634,
    "longitude": 2.307766825585275
  }, {
    "number": 15020,
    "name": "15020 - MAIRIE DU 15EME",
    "address": "4 RUE LEON SECHE - 75015 PARIS",
    "latitude": 48.841709640161135,
    "longitude": 2.298549294011849
  }, {
    "number": 11039,
    "name": "11039 - JULES FERRY REPUBLIQUE",
    "address": "FACE 121 BOULEVARD RICHARD LENOIR - 75011 PARIS",
    "latitude": 48.86580427668637,
    "longitude": 2.369337074966926
  }, {
    "number": 19041,
    "name": "19041 - PYRÉNÉES",
    "address": "101 RUE DE BELLEVILLE - 75019 PARIS",
    "latitude": 48.8743491365289,
    "longitude": 2.38609537399646
  }, {
    "number": 17101,
    "name": "17101 - ALEXANDRE CHARPENTIER",
    "address": "FACE 3 RUE ALEXANDRE CHARPENTIER - 75017 PARIS",
    "latitude": 48.88434112466304,
    "longitude": 2.288273752637337
  }, {
    "number": 12018,
    "name": "12018 - SAINT MANDE - FAVRE",
    "address": "5 AVENUE SAINT MANDE - 75012 PARIS",
    "latitude": 48.8456092496701,
    "longitude": 2.395932627208539
  }, {
    "number": 15001,
    "name": "15001 - ARRIVEE",
    "address": "8 RUE DE L'ARRIVEE - 75015 PARIS",
    "latitude": 48.84374888916389,
    "longitude": 2.322451937473582
  }, {
    "number": 33103,
    "name": "33103 - JAURES 2 (PRE SAINT GERVAIS)",
    "address": "34 AVENUE JEAN JAURES - 93310 LE PRE SAINT GERVAIS",
    "latitude": 48.884001264434495,
    "longitude": 2.40798991938787
  }, {
    "number": 13014,
    "name": "13014 - GARE D'AUSTERLITZ",
    "address": "5 BIS BOULEVARD DE L'HOPITAL - 75013 PARIS",
    "latitude": 48.842524490766195,
    "longitude": 2.364044958656523
  }, {
    "number": 20109,
    "name": "20109 - SURMELIN HAXO",
    "address": "2 RUE HAXO - 75020 PARIS",
    "latitude": 48.8694370761222,
    "longitude": 2.40539657537972
  }, {
    "number": 7103,
    "name": "07103 - BELGRADE",
    "address": "2 RUE DE BELGRADE - 75007 PARIS",
    "latitude": 48.856059310074706,
    "longitude": 2.302239128884557
  }, {
    "number": 19013,
    "name": "19013 - LAUMIERE",
    "address": "8 & 1 RUE PETIT - 75019 PARIS",
    "latitude": 48.8845807406891,
    "longitude": 2.38012665025372
  }, {
    "number": 35011,
    "name": "35011 - D'ORVES (PANTIN)",
    "address": "12 RUE HONORE D'ESTIENNE D'ORVES - 93500 PANTIN",
    "latitude": 48.89048461623744,
    "longitude": 2.406498213832891
  }, {
    "number": 14032,
    "name": "14032 - MOUTON DUVERNET - MAIRIE DU 14EME",
    "address": "26 RUE MOUTON DUVERNET - 75014 PARIS",
    "latitude": 48.832501278703454,
    "longitude": 2.325401166692975
  }, {
    "number": 11046,
    "name": "11046 - VOLTAIRE",
    "address": "8 place de la république - 75011 PARIS",
    "latitude": 48.86681,
    "longitude": 2.36547
  }, {
    "number": 4007,
    "name": "04007 - BOURDON",
    "address": "BOULEVARD BOURDON - 75004 PARIS",
    "latitude": 48.8525571174352,
    "longitude": 2.3682407194182
  }, {
    "number": 11031,
    "name": "11031 - PARMENTIER",
    "address": "1 RUE JACQUARD - 75011 PARIS",
    "latitude": 48.86455576531679,
    "longitude": 2.373071507389205
  }, {
    "number": 19021,
    "name": "19021 - MAIRIE DU 19 EME",
    "address": "4 RUE ARMAND CARREL - 75019 PARIS",
    "latitude": 48.88259146668893,
    "longitude": 2.381220610289335
  }, {
    "number": 21014,
    "name": "21014 - HAMEAU FLEURI (BOULOGNE-BILLANCOURT)",
    "address": "FACE AU 12 RUE DU HAMEAU FLEURIE - 92100 BOULOGNE BILLANCOURT",
    "latitude": 48.83142865005039,
    "longitude": 2.241204653436161
  }, {
    "number": 14010,
    "name": "14010 - JEAN MOULIN ALESIA",
    "address": "12 AVENUE JEAN MOULIN - 75014 PARIS",
    "latitude": 48.82742690008254,
    "longitude": 2.325760332846014
  }, {
    "number": 10039,
    "name": "10039 - SAMBRE ET MEUSE",
    "address": "37 RUE SAMBRE ET MEUSE - 75010 PARIS",
    "latitude": 48.87440566621717,
    "longitude": 2.373807237995119
  }, {
    "number": 12110,
    "name": "12110 - BARON LE ROY TRUFFAUT",
    "address": "57-61 RUE DES PIROGUES DE BERCY - 75012 PARIS",
    "latitude": 48.83370863507971,
    "longitude": 2.388556666222385
  }, {
    "number": 15048,
    "name": "15048 - OLIVIER DE SERRE",
    "address": "PLACE AMEDEE GIORDANI - 75015 PARIS",
    "latitude": 48.830545669445776,
    "longitude": 2.292046396699678
  }, {
    "number": 5015,
    "name": "05015 - MOUFFETARD EPEE DE BOIS",
    "address": "12 RUE DE L'EPEE DE BOIS - 75005 PARIS",
    "latitude": 48.841507637390066,
    "longitude": 2.349983047029793
  }, {
    "number": 2001,
    "name": "02001 - SEBASTOPOL-GRENATA",
    "address": "12 RUE GRENETA - 75002 PARIS",
    "latitude": 48.86524062169503,
    "longitude": 2.351669873689939
  }, {
    "number": 7015,
    "name": "07015 - VARENNE",
    "address": "9 BOULEVARD DES INVALIDES - 75007 PARIS",
    "latitude": 48.857290118463105,
    "longitude": 2.31530968318177
  }, {
    "number": 16024,
    "name": "16024 - KENNEDY RANELAGH",
    "address": "4 RUE RANELAGH DEVANT RER - 75016 PARIS",
    "latitude": 48.85293316046699,
    "longitude": 2.280439719992999
  }, {
    "number": 42013,
    "name": "42013 - BARBES (IVRY)",
    "address": "RUE BARBES / AVENUE DE VERDUN - 94200 IVRY SUR SEINE",
    "latitude": 48.81591109646686,
    "longitude": 2.368229729243504
  }, {
    "number": 11036,
    "name": "11036 - JULES FERRY FAUBOURG DU TEMPLE",
    "address": "FACE 28 RUE JULES FERRY - 75011 PARIS",
    "latitude": 48.8684101048247,
    "longitude": 2.36784149724351
  }, {
    "number": 8108,
    "name": "08108 - L'ISLY",
    "address": "10-12 RUE DE L'ISLY - 75008 PARIS",
    "latitude": 48.87482319032095,
    "longitude": 2.325296117814705
  }, {
    "number": 15109,
    "name": "15109 - CEVENNES",
    "address": "65 - 67 RUE DES CEVENNES - 75015 PARIS",
    "latitude": 48.84244145218906,
    "longitude": 2.281070755215898
  }, {
    "number": 5004,
    "name": "05004 - SAINT JACQUES VAL DE GRACE",
    "address": "272 RUE SAINT JACQUES - 75005 PARIS",
    "latitude": 48.84186595652607,
    "longitude": 2.341202026662388
  }, {
    "number": 14012,
    "name": "14012 - SIBELLE ALESIA",
    "address": "FACE 2 AVENUE DE LA SIBELLE - 75014 PARIS",
    "latitude": 48.826703941183546,
    "longitude": 2.338636324158646
  }, {
    "number": 42007,
    "name": "42007 - PIERRE ET MARIE CURIE (IVRY)",
    "address": "Angle Avenue de Verdun et rue Pierre et Marie Curie - 94200 IVRY",
    "latitude": 48.8128905614968,
    "longitude": 2.37065026341858
  }, {
    "number": 8028,
    "name": "08028 - HOUSSAYE",
    "address": "1 RUE ARSENE HOUSSAYE - 75008 PARIS",
    "latitude": 48.873434081397704,
    "longitude": 2.29770677798004
  }, {
    "number": 18110,
    "name": "18110 - DEPARTEMENT",
    "address": "FACE 53 RUE DU DEPARTEMENT - 75018 PARIS",
    "latitude": 48.886665624668375,
    "longitude": 2.36151933793529
  }, {
    "number": 31708,
    "name": "31708 - NOISY (BAGNOLET)",
    "address": "116-118 RUE DE NOISY LE SEC - 93170 BAGNOLET",
    "latitude": 48.874457717241434,
    "longitude": 2.415138092250742
  }, {
    "number": 14112,
    "name": "14112 - FAUBOURG SAINT JACQUES CASSINI",
    "address": "24 RUE MECHAIN - 75014 PARIS",
    "latitude": 48.83586772099485,
    "longitude": 2.33798034198275
  }, {
    "number": 10107,
    "name": "10107 - MAGENTA PARE",
    "address": "9 RUE AMBROISE PARE - 75010 PARIS",
    "latitude": 48.881949743161194,
    "longitude": 2.352339506562677
  }, {
    "number": 23006,
    "name": "23006 - GUESDE (LEVALLOIS)",
    "address": "8 RUE JULES GUESDE - 92300 LEVALLOIS-PERRET",
    "latitude": 48.89086032289106,
    "longitude": 2.295000370135378
  }, {
    "number": 20041,
    "name": "20041 - BELLEVILLE",
    "address": "116 BD DE BELLEVILLE - 75020 PARIS",
    "latitude": 48.87119943139012,
    "longitude": 2.37799433828966
  }, {
    "number": 3014,
    "name": "03014 - GRENIER SAINT LAZARE",
    "address": "FACE 34 RUE GRENIER SAINT LAZARE - 75003 PARIS",
    "latitude": 48.863062832743175,
    "longitude": 2.352839380718154
  }, {
    "number": 3006,
    "name": "03006 - MAIRIE DU 3EME",
    "address": "10 RUE PERREE - 75003 PARIS",
    "latitude": 48.86453080530752,
    "longitude": 2.361579815214986
  }, {
    "number": 42203,
    "name": "42203 - ELUARD (CHARENTON)",
    "address": "FACE AU 7 RUE PAUL ELUARD - 94220 CHARENTON",
    "latitude": 48.82040389400885,
    "longitude": 2.408405472156745
  }, {
    "number": 6026,
    "name": "06026 - SAINT PLACIDE CHERCHE MIDI",
    "address": "28 RUE SAINT PLACIDE - 75006 PARIS",
    "latitude": 48.84913990321828,
    "longitude": 2.325175389412747
  }, {
    "number": 2002,
    "name": "02002 - MONTORGUEIL ETIENNE MARCEL",
    "address": "32 RUE ETIENNE MARCEL - 75002 PARIS",
    "latitude": 48.864582377464885,
    "longitude": 2.346282111667021
  }, {
    "number": 8056,
    "name": "08056 - WAGRAM",
    "address": "21 RUE BEAUJON - 75008 PARIS",
    "latitude": 48.875377647487014,
    "longitude": 2.296555342476269
  }, {
    "number": 5032,
    "name": "05032 - PANTHEON CARMES",
    "address": "2 RUE VALETTE - 75005 PARIS",
    "latitude": 48.846986752813294,
    "longitude": 2.346499653762975
  }, {
    "number": 22010,
    "name": "22010 - DE GAULLE 4 (NEUILLY)",
    "address": "72 AVENUE CHARLES DE GAULLE - 92200 NEUILLY SUR SEINE",
    "latitude": 48.8816744459654,
    "longitude": 2.27117749892451
  }, {
    "number": 16111,
    "name": "16111 - HELIE",
    "address": "4 - 6 rue Faustin Helie - 75016 PARIS",
    "latitude": 48.85940308194,
    "longitude": 2.2765220890277
  }, {
    "number": 14014,
    "name": "14014 - STADE CHARLETY",
    "address": "5 BOULEVARD JOURDAN - 75014 PARIS",
    "latitude": 48.81940130486362,
    "longitude": 2.34337661053354
  }, {
    "number": 12035,
    "name": "12035 - MADAGASCAR",
    "address": "4 RUE DE MADAGASCAR - 75012 PARIS",
    "latitude": 48.834705859741675,
    "longitude": 2.397111552649508
  }, {
    "number": 33005,
    "name": "33005 - REPUBLIQUE 2 (AUBERVILLIERS)",
    "address": "FACE AU 106 AVENUE DE LA REPUBLIQUE - 93300 AUBERVILLIERS",
    "latitude": 48.906383398095834,
    "longitude": 2.3895475019254
  }, {
    "number": 12005,
    "name": "12005 - CROZATIER",
    "address": "74 RUE CROZATIER - 75012 PARIS",
    "latitude": 48.8504400134045,
    "longitude": 2.37890136621104
  }, {
    "number": 15106,
    "name": "15106 - GRENELLE VIOLET (PROP3)",
    "address": "BOULEVARD DE GRENELLE - 75015 PARIS",
    "latitude": 48.849921101862066,
    "longitude": 2.294660575884377
  }, {
    "number": 18043,
    "name": "18043 - BLANCHE",
    "address": "55 BOULEVARD DE CLICHY - 75018 PARIS",
    "latitude": 48.88356474485461,
    "longitude": 2.333418629410461
  }, {
    "number": 17015,
    "name": "17015 - PLACE DE LEVIS",
    "address": "19BIS/21 RUE LEGENDRE - 75017 PARIS",
    "latitude": 48.88368821751221,
    "longitude": 2.313284405397194
  }, {
    "number": 13043,
    "name": "13043 - DUNOIS CLISSON",
    "address": "55 RUE DUNOIS - 75013 PARIS",
    "latitude": 48.832272458639544,
    "longitude": 2.367415866750153
  }, {
    "number": 16007,
    "name": "16007 - LONGCHAMP",
    "address": "4 RUE DE LONGCHAMP - 75016 PARIS",
    "latitude": 48.864910448589,
    "longitude": 2.292519101004145
  }, {
    "number": 13051,
    "name": "13051 - QUAI FRANCOIS MAURIAC TOLBIAC",
    "address": "9 QUAI FRANCOIS MAURIAC - 75013 PARIS",
    "latitude": 48.83264101037033,
    "longitude": 2.37910490091443
  }, {
    "number": 7024,
    "name": "07024 - AVENUE RAPP",
    "address": "43 AVENUE RAPP - 75007 PARIS",
    "latitude": 48.8581690434843,
    "longitude": 2.300528330043888
  }, {
    "number": 23007,
    "name": "23007 - WILSON (LEVALLOIS)",
    "address": "22 RUE DU PRESIDENT WILSON - 92300 LEVALLOIS-PERRET",
    "latitude": 48.890380265413896,
    "longitude": 2.292160482166423
  }, {
    "number": 13104,
    "name": "13104 - GARE D'AUSTERLITZ",
    "address": "FACE 109 QUAI D'AUSTERLITZ - 75013 PARIS",
    "latitude": 48.84379047732037,
    "longitude": 2.365585665575604
  }, {
    "number": 21203,
    "name": "21203 - BRIAND (MONTROUGE)",
    "address": "PLACE JULES FERRY / AVENUE ARISTIDE BRIAND - 92120 MONTROUGE",
    "latitude": 48.81251090819872,
    "longitude": 2.325680623044519
  }, {
    "number": 42011,
    "name": "42011 - BOYER (IVRY)",
    "address": "26 QUAI MARCEL BOYER - 94200 IVRY",
    "latitude": 48.82211534378805,
    "longitude": 2.392850382414293
  }, {
    "number": 5009,
    "name": "05009 - SQUARE VIVIANI",
    "address": "6 RUE DU FOUARRE - 75005 PARIS",
    "latitude": 48.85165117936709,
    "longitude": 2.347463334519655
  }, {
    "number": 1006,
    "name": "01006 - GRANDE TRUANDERIE",
    "address": "2-4 rue DE LA GRANDE TRUANDERIE 75001 PARIS",
    "latitude": 48.86263180415945,
    "longitude": 2.349732144830979
  }, {
    "number": 21208,
    "name": "21208 - CARVES (MONTROUGE)",
    "address": "67 RUE CARVES ANGLE AVENUE HENRI GINOUX - 92120 MONTROUGE",
    "latitude": 48.813080911445375,
    "longitude": 2.319787936689348
  }, {
    "number": 16013,
    "name": "16013 - AVENUE HENRI MARTIN",
    "address": "71 AVENUE HENRI MARTIN - 75016 PARIS",
    "latitude": 48.8640767117056,
    "longitude": 2.276881687006711
  }, {
    "number": 18023,
    "name": "18023 - POISSONNIERS ORDENER",
    "address": "57 RUE ORDENER - 75018 PARIS",
    "latitude": 48.891213890844654,
    "longitude": 2.351288666219873
  }, {
    "number": 23008,
    "name": "23008 - REPUBLIQUE (LEVALLOIS)",
    "address": "PLACE DE LA REPUBLIQUE - 92300 LEVALLOIS",
    "latitude": 48.89319467536488,
    "longitude": 2.288914160056623
  }, {
    "number": 18047,
    "name": "18047 - ST OUEN LAMARCK",
    "address": "53 AVENUE DE SAINT OUEN - 75018 PARIS",
    "latitude": 48.891083040295555,
    "longitude": 2.326735694839291
  }, {
    "number": 13028,
    "name": "13028 - GOUTHIERE",
    "address": "12 RUE GOUTHIERE - 75013 PARIS",
    "latitude": 48.820507,
    "longitude": 2.351342
  }, {
    "number": 3005,
    "name": "03005 - TURBIGO SAINTE ELISABETH",
    "address": "7 RUE SAINTE ELISABETH - 75003 PARIS",
    "latitude": 48.866137224583404,
    "longitude": 2.359661143626467
  }, {
    "number": 18031,
    "name": "18031 - ALBERT KAHN",
    "address": "67 RUE CHAMPIONNET - 75018 PARIS",
    "latitude": 48.8957969797804,
    "longitude": 2.345585584134864
  }, {
    "number": 19007,
    "name": "19007 - OURCQ-FLANDRES",
    "address": "139 AVENUE DE FLANDRE - 75019 PARIS",
    "latitude": 48.89270999207067,
    "longitude": 2.379199748024915
  }, {
    "number": 15104,
    "name": "15104 - HÔPITAL GEORGES POMPIDOU (PROP 2)",
    "address": "FACE 66 - 70 RUE LEBLANC - 75015 PARIS",
    "latitude": 48.837679003308445,
    "longitude": 2.275730609312381
  }, {
    "number": 12023,
    "name": "12023 - SAHEL",
    "address": "15 AVENUE EMILE LAURENT - 75012 PARIS",
    "latitude": 48.840762277598394,
    "longitude": 2.41052344083499
  }, {
    "number": 20028,
    "name": "20028 - GAMBETTA MARTIN NADAUD",
    "address": "FACE 2 RUE ORFILA - 75020 PARIS",
    "latitude": 48.86518641284941,
    "longitude": 2.394468581137673
  }, {
    "number": 31009,
    "name": "31009 - DE GAULLE (MONTREUIL)",
    "address": "13/15 PLACE DU GENERAL DE GAULLE - 93100 MONTREUIL",
    "latitude": 48.8688123638694,
    "longitude": 2.43297479522392
  }, {
    "number": 13002,
    "name": "13002 - ARAGO",
    "address": "55 BD ARAGO - 75013 PARIS",
    "latitude": 48.83486717959749,
    "longitude": 2.344575141243577
  }, {
    "number": 13004,
    "name": "13004 - GLACIERE",
    "address": "88 BOULEVARD AUGUSTE BLANQUI (SUR TPC) - 75013 PARIS",
    "latitude": 48.83062407509372,
    "longitude": 2.345429456645987
  }, {
    "number": 8011,
    "name": "08011 - DUBLIN",
    "address": "1 RUE CLAPEYRON - 75008 PARIS",
    "latitude": 48.88093535677379,
    "longitude": 2.324516635146477
  }, {
    "number": 20103,
    "name": "20103 - LE VAU BERTEAUX",
    "address": "24 RUE LE VAU - 75020 PARIS",
    "latitude": 48.86803439043193,
    "longitude": 2.411030612453627
  }, {
    "number": 42205,
    "name": "42205 - PARIS 1 (CHARENTON)",
    "address": "89 RUE DE PARIS - 94220 CHARENTON",
    "latitude": 48.82214312580457,
    "longitude": 2.412602786467704
  }, {
    "number": 1019,
    "name": "01019 - SAINT HONORE VENDOME",
    "address": "237 RUE SAINT HONORE - 75001 PARIS",
    "latitude": 48.866698008473534,
    "longitude": 2.328288185716643
  }, {
    "number": 12022,
    "name": "12022 - BIZOT",
    "address": "FACE 29 RUE DU SAHEL - 75012 PARIS",
    "latitude": 48.84089981382828,
    "longitude": 2.404380102963422
  }, {
    "number": 19020,
    "name": "19020 - MANIN HAUTPOUL",
    "address": "4-6 RUE GOUBET - 75019 PARIS",
    "latitude": 48.88466206560529,
    "longitude": 2.390209687445294
  }, {
    "number": 14030,
    "name": "14030 - LOSSERAND - PERNETY",
    "address": "61 RUE PERNETY - 75014 PARIS",
    "latitude": 48.83425462795304,
    "longitude": 2.317609339386963
  }, {
    "number": 7026,
    "name": "07026 - PLACE DE FINLANDE",
    "address": "39 QUAI D'ORSAY - 75007 PARIS",
    "latitude": 48.86269,
    "longitude": 2.31138
  }, {
    "number": 21704,
    "name": "21704 - REPUBLIQUE (VANVES)",
    "address": "2 RUE DE LA REPUBLIQUE - 92170 VANVES",
    "latitude": 48.8217026998931,
    "longitude": 2.285395624828388
  }, {
    "number": 44102,
    "name": "44102 - VERDUN (SAINT MAURICE)",
    "address": "14 avenue de Verdun - 94410 SAINT MAURICE",
    "latitude": 48.822175804937544,
    "longitude": 2.421504476062366
  }, {
    "number": 9003,
    "name": "09003 - PLACE BARBÈS",
    "address": "PLACE BARBES - 75009 PARIS",
    "latitude": 48.8836531972476,
    "longitude": 2.349040855034395
  }, {
    "number": 21209,
    "name": "21209 - GEORGES MESSIER (MONTROUGE)",
    "address": "35 RUE MOLIERE - 92120 MONTROUGE",
    "latitude": 48.811101837772526,
    "longitude": 2.314629747784999
  }, {
    "number": 22008,
    "name": "22008 - DE GAULLE (NEUILLY)",
    "address": "153 BIS AVENUE CHARLES DE GAULLE - 92200 NEUILLY SUR SEINE",
    "latitude": 48.882951625354735,
    "longitude": 2.265135008741844
  }, {
    "number": 42202,
    "name": "42202 - RONSARD (CHARENTON)",
    "address": "1 RUE  KENNEDY / ALLEE RONSARD - 94220 CHARENTON",
    "latitude": 48.822736012097714,
    "longitude": 2.405659203207511
  }, {
    "number": 13033,
    "name": "13033 - PORTE D'ITALIE",
    "address": "15 AVENUE DE LA PORTE D'ITALIE - 75013 PARIS",
    "latitude": 48.817312300431965,
    "longitude": 2.360218480943566
  }, {
    "number": 17032,
    "name": "17032 - ESPACE CHAMPERRET",
    "address": "12 RUE JEAN OESTREICHER - 75017 PARIS",
    "latitude": 48.88657099335245,
    "longitude": 2.288612344984025
  }, {
    "number": 11016,
    "name": "11016 - PHILIPPE AUGUSTE",
    "address": "5 RUE DU PASSAGE PHILIPPE AUGUSTE - 75011 PARIS",
    "latitude": 48.8518182000139,
    "longitude": 2.393255376309212
  }, {
    "number": 5033,
    "name": "05033 - SAINT SEVERIN",
    "address": "42 RUE SAINT SEVERIN - 75005 PARIS",
    "latitude": 48.852705647705136,
    "longitude": 2.344137763245671
  }, {
    "number": 12108,
    "name": "12108 - BERCY",
    "address": "FACE AU N°16 BOULEVARD DE BERCY - 75012 PARIS",
    "latitude": 48.84002,
    "longitude": 2.37862
  }, {
    "number": 34007,
    "name": "34007 - ROSIERS (SAINT OUEN)",
    "address": "43-45 RUE BLANQUI / RUE DES ROSIERS - 93400 SAINT OUEN",
    "latitude": 48.905362251416825,
    "longitude": 2.33738964850196
  }, {
    "number": 19102,
    "name": "19102 - BELLEVILLE RAMPAL",
    "address": "4 RUE DE RAMPAL - 75019 PARIS",
    "latitude": 48.87315262385819,
    "longitude": 2.379855610627962
  }, {
    "number": 16116,
    "name": "16116 - GEORGES SAND",
    "address": "23 rue Georges Sand - 75016 PARIS",
    "latitude": 48.84986918764119,
    "longitude": 2.268257387525699
  }, {
    "number": 41103,
    "name": "41103 - BRIAND (ARCUEIL)",
    "address": "AVENUE ARISTIDE BRIAND (CARREFOUR VACHE NOIRE) - 94110 ARCUEIL",
    "latitude": 48.8104231700653,
    "longitude": 2.326969764620641
  }, {
    "number": 12020,
    "name": "12020 - COURS DE VINCENNES - BD SOULT",
    "address": "FACE 118 COURS DE VINCENNES - 75012 PARIS",
    "latitude": 48.84698906998311,
    "longitude": 2.410145496563922
  }, {
    "number": 42002,
    "name": "42002 - GARE (IVRY)",
    "address": "VIS-A-VIS DU 17 RUE DE LA GARE - 94200 IVRY SUR SEINE",
    "latitude": 48.81492646724632,
    "longitude": 2.392001635824925
  }, {
    "number": 21309,
    "name": "21309 - CRESSON 2 (ISSY LES MOULINEAUX)",
    "address": "1 BIS AVENUE VICTOR CRESSON - 92130 ISSY LES MOULINEAUX",
    "latitude": 48.82371847766811,
    "longitude": 2.272254454061792
  }, {
    "number": 904,
    "name": "00904 - PLACE JOFFRE / ECOLE MILITAIRE",
    "address": "ECOLE MILITAIRE-AVENUE DE LA MOTTE PICQUET - 75007 PARIS",
    "latitude": 48.85213620522547,
    "longitude": 2.301961227213259
  }, {
    "number": 35010,
    "name": "35010 - GERVAIS (PANTIN)",
    "address": "1-3 RUE DU PRE SAINT GERVAIS - 93500 PANTIN",
    "latitude": 48.8910789762746,
    "longitude": 2.402775519686335
  }, {
    "number": 4001,
    "name": "04001 - NOTRE DAME",
    "address": "10 RUE D'ARCOLE - 75004 PARIS",
    "latitude": 48.85398414441304,
    "longitude": 2.349380045291025
  }, {
    "number": 16026,
    "name": "16026 - RANELAGH",
    "address": "91 RUE DU RANELAGH - 75016 PARIS",
    "latitude": 48.855484883720074,
    "longitude": 2.270408657395703
  }, {
    "number": 43010,
    "name": "43010 - JARRY (VINCENNES)",
    "address": "139 RUE DE LA JARRY - 94300 VINCENNES",
    "latitude": 48.849744956976856,
    "longitude": 2.451960306308826
  }, {
    "number": 15012,
    "name": "15012 - MADEMOISELLE",
    "address": "76 RUE CAMBRONNE - 75015 PARIS",
    "latitude": 48.843277330035214,
    "longitude": 2.30230766886348
  }, {
    "number": 35002,
    "name": "35002 - JAURES 2 (PANTIN)",
    "address": "130 RUE JEAN JAURES - 93500 PANTIN",
    "latitude": 48.907226012664125,
    "longitude": 2.396129200445667
  }, {
    "number": 10038,
    "name": "10038 - COLONEL FABIEN",
    "address": "69 RUE DE LA GRANGE AUX BELLES - 75010 PARIS",
    "latitude": 48.87752002849063,
    "longitude": 2.369791245076398
  }, {
    "number": 14025,
    "name": "14025 - JACQUIER",
    "address": "10 RUE JACQUIER - 75014 PARIS",
    "latitude": 48.829570404732145,
    "longitude": 2.318353021413872
  }, {
    "number": 9031,
    "name": "09031 - PROVENCE",
    "address": "69 RUE DE PROVENCE - 75009 PARIS",
    "latitude": 48.87428447542072,
    "longitude": 2.332976511564311
  }, {
    "number": 1004,
    "name": "01004 - MARGUERITE DE NAVARRE",
    "address": "12 RUE DES HALLES - 75001 PARIS",
    "latitude": 48.859896314441485,
    "longitude": 2.346756667548724
  }, {
    "number": 4021,
    "name": "04021 - BEAUBOURG RAMBUTEAU",
    "address": "49 RUE RAMBUTEAU - 75004 PARIS",
    "latitude": 48.861419072223185,
    "longitude": 2.35258144286207
  }, {
    "number": 20034,
    "name": "20034 - SORBIER - MÉNILMONTANT",
    "address": "1 RUE SORBIER - 75020 PARIS",
    "latitude": 48.8685264710698,
    "longitude": 2.389795409535456
  }, {
    "number": 20024,
    "name": "20024 - GAMBETTA - PÈRE LACHAISE",
    "address": "11 RUE MALTE BRUN - 75020 PARIS",
    "latitude": 48.864295696165875,
    "longitude": 2.398228667282044
  }, {
    "number": 42010,
    "name": "42010 - ROBESPIERRE (IVRY)",
    "address": "1 RUE ROBESPIERRE - 94200 IVRY",
    "latitude": 48.81084586456464,
    "longitude": 2.383950863420485
  }, {
    "number": 21205,
    "name": "21205 - JAURES 2 (MONTROUGE)",
    "address": "AVENUE JEAN JAURES / RUE ROGER SALENGERO - 92120 MONTROUGE",
    "latitude": 48.81386296358667,
    "longitude": 2.306943605660779
  }, {
    "number": 18105,
    "name": "18105 - BELIARD POISSONNIERS",
    "address": "157 BIS-159 RUE DES POISSONNIERS - 75018 PARIS",
    "latitude": 48.89740678787196,
    "longitude": 2.352526659355508
  }, {
    "number": 6018,
    "name": "06018 - MICHELET ASSAS",
    "address": "13 RUE MICHELET - 75006 PARIS",
    "latitude": 48.84254096604404,
    "longitude": 2.335067885565505
  }, {
    "number": 20009,
    "name": "20009 - DOCTEUR DEJERINE",
    "address": "RUE DES DOCTEURS DEJERINE - 75020 PARIS",
    "latitude": 48.85402328452585,
    "longitude": 2.412058016605679
  }, {
    "number": 31007,
    "name": "31007 - PARIS 1 (MONTREUIL)",
    "address": "56 RUE DE PARIS - 93100 MONTREUIL",
    "latitude": 48.857477789996096,
    "longitude": 2.432569781846518
  }, {
    "number": 15122,
    "name": "15122 - PLACE CHARLES VALLIN",
    "address": "PLACE CHARLES VALLIN - 75015 PARIS",
    "latitude": 48.835524753591024,
    "longitude": 2.302621940941139
  }, {
    "number": 16020,
    "name": "16020 - PORTE DE PASSY",
    "address": "1 PLACE DE LA PORTE DE PASSY - 75016 PARIS",
    "latitude": 48.85738212799326,
    "longitude": 2.264277072081002
  }, {
    "number": 21706,
    "name": "21706 - BLEUZEN (VANVES)",
    "address": "74 RUE JEAN BLEUZEN - 92170 VANVES",
    "latitude": 48.82330323408161,
    "longitude": 2.296506343553357
  }, {
    "number": 5001,
    "name": "05001 - SAINT GERMAIN HARPE",
    "address": "32 RUE DE LA HARPE - 75005 PARIS",
    "latitude": 48.851581340028176,
    "longitude": 2.343704536722773
  }, {
    "number": 16008,
    "name": "16008 - GALILEE KLEBER",
    "address": "1 RUE GALILEE - 75016 PARIS",
    "latitude": 48.86741186571367,
    "longitude": 2.290781380114821
  }, {
    "number": 18020,
    "name": "18020 - RUISSEAU",
    "address": "31 RUE FRANCOEUR - 75018 PARIS",
    "latitude": 48.89104123261663,
    "longitude": 2.340014585442034
  }, {
    "number": 4011,
    "name": "04011 - PLACE DU BATAILLON FRANCAIS DE L'ONU",
    "address": "FACE 18 RUE DE L'HOTEL DE VILLE - 75004 PARIS",
    "latitude": 48.85381414531594,
    "longitude": 2.357092654363953
  }, {
    "number": 22403,
    "name": "22403 - BROSSOLETTE (MALAKOFF)",
    "address": "FACE 35 AVENUE PIERRE BROSSOLETTE - 92240 MALAKOFF",
    "latitude": 48.82183564791793,
    "longitude": 2.313458608254228
  }, {
    "number": 8007,
    "name": "08007 - HAUSSMANN ROME",
    "address": "1 RUE DE ROME - 75008 PARIS",
    "latitude": 48.874230055580306,
    "longitude": 2.325570111724113
  }, {
    "number": 19103,
    "name": "19103 - MANIN CARRIERES",
    "address": "139 RUE MANIN - 75019 PARIS",
    "latitude": 48.88477085803391,
    "longitude": 2.392093119901052
  }, {
    "number": 34004,
    "name": "34004 - VOLTAIRE (SAINT OUEN)",
    "address": "1 RUE VOLTAIRE - 93400 SAINT OUEN",
    "latitude": 48.90249976045801,
    "longitude": 2.342248144661283
  }, {
    "number": 8038,
    "name": "08038 - FRANCOIS 1 ER",
    "address": "22 RUE FRANCOIS 1ER - 75008 PARIS",
    "latitude": 48.866887649978096,
    "longitude": 2.306675575720671
  }, {
    "number": 8010,
    "name": "08010 - LIEGE",
    "address": "22 RUE DE LIEGE - 75008 PARIS",
    "latitude": 48.879581165638115,
    "longitude": 2.326427352474812
  }, {
    "number": 13041,
    "name": "13041 - PORTE D'IVRY",
    "address": "4 AVENUE D'IVRY - 75013 PARIS",
    "latitude": 48.82196244101745,
    "longitude": 2.368528699972122
  }, {
    "number": 4019,
    "name": "04019 - BEAUBOURG SAINT MERRY",
    "address": "4 RUE DU CLOITRE SAINT MERRI - 75004 PARIS",
    "latitude": 48.858828988192535,
    "longitude": 2.35189147061665
  }, {
    "number": 19030,
    "name": "19030 - MOSELLE JAURES",
    "address": "6 PASSAGE DE MELUN - 75019 PARIS",
    "latitude": 48.883777,
    "longitude": 2.376515
  }, {
    "number": 16003,
    "name": "16003 - ANDRE MAUROIS",
    "address": "2 BIS BOULEVARD ANDRE MAUROIS - 75016 PARIS",
    "latitude": 48.87793081716105,
    "longitude": 2.278959824969939
  }, {
    "number": 21702,
    "name": "21702 - BASCH (VANVES)",
    "address": "6 AVENUE VICTOR BASCH - 92170 VANVES",
    "latitude": 48.81893986428991,
    "longitude": 2.291959872467908
  }, {
    "number": 15046,
    "name": "15046 - GEORGES BRASSENS",
    "address": "42 RUE DES MORILLONS - 75015 PARIS",
    "latitude": 48.832207345184806,
    "longitude": 2.302328737691185
  }, {
    "number": 6002,
    "name": "06002 - SAINT PÈRES",
    "address": "1 RUE SAINT BENOIT - 75006 PARIS",
    "latitude": 48.85549998439073,
    "longitude": 2.333445220031193
  }, {
    "number": 19036,
    "name": "19036 - HOPITAL ROBERT DEBRE",
    "address": "AV DE LA PTE DU PRES SAINT GERVAIS / ANGLE BD D'ALGERIE - 75019 PARIS",
    "latitude": 48.879930415528435,
    "longitude": 2.400950502014892
  }, {
    "number": 1013,
    "name": "01013 - SAINT HONORE",
    "address": "186 RUE SAINT HONORE - 75001 PARIS",
    "latitude": 48.86243023476397,
    "longitude": 2.338520131151779
  }, {
    "number": 14034,
    "name": "14034 - RUE DE L OUEST CHATEAU",
    "address": "48 RUE DE L'OUEST - 75014 PARIS",
    "latitude": 48.83617286014242,
    "longitude": 2.319392143923804
  }, {
    "number": 12037,
    "name": "12037 - DAUMESNIL",
    "address": "53 BOULEVARD DE REUILLY - 75012 PARIS",
    "latitude": 48.8394854026542,
    "longitude": 2.397212376289136
  }, {
    "number": 31005,
    "name": "31005 - PARIS 2  (MONTREUIL)",
    "address": "127/129 RUE DE PARIS - 93100 MONTREUIL",
    "latitude": 48.85628451618644,
    "longitude": 2.426434490609822
  }, {
    "number": 4017,
    "name": "04017 - PLACE DE L'HOTEL DE VILLE",
    "address": "11 PLACE DE L'HOTEL DE VILLE - 75004 PARIS",
    "latitude": 48.857232,
    "longitude": 2.351621
  }, {
    "number": 21705,
    "name": "21705 - HUGO (VANVES)",
    "address": "11 AVENUE VICTOR HUGO - 92170 VANVES",
    "latitude": 48.823599644256994,
    "longitude": 2.288819729513169
  }, {
    "number": 4010,
    "name": "04010 - SAINT PAUL PAVÉE",
    "address": "105-109 TERRE PLEIN SAINT PAUL - 75004 PARIS",
    "latitude": 48.855023999040945,
    "longitude": 2.361203538755455
  }, {
    "number": 17003,
    "name": "17003 - JACQUES KELLNER",
    "address": "4-6 RUE JACQUES KELLNER - 75017 PARIS",
    "latitude": 48.895809485802886,
    "longitude": 2.327897409164145
  }, {
    "number": 8104,
    "name": "08104 - FRIEDLAND CHATEAUBRIAND",
    "address": "27/31 RUE DE CHATEAUBRIAND - 75008 PARIS",
    "latitude": 48.8740144756374,
    "longitude": 2.29991625786582
  }, {
    "number": 7017,
    "name": "07017 - LA TOUR MAUBOURG",
    "address": "1 AVENUE DE LA MOTTE PICQUET - 75007 PARIS",
    "latitude": 48.85727649829621,
    "longitude": 2.310257927534994
  }, {
    "number": 23011,
    "name": "23011 - BINEAU (LEVALLOIS)",
    "address": "16 BOULEVARD BINEAU - 92300 LEVALLOIS-PERRET",
    "latitude": 48.88668137249892,
    "longitude": 2.284023691218167
  }, {
    "number": 15043,
    "name": "15043 - BRANCION",
    "address": "122 RUE BRANCION - 75015 PARIS",
    "latitude": 48.8290542164508,
    "longitude": 2.301417436043831
  }, {
    "number": 13123,
    "name": "13123 - BIBLIOTHÈQUE FRANÇOIS MITTERAND",
    "address": "53 QUAI FRANCOIS MAURIAC - 75013 PARIS",
    "latitude": 48.83505071580454,
    "longitude": 2.376068100310425
  }, {
    "number": 20005,
    "name": "20005 - RUE DE LAGNY SAINT MANDE",
    "address": "2 RUE REYNALDO HAHN - 75020 PARIS",
    "latitude": 48.849266043601794,
    "longitude": 2.412330328844772
  }, {
    "number": 18007,
    "name": "18007 - GOUTTE D' OR",
    "address": "65 RUE DE LA GOUTTE D'OR - 75018 PARIS",
    "latitude": 48.88519800938002,
    "longitude": 2.349941991688297
  }, {
    "number": 15044,
    "name": "15044 - J DUPRE",
    "address": "65 RUE DANTZIG - 75015 PARIS",
    "latitude": 48.83026939028785,
    "longitude": 2.296008076086666
  }, {
    "number": 32604,
    "name": "32604 - KOCK (LES LILAS)",
    "address": "FACE 3 AVENUE PAUL DE KOCK - 93260 LES LILAS",
    "latitude": 48.8812154273023,
    "longitude": 2.42020915533382
  }, {
    "number": 15002,
    "name": "15002 - BOURDELLE",
    "address": "26 AVENUE DU MAINE - 75015 PARIS",
    "latitude": 48.84308531746595,
    "longitude": 2.320263946784738
  }, {
    "number": 15005,
    "name": "15005 - PLACE TREFOUEL",
    "address": "FACE 24 BOULEVARD PASTEUR - 75015 PARIS",
    "latitude": 48.84265080464087,
    "longitude": 2.312727390214462
  }, {
    "number": 10026,
    "name": "10026 - CHATEAU LANDON",
    "address": "2 RUE DE CHATEAU LANDON - 75010 PARIS",
    "latitude": 48.879305,
    "longitude": 2.362424
  }, {
    "number": 13052,
    "name": "13052 - TOLBIAC LERREDE",
    "address": "2 RUE LEREDDE - 75013 PARIS",
    "latitude": 48.8289747443296,
    "longitude": 2.37433200085619
  }, {
    "number": 14018,
    "name": "14018 - PORTE D'ORLEANS",
    "address": "6 PLACE DU 25 AOUT 1944 - 75014 PARIS",
    "latitude": 48.8228575017159,
    "longitude": 2.325042670917036
  }, {
    "number": 15068,
    "name": "15068 - BOULEVARD VICTOR",
    "address": "FACE 5 BOULEVARD MARTIAL VALIN - 75015 PARIS",
    "latitude": 48.838171310248995,
    "longitude": 2.270338379746369
  }, {
    "number": 15063,
    "name": "15063 - SAINT CHARLES - CONVENTION",
    "address": "59 RUE DE LA CONVENTION - 75015 PARIS",
    "latitude": 48.84329535889522,
    "longitude": 2.283209000018466
  }, {
    "number": 31703,
    "name": "31703 - CARNOT (BAGNOLET)",
    "address": "177 RUE SADI CARNOT - 93170 BAGNOLET",
    "latitude": 48.8752669984009,
    "longitude": 2.4236494905184
  }, {
    "number": 21001,
    "name": "21001 - TRANSVAL (BOULOGNE-BILLANCOURT)",
    "address": "11 RUE DU TRANSVAL - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.84829980953699,
    "longitude": 2.237570110207174
  }, {
    "number": 6010,
    "name": "06010 - MONTPARNASSE CHEVREUSE",
    "address": "5 RUE DE CHEVREUSE - 75006 PARIS",
    "latitude": 48.841739161230905,
    "longitude": 2.331552216736739
  }, {
    "number": 8018,
    "name": "08018 - SAINT AUGUSTIN",
    "address": "18 PLACE HENRI BERGSON - 75008 PARIS",
    "latitude": 48.876201162155006,
    "longitude": 2.319793923972548
  }, {
    "number": 43003,
    "name": "43003 - PARIS 2 (VINCENNES)",
    "address": "104 AVENUE DE PARIS - 94300 VINCENNES",
    "latitude": 48.845719900926,
    "longitude": 2.427406302761393
  }, {
    "number": 15023,
    "name": "15023 - LA MOTTE PIQUET",
    "address": "146 BOULEVARD GRENELLE - 75015 PARIS",
    "latitude": 48.848656315905245,
    "longitude": 2.299244076945987
  }, {
    "number": 5023,
    "name": "05023 - PLACE JUSSIEU",
    "address": "13 RUE JUSSIEU - 75005 PARIS",
    "latitude": 48.845616878509624,
    "longitude": 2.355745499998791
  }, {
    "number": 41602,
    "name": "41602 - DIGEON (SAINT MANDE)",
    "address": "PLACE CHARLES DIGEON - 94160 SAINT MANDE",
    "latitude": 48.84354695991566,
    "longitude": 2.418317476567148
  }, {
    "number": 21202,
    "name": "21202 - BARBES (MONTROUGE)",
    "address": "16 RUE BARBES - 92120 MONTROUGE",
    "latitude": 48.8172449116699,
    "longitude": 2.32750599924383
  }, {
    "number": 20001,
    "name": "20001 - PLACE DE LA NATION",
    "address": "1 COURS DE VINCENNES - 75020 PARIS",
    "latitude": 48.848364667776785,
    "longitude": 2.399762385981272
  }, {
    "number": 5030,
    "name": "05030 - SORBONNE",
    "address": "5 RUE DE LA SORBONNE - 75005 PARIS",
    "latitude": 48.849770370603345,
    "longitude": 2.343573575733007
  }, {
    "number": 22003,
    "name": "22003 - BEFFROY (NEUILLY)",
    "address": "3 RUE BEFFROY - 92200 NEUILLY",
    "latitude": 48.886704983104785,
    "longitude": 2.261263518031739
  }, {
    "number": 10011,
    "name": "10011 - BOURSE DU TRAVAIL",
    "address": "3 RUE DU CHATEAU D'EAU - 75010 PARIS",
    "latitude": 48.86909174869475,
    "longitude": 2.362261761814593
  }, {
    "number": 19037,
    "name": "19037 - PORTE DES LILAS",
    "address": "304 RUE DE BELLEVILLE - 75019 PARIS",
    "latitude": 48.87660391892763,
    "longitude": 2.404769691129476
  }, {
    "number": 21103,
    "name": "21103 - HUGO (CLICHY)",
    "address": "94-98 BOULEVARD VICTOR HUGO - 92110 CLICHY",
    "latitude": 48.90146015675393,
    "longitude": 2.31712992065507
  }, {
    "number": 19008,
    "name": "19008 - CORENTIN CARIOU",
    "address": "177 AVENUE DE FLANDRE - 75019 PARIS",
    "latitude": 48.89465024997023,
    "longitude": 2.381868729508476
  }, {
    "number": 42704,
    "name": "42704 - ROSSEL (LE KREMLIN BICETRE)",
    "address": "RUE ROSSEL / AVENUE DE LA CONVENTION - 94270 LE KREMLIN BICETRE",
    "latitude": 48.81201281428704,
    "longitude": 2.35697189328747
  }, {
    "number": 13109,
    "name": "13109 - BRILLAT SAVARIN",
    "address": "16 RUE BRILLAT SAVARIN - 75013 PARIS",
    "latitude": 48.822203096341305,
    "longitude": 2.350422032913929
  }, {
    "number": 7016,
    "name": "07016 - TOUR MAUBOURG UNIVERSITE",
    "address": "13 RUE SURCOUF - 75007 PARIS",
    "latitude": 48.861273016278126,
    "longitude": 2.309453550914185
  }, {
    "number": 15022,
    "name": "15022 - ZOLA",
    "address": "143 AVENUE EMILE ZOLA - 75015 PARIS",
    "latitude": 48.84709868413047,
    "longitude": 2.296238450505518
  }, {
    "number": 9011,
    "name": "09011 - FOLIES BERGERES",
    "address": "14 RUE GEOFFROY MARIE - 75009 PARIS",
    "latitude": 48.873781940593325,
    "longitude": 2.344513876337893
  }, {
    "number": 17020,
    "name": "17020 - NICARAGUA",
    "address": "49 RUE JOUFFROY D'ABBANS - 75017 PARIS",
    "latitude": 48.885069943671056,
    "longitude": 2.307083216664497
  }, {
    "number": 3002,
    "name": "03002 - SAINT GILLES",
    "address": "26 RUE SAINT GILLES - 75003 PARIS",
    "latitude": 48.85815895677863,
    "longitude": 2.364714992099186
  }, {
    "number": 18008,
    "name": "18008 - SQUARE LEON",
    "address": "FACE 36 RUE CAVE - 75018 PARIS",
    "latitude": 48.886667026375136,
    "longitude": 2.353213071624058
  }, {
    "number": 35005,
    "name": "35005 - GENERAL LECLERC (PANTIN)",
    "address": "QUAI DE L'AISNE/AVENUE DU GENERAL LECLERC 93500 PANTIN",
    "latitude": 48.89571394982448,
    "longitude": 2.400571894427273
  }, {
    "number": 11007,
    "name": "11007 - FAIDHERBE PALAIS DE LA FEMME",
    "address": "17 RUE JEAN MACE - 75011 PARIS",
    "latitude": 48.85328931895065,
    "longitude": 2.383041177204182
  }, {
    "number": 14003,
    "name": "14003 - RASPAIL SCHOELCHER",
    "address": "2 RUE VICTOR SCHOELCHER - 75014 PARIS",
    "latitude": 48.836850815842105,
    "longitude": 2.331303600860387
  }, {
    "number": 20026,
    "name": "20026 - PELLEPORT",
    "address": "121 AVENUE GAMBETTA - 75020 PARIS",
    "latitude": 48.867925154026736,
    "longitude": 2.400976623546542
  }, {
    "number": 13102,
    "name": "13102 - LA PITIE-SALPETRIERE",
    "address": "47-83 BOULEVARD DE L'HOPITAL (Allée de la grille) - 75013 PARIS",
    "latitude": 48.83742,
    "longitude": 2.36506
  }, {
    "number": 7005,
    "name": "07005 - BAC",
    "address": "FACE 2 BOULEVARD RASPAIL - 75007 PARIS",
    "latitude": 48.85546173595601,
    "longitude": 2.325681935889154
  }, {
    "number": 19110,
    "name": "19110 - MACDONALD",
    "address": "180 Boulevard Macdonald - 75019 PARIS",
    "latitude": 48.89869,
    "longitude": 2.3755
  }, {
    "number": 15126,
    "name": "15126 - RENAN",
    "address": "Avenue ERNEST RENAN / PARC DES EXPOSITIONS - 75015 PARIS",
    "latitude": 48.8311001872726,
    "longitude": 2.28538759483169
  }, {
    "number": 13013,
    "name": "13013 - SAINT MARCEL",
    "address": "3 BD SAINT MARCEL - 75013 PARIS",
    "latitude": 48.83950442458303,
    "longitude": 2.360989417022932
  }, {
    "number": 42206,
    "name": "42206 - PARIS 2 (CHARENTON)",
    "address": "111 RUE DE PARIS - 94220 CHARENTON",
    "latitude": 48.823784089670774,
    "longitude": 2.410013540400843
  }, {
    "number": 7002,
    "name": "07002 - VANEAU",
    "address": "86 RUE VANEAU - 75007 PARIS",
    "latitude": 48.84857760756107,
    "longitude": 2.320417393123817
  }, {
    "number": 14015,
    "name": "14015 - CITE UNIVERSITAIRE",
    "address": "FACE 15 BOULEVARD JOURDAN - 75014 PARIS",
    "latitude": 48.820150107758145,
    "longitude": 2.339926428187734
  }, {
    "number": 11112,
    "name": "11112 - CHARONNES VALLES",
    "address": "22 RUE JULES VALLES - 75011 PARIS",
    "latitude": 48.854304177811706,
    "longitude": 2.38488615344003
  }, {
    "number": 35007,
    "name": "35007 - DELESSERT (PANTIN)",
    "address": "1 RUE  BENJAMIN DELESSERT - 93500 PANTIN",
    "latitude": 48.89394371318989,
    "longitude": 2.418029659686782
  }, {
    "number": 21306,
    "name": "21306 - LAFAYETTE (ISSY LES MOULINEAUX)",
    "address": "PLACE LAFAYETTE - 92130 ISSY LES MOULINEAUX",
    "latitude": 48.829743387678306,
    "longitude": 2.263816341546103
  }, {
    "number": 19113,
    "name": "19113 - PRE ST GERVAIS",
    "address": "27 RUE DU PRE SAINT GERVAIS - 75019 PARIS",
    "latitude": 48.87792341192515,
    "longitude": 2.395985553624166
  }, {
    "number": 42016,
    "name": "42016 - CURIE (IVRY)",
    "address": "1 BIS RUE PIERRE ET MARIE CURIE - 94200 IVRY",
    "latitude": 48.81584739281451,
    "longitude": 2.376943795472109
  }, {
    "number": 31701,
    "name": "31701 - BERTON (BAGNOLET)",
    "address": "3 RUE RAOUL BERTON - 93170 BAGNOLET",
    "latitude": 48.868453299036005,
    "longitude": 2.417816934736978
  }, {
    "number": 16039,
    "name": "16039 - VERSAILLES EXELMANS",
    "address": "27 BOULEVARD EXELMANS - 75016 PARIS",
    "latitude": 48.84096295264689,
    "longitude": 2.264394118075111
  }, {
    "number": 7019,
    "name": "07019 - ECOLE MILITAIRE",
    "address": "85 AVENUE BOSQUET - 75007 PARIS",
    "latitude": 48.85495116800671,
    "longitude": 2.305478634195716
  }, {
    "number": 5105,
    "name": "05105 - GEOFFROY SAINT HILAIRE",
    "address": "8 RUE GEOFFROY SAINT HILAIRE - 75005 PARIS",
    "latitude": 48.83907826424974,
    "longitude": 2.356877340669728
  }, {
    "number": 12115,
    "name": "12115 - PORTE DE VINCENNES",
    "address": "22 AVENUE DE LA PORTE DE VINCENNES - 75012 PARIS",
    "latitude": 48.8464193692794,
    "longitude": 2.41563660714614
  }, {
    "number": 33010,
    "name": "33010 - HUGO (AUBERVILLIERS)",
    "address": "161 AVENUE VICTOR HUGO - 93300 AUBERVILLIERS",
    "latitude": 48.911104809734795,
    "longitude": 2.379143742302604
  }, {
    "number": 11003,
    "name": "11003 - ROQUETTE DALLERY",
    "address": "29 RUE KELLER - 75011 PARIS",
    "latitude": 48.855512861322296,
    "longitude": 2.375240347026149
  }, {
    "number": 1005,
    "name": "01005 - LES HALLES - SEBASTOPOL",
    "address": "3 RUE DE LA COSSONNERIE - 75001 PARIS",
    "latitude": 48.86126206976475,
    "longitude": 2.349399999750171
  }, {
    "number": 16014,
    "name": "16014 - AVENUE D EYLAU",
    "address": "4 AVENUE D'EYLAU - 75016 PARIS",
    "latitude": 48.86354640344584,
    "longitude": 2.286394496925036
  }, {
    "number": 22402,
    "name": "22402 - JAURES (MALAKOFF)",
    "address": "10 AVENUE JEAN JAURES - 92240 MALAKOFF",
    "latitude": 48.82146007977343,
    "longitude": 2.302899459965933
  }, {
    "number": 19010,
    "name": "19010 - PORTE DE LA VILLETTE",
    "address": "RUE EMILE REYNAUD SUR TPC - 75019 PARIS",
    "latitude": 48.9011641133776,
    "longitude": 2.388590733869235
  }, {
    "number": 18004,
    "name": "18004 - ABBESSES",
    "address": "2 RUE DE LA VIEUVILLE - 75018 PARIS",
    "latitude": 48.884482392727506,
    "longitude": 2.338812297029362
  }, {
    "number": 9111,
    "name": "09111 - LA FAYETTE PROVENCE",
    "address": "28 RUE DE LA VICTOIRE - 75009 PARIS",
    "latitude": 48.87514373494672,
    "longitude": 2.338118505144376
  }, {
    "number": 13107,
    "name": "13107 - MARCHAND SANTE",
    "address": "12 PASSAGE VICTOR MARCHAND - 75013 PARIS",
    "latitude": 48.82884021838649,
    "longitude": 2.341967436827206
  }, {
    "number": 17109,
    "name": "17109 - BOIS LE PRÊTRE",
    "address": "22 BD DE BOIS LE PRETRE - 75017 PARIS",
    "latitude": 48.89953828305808,
    "longitude": 2.320133661435273
  }, {
    "number": 11018,
    "name": "11018 - SAINT MAUR AVENUE DE LA REPUBLIQUE",
    "address": "87 RUE DE SAINT MAUR - 75011 PARIS",
    "latitude": 48.86421167470377,
    "longitude": 2.378255841512857
  }, {
    "number": 17022,
    "name": "17022 - PLACE DE WAGRAM",
    "address": "67 BOULEVARD PEREIRE - 75017 PARIS",
    "latitude": 48.887070607581215,
    "longitude": 2.304111124531457
  }, {
    "number": 21210,
    "name": "21210 - PERI 2 (MONTROUGE)",
    "address": "8 RUE GABRIEL PERI - 92120 MONTROUGE",
    "latitude": 48.817817093901425,
    "longitude": 2.324031278297223
  }, {
    "number": 17010,
    "name": "17010 - JONCQUIERE",
    "address": "90 RUE DE LA JONQUIERE - 75017 PARIS",
    "latitude": 48.894768624696255,
    "longitude": 2.318885353974425
  }, {
    "number": 35004,
    "name": "35004 - ALLENDE (PANTIN)",
    "address": "AVENUE DE LA GARE - 93500 PANTIN",
    "latitude": 48.89732893682894,
    "longitude": 2.400576593854137
  }, {
    "number": 9023,
    "name": "09023 - ITALIENS LAFFITE",
    "address": "1 RUE LAFFITE - 75009 PARIS",
    "latitude": 48.871815737396304,
    "longitude": 2.337201547845077
  }, {
    "number": 6104,
    "name": "06104 - HERSCHEL",
    "address": "7 RUE HERSCHEL - 75006 PARIS",
    "latitude": 48.84336424277311,
    "longitude": 2.337803430969035
  }, {
    "number": 21105,
    "name": "21105 - MORICE (CLICHY)",
    "address": "35-37 RUE MORICE - 92110 CLICHY",
    "latitude": 48.902615193840354,
    "longitude": 2.313320636502019
  }, {
    "number": 4006,
    "name": "04006 - BASSIN DE L'ARSENAL",
    "address": "FACE 1 BOULEVARD BOURBON - 75004 PARIS",
    "latitude": 48.847725125668795,
    "longitude": 2.365939153127159
  }, {
    "number": 17024,
    "name": "17024 - VILLIERS",
    "address": "1/3 PLACE PROSPER GOUBAUX - 75017 PARIS",
    "latitude": 48.88120833279596,
    "longitude": 2.316449640798716
  }, {
    "number": 20033,
    "name": "20033 - ETIENNE DOLET",
    "address": "29 RUE ETIENNE DOLLET - 75020 PARIS",
    "latitude": 48.86804941024793,
    "longitude": 2.385133097618902
  }, {
    "number": 17038,
    "name": "17038 - ARGENTINE",
    "address": "42 AVENUE DE LA GRANDE ARMEE - 75017 PARIS",
    "latitude": 48.87617438949852,
    "longitude": 2.288247405087516
  }, {
    "number": 12009,
    "name": "12009 - DIDEROT",
    "address": "FACE 124 RUE DE CHARENTON - 75012 PARIS",
    "latitude": 48.846268789803915,
    "longitude": 2.379264325090339
  }, {
    "number": 42005,
    "name": "42005 - GAMBETTA (IVRY)",
    "address": "1 PLACE DE LEON GAMBETTA - 94200 IVRY",
    "latitude": 48.8147064321348,
    "longitude": 2.40238243434276
  }, {
    "number": 8110,
    "name": "08110 - STOCKOLM ROME",
    "address": "6 RUE DE STOCKOLM - 75008 PARIS",
    "latitude": 48.87711191876653,
    "longitude": 2.322329320868037
  }, {
    "number": 15003,
    "name": "15003 - GARE DE MONTPARNASSE",
    "address": "TP DU 1-13 BOULEVARD DE VAUGIRARD - 75015 PARIS",
    "latitude": 48.8418071798797,
    "longitude": 2.31951002690117
  }, {
    "number": 12013,
    "name": "12013 - RUE MONTGALLET",
    "address": "FACE 39 RUE MONTGALLET - 75012 PARIS",
    "latitude": 48.844312608440106,
    "longitude": 2.389595227215854
  }, {
    "number": 1025,
    "name": "01025 - TEMPLE DE L'ORATOIRE",
    "address": "2 RUE DE L'ORATOIRE - 75001 PARIS",
    "latitude": 48.8613894682984,
    "longitude": 2.340055232817477
  }, {
    "number": 21008,
    "name": "21008 - HUGO (BOULOGNE-BILLANCOURT)",
    "address": "74 AVENUE VICTOR HUGO - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.83792331477095,
    "longitude": 2.246064151544099
  }, {
    "number": 12040,
    "name": "12040 - PORTE DE CHARENTON",
    "address": "FACE 2 AV. DE LA PORTE DE CHARENTON - 75012 PARIS",
    "latitude": 48.83158812517445,
    "longitude": 2.398745664948547
  }, {
    "number": 13039,
    "name": "13039 - IVRY POINTE D'IVRY",
    "address": "42 - 44 AVENUE D'IVRY - 75013 PARIS",
    "latitude": 48.8232196831694,
    "longitude": 2.3654696281062
  }, {
    "number": 13054,
    "name": "13054 - PAU CASALS",
    "address": "1 RUE PAU CASALS - 75013 PARIS",
    "latitude": 48.83124496844904,
    "longitude": 2.377263236877398
  }, {
    "number": 15029,
    "name": "15029 - EMERIAU",
    "address": "27 RUE EMERIAU - 75015 PARIS",
    "latitude": 48.850614750906075,
    "longitude": 2.2872501634709
  }, {
    "number": 19004,
    "name": "19004 - QUAI DE LA LOIRE",
    "address": "4 QUAI DE LA LOIRE - 75019 PARIS",
    "latitude": 48.88339733854529,
    "longitude": 2.371074522980134
  }, {
    "number": 14114,
    "name": "14114 - PLACE DE CATALOGNE",
    "address": "4 RUE ALAIN - 75014 PARIS",
    "latitude": 48.83729330936107,
    "longitude": 2.317482930639117
  }, {
    "number": 21307,
    "name": "21307 - CRESSON 1 (ISSY LES MOULINEAUX)",
    "address": "FACE 36 AVENUE VICTOR CRESSON - 92130 ISSY LES MOULINEAUX",
    "latitude": 48.82267836713668,
    "longitude": 2.26863109328801
  }, {
    "number": 8009,
    "name": "08009 - SAINT LAZARE RER",
    "address": "1 RUE DE L'ISLY - 75008 PARIS",
    "latitude": 48.874808024965695,
    "longitude": 2.326481486218277
  }, {
    "number": 42208,
    "name": "42208 - PARIS 4 (CHARENTON)",
    "address": "178 RUE DE PARIS - 94220 CHARENTON",
    "latitude": 48.8294214716652,
    "longitude": 2.40164810555835
  }, {
    "number": 17102,
    "name": "17102 - ALFRED ROLL",
    "address": "14 RUE ALFRED ROLL - 75017 PARIS",
    "latitude": 48.887849493840015,
    "longitude": 2.300034397977882
  }, {
    "number": 18033,
    "name": "18033 - MOSKOWA",
    "address": "111 RUE BELLIARD - 75018 PARIS",
    "latitude": 48.89669238777841,
    "longitude": 2.338023450388167
  }, {
    "number": 32001,
    "name": "32001 - PROUDHON (SAINT DENIS)",
    "address": "AVENUE PRESIDENT WILSON / RUE PROUDHON - 93200 SAINT DENIS",
    "latitude": 48.906469373243816,
    "longitude": 2.358442053954938
  }, {
    "number": 11022,
    "name": "11022 - LEON BLUM ROQUETTE",
    "address": "142 RUE DE LA ROQUETTE - 75011 PARIS",
    "latitude": 48.858001906023354,
    "longitude": 2.381797702650783
  }, {
    "number": 32606,
    "name": "32606 - GARDE CHASSE (LES LILAS)",
    "address": "49 RUE DU GARDE CHASSE - 93260 LES LILAS",
    "latitude": 48.883240251645354,
    "longitude": 2.418912369645038
  }, {
    "number": 4104,
    "name": "04104 - SEBASTOPOL RAMBUTEAU",
    "address": "FACE 40 BOULEVARD SEBASTOPOL - 75004 PARIS",
    "latitude": 48.861883102214215,
    "longitude": 2.350220976096221
  }, {
    "number": 22405,
    "name": "22405 - NORD (MALAKOFF)",
    "address": "ANGLE PASSAGE DU NORD / GABRIEL PERI - 92240 MALAKOFF",
    "latitude": 48.81933915840963,
    "longitude": 2.300476865047907
  }, {
    "number": 21109,
    "name": "21109 - GUICHET (CLICHY)",
    "address": "12BIS RUE DU GUICHET - 92110 CLICHY",
    "latitude": 48.90513700396853,
    "longitude": 2.302503160581296
  }, {
    "number": 12008,
    "name": "12008 - HECTOR MALOT",
    "address": "15 BIS RUE HECTOR MALOT - 75012 PARIS",
    "latitude": 48.84681513232972,
    "longitude": 2.376929360592796
  }, {
    "number": 33001,
    "name": "33001 - EMGP (AUBERVILLIERS)",
    "address": "EMGP AVENUE DE PORTE DE PARIS / PARKING 264 - 93300 AUBERVILLIERS",
    "latitude": 48.9031834065108,
    "longitude": 2.368025612608799
  }, {
    "number": 16011,
    "name": "16011 - VICTOR HUGO RUE DE LA POMPE",
    "address": "118 AVENUE VICTOR HUGO - 75016 PARIS",
    "latitude": 48.86810888689743,
    "longitude": 2.281477522417188
  }, {
    "number": 8040,
    "name": "08040 - CHAMPS ELYSEES CHARRON",
    "address": "65 RUE PIERRE CHARRON - 75008 PARIS",
    "latitude": 48.87007033911426,
    "longitude": 2.304315446715835
  }, {
    "number": 13113,
    "name": "13113 - CHOISY VISTULE",
    "address": "2 RUE DE LA VISCULE - 75013 PARIS",
    "latitude": 48.82363397638854,
    "longitude": 2.361571534156357
  }, {
    "number": 9028,
    "name": "09028 - MONCEY BLANCHE",
    "address": "4 RUE MONCEY - 75009 PARIS",
    "latitude": 48.88015398585977,
    "longitude": 2.33107516002003
  }, {
    "number": 18015,
    "name": "18015 - CUSTINE",
    "address": "23 RUE CUSTINE - 75018 PARIS",
    "latitude": 48.88861971645056,
    "longitude": 2.34701133583386
  }, {
    "number": 12014,
    "name": "12014 - NATION",
    "address": "16 PLACE DE LA NATION SUR TPC - 75012 PARIS",
    "latitude": 48.847301800009085,
    "longitude": 2.39552056485834
  }, {
    "number": 41102,
    "name": "41102 - RENAN (ARCUEIL)",
    "address": "rue Ernest Renan / angle rue Vaucouleurs (A la sortie du RER B) - 94110 ARCUEIL",
    "latitude": 48.808800394993376,
    "longitude": 2.334689654662475
  }, {
    "number": 2004,
    "name": "02004 - REAUMUR MONTORGUEIL",
    "address": "83 ALLEE PIERRE LAZAREF - 75002 PARIS",
    "latitude": 48.866973714239656,
    "longitude": 2.3486324654447
  }, {
    "number": 14005,
    "name": "14005 - DENFERT ROCHEREAU",
    "address": "2 AVENUE RENE COTY - 75014 PARIS",
    "latitude": 48.83314079924711,
    "longitude": 2.332672227475083
  }, {
    "number": 21019,
    "name": "21019 - VAILLANT (BOULOGNE-BILLANCOURT)",
    "address": "71 AVENUE EDOUARD VAILLANT - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.83486081059702,
    "longitude": 2.24786255060931
  }, {
    "number": 13032,
    "name": "13032 - MASSENA",
    "address": "163 AVENUE D'ITALIE - 75013 PARIS",
    "latitude": 48.819894618061376,
    "longitude": 2.359432938466414
  }, {
    "number": 16041,
    "name": "16041 - VERSAILLES",
    "address": "164 AVENUE DE VERSAILLES - 75016 PARIS",
    "latitude": 48.84021933807409,
    "longitude": 2.263834191152959
  }, {
    "number": 13019,
    "name": "13019 - AURIOL QUAI DE LA GARE",
    "address": "20 RUE FERNAND BRAUDEL - 75013 PARIS",
    "latitude": 48.83636225239755,
    "longitude": 2.372375389059736
  }, {
    "number": 6032,
    "name": "06032 - RENNES SABOT",
    "address": "7 RUE DU SABOT - 75006 PARIS",
    "latitude": 48.8525574216674,
    "longitude": 2.331647722906649
  }, {
    "number": 11104,
    "name": "11104 - CHARONNE DU BUREAU",
    "address": "170 RUE DE CHARONNE - 75011 PARIS",
    "latitude": 48.855943779580954,
    "longitude": 2.392532526632664
  }, {
    "number": 7008,
    "name": "07008 - SOLFERINO",
    "address": "10 RUE DE VILLERSEXEL - 75007 PARIS",
    "latitude": 48.85831864690376,
    "longitude": 2.323838437789417
  }, {
    "number": 43002,
    "name": "43002 - LAGNY (VINCENNES)",
    "address": "1 BIS RUE DE LAGNY - 94300 VINCENNES",
    "latitude": 48.848879019004286,
    "longitude": 2.426198422131812
  }, {
    "number": 8051,
    "name": "08051 - CHAPTAL",
    "address": "45 BD BATIGNOLLES - 75008 PARIS",
    "latitude": 48.881914,
    "longitude": 2.320284
  }, {
    "number": 15014,
    "name": "15014 - VOLONTAIRES",
    "address": "25 RUE DES VOLONTAIRES - 75015 PARIS",
    "latitude": 48.84132050184004,
    "longitude": 2.30808901725357
  }, {
    "number": 19120,
    "name": "19120 - ALOUETTES",
    "address": "20 RUE CARDUCCI - 75019 PARIS",
    "latitude": 48.87751625686576,
    "longitude": 2.386099720372164
  }, {
    "number": 6014,
    "name": "06014 - PONT DE LODI DAUPHINE",
    "address": "7 RUE DU PONT DE LODI - 75006 PARIS",
    "latitude": 48.855296898603285,
    "longitude": 2.339947307565249
  }, {
    "number": 12112,
    "name": "12112 - CHARENTON JARDINIER",
    "address": "311-313 RUE DE CHARENTON - 75012 PARIS",
    "latitude": 48.833821772922654,
    "longitude": 2.394692664106047
  }, {
    "number": 14028,
    "name": "14028 - PLAISANCE ALESIA",
    "address": "164 RUE ALESIA - 75014 PARIS",
    "latitude": 48.83163970406255,
    "longitude": 2.315158529047339
  }, {
    "number": 18109,
    "name": "18109 - RIQUET PAJOL",
    "address": "55 RUE PAJOL - 75018 PARIS",
    "latitude": 48.88959697085082,
    "longitude": 2.362853604262514
  }, {
    "number": 7025,
    "name": "07025 - SUFFREN TOUR EIFFEL",
    "address": "2 AVENUE OCTAVE CREARD - 75007 PARIS",
    "latitude": 48.856502977695634,
    "longitude": 2.293178754328878
  }, {
    "number": 7010,
    "name": "07010 - INVALIDES",
    "address": "FACE 3 RUE DE CONSTANTINE - 75007 PARIS",
    "latitude": 48.860769957997334,
    "longitude": 2.314838279495265
  }, {
    "number": 6009,
    "name": "06009 - GUYNEMER LUXEMBOURG",
    "address": "26 RUE GUYNEMER - 75006 PARIS",
    "latitude": 48.84672098257342,
    "longitude": 2.332394592929583
  }, {
    "number": 42505,
    "name": "42505 - FREROT (GENTILLY)",
    "address": "37 RUE CHARLES FREROT - 94250 GENTILLY",
    "latitude": 48.81576879198393,
    "longitude": 2.350476198934541
  }, {
    "number": 10003,
    "name": "10003 - HAUTEVILLE",
    "address": "1 RUE D'HAUTEVILLE - 75010 PARIS",
    "latitude": 48.87077436024043,
    "longitude": 2.349649636832728
  }, {
    "number": 42012,
    "name": "42012 - BARBUSSE (IVRY)",
    "address": "1 RUE HENRY BARBUSSE - 94200 IVRY",
    "latitude": 48.81020034796607,
    "longitude": 2.379670589115164
  }, {
    "number": 11026,
    "name": "11026 - CHEMIN VERT SAINT MAUR",
    "address": "105 RUE DU CHEMIN VERT - 75011 PARIS",
    "latitude": 48.86119441933017,
    "longitude": 2.381301904923526
  }, {
    "number": 6028,
    "name": "06028 - ODEON QUATRE VENTS",
    "address": "6 RUE DES QUATRE VENTS - 75006 PARIS",
    "latitude": 48.851751374458864,
    "longitude": 2.338161695134053
  }, {
    "number": 42501,
    "name": "42501 - RASPAIL 1 - FRAYSSE",
    "address": "80 AVENUE RASPAIL - 94250 GENTILLY",
    "latitude": 48.81031545,
    "longitude": 2.34395871
  }, {
    "number": 15071,
    "name": "15071 - CHAMP DE MARS COTE 16EME",
    "address": "36 RUE DE SUFFREN - 75015 PARIS",
    "latitude": 48.854851748835294,
    "longitude": 2.29500791364336
  }, {
    "number": 18103,
    "name": "18103 - CHARLES HERMITE",
    "address": "45 RUE CHARLES HERMITE - 75018 PARIS",
    "latitude": 48.89890275343664,
    "longitude": 2.364732494174034
  }, {
    "number": 22007,
    "name": "22007 - CHARCOT (NEUILLY)",
    "address": "35-37 BOULEVARD DU COMMANDANT CHARCOT - 92200 NEUILLY SUR SEINE",
    "latitude": 48.875360283908314,
    "longitude": 2.255699331629116
  }, {
    "number": 41201,
    "name": "41201 - DE RICARD (FONTENAY SOUS BOIS)",
    "address": "RUE LOUIS-XAVIER DE RICARD - 94120 FONTENAY SOUS BOIS",
    "latitude": 48.84630286069407,
    "longitude": 2.472408774870391
  }, {
    "number": 15052,
    "name": "15052 - CONVENTION",
    "address": "183 RUE DE LA CONVENTION - 75015 PARIS",
    "latitude": 48.83767682233156,
    "longitude": 2.295586926020252
  }, {
    "number": 42004,
    "name": "42004 - COUTURIER (IVRY)",
    "address": "30 RUE PAUL VAILLANT COUTURIER -  94200 IVRY SUR SEINE",
    "latitude": 48.8190127185084,
    "longitude": 2.3967191724427
  }, {
    "number": 6004,
    "name": "06004 - REGARD",
    "address": "19 RUE DU REGARD - 75006 PARIS",
    "latitude": 48.847517829441934,
    "longitude": 2.326973305586841
  }, {
    "number": 13006,
    "name": "13006 - SAINT MARCEL JEANNE D'ARC",
    "address": "02 RUE DUMERIL - 75013 PARIS",
    "latitude": 48.83815160808658,
    "longitude": 2.357108449556404
  }, {
    "number": 20038,
    "name": "20038 - LEON FRAPIE",
    "address": "6 RUE LEON FRAPIE - 75020 PARIS",
    "latitude": 48.87354903513999,
    "longitude": 2.411003035880057
  }, {
    "number": 15035,
    "name": "15035 - PLACE ETIENNE PERNET",
    "address": "2 RUE DES FRERES MORANE - 75015 PARIS",
    "latitude": 48.84245875550452,
    "longitude": 2.292173541441698
  }, {
    "number": 21305,
    "name": "21305 - MADAULE (ISSY LES MOULINEAUX)",
    "address": "PLACE MADAULE - 92130 ISSY LES MOULINEAUX",
    "latitude": 48.82412590462087,
    "longitude": 2.260645985489782
  }, {
    "number": 6017,
    "name": "06017 - SENAT CONDE",
    "address": "34 RUE CONDE - 75006 PARIS",
    "latitude": 48.849580002186286,
    "longitude": 2.337848437179539
  }, {
    "number": 13044,
    "name": "13044 - PLACE JEANNE D'ARC",
    "address": "20 PLACE JEANNE D'ARC - 75013 PARIS",
    "latitude": 48.829575726838485,
    "longitude": 2.369126815717134
  }, {
    "number": 20022,
    "name": "20022 - PORTE DE BAGNOLET",
    "address": "1 RUE GEO CHAVEZ - 75020 PARIS",
    "latitude": 48.86508,
    "longitude": 2.40799
  }, {
    "number": 4005,
    "name": "04005 - SULLY MORLAND",
    "address": "2 QUAI DES CELESTINS - 75004 PARIS",
    "latitude": 48.85127148209335,
    "longitude": 2.362430212982278
  }, {
    "number": 12122,
    "name": "12122 - POLYGONE",
    "address": "AVENUE DU POLYGONE - 75012 PARIS",
    "latitude": 48.83544491617421,
    "longitude": 2.431421081436563
  }, {
    "number": 12114,
    "name": "12114 - PORTE DE SAINT MANDE",
    "address": "33 AVENUE COURTELINE - 75012 PARIS",
    "latitude": 48.843949064031825,
    "longitude": 2.415081394834419
  }, {
    "number": 34006,
    "name": "34006 - MICHELET (SAINT OUEN)",
    "address": "92 AVENUE MICHELET - 93400 SAINT OUEN",
    "latitude": 48.90630480606801,
    "longitude": 2.343969017042765
  }, {
    "number": 21302,
    "name": "21302 - BRIAND (ISSY LES MOULINEAUX)",
    "address": "PLACE DE LA RESISTANCE ANGLE RUE ARISTIDE BRIAND - 92130 ISSY LES MOULINEAUX",
    "latitude": 48.821030252865725,
    "longitude": 2.251019571526973
  }, {
    "number": 21206,
    "name": "21206 - PERI (MONTROUGE)",
    "address": "35/37 RUE GABRIEL PERI - 92120 MONTROUGE",
    "latitude": 48.8182337326032,
    "longitude": 2.32088453254631
  }, {
    "number": 6005,
    "name": "06005 - MONTPARNASSE",
    "address": "40 RUE DU MONTPARNASSE - 75006 PARIS",
    "latitude": 48.843295457036824,
    "longitude": 2.326541134127944
  }, {
    "number": 2006,
    "name": "02006 - PLACE DES VICTOIRES",
    "address": "2 RUE D'ABOUKIR - 75002 PARIS",
    "latitude": 48.86600263256513,
    "longitude": 2.341920411962299
  }, {
    "number": 17048,
    "name": "17048 - TOCQUEVILLE",
    "address": "12 RUE DE TOCQUEVILLE - 75017 PARIS",
    "latitude": 48.88240228540158,
    "longitude": 2.314000411222978
  }, {
    "number": 16012,
    "name": "16012 - BOULEVARD FLANDRIN",
    "address": "68 BOULEVARD FLANDRIN - 75016 PARIS",
    "latitude": 48.86877849178477,
    "longitude": 2.274354539176829
  }, {
    "number": 21502,
    "name": "21502 - VERDUN (SURESNES)",
    "address": "18 BIS RUE DE VERDUN / COUR MADELAINE - 92150 SURESNES",
    "latitude": 48.87100304154044,
    "longitude": 2.227477476770916
  }, {
    "number": 15019,
    "name": "15019 - VAUGIRARD CAMBRONNE",
    "address": "3 RUE PAUL BARRUEL - 75015 PARIS",
    "latitude": 48.84005771883908,
    "longitude": 2.304507420961214
  }, {
    "number": 15056,
    "name": "15056 - BALARD",
    "address": "13 PLACE BALARD - 75015 PARIS",
    "latitude": 48.83653728947088,
    "longitude": 2.278717697019357
  }, {
    "number": 18035,
    "name": "18035 - PORTE MONTMARTRE",
    "address": "FACE 66 RUE RENE BINET - 75018 PARIS",
    "latitude": 48.89913599014183,
    "longitude": 2.336893453557286
  }, {
    "number": 7013,
    "name": "07013 - PLACE DE BRETEUIL",
    "address": "17 RUE DUROC - 75007 PARIS",
    "latitude": 48.84750225840085,
    "longitude": 2.312688328662078
  }, {
    "number": 21002,
    "name": "21002 - DENFERT ROCHEREAU (BOULOGNE-BILLANCOURT)",
    "address": "PLACE DENFERT ROCHEREAU - 92100 BOULOGNE BILLANCOURT",
    "latitude": 48.84317665587707,
    "longitude": 2.246214231580669
  }, {
    "number": 12001,
    "name": "12001 - BASTILLE",
    "address": "48 BOULEVARD DE LA BASTILLE - 75012 PARIS",
    "latitude": 48.851311187409664,
    "longitude": 2.369250483580839
  }, {
    "number": 16035,
    "name": "16035 - HIPPODROME D AUTEUIL",
    "address": "ALLEE DES FORTIFICATIONS - 75016 PARIS",
    "latitude": 48.848892820997,
    "longitude": 2.25765156147489
  }, {
    "number": 8053,
    "name": "08053 - FRIEDLAND",
    "address": "PLACE GEORGES GUILLAUMIN - 75008 PARIS",
    "latitude": 48.874750203956566,
    "longitude": 2.301771435325988
  }, {
    "number": 9015,
    "name": "09015 - LAMARTINE",
    "address": "43 RUE LAMARTINE - 75009 PARIS",
    "latitude": 48.87662212037311,
    "longitude": 2.339799899316122
  }, {
    "number": 13117,
    "name": "13117 - STADE GEORGES CARPENTIER",
    "address": "95-97 BOULEVARD MASSENA - 75013 PARIS",
    "latitude": 48.82049518804969,
    "longitude": 2.366819682140966
  }, {
    "number": 10019,
    "name": "10019 - PARADIS",
    "address": "23 RUE PARADIS - 75010 PARIS",
    "latitude": 48.87503405624492,
    "longitude": 2.352184894826549
  }, {
    "number": 32004,
    "name": "32004 - BAILLY (SAINT DENIS)",
    "address": "AVENUE DU PRESIDENT WILSON/ RUE DE BAILLY - 93200 SAINT DENIS",
    "latitude": 48.91519864243704,
    "longitude": 2.357500683686108
  }, {
    "number": 8050,
    "name": "08050 - BOETIE PONTHIEU",
    "address": "116 RUE DE LA BOETIE - 75008 PARIS",
    "latitude": 48.871512741519155,
    "longitude": 2.307487564419454
  }, {
    "number": 42701,
    "name": "42701 - GIDE (LE KREMLIN BICETRE)",
    "address": "FACE 50 AVENUE CHARLES GIDE - 94270 LE KREMELIN BICETRE",
    "latitude": 48.807211123250035,
    "longitude": 2.353852672868236
  }, {
    "number": 10018,
    "name": "10018 - ALBAN SATRAGNE",
    "address": "110-112 RUE FAUBOURG SAINT DENIS - 75010 PARIS",
    "latitude": 48.875384905581136,
    "longitude": 2.356094018642288
  }, {
    "number": 9018,
    "name": "09018 - PLACE PIGALLE",
    "address": "05 RUE DUPERRE - 75009 PARIS",
    "latitude": 48.88207022703438,
    "longitude": 2.336679631444242
  }, {
    "number": 19045,
    "name": "19045 - CANAL SAINT DENIS - BD MACDONALD",
    "address": "145 BOULEVARD MCDONALD - 75019 PARIS",
    "latitude": 48.8988301928079,
    "longitude": 2.37933010909776
  }, {
    "number": 18014,
    "name": "18014 - DOUDEAUVILLE LEON",
    "address": "26 RUE LEON - 75018 PARIS",
    "latitude": 48.88832421845225,
    "longitude": 2.353573372638597
  }, {
    "number": 9024,
    "name": "09024 - LAFAYETTE TAITBOUT",
    "address": "27 RUE TAITBOUT - 75009 PARIS",
    "latitude": 48.873385805429535,
    "longitude": 2.33529683976619
  }, {
    "number": 31001,
    "name": "31001 - LAGNY (MONTREUIL)",
    "address": "96 RUE DE LAGNY - 93100 MONTREUIL",
    "latitude": 48.84923030086477,
    "longitude": 2.421429940007031
  }, {
    "number": 8003,
    "name": "08003 - GALILLE",
    "address": "63 RUE GALILEE - 75008 PARIS",
    "latitude": 48.87170519139307,
    "longitude": 2.298528265679806
  }, {
    "number": 8019,
    "name": "08019 - EUROPE",
    "address": "03 RUE DE NAPLES - 75008 PARIS",
    "latitude": 48.87995716383757,
    "longitude": 2.321359676280949
  }, {
    "number": 15032,
    "name": "15032 - LOURMEL",
    "address": "112 AVE FELIX FAURE - 75015 PARIS",
    "latitude": 48.838734408274696,
    "longitude": 2.281755540138765
  }, {
    "number": 21112,
    "name": "21112 - DEBUSSY (CLICHY)",
    "address": "31/35 AVENUE CLAUDE DEBUSSY - 92110 CLICHY",
    "latitude": 48.91042912572328,
    "longitude": 2.311768175774796
  }, {
    "number": 20108,
    "name": "20108 - HOSPICE DEBROUSSE",
    "address": "142 RUE DE BAGNOLET - 75020 PARIS",
    "latitude": 48.8615729587877,
    "longitude": 2.40568863716159
  }, {
    "number": 17115,
    "name": "17115 - PORTE DE SAINT OUEN",
    "address": "22 AVENUE DE LA PORTE DE SAINT OUEN - 75017 PARIS",
    "latitude": 48.89876008065392,
    "longitude": 2.329558517454781
  }, {
    "number": 12127,
    "name": "12127 - TREMBLAY - INSEP",
    "address": "11, avenue du Temblay - 75012 PARIS",
    "latitude": 48.83397,
    "longitude": 2.45482
  }, {
    "number": 31011,
    "name": "31011 - STALINGRAD 2 (MONTREUIL)",
    "address": "27 RUE DE STALINGRAD - 93100 MONTREUIL",
    "latitude": 48.8589230268289,
    "longitude": 2.44314211823533
  }, {
    "number": 41604,
    "name": "41604 - LAGNY (SAINT MANDE)",
    "address": "126 RUE LAGNY / ANGLE AVENUE JOFFRE - 94160 SAINT MANDE",
    "latitude": 48.84931182683785,
    "longitude": 2.417909769042342
  }, {
    "number": 10115,
    "name": "10115 - DODU",
    "address": "1 - 3 RUE DES ECLUSES SAINT MARTIN - 75010 PARIS",
    "latitude": 48.8761373390584,
    "longitude": 2.3680844979417
  }, {
    "number": 3008,
    "name": "03008 - PERLE",
    "address": "22 RUE DE LA PERLE - 75003 PARIS",
    "latitude": 48.859846683206975,
    "longitude": 2.361050487092021
  }, {
    "number": 22404,
    "name": "22404 - BROSSOLETTE 2 (MALAKOFF)",
    "address": "102 AVENUE PIERRE BROSSOLETTE - 92240 MALAKOFF",
    "latitude": 48.81755975358179,
    "longitude": 2.307485841267489
  }, {
    "number": 20004,
    "name": "20004 - PORTE DE VINCENNES BIS",
    "address": "10 RUE DU COMMANDANT L'HERMINIER - 75020 PARIS",
    "latitude": 48.84706441752541,
    "longitude": 2.416022960021078
  }, {
    "number": 20007,
    "name": "20007 - BUZENVAL",
    "address": "52 RUE BUZENVAL - 75020 PARIS",
    "latitude": 48.851617204998654,
    "longitude": 2.401513597307666
  }, {
    "number": 16004,
    "name": "16004 - BOULEVARD LANNES",
    "address": "FACE 2 BOULEVARD LANNES - 75016 PARIS",
    "latitude": 48.870753284048824,
    "longitude": 2.274875298344967
  }, {
    "number": 21107,
    "name": "21107 - SINCHOLLE (CLICHY)",
    "address": "RUE BERTRAND SINCHOLLE - 92110 CLICHY",
    "latitude": 48.89935963697993,
    "longitude": 2.304040560698093
  }, {
    "number": 18102,
    "name": "18102 - RUE DE LA CHAPELLE",
    "address": "69 BIS RUE DE LA CHAPELLE - 75018 PARIS",
    "latitude": 48.89648283189724,
    "longitude": 2.358845525233447
  }, {
    "number": 15065,
    "name": "15065 - HUMBERT",
    "address": "23 RUE EMILE ZOLA - 75015 PARIS",
    "latitude": 48.846383773003375,
    "longitude": 2.280008411904129
  }, {
    "number": 21301,
    "name": "21301 - SAINT VINCENT (ISSY LES MOULINEAUX)",
    "address": "21 RUE SAINT VINCENT - 92130 ISSY LES MOULINEAUX",
    "latitude": 48.81948999388875,
    "longitude": 2.253869419958486
  }, {
    "number": 10037,
    "name": "10037 - VERSION 2 JAURES",
    "address": "EGLISE SAINT JOSEPH ARTISAN - 75010 PARIS",
    "latitude": 48.88126816395289,
    "longitude": 2.368117527990073
  }, {
    "number": 17027,
    "name": "17027 - PEREIRE LEVALLOIS",
    "address": "121 BOULEVARD PEREIRE - 75017 PARIS",
    "latitude": 48.88526331365403,
    "longitude": 2.298286466799226
  }, {
    "number": 1018,
    "name": "01018 - RIVOLI TUILERIE",
    "address": "2 RUE D'ALGER - 75001 PARIS",
    "latitude": 48.86479366612619,
    "longitude": 2.329431421945852
  }, {
    "number": 5028,
    "name": "05028 - CENSIER BUFFON",
    "address": "6 RUE CENSIER - 75005 PARIS",
    "latitude": 48.8410800220159,
    "longitude": 2.35543071424475
  }, {
    "number": 15024,
    "name": "15024 - LAOS",
    "address": "88 AVENUE DE SUFFREN - 75015 PARIS",
    "latitude": 48.85091460817171,
    "longitude": 2.301293384670141
  }, {
    "number": 16001,
    "name": "16001 - AVENUE DES PORTUGAIS",
    "address": "2 AVENUE DES PORTUGAIS - 75016 PARIS",
    "latitude": 48.871213712191214,
    "longitude": 2.293692133647844
  }, {
    "number": 42502,
    "name": "42502 - RASPAIL 2 (GENTILLY)",
    "address": "FACE AU 79 AVENUE RASPAIL- 94250 GENTILLY",
    "latitude": 48.813127647916225,
    "longitude": 2.346794374352219
  }, {
    "number": 33013,
    "name": "33013 - RECHAUSSIERE (AUBERVILLIERS)",
    "address": "52 RUE LEOPOLD RECHOSSIERE - 93300 AUBERVILLIERS",
    "latitude": 48.9145061128239,
    "longitude": 2.39105149687865
  }, {
    "number": 20020,
    "name": "20020 - PYRENEES RENOUVIER",
    "address": "183 RUE DES PYRENEES - 75020 PARIS",
    "latitude": 48.86095933229224,
    "longitude": 2.400421852042113
  }, {
    "number": 8101,
    "name": "08101 - LONDRES AMSTERDAM",
    "address": "42 RUE DE LONDRES - 75008 PARIS",
    "latitude": 48.878034461503965,
    "longitude": 2.326483540969424
  }, {
    "number": 19034,
    "name": "19034 - PANTIN",
    "address": "20 AVENUE DE LA PORTE DE PANTIN - 75019 PARIS",
    "latitude": 48.89034195521685,
    "longitude": 2.397813642189543
  }, {
    "number": 5012,
    "name": "05012 - ULM - LHOMOND",
    "address": "20 RUE DE L'ESTRAPADE - 75005 PARIS",
    "latitude": 48.845143494008845,
    "longitude": 2.345412681213507
  }, {
    "number": 10022,
    "name": "10022 - CHABROL SAINT QUENTIN",
    "address": "FACE 124 RUE DU FAUBOURG SAINT DENIS - 75010 PARIS",
    "latitude": 48.87686690577979,
    "longitude": 2.356119082991818
  }, {
    "number": 15058,
    "name": "15058 - GEORGES POMPIDOU",
    "address": "4 PLACE DU MOULIN DE JAVEL - 75015 PARIS",
    "latitude": 48.840094446742086,
    "longitude": 2.271589911985344
  }, {
    "number": 21004,
    "name": "21004 - JAURES 2 (BOULOGNE-BILLANCOURT)",
    "address": "55 BOULEVARD JEAN JAURES - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.840023256521405,
    "longitude": 2.239818996972534
  }, {
    "number": 42001,
    "name": "42001 - JULES (IVRY)",
    "address": "1 RUE JULES VANZUPPE - 94200 IVRY",
    "latitude": 48.82032218367611,
    "longitude": 2.394981240086619
  }, {
    "number": 16009,
    "name": "16009 - SAINT DIDIER",
    "address": "32 RUE SAINT DIDIER - 75016 PARIS",
    "latitude": 48.8664391603377,
    "longitude": 2.28574594430153
  }, {
    "number": 8035,
    "name": "08035 - NARVICK",
    "address": "54 RUE DE LA BIENFAISANCE - 75008 PARIS",
    "latitude": 48.87659994083545,
    "longitude": 2.31316505435543
  }, {
    "number": 5016,
    "name": "05016 - CONTRESCARPE-THOUIN",
    "address": "1 RUE THOUIN - 75005 PARIS",
    "latitude": 48.84506225637803,
    "longitude": 2.349497789857777
  }, {
    "number": 10033,
    "name": "10033 - LARIBOISIERE",
    "address": "15 RUE SAINT VINCENT DE PAUL - 75010 PARIS",
    "latitude": 48.88095574164779,
    "longitude": 2.352430514838522
  }, {
    "number": 14007,
    "name": "14007 - SAINT JACQUES FERRUS",
    "address": "1 RUE FERRUS - 75014 PARIS",
    "latitude": 48.83136668000465,
    "longitude": 2.340811882152406
  }, {
    "number": 18048,
    "name": "18048 - PORTE DE LA CHAPELLE",
    "address": "29 BOULEVARD NEY - 75018 PARIS",
    "latitude": 48.8983850226507,
    "longitude": 2.36087734922712
  }, {
    "number": 21017,
    "name": "21017 - REPUBLIQUE 1 (BOULOGNE-BILLANCOURT)",
    "address": "91 BOULEVARD DE LA REPUBLIPQUE - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.833473679272245,
    "longitude": 2.243900532079072
  }, {
    "number": 7102,
    "name": "07102 - SAINTE CLOTHILDE",
    "address": "FACE 19 RUE CASIMIR PERIER - 75007 PARIS",
    "latitude": 48.857829110709226,
    "longitude": 2.319149052579355
  }, {
    "number": 16135,
    "name": "16135 - STADE WILMILLE",
    "address": "ROND POINT DU MARECHAL DELATRE DE TASSIGNY - 75016 PARIS",
    "latitude": 48.872381,
    "longitude": 2.275283
  }, {
    "number": 9102,
    "name": "09102 - PLACE D'ESTIENNE D'ORVES",
    "address": "2 RUE DE LONDRES - 75009 PARIS",
    "latitude": 48.87673249893723,
    "longitude": 2.33048422584945
  }, {
    "number": 10027,
    "name": "10027 - DUNKERQUE",
    "address": "4 RUE DE DUNKERQUE - 75010 PARIS",
    "latitude": 48.87935510317391,
    "longitude": 2.358379192454538
  }, {
    "number": 6025,
    "name": "06025 - RENNES - ASSAS",
    "address": "16 RUE D'ASSAS - 75006 PARIS",
    "latitude": 48.8492084999386,
    "longitude": 2.32851454623001
  }, {
    "number": 42705,
    "name": "42705 - CONVENTION (LE KREMLIN BICETRE)",
    "address": "1 RUE DE LA CONVENTION - 94270 LE KREMLIN BICETRE",
    "latitude": 48.812800296374675,
    "longitude": 2.361041166442304
  }, {
    "number": 1024,
    "name": "01024 - LOUVRE COQ HERON",
    "address": "20 RUE COQUILLIERE - 75001 PARIS",
    "latitude": 48.86377283202625,
    "longitude": 2.342707561978307
  }, {
    "number": 17111,
    "name": "17111 - LEMERCIER",
    "address": "109 RUE LEMERCIER - 75017 PARIS",
    "latitude": 48.890020496141,
    "longitude": 2.3175909298999
  }, {
    "number": 9013,
    "name": "09013 - MAIRIE DU 9EME",
    "address": "20 RUE DE LA GRANGE BATELIERE - 75009 PARIS",
    "latitude": 48.87326713758289,
    "longitude": 2.340753448052758
  }, {
    "number": 7011,
    "name": "07011 - ST DOMINIQUE",
    "address": "30 BIS RUE LAS CASES - 75007 PARIS",
    "latitude": 48.859068394963046,
    "longitude": 2.318624221125004
  }, {
    "number": 2013,
    "name": "02013 - RICHELIEU DROUOT",
    "address": "20 RUE FAVART - 75002 PARIS",
    "latitude": 48.87144635392104,
    "longitude": 2.338290105850787
  }, {
    "number": 19040,
    "name": "19040 - TELEGRAPHE",
    "address": "265 RUE DE BELLEVILLE - 75019 PARIS",
    "latitude": 48.87563618071149,
    "longitude": 2.399461451982782
  }, {
    "number": 15072,
    "name": "15072 - PLACE FERNAND FOREST",
    "address": "1 RUE LINOIS ANGLE QUAI DE GRENELLE - 75015 PARIS",
    "latitude": 48.849271,
    "longitude": 2.281849
  }, {
    "number": 14021,
    "name": "14021 - PLACE DE LA PORTE DE CHATILLON",
    "address": "BOULEVARD BRUNE PORTE DE CHATILLON - 75014 PARIS",
    "latitude": 48.824489702456674,
    "longitude": 2.318447431048976
  }, {
    "number": 11011,
    "name": "11011 - RICHARD LENOIR",
    "address": "FACE 86 BOULEVARD RICHARD LENOIR - 75011 PARIS",
    "latitude": 48.86180485207153,
    "longitude": 2.372651428265507
  }, {
    "number": 31003,
    "name": "31003 - PARIS (MONTREUIL)",
    "address": "237-241 RUE DE PARIS - 93100 MONTREUIL",
    "latitude": 48.8549113323991,
    "longitude": 2.41877242975671
  }, {
    "number": 13029,
    "name": "13029 - ITALIE",
    "address": "30 AVENUE D'ITALIE - 75013 PARIS",
    "latitude": 48.82903204071324,
    "longitude": 2.356183369179921
  }, {
    "number": 1014,
    "name": "01014 - RIVOLI MUSEE DU LOUVRE",
    "address": "5 RUE DE L'ECHELLE - 75001 PARIS",
    "latitude": 48.86367225536575,
    "longitude": 2.33405760804708
  }, {
    "number": 18108,
    "name": "18108 - EVANGILE",
    "address": "61 RUE DE L'EVANGILE - 75018 PARIS",
    "latitude": 48.895090329766326,
    "longitude": 2.368694139840156
  }, {
    "number": 11023,
    "name": "11023 - LEO FROT ROQUETTE",
    "address": "2 RUE SAINT MAUR - 75011 PARIS",
    "latitude": 48.858688774062955,
    "longitude": 2.383553994571467
  }, {
    "number": 2021,
    "name": "02021 - CLERY",
    "address": "4 RUE DE CLERY - 75002 PARIS",
    "latitude": 48.867467441464115,
    "longitude": 2.344526615114217
  }, {
    "number": 34003,
    "name": "34003 - CURIE (SAINT OUEN)",
    "address": "2 RUE NEUVE PIERRE CURIE - 93400 SAINT OUEN",
    "latitude": 48.9013270326018,
    "longitude": 2.33530123747169
  }, {
    "number": 19043,
    "name": "19043 - PETITS PONTS",
    "address": "RUE JULES LADOUMEGUE / ANGLE ROUTES DES PETITS PONTS / ANGLE AV. DU GAL. LECLERC - 75019 PARIS",
    "latitude": 48.893800171035025,
    "longitude": 2.397910366434026
  }, {
    "number": 9006,
    "name": "09006 - TRUDAINE ROCHECHOUART",
    "address": "81 RUE DUNKERQUE - 75009 PARIS",
    "latitude": 48.8821076343589,
    "longitude": 2.34626199853888
  }, {
    "number": 16006,
    "name": "16006 - RUE LAURISTON",
    "address": "60 RUE LAURISTON - 75016 PARIS",
    "latitude": 48.869260223734464,
    "longitude": 2.289918722838758
  }, {
    "number": 11102,
    "name": "11102 - RUE DES BOULETS ( COMPLEMENTAIRE )",
    "address": "3 RUE ALEXANDRE DUMAS - 75011 PARIS",
    "latitude": 48.85288867036487,
    "longitude": 2.389147640809553
  }, {
    "number": 18021,
    "name": "18021 - MARCADET - RAMEY",
    "address": "98 RUE MARCADET - 75018 PARIS",
    "latitude": 48.89092238296793,
    "longitude": 2.344986482110517
  }, {
    "number": 15016,
    "name": "15016 - DUTOT",
    "address": "59 RUE DUTOT - 75015 PARIS",
    "latitude": 48.83831247462415,
    "longitude": 2.308531843822157
  }, {
    "number": 16112,
    "name": "16112 - CHERNOVITZ",
    "address": "1-3 RUE CHERNOVITZ - 75016 PARIS",
    "latitude": 48.8569864146289,
    "longitude": 2.282173218142987
  }, {
    "number": 42003,
    "name": "42003 - INSURRECTION AOUT 1944 (IVRY)",
    "address": "2 PLACE DE L'INSURRECTION AOUT 1944 - 94200 IVRY SUR SEINE",
    "latitude": 48.81466008216803,
    "longitude": 2.39826154064032
  }, {
    "number": 22004,
    "name": "22004 - CHARLES DE GAULLE (NEUILLY)",
    "address": "162 AVENUE CHARLES DE GAULLE - 92200 NEUILLY",
    "latitude": 48.884707293437835,
    "longitude": 2.261530819987246
  }, {
    "number": 16032,
    "name": "16032 - EGLISE D AUTEUIL",
    "address": "PLACE DE L'EGLISE D'AUTEUIL - 75016 PARIS",
    "latitude": 48.84749841771691,
    "longitude": 2.26848387135299
  }, {
    "number": 20012,
    "name": "20012 - BUZENVAL VIGNOLES",
    "address": "90 RUE BUZENVAL - 75020 PARIS",
    "latitude": 48.85392327608324,
    "longitude": 2.400038749270361
  }, {
    "number": 13114,
    "name": "13114 - NATIONALE DUCHAMP (PROP 1)",
    "address": "46 RUE NATIONALE - 75013 PARIS",
    "latitude": 48.824810840809405,
    "longitude": 2.367735489853108
  }, {
    "number": 32601,
    "name": "32601 - PARIS (LES LILAS)",
    "address": "46 RUE DE PARIS - 93260 LES LILAS",
    "latitude": 48.878590348828126,
    "longitude": 2.411899977886774
  }, {
    "number": 18003,
    "name": "18003 - JOSEPH DE MAISTRE LEPIC",
    "address": "2 RUE JOSEPH DE MAISTRE - 75018 PARIS",
    "latitude": 48.886456815828815,
    "longitude": 2.332897827913839
  }, {
    "number": 4101,
    "name": "04101 - BASTILLE",
    "address": "11 RUE DE LA BASTILLE - 75004 PARIS",
    "latitude": 48.8537973449702,
    "longitude": 2.368400806960401
  }, {
    "number": 20031,
    "name": "20031 - DURIS",
    "address": "33 RUE DURIS - 75020 PARIS",
    "latitude": 48.86554086710007,
    "longitude": 2.387724496163364
  }, {
    "number": 15018,
    "name": "15018 - ALLERAY",
    "address": "85 RUE DUTOT - 75015 PARIS",
    "latitude": 48.83657566425033,
    "longitude": 2.306874517122675
  }, {
    "number": 15017,
    "name": "15017 - PROCESSION",
    "address": "7 PLACE FALGUIERE - 75015 PARIS",
    "latitude": 48.83633386181695,
    "longitude": 2.310466238030852
  }, {
    "number": 10005,
    "name": "10005 - CONSERVATOIRE",
    "address": "59 RUE DES PETITES ECURIES - 75010 PARIS",
    "latitude": 48.87397217237368,
    "longitude": 2.348388757504776
  }, {
    "number": 17017,
    "name": "17017 - PONT CARDINET",
    "address": "167 RUE DE ROME - 75017 PARIS",
    "latitude": 48.88714045186671,
    "longitude": 2.314521605640858
  }, {
    "number": 8027,
    "name": "08027 - MAIRIE DU 8 ÈME",
    "address": "28 RUE DE MADRID - 75008 PARIS",
    "latitude": 48.87798402750352,
    "longitude": 2.318404862782852
  }, {
    "number": 15112,
    "name": "15112 - FALGUIÈRE LEBRUN",
    "address": "19 RUE VIGEE LEBRUN - 75015 PARIS",
    "latitude": 48.838758813496995,
    "longitude": 2.3109360795034
  }, {
    "number": 28001,
    "name": "28001 - WALLACE (PUTEAUX)",
    "address": "FACE AU 4 BOULEVARD RICHARD WALLACE - 92800 PUTEAUX",
    "latitude": 48.878706853467605,
    "longitude": 2.241975493693907
  }, {
    "number": 18045,
    "name": "18045 - GANNERON",
    "address": "2 RUE PIERRE GINIER - 75018 PARIS",
    "latitude": 48.886627148560976,
    "longitude": 2.326293689316426
  }, {
    "number": 12125,
    "name": "12125 - PYRAMIDE ENTRÉE PARC FLORAL",
    "address": "PYRAMIDE ENTREE PARC FLORAL - 75012 PARIS",
    "latitude": 48.837061492855675,
    "longitude": 2.440446664251129
  }, {
    "number": 22014,
    "name": "22014 - HUGO (NEUILLY)",
    "address": "35 BOULEVARD VICTOR HUGO - 92200 NEUILLY",
    "latitude": 48.88780106859287,
    "longitude": 2.278072424368198
  }, {
    "number": 10020,
    "name": "10020 - CHABROL",
    "address": "59 RUE CHABROL - 75010 PARIS",
    "latitude": 48.87710035109807,
    "longitude": 2.351222168052346
  }, {
    "number": 21304,
    "name": "21304 - BLUM (ISSY LES MOULINEAUX)",
    "address": "FACE 2 PLACE LEON BLUM - 92100 ISSY LES MOULINEAUX",
    "latitude": 48.820955107880074,
    "longitude": 2.260736413345762
  }, {
    "number": 10028,
    "name": "10028 - GARE DU NORD DENAN",
    "address": "24 RUE DE DUNKERQUE - 75010 PARIS",
    "latitude": 48.880370620982944,
    "longitude": 2.352820057031213
  }, {
    "number": 3010,
    "name": "03010 - BEAUBOURG",
    "address": "46 RUE BEAUBOURG - 75003 PARIS",
    "latitude": 48.862464980403914,
    "longitude": 2.354236781419645
  }, {
    "number": 11105,
    "name": "11105 - REPUBLIQUE PARMENTIER",
    "address": "82 AVENUE PARMENTIER - 75011 PARIS",
    "latitude": 48.864541626812056,
    "longitude": 2.375195196724585
  }, {
    "number": 8032,
    "name": "08032 - MATIGNON",
    "address": "27 AVENUE MATIGNON - 75008 PARIS",
    "latitude": 48.871476421300954,
    "longitude": 2.313885419949291
  }, {
    "number": 11033,
    "name": "11033 - BREGUET SABIN",
    "address": "FACE 23 BD RICHARD LENOIR - 75011 PARIS",
    "latitude": 48.856870467758306,
    "longitude": 2.370554639861521
  }, {
    "number": 12111,
    "name": "12111 - DECAEN CANNEBIERE",
    "address": "73 RUE CLAUDE DECAEN - 75012 PARIS",
    "latitude": 48.83761417037952,
    "longitude": 2.397253782195704
  }, {
    "number": 5006,
    "name": "05006 - SAINT JACQUES SOUFFLOT",
    "address": "174 RUE SAINT JACQUES - 75005 PARIS",
    "latitude": 48.84651692058683,
    "longitude": 2.343123803367338
  }, {
    "number": 21011,
    "name": "21011 - SILLY (BOULOGNE BILLANCOURT)",
    "address": "153 RUE DE SILLY - 92100 BOULOGNE BILLANCOURT",
    "latitude": 48.832274660165,
    "longitude": 2.2340164013498
  }, {
    "number": 18039,
    "name": "18039 - EOLE",
    "address": "41 RUE D'AUBERVILLIERS - 75018 PARIS",
    "latitude": 48.88702120343877,
    "longitude": 2.366886248240863
  }, {
    "number": 18009,
    "name": "18009 - LEPINE",
    "address": "12 RUE JEAN FRANCOIS LEPINE - 75018 PARIS",
    "latitude": 48.88611466796807,
    "longitude": 2.356855627529275
  }, {
    "number": 22401,
    "name": "22401 - DE GAULLE (MALAKOFF)",
    "address": "BOULEVARD CHARLES DE GAULLE (STATION DE METRO) - 92240 MALAKOFF",
    "latitude": 48.822528306004045,
    "longitude": 2.298631654119718
  }, {
    "number": 9032,
    "name": "09032 - MATHURINS",
    "address": "12 RUE DES MATHURINS - 75009 PARIS",
    "latitude": 48.872971251927126,
    "longitude": 2.329465611700831
  }, {
    "number": 16015,
    "name": "16015 - RUE DE BASSANO",
    "address": "1 RUE DE BASSANO - 75016 PARIS",
    "latitude": 48.868144510482075,
    "longitude": 2.296149600985935
  }, {
    "number": 41601,
    "name": "41601 - GENERAL DE GAULLE (SAINT MANDE)",
    "address": "86 AVENUE DU GENERAL DE GAULLE - 94160 SAINT MANDE",
    "latitude": 48.8390304317692,
    "longitude": 2.41741043540351
  }, {
    "number": 21006,
    "name": "21006 - PARIS (BOULOGNE-BILLANCOURT)",
    "address": "162 RUE DE PARIS - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.84159702890181,
    "longitude": 2.233496775544275
  }, {
    "number": 18112,
    "name": "18112 - HÔPITAL BICHAT",
    "address": "2 RUE ARTHUR RANC - 75018 PARIS",
    "latitude": 48.89801434321367,
    "longitude": 2.333653376162832
  }, {
    "number": 13020,
    "name": "13020 - MENDES FRANCE",
    "address": "FACE 15 RUE PAUL KLEE - 75013 PARIS",
    "latitude": 48.83908421830948,
    "longitude": 2.370532330985574
  }, {
    "number": 33011,
    "name": "33011 - FAURE (AUBERVILLIERS)",
    "address": "FACE 172-174 BOULEVARD FELIX FAURE - 93300 AUBERVILLIERS",
    "latitude": 48.9113936890419,
    "longitude": 2.375281319974922
  }, {
    "number": 19005,
    "name": "19005 - RIQUET",
    "address": "56 AVENUE DE FLANDRE - 75019 PARIS",
    "latitude": 48.888013281448345,
    "longitude": 2.373759595522922
  }, {
    "number": 12004,
    "name": "12004 - TRAVERSIERE",
    "address": "76 RUE TRAVERSIERE - 75012 PARIS",
    "latitude": 48.850735824128805,
    "longitude": 2.375870111706245
  }, {
    "number": 21201,
    "name": "21201 - JAURES (MONTROUGE)",
    "address": "6 PLACE JEAN JAURES / RUE MAURICE ARNOUX ET RUE CAMILLE PELLETIN - 92120 MONTROUGE",
    "latitude": 48.816290677003934,
    "longitude": 2.311279543410485
  }, {
    "number": 31013,
    "name": "31013 - CENTENAIRE (MONTREUIL)",
    "address": "8 RUE DU CENTENAIRE - 93100 MONTREUIL",
    "latitude": 48.85845965431733,
    "longitude": 2.427390310720301
  }, {
    "number": 16108,
    "name": "16108 - SABLONS",
    "address": "40 RUE DES SABLONS - 75016 PARIS",
    "latitude": 48.86387513126816,
    "longitude": 2.281890736577358
  }, {
    "number": 13017,
    "name": "13017 - NATIONALE",
    "address": "167 RUE NATIONALE - 75013 PARIS",
    "latitude": 48.83252708397293,
    "longitude": 2.362354410392119
  }, {
    "number": 20037,
    "name": "20037 - SAINT FARGEAU",
    "address": "177 AVENUE GAMBETTA - 75020 PARIS",
    "latitude": 48.8712659183557,
    "longitude": 2.40395075220876
  }, {
    "number": 2108,
    "name": "02108 - VIVIENNE",
    "address": "42 RUE VIVIENNE - 75002 PARIS",
    "latitude": 48.871242274166406,
    "longitude": 2.341394999257386
  }, {
    "number": 12101,
    "name": "12101 - CHARENTON PRAGUE",
    "address": "89 TER RUE DE CHARENTON - 75012 PARIS",
    "latitude": 48.848175129981016,
    "longitude": 2.376358449431232
  }, {
    "number": 8044,
    "name": "08044 - VAN DYCK",
    "address": "2 RUE ALFRED DE VIGNY - 75008 PARIS",
    "latitude": 48.87836138361425,
    "longitude": 2.305254448220567
  }, {
    "number": 31010,
    "name": "31010 - STALINGRAD (MONTREUIL)",
    "address": "67-69 RUE DE STALINGRAD - 93100 MONTREUIL",
    "latitude": 48.85681112307105,
    "longitude": 2.444987425339264
  }, {
    "number": 14124,
    "name": "14124 - PORTE D'ARCUEIL",
    "address": "AVENUE DAVID WEIL - 75014 PARIS",
    "latitude": 48.821111770492195,
    "longitude": 2.333785290429607
  }, {
    "number": 13514,
    "name": "13514 - GARE D'AUSTERLITZ 2",
    "address": "9 BOULEVARD DE L'HOPITAL - 75013 PARIS",
    "latitude": 48.84183617360056,
    "longitude": 2.363468636860069
  }, {
    "number": 5035,
    "name": "05035 - BUFFON AUSTERLITZ",
    "address": "1 RUE BUFFON - 75005 PARIS",
    "latitude": 48.84315817822931,
    "longitude": 2.363748444641593
  }, {
    "number": 12007,
    "name": "12007 - GARE DE LYON CHALON",
    "address": "FACE 54 RUE DE CHALON - 75012 PARIS",
    "latitude": 48.84568897556758,
    "longitude": 2.374203690051493
  }, {
    "number": 6012,
    "name": "06012 - SAINT GERMAIN COPEAU",
    "address": "141 BD SAINT GERMAIN - 75006 PARIS",
    "latitude": 48.85330527759475,
    "longitude": 2.334465461882703
  }, {
    "number": 5007,
    "name": "05007 - ECOLES CARMES",
    "address": "39 RUE DES ECOLES - 75005 PARIS",
    "latitude": 48.848919007908286,
    "longitude": 2.347201329520476
  }, {
    "number": 12034,
    "name": "12034 - PIROGUES DE BERCY",
    "address": "20 RUE DES PIROGUES DE BERCY - 75012 PARIS",
    "latitude": 48.83230838936651,
    "longitude": 2.386370278568759
  }, {
    "number": 21010,
    "name": "21010 - SILLY (BOULOGNE-BILLANCOURT)",
    "address": "93 RUE DE SILLY - 92100 BOULOGNE-BILLANCOURT",
    "latitude": 48.83550440751353,
    "longitude": 2.232531432424099
  }, {
    "number": 42707,
    "name": "42707 - OKABE (LE KREMLIN-BICETRE)",
    "address": "51 avenue de Fontainebleau - 94270 Le Kremlin-Bicetre",
    "latitude": 48.8123678293798,
    "longitude": 2.36180984825322
  }, {
    "number": 19015,
    "name": "19015 - THIONVILLE",
    "address": "24 RUE DE THIONVILLE - 75019 PARIS",
    "latitude": 48.88915491757438,
    "longitude": 2.383375417280365
  }, {
    "number": 14024,
    "name": "14024 - RAYMOND LOSSERAND",
    "address": "RUE VERCINGETORIX - 75014 PARIS",
    "latitude": 48.827989487366,
    "longitude": 2.30567210645885
  }, {
    "number": 4016,
    "name": "04016 - LOBAU",
    "address": "3 RUE LOBAU - 75004 PARIS",
    "latitude": 48.856246721700735,
    "longitude": 2.353281344612189
  }, {
    "number": 15004,
    "name": "15004 - VAUGIRARD PASTEUR",
    "address": "DEV 71 BOULEVARD DE VAUGIRARD - 75015 PARIS",
    "latitude": 48.8405958674037,
    "longitude": 2.315363038202961
  }, {
    "number": 6031,
    "name": "06031 - SAINT MICHEL SARRAZIN",
    "address": "5 RUE PIERRE SARAZIN - 75006 PARIS",
    "latitude": 48.85083365440354,
    "longitude": 2.342198228067738
  }, {
    "number": 18049,
    "name": "18049 - PTE D'AUBERVILLIERS",
    "address": "3-5 BOULEVARD NEY - 75018 PARIS",
    "latitude": 48.8984521733198,
    "longitude": 2.36960946333546
  }, {
    "number": 22009,
    "name": "22009 - DE GAULLE 2 (NEUILLY)",
    "address": "FACE AU 99 AVENUE CHARLES DE GAULLE - 92200 NEUILLY SUR SEINE",
    "latitude": 48.88119,
    "longitude": 2.27186
  }, {
    "number": 35013,
    "name": "35013 - TELL (PANTIN)",
    "address": "1 RUE GUILLAUME TELL / FACE AU 64 BENJAMIN DELESSERT- 93500 PANTIN",
    "latitude": 48.889488420014786,
    "longitude": 2.419848968734546
  }, {
    "number": 10013,
    "name": "10013 - SAINT LOUIS",
    "address": "2 RUE ALIBERT - 75010 PARIS",
    "latitude": 48.87113994970465,
    "longitude": 2.36628044396993
  }, {
    "number": 14002,
    "name": "14002 - RASPAIL QUINET",
    "address": "FACE 4 BD EDGAR QUINET - 75014 PARIS",
    "latitude": 48.839199167158384,
    "longitude": 2.32955509720774
  }, {
    "number": 41101,
    "name": "41101 - DOUMER (ARCUEIL)",
    "address": "FACE AU 11 AVENUE PAUL DOUMER - 94110 ARCUEIL",
    "latitude": 48.806380010297374,
    "longitude": 2.336710402545291
  }, {
    "number": 13027,
    "name": "13027 - MAZAGRAND COUBERTIN",
    "address": "AVENUE DE LA PORTE DE GENTILLY - 75013 PARIS",
    "latitude": 48.81625825722598,
    "longitude": 2.344181922989554
  }, {
    "number": 13015,
    "name": "13015 - WEISS",
    "address": "2 RUE LOUIS WEISS - 75013 PARIS",
    "latitude": 48.832570718038,
    "longitude": 2.371231986681921
  }, {
    "number": 33003,
    "name": "33003 - FAURE (AUBERVILLIERS)",
    "address": "ANGLE RUE BORDIER ET BOULEVARD FELIX FAURE  - 93300 AUBERVILLIERS",
    "latitude": 48.903964024558526,
    "longitude": 2.383125490914395
  }, {
    "number": 22407,
    "name": "22407 - BARBUSSE (MALAKOFF)",
    "address": "ROND POINT HENRI BARBUSSE - 92240 MALAKOFF",
    "latitude": 48.81467965888627,
    "longitude": 2.287400457411747
  }, {
    "number": 9038,
    "name": "09038 - SQUARE BERLIOZ",
    "address": "50 BIS RUE DOUAI - 75009 PARIS",
    "latitude": 48.88320784122797,
    "longitude": 2.330849949028507
  }, {
    "number": 22406,
    "name": "22406 - MOQUET (MALAKOFF)",
    "address": "81 RUE GUY MOQUET - 92240 MALAKOFF",
    "latitude": 48.81524985420581,
    "longitude": 2.298000156576173
  }, {
    "number": 21701,
    "name": "21701 - LARMEROUX (VANVES)",
    "address": "FACE 5 BIS RUE LARMEROUX - 92170 VANVES",
    "latitude": 48.816939911291605,
    "longitude": 2.280989480484553
  }, {
    "number": 5020,
    "name": "05020 - PONT DE SULLY RIVE GAUCHE",
    "address": "03 RUE DES FOSSES SAINT BERNARD - 75005 PARIS",
    "latitude": 48.849159689167834,
    "longitude": 2.356140327475379
  }, {
    "number": 18013,
    "name": "18013 - CHATEAU ROUGE",
    "address": "28 RUE POULET - 75018 PARIS",
    "latitude": 48.88778177066001,
    "longitude": 2.350517738222509
  }, {
    "number": 17014,
    "name": "17014 - PORTE DE CLICHY - AVENUE DE CLICHY",
    "address": "12 AVENUE DE LA PORTE DE CLICHY - 75017 PARIS",
    "latitude": 48.896787395899615,
    "longitude": 2.310714419009491
  }, {
    "number": 31707,
    "name": "31707 - VAILLANT (BAGNOLET)",
    "address": "FACE 70 RUE EDOUARD VAILLANT - 93170 BAGNOLET",
    "latitude": 48.85839567854653,
    "longitude": 2.414860628003844
  }, {
    "number": 1023,
    "name": "01023 - ANDRE MALRAUX MUSEE DU LOUVRE",
    "address": "165 RUE SAINT HONORE - 75001 PARIS",
    "latitude": 48.86349701996373,
    "longitude": 2.334846327550268
  }, {
    "number": 15102,
    "name": "15102 - SQUARE BELA BARTOK",
    "address": "QUAI DE GRENELLE - 75015 PARIS",
    "latitude": 48.851167240679665,
    "longitude": 2.284607607567737
  }, {
    "number": 2008,
    "name": "02008 - MAIRIE DU 2EME",
    "address": "11 RUE DE LA BANQUE - 75002 PARIS",
    "latitude": 48.867293262819686,
    "longitude": 2.340563686363604
  }, {
    "number": 6108,
    "name": "06108 - SAINT ROMAIN CHERCHE MIDI",
    "address": "20 RUE SAINT ROMAIN - 75006 PARIS",
    "latitude": 48.84703008062633,
    "longitude": 2.321289421006791
  }, {
    "number": 42009,
    "name": "42009 - VERDUN (IVRY)",
    "address": "157-165 AVENUE DE VERDUN - 94200 IVRY",
    "latitude": 48.807259280597854,
    "longitude": 2.375130199053175
  }, {
    "number": 14019,
    "name": "14019 - SARETTE GENERAL LECLERC",
    "address": "58 RUE SARRETTE - 75014 PARIS",
    "latitude": 48.82503085292528,
    "longitude": 2.326412869398186
  }, {
    "number": 6007,
    "name": "06007 - VAVIN",
    "address": "18 RUE BREA - 75006 PARIS",
    "latitude": 48.842738478257814,
    "longitude": 2.329794221763396
  }, {
    "number": 11034,
    "name": "11034 - PARMENTIER FONTAINE AU ROI",
    "address": "124 AVENUE PARMENTIER - 75011 PARIS",
    "latitude": 48.86787670551736,
    "longitude": 2.372705978671471
  }, {
    "number": 17045,
    "name": "17045 - PLACE DES TERNES - 5",
    "address": "5 PLACE DES TERNES - 75017 PARIS",
    "latitude": 48.878410386482805,
    "longitude": 2.297831064713626
  }, {
    "number": 21016,
    "name": "21016 - POINT DU JOUR (BOULOGNE-BILLANCOURT)",
    "address": "118 RUE DU POINT DU JOUR - 92100 BOULOGNE BILLANCOURT",
    "latitude": 48.828753141436465,
    "longitude": 2.245911467014621
  }, {
    "number": 11028,
    "name": "11028 - BLUETS REPUBLIQUE",
    "address": "FACE 20 RUE GUILLAUME BERTRAND - 75011 PARIS",
    "latitude": 48.86382517434147,
    "longitude": 2.38090637715497
  }, {
    "number": 16129,
    "name": "16129 - BOIS DE BOULOGNE / PORTE DE LA MUETTE 1",
    "address": "CHEMIN DE LA CEINTURE DU LAC INTERIEUR / AVENUE DE SAINT CLOUD - 75016 PARIS",
    "latitude": 48.862081867033794,
    "longitude": 2.261746386041142
  }, {
    "number": 13011,
    "name": "13011 - COMPO FORMIO",
    "address": "112 BD DE L'HOPITAL - 75013 PARIS",
    "latitude": 48.83540571295384,
    "longitude": 2.358218345030439
  }, {
    "number": 15055,
    "name": "15055 - VASCO DE GAMA",
    "address": "44 RUE VASCO DE GAMA - 75015 PARIS",
    "latitude": 48.836709496490144,
    "longitude": 2.283692380806422
  }, {
    "number": 10016,
    "name": "10016 - VILLEMIN",
    "address": "29 RUE DES RECOLLETS - 75010 PARIS",
    "latitude": 48.875034655883944,
    "longitude": 2.359801238597928
  }, {
    "number": 34008,
    "name": "34008 - GARIBALDI (SAINT OUEN)",
    "address": "FACE AU 4 AVENUE GARIBALDI / AVENUE GABRIEL PERI - 93400 SAINT OUEN",
    "latitude": 48.9057350760539,
    "longitude": 2.33149745979217
  }, {
    "number": 12029,
    "name": "12029 - DUGOMMIER",
    "address": "FACE 4 BOULEVARD DE REUILLY - 75012 PARIS",
    "latitude": 48.83884902339515,
    "longitude": 2.389724508120191
  }, {
    "number": 34005,
    "name": "34005 - LESENNE (SAINT OUEN)",
    "address": "44 RUE ADRIEN LESENNE - 93400 SAINT OUEN",
    "latitude": 48.902553278222726,
    "longitude": 2.348274936304947
  }, {
    "number": 14008,
    "name": "14008 - MOUTON DUVERNET",
    "address": "5 RUE MOUTON DUVERNET - 75014 PARIS",
    "latitude": 48.831506675674554,
    "longitude": 2.329319363216664
  }, {
    "number": 21102,
    "name": "21102 - NATIONS UNIES (CLICHY)",
    "address": "PLACE DES NATIONS UNIES - 92110 CLICHY",
    "latitude": 48.89710985013293,
    "longitude": 2.309900498213689
  }, {
    "number": 6030,
    "name": "06030 - ASSAS-VAUGIRARD",
    "address": "22 RUE D'ASSAS - 75006 PARIS",
    "latitude": 48.84846886395447,
    "longitude": 2.32899674681117
  }, {
    "number": 11103,
    "name": "11103 - RICHARD LENOIR",
    "address": "21 RUE PELEE - 75011 PARIS",
    "latitude": 48.8600393112308,
    "longitude": 2.37098437423996
  }, {
    "number": 8045,
    "name": "08045 - ALMA",
    "address": "FACE 3 AVENUE MONTAIGNE - 75008 PARIS",
    "latitude": 48.86492098253841,
    "longitude": 2.302549182385926
  }, {
    "number": 12016,
    "name": "12016 - PICPUS",
    "address": "43 AVENUE DE SAINT MANDE - 75012 PARIS",
    "latitude": 48.8451282937943,
    "longitude": 2.40140070766687
  }, {
    "number": 4013,
    "name": "04013 - FRANCS BOURGEOIS",
    "address": "50 RUE VIEILLE DU TEMPLE - 75004 PARIS",
    "latitude": 48.85851071299225,
    "longitude": 2.358633579117469
  }, {
    "number": 17036,
    "name": "17036 - AVENUE DE TERNES",
    "address": "2-4 PLACE TRISTAN BERNARD - 75017 PARIS",
    "latitude": 48.87949288672707,
    "longitude": 2.291498184912626
  }, {
    "number": 31012,
    "name": "31012 - CARNOT (MONTREUIL)",
    "address": "35/37 RUE CARNOT - 93100 MONTREUIL",
    "latitude": 48.85581031101047,
    "longitude": 2.441520442445324
  }, {
    "number": 11041,
    "name": "11041 - SAINT AMBROISE",
    "address": "2 RUE LACHARRIERE - 75011 PARIS",
    "latitude": 48.86082070611917,
    "longitude": 2.375636525867217
  }, {
    "number": 23002,
    "name": "23002 - FRANCE (LEVALLOIS)",
    "address": "157 ANATOLE FRANCE - 92300 LEVALLOIS",
    "latitude": 48.8983498515127,
    "longitude": 2.27917948878684
  }, {
    "number": 6016,
    "name": "06016 - DANTON",
    "address": "11 RUE DANTON - 75006 PARIS",
    "latitude": 48.85239300931143,
    "longitude": 2.341442522468474
  }, {
    "number": 17042,
    "name": "17042 - PORTE MAILLOT",
    "address": "FACE 279 BOULEVARD PEREIRE - 75017 PARIS",
    "latitude": 48.877750033418835,
    "longitude": 2.284444356553717
  }, {
    "number": 13035,
    "name": "13035 - IVRY TOLBIAC",
    "address": "116 AVENUE DE CHOISY - 75013 PARIS",
    "latitude": 48.825970136397075,
    "longitude": 2.360231840755094
  }, {
    "number": 20048,
    "name": "20048 - BAGNOLET",
    "address": "110 RUE DE BAGNOLET - 75020 PARIS",
    "latitude": 48.8597776444599,
    "longitude": 2.40344426132457
  }, {
    "number": 2014,
    "name": "02014 - SAINT AUGUSTIN",
    "address": "1  3 RUE DAUNOU - 75002 PARIS",
    "latitude": 48.8691131525953,
    "longitude": 2.3325151052685
  }, {
    "number": 14026,
    "name": "14026 - PLANTES MOULIN VERT",
    "address": "23 RUE DES PLANTES - 75014 PARIS",
    "latitude": 48.83014719579205,
    "longitude": 2.323313445980224
  }, {
    "number": 22013,
    "name": "22013 - SAINTE FOY (NEUILLY)",
    "address": "2 rue de Chézy - 92200 NEUILLY",
    "latitude": 48.885140053090865,
    "longitude": 2.267800008253524
  }, {
    "number": 41202,
    "name": "41202 - CHARMES (FONTENAY SOUS BOIS)",
    "address": "ANGLE AVENUE DES CHARMES / AVENUE FOCH - 94120 FONTENAY SOUS BOIS",
    "latitude": 48.84367434144252,
    "longitude": 2.46308263962204
  }, {
    "number": 23005,
    "name": "23005 - BRIAND (LEVALLOIS)",
    "address": "152 RUE ARISTIDE BRIAND - 92300 LEVALLOIS",
    "latitude": 48.89605104637654,
    "longitude": 2.296836251513375
  }, {
    "number": 16040,
    "name": "16040 - EXELMANS",
    "address": "73 BIS BOULEVARD EXELMANS - 75016 PARIS",
    "latitude": 48.843104494735165,
    "longitude": 2.259821391742079
  }, {
    "number": 11110,
    "name": "11110 - SQUARE ROQUETTE",
    "address": "176 RUE DE LA ROQUETTE - 75011 PARIS",
    "latitude": 48.8592429763213,
    "longitude": 2.386593289210004
  }, {
    "number": 1027,
    "name": "01027 - BERGER",
    "address": "49 RUE BERGER - 75001 PARIS",
    "latitude": 48.86223871704716,
    "longitude": 2.341960937955673
  }, {
    "number": 11107,
    "name": "11107 - BIBLIOTHEQUE FAIDHERBE",
    "address": "11 RUE FAIDHERBE - 75011 PARIS",
    "latitude": 48.851532005340125,
    "longitude": 2.38372328828755
  }, {
    "number": 8037,
    "name": "08037 - MALSHERBES MONCEAU",
    "address": "75 RUE DE MONCEAU - 75008 PARIS",
    "latitude": 48.87960645718048,
    "longitude": 2.314553524187054
  }, {
    "number": 15045,
    "name": "15045 - PLAINE",
    "address": "AVENUE DE LA PORTE DE LA PLAINE - 75015 PARIS",
    "latitude": 48.828174936365855,
    "longitude": 2.292587522548244
  }, {
    "number": 18016,
    "name": "18016 - FRANCOEUR CAULAINCOURT",
    "address": "1 RUE FRANCOEUR - 75018 PARIS",
    "latitude": 48.89002290339246,
    "longitude": 2.342450012678194
  }, {
    "number": 21020,
    "name": "21020 - REPUBLIQUE 2 (BOULOGNE-BILLANCOURT)",
    "address": "28 Bd de la République 92100 BOULOGNE BILLANCOURT",
    "latitude": 48.83199981539791,
    "longitude": 2.253719988007252
  }, {
    "number": 19002,
    "name": "19002 - TANGER",
    "address": "45 & 48 RUE RIQUET - 75019 PARIS",
    "latitude": 48.889351453486974,
    "longitude": 2.370774488055213
  }, {
    "number": 8115,
    "name": "08115 - BASSANO",
    "address": "10 RUE VERNET - 75008 PARIS",
    "latitude": 48.87134532710352,
    "longitude": 2.300186572268202
  }, {
    "number": 16036,
    "name": "16036 - PORTE MOLITOR",
    "address": "PLACE DE LA PORTE MOLITOR - 75016 PARIS",
    "latitude": 48.84524431387353,
    "longitude": 2.256939537401627
  }, {
    "number": 17104,
    "name": "17104 - GENERAL KOENIG",
    "address": "2 BOULEVARD AURELLE DE PALADINES - 75017 PARIS",
    "latitude": 48.881725659667424,
    "longitude": 2.283682661669767
  }, {
    "number": 19117,
    "name": "19117 - EURYALE DEHAYNIN",
    "address": "22 RUE EURYALE DEHAYNIN - 75019 PARIS",
    "latitude": 48.88630005108641,
    "longitude": 2.377388863133627
  }, {
    "number": 20111,
    "name": "20111 - L'ISLE ADAM PYRENÉES",
    "address": "60 RUE VILLIERS DE L'ISLE ADAM - 75020 PARIS",
    "latitude": 48.867362297165805,
    "longitude": 2.396222890988687
  }, {
    "number": 10041,
    "name": "10041 - CHARTRES (18 ARR.)",
    "address": "FACE 39 BOULEVARD DE LA CHAPELLE - 75010 PARIS",
    "latitude": 48.88414119396773,
    "longitude": 2.356109465877721
  }, {
    "number": 19024,
    "name": "19024 - BUTTES CHAUMONT",
    "address": "28 / 30 RUE BOTZARIS - 75019 PARIS",
    "latitude": 48.8779512535706,
    "longitude": 2.381464662877906
  }, {
    "number": 6022,
    "name": "06022 - MARCHE SAINT GERMAIN - MABILLON",
    "address": "17 RUE LOBINEAU - 75006 PARIS",
    "latitude": 48.85165969291236,
    "longitude": 2.335504665009827
  }, {
    "number": 12043,
    "name": "12043 - DAUMESNIL HEBRARD",
    "address": "108, avenue Daumesnil - 75012 PARIS",
    "latitude": 48.8429,
    "longitude": 2.38474
  }, {
    "number": 21108,
    "name": "21108 - VILLENEUVE 2 (CLICHY)",
    "address": "6-8 RUE VILLENEUVE - 92110 CLICHY",
    "latitude": 48.903621012155874,
    "longitude": 2.306228565729878
  }, {
    "number": 12119,
    "name": "12119 - DOM PÉRIGNON GRAVELLE",
    "address": "ROUTE DOM PERIGNON - 75012 PARIS",
    "latitude": 48.82558443109317,
    "longitude": 2.409830941796777
  }, {
    "number": 23003,
    "name": "23003 - WILSON (LEVALLOIS)",
    "address": "132 RUE DU PRESIDENT WILSON - 92300 LEVALLOIS",
    "latitude": 48.89834000227244,
    "longitude": 2.285089933584791
  }, {
    "number": 16115,
    "name": "16115 - RAFFET",
    "address": "52 RUE RAFFET - 75016 PARIS",
    "latitude": 48.852618846108584,
    "longitude": 2.262930039103354
  }, {
    "number": 16102,
    "name": "16102 - PERGOLÈSE/ MARBEAU",
    "address": "52-54 RUE PERGOLÈSE - 75016 PARIS",
    "latitude": 48.87356870686902,
    "longitude": 2.281512522529856
  }, {
    "number": 20104,
    "name": "20104 - RUE LOUIS LUMIÈRE",
    "address": "68 RUE LOUIS LUMIERE - 75020 PARIS",
    "latitude": 48.86216198070008,
    "longitude": 2.41112578185621
  }, {
    "number": 10110,
    "name": "10110 - LOUIS BLANC",
    "address": "10 RUE LOUIS BLANC - 75010 PARIS",
    "latitude": 48.879332174655,
    "longitude": 2.36862871574876
  }, {
    "number": 14020,
    "name": "14020 - PORTE DE MONTROUGE",
    "address": "AV. DE LA PORTE DE MONTROUGE - 75014 PARIS",
    "latitude": 48.821216789689345,
    "longitude": 2.321173502143062
  }, {
    "number": 19124,
    "name": "19124 - ALEXANDER FLEMMING",
    "address": "RUE ALEXANDER FLEMMING - 75019 PARIS",
    "latitude": 48.881769793858254,
    "longitude": 2.403179367969562
  }, {
    "number": 2102,
    "name": "02102 - SAINT MARC",
    "address": "8 RUE SAINT MARC - 75002 PARIS",
    "latitude": 48.870314763994976,
    "longitude": 2.341878566630611
  }, {
    "number": 13007,
    "name": "13007 - LE BRUN GOBELINS",
    "address": "42 RUE LE BRUN - 75013 PARIS",
    "latitude": 48.835092787823875,
    "longitude": 2.353468135133752
  }, {
    "number": 11006,
    "name": "11006 - LEDRU ROLLIN-BASFROI",
    "address": "169 AVENUE LEDRU ROLLIN - 75011 PARIS",
    "latitude": 48.856433706943704,
    "longitude": 2.379020587761426
  }, {
    "number": 20118,
    "name": "20118 - ORTEAUX MOURAUD",
    "address": "100 RUE DES ORTEAUX - 75020 PARIS",
    "latitude": 48.85558642847872,
    "longitude": 2.408762907764669
  }, {
    "number": 11024,
    "name": "11024 - BOULEVARD VOLTAIRE",
    "address": "82 RUE SEDAINE - 75011 PARIS",
    "latitude": 48.85882890841428,
    "longitude": 2.378871327120361
  }, {
    "number": 15110,
    "name": "15110 - PLACE ROBERT GUILLEMARD",
    "address": "PLACE ROBERT GUILLEMARD - 75015 PARIS",
    "latitude": 48.83621036148383,
    "longitude": 2.281039381009245
  }, {
    "number": 16122,
    "name": "16122 - MUETTE NEUILLY",
    "address": "ROUTE DE LA MUETTE A NEUILLY - 75016 PARIS",
    "latitude": 48.880079643111614,
    "longitude": 2.258576589883702
  }, {
    "number": 7020,
    "name": "07020 - CLER",
    "address": "FACE 3 RUE DU CHAMP DE MARS - 75007 PARIS",
    "latitude": 48.85664110011817,
    "longitude": 2.306598534111823
  }, {
    "number": 41605,
    "name": "41605 - GENERAL DE GAULLE 2 (SAINT MANDE)",
    "address": "120 AVENUE GENERAL DE GAULLE - 94160 SAINT MANDE",
    "latitude": 48.83608867952291,
    "longitude": 2.418907594723682
  }, {
    "number": 16124,
    "name": "16124 - SÈVRES NEUILLY",
    "address": "Route de Sèvres à Neuilly - 75016 PARIS",
    "latitude": 48.875095937895146,
    "longitude": 2.24921698799858
  }, {
    "number": 15123,
    "name": "15123 - RUE DU COMMERCE",
    "address": "20 RUE DU COMMERCE - 75015 PARIS",
    "latitude": 48.8479921934615,
    "longitude": 2.29668168569178
  }, {
    "number": 5106,
    "name": "05106 - CUJAS",
    "address": "22 RUE CUJAS - 75005 PARIS",
    "latitude": 48.84819134858432,
    "longitude": 2.34183165485398
  }, {
    "number": 22001,
    "name": "22001 - CHATEAU (NEUILLY)",
    "address": "26 BOULEVARD DU CHATEAU - 92200 NEUILLY",
    "latitude": 48.89051191347665,
    "longitude": 2.270167225273174
  }, {
    "number": 12039,
    "name": "12039 - DECAEN",
    "address": "45 AVENUE DU GENERAL MICHEL BIZOT - 75012 PARIS",
    "latitude": 48.83481262982544,
    "longitude": 2.400927788127704
  }, {
    "number": 31006,
    "name": "31006 - REPUBLIQUE 2 (MONTREUIL)",
    "address": "2/4 PLACE DE LA REPUBLIQUE - 93100 MONTREUIL",
    "latitude": 48.85375961633593,
    "longitude": 2.424445808011069
  }, {
    "number": 16037,
    "name": "16037 - MOLITOR - MICHEL ANGE",
    "address": "35 RUE MOLITOR - 75016 PARIS",
    "latitude": 48.845182081538034,
    "longitude": 2.26211277356597
  }, {
    "number": 2007,
    "name": "02007 - CHABANAIS",
    "address": "1 RUE CHABANAIS - 75002 PARIS",
    "latitude": 48.867123446448645,
    "longitude": 2.336686608238879
  }, {
    "number": 1008,
    "name": "01008 - LOUVRE / COQUILLERE",
    "address": "9 rue COQUILLIERE 75001 PARIS",
    "latitude": 48.863580506517565,
    "longitude": 2.342609463824718
  }, {
    "number": 5110,
    "name": "05110 - LACEPEDE",
    "address": "27 RUE LACEPEDE - 75005 PARIS",
    "latitude": 48.843860353248765,
    "longitude": 2.35190222528039
  }, {
    "number": 12011,
    "name": "12011 - CHARENTON",
    "address": "160 RUE CHARENTON - 75012 PARIS",
    "latitude": 48.84486731955409,
    "longitude": 2.382578935054453
  }, {
    "number": 10151,
    "name": "10151 - GARE DU NORD 1",
    "address": "8-10 RUE DE DUNKERQUE - 75010 PARIS",
    "latitude": 48.87963935299516,
    "longitude": 2.356904958415215
  }, {
    "number": 16021,
    "name": "16021 - RUE FRANCOIS PONSARD",
    "address": "1 RUE FRANCOIS PONSARD - 75016 PARIS",
    "latitude": 48.858427696615,
    "longitude": 2.274308524144912
  }, {
    "number": 20503,
    "name": "20503 - COURS DE VINCENNES PYRÉNÉES",
    "address": "1 RUE DES PYRENEES - 75020 PARIS",
    "latitude": 48.847724968984686,
    "longitude": 2.405907317017889
  }, {
    "number": 31709,
    "name": "31709 - MARCEL (BAGNOLET)",
    "address": "FACE AU 184 RUE ETIENNE MARCEL - 93170 BAGNOLET",
    "latitude": 48.857050394743816,
    "longitude": 2.422549956709779
  }, {
    "number": 1011,
    "name": "01011 - RIVOLI MAIRIE DU 1ER",
    "address": "36 RUE DE L'ARBRE SEC - 75001 PARIS",
    "latitude": 48.86024709541543,
    "longitude": 2.342302645725544
  }, {
    "number": 13110,
    "name": "13110 - MOULIN DE LA POINTE",
    "address": "66 RUE DU MOULIN DE LA POINTE - 75013 PARIS",
    "latitude": 48.821039286989794,
    "longitude": 2.356345144172923
  }, {
    "number": 21503,
    "name": "21503 - LEDRU ROLLIN (SURESNES)",
    "address": "13/15 RUE LEDRU ROLLIN - 92150 SURESNES",
    "latitude": 48.870920487633555,
    "longitude": 2.229589352206592
  }, {
    "number": 1017,
    "name": "01017 - SAINT HONORE",
    "address": "215 RUE SAINT HONORE - 75001 PARIS",
    "latitude": 48.86557114282421,
    "longitude": 2.330567417577153
  }, {
    "number": 17006,
    "name": "17006 - GUY MOQUET DAVY",
    "address": "34 RUE GUY MOQUET - 75017 PARIS",
    "latitude": 48.8920640862454,
    "longitude": 2.32329134120854
  }, {
    "number": 7006,
    "name": "07006 - QUAI VOLTAIRE",
    "address": "QUAI VOLTAIRE - 75007 PARIS",
    "latitude": 48.85894298617901,
    "longitude": 2.331418204714572
  }, {
    "number": 8041,
    "name": "08041 - CHAMPS ELYSEES LINCOLN",
    "address": "16 RUE DE LINCOLN - 75008 PARIS",
    "latitude": 48.87069015790859,
    "longitude": 2.303222423974782
  }, {
    "number": 21311,
    "name": "21311 - GAMBETTA (ISSY LES MOULINEAUX)",
    "address": "FACE AU 40 BOULEVARD GAMBETTA - 92130 ISSY LES MOULINEAUX",
    "latitude": 48.827470501735846,
    "longitude": 2.278549600821535
  }, {
    "number": 19121,
    "name": "19121 - BELLEVILLE PRE SAINT GERVAIS",
    "address": "195 RUE DE BELLEVILLE - 75019 PARIS",
    "latitude": 48.875518068648745,
    "longitude": 2.392960787279829
  }, {
    "number": 1020,
    "name": "01020 - RIVOLI CONCORDE",
    "address": "2 RUE CAMBON - 75001 PARIS",
    "latitude": 48.866285221156055,
    "longitude": 2.325249045083579
  }, {
    "number": 10007,
    "name": "10007 - CHATEAU D'EAU",
    "address": "57 RUE DU CHATEAU D'EAU - 75010 PARIS",
    "latitude": 48.87242997325711,
    "longitude": 2.355489390173873
  }
]);

angular.module('maps-api').factory('distanceService', function(MAPS_API_KEY, DISTANCE_API_URL, $http) {
  var service;
  service = new google.maps.DistanceMatrixService();
  return {
    computeDistances: function(origin, velibStations) {
      var callback, destinations;
      velibStations = [
        {
          "number": 31705,
          "name": "31705 - CHAMPEAUX (BAGNOLET)",
          "address": "RUE DES CHAMPEAUX (PRES DE LA GARE ROUTIERE) - 93170 BAGNOLET",
          "latitude": 48.8645278209514,
          "longitude": 2.416170724425901
        }, {
          "number": 10042,
          "name": "10042 - POISSONNIÈRE - ENGHIEN",
          "address": "52 RUE D'ENGHIEN / ANGLE RUE DU FAUBOURG POISSONIERE - 75010 PARIS",
          "latitude": 48.87242006305313,
          "longitude": 2.348395236282807
        }, {
          "number": 8020,
          "name": "08020 - METRO ROME",
          "address": "74 BOULEVARD DES BATIGNOLLES - 75008 PARIS",
          "latitude": 48.882148945631904,
          "longitude": 2.319860054774211
        }
      ];
      if (velibStations.length === 0) {
        return null;
      }
      origin = new google.maps.LatLng(48.882599, 2.322190);
      destinations = [];
      angular.forEach(velibStations, function(station) {
        return destinations.push(new google.maps.LatLng(station.latitude, station.longitude));
      });
      callback = function(result, status) {
        console.log(result);
        return console.log(status);
      };
      return console.log(origin);
    }
  };
});

angular.module('map').factory('Map', function(Station) {
  var displayClosestStations, getCenterPosition, map;
  map = null;
  getCenterPosition = function() {
    return new google.maps.LatLng(48.882599, 2.322190);
  };
  displayClosestStations = function(position, limit) {
    var bounds;
    bounds = new google.maps.LatLngBounds();
    return Station.getStationsToDisplay(position, limit).then(function(stations) {
      var i, len, station;
      for (i = 0, len = stations.length; i < len; i++) {
        station = stations[i];
        position = new google.maps.LatLng(station.position.lat, station.position.lng);
        new google.maps.Marker({
          position: position,
          map: map,
          title: station.title,
          icon: station.iconUrl
        });
        bounds.extend(position);
      }
      return bounds;
    });
  };
  return {
    initialize: function() {
      var input, mapCanvas, mapOptions, parisBounds, searchBox;
      mapCanvas = document.getElementById('map-canvas');
      mapOptions = {
        center: getCenterPosition(),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(mapCanvas, mapOptions);
      parisBounds = new google.maps.LatLngBounds(new google.maps.LatLng(48.750999, 2.021247), new google.maps.LatLng(48.950481, 2.542754));
      input = document.getElementById('pac-input');
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
      searchBox = new google.maps.places.SearchBox(input);
      searchBox.setBounds(parisBounds);
      google.maps.event.addListener(searchBox, 'places_changed', function() {
        var destination, marker, places;
        places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        destination = places[0];
        marker = new google.maps.Marker({
          map: map,
          title: destination.name,
          position: destination.geometry.location
        });
        displayClosestStations(destination.geometry.location, 10).then(function(bounds) {
          bounds.extend(destination.geometry.location);
          return map.fitBounds(bounds);
        });
        return new google.maps.Marker({
          position: getCenterPosition(),
          map: map,
          title: 'Your position'
        });
      });
      displayClosestStations(getCenterPosition(), 10);
      return map;
    }
  };
});

angular.module('station').factory('Station', function(STATIONS, apiURL, apiKey, CONTRACT_NAME, $http, $q) {
  var sortByDistance;
  sortByDistance = function(position) {
    return _.sortBy(STATIONS, function(station) {
      var x, y;
      x = station.latitude - position.A;
      y = station.longitude - position.F;
      return x * x + y * y;
    });
  };
  return {
    getStationsToDisplay: function(position, limit) {
      var count, promises, station, stations, stationsToDisplay;
      stations = sortByDistance(position);
      count = 0;
      stationsToDisplay = [];
      promises = (function() {
        var i, len, ref, results;
        ref = stations.slice(0, limit);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          station = ref[i];
          results.push($http.get(apiURL + "/stations/" + station.number + "?contract=" + CONTRACT_NAME + "&apiKey=" + apiKey));
        }
        return results;
      })();
      count = 0;
      return $q.all(promises).then(function(result) {
        angular.forEach(result, function(response) {
          var stationData;
          stationData = response.data;
          if (stationData.status === 'OPEN' && stationData.available_bikes > 2) {
            count += 1;
          }
          stationData.iconUrl = 'www/img/take-' + Math.ceil(stationData.available_bikes / stationData.bike_stands * 10) + '.png';
          stationData.title = stationData.available_bikes + " velo dispo";
          return stationsToDisplay.push(stationData);
        });
        return stationsToDisplay;
      });
    }
  };
});

angular.module('statistics').factory('statisticsService', function(STATISTICS_API_URL, $http) {
  return {
    getHistoric: function(station_id, contract_name, callback) {
      return $http.get(STATISTICS_API_URL + "/station/" + contract_name + "/" + station_id).then(function(response) {
        return callback(response.data.data);
      });
    },
    drawChart: function(container, station_id, width, height, data) {
      var line, margin, maxLine, svg, x, xAxis, y, yAxis;
      console.log(container);
      console.log(data);
      margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
      };
      width = width - margin.left - margin.right;
      height = height - margin.top - margin.bottom;
      x = d3.time.scale().range([0, width]);
      y = d3.scale.linear().range([height, 0]);
      xAxis = d3.svg.axis().scale(x).ticks(d3.time.minute, 30).tickFormat(d3.time.format('%H:%M')).orient('bottom');
      yAxis = d3.svg.axis().scale(y).orient('left');
      line = d3.svg.line().x(function(d) {
        return x(new Date(d.last_update));
      }).y(function(d) {
        return y(d.available_bikes);
      });
      maxLine = d3.svg.line().x(function(d) {
        return x(new Date(d.last_update));
      }).y(function(d) {
        return y(d.available_bike_stands + d.available_bikes);
      });
      svg = container.append('svg').attr('id', 'station-' + station_id).attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      x.domain(d3.extent(data, function(d) {
        return new Date(d.last_update);
      }));
      y.domain([0, data[0].bike_stands]);
      svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + height + ')').call(xAxis);
      svg.append('g').attr('class', 'y axis').call(yAxis);
      svg.append('path').datum(data).attr('class', 'line').attr('d', line);
      return svg.append('path').datum(data).attr('class', 'max-line').attr('d', maxLine);
    }
  };
});
