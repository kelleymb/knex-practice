BEGIN;

INSERT INTO blogful_articles (title, date_published, content)
VALUES
    ('The Planet',   now() - '21 days'::INTERVAL, 'The planet is pretty.'),
    ('Elections',    now() - '21 days'::INTERVAL, 'The November 2020 candidates are...'),
    ('School Closing',   now() - '21 days'::INTERVAL, 'Local school shuts down.'),
    ('Out of Business',   now() - '21 days'::INTERVAL, 'Local shops close their doors.'),
    ('Vegan Foods',   now() - '21 days'::INTERVAL, 'Try these planet-friendly foods!'),
    ('Animal Shelters',   now() - '9 days'::INTERVAL, 'Adopt a pet locally today!'),
    ('The Universe',   now() - '9 days'::INTERVAL, 'The universe is crazy, isn''t it?'),
    ('Advanced Learning',    now() - '9 days'::INTERVAL, 'You''re really smart'),
    ('New Restaurants',   now() - '9 days'::INTERVAL, 'Looking for a new place to eat?'),
    ('Local Sports',    now() - '9 days'::INTERVAL, 'Local HS wins big game.'),
    ('Local Weather',     now() - '7 days'::INTERVAL, 'Grab your coats! This week is going to be chilly'),
    ('NBA Highlights',   now() - '7 days'::INTERVAL, 'Watch the best moments so far this season'),
    ('NFL 2020 Season',   now() - '5 days'::INTERVAL, 'Whose going to win the superbowl this season?'),
    ('Cats',   now() - '5 days'::INTERVAL, 'Local cats for adoption.'),
    ('Dogs',    now() - '5 days'::INTERVAL, 'Local dogs for adoption.'),
    ('Movie Premieres',   now() - '5 days'::INTERVAL, 'Check out this list of new films.'),
    ('Local Theatre',   now() - '4 days'::INTERVAL, 'Local theatre movie schedule. Buy your tickets!'),
    ('Potholes',   now() - '4 days'::INTERVAL, 'Tired of potholes?'),
    ('Keto Recipes',   now() - '4 days'::INTERVAL, 'Try these fun recipes!'),
    ('Global Warming',   now() - '3 days'::INTERVAL, 'The planet is changing.'),
    ('4K TVs',   now() - '3 days'::INTERVAL, 'Are 4K TVs the new standard?')
;
COMMIT;