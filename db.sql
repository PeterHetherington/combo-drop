-- users
CREATE TABLE social_users(
  clerk_id TEXT not null primary key,
  username varchar(25) not null unique,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  bio VARCHAR(255),
  profile_pic TEXT
)

-- posts
CREATE TABLE social_posts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    content VARCHAR(255) NOT NULL,
    user_id TEXT references social_users(clerk_id) NOT NULL,
    img VARCHAR(255),
    link VARCHAR(255),
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- comments on posts
CREATE TABLE social_comments(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id TEXT references social_users(clerk_id) NOT NULL,
    post_id INT REFERENCES social_posts(id) NOT NULL,
    comment TEXT NOT NULL,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- who the user follows
CREATE TABLE social_following(
  user_id TEXT not null references social_users(clerk_id) on delete cascade,
  following TEXT not null references social_users(clerk_id) on delete cascade,
  primary key (user_id, following)
)