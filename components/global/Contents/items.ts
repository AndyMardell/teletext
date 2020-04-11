import { ContentItems } from './Item'

const home: ContentItems = {
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
}

const sport: ContentItems = {
  401: { title: 'Premier League', link: '/sport/premier-league' }
}

const categories: Record<string, any> = { home, sport }

export default categories
