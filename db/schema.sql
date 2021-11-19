DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id BIGSERIAL,
  name VARCHAR(50),
  slogan VARCHAR(200),
  description VARCHAR(500),
  category VARCHAR(50),
  default_price INTEGER
);

ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS styles;
CREATE TABLE styles (
  id BIGSERIAL,
  product_id INTEGER,
  name VARCHAR(500),
  sale_price INTEGER,
  original_price INTEGER,
  default_style INTEGER
);

ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS photos;
CREATE TABLE photos (
  id BIGSERIAL,
  style_id INTEGER,
  url VARCHAR(500),
  thumbnail_url VARCHAR(500)
);

ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS skus;
CREATE TABLE skus (
  id BIGSERIAL,
  style_id INTEGER,
  size VARCHAR(5),
  quantity INTEGER
);

ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS features;
CREATE TABLE features (
  id BIGSERIAL,
  product_id INTEGER,
  type VARCHAR(50),
  value VARCHAR(50)
);

ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
  id BIGSERIAL,
  name VARCHAR(200),
  sku_id INTEGER,
  size VARCHAR(5),
  price INTEGER,
  count INTEGER
);

ALTER TABLE cart ADD CONSTRAINT cart_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS related;
CREATE TABLE related (
  id BIGSERIAL,
  current_product INTEGER,
  related_product INTEGER
);

ALTER TABLE related ADD CONSTRAINT related_pkey PRIMARY KEY (id);


ALTER TABLE styles ADD CONSTRAINT styles_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE skus ADD CONSTRAINT skus_style_id_fkey FOREIGN KEY (style_id) REFERENCES styles(id);
ALTER TABLE features ADD CONSTRAINT features_id_fkey FOREIGN KEY (id) REFERENCES products(id);
ALTER TABLE cart ADD CONSTRAINT cart_id_fkey FOREIGN KEY (id) REFERENCES products(id);
ALTER TABLE cart ADD CONSTRAINT cart_sku_id_fkey FOREIGN KEY (sku_id) REFERENCES skus(id);