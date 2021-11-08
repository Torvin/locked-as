import { LevelTransition } from './types'

const Levels: LevelTransition[] = [
  [
    '2020-03-22T00:00:00+13:00',
    2,
  ], [
    '2020-03-23T13:30:00+13:00',
    3,
  ], [
    '2020-03-26T00:00:00+13:00',
    4,
  ], [
    '2020-04-28T00:00:00+12:00',
    3,
  ], [
    '2020-05-14T00:00:00+12:00',
    2,
  ], [
    '2020-06-09T00:00:00+12:00',
    1,
  ],

  // AKL moves to level 3, the rest of NZ to level 2
  [
    '2020-08-12T12:00:00+12:00',
    2,
  ], [
    '2020-08-12T12:00:00+12:00',
    3,
    'AKL',
  ],

  // AKL moves to level 2, the rest of NZ remains at level 2
  [
    '2020-08-31T00:00:00+12:00',
    2,
    'AKL',
  ],

  // NZ except for AKL moves to level 1, AKL remans at level 2
  [
    '2020-09-22T00:00:00+12:00',
    1,
  ], [
    '2020-09-22T00:00:00+12:00',
    2,
    'AKL',
  ],

  // AKL moves to level 1
  [
    '2020-10-08T00:00:00+13:00',
    1,
    'AKL',
  ],

  // AKL moves to level 3, rest of NZ - level 2
  [
    '2021-02-15T00:00:00+13:00',
    2,
  ], [
    '2021-02-15T00:00:00+13:00',
    3,
    'AKL',
  ],

  // AKL moves to level 2, rest of NZ - level 1
  [
    '2021-02-18T00:00:00+13:00',
    1,
  ], [
    '2021-02-18T00:00:00+13:00',
    2,
    'AKL',
  ],

  // AKL moves to level 1, all NZ is at level 1 now 
  [
    '2021-02-23T00:00:00+13:00',
    1,
    'AKL',
  ],

  // AKL moves to level 3, rest of NZ - level 2
  [
    '2021-02-28T06:00:00+13:00',
    2,
  ], [
    '2021-02-28T06:00:00+13:00',
    3,
    'AKL',
  ],

  // AKL moves to level 2, rest of NZ - level 1
  [
    '2021-03-07T06:00:00+13:00',
    1,
  ], [
    '2021-03-07T06:00:00+13:00',
    2,
    'AKL',
  ],

  // AKL moves to level 1, all NZ is at level 1 now 
  [
    '2021-03-12T12:00:00+13:00',
    1,
    'AKL',
  ],

  // WLG moves to level 2 for a week
  [
    '2021-06-23T18:00:00+12:00',
    2,
    'WLG',
  ], [
    '2021-06-30T00:00:00+12:00',
    1,
    'WLG',
  ],

  [
    '2021-08-18T00:00:00+12:00',
    4,
  ],

  // AKL and NL stay at level 4, the rest of NZ to level 3
  [
    '2021-09-01T00:00:00+12:00',
    3,
  ], [
    '2021-09-01T00:00:00+12:00',
    4,
    'AKL',
  ], [
    '2021-09-01T00:00:00+12:00',
    4,
    'NL',
  ],

  // NL moves to level 3, AKL stay at level 4, the rest of NZ remain at level 3
  [
    '2021-09-03T00:00:00+12:00',
    3,
    'NL',
  ],

  // AKL remains at level 4, the rest of NZ moves to level 2
  [
    '2021-09-08T00:00:00+12:00',
    2,
  ], [
    '2021-09-08T00:00:00+12:00',
    4,
    'AKL',
  ],

  // AKL moves to level 3, rest of NZ is at level 2 
  [
    '2021-09-22T00:00:00+12:00',
    3,
    'AKL',
  ],

  // NL moves to level 3
  [
    '2021-10-09T00:00:00+13:00',
    3,
    'NL',
  ],

  // NL moves to level 2
  [
    '2021-10-20T00:00:00+13:00',
    2,
    'NL',
  ],

  // NL moves to level 3 and back
  [
    '2021-11-03T00:00:00+13:00',
    3,
    'NL',
  ], [
    '2021-11-12T00:00:00+13:00',
    2,
    'NL',
  ],
]

export default Levels
