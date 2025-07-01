export interface State {
  code: string
  name: string
  cities: City[]
}

export interface City {
  name: string
  neighborhoods: string[]
}

export const brazilStates: State[] = [
  {
    code: "AC",
    name: "Acre",
    cities: [
      {
        name: "Rio Branco",
        neighborhoods: ["Centro", "Bosque", "Cadeia Velha", "Cidade Nova", "Vila Ivonete", "Quinze", "Aviário", "Estação Experimental"]
      },
      {
        name: "Cruzeiro do Sul",
        neighborhoods: ["Centro", "Cohab", "Miritizal", "Várzea Alegre", "Lagoa", "Aeroporto"]
      }
    ]
  },
  {
    code: "AL",
    name: "Alagoas",
    cities: [
      {
        name: "Maceió",
        neighborhoods: ["Pajuçara", "Ponta Verde", "Jatiúca", "Cruz das Almas", "Farol", "Centro", "Poço", "Levada", "Pinheiro", "Serraria", "Benedito Bentes", "Cidade Universitária"]
      },
      {
        name: "Arapiraca",
        neighborhoods: ["Centro", "Primavera", "Senador Nilo Coelho", "Baixão", "Planalto", "Eldorado"]
      }
    ]
  },
  {
    code: "AP",
    name: "Amapá",
    cities: [
      {
        name: "Macapá",
        neighborhoods: ["Centro", "Trem", "Laguinho", "Jesus de Nazaré", "Buritizal", "Cidade Nova", "Perpétuo Socorro", "São Lázaro", "Zerão", "Infraero"]
      },
      {
        name: "Santana",
        neighborhoods: ["Centro", "Novo Horizonte", "Paraíso", "Comercial", "Fonte Nova"]
      }
    ]
  },
  {
    code: "AM",
    name: "Amazonas",
    cities: [
      {
        name: "Manaus",
        neighborhoods: ["Centro", "Adrianópolis", "Aleixo", "Chapada", "Cidade Nova", "Coroado", "Flores", "Japiim", "Nossa Senhora das Graças", "Petrópolis", "Ponta Negra", "São José", "Tarumã", "Vieiralves", "Zona Franca"]
      },
      {
        name: "Parintins",
        neighborhoods: ["Centro", "Francesa", "Palmares", "São Benedito", "Itaúna"]
      }
    ]
  },
  {
    code: "BA",
    name: "Bahia",
    cities: [
      {
        name: "Salvador",
        neighborhoods: ["Pelourinho", "Barra", "Ondina", "Rio Vermelho", "Pituba", "Itaigara", "Caminho das Árvores", "Iguatemi", "Alphaville", "Paralela", "Brotas", "Federação", "Graça", "Vitória", "Corredor da Vitória", "Campo Grande", "Nazaré", "Barris", "Canela", "Garcia", "Bonfim", "Ribeira", "Comércio", "Dois Leões", "Liberdade", "IAPI", "São Caetano", "Fazenda Grande", "Cajazeiras", "Cabula", "Tancredo Neves", "Imbuí", "Piatã", "Itapuã", "Stella Maris"]
      },
      {
        name: "Feira de Santana",
        neighborhoods: ["Centro", "Kalilândia", "Queimadinha", "Cidade Nova", "Campo Limpo", "Brasília", "Conceição", "Tomba", "Feira VI", "Feira VII", "Feira VIII", "Feira IX", "Feira X"]
      },
      {
        name: "Vitória da Conquista",
        neighborhoods: ["Centro", "Candeias", "Brasil", "Recreio", "Jurema", "Ibirapuera", "Zabelê", "Boa Vista", "Alto Maron"]
      },
      {
        name: "Camaçari",
        neighborhoods: ["Centro", "Verdes Horizontes", "Phoc", "Gleba A", "Gleba C", "Gleba E", "Piaçaveira", "Abrantes"]
      },
      {
        name: "Juazeiro",
        neighborhoods: ["Centro", "Quidé", "João Paulo II", "Piranga", "Angari", "Kalilandia", "Antônio Conselheiro"]
      },
      {
        name: "Lauro de Freitas",
        neighborhoods: ["Centro", "Itinga", "Portão", "Caji", "Vida Nova", "Buraquinho", "Areia Branca"]
      }
    ]
  },
  {
    code: "CE",
    name: "Ceará",
    cities: [
      {
        name: "Fortaleza",
        neighborhoods: ["Centro", "Aldeota", "Meireles", "Iracema", "Mucuripe", "Varjota", "Cocó", "Papicu", "Praia do Futuro", "Dionísio Torres", "Joaquim Távora", "Fátima", "Benfica", "Montese", "Parangaba", "Antônio Bezerra", "Bom Jardim", "Caucaia", "Messejana", "Maracanaú", "Conjunto Ceará", "Barra do Ceará", "Pirambu", "Cristo Redentor", "Carlito Pamplona", "Passaré", "José Bonifácio", "Castelão"]
      },
      {
        name: "Caucaia",
        neighborhoods: ["Centro", "Jurema", "Parque Soledade", "Metrópole", "Novo Pabussu", "Araturi", "Cumbuco"]
      },
      {
        name: "Juazeiro do Norte",
        neighborhoods: ["Centro", "Lagoa Seca", "João Cabral", "Franciscanos", "Salesianos", "Pirajá", "Triângulo", "Timbaúbas"]
      },
      {
        name: "Sobral",
        neighborhoods: ["Centro", "Campo dos Velhos", "Expectativa", "Terrenos Novos", "Alto da Brasília", "Sinhá Sabóia"]
      }
    ]
  },
  {
    code: "DF",
    name: "Distrito Federal",
    cities: [
      {
        name: "Brasília",
        neighborhoods: ["Asa Norte", "Asa Sul", "Lago Norte", "Lago Sul", "Sudoeste", "Noroeste", "Octogonal", "Cruzeiro", "W3 Norte", "W3 Sul", "Setor Comercial Norte", "Setor Comercial Sul", "Setor Bancário Norte", "Setor Bancário Sul", "Esplanada dos Ministérios"]
      },
      {
        name: "Taguatinga",
        neighborhoods: ["Taguatinga Norte", "Taguatinga Sul", "Taguatinga Centro", "Águas Claras", "Vicente Pires", "Samambaia", "Ceilândia", "Guará", "Núcleo Bandeirante", "Riacho Fundo", "Santa Maria", "Gama", "Sobradinho", "Planaltina", "Brazlândia", "Paranoá", "São Sebastião", "Recanto das Emas"]
      }
    ]
  },
  {
    code: "ES",
    name: "Espírito Santo",
    cities: [
      {
        name: "Vitória",
        neighborhoods: ["Centro", "Praia do Canto", "Enseada do Suá", "Bento Ferreira", "Jardim da Penha", "Mata da Praia", "Santa Lúcia", "Jardim Camburi", "Goiabeiras", "Jesus de Nazareth", "Maruípe", "Santo Antônio", "Forte São João", "Ilha do Príncipe", "Ilha do Boi", "Fradinhos"]
      },
      {
        name: "Vila Velha",
        neighborhoods: ["Centro", "Praia da Costa", "Itaparica", "Itapuã", "Coqueiral de Itaparica", "Glória", "Paul", "Divino Espírito Santo", "Santa Inês", "Cristóvão Colombo", "Alecrim", "Aribiri", "Barramares", "Barra do Jucu"]
      },
      {
        name: "Cariacica",
        neighborhoods: ["Centro", "Campo Grande", "Porto de Santana", "Nova Rosa da Penha", "Itacibá", "Rio Branco", "Flexal", "Santa Bárbara"]
      },
      {
        name: "Serra",
        neighborhoods: ["Laranjeiras", "Serra Sede", "Carapina", "Jardim Limoeiro", "Nova Almeida", "Manguinhos", "Feu Rosa", "Colina de Laranjeiras"]
      }
    ]
  },
  {
    code: "GO",
    name: "Goiás",
    cities: [
      {
        name: "Goiânia",
        neighborhoods: ["Centro", "Setor Oeste", "Setor Sul", "Setor Bueno", "Setor Marista", "Jardim Goiás", "Alto da Glória", "Campinas", "Nova Suíça", "Park Lozandes", "Setor Pedro Ludovico", "Vila Nova", "Papillon Park", "Residencial Eldorado", "Setor Universitário", "Setor Aeroporto", "Jardim América", "Setor Coimbra", "Cidade Jardim", "Parque Amazônia"]
      },
      {
        name: "Aparecida de Goiânia",
        neighborhoods: ["Centro", "Cidade Livre", "Jardim Olímpico", "Setor Garavelo", "Papillon Park", "Jardim Florença", "Mansões Paraíso", "Veiga Jardim", "Buriti Sereno"]
      },
      {
        name: "Anápolis",
        neighborhoods: ["Centro", "Jundiaí", "Vila Esperança", "Recanto do Sol", "Jardim Alexandrina", "Setor Universitário", "Vila Norte", "Cidade Jardim"]
      }
    ]
  },
  {
    code: "MA",
    name: "Maranhão",
    cities: [
      {
        name: "São Luís",
        neighborhoods: ["Centro", "Renascença", "Calhau", "São Francisco", "Ponta d'Areia", "Olho d'Água", "Turu", "Cohama", "Jardim Eldorado", "Vinhais", "São Cristóvão", "Liberdade", "João Paulo", "Cidade Operária", "Anjo da Guarda", "Alemanha", "Vila Palmeira", "Coroadinho", "Cohatrac"]
      },
      {
        name: "Imperatriz",
        neighborhoods: ["Centro", "Nova Imperatriz", "Bacuri", "Cidade Nova", "Vila Lobão", "Três Poderes", "Santa Inês", "Vila Redenção"]
      },
      {
        name: "Caxias",
        neighborhoods: ["Centro", "Ponte", "Caldeirões", "Seriema", "Baixinha", "Itapecuru"]
      }
    ]
  },
  {
    code: "MT",
    name: "Mato Grosso",
    cities: [
      {
        name: "Cuiabá",
        neighborhoods: ["Centro", "Goiabeiras", "Jardim Aclimação", "Bosque da Saúde", "Duque de Caxias", "Bandeirantes", "Quilombo", "Araés", "Porto", "Lixeira", "Grande Terceiro", "Coophema", "Pedra 90", "Cidade Verde", "Ribeirão da Ponte", "Alvorada"]
      },
      {
        name: "Várzea Grande",
        neighborhoods: ["Centro", "Jardim dos Estados", "Costa Verde", "Mapim", "Cristo Rei", "Ponte Nova", "Capão Grande", "Jardim Paula"]
      },
      {
        name: "Rondonópolis",
        neighborhoods: ["Centro", "Vila Paulista", "Jardim Atlântico", "Cidade Salmen", "Vila Operária", "Boa Esperança", "Parque Universitário"]
      }
    ]
  },
  {
    code: "MS",
    name: "Mato Grosso do Sul",
    cities: [
      {
        name: "Campo Grande",
        neighborhoods: ["Centro", "Jardim dos Estados", "Vila Carvalho", "Monte Castelo", "Amambaí", "Coophavila II", "Rita Vieira", "Nova Lima", "Jardim Leblon", "Chácara Cachoeira", "Jardim Anache", "Vila Nasser", "Tiradentes", "Jardim Imá", "Coronel Antonino", "Jardim TV Morena"]
      },
      {
        name: "Dourados",
        neighborhoods: ["Centro", "Jardim Água Boa", "Vila Industrial", "Parque do Lago", "BNH", "Jardim Clímax", "Vila Progresso"]
      },
      {
        name: "Três Lagoas",
        neighborhoods: ["Centro", "Jardim Alvorada", "Vila Haro", "Colinos", "Santa Rita", "Interlagos", "Jardim Paranapunga"]
      }
    ]
  },
  {
    code: "MG",
    name: "Minas Gerais",
    cities: [
      {
        name: "Belo Horizonte",
        neighborhoods: ["Centro", "Savassi", "Funcionários", "Lourdes", "Santo Agostinho", "Cidade Jardim", "Mangabeiras", "Belvedere", "Buritis", "Pampulha", "São Bento", "Floresta", "Santa Efigênia", "Barro Preto", "Santo Antônio", "Carlos Prates", "Coração Eucarístico", "São Lucas", "Castelo", "Anchieta", "Sion", "Cruzeiro", "Barreiro", "Venda Nova", "Norte", "Nordeste", "Noroeste", "Oeste", "Pindorama", "Betânia", "Estoril", "Gutierrez", "Luxemburgo", "Serra", "União", "Jardim América"]
      },
      {
        name: "Uberlândia",
        neighborhoods: ["Centro", "Fundinho", "Nossa Senhora Aparecida", "Tibery", "Santa Mônica", "Jardim Karaíba", "Morumbi", "Planalto", "Segismundo Pereira", "Jardim Brasília", "Umuarama", "Vigilato Pereira", "Tabajaras", "Jardim Patrícia", "Cidade Jardim"]
      },
      {
        name: "Contagem",
        neighborhoods: ["Centro", "Eldorado", "Industrial", "Ressaca", "Petrolândia", "Bernardo Monteiro", "Cinco", "Sapucaias", "Riacho", "Nacional", "Cabral", "JK", "Água Branca"]
      },
      {
        name: "Juiz de Fora",
        neighborhoods: ["Centro", "Alto dos Passos", "São Mateus", "Bom Pastor", "Santa Helena", "Cascatinha", "Paineiras", "Jardim Natal", "Linhares", "Benfica", "Granbery", "Manoel Honório", "Fábrica", "Mariano Procópio", "São Pedro", "Santa Luzia", "Borboleta"]
      }
    ]
  },
  {
    code: "PA",
    name: "Pará",
    cities: [
      {
        name: "Belém",
        neighborhoods: ["Centro", "Nazaré", "Batista Campos", "Campina", "Cidade Velha", "Reduto", "Umarizal", "Marco", "São Brás", "Telégrafo", "Pedreira", "Cremação", "Canudos", "Terra Firme", "Jurunas", "Condor", "Guamá", "Sacramenta", "Val-de-Cans", "Marambaia", "Icoaraci", "Outeiro", "Mosqueiro"]
      },
      {
        name: "Ananindeua",
        neighborhoods: ["Centro", "Cidade Nova", "Coqueiro", "Águas Lindas", "Icuí-Guajará", "Guanabara", "Jaderlândia", "PAAR"]
      },
      {
        name: "Santarém",
        neighborhoods: ["Centro", "Aparecida", "Fátima", "Santarenzinho", "Liberdade", "Diamantino", "Maracanã", "Interventoria"]
      },
      {
        name: "Marabá",
        neighborhoods: ["Centro", "Cidade Nova", "Nova Marabá", "Marabá Pioneira", "São Félix", "Morada Nova", "Liberdade"]
      }
    ]
  },
  {
    code: "PB",
    name: "Paraíba",
    cities: [
      {
        name: "João Pessoa",
        neighborhoods: ["Centro", "Tambaú", "Cabo Branco", "Manaíra", "Bessa", "Aeroclube", "Bancários", "Jardim Cidade Universitária", "Torre", "Jaguaribe", "Estados", "Expedicionários", "Cristo Redentor", "Mangabeira", "Valentina", "José Américo", "Gramame", "Colinas do Sul"]
      },
      {
        name: "Campina Grande",
        neighborhoods: ["Centro", "Prata", "Liberdade", "Catolé", "Bodocongó", "Três Irmãs", "José Pinheiro", "Pedregal", "Malvinas", "Cuités", "Santa Rosa", "Jardim Paulistano"]
      },
      {
        name: "Santa Rita",
        neighborhoods: ["Centro", "Forte Velho", "Tibiri", "Marcos Moura", "Jardim Miritânia", "Várzea Nova"]
      }
    ]
  },
  {
    code: "PR",
    name: "Paraná",
    cities: [
      {
        name: "Curitiba",
        neighborhoods: ["Centro", "Batel", "Água Verde", "Bigorrilho", "Cabral", "Cristo Rei", "Juvevê", "Mercês", "Rebouças", "São Francisco", "Ahú", "Alto da Glória", "Alto da XV", "Bacacheri", "Boa Vista", "Bom Retiro", "Cajuru", "Campo Comprido", "Capão da Imbuia", "Capão Raso", "Cidade Industrial", "Fanny", "Fazendinha", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Lindóia", "Mossunguê", "Novo Mundo", "Parolin", "Pilarzinho", "Portão", "Prado Velho", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São João", "São Lourenço", "Seminário", "Tarumã", "Uberaba", "Vila Izabel", "Vista Alegre", "Xaxim"]
      },
      {
        name: "Londrina",
        neighborhoods: ["Centro", "Zona Sul", "Jardim Higienópolis", "Jardim Shangri-lá", "Vila Recreio", "Conjunto Habitacional João Paz", "Jardim do Sol", "Gleba Fazenda Palhano", "Jardim Petrópolis", "Conjunto Vivi Xavier", "Jardim Bandeirantes"]
      },
      {
        name: "Maringá",
        neighborhoods: ["Centro", "Zona Sul", "Jardim Alvorada", "Novo Centro", "Vila Esperança", "Jardim Universitário", "Zona Norte", "Jardim Internorte", "Conjunto Residencial Inocente Vilanova Júnior"]
      },
      {
        name: "Ponta Grossa",
        neighborhoods: ["Centro", "Oficinas", "Jardim Carvalho", "Uvaranas", "Orfãs", "Nova Rússia", "Colônia Dona Luíza", "Ronda", "Estrela"]
      }
    ]
  },
  {
    code: "PE",
    name: "Pernambuco",
    cities: [
      {
        name: "Recife",
        neighborhoods: ["Centro", "Boa Viagem", "Piedade", "Imbiribeira", "Pina", "Brasília Teimosa", "Setúbal", "Cordeiro", "Torre", "Madalena", "Prado", "Derby", "Espinheiro", "Graças", "Aflitos", "Jaqueira", "Parnamirim", "Casa Forte", "Poço da Panela", "Monteiro", "Apipucos", "Casa Amarela", "Dois Unidos", "Água Fria", "Fundão", "Beberibe", "Hidalgo", "Linha do Tiro", "Cajueiro", "Campina do Barreto", "Porto da Madeira", "Peixinhos", "Caxangá", "Cidade Universitária", "Várzea", "Curado", "Sancho", "Barro", "Cohab", "Ibura", "Jordão", "Ipsep"]
      },
      {
        name: "Jaboatão dos Guararapes",
        neighborhoods: ["Centro", "Piedade", "Candeias", "Barra de Jangada", "Cavaleiro", "Muribeca", "Prazeres", "Sucupira", "Zumbi", "Marcos Freire"]
      },
      {
        name: "Olinda",
        neighborhoods: ["Centro Histórico", "Casa Caiada", "Rio Doce", "Bairro Novo", "Peixinhos", "Águas Compridas", "Varadouro", "Carmo", "Amparo", "Guadalupe", "Jardim Atlântico"]
      },
      {
        name: "Caruaru",
        neighborhoods: ["Centro", "Maurício de Nassau", "Indianópolis", "Petrópolis", "Salgado", "Rendeiras", "Vassoural", "Nova Caruaru", "Cedro"]
      }
    ]
  },
  {
    code: "PI",
    name: "Piauí",
    cities: [
      {
        name: "Teresina",
        neighborhoods: ["Centro", "Fátima", "Jóquei", "Cabral", "São Cristóvão", "Marquês", "Mocambinho", "Dirceu", "Ininga", "Horto", "Morros", "Piçarra", "Primavera", "Santa Maria da Codipi", "Vila Operária", "Água Mineral", "Angelim", "Buenos Aires", "Cidade Nova", "Comprida", "Esplanada", "Gurupi", "Ilhotas", "Itararé", "Lourival Parente", "Mafrense", "Monte Castelo", "Noivos", "Parque Piauí", "Pedra Mole", "Planalto", "Porenquanto", "Redenção", "Saci", "Santa Isabel", "São João", "São Paulo", "Tancredo Neves", "Três Andares", "Vermelha", "Vila Bandeirante", "Vila União"]
      },
      {
        name: "Parnaíba",
        neighborhoods: ["Centro", "Pindorama", "Catarina", "São Vicente de Paulo", "Planalto", "Bebedouro", "Piauí", "Fátima"]
      }
    ]
  },
  {
    code: "RJ",
    name: "Rio de Janeiro",
    cities: [
      {
        name: "Rio de Janeiro",
        neighborhoods: ["Centro", "Copacabana", "Ipanema", "Leblon", "Barra da Tijuca", "Tijuca", "Botafogo", "Flamengo", "Laranjeiras", "Catete", "Glória", "Santa Teresa", "Lapa", "Urca", "Lagoa", "Jardim Botânico", "Gávea", "São Conrado", "Recreio dos Bandeirantes", "Jacarepaguá", "Taquara", "Freguesia", "Pechincha", "Tanque", "Vila Valqueire", "Praça Seca", "Campinho", "Madureira", "Cascadura", "Pilares", "Abolição", "Água Santa", "Encantado", "Lins de Vasconcelos", "Sampaio", "Riachuelo", "Rocha", "São Francisco Xavier", "Grajaú", "Vila Isabel", "Andaraí", "Maracanã", "Praça da Bandeira", "Estácio", "Rio Comprido", "Cidade Nova", "Gamboa", "Saúde", "Santo Cristo", "Caju", "São Cristóvão", "Benfica", "Mangueira", "Bonsucesso", "Ramos", "Olaria", "Penha", "Penha Circular", "Brás de Pina", "Cordovil", "Parada de Lucas", "Vigário Geral", "Jardim América", "Irajá", "Vicente de Carvalho", "Vila da Penha", "Vista Alegre", "Vila Kosmos", "Colégio", "Turiaçu", "Rocha Miranda", "Honório Gurgel", "Marechal Hermes", "Bento Ribeiro", "Magarça", "Campinho", "Quintino Bocaiúva", "Piedade", "Méier", "Engenho Novo", "Sampaio", "Riachuelo", "Rocha", "São Francisco Xavier", "Todos os Santos", "Cachambi", "Água Santa", "Encantado", "Lins de Vasconcelos", "Engenho de Dentro", "Abolição", "Pilares", "Inhaúma", "Engenho da Rainha", "Tomás Coelho", "Jacaré", "Maria da Graça", "Del Castilho", "Higienópolis", "Piedade", "Quintino", "Cascadura", "Madureira", "Vaz Lobo", "Turiaçu", "Rocha Miranda", "Honório Gurgel", "Oswaldo Cruz", "Bento Ribeiro", "Marechal Hermes", "Deodoro", "Vila Militar", "Magalhães Bastos", "Realengo", "Padre Miguel", "Bangu", "Senador Camará", "Santíssimo", "Campo Grande", "Cosmos", "Inhoaíba", "Paciência", "Santa Cruz", "Sepetiba", "Guaratiba", "Barra de Guaratiba", "Pedra de Guaratiba"]
      },
      {
        name: "São Gonçalo",
        neighborhoods: ["Centro", "Alcântara", "Arsenal", "Barro Vermelho", "Boa Vista", "Boaçu", "Brasilândia", "Colubandê", "Estrela do Norte", "Fonseca", "Gradim", "Ipiíba", "Itaóca", "Itaúna", "Jardim Alcântara", "Jardim Catarina", "Lagoinha", "Laranjal", "Luiz Caçador", "Marambaia", "Maria Paula", "Mutondo", "Neves", "Novo México", "Pacheco", "Palmeiras", "Paraíso", "Porto da Madama", "Porto da Pedra", "Porto do Rosa", "Porto Novo", "Raul Veiga", "Rio do Ouro", "Rocha", "Sacramento", "Salgueiro", "Santa Catarina", "Santa Isabel", "Santa Luzia", "São Miguel", "Tribobó", "Trindade", "Várzea das Moças", "Vila Lage", "Zé Garoto"]
      },
      {
        name: "Duque de Caxias",
        neighborhoods: ["Centro", "25 de Agosto", "Barro Branco", "Campos Elíseos", "Cangulo", "Capivari", "Centenário", "Cidade dos Meninos", "Copacabana", "Corte Oito", "Doutor Laureano", "Eldorado", "Figueira", "Gramacho", "Imbariê", "Itatiaia", "Jardim Gramacho", "Jardim Primavera", "Lamarão", "Olavo Bilac", "Parque Duque", "Parque Eldorado", "Parque Fluminense", "Parque Lafaiete", "Periquitos", "Pilar", "Santa Cruz da Serra", "Santa Lúcia", "Santo Antônio", "São Bento", "Saracuruna", "Taquara", "Três Corações", "Vila São Luís", "Xerém"]
      },
      {
        name: "Nova Iguaçu",
        neighborhoods: ["Centro", "Cabuçu", "Cerâmica", "Comendador Soares", "Da Luz", "Danon", "Geneciano", "Jardim Alvorada", "Jardim Nova Era", "Km 32", "Marapicu", "Miguel Couto", "Moquetá", "Nova América", "Ouro Verde", "Parque Flora", "Posse", "Rancho Novo", "Santa Rita", "Tinguá", "Valverde", "Vila de Cava", "Vila Operária"]
      },
      {
        name: "Belford Roxo",
        neighborhoods: ["Centro", "Areia Branca", "Bom Pastor", "Heliópolis", "Lote XV", "Nova Aurora", "Parque Amorim", "Parque São José", "Santa Amélia", "Santa Tereza", "São Bernardo", "Wona"]
      },
      {
        name: "São João de Meriti",
        neighborhoods: ["Centro", "Agostinho Porto", "Coelho da Rocha", "Éden", "Jardim Meriti", "São Mateus", "Tomazinho", "Vilar dos Teles"]
      },
      {
        name: "Campos dos Goytacazes",
        neighborhoods: ["Centro", "Guarus", "Pelinca", "Parque Califórnia", "Parque Riachuelo", "Parque Santo Amaro", "Penha", "Turf Club", "Jardim Carioca", "Parque Leopoldina"]
      },
      {
        name: "Petrópolis",
        neighborhoods: ["Centro", "Alto da Serra", "Bingen", "Cascatinha", "Corrêas", "Duchas", "Itaipava", "Nogueira", "Pedro do Rio", "Quitandinha", "Retiro", "Samambaia", "São Sebastião", "Valparaíso"]
      },
      {
        name: "Volta Redonda",
        neighborhoods: ["Centro", "Aterrado", "Bela Vista", "Conforto", "Eucaliptal", "Jardim Amália", "Niterói", "Retiro", "Santa Cruz", "São Geraldo", "São João", "São Luiz", "Vila Mury", "Vila Santa Cecília"]
      },
      {
        name: "Magé",
        neighborhoods: ["Centro", "Fragoso", "Piabetá", "Santo Aleixo", "Suruí", "Vila Inhomirim"]
      },
      {
        name: "Itaboraí",
        neighborhoods: ["Centro", "Apolo", "Cabuçu", "Esperança", "Granjas Cabuçu", "Itambi", "Jardim Imperial", "Manilha", "Nancilândia", "Pacheco", "Pachecos", "Planalto", "Porto das Caixas", "Sambaetiba", "São José", "Venda das Pedras"]
      },
      {
        name: "Macaé",
        neighborhoods: ["Centro", "Aeroporto", "Ajuda", "Barra de Macaé", "Botafogo", "Cajueiros", "Cavaleiros", "Glória", "Imbetiba", "Lagomar", "Malvinas", "Miramar", "Nova Holanda", "Parque Aeroporto", "Sol e Mar", "Virgem Santa"]
      },
      {
        name: "Cabo Frio",
        neighborhoods: ["Centro", "Braga", "Jardim Caiçara", "Jardim Esperança", "Jardim Excelsior", "Manoel Corrêa", "Novo Portinho", "Ogiva", "Palmeiras", "Parque Burle", "Passagem", "Portinho", "Praia do Siqueira", "São Cristóvão", "Unamar", "Vila Nova"]
      },
      {
        name: "Angra dos Reis",
        neighborhoods: ["Centro", "Balneário", "Banqueta", "Bracuí", "Camorim Grande", "Camorim Pequeno", "Frade", "Gambôa do Belém", "Jacuecanga", "Japuíba", "Lambicada", "Monsuaba", "Parque Mambucaba", "Parque Perequê", "Perequê", "Pontal", "Praia Brava", "Praia do Anil", "Ribeira", "Verolme", "Vila Histórica", "Vila Velha"]
      },
      {
        name: "Nova Friburgo",
        neighborhoods: ["Centro", "Braunes", "Cascata do Imbuí", "Conselheiro Paulino", "Cônego", "Cordoeira", "Debossan", "Duas Pedras", "Floresta", "Lazareto", "Mury", "Olaria", "Ponte da Saudade", "Riograndina", "São Geraldo", "Suspiro", "Teodoro de Oliveira"]
      },
      {
        name: "Barra Mansa",
        neighborhoods: ["Centro", "Ano Bom", "Barbará", "Bocaininha", "Cotiara", "Esperança", "Getúlio Vargas", "Jardim Boa Sorte", "Nova Esperança", "Paraíso de Cima", "Piteiras", "Ponte Alta", "Roberto Silveira", "Santa Clara", "Santa Rosa", "São Luís", "Saudade", "Vila Elmira", "Vila Nova", "Vista Alegre"]
      },
      {
        name: "Teresópolis",
        neighborhoods: ["Centro", "Agriões", "Alto", "Bom Retiro", "Caleme", "Fisher", "Granja Guarani", "Jardim Cascata", "Meudon", "Pimenteiras", "Posse", "Quebra Frascos", "Santa Rita", "São Pedro", "Tijuca", "Vale do Paraíso", "Várzea"]
      },
      {
        name: "Mesquita",
        neighborhoods: ["Centro", "Banco de Areia", "Chatuba", "Cosmorama", "Edson Passos", "Jacutinga", "Juscelino", "Santa Terezinha"]
      },
      {
        name: "Nilópolis",
        neighborhoods: ["Centro", "Cabral", "Frigorífico", "Manoel de Abreu", "Mirandela", "Nossa Senhora da Conceição", "Olinda", "Paiol de Pólvora"]
      },
      {
        name: "Queimados",
        neighborhoods: ["Centro", "Fanchem", "Inconfidência", "Jardim Betânia", "Luiz de Camões", "Queimados", "São Roque", "Valdariosa", "Vila Camarim", "Vila Central", "Vila Pacaembu"]
      },
      {
        name: "Rio das Ostras",
        neighborhoods: ["Centro", "Âncora", "Bosque da Praia", "Cidade Praiana", "Costa Azul", "Extensão do Bosque", "Jardim Bela Vista", "Jardim Campomar", "Jardim Mariléa", "Mar do Norte", "Nova Esperança", "Ouro Verde", "Parque Zabulão", "Recreio", "Rocha Leão", "Serramar", "Village"]
      },
      {
        name: "Resende",
        neighborhoods: ["Centro", "Alambari", "Campos Elíseos", "Jardim Jalisco", "Lavrado", "Manejo", "Morada da Colina", "Paraíso", "Surubi", "Vila Julieta", "Vila Santa Isabel"]
      },
      {
        name: "Araruama",
        neighborhoods: ["Centro", "Areal", "Coqueiral", "Itatiquara", "Morro Grande", "Parati", "Paraty Mirim", "Ponte dos Leites", "Praia Seca", "São Vicente"]
      },
      {
        name: "Itaguaí",
        neighborhoods: ["Centro", "Brisamar", "Califórnia", "Chaperó", "Coroa Grande", "Engenho", "Ilha da Madeira", "Jardim Lúcio Tomé", "Mazomba", "Seropédica", "Vila Geny"]
      },
      {
        name: "Japeri",
        neighborhoods: ["Centro", "Alecrim", "Citrópolis", "Delamare", "Engenheiro Pedreira", "Guandu", "Mucajá", "Nova Belém", "Santa Amélia", "Santa Inês"]
      },
      {
        name: "Itaperuna",
        neighborhoods: ["Centro", "Aeroporto", "Cidade Nova", "Cehab", "Horto", "Jardim Belvedere", "Niterói", "Nossa Senhora de Lourdes", "Retiro Feliz", "São Domingos"]
      },
      {
        name: "Maricá",
        neighborhoods: ["Centro", "Araçatiba", "Barra de Maricá", "Cordeirinho", "Flamengo", "Guaratiba", "Inoã", "Itaipuaçu", "Jardim Atlântico", "Mumbuca", "Ponta Negra", "Saquarema", "São José do Imbassaí", "Ubatiba"]
      },
      {
        name: "São Pedro da Aldeia",
        neighborhoods: ["Centro", "Balneário das Conchas", "Baixo Grande", "Boqueirão", "Campo Redondo", "Colinas", "Estação", "Fluminense", "Jardim Morada do Sol", "Nova São Pedro", "Poço Fundo", "Porto do Carro", "Praia Linda", "Rua do Fogo", "São Mateus"]
      }
    ]
  },
  {
    code: "RN",
    name: "Rio Grande do Norte",
    cities: [
      {
        name: "Natal",
        neighborhoods: ["Centro", "Cidade Alta", "Ribeira", "Rocas", "Santos Reis", "Cidade da Esperança", "Felipe Camarão", "Guarapes", "Igapó", "Nossa Senhora da Apresentação", "Planalto", "Potengi", "Quintas", "Redinha", "Salinas", "Alecrim", "Bom Pastor", "Dix-Sept Rosado", "Lagoa Azul", "Lagoa Nova", "Mãe Luiza", "Petrópolis", "Tirol", "Areia Preta", "Praia do Meio", "Ponta Negra", "Via Costeira", "Capim Macio", "Neópolis", "Nova Descoberta", "Candelária", "Cidade Satélite", "Pitimbu", "Pajuçara"]
      },
      {
        name: "Mossoró",
        neighborhoods: ["Centro", "Alto de São Manoel", "Barrocas", "Bom Jardim", "Doze Anos", "Lagoa do Mato", "Nova Betânia", "Paredões", "Pintos", "Santa Delmira", "Santo Antônio", "Walfredo Gurgel"]
      },
      {
        name: "Parnamirim",
        neighborhoods: ["Centro", "Cohabinal", "Emaús", "Jardim Lola", "Monte Castelo", "Nova Parnamirim", "Parque de Exposições", "Rosa dos Ventos", "Santa Tereza"]
      }
    ]
  },
  {
    code: "RS",
    name: "Rio Grande do Sul",
    cities: [
      {
        name: "Porto Alegre",
        neighborhoods: ["Centro", "Moinhos de Vento", "Bela Vista", "Auxiliadora", "Rio Branco", "Floresta", "São Geraldo", "Navegantes", "Farroupilha", "Independência", "Azenha", "Praia de Belas", "Menino Deus", "Cidade Baixa", "Santana", "Marcílio Dias", "Glória", "Cruzeiro", "Cristal", "Camaquã", "Ipanema", "Hípica", "Tristeza", "Vila Assunção", "Pedra Redonda", "Cavalhada", "Guarujá", "Restinga", "Belém Novo", "Lami", "Ponta Grossa", "Serraria", "Chapéu do Sol", "Vila Nova", "Teresópolis", "Mont'Serrat", "Jardim Itu", "Jardim Sabará", "Lomba do Pinheiro", "Partenon", "São José", "Rubem Berta", "Sarandi", "Anchieta", "Boa Vista", "Cristo Redentor", "Humaitá", "Jardim Carvalho", "Jardim Lindóia", "Mario Quintana", "Nonoai", "Passo das Pedras", "Santa Tereza", "São Sebastião", "Vila Ipiranga", "Arquipélago", "Ilhas", "Petrópolis", "Três Figueiras", "Chácara das Pedras", "Boa Vista", "Higienópolis", "Passo d'Areia", "São João", "Vila Jardim", "Agronomia", "Jardim do Salso", "Jardim São Pedro", "Coronel Aparício Borges", "Espírito Santo", "Jardim Botânico", "Vila Ipiranga"]
      },
      {
        name: "Caxias do Sul",
        neighborhoods: ["Centro", "Exposição", "Madureira", "Nossa Senhora de Lourdes", "Panazzolo", "Petrópolis", "Pio X", "Rio Branco", "Santa Catarina", "São Pelegrino", "Vinhedos", "Ana Rech", "Charqueadas", "Desvio Rizzo", "Galópolis", "Kayser", "Loteamento Hípico", "Nossa Senhora das Graças", "Planalto", "Santa Lúcia do Piaí", "São Cristóvão", "São Leopoldo", "Vila Oliva"]
      },
      {
        name: "Pelotas",
        neighborhoods: ["Centro", "Areal", "Fragata", "Laranjal", "Porto", "Três Vendas", "Balsa", "Cohab Tablada", "Dunas", "Getúlio Vargas", "Jardim Carvalho", "Navegantes", "Pestano", "Simões Lopes", "São Gonçalo", "Triunfo", "Vila Princesa"]
      },
      {
        name: "Canoas",
        neighborhoods: ["Centro", "Fátima", "Guajuviras", "Harmonia", "Igara", "Marechal Rondon", "Mathias Velho", "Mato Grande", "Niterói", "Nossa Senhora das Graças", "Olaria", "Petróleo", "Rio Branco", "São José", "São Luís", "Estância Velha"]
      },
      {
        name: "Santa Maria",
        neighborhoods: ["Centro", "Camobi", "Medianeira", "Nossa Senhora do Rosário", "Passo d'Areia", "Patronato", "Salgado Filho", "São José", "Tancredo Neves", "Urlândia", "Boi Morto", "Carolina", "Chácara das Flores", "Cohab Fernando Ferrari", "Diácono João Luiz Pozzobon", "Dom Antônio Reis", "Itararé", "Juscelino Kubitschek", "Lorenzi", "Nova Santa Marta", "Pinheiro Machado", "Presidente João Goulart", "Renascença", "Uglione", "Vila Oliveira"]
      },
      {
        name: "Gravataí",
        neighborhoods: ["Centro", "Bom Sucesso", "Cohab A", "Cohab B", "Esperança", "Falcão", "Itacolomi", "Jansen", "Morungava", "Neópolis", "Santa Cruz", "São Geraldo", "São Vicente", "Sítio Gaúcho", "União", "Vila Seca"]
      },
      {
        name: "Viamão",
        neighborhoods: ["Centro", "Augusta", "Jardim Algarve", "Parque Itaú", "São Lucas", "Tarumã", "Vila Augusta", "Vila São João"]
      },
      {
        name: "Novo Hamburgo",
        neighborhoods: ["Centro", "Canudos", "Guarani", "Hamburgo Velho", "Industrial", "Liberdade", "Operário", "Primavera", "Rondônia", "Santo Afonso", "São Jorge", "Vila Rosa"]
      },
      {
        name: "São Leopoldo",
        neighborhoods: ["Centro", "Arroio da Manteiga", "Campina", "Cristo Rei", "Feitoria", "Jardim América", "Morro do Espelho", "Padre Reus", "Pinheiro", "Rio dos Sinos", "Santa Teresa", "São José", "São Miguel", "Scharlau", "Vila Brás"]
      },
      {
        name: "Rio Grande",
        neighborhoods: ["Centro", "Bolaxa", "Cassino", "Cidade Nova", "Getúlio Vargas", "Hidráulica", "Parque Marinha", "Profilurb", "Santa Tereza", "São João", "Vila da Quinta", "Vila Maria José"]
      },
      {
        name: "Alvorada",
        neighborhoods: ["Centro", "Bela Vista", "Bom Jesus", "Cohab", "Formoza", "Jardim Algarve", "Piratini", "Santa Rita", "Umbu", "Vila Nova"]
      },
      {
        name: "Bagé",
        neighborhoods: ["Centro", "Getúlio Vargas", "Malafaia", "Prado", "Santa Tecla", "São Jorge", "Três Vendas", "Vila Cefer"]
      },
      {
        name: "Sapucaia do Sul",
        neighborhoods: ["Centro", "Cohab", "Diehl", "Esperança", "Jardim América", "Piratini", "São Jorge", "Vila Conceição"]
      },
      {
        name: "Cachoeirinha",
        neighborhoods: ["Centro", "Bom Princípio", "Jardim do Bosque", "Morada do Vale", "Parque da Matriz", "Vila Conceição", "Vila Monte Carlo"]
      },
      {
        name: "Uruguaiana",
        neighborhoods: ["Centro", "Ahú", "Cabo Luiz Quevedo", "Coronel Pilar", "Cruzeiro do Sul", "Davi Canabarro", "Ipiranga", "Mascarenhas de Moraes", "Santa Rosa", "São João", "São Miguel"]
      },
      {
        name: "Erechim",
        neighborhoods: ["Centro", "Atlântico", "Bela Vista", "Cerâmica", "Fátima", "Industrial", "Jabuticabal", "Linho", "Progresso", "São Cristóvão", "São Vicente"]
      },
      {
        name: "Santana do Livramento",
        neighborhoods: ["Centro", "Cerro Alegre", "Ibirapuitã", "Prado", "Saladeiro", "Santa Marta", "São João"]
      },
      {
        name: "Cachoeira do Sul",
        neighborhoods: ["Centro", "Bom Jesus", "Cohab", "Fátima", "Jardim do Sol", "Ramada", "Santa Catarina", "São José"]
      },
      {
        name: "Guaíba",
        neighborhoods: ["Centro", "Cohab", "Eldorado", "Ipê", "Mato Grande", "Pedras Brancas", "São Jorge"]
      },
      {
        name: "Bento Gonçalves",
        neighborhoods: ["Centro", "Botafogo", "Cidade Alta", "Fenavinho", "Humaitá", "Jardim do Lago", "Monte Belo", "Ouro Verde", "Progresso", "São Roque", "Vinhedos"]
      }
    ]
  },
  {
    code: "RO",
    name: "Rondônia",
    cities: [
      {
        name: "Porto Velho",
        neighborhoods: ["Centro", "Agenor de Carvalho", "Aponiã", "Caladinho", "Cohab", "Costa e Silva", "Embratel", "Esperança da Comunidade", "Flodoaldo Pontes Pinto", "Industrial", "Jardim Santana", "Lagoinha", "Liberdade", "Mariana", "Nacional", "Nova Porto Velho", "Olaria", "Pedrinhas", "Rio Madeira", "Roque", "São Cristóvão", "São João Bosco", "São Sebastião", "Socialista", "Tancredo Neves", "Três Marias", "Tucumanzal", "União", "Ulisses Guimarães"]
      },
      {
        name: "Ji-Paraná",
        neighborhoods: ["Centro", "BNH", "Cidade Alta", "Dois de Abril", "Industrial", "Jardim dos Migrantes", "Nova Brasília", "Primavera", "Urupá", "Vila Lobão"]
      },
      {
        name: "Ariquemes",
        neighborhoods: ["Centro", "BNH", "Jardim Paulista", "Marechal Rondon", "Setor 03", "Setor 04", "Setor 05", "Setor 06"]
      },
      {
        name: "Vilhena",
        neighborhoods: ["Centro", "BNH", "Bodoquena", "Cristo Rei", "Jardim América", "Jardim Eldorado", "Residencial Oliveira", "Setor Industrial"]
      }
    ]
  },
  {
    code: "RR",
    name: "Roraima",
    cities: [
      {
        name: "Boa Vista",
        neighborhoods: ["Centro", "Aparecida", "Caçari", "Caimbé", "Calungá", "Cambará", "Cauamé", "Cidade Satélite", "Cinturão Verde", "Jardim Caranã", "Jardim Floresta", "Liberdade", "Mecejana", "Nova Cidade", "Operário", "Paraviana", "Pricumã", "São Francisco", "São Pedro", "São Vicente", "Tancredo Neves", "União", "13 de Setembro"]
      },
      {
        name: "Rorainópolis",
        neighborhoods: ["Centro", "Equatorial", "Jundiá", "Nova Colina", "Pérola", "Vila Operária"]
      }
    ]
  },
  {
    code: "SC",
    name: "Santa Catarina",
    cities: [
      {
        name: "Florianópolis",
        neighborhoods: ["Centro", "Agronômica", "Barra da Lagoa", "Cachoeira do Bom Jesus", "Campeche", "Canasvieiras", "Canto da Lagoa", "Capoeiras", "Carvoeira", "Córrego Grande", "Costeira do Pirajubaé", "Daniela", "Estreito", "Ingleses", "Itacorubi", "Jardim Atlântico", "Joao Paulo", "José Mendes", "Jurerê", "Jurerê Internacional", "Lagoa da Conceição", "Monte Verde", "Pantanal", "Pântano do Sul", "Prainha", "Ribeirão da Ilha", "Rio Tavares", "Saco dos Limões", "Saco Grande", "Santa Mônica", "Santo Antônio de Lisboa", "São João do Rio Vermelho", "Tapera", "Trindade", "Vargem do Bom Jesus", "Vargem Grande", "Vargem Pequena"]
      },
      {
        name: "Joinville",
        neighborhoods: ["Centro", "Adhemar Garcia", "América", "Anita Garibaldi", "Atiradores", "Aventureiro", "Boa Vista", "Boehmerwald", "Bom Retiro", "Bucarein", "Comasa", "Costa e Silva", "Dona Francisca", "Espinheiros", "Fátima", "Floresta", "Glória", "Guanabara", "Iririú", "Itaum", "Itinga", "Jardim Iririú", "Jardim Paraíso", "Jardim Sofia", "João Costa", "Morro do Meio", "Nova Brasília", "Paranaguamirim", "Parque Guarani", "Petrópolis", "Pirabeiraba", "Profipo", "Rio Bonito", "Saguaçu", "Santa Catarina", "Santo Antônio", "São Marcos", "Ulysses Guimarães", "Vila Cubatão", "Vila Nova", "Zona Industrial Norte", "Zona Industrial Tupy"]
      },
      {
        name: "Blumenau",
        neighborhoods: ["Centro", "Água Verde", "Badenfurt", "Bom Retiro", "Escola Agrícola", "Fidélis", "Fortaleza", "Garcia", "Glória", "Hackenberg", "Itoupava Central", "Itoupava Norte", "Itoupava Seca", "Jardim Blumenau", "Nova Esperança", "Passo Manso", "Ponta Aguda", "Progresso", "Ribeirão Fresco", "Salto", "Salto do Norte", "Testo Central", "Testo Salto", "Valparaíso", "Velha", "Vila Formosa", "Vila Itoupava", "Vila Nova"]
      },
      {
        name: "São José",
        neighborhoods: ["Centro", "Barreiros", "Bela Vista", "Campinas", "Colônia Santana", "Fazenda Santo Antônio", "Forquilhinha", "Ipiranga", "Jardim Cidade", "Kobrasol", "Ponta de Baixo", "Praia Comprida", "Real Parque", "Roçado", "Sertão do Maruim", "Serraria"]
      },
      {
        name: "Criciúma",
        neighborhoods: ["Centro", "Ana Lúcia", "Boa Vista", "Ceará", "Comerciário", "Cristo Redentor", "Demboski", "Esplanada", "Jardim Angélica", "Jardim das Paineiras", "La Salle", "Linha Anta", "Mina Brasil", "Mina do Mato", "Mina União", "Naspolini", "Nossa Senhora da Salete", "Operária Nova", "Pinheirinho", "Próspera", "Quarta Linha", "Sangão", "Santa Augusta", "Santa Bárbara", "Santa Luzia", "São Cristóvão", "São Defende", "São Luiz", "São Simão", "Tereza Cristina", "Vila Francesa", "Vila Macarini", "Vila Miguel Ângelo", "Vila Zuleima"]
      },
      {
        name: "Chapecó",
        neighborhoods: ["Centro", "Bela Vista", "Bom Pastor", "Cristo Rei", "Efapi", "Eldorado", "Esplanada", "Industrial", "Jardim América", "Jardim Itália", "Maria Goretti", "Palmital", "Parque das Palmeiras", "Passo dos Fortes", "Presidente Médici", "Santa Maria", "Santo Antônio", "São Cristóvão", "Seminário", "Trevo", "Universitário", "Vila Real"]
      },
      {
        name: "Itajaí",
        neighborhoods: ["Centro", "Barra do Rio", "Boa Vista", "Cidade Nova", "Cordeiros", "Dom Bosco", "Espinheiros", "Fazenda", "Imaruí", "Jardim Blumenau", "Loteamento Praia Brava", "Murta", "Navegantes", "Praia Brava", "Ressacada", "Rio Cerro", "São João", "São Vicente", "Vila Operária"]
      },
      {
        name: "Lages",
        neighborhoods: ["Centro", "Bom Jesus", "Brusque", "Caroba", "Coral", "Frei Rogério", "Guarujá", "Habitação", "Jardim Celina", "Petrópolis", "Promorar", "Sagrado Coração de Jesus", "Santa Catarina", "Santa Helena", "São Cristóvão", "São Francisco", "Tributo", "Universitário"]
      },
      {
        name: "Palhoça",
        neighborhoods: ["Centro", "Aririú", "Barra do Aririú", "Bela Vista", "Brejaru", "Caminho Novo", "Cidade Universitária Pedra Branca", "Enseada de Brito", "Jardim Eldorado", "Pagani", "Passa Vinte", "Ponte do Imaruim", "Praia de Fora", "São Sebastião", "Três Rios do Norte", "Três Rios do Sul"]
      },
      {
        name: "Balneário Camboriú",
        neighborhoods: ["Centro", "Barra", "Estados", "Nações", "Nova Esperança", "Pioneiros", "Praia dos Amores", "Vila Real"]
      },
      {
        name: "Brusque",
        neighborhoods: ["Centro", "Águas Claras", "Azambuja", "Bateas", "Cedro Alto", "Dom Joaquim", "Guarani", "Jardim Maluche", "Limeira", "Maluche", "Ponta Russa", "Santa Rita", "São João", "São Luiz", "Steffen", "Vila Operária"]
      },
      {
        name: "Tubarão",
        neighborhoods: ["Centro", "Dehon", "Fábio Silva", "Humaitá", "Morrotes", "Oficinas", "Passagem", "Pinheiros", "Revoredo", "Universitário"]
      },
      {
        name: "São Bento do Sul",
        neighborhoods: ["Centro", "Brasília", "Dona Francisca", "Limeira", "Oxford", "Progresso", "Rio Natal", "Rio Vermelho", "Schramm", "Serra Alta", "Sertão do Canoas", "Vila Operária"]
      },
      {
        name: "Caçador",
        neighborhoods: ["Centro", "Berger", "Bom Sucesso", "Martello", "Marechal Bormann", "Núcleo Habitacional Martello", "Ronda", "Santa Catarina", "São Cristóvão"]
      },
      {
        name: "Camboriú",
        neighborhoods: ["Centro", "Braço", "Cedros", "Tabuleiro"]
      },
      {
        name: "Navegantes",
        neighborhoods: ["Centro", "Gravatá", "Meia Praia", "Morretes", "São Luiz"]
      },
      {
        name: "Concórdia",
        \
