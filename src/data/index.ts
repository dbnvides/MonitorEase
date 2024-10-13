export interface DataStream{
    id: number;
    imagem: string;
    nome: string;
    descricao: {
        pt: string;
        en: string;
    };
}

export const databaseStreaming:DataStream[] = [
    {
      "id": 1,
      "imagem":"./src/assets/netflix-logo.svg",
      "nome": "Netflix",
      "descricao": {
        "pt": "Serviço de streaming por assinatura popular, oferecendo uma grande variedade de séries, filmes e conteúdo original.",
        "en": "A popular subscription-based streaming service offering a wide variety of TV shows, movies, and original content."
      }
    },
    {
      "id": 2,
      "imagem": "./src/assets/prime-video-logo.svg",
      "nome": "Amazon Prime Video",
      "descricao": {
        "pt": "Plataforma de streaming sob demanda que oferece filmes, séries de TV e exclusivos da Amazon.",
        "en": "An on-demand streaming platform that offers movies, TV series, and exclusive Amazon Originals."
      }
    },
    {
      "id": 3,
      "imagem": "./src/assets/disney-plus-logo.svg",
      "nome": "Disney+",
      "descricao": {
        "pt": "Serviço de streaming com conteúdo da Disney, Pixar, Marvel, Star Wars e National Geographic.",
        "en": "A streaming service featuring content from Disney, Pixar, Marvel, Star Wars, and National Geographic."
      }
    },
    {
      "id": 4,
      "imagem": "./src/assets/hbo-max-logo.svg",
      "nome": "HBO Max",
      "descricao": {
        "pt": "Plataforma de streaming da WarnerMedia com uma biblioteca de séries, filmes da HBO e exclusivos Max Originals.",
        "en": "WarnerMedia's streaming platform with a library of HBO shows, movies, and exclusive Max Originals."
      }
    },
    {
      "id": 5,
      "imagem": "./src/assets/hulu-logo.svg",
      "nome": "Hulu",
      "descricao": {
        "pt": "Serviço de streaming com uma variedade de séries de TV, filmes e originais do Hulu, incluindo episódios de séries atuais no dia seguinte à exibição.",
        "en": "A streaming service offering a range of TV shows, movies, and Hulu Originals, including next-day airing of current TV series."
      }
    },
    {
      "id": 6,
      "imagem": "./src/assets/apple-tv-logo-2023.svg",
      "nome": "Apple TV+",
      "descricao": {
        "pt": "Serviço de streaming da Apple, oferecendo conteúdo original, incluindo séries e filmes premiados.",
        "en": "Apple's streaming service, offering original content, including award-winning series and movies."
      }
    },
    {
      "id": 7,
      "imagem": "./src/assets/paramount-plus-logo.svg",
      "nome": "Paramount+",
      "descricao": {
        "pt": "Serviço de streaming por assinatura que oferece conteúdo da Paramount Pictures, CBS e muito mais.",
        "en": "A subscription streaming service offering content from Paramount Pictures, CBS, and more."
      }
    },
    {
      "id": 8,
      "imagem": "./src/assets/peacock-logo.svg",
      "nome": "Peacock",
      "descricao": {
        "pt": "Plataforma de streaming da NBCUniversal oferecendo séries de TV, filmes, esportes ao vivo e programação original.",
        "en": "NBCUniversal's streaming platform offering TV shows, movies, live sports, and original programming."
      }
    },
    {
      "id": 9,
      "imagem": "./src/assets/crunchyroll-logo.svg",
      "nome": "Crunchyroll",
      "descricao": {
        "pt": "Serviço de streaming especializado em anime, mangás e dramas asiáticos.",
        "en": "A streaming service specializing in anime, manga, and Asian dramas."
      }
    },
    {
      "id": 10,
      "imagem": "./src/assets/starzplay-logo.svg",
      "nome": "Starz",
      "descricao": {
        "pt": "Plataforma de streaming premium que oferece filmes de sucesso e séries originais.",
        "en": "A premium streaming platform offering hit movies and original series."
      }
    }
  ]
  