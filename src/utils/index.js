/**
 * Checks if the current viewport is a mobile one.
 *
 * @returns {Boolean} Boolean
 */
const isMobile = () => window.innerWidth < 769;

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered.
 * The function will be called after it stops being called for N milliseconds.
 *
 * @param {*} callback
 * @param {*} wait
 */
const debounce = (callback, wait = 250) => {
  let timer;
  let last_call = 0;
  return (...args) => {
    clearTimeout(timer);
    const now = Date.now(),
      time_from_last_call = now - last_call;

    if (time_from_last_call > wait) {
      last_call = now;
      callback(...args);
    } else {
      timer = setTimeout(() => {
        last_call = now;
        callback(...args);
      }, wait);
    }
  };
};

const mockResponse = () => ({
  resultCount: 5,
  results: [
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 1051127522,
      collectionId: 1422657047,
      trackId: 1422657066,
      artistName: 'Grupo Marca Registrada',
      collectionName: 'El Mismo De La Vida Ruina',
      trackName: 'El Nombre De Artista',
      collectionCensoredName: 'El Mismo De La Vida Ruina',
      trackCensoredName: 'El Nombre De Artista',
      artistViewUrl: 'https://music.apple.com/us/artist/grupo-marca-registrada/1051127522?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/el-nombre-de-artista/1422657047?i=1422657066&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/el-nombre-de-artista/1422657047?i=1422657066&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/b9/aa/14/b9aa1492-0305-5189-9f0a-ff34715d8a98/mzaf_6846951252342173689.plus.aac.p.m4a',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/d0/16/1f/d0161fd0-3502-2acd-0eea-fb22378def5c/source/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/d0/16/1f/d0161fd0-3502-2acd-0eea-fb22378def5c/source/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/d0/16/1f/d0161fd0-3502-2acd-0eea-fb22378def5c/source/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2018-08-17T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 12,
      trackTimeMillis: 198635,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Música Mexicana',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 1439161914,
      collectionId: 1492728005,
      trackId: 1492728126,
      artistName: 'MR Tyson',
      collectionName: 'EL Nombre de Artista - Single',
      trackName: 'EL Nombre de Artista',
      collectionCensoredName: 'EL Nombre de Artista - Single',
      trackCensoredName: 'EL Nombre de Artista',
      artistViewUrl: 'https://music.apple.com/us/artist/mr-tyson/1439161914?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/el-nombre-de-artista/1492728005?i=1492728126&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/el-nombre-de-artista/1492728005?i=1492728126&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/45/05/bc/4505bc08-3131-dda9-94e4-81578b9fc041/mzaf_15294632623469804371.plus.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/42/f0/f0/42f0f0a5-1c08-2bbc-a196-01e2af559a58/source/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/42/f0/f0/42f0f0a5-1c08-2bbc-a196-01e2af559a58/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/42/f0/f0/42f0f0a5-1c08-2bbc-a196-01e2af559a58/source/100x100bb.jpg',
      collectionPrice: 0.99,
      trackPrice: 0.99,
      releaseDate: '2019-12-19T08:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 1,
      trackNumber: 1,
      trackTimeMillis: 240118,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 1485903218,
      collectionId: 1540255956,
      trackId: 1540255963,
      artistName: 'Keren Angel',
      collectionName: 'En Nombre Del Amor - EP',
      trackName: 'Nadie creyó en el artista',
      collectionCensoredName: 'En Nombre Del Amor - EP',
      trackCensoredName: 'Nadie creyó en el artista',
      artistViewUrl: 'https://music.apple.com/us/artist/keren-angel/1485903218?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/nadie-crey%C3%B3-en-el-artista/1540255956?i=1540255963&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/nadie-crey%C3%B3-en-el-artista/1540255956?i=1540255963&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/c6/89/cd/c689cd2f-a25f-97e6-7cc5-ea405257beed/mzaf_11975484883881275610.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d6/0f/f8/d60ff8c6-9215-16c1-fd2c-5f4fee1975d0/source/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d6/0f/f8/d60ff8c6-9215-16c1-fd2c-5f4fee1975d0/source/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d6/0f/f8/d60ff8c6-9215-16c1-fd2c-5f4fee1975d0/source/100x100bb.jpg',
      collectionPrice: 4.95,
      trackPrice: 0.99,
      releaseDate: '2020-11-13T08:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 5,
      trackNumber: 5,
      trackTimeMillis: 204944,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 1051127522,
      collectionId: 1548053499,
      trackId: 1548053511,
      artistName: 'Grupo Marca Registrada',
      collectionName: 'El Mismo De La Vida Ruina',
      trackName: 'El Nombre De Artista',
      collectionCensoredName: 'El Mismo De La Vida Ruina',
      trackCensoredName: 'El Nombre De Artista',
      artistViewUrl: 'https://music.apple.com/us/artist/grupo-marca-registrada/1051127522?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/el-nombre-de-artista/1548053499?i=1548053511&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/el-nombre-de-artista/1548053499?i=1548053511&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/e2/5d/60/e25d6046-6f6f-1bfa-d838-6d2e4a9a495f/mzaf_16347545340571222884.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f0/a1/b8/f0a1b878-a293-dffe-6b80-2a9ed86457f8/source/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f0/a1/b8/f0a1b878-a293-dffe-6b80-2a9ed86457f8/source/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f0/a1/b8/f0a1b878-a293-dffe-6b80-2a9ed86457f8/source/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2021-01-11T08:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 12,
      trackTimeMillis: 198693,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Música Mexicana',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 1450508576,
      collectionId: 1529641058,
      trackId: 1529641064,
      artistName: 'Big Fred',
      collectionName: 'OVNI - Single',
      trackName: 'Ovni',
      collectionCensoredName: 'OVNI - Single',
      trackCensoredName: 'Ovni',
      artistViewUrl: 'https://music.apple.com/us/artist/big-fred/1450508576?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/ovni/1529641058?i=1529641064&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/ovni/1529641058?i=1529641064&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/34/4a/35/344a35b3-2932-a44e-2868-5ce15f46d130/mzaf_1516727130115411371.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/92/e9/bb/92e9bbc7-bd34-22c8-d4eb-70614c4062d7/source/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/92/e9/bb/92e9bbc7-bd34-22c8-d4eb-70614c4062d7/source/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/92/e9/bb/92e9bbc7-bd34-22c8-d4eb-70614c4062d7/source/100x100bb.jpg',
      collectionPrice: 1.29,
      trackPrice: 1.29,
      releaseDate: '2020-09-11T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 1,
      trackNumber: 1,
      trackTimeMillis: 167553,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Alternative Rap',
      isStreamable: true,
    },
  ],
});

export { isMobile, debounce, mockResponse };
