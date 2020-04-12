import { ContentItems } from './Item'

const contentItems: Record<string, ContentItems> = {
  topLevel: {
    100: { title: 'A–Z Index', link: '/' }
  },
  home: {
    101: { title: 'News Headlines', link: '/news' },
    300: { title: 'Sport', link: '/sport' },
    199: { title: 'BBC Info' },
    695: { title: 'Chess' },
    568: { title: 'Community BBC2' },
    650: { title: 'Entertainment' },
    500: { title: 'Film Reviews' },
    440: { title: 'Flights' },
    527: { title: 'Games Reviews' },
    660: { title: 'Horse Racing' },
    525: { title: 'Lottery' },
    160: { title: 'News for Region' },
    570: { title: 'Newsround' },
    640: { title: 'Radio' },
    888: { title: 'Subtitling' },
    528: { title: 'Top 40' },
    430: { title: 'Travel' },
    615: { title: 'TV Links' },
    600: { title: 'TV Listings' },
    400: { title: 'Weather' }
  },
  sport: {
    301: { title: 'Headlines', link: '/sport/headlines' },
    302: { title: 'Football', link: '/sport/football' }
  },
  football: {
    324: { title: 'Premier League', link: '/sport/football/league/524' },
    325: { title: 'Championship', link: '/sport/football/league/565' },
    326: { title: 'League One', link: '/sport/football/league/581' },
    327: { title: 'League Two', link: '/sport/football/league/582' },
    328: { title: 'National League', link: '/sport/football/league/764' },
    329: { title: 'FA WSL', link: '/sport/football/league/770' },
    330: {
      title: 'Non League D1 - South',
      link: '/sport/football/league/1174'
    }
  }
}

export const contentsAll = {
  ...contentItems.topLevel,
  ...contentItems.home,
  ...contentItems.sport,
  ...contentItems.football
}

export default contentItems