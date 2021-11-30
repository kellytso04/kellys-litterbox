DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id BIGSERIAL,
  name VARCHAR(50),
  slogan VARCHAR(200),
  description VARCHAR(1000),
  category VARCHAR(50),
  default_price INTEGER
);

ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS styles CASCADE;
CREATE TABLE styles (
  id BIGSERIAL,
  product_id INTEGER,
  name VARCHAR(1000),
  sale_price INTEGER,
  original_price INTEGER,
  default_style INTEGER
);

ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS photos CASCADE;
CREATE TABLE photos (
  id BIGSERIAL,
  style_id INTEGER,
  url VARCHAR(1000),
  thumbnail_url VARCHAR(1000)
);

ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS skus CASCADE;
CREATE TABLE skus (
  id BIGSERIAL,
  style_id INTEGER,
  size VARCHAR(20),
  quantity INTEGER
);

ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS features CASCADE;
CREATE TABLE features (
  id BIGSERIAL,
  product_id INTEGER,
  type VARCHAR(50),
  value VARCHAR(50)
);

ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS cart CASCADE;
CREATE TABLE cart (
  id BIGSERIAL,
  name VARCHAR(200),
  sku_id INTEGER,
  size VARCHAR(5),
  price INTEGER,
  count INTEGER
);

ALTER TABLE cart ADD CONSTRAINT cart_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS related CASCADE;
CREATE TABLE related (
  id BIGSERIAL,
  current_product INTEGER,
  related_product INTEGER
);

ALTER TABLE related ADD CONSTRAINT related_pkey PRIMARY KEY (id);

COPY products FROM '/Users/kellytso/Documents/GitHub/litterbox/data/products.csv' WITH (FORMAT csv, header);
COPY styles FROM '/Users/kellytso/Documents/GitHub/litterbox/data/styles.csv' WITH (FORMAT csv, header);
COPY photos FROM '/Users/kellytso/Documents/GitHub/litterbox/data/photos.csv' WITH (FORMAT csv, header);
COPY skus FROM '/Users/kellytso/Documents/GitHub/litterbox/data/skus.csv' WITH (FORMAT csv, header);
COPY features FROM '/Users/kellytso/Documents/GitHub/litterbox/data/features.csv' WITH (FORMAT csv, header);
