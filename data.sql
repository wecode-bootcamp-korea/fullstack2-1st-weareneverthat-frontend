-- insert categories data
INSERT INTO categories VALUES (1,'Outerwear'),(2,'Sweatshirts'),(3,'Bottoms'),(4,'Shoes');

-- insert product_colors data
INSERT INTO product_colors(color) VALUES ('Black'), ('Blue'), ('Gray');

-- insert product_sizes data
INSERT INTO product_sizes(size) VALUES ('S'), ('M'), ('L');


-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (21, 'Travis Pants', 79000, 59300, 'Cotton 100%', 'China', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (41, 21, 2),
  (42, 21, 1);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (41, 1, 10),
  (41, 2, 30),
  (41, 3, 40),
  (42, 1, 5),
  (42, 2, 20),
  (42, 3, 100);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (41, 'https://ae01.alicdn.com/kf/H3d2d0fa79b654237bc28dd07505de082c.jpg', true),
  (41, 'https://ae01.alicdn.com/kf/Hbfe52e9f530b4b6589dcf476f48c5f12I.png', false),
  (41, 'https://ae01.alicdn.com/kf/H78b70f8df2804ba2923a9620b6f430a6p.png', false),
  (42, 'https://ae01.alicdn.com/kf/Hdbc4391c81fb400ba88092d486be4c21U.jpg', true),
  (42, 'https://ae01.alicdn.com/kf/Hbfe52e9f530b4b6589dcf476f48c5f12I.png', false),
  (42, 'https://ae01.alicdn.com/kf/H78b70f8df2804ba2923a9620b6f430a6p.png', false);


-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (22, 'ASTROWORLD Pants', 89000, 69500, 'Front right logo embroidery', 'Vietnam', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (43, 22, 1),
  (44, 22, 3);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (43, 1, 6),
  (43, 2, 10),
  (43, 3, 30),
  (44, 1, 7),
  (44, 2, 5),
  (44, 3, 25);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (43, 'https://ae01.alicdn.com/kf/Hf281f085a2014b0f8036b5e2bfcdecf8o.jpg', true),
  (43, 'https://ae01.alicdn.com/kf/H2aca352f478349c0aa6ba146b05c8d4ft.jpg', false),
  (43, 'https://ae01.alicdn.com/kf/H78b70f8df2804ba2923a9620b6f430a6p.png', false),
  (44, 'https://ae01.alicdn.com/kf/Hb2721a414148419b86eb063160588a47v.jpg', true),
  (44, 'https://ae01.alicdn.com/kf/Hcfb5705b022a4d96ada8854f4f35eeb4t.jpg', false),
  (44, 'https://ae01.alicdn.com/kf/H78b70f8df2804ba2923a9620b6f430a6p.png', false);


  -- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (23, 'Tommy Pants', 69000, 38700, 'Fluffy-lining', 'China', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (45, 23, 1),
  (46, 23, 3);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (45, 1, 20),
  (45, 2, 36),
  (45, 3, 5),
  (46, 1, 27),
  (46, 2, 15),
  (46, 3, 29);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (45, 'https://ae01.alicdn.com/kf/Sf5614baa4ee04ae2bd405459fae88006R.jpg', true),
  (45, 'https://ae01.alicdn.com/kf/S73f5192940524aeb8c208115aae67b501.jpg', false),
  (45, 'https://ae01.alicdn.com/kf/S73f5192940524aeb8c208115aae67b501.jpg', false),
  (46, 'https://ae01.alicdn.com/kf/Scd9d921ccb034298addacc3db6c6144ak.jpg', true),
  (46, 'https://ae01.alicdn.com/kf/S0f6740df8ff74ec6bb9764e1c10d63feF.jpg', false),
  (46, 'https://ae01.alicdn.com/kf/S9a3a45833f4f426c94c72993a66dbf98k.jpg', false);


-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (24, 'Classic Sweatpant', 79000, 56200, 'Classic label embroidery', 'U.S.', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (47, 24, 3),
  (48, 24, 2);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (47, 1, 13),
  (47, 2, 20),
  (47, 3, 3),
  (48, 1, 5),
  (48, 2, 25),
  (48, 3, 30);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (47, 'https://ae01.alicdn.com/kf/Hfdb55003dd544eb1bf543ae00533c697R.jpg', true),
  (47, 'https://ae01.alicdn.com/kf/Hbfe52e9f530b4b6589dcf476f48c5f12I.png', false),
  (47, 'https://ae01.alicdn.com/kf/H78b70f8df2804ba2923a9620b6f430a6p.png', false),
  (48, 'https://ae01.alicdn.com/kf/H638e591932b34020b5ad2804ac2a5ff18.jpg', true),
  (48, 'https://ae01.alicdn.com/kf/Hbfe52e9f530b4b6589dcf476f48c5f12I.png', false),
  (48, 'https://ae01.alicdn.com/kf/H78b70f8df2804ba2923a9620b6f430a6p.png', false);


-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (25, 'Backwood Pants', 78000, 59600, 'Cotton 100%', 'China', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (49, 25, 2),
  (50, 25, 3);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (49, 1, 50),
  (49, 2, 30),
  (49, 3, 40),
  (50, 1, 30),
  (50, 2, 20),
  (50, 3, 70);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (49, 'https://ae01.alicdn.com/kf/H5e295791b4774380915e0baad91f30ceV.jpg', true),
  (49, 'https://ae01.alicdn.com/kf/Hbfe52e9f530b4b6589dcf476f48c5f12I.png', false),
  (49, 'https://ae01.alicdn.com/kf/H78b70f8df2804ba2923a9620b6f430a6p.png', false),
  (50, 'https://ae01.alicdn.com/kf/H26bb488f407d4084ad21f0550488e6f6R.jpg', true),
  (50, 'https://ae01.alicdn.com/kf/Hbfe52e9f530b4b6589dcf476f48c5f12I.png', false),
  (50, 'https://ae01.alicdn.com/kf/H78b70f8df2804ba2923a9620b6f430a6p.png', false);


-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (26, 'BasketBall Pants', 106000, 78300, 'Nylon 100%', 'U.S.', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (51, 26, 1),
  (52, 26, 3);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (51, 1, 10),
  (51, 2, 3),
  (51, 3, 40),
  (52, 1, 52),
  (52, 2, 2),
  (52, 3, 60);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (51, 'https://ae01.alicdn.com/kf/Hc9dc2eb161864165bddf9ae28e605facn.jpg', true),
  (51, 'https://ae01.alicdn.com/kf/H0e2ba028a207480e8b3d6d2f37786ca3H.jpg', false),
  (51, 'https://ae01.alicdn.com/kf/H8228f95f2ca34a9ba47291b4e16feec34.jpg', false),
  (52, 'https://ae01.alicdn.com/kf/H475520f5033e439bb6c343526dd688c7i.jpg', true),
  (52, 'https://ae01.alicdn.com/kf/Haccba05082f94db4ab4f9a2b6e5c4758u.jpg', false),
  (52, 'https://ae01.alicdn.com/kf/Haccba05082f94db4ab4f9a2b6e5c4758u.jpg', false);


-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (27, 'Cargo Pants', 94000, 73600, 'Nylon 100%', 'Vietnam', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (53, 27, 1),
  (54, 27, 3);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (53, 1, 13),
  (53, 2, 32),
  (53, 3, 4),
  (54, 1, 25),
  (54, 2, 27),
  (54, 3, 3);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (53, 'https://ae01.alicdn.com/kf/H6f6d423224ba4b2294bfcc7cfdd9b1c8w.jpg', true),
  (53, 'https://ae01.alicdn.com/kf/Ha1c6ff1a4b424a9c9e874b8242f0c562e.jpg', false),
  (53, 'https://ae01.alicdn.com/kf/Ha1c6ff1a4b424a9c9e874b8242f0c562e.jpg', false),
  (54, 'https://ae01.alicdn.com/kf/Hcd732c0917f94d8c93408c073f2b8178E.jpg', true),
  (54, 'https://ae01.alicdn.com/kf/Hf4490350e46747f5b58eadb420b454c5B.jpg', false),
  (54, 'https://ae01.alicdn.com/kf/Hf4490350e46747f5b58eadb420b454c5B.jpg', false);


-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (28, 'Animate Pants', 76000, 58000, 'Cotton 100%', 'Japan', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (55, 28, 2),
  (56, 28, 1);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (55, 1, 70),
  (55, 2, 30),
  (55, 3, 12),
  (56, 1, 8),
  (56, 2, 20),
  (56, 3, 50);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (55, 'https://ae01.alicdn.com/kf/Hcc0ce2578ff24c0389e2d1017d60062ah.jpg', true),
  (55, 'https://ae01.alicdn.com/kf/H98cc71413d1d4a41b3c159ca6872f067p.jpg', false),
  (55, 'https://ae01.alicdn.com/kf/H98cc71413d1d4a41b3c159ca6872f067p.jpg', false),
  (56, 'https://ae01.alicdn.com/kf/He2381013b4984aa5b2befd2dd4169505j.jpg', true),
  (56, 'https://ae01.alicdn.com/kf/He2219b46610b47079eb49f85a70f3541e.jpg', false),
  (56, 'https://ae01.alicdn.com/kf/H9fe1518d99774d9984d85a9d24ec239fl.jpg', false);


-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (29, 'Cargo Hip Pants', 79000, 59300, 'Design label', 'Japan', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (57, 29, 1),
  (58, 29, 3);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (57, 1, 10),
  (57, 2, 3),
  (57, 3, 40),
  (58, 1, 5),
  (58, 2, 20),
  (58, 3, 10);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (57, 'https://ae01.alicdn.com/kf/H8a6299079e5542ec9cda3482840333dc5.jpg', true),
  (57, 'https://ae01.alicdn.com/kf/H517a60ab3e064189b536311b288ab542Y.jpg', false),
  (57, 'https://ae01.alicdn.com/kf/He1e2e56a0016403b8512457ac910ac59m.jpg', false),
  (58, 'https://ae01.alicdn.com/kf/H876b6423b9a844f4bcbe1dd0794fb42e5.jpg', true),
  (58, 'https://ae01.alicdn.com/kf/H876b6423b9a844f4bcbe1dd0794fb42e5.jpg', false),
  (58, 'https://ae01.alicdn.com/kf/H876b6423b9a844f4bcbe1dd0794fb42e5.jpg', false);



-- insert products data
-- category_id 1: Outerwear 2:SweatShirts 3: Bottoms 4: Shoes
INSERT INTO
  products(id, name, price, discount_price, description, country, category_id, sales_count)
VALUES
  (30, 'Rose Pants', 67000, 45000, 'Polyester 83%, Cotton 17%', 'Vietnam', 3, 0);

-- insert product_details data
-- product_color_id 1: Black 2: Blue 3:Gray
-- 각 상품당 2개씩 골라서 넣으면 됩니다.
INSERT INTO
  product_details(id, product_id, product_color_id)
VALUES
  (59, 30, 2),
  (60, 30, 1);

-- insert details_sizes data
-- product_detail id 하나당 3개씩 만들면 됩니다. quantity는 모두 다른 값 넣어주세요.
INSERT INTO
  details_sizes(product_detail_id, product_size_id, quantity)
VALUES
  (59, 1, 10),
  (59, 2, 24),
  (59, 3, 43),
  (60, 1, 7),
  (60, 2, 23),
  (60, 3, 58);

-- insert product_images data
-- product_detail id 하나당 3개씩 만들면 됩니다.
INSERT INTO
  product_images(product_detail_id, image_url, is_main)
VALUES
  (59, 'https://ae01.alicdn.com/kf/H8c5c8fe5a35049b399cad06aff05ec8eV.jpg', true),
  (59, 'https://ae01.alicdn.com/kf/H7947a42334b947a481c797a44866fb82V.jpg', false),
  (59, 'https://ae01.alicdn.com/kf/H7947a42334b947a481c797a44866fb82V.jpg', false),
  (60, 'https://ae01.alicdn.com/kf/H0f966966ce6442db829315b22f553083A.jpg', true),
  (60, 'https://ae01.alicdn.com/kf/H927bb4ae6e2c4b469e281d2536707e677.jpg', false),
  (60, 'https://ae01.alicdn.com/kf/H927bb4ae6e2c4b469e281d2536707e677.jpg', false);

