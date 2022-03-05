CREATE TABLE customer (
  id serial PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone numeric NOT NULL,
  created_at timestamp without time zone NOT NULL default now(),
  modified_at timestamp without time zone,
  active boolean NOT NULL DEFAULT TRUE
);

CREATE TABLE cart (
  id serial PRIMARY KEY,
  customer_id int NOT NULL REFERENCES customer,
  created_at timestamp without time zone NOT NULL default now(),
  modified_at timestamp without time zone,
  active boolean NOT NULL DEFAULT TRUE
);

CREATE TABLE product (
  id serial PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL,
  created_at timestamp without time zone NOT NULL default now(),
  modified_at timestamp without time zone,
  active boolean NOT NULL DEFAULT TRUE
);

CREATE TABLE cart_product (
  cart_id int REFERENCES cart,
  product_id int REFERENCES product,
  created_at timestamp without time zone NOT NULL default now(),
  modified_at timestamp without time zone,
  active boolean NOT NULL DEFAULT TRUE
);
